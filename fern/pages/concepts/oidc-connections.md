---
title: "OIDC Connections in Tesseral"
subtitle: "Each user represents a person who can log into and use with your software"
---

### What is a OIDC Connection?

To understand _OIDC Connections_ in Tesseral, you will likely benefit from reading more generally about [OIDC single sign-on (SSO)](/docs/features/enterprise-oidc-sso). Be aware that OIDC SSO is complex and unfamiliar to most developers. If you use Tesseral, you only need to understand a small fraction of OIDC's idiosyncracies.

Each of your customers that wants to use OIDC SSO will require its own one-time configuration. This requirement is intrinsic to OIDC.

OIDC Connections in Tesseral exist to help you manage OIDC configuration. Each OIDC Connection represents a trust relationship with a specific customer's identity provider (IDP), a software application like Okta, Microsoft Entra, or Ping Identity. Configuration of such a trust relationship enables Tesseral to receive claims from your customer's identity provider that authenticate users.

## Properties of OIDC Connections

### Related concepts

Each OIDC Connection belongs to exactly one [Organization](/docs/concepts/organizations). In most cases, each Organization will have either zero OIDC Connections (i.e., the Organization doesn't use OIDC) or one OIDC Connection (i.e., the Organization uses OIDC with a single identity provider).

OIDC Connections directly relate to [Organizations](/docs/concepts/organizations). Each OIDC Connection belongs to exactly one Organization. In most cases, each Organization will have either zero OIDC Connections (i.e., the Organization doesn't use OIDC) or one OIDC Connection (i.e., the Organization uses OIDC with a single identity provider).

<Info> In rare cases, an Organization may use more than one identity provider. For example, US-based employees of a large organization may use Okta, wherease their colleagues in Canada might use OneLogin. For this reason, Tesseral allows Organizations to have many OIDC Connections. This scenario is not very common. </Info>

OIDC Connections have the following top-level properties:

- ID
- Organization ID
- Create time
- Update time
- Primary
- Redirect URL
- Configuration URL
- Client ID
- Client Secret

### Top-level properties of Organizations

#### ID

Each OIDC Connection record has a universally unique identifier in Tesseral called `id`. This identifier always starts with the prefix `oidc_connection`. For example, `oidc_connection_1n73juswrqiqn9zz63fnofe5c` is an `id` for a OIDC Connection in Tesseral.

#### Organization ID

Each OIDC Connection belongs to exactly one Organization. The `organization_id` for a given OIDC Connection [uniquely identifies](/docs/concepts/organizations#id) the Organization that the OIDC Connection belongs to.

#### Create time

Identified in the [Backend API](/docs/backend-api-reference) as `createTime`, this field simply represents the timestamp from when the OIDC Connection record was created.

#### Update time

Identified in the [Backend API](/docs/backend-api-reference) as `updateTime`, this field represents the timestamp from the last change to the OIDC Connection record's properties.

#### Primary

`primary` is a boolean value. Currently, this property only has an effect when an Organization has more than one OIDC Connection.

OIDC SSO makes possible two distinct flows:

1. Service provider (SP) initiated
2. Identity provider (IDP) initiated

In SP-initiated OIDC SSO, Tesseral needs to redirect one of your users to their Organization's identity provider (e.g. Okta) for authentication. Tesseral gets the authorization URI to which it redirects the user from a OIDC Connection's [configuration URL](#configuration-url). If the relevant User's Organization has multiple OIDC Connections, Tesseral must choose exactly one OIDC Connection. This is currently the only purpose of `primary`. When Tesseral must select one OIDC Connection from multiple within an Organization, it will always use the OIDC Connection for which `primary` is marked `True`.

If an Organization has any OIDC Connections, it will always have exactly one OIDC Connection for which `primary` is marked `True`. (Organizations may have zero OIDC Connections.)

<Note>Unless you have an Organization with multiple OIDC Connections, `primary` does nothing.</Note>

#### Redirect URL

Every OIDC Connection has a redirect URL. Tesseral provides this value for you. The redirect URL identifies a Tesseral endpoint that handles OIDC token exchanges.

A redirect URL will look like `https://vault.app.myapp.com/api/oidc/v1/oidc_connection_.../callback` if you have configured a custom [Vault Domain](/docs/concepts/projects#vault-domain). (If you have not configured a custom Vault Domain, the redirect URL will use a `tesseral.app` domain.)

It is **not** necessary for you to understand the precise function of the redirect URL.

You merely need to give the redirect URL to your customer as part of the configuration process. Your customer's IT administrator will paste the redirect URL into their company's identity provider -- a software application like Okta or Microsoft Entra.

#### Configuration URL

Every OIDC Connection, when properly configured, has a configuration URL. This is a specific URL that must come from your customer's identity provider, a software application like Okta or Microsoft Entra. It enables the discovery of the various OIDC endpoints Tesseral uses to orchestrate the login flow.

A configuration URL is generally hosted at the `/.well-known/openid-configuration` path. For Okta, this URL takes the form of `https://<domain>/.well-known/openid-configuration?client_id=<client-id>`.

It is **not** necessary for you to understand the precise function of the configuration URL.

When you receive this file from your customer -- ordinarily an IT administrator -- you need to paste it into the configuration URL field for the OIDC Connection.

#### Client ID

Every OIDC Connection, when properly configured, has a Client ID. This value comes from your customer's identity provider, a software application like Okta or Microsoft Entra. It merely serves as a unique identifier for your customer's IDP.

It is **not** necessary for you to understand the precise function of the Client ID.

The precise format of this value will differ from one identity provider to the next. A Client ID from Okta will generally look like `0oaslm6zmp95K2c5F697`.

When you receive this value from your customer -- ordinarily an IT administrator -- you need to paste it into the Client ID field for the OIDC Connection.

#### Client Secret

Every OIDC Connection, when properly configured, has a Client Secret. This value comes from your customer's identity provider, a software application like Okta or Microsoft Entra. Tesseral will use this value to securely exchange tokens with the IdP.

The precise format of this value will differ from one identity provider to the next. A Client Secret from Okta will generally look something like `Hgb1yBRQBKTzydA1nyFKH6FZ7rxJv8ZJ4dD-zuLkYA2TbqD2z1AJt8wWaxYhzzDh`.

When you receive this value from your customer -- ordinarily an IT administrator -- you need to paste it into the Client Secret field for the OIDC Connection.
