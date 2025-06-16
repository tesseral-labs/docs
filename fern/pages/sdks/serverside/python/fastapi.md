---
title: Tesseral for FastAPI
subtitle: Add B2B auth support to your FastAPI app in just a few lines of code.
---

Tesseral's FastAPI SDK lets you add authentication to your Python backend using FastAPI.

The Tesseral FastAPI SDK is open-source and available on
[GitHub](https://github.com/tesseral-labs/tesseral-sdk-fastapi).

## Getting Started

Install the Tesseral FastAPI SDK by running:

```bash
pip install tesseral-fastapi
```

Then, in your FastAPI application, add the `RequireAuthMiddleware` to your app:

```python
from fastapi import FastAPI
from tesseral_fastapi import RequireAuthMiddleware

app = FastAPI()

app.add_middleware(
    RequireAuthMiddleware,
    publishable_key="publishable_key_...",
)
```

Replace `publishable_key_...` with your project's Publishable Key. You can find
it in the [API Keys
Settings](https://console.tesseral.com/project-settings/api-keys) of the
Tesseral Console.

Once you've added `RequireAuthMiddleware`, all HTTP requests to your server will
automatically be authenticated. Inauthentic requests receive a `401
Unauthorized` response before reaching your route handlers.

## Accessing details about the authenticated request

The Tesseral SDK makes information about the current authenticated request
available through the `Auth` object and dependency injection.

### Getting the Auth object

To access authentication information in your route handlers, use the `get_auth`
dependency:

```python
from fastapi import Depends
from tesseral_fastapi import Auth, get_auth

@app.get("/")
async def read_root(auth: Auth = Depends(get_auth)):
    # Now you can use auth to access authentication details
    return {"organization_id": auth.organization_id()}
```

See FastAPI's documentation on [dependency
injection](https://fastapi.tiangolo.com/tutorial/dependencies/) and
[`fastapi.Depends`](https://fastapi.tiangolo.com/reference/dependencies/) for
more information on this FastAPI pattern.

### Getting the current Organization

To find out what Organization the request is for, use `organization_id()`:

```python
from fastapi import FastAPI, Depends
from tesseral_fastapi import Auth, get_auth

@app.get("/organizations/me")
async def get_organization(auth: Auth = Depends(get_auth)):
    org_id = auth.organization_id()  # returns a string like "org_..."
    return {"organization_id": org_id}
```

This is the most common identifier you'll use in a B2B multitenant application.

### Getting the request's authenticated credentials

If your architecture forwards requests between internal services that need to
re-authenticate, use `credentials()`:

```python
from fastapi import FastAPI, Depends
from tesseral_fastapi import Auth, get_auth

@app.get("/credentials")
async def get_credentials(auth: Auth = Depends(get_auth)):
    creds = auth.credentials()
    # Do not log or expose this value
    # Use it only for internal service-to-service calls
    return {"message": "Credentials retrieved"}
```

Do not log or expose this value. You usually don't need to use this unless
you're building internal service-to-service calls.

### Getting details about the current User

To access more information about the authenticated User, use
`access_token_claims()`:

```python
from fastapi import FastAPI, Depends
from tesseral_fastapi import Auth, get_auth, NotAnAccessTokenError

@app.get("/user")
async def get_user(auth: Auth = Depends(get_auth)):
    try:
        claims = auth.access_token_claims()
        return {"user_email": claims.user.email}
    except NotAnAccessTokenError:
        return {"message": "Request authenticated with API key, not access token"}
```

`access_token_claims` returns an
[`AccessTokenClaims`](https://github.com/tesseral-labs/tesseral-sdk-python/blob/master/src/tesseral/types/access_token_claims.py),
which contains details about the current Session ID, User, and Organization.

If the request is from an [API Key](/docs/features/managed-api-keys), then
`access_token_claims` will throw a `NotAnAccessTokenError`.

We recommend that you mostly use `organization_id()` in the vast majority of
your code; that is almost always the correct piece of information for most B2B
SaaS code should pay attention to. For more details, see [B2B
Multitenancy](/docs/features/b2b-multitenancy).
