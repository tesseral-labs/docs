---
title: Log in with GitHub
subtitle: Add Log in with GitHub support to your product without any code
---

Adding Log in with GitHub to your Tesseral [Project](/docs/concepts/projects)
gives your customers the ability to use their Google account to log into your
product. Configuring Log in with Google doesn't require any code.

## Configure Log in with GitHub

To enable Log in with GitHub support to your product, go into the Tesseral
Console and go to your [Project
Settings](https://console.tesseral.com/project-settings). Go to the section
titled "GitHub settings" and click "Edit".

You're now prompted to input a "GitHub OAuth Client ID" and "GitHub OAuth Client
Secret". These are settings you'll get from GitHub. Here's how you get these
settings from GitHub:

1. Visit your [GitHub Developer Settings](https://github.com/settings/developers).

2. Choose an existing OAuth app or create a new one.

3. Set the **Authorization callback URL** to:

   ```text
   https://VAULT/github-oauth-callback
   ```

   Where `VAULT` is your Project's Vault Domain. You can find this under "
   Current
   Vault Domain" in your Project's [Vault Domain
   Settings](https://console.tesseral.com/project-settings/vault-domain-settings).

4. Click the "Generate a new client secret" button.

Input this **Client ID** and **Client Secret** into the Tesseral Console. Make
sure to switch on "Log in with GitHub" as well.

You've now enabled Log in with GitHub for your Project. Your customers can now
use Log in with GitHub to log into your product. You don't need to make any code
changes.

You can later disable Log in with GitHub at any time.

## Customer Configuration

Your customer does not need to take any steps to use Log in with GitHub. All new
customer [Organizations](/docs/concepts/organizations) support Log in with
GitHub once you enable Log in with GitHub on your
[Project](/docs/concepts/projects).

It's common for customers to want to disable Log in with GitHub for their
organization. They can do this self-serve from their [Self-Serve Organization
Settings](/docs/features/self-serve-organization-settings), or you can do it on
their behalf by:

1. Going to your [Project's
   Organizations](https://console.tesseral.com/organizations) in the Tesseral
   Console.

2. Choosing your customer's organization from the list.

3. Under the Organization's "Details" section, click "Edit".

4. Under "Login settings", switch "Log in with GitHub" off.

Disabling Log in with GitHub on an Organization only disables Log in with GitHub
for that specific Organization; all of your other customers can continue to use
Log in with GitHub.