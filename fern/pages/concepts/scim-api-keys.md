---
title: "SCIM API Keys in Tesseral"
subtitle: "SCIM API Keys make it possible to support SCIM provisioning"
---

### What is a SCIM API Key?

Large or security-conscious customers will often request that their software vendors support [SCIM provisioning](/docs/features/scim-provisioning), which allows them to automatically manage [Users](/docs/concepts/users) in your software. For example, your customer can create a new User whenever they hire someone new.

SCIM provisioning requires a pre-configured trust relationship with a given [Organization](/docs/concepts/organizations)'s identity provider (IDP), a software application like Okta or Microsoft Entra. 

To establish such a trust relationship with your customer's IDP, you must share a secret with your customer. In Tesseral, this secret is called a *SCIM API Key.* Your customer's IDP will include the SCIM API Key any time it makes a request to Tesseral. A valid SCIM API Key proves that such a request is legimate.

<Note>You do not use a SCIM API Key anywhere in **your** application's code. Instead, you must share the SCIM API Key *with your customer*. Your customer's identity provider uses the SCIM API Key. </Note>

SCIM API Keys always belong to exactly one Organization. They therefore indirectly belong to exactly one [Project](/docs/concepts/projects).

<Frame caption="SCIM API Keys always belong to Organizations" >
    <img src = "/assets/concepts/hierarchy-scim-api-key.png">
    </img>
</Frame>


## Properties of SCIM API Keys

SCIM API Keys have the following top-level properties:
* ID
* Organization ID
* Create time
* Update time
* Display name
* Secret token
* Revoked

### ID

Each SCIM API Key has an `id` property that begins with `scim_api_key_`. This value is **not** a secret. It merely identifies the API key; for example, you can find a given SCIM API Key in the Tesseral console at the route `https://console.tesseral.com/organizations/org_.../scim-api-keys/scim_api_key_...`.

<Warning> Each SCIM API Key has a [secret token](#secret-token) that begins with `tesseral_secret_scim_api_key_`. This is distinct from the `id`.</Warning>

### Organization ID

Each SCIM API Key belongs to exactly one Organization. The `organization_id` for a given SCIM API Key [uniquely identifies](/docs/concepts/organizations#id) the Organization that the SCIM API Key belongs to.

#### Create time

Identified in the [Backend API](/docs/backend-api-reference) as `createTime`, this field simply represents the timestamp from when the SCIM API Key record was created.

#### Update time

Identified in the [Backend API](/docs/backend-api-reference) as `updateTime`, this field  represents the timestamp from the last change to the SCIM API Key record's properties.

### Secret token

Identified in the [Backend API](/docs/backend-api-reference) as `secretToken`, this is a string that begins `tesseral_secret_scim_api_key...`. 

This value **must** remain a secret between you and your customer. While you will have to share this string with your customer's IT administrator (for use in your customer's identity provider), avoid sharing the secret token broadly.

<Info>Do not confuse SCIM API Keys with [Backend API Keys](/docs/concepts/backend-api-keys). You may indeed use the Backend API Key to [perform CRUD operations](http://localhost:3000/docs/backend-api-reference/api-reference/scim-api-keys/list-scimapi-keys) on SCIM API Records, but it is not a SCIM API Key.</Info>

### Revoked

*Revoked* is a boolean value. Tesseral's API will reject any SCIM requests that use SCIM API Keys for which this value is `True` (displayed as *yes* in the console). 

You cannot restore a revoked SCIM API Key -- that is, you cannot change this value from `True` to `False`. Instead, you can simply create a new SCIM API Key. 

