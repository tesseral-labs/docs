---
title: Tesseral for Go
subtitle: Add B2B auth support to your Golang app in just a few lines of code.
---

Tesseral's Go SDK lets you add authentication to your Go backend code.

## Getting Started

Install the Tesseral Go SDK by running:

```bash
go get github.com/tesseral-labs/tesseral-sdk-go
```

Then go to where you run `http.ListenAndServe` in your code, and wrap that HTTP
handler with `auth.RequireAuth`:

```go
import "github.com/tesseral-labs/tesseral-sdk-go/auth"

// before
// http.ListenAndServe("...", server)

// after
http.ListenAndServe("...", auth.RequireAuth(
    server, 
    auth.WithPublishableKey("publishable_key_..."),
))
```

Replace `publishable_key_...` with your project's Publishable Key. You get can
your Publishable Key from the [API Keys
Settings](https://console.tesseral.com/project-settings/api-keys) settings in
the Tesseral Console.

Once you've added `auth.RequireAuth` to your server, all HTTP requests to your
server will automatically be authenticated. `auth.RequireAuth` blocks all
inauthentic requests from reaching your code. Inauthentic requests receive a
`401 Unauthorized` HTTP error.

## Accessing details about the authenticated request

`auth.RequireAuth` adds information about the current authenticated request to
the HTTP request's context. To access that context, make sure to use
`r.Context()` in your HTTP handlers:

```go
func(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()
    
    fmt.Println("you work for:", auth.OrganizationID(ctx))   
}
```

### Getting the current Organization

Anywhere your code wants to know what Organization the request is for, use
`auth.OrganizationID(ctx)`:

```go
fmt.Println("you work for:", auth.OrganizationID(ctx))
```

`auth.OrganizationID(ctx)` returns an Organization ID, a string beginning with
`org_...`.

### Getting the request's authenticated credentials

Anywhere your code wants to forward along the request's credentials, use
`authn.Credentials(ctx)`:

```go
fmt.Println("your request credentials are:", auth.Credentials(ctx))
```

Don't log the value of `auth.Credentials(ctx)`. Don't give out the value of
`auth.Credentials(ctx)` to others.

You typically only want to use `auth.Credentials(ctx)` when you have a
microservices architecture, and each service needs to re-authenticate the user's
request. If that isn't something you do, then you can ignore
`auth.Credentials(ctx)`.

### Getting details about the current User

You can get extra details about the request's authenticated User using
`auth.AccessTokenClaims(ctx)`:

```go
accessTokenClaims, err := auth.AccessTokenClaims(ctx)
if err != nil {
    return err
}

fmt.Println("your email is:", accessTokenClaims.User.Email)
```

`auth.AccessTokenClaims` returns an
[`AccessTokenClaims`](https://github.com/tesseral-labs/tesseral-sdk-go/blob/master/types.go#L12)
struct, which contains details about the current Session ID, User, and
Organization.

If the request if from an [API Key](/docs/features/managed-api-keys), then
`auth.AccessTokenClaims` will return an `ErrNotAnAccessToken` error.

We recommend that you mostly use `auth.OrganizationID(ctx)` in the vast majority
of your code; that is almost always the correct piece of information for most
B2B SaaS code should pay attention to. For more details, see [B2B
Multitenancy](/docs/features/b2b-multitenancy).
