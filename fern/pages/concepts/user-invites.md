---
title: "User Invites in Tesseral"  
subtitle: "Each User Invite represents an invitation for someone to join an Organization"
---

## What is a User Invite?

In Tesseral, a *User Invite* represents an invitation for a specific person to join a specific Organization. If your customer at AcmeCorp wants to onboard a new employee to your software, you can create a User Invite addressed to that person's email. Once accepted, the invite will result in the creation of a User within that Organization.

From the Tesseral Console, you can create Users inside Organizations directly. Your customers cannot do this; they can only create User Invites.

Each User Invite belongs to exactly one Organization. An Organization may contain any number of User Invites. Tesseral uses User Invites to manage the secure onboarding of new Users into Organizations.

Learn more about Tesseral Organizations [here](/docs/concepts/organizations). Learn more about Tesseral Users [here](/docs/concepts/users).

## Properties of User Invites

User Invites directly relate to the following Tesseral concepts:

* [Organizations](#user-invites-and-organizations)
* [Users](#user-invites-and-users)

User Invites have the following top-level properties:

* [ID](#id)
* [Organization ID](#organization-id)
* [Create time](#create-time)
* [Update time](#update-time)
* [Email](#email)
* [Owner](#owner)

### Related concepts

#### User Invites and Organizations

Each User Invite belongs to a single Organization. That means the invited User, once they accept the invite, will be created inside that Organization.

For example, if you have an Organization for Foobar LLC and you want to invite someone new to that company, you'll create a User Invite under that Organization. That User will then belong to Foobar LLC once they accept the invite.

An Organization can contain any number of User Invites.

Learn more about Organizations [here](/docs/concepts/organizations).

#### User Invites and Users

User Invites are designed to onboard new Users into an Organization. Each successful User Invite results in the creation of one new User.

This mechanism makes it easy to add people to an Organization in a secure and auditable way. You specify the email address of the invitee and whether they should have owner privileges. Tesseral handles the rest.

Learn more about Users [here](/docs/concepts/users).

### Top-level properties of User Invites

#### ID

Each User Invite has a unique identifier in Tesseral, called `id`. This identifier always starts with the prefix `user_invite_`. For example:  
`user_invite_17x0k5o5aei5pqbfdaerlcjyc`.

#### Organization ID

Each User Invite is scoped to a single Organization. This is represented by the `organizationId` field in the [Backend API](/docs/backend-api-reference), which will match the `id` of the corresponding Organization (e.g., `org_c07mn4m95d0y443zarb4oq0zl`).

#### Create time

Identified in the [Backend API](/docs/backend-api-reference) as `createTime`, this field captures when the User Invite was created.

#### Update time

Identified in the [Backend API](/docs/backend-api-reference) as `updateTime`, this field captures the time of the last modification to the User Invite.

#### Email

The `email` field contains the address of the person being invited. This is where the invite will be sent, and it will be used to associate the eventual User record once the invite is accepted.

#### Owner

The `owner` field is a boolean that determines whether the invited User will receive *owner-level* privileges within the Organization once they accept the invitation.

This is useful for inviting administrators or others with elevated access to manage the Organization's settings and users.
