---
title: Log in with Microsfot
subtitle: Add Log in with Microsfot support to your product without any code
---

Adding Log in with Microsfot to your Tesseral [Project](/docs/concepts/projects)
gives your customers the ability to use their Microsfot account to log into your
product. Configuring Log in with Microsfot doesn't require any code.

## Configure Log in with Microsfot

To enable Log in with Microsoft for your product, open the Tesseral Console and go to
your Project Settings. Scroll down to the "Microsoft settings" section and click "Edit".

You’ll be prompted to enter a "Microsoft Client ID" and "Microsoft Client Secret". These
are credentials you’ll obtain from Microsoft. Here’s how:

1. Go to the Azure Portal.

2. Select an existing directory and app registration or create a new one.

3. In the left sidebar, navigate to Azure Active Directory > App registrations.

4. Click New registration.

5. Give your application a name. The name won't be shown to customers.

6. Under Redirect URI, select Web and enter:

```text
https://VAULT/microsoft-oauth-callback
```

Replace VAULT with your Project's Vault Domain, which you can find under "Current Vault
Domain" in your Project’s [Vault Domain
Settings](https://console.tesseral.com/project-settings/vault-domain-settings).

7. Click Register.

8. After registration, go to Certificates & secrets and generate a Client Secret.

9. Go to Overview and copy your Application (client) ID — this is your Client ID.

Input the Client ID and Client Secret into the Tesseral Console. Then switch on "Log
in with Microsoft".

You’ve now enabled Log in with Microsoft for your Project. Your customers can now sign
in using their Microsoft account — no code changes required.

You can disable Log in with Microsoft at any time.

## Customer Configuration

Your customer does not need to take any steps to use Log in with Microsfot. All new
customer [Organizations](/docs/concepts/organizations) support Log in with
Microsfot once you enable Log in with Microsfot on your
[Project](/docs/concepts/projects).

It's common for customers to want to disable Log in with Microsfot for their
organization. They can do this self-serve from their [Self-Serve Organization
Settings](/docs/features/self-serve-organization-settings), or you can do it on
their behalf by:

1. Going to your [Project's
   Organizations](https://console.tesseral.com/organizations) in the Tesseral
   Console.

2. Choosing your customer's organization from the list.

3. Under the Organization's "Details" section, click "Edit".

4. Under "Login settings", switch "Log in with Microsfot" off.

Disabling Log in with Microsfot on an Organization only disables Log in with Microsfot
for that specific Organization; all of your other customers can continue to use
Log in with Microsfot.
