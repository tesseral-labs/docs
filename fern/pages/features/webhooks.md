---
title: Webhooks
subtitle: "Tesseral supports webhooks to notify your app of events in Tesseral"
---

Tesseral supports sending webhook notifications to your application, so that you
can keep your [Organizations](/docs/concepts/organizations) and
[Users](/docs/concepts/users) in sync between Tesseral and your application's
database.

## Using webhooks with Tesseral

To receive webhooks from Tesseral, go to the Webhooks settings section of your
[Project settings page](https://console.tesseral.com/project-settings) in the
Tesseral Console.

<Frame caption="Webhook settings in the Project settings page of the Tesseral console">
  <img src="/assets/features/webhooks/webhook-settings.png" alt="" />
</Frame>

Click the "Edit" button to manage your webhook endpoints.

<Frame caption="The webhook portal">
  <img src="/assets/features/webhooks/webhook-portal.png" alt="" />
</Frame>

### Managing webhook endpoints

You can add, edit, and delete webhook endpoints in the webhook portal. Each
endpoint has a URL that Tesseral will send events to.

To create a new endpoint, click the "Add endpoint" button. You will be prompted
to enter an endpoint URL and an optional description. The URL must be a valid
URL that Tesseral can send events to.

<Frame caption="Creating a new webhook endpoint">
  <img src="/assets/features/webhooks/webhook-create-endpoint.png" alt="" />
</Frame>

Once you have created an endpoint, Tesseral will send events to that endpoint
whenever a relevant event occurs in your Project.

### Processing webhook events

Tesseral will send your webhook endpoint an HTTP POST request. See ["Webhook
event format"](#webhook-event-format) for documentation on the format of that
HTTP POST's request body.

Your endpoint must respond to events with a 200 HTTP response code after
successfully processing a webhook event. Other status codes will be treated as
an error, and Tesseral may retry sending you the event.

## Webhook event format

Tesseral's webhooks allow your backend to receive realtime notifications about
changes to [Organizations](/docs/concepts/organizations) and
[Users](/docs/concepts/users).

### `sync.organization`

Whenever an Organization is created, updated, or deleted, Tesseral will send
your webhook endpoint a `sync.organization` event of the form:

```json
{
  "type": "sync.organization",
  "organizationId": "org_..."
}
```

Use the
[`GetOrganization`](/docs/backend-api-reference/api-reference/organizations/get-organization)
endpoint from the [Backend
API](/docs/backend-api-reference/tesseral-backend-api) to get details about the
modified Organization. If the Organization was deleted, then you will receive a
404 from `GetOrganization`.

### `sync.user`

Whenever a User is created, updated, or deleted, Tesseral will send
your webhook endpoint a `sync.user` event of the form:

```json
{
  "type": "sync.user",
  "userId": "user_..."
}
```

Use the [`GetUser`](/docs/backend-api-reference/api-reference/users/get-user)
endpoint from the [Backend
API](/docs/backend-api-reference/tesseral-backend-api) to get details about the
modified User. If the User was deleted, then you will receive a 404 from
`GetUser`.
