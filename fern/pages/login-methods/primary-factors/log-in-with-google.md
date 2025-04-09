---
title: Log in with Google
subtitle: Add Log in with Google support to your product without any code
---

Adding Log in with Google to your Tesseral [Project](/docs/concepts/projects)
gives your customers the ability to use their Google account to log into your
product. Configuring Log in with Google doesn't require any code.

## Configure Log in with Google

To enable Log in with Google support to your product, go into the Tesseral
Console and go to your [Project
Settings](https://console.tesseral.com/project-settings). Go to the section
titled "Google settings" and click "Edit".

You're now prompted to input a "Google OAuth Client ID" and "Google OAuth Client
Secret". These are settings you'll get from Google. Here's how you get these
settings from Google:

1. Open the [Google Cloud Console](https://console.cloud.google.com/).

2. Choose an existing project or create a new one.

3. From the top-left of the Google Cloud Console, you can navigate between
   Google Cloud services. Go to **APIs & Services** > **Credentials**.

4. Click **Create Credentials** and choose **OAuth client ID**.

   The OAuth consent screen, if Google asks for you to create one, lets you
   control
   what Google will show your users when they're going through the "Log in with
   Google" flow.

5. Choose "Web application" as your Application type. Choose any Name; this
   isn't displayed to your customers.

6. Don't add any **Authorized JavaScript origins**.

7. Under **Authorized redirect URIs**, click **Add URI** and enter:

   ```text
   https://VAULT/google-oauth-callback
   ```

   Where `VAULT` is your Project's Vault Domain. You can find this under "
   Current
   Vault Domain" in your Project's [Vault Domain
   Settings](https://console.tesseral.com/project-settings/vault-domain-settings).

8. Click **Create**. A pop-up will appear showing your **Client ID** and
   **Client Secret**.

Input this **Client ID** and **Client Secret** into the Tesseral Console. Make
sure to switch on "Log in with Google" as well.

You've now enabled Log in with Google for your Project. Your customers can now
use Log in with Google to log into your product. You don't need to make any code
changes.

You can later disable Log in with Google at any time.

## Customer Configuration

Your customer does not need to take any steps to use Log in with Google. All new
customer [Organizations](/docs/concepts/organizations) support Log in with
Google once you enable Log in with Google on your
[Project](/docs/concepts/projects).

It's common for customers to want to disable Log in with Google for their
organization. They can do this self-serve from their [Self-Serve Organization
Settings](/docs/features/self-serve-organization-settings), or you can do it on
their behalf by:

1. Going to your [Project's
   Organizations](https://console.tesseral.com/organizations) in the Tesseral
   Console.

2. Choosing your customer's organization from the list.

3. Under the Organization's "Details" section, click "Edit".

4. Under "Login settings", switch "Log in with Google" off.

Disabling Log in with Google on an Organization only disables Log in with Google
for that specific Organization; all of your other customers can continue to use
Log in with Google.
