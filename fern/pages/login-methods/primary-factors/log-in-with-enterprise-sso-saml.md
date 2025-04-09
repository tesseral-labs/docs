---
title: Log in with enterprise single sign-on (SAML SSO)
subtitle: Add SAML SSO to your product without any code
---

If you have completed the [quickstart](/docs/quickstart), you can support [SAML SSO](/docs/features/saml-sso) without any additional code. SAML SSO enables your customers to use their corporate identity providers (IDPs) like Okta, Microsoft Entra, and OneLogin to access your application. SAML SSO is commonly a requirement for selling SaaS into large companies.

## Configure SAML SSO
### From the console

To enable SAML SSO for a given customer, you must first enable SAML SSO for the relevant [Project](/docs/concepts/projects). You can do this by toggling the [*Log in with SAML*](/docs/concepts/projects#log-in-with-saml) property.

Fromn there, you need to ensure that SAML SSO is enabled for that customer's [Organization](/docs/concepts/organizations). Look for the [Log in with SAML](/docs/concepts/organizations#log-in-with-saml) property.

If SAML SSO is enabled, you can proceed to create and configure a [SAML Connection](/docs/concepts/saml-connections) that belongs to your customer's Organization. You will need to work with your customer's IT administrator to finish configuration of your SAML Connection.

