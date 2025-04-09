---
title: Tesseral React SDK
subtitle: Add B2B auth support to your clientside React app in just a few lines of code.
---

<Tip>
    If this is your first time using the Tesseral React SDK, we recommend following
    the [Tesseral Quickstart](/docs/quickstart).
</Tip>

Tesseral's React SDK lets you add B2B auth support to your clientside React app.

## Getting Started

Install the Tesseral React SDK by running:

```bash
npm install @tesseral/tesseral-react
```

Then, in your React application, add a `TesseralProvider` at the root of your
React application:

```typescript {7,9}
import { createRoot } from "react-dom/client";
import { TesseralProvider } from "@tesseral/tesseral-react";

const root = createRoot(...);
root.render(
  // see below for how to get your publishableKey
  <TesseralProvider publishableKey="publishable_key_...">
    <App />
  </TesseralProvider>
);
```

Replace `publishable_key_...` with your project's Publishable Key. You can find
it in the [API Keys
Settings](https://console.tesseral.com/project-settings/api-keys) of the
Tesseral Console.

<Info>
    You'll need to use a separate Publishable Key for development and production.
    It's up to you how to pass a different `publishableKey` for dev vs prod.
    
    In development, make sure you're using a Publishable Key that has ["Dev
    Mode"](/docs/concepts/publishable-keys#dev-mode) enabled.
</Info>

Once you've added `TesseralProvider`, all visitors to your React app will
automatically be authenticated. Unauthenticated visitors are redirected to a
Tesseral-hosted login flow before being redirected back to your application.

## Accessing details about the authenticated user

The Tesseral React SDK makes information about your authenticated user available
through a set of React hooks.

Tesseral's React SDK hooks will throw an error if used outside of a child
component of `TesseralProvider`.

### `useUser`

To get the current logged-in [User](/docs/concepts/users), call `useUser`:

```typescript
import { useUser } from "@tesseral/tesseral-react";

const Example = () => {
  const { id, email } = useUser();

  return <h1>Your verified email is {email}, and your ID is {id}!</h1>;
}
```

### `useOrganization`

To get the [Organization](/docs/concepts/organizations) that the User works for,
call `useOrganization`:

```typescript
import { useOrganization } from "@tesseral/tesseral-react";

const Example = () => {
  const { id, displayName } = useOrganization();

  return <h1>You work for {displayName} (org ID: {id})!</h1>;
}
```

### `useLogout`

To force the current User to log out, call the callback returned from
`useLogout`:

```typescript
import { useLogout } from "@tesseral/tesseral-react";

const Example = () => {
    const logout = useLogout();

    return <button onClick={logout}>Log out</button>;
}
```

### `useUserSettingsUrl`

Tesseral automatically provides a [self-serve user settings
UI](/docs/features/self-serve-user-settings) to handle tasks like changing
emails, resetting passwords, and configuring multi-factor authentication.

You can get a link to that UI using `useUserSettingsUrl`:

```typescript
import { useUserSettingsUrl } from "@tesseral/tesseral-react";

const Example = () => {
  const userSettingsUrl = useUserSettingsUrl();

  return <a href={userSettingsUrl}>User Settings</a>;
}
```

### `useOrganizationSettingsUrl`

Tesseral automatically provides a [self-serve organization settings
UI](/docs/features/self-serve-organization-settings) to handle tasks like
managing collaborators, creating and revoking user invites, and customizing
login methods.

You can get a link to that UI using `useOrganizationSettingsUrl`:

```typescript
import { useOrganizationSettingsUrl } from "@tesseral/tesseral-react";

const Example = () => {
  const organizationSettingsUrl = useOrganizationSettingsUrl();

  return <a href={organizationSettingsUrl}>Organization Settings</a>;
}
```

### `useAccessToken`

<Info>

    Most folks never need to use `useAccessToken`, because Tesseral automatically
    sets an authentication cookie on your visitor's browsers.

</Info>

To directly access the User's access token, call `useAccessToken`:

```typescript
import { useAccessToken } from "@tesseral/tesseral-react";

const Example = () => {
  // returns an access token beginning with "eyJ..."
  const accessToken = useAccessToken();
  // do something with accessToken...
}
```

## Advanced Usage

Tesseral provides polished, self-serve UIs for user and organization settings on
your behalf, which you can redirect your users to using `useUserSettingsUrl` and
`useOrganizationSettingsUrl`.

Everything those prebuilt UIs do, you can also do from your own clientside code.
Doing so is an advanced feature, and is not required.

For details on how to do this, see the documentation for the [Tesseral Frontend
API](/docs/frontend-api-reference).
