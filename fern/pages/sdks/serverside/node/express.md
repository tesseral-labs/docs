---
title: Tesseral for Express.js
subtitle: Add B2B auth support to your Express.js app in just a few lines of code.
---

Tesseral's Express SDK lets you add authentication to your Express.js backend.

## Getting Started

Install the Tesseral Express SDK by running:

```bash
npm install @tesseral/tesseral-express
```

Then, in the file where you create your Express server, apply the `requireAuth` middleware:

```ts
import express from "express";
import { requireAuth } from "@tesseral/tesseral-express";

const app = express();

// before
// app.listen(...)

// after
app.use(
  requireAuth({
    publishableKey: "publishable_key_...",
  }),
);

app.listen(8080, "localhost", () => {
  console.log("Listening on http://localhost:8080");
});
```

Replace `publishable_key_...` with your project's Publishable Key. You can find
it in the [API Keys
Settings](https://console.tesseral.com/project-settings/api-keys) of the
Tesseral Console.

Once you've added `requireAuth`, all HTTP requests to your server will be
authenticated. Inauthentic requests will receive a `401 Unauthorized` error
before they reach your route handlers.

## Accessing details about the authenticated request

The Tesseral middleware attaches information about the authenticated request
directly to `req`. Use the helper functions from `@tesseral/tesseral-express` to
access this data.

```ts
import { organizationId } from "@tesseral/tesseral-express";

app.get("/", (req, res) => {
  console.log(`you work for ${organizationId(req)}`)
});
```

### Getting the current Organization

To access the Organization the request is for, use `organizationId(req)`:

```ts
import { organizationId } from "@tesseral/tesseral-express";

organizationId(req); // returns a string like "org_..."
```

This is the most common identifier you'll use in a B2B SaaS application.

### Getting the request's authenticated credentials

Anywhere your code wants to forward along the request's credentials, use
`credentials(req)`:

```ts
import { credentials } from "@tesseral/tesseral-express";

credentials(req);
```

Do not log or expose this value. You usually don't need to use this unless
you're building internal service-to-service calls.

### Getting details about the current User

To access extra details about the authenticated User, use
`accessTokenClaims(req)`:

```ts
import { accessTokenClaims } from "@tesseral/tesseral-express";

const claims = accessTokenClaims(req);

console.log("User email:", claims.user.email);
```

`accessTokenClaims` returns an
[`AccessTokenClaims`](https://github.com/tesseral-labs/tesseral-sdk-node/blob/master/src/api/types/AccessTokenClaims.ts),
which contains details about the current Session ID, User, and Organization.

A future version of the Tesseral SDK will add support for API Keys-as-a-Service.
In the future, `accessTokenClaims` may return an error if the request isn't from
one of your Users, but instead from one of their API Keys.

We recommend that you mostly use `organizationId(req)` in the vast majority of
your code; that is almost always the correct piece of information for most B2B
SaaS code should pay attention to. For more details, see [B2B
Multitenancy](/docs/features/b2b-multitenancy).
