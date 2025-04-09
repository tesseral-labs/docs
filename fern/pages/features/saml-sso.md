---
title: SAML single sign-on (SSO)
subtitle: "Tesseral supports enterprise single sign-on for all major identity providers (IDPs)"
---

## What is SAML single sign-on (SSO)?

### What is SAML SSO?

Large or security-conscious organizations commonly require that software applications support *single sign-on* (SSO). They use centralized services called *identity providers* (IDPs) such as Okta or Microsoft Entra to handle employees' authentication into software applications. Companies that use SSO gain a security advantage -- for instance, an IT administrator can revoke an employee's access to business systems with just a click.

Several varieties of SSO exist, but a specific protocol called *SAML* accounts for practically all cloud software single sign-on. SAML is a complex, XML-based protocol. 

You can learn more about SAML SSO in ["SAML: a technical primer"](https://ssoready.com/docs/saml/saml-technical-primer), a resource we prepared for a previous open source project. 

## Using SAML SSO with Tesseral

### Enabling SAML SSO

Tesseral comes with SAML SSO out of the box. You do not need to upgrade your Tesseral plan. You do not need to write any additional code. 

If you wish to enable SAML SSO for a given customer, you must first enable SAML SSO for your [Project](/docs/features/customizing-your-login-experience#changing-login-methods-for-a-project) and then for the [Organization](/docs/features/customizing-your-login-experience#changing-login-methods-for-an-organization) that corresponds to your customer.

Every customer's use of SAML SSO with your app requires one-time [configuration](#configuring-saml-sso) of a [SAML Connection](/docs/concepts/saml-connections). The customer must share several pieces of data with you, and you must share several pieces of data back with the customer. The need to configure each SAML Connection is endemic to the SAML protocol.


### Configuring SAML SSO

For each customer that intends to use SAML SSO with your software, you will need to configure a [SAML Connection](/docs/concepts/saml-connections). To do so, navigate to the Organization that corresponds to your customer and select the *SAML Connections* tab. 

