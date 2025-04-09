---
title: Log in with Authenticator App
subtitle: Add Log in with Authenticator App support to your product without any code
---

Adding Log in with Authenticator App to your Tesseral [Project](/docs/concepts/projects)
gives your customers the ability to configure Authenticator Apps as a secondary factor.

For more information on secondary factors, see ["Multifactor Authentication"](/docs/features/multifactor-authentication-mfa).

## Configure Log in with Authenticator App

To enable Log in with Authenticator App, visit the Tesseral Console and go to your
[Project Settings](https://console.tesseral.com/project-settings). Go to the
section titled "Login Methods" and click "Edit".

Enable the "Log in with Authenticator App" option and click "Save".

Enabling "Log in with Authenticator App" gives your customers the option to register
Authenticator Apps. Each customer can configure their
[Organization](/docs/concepts/organizations) to [Require MFA](/docs/features/multifactor-authentication-mfa),
which makes Authenticator Apps go from being optional to being required.

## Customer Configuration

Your customer does not need to take any steps to use Log in with Authenticator App. All
new customer [Organizations](/docs/concepts/organizations) support Log in with
Authenticator App once you enable Log in with Authenticator App on your
[Project](/docs/concepts/projects).

Some customers may want to disable Log in with Authenticator App. They can do this
self-serve from their [Self-Serve Organization Settings](/docs/features/self-serve-organization-settings),
or you can do it on their behalf by:

1. Going to your [Project's Organizations](https://console.tesseral.com/organizations) in the Tesseral Console.
2. Choosing your customer's organization from the list.
3. Under the Organization's "Details" section, click "Edit".
4. Under "Login settings", switch "Log in with Authenticator App" off.

Disabling Log in with Authenticator App on an Organization only disables Log in with
Authenticator App for that specific Organization; all of your other customers can continue
to use Log in with Authenticator App.
