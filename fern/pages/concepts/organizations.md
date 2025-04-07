---
title: "Organizations in Tesseral"
subtitle: "Each organization represents a unique company (or similar entity) that uses your software"
---

## What is an Organization?

If you make B2B SaaS, your customers are companies -- or similar entities, such as schools or nonprofits. Each *Organization* in Tesseral represents one such company. 

For example, if both AcmeCorp and Foobar LLC are your customers, then you should have an Organization for AcmeCorp and another for Foobar LLC. In most cases, each business that uses your software should correspond to exactly one Organization.

Tesseral is designed for use in business software. It therefore imposes tenancy boundaries at the Organization level. Put differently, each Organization is a first-class tenant. Learn more about multitenancy in Tesseral [here](/docs/features/b2b-multitenancy).

Organizations may contain any number of Users. Users **always** belong to exactly one Organization. Users cannot exist outside of an Organization. Learn more about Tesseral Users [here](/docs/concepts/users).

## Properties of Organizations

Organizations directly relate to the following Tesseral concepts:
* [Projects](/docs/concepts/projects#projects-and-organizations)
* [Users](#organizations-and-users)
* [User Invites](#organizations-and-user-invites)
* [SAML Connections](#organizations-and-saml-connections)
* [SCIM API Keys](#organizations-and-scim-api-keys)

Organizations have the following top level properties:

* [ID](#id)
* [Display name](#display-name)
* [Create time](#create-time)
* [Update time](#update-time)
* [Log in with Google](#log-in-with-google)
* [Log in with Microsoft](#log-in-with-microsoft)
* [Log in with email](#log-in-with-microsoft)
* [Log in with password](#log-in-with-password)
* [Log in with SAML](#log-in-with-saml)
* [Log in with authenticator app](#log-in-with-authenticator-app)
* [Log in with passkey](#log-in-with-passkey)
* [Require MFA](#require-mfa)
* [SCIM enabled](#scim-enabled)


### Related concepts

#### Organizations and Projects

Each Organization belongs to exactly one Project. To understand in more detail how Organizations relate to Projects, reference the documentation for Projects [here](/docs/concepts/projects#projects-and-organizations).

#### Organizations and Users

An Organization corresponds to a company. A User corresponds to a specific *person* within a company. 

For example, suppose you have AcmeCorp as a customer. You will have an Organization in Tesseral that corresponds to AcmeCorp. If AcmeCorp has an employee named John Doe that uses your product, you will have a User that corresponds to John Doe. This User record will belong to the AcmeCorp Organization.

Each User always belongs to exactly one Organization. An Organization may contain any number of Users. A User cannot exist outside of an Organization. A User cannot be moved into a new Organization.

<Note>An Organization may have just one User. This is very common, especially in self-service products. If you wish for your software to support individuals (e.g. hobbyists) *as well as* business customers, simply create a separate Organization that contains one User for each individual. </Note> 

Learn more about Users [here](/docs/concepts/users).

#### Organizations and User Invites

User Invites exist to support adding new Users to an Organization. A User Invite represents an invitation for someone to join a given Organization. 

Organizations may have any number of User Invites. 

Learn more about User Invites [here](/docs/concepts/user-invites).


#### Organizations and SAML Connections

SAML Connections exist to support [SAML single sign-on](/docs/features/saml-sso). They contain all configuration settings for a given trust relationship with an identity provider. If you wish to configure SAML SSO for one of your customers, you must create a SAML Connection within that customer's Organization. 

Organizations may have any number of SAML Connections. 

Learn more about SAML Connections [here](/docs/concepts/saml-connections).

#### Organizations and SCIM API Keys

SCIM API Keys exist to support [SCIM provisioning](/docs/features/scim-provisioning). They enable a specific kind of trust relationship with an identity provider. If you wish to configure SCIM for one of your customers, you must create a SCIM API Key within that customer's Organization.

Organizations may have any number of SCIM API Keys. 

Learn more about SCIM API Keys [here](/docs/concepts/scim-api-keys).

### Top-level properties of Organizations

#### ID

Each Organization record has a universally unique identifier in Tesseral called `id`. This identifier always starts with the prefix `org_`. For example, `org_c07mn4m95d0y443zarb4oq0zl` is an `id` for an Organization in Tesseral. 


#### Display name

Each Organization record may have a display name, identified in the [Backend API](/docs/backend-api-reference) as `displayName`. This is a string that may not be unique. If you have a customer colloqiually known as AcmeCorp, you will likely want to set the corresponding Organization's display name as "AcmeCorp."

#### Create time

Identified in the [Backend API](/docs/backend-api-reference) as `createTime`, this field simply represents the timestamp from when the Organization record was created.

#### Update time

Identified in the [Backend API](/docs/backend-api-reference) as `updateTime`, this field  represents the timestamp from the last change to the Organization record's properties.

#### Log in with Google

Identified in the [Backend API](/docs/backend-api-reference) as `logInWithGoogle`, this boolean field represents whether [Login with Google](/docs/login-methods/primary-factors/login-with-google) is enabled for the Organization.

#### Log in with Microsoft

Identified in the [Backend API](/docs/backend-api-reference) as `logInWithMicrosoft`, this boolean field represents whether [Login with Microsoft](/docs/login-methods/primary-factors/login-with-Microsoft) is enabled for the Organization.

#### Log in with email

Identified in the [Backend API](/docs/backend-api-reference) as `logInWithEmail`, this boolean field represents whether [logging in with email](/docs/login-methods/primary-factors/login-with-email) is enabled for the Organization.


#### Log in with password

Identified in the [Backend API](/docs/backend-api-reference) as `logInWithPassword`, this boolean field represents whether [logging in with passwords](/docs/login-methods/primary-factors/login-with-password) is enabled for the Organization.


#### Log in with SAML

Identified in the [Backend API](/docs/backend-api-reference) as `logInWithSaml`, this boolean field represents whether [logging in with SAML single sign-on](/docs/login-methods/primary-factors/login-with-enterprise-sso-saml) is enabled for the Organization.


#### Log in with authenticator app

Identified in the [Backend API](/docs/backend-api-reference) as `logInWithAuthenticatorApp`, this boolean field represents whether [logging in with an authenticator app](/docs/login-methods/primary-factors/login-with-authenticator-app) as a [secondary factor](/docs/features/multifactor-authentication-mfa) is enabled for the Organization.


#### Log in with passkey

Identified in the [Backend API](/docs/backend-api-reference) as `logInWithPasskey`, this boolean field represents whether [logging in with passkey](/docs/login-methods/primary-factors/login-with-passkey) as a [secondary factor](/docs/features/multifactor-authentication-mfa) is enabled for the Organization.


#### Require MFA

Identified in the [Backend API](/docs/backend-api-reference) as `requireMFA`, this boolean field represents whether Users within the Organization **must** use [multifactor authentication](/docs/features/multifactor-authentication-mfa) to sign in.

#### SCIM enabled

Identified in the [Backend API](/docs/backend-api-reference) as `scimEnabled`, this boolean field represents whether [SCIM provisioning](/docs/features/scim-provisioning) is enabled for the Organization.
