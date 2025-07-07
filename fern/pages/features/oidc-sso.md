---
title: OIDC single sign-on (SSO)
subtitle: "Tesseral supports enterprise single sign-on for all major identity providers (IDPs)"
---

## What is OIDC single sign-on (SSO)?

### What is OIDC SSO?

Large or security-conscious organizations commonly require that software applications support _single sign-on_ (SSO). They use centralized services called _identity providers_ (IDPs) such as Okta or Microsoft Entra to handle employees' authentication into software applications. Companies that use SSO gain a security advantage -- for instance, an IT administrator can revoke an employee's access to business systems with just a click.

Several varieties of SSO exist, but the _OIDC_ protocol is common for many cloud software single sign-on.

## Using OIDC SSO with Tesseral

### Enabling OIDC SSO

Tesseral comes with OIDC SSO out of the box. You do not need to upgrade your Tesseral plan. You do not need to write any additional code.

If you wish to enable OIDC SSO for a given customer, you must first enable OIDC SSO for your [Project](/docs/features/customizing-your-login-experience#changing-login-methods-for-a-project) and then for the [Organization](/docs/features/customizing-your-login-experience#changing-login-methods-for-an-organization) that corresponds to your customer.

Every customer's use of OIDC SSO with your app requires one-time [configuration](#configuring-oidc-sso) of an [OIDC Connection](/docs/concepts/oidc-connections). The customer must share several pieces of data with you, and you must share several pieces of data back with the customer. The need to configure each OIDC Connection is endemic to the OIDC protocol.

### Configuring OIDC SSO

For each customer that intends to use OIDC SSO with your software, you will need to configure a [OIDC Connection](/docs/concepts/oidc-connections). To do so, navigate to the Organization that corresponds to your customer and select the _OIDC Connections_ tab.
