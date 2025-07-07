---
title: Log in with enterprise single sign-on (OIDC SSO)
subtitle: Add OIDC SSO to your product without any code
---

If you have completed the [quickstart](/docs/quickstart), you can support [OIDC SSO](/docs/features/enterprise-oidc-sso) without any additional code. OIDC SSO enables your customers to use their corporate identity providers (IDPs) like Okta, Microsoft Entra, and OneLogin to access your application. OIDC SSO is commonly a requirement for selling SaaS into large companies.

## Configure OIDC SSO
### From the console

To enable OIDC SSO for a given customer, you must first enable OIDC SSO for the relevant [Project](/docs/concepts/projects). You can do this by toggling the [*Log in with OIDC*](/docs/concepts/projects#log-in-with-oidc) property.

Fromn there, you need to ensure that OIDC SSO is enabled for that customer's [Organization](/docs/concepts/organizations). Look for the [Log in with OIDC](/docs/concepts/organizations#log-in-with-oidc) property.

If OIDC SSO is enabled, you can proceed to create and configure a [OIDC Connection](/docs/concepts/oidc-connections) that belongs to your customer's Organization. You will need to work with your customer's IT administrator to finish configuration of your OIDC Connection.
