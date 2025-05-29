---
title: Tesseral for Next.js
subtitle: Add B2B auth support to your Next.js app in just a few lines of code.
---

Tesseral's Next.js SDK lets you add authentication to your Next.js application.

## Getting Started

<Steps>

  <Step title="Sign up for Tesseral">
    Sign up for Tesseral at https://console.tesseral.com and create your project.

    When signing up, you'll be asked for your development URL. Choose
    `http://localhost:3000`.
  </Step>

  <Step title="Install `@tesseral/tesseral-nextjs`">
    In your Next.js codebase, add `@tesseral/tesseral-nextjs` to your project:

    ```bash
    npm install @tesseral/tesseral-nextjs
    ```
  </Step>

  <Step title="Add `NEXT_PUBLIC_TESSERAL_PUBLISHABLE_KEY` to your `.env`">
    Add the following line to your `.env` file:

    ```text
    NEXT_PUBLIC_TESSERAL_PUBLISHABLE_KEY=publishable_key_...
    ```

    Replace `publishable_key_...` with your project's Publishable Key. You get can
    your Publishable Key from the [API Keys
    Settings](https://console.tesseral.com/project-settings/api-keys) settings in
    the Tesseral Console.
  </Step>

  <Step title="Add `authMiddleware` to your `middleware.ts`">
    Create a `middleware.ts` (or `src/middleware.ts` if you're using the `src`
    directory) and make its contents be:

    ```ts
    import { NextRequest } from "next/server";
    import { authMiddleware } from "../src/middleware";
    
    export default authMiddleware;
    
    export const config = {
      matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
      ],
    };
    ```
  </Step>

  <Step title="Add `TesseralProvider` to your root layout">
    Go to `app/layout.tsx` (or `src/app/layout.tsx` if you use the `src` directory)
    and add `TesseralProvider`:

    ```tsx
    import { TesseralProvider } from "../../src/serverside";
    
    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <body>
            <TesseralProvider>
              {children}
            </TesseralProvider>
          </body>
        </html>
      );
    }
    ```

    `TesseralProvider` will redirect users to log in if they aren't already. If your
    Next.js app serves both public and non-public pages, then add `TesseralProvider`
    at the layout for your non-public pages instead.
  </Step>
</Steps>

You've now added Tesseral to your Next.js application! From here, you can add
auth checks to your:

* [Server Components](#server-components-rscs)
* [Client Components](#client-components)
* [Route Handlers](#route-handlers)
* [Server Actions](#server-actions)

## Server Components (RSCs)

In Next.js
[layouts](https://nextjs.org/docs/app/api-reference/file-conventions/layout) and
[pages](https://nextjs.org/docs/app/api-reference/file-conventions/page), you
can get the current [User](/docs/concepts/users), and the
[Organization](/docs/concepts/organizations) they work for, with [`await
getUser()`](#getuser) and [`await getOrganization()`](#getorganization).

### `getUser`

To get the current [User](/docs/concepts/users) from a Server Component (RSC),
use `await getUser()`:

```tsx
import { getUser } from "@tesseral/tesseral-nextjs/serverside";

export default async function Page() {
  const { id, email, displayName, profilePictureUrl } = await getUser();
  
  return (
    // ...
  )
}
```

### `getOrganization`

To get the current [Organization](/docs/concepts/organizations) from a Server
Component (RSC), use `await getOrganization()`:

```tsx
import { getOrganization } from "@tesseral/tesseral-nextjs/serverside";

export default async function Page() {
  const { id, displayName } = await getOrganization();
  
  return (
    // ...
  )
}
```

### `getUserSettingsUrl`

Tesseral automatically provides a [self-serve user settings
UI](/docs/features/self-serve-user-settings) to handle tasks like changing
emails, resetting passwords, and configuring multi-factor authentication.

You can get a link to that UI using `getUserSettingsUrl`:

```tsx
import { getUserSettingsUrl } from "@tesseral/tesseral-nextjs/serverside";

export default async function Page() {
  const userSettingsUrl = await getUserSettingsUrl();

  return (
    <a href={userSettingsUrl}>User Settings</a>
  );
}
```

### `getOrganizationSettingsUrl`

Tesseral automatically provides a [self-serve organization settings
UI](/docs/features/self-serve-organization-settings) to handle tasks like
managing collaborators, creating and revoking user invites, and customizing
login methods.

You can get a link to that UI using `getOrganizationSettingsUrl`:

```tsx
import { getOrganizationSettingsUrl } from "@tesseral/tesseral-nextjs/serverside";

export default async function Page() {
  const organizationSettingsUrl = await getOrganizationSettingsUrl();

  return (
    <a href={organizationSettingsUrl}>Organization Settings</a>
  );
}
```

## Client Components

In Next.js [Client
Components](https://nextjs.org/docs/app/getting-started/server-and-client-components#using-client-components),
you can get the current [User](/docs/concepts/users), and the
[Organization](/docs/concepts/organizations) they work for, with
[`useUser()`](#useuser) and [`useOrganization()`](#useorganization).

### `useUser`

To get the current [User](/docs/concepts/users) from a Client Component, use the
`useUser()` hook:

```tsx
"use client";

import { useUser } from "@tesseral/tesseral-nextjs/clientside";

export default function ClientComponent() {
  const { id, email, displayName, profilePictureUrl } = useUser();
  
  return (
    // ...
  )
}
```

### `useOrganization`

To get the current [Organization](/docs/concepts/organizations) from a Client
Component, use the `useOrganization()` hook:

```tsx
"use client";

import { useOrganization } from "@tesseral/tesseral-nextjs/clientside";

export default function ClientComponent() {
  const { id, displayName } = useOrganization();
  
  return (
    // ...
  )
}
```

### `useHasPermission`

<Info>
  To use `useHasPermission`, you'll first need to set up [Role-Based Access
  Control](/docs/features/role-based-access-control). 
</Info>

To check whether a user has permission to do an
[Action](/docs/features/role-based-access-control#actions) from a Client
Component, use `useHasPermission`:

```tsx
import { useHasPermission } from "@tesseral/tesseral-nextjs/clientside";

export default function ClientComponent() {
  const hasPermission = useHasPermission();

  return (
    <Button disabled={!hasPermission("acme.expense_reports.approve")}>
      Approve Expense Report
    </Button>
  )
}
```

`hasPermission` is a function that takes a `string` and returns a `boolean`.

<Tip>
  `useHasPermission` is only for "look before you leap" use-cases. Only
  server-side code can ultimately *enforce* permissions.
  
  To enforce permission checks from the server, see [`hasPermission` from `await
  auth()`](#checking-the-requesters-permissions).
</Tip>

### `useLogout`

To force the current [User](/docs/concepts/users) to log out from a Client Component, use the `useLogout()` hook:

```tsx
"use client";

import { useLogout } from "@tesseral/tesseral-nextjs/clientside";

export default function ClientComponent() {
  const logout = useLogout();

  return (
    <button onClick={logout}>Log out</button>
  );
}
```

### `useUserSettingsUrl`

Tesseral automatically provides a [self-serve user settings
UI](/docs/features/self-serve-user-settings) to handle tasks like changing
emails, resetting passwords, and configuring multi-factor authentication.

You can get a link to that UI using `useUserSettingsUrl`:

```tsx
"use client";

import { useUserSettingsUrl } from "@tesseral/tesseral-nextjs/clientside";

export default function ClientComponent() {
  const userSettingsUrl = useUserSettingsUrl();

  return (
    <a href={userSettingsUrl}>User Settings</a>
  );
}
```

### `useOrganizationSettingsUrl`

Tesseral automatically provides a [self-serve organization settings
UI](/docs/features/self-serve-organization-settings) to handle tasks like
managing collaborators, creating and revoking user invites, and customizing
login methods.

You can get a link to that UI using `useOrganizationSettingsUrl`:

```tsx
"use client";

import { useOrganizationSettingsUrl } from "@tesseral/tesseral-nextjs/clientside";

export default function ClientComponent() {
  const organizationSettingsUrl = useOrganizationSettingsUrl();

  return (
    <a href={organizationSettingsUrl}>Organization Settings</a>
  );
}
```

## Route Handlers

To get authentication details about the current request in a [Route
Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers),
call [`await auth()`](#using-await-auth):

```tsx
import { auth } from "@tesseral/tesseral-nextjs/serverside";

export async function GET(request: Request) {
  const { organizationId, hasPermission } = await auth({ or: "return_404" });
  // ...
}
```

## Server Actions

To get authentication details about the current request in a [Server
Action](https://nextjs.org/docs/app/building-your-application/routing/route-handlers),
you can use the same methods as in [Server Components
(RSCs)](#auth-in-server-components-rscs):

<Tabs>
  <Tab title="actions.ts">
    ```ts
    "use server";

    import { getUser } from "@tesseral/tesseral-nextjs/serverside";
    
    export async function action() {
      const user = await getUser();
      // ...
    }
    ```
  </Tab>

  <Tab title="page.tsx">
    ```tsx
    import { getUser } from "@tesseral/tesseral-nextjs/serverside";

    export default function Page() {
      // Server Action
      async function create() {
        "use server";
        const user = await getUser();

        // ...
      }
    
    // ...
    }
    ```
  </Tab>
</Tabs>

## Using `await auth()`

The `auth()` function from Tesseral's Next.js SDK works with both
[Users](/docs/concepts/users) and [API Keys](/docs/features/managed-api-keys).
That's why `auth()` is recommended for [Next.js Route
Handlers](#route-handlers). You should also use `auth()` from code that
gets called from both Server Components and Route Handlers.

### `auth()` parameters

`auth()` takes one parameter, called `or`. `or` controls what happens if a
request is not properly authenticated. It has three possible values:

* `await auth({ or: "throw" })` will throw a `AuthError` if the request is not
  properly authenticated. Use this if you want to have different behavior based
  on authenticated vs unauthenticated requests, using `try` / `catch`.

* `await auth({ or: "redirect" })` will redirect to the login page if the
  request is not properly authenticated. Use this for pages that are only meant
  to be used Users from their web browser.

* `await auth({ or "return_404" })` will call Next.js's
  [`notFound()`](https://nextjs.org/docs/app/api-reference/functions/not-found)
  if the request is not properly authenticated. Use this if a 404 is the
  appropriate response for unauthenticated requests.

In all cases, you can always safely
[destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
the return value of `await auth()`.

### `await auth()` return value

`await auth()` returns an object with properties you can destructure:

```ts
import { auth } from "@tesseral/tesseral-nextjs/serverside";

const {
  organizationId,
  credentialsType,
  accessTokenClaims,
  credentials,
  hasPermission,
} = await auth({ or: "throw" });
```

#### Getting the current Organization

To access the Organization the request is for from `await auth()`, use the
`organizationId` property:

```ts
import { auth } from "@tesseral/tesseral-nextjs/serverside";

const { organizationId } = await auth({ or: "throw" }); // returns a string like "org_..."
```

This is the most common identifier you'll use in a B2B SaaS application.

#### Getting the request's authenticated credentials

Anywhere your code wants to forward along the request's credentials, use
`credentials`:

```ts
import { auth } from "@tesseral/tesseral-nextjs/serverside";

const { credentials } = await auth({ or: "throw" });
```

Do not log or expose this value. You usually don't need to use this unless
you're building internal service-to-service calls.

#### Getting the type of credentials used

The `credentialsType` property is a string indicating how the request was
authenticated. It will either be:

* `access_token` if the request is from a [User](/docs/concepts/users).
* `api_key` if the request is from an [API Key](/docs/features/managed-api-keys).

```ts
import { auth } from "@tesseral/tesseral-nextjs/serverside";

const { credentialsType } = await auth({ or: "throw" });
if (credentialsType === "access_token") {
  // Handle logged-in user request
} else if (credentialsType === "api_key") {
  // Handle API key request
}
```

#### Getting details about the current User

If the request is from a [User](/docs/concepts/users), then `accessTokenClaims`
will contain details about that User. If the request is from an [API
Key](/docs/features/managed-api-keys), then `accessTokenClaims` will be
`undefined`.

```ts
import { auth } from "@tesseral/tesseral-nextjs/serverside";

const { accessTokenClaims } = await auth({ or: "throw" });
console.log(accessTokenClaims?.user?.email);
```

We recommend that you mostly use
[`organizationId`](#getting-the-current-organization) in the vast majority of
your code; that is almost always the correct piece of information for most B2B
SaaS code should pay attention to. For more details, see [B2B
Multitenancy](/docs/features/b2b-multitenancy).

#### Checking the requester's permissions

<Info>
  To use `hasPermission`, you'll first need to set up [Role-Based Access
  Control](/docs/features/role-based-access-control). 
</Info>

To check whether a user has permission to do an
[Action](/docs/features/role-based-access-control#actions), use `hasPermission`:

```ts
import { auth } from "@tesseral/tesseral-nextjs/serverside";

const { hasPermission } = await auth({ or: "throw" });
if (!hasPermission("acme.expense_reports.approve")) {
  throw new AccessDeniedError();
}
```

`hasPermission` is a function that takes a `string` and returns a `boolean`.
