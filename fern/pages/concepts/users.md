---
title: "Users in Tesseral"
subtitle: "Each user represents a person who can log into and use with your software"
---

## What is a User?

If you make B2B SaaS, your customers are companies -- or similar entities, such as schools or nonprofits. Tesseral represents each of these companies as an [Organization](/docs/concepts/organizations). 

However, individuals who *work at companies* still need to log into and use your software. Tesseral represents each such individual as a *User*. 

Tesseral is designed for use in business software, so it always uses [B2B multitenancy model](/docs/features/b2b-multitenancy). Each User always belongs to exactly one Organization. Because each Organization always belong to exactly one [Project](/docs/concepts/projects), each User must therefore belong to exactly one Project.

For example, suppose Jane Doe and John Smith both work at AcmeCorp and use your application. You will have an Organization for AcmeCorp. You will have one User record for Jane Doe and another for John Smith; both of these user records will belong to the Organization record for AcmeCorp. If AcmeCorp belongs to the *MyApp Production* project, then both User records -- for Jane Doe and John Smith -- therefore belong to the *MyApp Production* project.


## Properties of Users

Users in Tesseral directly relate to the following concepts:

* [Organizations](#)
* Sessions
* Passkeys

Each User has the following top-level properties:

* ID
* Organization ID
* Email
* Create Time
* Update Time
* Owner
* Google User ID
* Microsoft User ID
* Has Authenticator App

### Related concepts

#### Users and Organizations

Each User record always belongs to exactly one Organization record. 

<Frame caption="Each User belongs to exactly one Organization" >
    <img src = "/assets/concepts/hierarchy-user.png">
    </img>
</Frame>

Learn more about the relationship between [Users and Organizations](/docs/concepts/organizations#organizations-and-users) and Tesseral's [B2B multitenancy model](/docs/features/b2b-multitenancy).

#### Users and Sessions

Each time a given User successfully logs in, Tesseral creates a *Session* in the console. to mark the User's authentication status.

Sessions are very simple. They consist of the following data:

| Field               | Type      | Description                                                                 |
|--------------------|-----------|-----------------------------------------------------------------------------|
| `id`               | string    | A globally unique identifier for the session, e.g.`session_03dpbse9pbowi4vrvv285ryri`                                                   |
| `created`               | timestamp    | The moment at which the session was created                                                   |
| `last active`               | timestamp    | The moment at which the session was last active                                                  |
| `expiration`               | timestamp    | The moment at which the session expires                                                   |

Each User may (and generally will) have many Sessions. A Session always belongs to exactly one User. 

<Note> The `id` of a session is **not** a secret. It is **not** a session token. You can freely use the `id` of a session without worrying about attackers</Note>

#### Users and Passkeys

[Passkeys](/docs/concepts/passkeys) are a secondary authentication factor in Tesseral. They make possible a particular kind of [multifactor authentication (MFA)](/docs/features/multifactor-authentication-mfa). 

A User may have many Passkeys. Each Passkey always belongs to exactly one User.


### Top-level properties of Organizations

#### ID

Each User record has a universally unique identifier in Tesseral called `id`. This identifier always starts with the prefix `user_`. For example, `user_e6hixknsu0gww708mssi7d846` is an `id` for a User in Tesseral. 

#### Organization ID

Every User in Tesseral belongs to exactly one [Organization](/docs/concepts/organizations). `organization_id` is the [unique identifier](/docs/concepts/organizations#id) for the Organization that a given User belongs to.

#### Email

Each User in Tesseral **must** have a verified email address, which gets captured in the `email` field. This also serves as a human-legible identifier for the User. 

#### Create Time

Identified in the [Backend API](/docs/backend-api-reference) as `createTime`, this field simply represents the timestamp from when the User record was created.

#### Update Time

Identified in the [Backend API](/docs/backend-api-reference) as `updateTime`, this field  represents the timestamp from the last change to the User record's properties.

#### Owner

Each User may either be an *owner* or not an owner. If a User has `owner` set to
`true` (displayed as *Yes*), then the User is an owner.

Owners of an Organization have broad administrative control over their
Organization. Owners can make certain changes to their Organization that other
Users cannot make. Specifically, an owner can:

* Create [User Invites](/docs/concepts/user-invites)
* Edit [login methods](docs/features/customizing-your-login-experience) enabled for the Organization
* Configure [SCIM provisioning](/docs/features/scim-provisioning) for the Organization, if [SCIM provisioning is enabled](/docs/concepts/organizations#scim-enabled).
* Modify [Organization-Specific Roles](/docs/concepts/roles#organization-specific-roles) for the Organization, if [custom Roles are enabled](/docs/concepts/organizations#custom-roles-enabled).
* Remove Users from their Organization.
* Edit whether other Users are Owners.

When using [Role-Based Access
Control](/docs/concepts/role-based-access-control), owners have all
[Actions](/docs/concepts/role-based-access-control#actions) enabled.

#### Google User ID

If a User uses [Login with Google](/docs/login-methods/primary-factors), Google supplies Tesseral with certain data about the person logging in. Among that data, Google shares a unique identifier with Tesseral called `sub` that looks something like `10769150350006150715113082367`. You can read more about this identifier in [Google's documentation](https://developers.google.com/identity/openid-connect/openid-connect). 

Tesseral stores this identifier as the *Google User ID* for the User. 


#### Microsoft User ID

If a User uses [Login with Microsoft](/docs/login-methods/primary-factors), Microsoft supplies Tesseral with certain data about the person logging in. Among that data, Microsoft shares a unique identifier with Tesseral called `oid` that looks something like `12345678-90ab-cdef-1234-567890abcdef`. You can read more about this identifier in [Microsoft's documentation](https://learn.microsoft.com/en-us/entra/identity-platform/id-token-claims-reference). 

Tesseral stores this identifier as the *Microsoft User ID* for the User. 

<Info>Note that Tesseral does *not* store the `sub` claim for Microsoft as it does for Google. Microsoft and Google logins work differently under the hood.</Info>

#### Has Authenticator App

Tesseral supports use of [authenticator apps](/docs/login-methods/secondary-factors/log-in-with-authenticator-app) (e.g., Okta Verify) for [multifactor authentication (MFA)](/docs/features/multifactor-authentication-mfa).

Users must configure authenticator apps themselves. They may do so at your [Vault Domain](/docs/concepts/projects#vault-domain) under *User Settings*. 

When a User has successfully configured an authenticator app, the User's `hasAuthenticatorApp` property will be set to `True` (displayed as *Enabled*). Otherwise, `hasAuthenticatorApp` will be set to `False` (displayed as *Not Enabled*).
