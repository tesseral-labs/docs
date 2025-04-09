---
title: Log in with email (magic links)
subtitle: "Tesseral supports logging in with email codes and magic links"
---

## What is logging in with email?

Many applications support logging in via email. Loosely speaking, logging in via email works like this:

1. The application prompt a given user for an email associated with an account (in Tesseral, the relevant concept is a [User](/docs/concepts/users))
2. The application sends short-lived credentials for that account to the email address.
3. The user accesses their email inbox, to retrieve the short-lived credentials.

In general, there are two major kinds of short-lived credentials that an application may share:

1. Verification codes: a randomized value that the user enters manually in the application. For example, [Notion](https://notion.so) will email a random, legible string like `nuhon-setek-liori-ves`.
2. Magic links: direct links back to the application, typically with a temporary password as a query parameter. The application authenticates the user upon receiving a valid temporary password.

Login with email using Tesseral uses *both* verification code and magic links in each email. Users may either click a magic link or manually enter a code. However, Tesseral uses the same credential beginning with `email_verification_challenge_code` for its verification code and magic link query parameter.

Logging in with email in Tesseral looks like this:

<Frame caption="What *log in with email* looks like in Tesseral">
  <img src="/assets/login-methods/login-with-email-tesseral.png" alt="" />
</Frame>

You can change the domain from which Tesseral sends emails by configuring an [Email Send-From Domain](/docs/concepts/projects#email-send-from-domain).


## How to enable (or disable) logging in with email

### In the Tesseral console

You can enable (or disable) logging in with email for your Project by navigating to *Project Settings* and toggling the [Log in with Email (Magic Links)](/docs/concepts/projects) property. If logging in with email is enabled for your Project, you can enable (or disable) logging in with email for [Organizations](/docs/concepts/organizations) within the Project.

### In the Tesseral self-serve UI

If logging in with email is enabled for the relevant Project, [Organizations owners](/docs/concepts/users#owner) may enable (or disable) logging in with email for all Users within their Organization. To do so, they can visit the self-service settings UI for their Organization.

### Using the Tesseral backend API

You may configure login methods using Tesseral's [backend API](/docs/backend-api-reference). For example, you may want to [update many Organizations](http://localhost:3000/docs/backend-api-reference/api-reference/organizations/update-organization) to disable *login with email* all at the same time. 
