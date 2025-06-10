---
title: Tesseral for Axum
subtitle: Add B2B auth support to your Axum app in just a few lines of code.
---

Tesseral's Axum SDK lets you add authentication to your Rust Axum backend.

## Getting Started

Add the Tesseral Axum SDK to your Cargo.toml:

```bash
cargo add tesseral-axum
```

Then, in the file where you create your Axum router, apply the `require_auth`
middleware:

```rust
use axum::{Router, routing::get};
use tesseral_axum::{Auth, Authenticator, require_auth};

// Create an authenticator with your publishable key
let authenticator = Authenticator::new("publishable_key_...".into());

// Apply the authentication middleware to your router
let app: Router = Router::new()
    .route("/", get(handler))
    .layer(require_auth(authenticator));

// Your handler can now access the Auth object
async fn handler(auth: Auth) -> String {
    format!("You work for {}", auth.organization_id())
}
```

Replace `publishable_key_...` with your project's Publishable Key. You can find
it in the [API Keys
Settings](https://console.tesseral.com/project-settings/api-keys) of the
Tesseral Console.

Once you've added `require_auth`, all HTTP requests to your server will be
authenticated. Inauthentic requests will receive a `401 Unauthorized` error
before they reach your route handlers.

## Accessing details about the authenticated request

The Tesseral middleware adds an `Auth` object to the request extensions. You can
extract this object in your handlers by adding it as a parameter:

```rust
async fn handler(auth: Auth) -> String {
    format!("You work for {}", auth.organization_id())
}
```

### Getting the current Organization

To access the Organization the request is for, use `auth.organization_id()`:

```rust
async fn handler(auth: Auth) -> String {
    let org_id = auth.organization_id();  // returns a string like "org_..."
    format!("You work for {}", org_id)
}
```

This is the most common identifier you'll use in a B2B SaaS application.

### Getting the request's authenticated credentials

If you need to forward along the request's credentials, use `auth.credentials()`:

```rust
async fn handler(auth: Auth) -> String {
    let credentials = auth.credentials();
    // Use credentials for service-to-service authentication
    // ...
}
```

Do not log or expose this value. You usually don't need to use this unless
you're building internal service-to-service calls.

### Getting details about the current User

To access extra details about the authenticated User, use `auth.access_token_claims()`:

```rust
async fn handler(auth: Auth) -> String {
    if let Some(access_token_claims) = auth.access_token_claims() {
        dbg!(access_token_claims.user.email);
    }
}
```

If the request is from an [API Key](/docs/features/managed-api-keys), then
`auth.access_token_claims()` is `None`.

We recommend that you mostly use `auth.organization_id()` in the vast majority
of your code; that is almost always the correct piece of information for most
B2B SaaS code should pay attention to. For more details, see [B2B
Multitenancy](/docs/features/b2b-multitenancy).
