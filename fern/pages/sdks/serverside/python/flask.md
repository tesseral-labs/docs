---
title: Tesseral for Flask
subtitle: Add B2B auth support to your Flask app in just a few lines of code.
---

Tesseral's Flask SDK lets you add authentication to your Python backend using Flask.

## Getting Started

Install the Tesseral Flask SDK by running:

```bash
pip install tesseral-flask
```

Then, in your Flask application, add the `require_auth` middleware before each request:

```python
from flask import Flask
from tesseral_flask import require_auth

app = Flask(__name__)

app.before_request(require_auth(publishable_key="publishable_key_..."))
```

Replace `publishable_key_...` with your project's Publishable Key. You can find
it in the [API Keys
Settings](https://console.tesseral.com/project-settings/api-keys) of the
Tesseral Console.

Once you've added `require_auth`, all HTTP requests to your server will
automatically be authenticated. Inauthentic requests receive a `401
Unauthorized` response before reaching your route handlers.

## Accessing details about the authenticated request

The Tesseral SDK makes information about the current authenticated request
available through simple helper functions.

The Tesseral Flask SDK uses Flask's `g` object to store request-local state. The
helper methods described in this section will throw an error if used outside the
context of a Flask context.

### Getting the current Organization

To find out what Organization the request is for, use `organization_id()`:

```python
from tesseral_flask import organization_id

organization_id()  # returns a string like "org_..."
```

This is the most common identifier you'll use in a B2B multitenant application.

### Getting the request's authenticated credentials

If your architecture forwards requests between internal services that need to
re-authenticate, use `credentials()`:

```python
from tesseral_flask import credentials

credentials()
```

Do not log or expose this value. You usually don't need to use this unless
you're building internal service-to-service calls.

### Getting details about the current User

To access more information about the authenticated User, use
`access_token_claims()`:

```python
from tesseral_flask import access_token_claims

claims = access_token_claims()
print("User email:", claims.user.email)
```

`access_token_claims` returns an
[`AccessTokenClaims`](https://github.com/tesseral-labs/tesseral-sdk-python/blob/master/src/tesseral/types/access_token_claims.py),
which contains details about the current Session ID, User, and Organization.

If the request if from an [API Key](/docs/features/managed-api-keys), then
`access_token_claims` will throw a `NotAnAccessTokenError`.

We recommend that you mostly use `organization_id()` in the vast majority of
your code; that is almost always the correct piece of information for most B2B
SaaS code should pay attention to. For more details, see [B2B
Multitenancy](/docs/features/b2b-multitenancy).
