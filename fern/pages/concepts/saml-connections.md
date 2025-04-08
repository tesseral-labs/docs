---
title: "SAML Connections in Tesseral"
subtitle: "Each user represents a person who can log into and use with your software"
---

### What is a SAML Connection?

To understand *SAML Connections* in Tesseral, you will likely benefit from reading more generally about [SAML single sign-on (SSO)](/docs/features/saml-sso). Be aware that SAML SSO is complex and unfamiliar to most developers. If you use Tesseral, you only need to understand a small fraction of SAML's idiosyncracies.

Each of your customers that wants to use SAML SSO will require its own one-time configuration. This requirement is intrinsic to SAML.

SAML Connections in Tesseral exist to help you manage SAML configuration. Each SAML Connection represents a trust relationship with a specific customer's identity provider (IDP), a software application like Okta, Microsoft Entra, or Ping Identity. Configuration of such a trust relationship enables Tesseral to receive claims from your customer's identity provider that authenticate users.


## Properties of SAML Connections

### Related concepts

SAML Connections directly relate to [Organizations](/docs/concepts/organizations). Each SAML Connection belongs to exactly one Organization. In most cases, each Organization will have either zero SAML Connections (i.e., the Organization doesn't use SAML) or one SAML Connection (i.e., the Organization uses SAML with a single identity provider). 

<Info> In rare cases, an Organization may use more than one identity provider. For example, US-based employees of a large organization may use Okta, wherease their colleagues in Canada might use OneLogin. For this reason, Tesseral allows Organizations to have many SAML Connections. This scenario is not very common. </Info>
 
SAML Connections have the following top-level properties:
* ID
* Organization ID
* Create time
* Update time
* Primary
* Assertion consumer service (ACS) URL
* SP entity ID
* IDP entity ID
* IDP redirect URL
* IDP certificate

### Top-level properties of Organizations

#### ID

Each SAML Connection record has a universally unique identifier in Tesseral called `id`. This identifier always starts with the prefix `saml_connection`. For example, `saml_connection_1n73juswrqiqn9zz63fnofe5c` is an `id` for a SAML Connection in Tesseral. 

#### Organization ID

Each SAML Connection belongs to exactly one Organization. The `organization_id` for a given SAML Connection [uniquely identifies](/docs/concepts/organizaitons#id) the Organization that the SAML Connection belongs to.

#### Create time

Identified in the [Backend API](/docs/backend-api-reference) as `createTime`, this field simply represents the timestamp from when the SAML Connection record was created.

#### Update time

Identified in the [Backend API](/docs/backend-api-reference) as `updateTime`, this field  represents the timestamp from the last change to the SAML Connection record's properties.

#### Primary

`primary` is a boolean value. Currently, this property only has an effect when an Organization has more than one SAML Connection. 

SAML SSO makes possible two distinct flows:
1. Service provider (SP) initiated
2. Identity provider (IDP) initiated

In SP-initiated SAML SSO, Tesseral needs to redirect one of your users to their Organization's identity provider (e.g. Okta) for authentication. Tesseral gets [the URI](#idp-redirect-url) to which it redirects the user from a SAML Connection. If the relevant User's Organization has multiple SAML Connections, Tesseral must choose a redirect URI from exactly one SAML Connection. This is currently the only purpose of `primary`. When Tesseral must select one redirect URI from multiple SAML Connections within an Organization, it will always use the redirect URI from the SAML Connection for which `primary` is marked `True`.

If an Organization has any SAML Connections, it will always have exactly one SAML Connection for which `primary` is marked `True`. (Organizations may have zero SAML Connections.)

<Note>Unless you have an Organization with multiple SAML Connections, `primary` does nothing.</Note>

#### Assertion Consumer Service (ACS) URL

Every SAML Connection has an ACS URL. Tesseral provides this value for you. The ACS URL identifies a Tesseral endpoint that handles SAML assertions. 

An ACS URL will look like `https://vault.app.myapp.com/api/saml/v1/saml_connection_1n73juswrqiqn9zz63fnofe5c/acs` if you have configured a custom [Vault Domain](/docs/concepts/projects#vault-domain). (If you have not configured a custom Vault Domain, the ACS URL will use a `tesseral.app` domain.)

It is **not** necessary for you to understand the precise function of the ACS URL.

You merely need to give the ACS URL to your customer as part of the configuration process. Your customer's IT administrator will paste the ACS URL into their company's identity provider -- a software application like Okta or Microsoft Entra. 

#### SP Entity ID

Every SAML Connection has an SP Entity ID. Tesseral provides this value for you. The SP Entity ID is simply a unique identifier that happens to be formatted as a URL. 

An SP Entity ID will look like `https://vault.app.myapp.com/api/saml/v1/saml_connection_1n73juswrqiqn9zz63fnofe5c` if you have configured a custom [Vault Domain](/docs/concepts/projects#vault-domain). (If you have not configured a custom Vault Domain, the SP Entity ID will use a `tesseral.app` domain.)

It is **not** necessary for you to understand the precise function of the SP Entity ID.

You merely need to give the SP Entity ID to your customer as part of the configuration process. Your customer's IT administrator will paste the value into their company's identity provider -- a software application like Okta or Microsoft Entra. 

#### IDP Entity ID

Every SAML Connection, when properly configured, has an IDP Entity ID. This value comes from your customer's identity provider, a software application like Okta or Microsoft Entra. It merely serves as a unique identifier for your customer's IDP.

It is **not** necessary for you to understand the precise function of the IDP Entity ID.

The precise format of this value will differ from one identity provider to the next. An IDP Entity ID from Okta will generally look like `http://www.okta.com/exko6lr2xgcUFDLEx5d7`. 

When you receive this value from your customer -- ordinarily an IT administrator -- you need to paste it into the IDP Entity ID field for the SAML Connection.

#### IDP Redirect URL

Every SAML Connection, when properly configured, has an IDP Redirect URL. This value comes from your customer's identity provider, a software application like Okta or Microsoft Entra. Tesseral will redirect users to this URL at the beginning of an SP-initiated SAML flow.

The precise format of this value will differ from one identity provider to the next. An IDP Redirect URL from Okta (developer edition) will generally look something like `https://dev-30450645.okta.com/app/dev-12345678_tesseral0_1/exko6lr2xgcUFDLEx5d7/sso/saml`. 

When you receive this value from your customer -- ordinarily an IT administrator -- you need to paste it into the IDP Entity ID field for the SAML Connection.

#### IDP Certificate

Every SAML Connection, when properly configured, has an IDP Certificate. An IDP Certificate is an X.509 certificate. This is a specific file that must come from your customer's identity provider, a software application like Okta or Microsoft Entra. It enables the cryptographic verification of SAML assertions that Tesseral receives from the identity provider.

It is **not** necessary for you to understand the precise function of the IDP Certificate.

When you receive this file from your customer -- ordinarily an IT administrator -- you need to upload it to the SAML Connection.
