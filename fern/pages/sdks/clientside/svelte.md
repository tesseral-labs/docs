---
title: Tesseral Svelte SDK
subtitle: Add B2B auth support to your clientside Svelte app in just a few lines of code.
---

<Tip>
    If this is your first time using the Tesseral Svelte SDK, we recommend following
    the [Tesseral Quickstart](/docs/quickstart).
</Tip>

Tesseral's Svelte SDK lets you add B2B auth support to your clientside Svelte app.

The Tesseral Svelte SDK is open-source and available on
[GitHub](https://github.com/tesseral-labs/tesseral-sdk-svelte).

## Getting Started

Install the Tesseral Svelte SDK by running:

```bash
npm install @tesseral/tesseral-svelte
```

Then, in your Svelte application, add a `TesseralProvider` at the root of your
Svelte application in your top-level `+layout.svelte` file:

```svelte {2,6,8}
<script lang="ts">
    import { TesseralProvider } from '@tesseral/tesseral-svelte';
    let { children } = $props();
</script>

<TesseralProvider publishableKey="publishable_key_...">
    {@render children()}
</TesseralProvider>
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

Once you've added `TesseralProvider`, all visitors to your Svelte app will
automatically be authenticated. Unauthenticated visitors are redirected to a
Tesseral-hosted login flow before being redirected back to your application.

## Accessing details about the authenticated user

The Tesseral Svelte SDK makes information about your authenticated user available
through a set of Svelte stores.

Tesseral's Svelte SDK stores will throw an error if used outside of a child
component of `TesseralProvider`.

### `getUser`

To get the current logged-in [User](/docs/concepts/users), call `getUser`:

```svelte
<script lang="ts">
    import { getUser } from '@tesseral/tesseral-svelte';

    let user = getUser();
</script>

<h1>Your verified email is {$user.email}, and your ID is {$user.id}!</h1>
```

### `getOrganization`

To get the [Organization](/docs/concepts/organizations) that the User works for,
call `getOrganization`:

```svelte
<script lang="ts">
    import { getOrganization } from '@tesseral/tesseral-svelte';

    let organization = getOrganization();
</script>

<h1>You work for {$organization.displayName} (org ID: {$organization.id})!</h1>
```

### `getLogout`

To force the current User to log out, call the callback returned from
`getLogout`:

```svelte
<script lang="ts">
    import { getLogout } from '@tesseral/tesseral-svelte';

    let logout = getLogout();
</script>

<button onclick={$logout}>Log out</button>
```

### `getUserSettingsUrl`

Tesseral automatically provides a [self-serve user settings
UI](/docs/features/self-serve-user-settings) to handle tasks like changing
emails, resetting passwords, and configuring multi-factor authentication.

You can get a link to that UI using `getUserSettingsUrl`:

```svelte
<script lang="ts">
    import { getUserSettingsUrl } from '@tesseral/tesseral-svelte';

    let userSettingsUrl = getUserSettingsUrl();
</script>

<a href={$userSettingsUrl}>User Settings</a>
```

### `getOrganizationSettingsUrl`

Tesseral automatically provides a [self-serve organization settings
UI](/docs/features/self-serve-organization-settings) to handle tasks like
managing collaborators, creating and revoking user invites, and customizing
login methods.

You can get a link to that UI using `getOrganizationSettingsUrl`:

```svelte
<script lang="ts">
    import { getOrganizationSettingsUrl } from '@tesseral/tesseral-svelte';

    let organizationSettingsUrl = getOrganizationSettingsUrl();
</script>

<a href={$organizationSettingsUrl}>Organization Settings</a>
```

### `getAccessToken`

<Info>

    Most folks never need to use `getAccessToken`, because Tesseral automatically
    sets an authentication cookie on your visitor's browsers.

</Info>

To directly access the User's access token, call `getAccessToken`:

```svelte
<script lang="ts">
    import { getAccessToken } from '@tesseral/tesseral-svelte';

    let accessToken = getAccessToken();
    // returns an access token beginning with "eyJ..."
    // do something with $accessToken...
</script>
```

### `getHasPermission`

<Info>
  To use `getHasPermission`, must first configure [Role-Based Access
  Control](/docs/features/role-based-access-control) for your Project.
</Info>

To check if the current user has a specific permission, use `getHasPermission`:

```svelte
<script lang="ts">
    import { getHasPermission } from '@tesseral/tesseral-svelte';

    let hasPermission = getHasPermission();
</script>

{#if $hasPermission('admin.users.read')}
    <p>You have permission to view users</p>
{/if}
```

### `getFrontendApiClient`

To access the [Tesseral Frontend
API](/docs/frontend-api-reference/tesseral-frontend-api) client for advanced
operations, use `getFrontendApiClient`:

```svelte
<script lang="ts">
    import { getFrontendApiClient } from '@tesseral/tesseral-svelte';

    let frontendApiClient = getFrontendApiClient();
</script>

{#await $frontendApiClient.me.whoami({})}
    <p>Loading...</p>
{:then response}
    <pre>{JSON.stringify(response, null, 2)}</pre>
{/await}
```

## Advanced Usage

Tesseral provides polished, self-serve UIs for user and organization settings on
your behalf, which you can redirect your users to using `getUserSettingsUrl` and
`getOrganizationSettingsUrl`.

Everything those prebuilt UIs do, you can also do from your own clientside code.
Doing so is an advanced feature, and is not required.

For details on how to do this, see the documentation for the [Tesseral Frontend
API](/docs/frontend-api-reference).
