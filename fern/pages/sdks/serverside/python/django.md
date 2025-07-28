---
title: Tesseral for Django
subtitle: Add B2B auth support to your Django app in just a few lines of code.
---

Tesseral's Django SDK lets you add authentication to your Python backend using Django.

The Tesseral Django SDK is open-source and available on
[GitHub](https://github.com/tesseral-labs/tesseral-sdk-django).

<Info>

When you're using the Tesseral Django SDK, you'll need to use a client-side
Tesseral SDK, such as the [Tesseral React
SDK](/docs/sdks/serverside/python/overview), on your frontend code.

</Info>

## Getting Started

Install the Tesseral Django SDK by running:

```bash
pip install tesseral-django
```

Then, in your Django settings, add `tesseral_django.middleware.AuthMiddleware`
to your `MIDDLEWARE` setting by editing your `settings.py` file:

```python
MIDDLEWARE = [
    # ...
    'tesseral_django.middleware.AuthMiddleware',  # add this entry
    # ...
]

TESSERAL_PUBLISHABLE_KEY = "publishable_key_..."
```

Replace `publishable_key_...` with your project's Publishable Key. You can find
it in the [API Keys
Settings](https://console.tesseral.com/project-settings/api-keys) of the
Tesseral Console.

The middleware handles parsing authentication tokens but does not enforce
authentication by default. To require authentication on specific views, use the
`@require_auth` decorator:

```python
from django.http import JsonResponse
from tesseral_django import require_auth, organization_id

@require_auth
def protected_view(request):
    org_id = organization_id(request)
    return JsonResponse({"organization": org_id})
```

Views decorated with `@require_auth` will return a `401 Unauthorized` response
for inauthentic requests.

## Accessing details about the authenticated request

The Tesseral SDK makes information about the current authenticated request
available through simple helper functions.

The Tesseral Django SDK stores request-local state on the Django request object. The
helper methods described in this section will throw an error if used outside the
context of a Django request.

### Getting the current Organization

To find out what Organization the request is for, use `organization_id(request)`:

```python
from tesseral_django import require_auth, organization_id

@require_auth
def my_view(request):
    org_id = organization_id(request)  # returns a string like "org_..."
```

This is the most common identifier you'll use in a B2B multitenant application.

### Getting the request's authenticated credentials

If your architecture forwards requests between internal services that need to
re-authenticate, use `credentials(request)`:

```python
from tesseral_django import require_auth, credentials

@require_auth
def my_view(request):
    creds = credentials(request)
```

Do not log or expose this value. You usually don't need to use this unless
you're building internal service-to-service calls.

### Getting details about the current User

To access more information about the authenticated User, use
`access_token_claims(request)`:

```python
from tesseral_django import require_auth, access_token_claims

@require_auth
def my_view(request):
    claims = access_token_claims(request)
    print("User email:", claims.user.email)
```

`access_token_claims` returns an
[`AccessTokenClaims`](https://github.com/tesseral-labs/tesseral-sdk-python/blob/master/src/tesseral/types/access_token_claims.py),
which contains details about the current Session ID, User, and Organization.

If the request if from an [API Key](/docs/features/managed-api-keys), then
`access_token_claims` will throw a `NotAnAccessTokenError`.

We recommend that you mostly use `organization_id(request)` in the vast majority of
your code; that is almost always the correct piece of information for most B2B
SaaS code should pay attention to. For more details, see [B2B
Multitenancy](/docs/features/b2b-multitenancy).
