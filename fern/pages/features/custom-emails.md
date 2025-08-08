---
title: "Customizing Emails"
subtitle: "How to customize emails sent by Tesseral"
---

By default, Tesseral will send emails on your behalf. You can have Tesseral send
you a webhook instead, giving you full control over the contents of these
emails and the infrastructure you use to send them.

## Enabling Custom Emails

To enable custom emails, go to your Project's [Vault
Customization](https://console.tesseral.com/settings/vault) page in the Tesseral
Console. Under **Custom Email Settings**, you can choose to customize each type
of email Tesseral may send:

* **Custom Email Verification** is triggered when a User needs to verify their
  email address during the login or signup process. When enabled, you will receive
  [`custom_email.verify_email`](#custom_emailverify_email) webhook events.

* **Custom Password Reset** is triggered when a User uses the "Forgot Password"
  step in the login flow. When enabled, you will receive
  [`custom_email.password_reset`](#custom_emailpassword_reset) webhook events.

* **Custom User Invite** is triggered when a User is invited to join an
  Organization in your Project. When enabled, you will receive
  [`custom_email.user_invite`](#custom_emailuser_invite) webhook events.

When you make an email custom, Tesseral will send your backend a webhook
*instead of* sending your User an email. If you don't handle the webhook by
sending an email, then your User will not be able to log in, or will not be
notified of their invitation.

## Configuring Webhooks

To configure webhooks, see the main [Webhooks](/docs/features/webhooks)
documentation page.

## Webhook Event Format

### `custom_email.verify_email`

If you enable **Custom Email Verification**, Tesseral will send you webhook
events with the following format:

```json
{
  "type": "custom_email.verify_email",
  "emailAddress": "email@example.com",
  "emailVerificationChallengeCode": "email_verification_challenge_code_..."
}
```

You should send an email with the `emailVerificationChallengeCode` to the
`emailAddress`.

### `custom_email.password_reset`

If you enable **Custom Password Reset**, Tesseral will send you webhook events
with the following format:

```json
{
  "type": "custom_email.password_reset",
  "emailAddress": "email@example.com",
  "passwordResetCode": "password_reset_code_..."
}
```

You should send an email with the `passwordResetCode` to the `emailAddress`.

### `custom_email.user_invite`

If you enable **Custom User Invite**, Tesseral will send you webhook events with
the following format:

```json
{
  "type": "custom_email.user_invite",
  "userInviteId": "user_invite_..."
}
```

Use the
[`GetUserInvite`](/docs/backend-api-reference/api-reference/user-invites/get-user-invite)
endpoint from the [Backend
API](/docs/backend-api-reference/tesseral-backend-api) to get details about the
new User Invite.
