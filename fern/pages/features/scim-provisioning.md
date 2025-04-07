---
title: SCIM provisioning
subtitle: "Tesseral supports SCIM provisioning (directory sync) with all major identity providers (IDPs)"
---

## What is SCIM provisioning?

Large or security-conscious organizations will ordinarily use centralized services called *identity providers* (IDPs) such as Okta or Microsoft Entra to maintain data on employees software applications. Such companies will often require their software vendors to synchronize user data with identity providers. For example, if AcmeCorp parts ways with an employee in Accounts Payable, it will want its payables software to deactivate the user account associated with the departed employee.

A standard protocol called *SCIM* governs provisioning-related communication between IDPs and software applications. In practice, SCIM defines two kinds of data: *users* and *groups*. It sets outs mechanisms for creating, updating, and deleting users and groups. 

When connected to a SCIM identity provider, a software application will passively receive communication over HTTP from the identity provider. The software application will process those updates to ensure that its data matches the identity provider's data. Software applications primarily handle SCIM updates to ensure that they maintain the correct list of users, but they also frequently use it to adjust user attributes (e.g., updating surnames, phone numbers, etc). 


## Using SCIM provisioning with Tesseral

### Enabling SCIM

Tesseral comes with SCIM out of the box. You do not need to upgrade your Tesseral plan. You do not need to write any additional code. 

If you wish to enable SCIM for a given customer, you must take a few steps:

1. Enable SCIM for the [Organization](/docs/concepts/organizations)
2. Set up [SCIM domains](/docs/concepts/organizations#SCIM-domains) for the Organization
3. Create a [SCIM API key](/docs/concepts/scim-api-keys) for the Organization

From there, you need your customer to set up SCIM provisioning in their IDP.

### Setting up SCIM provisioning

Once you have created a SCIM API key, you must share it with your customer. Your customer will enter the SCIM API key in their corporate IDP. Your customer will also need a URL that you can find in Tesseral.

Once your customer has configured their IDP our customer's IDP will send SCIM updates to Tesseral. You will 

