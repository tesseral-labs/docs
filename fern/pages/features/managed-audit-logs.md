---
title: Managed Audit Logs in Tesseral
subtitle: Tesseral adds audit logs support to your product 
---

Audit logs are a common feature in B2B SaaS products. They allow your customer's
security team to track what employees are doing in your product. When you use
Tesseral, most of the work of having audit logs support is done for you.

## What are managed audit logs?

B2B SaaS buyers often expect audit logs from their vendors. These audit logs are
typically consumed by your customer's security team, and it allows them to
monitor employee activity and SaaS product usage.

With Tesseral, most of the work for audit logs is done for you. Tesseral's
managed audit logs are audit logs that your customers can use to see what's
going on in their [Organization](/docs/concepts/organizations) in your product.

Tesseral handles [automatically collecting audit
logs](#auto-collected-audit-logs) for activity like logins, logouts, inviting
other users, modifying login settings, and more. These auto-collected events
cover the bulk of the generic security-related activity that B2B SaaS buyers
expect from their vendors. You do not need to write any code for these
authentication-related events.

You can [publish your own audit log events](#publishing-custom-audit-log-events)
on top of the Tesseral-produced events.

Tesseral provides a user interface your customers can use to view, search, and
export their audit logs. This functionality appears in the [Self-Serve
Organization Settings](/docs/features/self-serve-organization-settings). You do
not need to write any code to give your customers a UI for managing audit logs.

## Publishing custom audit log events

Tesseral's managed audit log events [automatically collect many security-related
events on your behalf](#auto-collected-audit-logs). You can augment these events
with additional events that are specific to your product.

To publish a custom audit log event, you'll use the [Tesseral Backend
API](/docs/backend-api-reference/tesseral-backend-api)'s
[`CreateAuditLogEvent`](...) endpoint.

<Tabs>
  <Tab title="Next.js">
    <Tip>
      These instructions assume you've already set up [Tesseral for Next.js](/docs/sdks/tesseral-sdk-nextjs).
    </Tip>

    First, construct a Tesseral Backend API client:

    ```typescript
    import { TesseralClient } from "@tesseral/tesseral-node";

    const tesseralClient = new TesseralClient();
    ```

    Then, anywhere in your code where you need to create an audit log event, call
    `auditLogEvents.createAuditLogEvent()`:

    ```typescript
    // actions.ts
    import { auth } from "@tesseral/tesseral-nextjs/serverside";

    export async function POST(request: Request) {
      const { credentials } = await auth({ or: "throw" });

      // ...

      tesseralClient.auditLogEvents.createAuditLogEvent({
        auditLogEvent: {
          credentials: credentials,
          eventName: "acme.expense_reports.approve",
          eventDetails: {
            "expenseReportId": "expense_report_123",
          }
        }
      })

      // ...
    }
    ```

    When you pass along the current
    [`credentials`](/docs/sdks/nextjs#getting-the-requests-authenticated-credentials),
    Tesseral will automatically know which [User](/docs/concepts/users) or (if
    enabled) [API Key](/docs/features/managed-api-keys) performed the action you're
    audit logging.

    Audit logs are only supported from server-side code.

  </Tab>

  <Tab title="Express.js">
    <Tip>
      These instructions assume you've already set up [Tesseral for Express.js](/docs/sdks/serverside-sdks/tesseral-sdk-express).
    </Tip>

    First, construct a Tesseral Backend API client:

    ```typescript
    import { TesseralClient } from "@tesseral/tesseral-node";

    const tesseralClient = new TesseralClient();
    ```

    Then, anywhere in your code where you need to create an audit log event, call
    `auditLogEvents.createAuditLogEvent()`:

    ```typescript
    import { credentials } from "@tesseral/tesseral-express";

    app.post("/approve-expense-report", (req, res) => {
      // ...

      tesseralClient.auditLogEvents.createAuditLogEvent({
        auditLogEvent: {
          credentials: credentials(req),
          eventName: "acme.expense_reports.approve",
          eventDetails: {
            "expenseReportId": "expense_report_123",
          }
        }
      })
    })
    ```

    When you pass along the current
    [`credentials()`](/docs/sdks/serverside-sdks/tesseral-sdk-express#getting-the-requests-authenticated-credentials),
    Tesseral will automatically know which [User](/docs/concepts/users) or (if
    enabled) [API Key](/docs/features/managed-api-keys) performed the action you're
    audit logging.

  </Tab>

  <Tab title="Flask">
    <Tip>
      These instructions assume you've already set up [Tesseral for Flask](/docs/sdks/serverside-sdks/tesseral-sdk-flask).
    </Tip>

    First, construct a Tesseral Backend API client:

    ```python
    from tesseral import Tesseral

    tesseral_client = Tesseral() # or AsyncTesseral()
    ```

    Then, anywhere in your code where you need to create an audit log event, call
    `audit_log_events.create_audit_log_event()`:

    ```python
    from flask import request
    from tesseral_flask import credentials

    @app.post("/approve-expense-report")
    def approve_expense_report():
        # ...

        tesseral_client.audit_log_events.create_audit_log_event(
            credentials=credentials(),
            event_name="acme.expense_reports.approve",
            event_details={
                "expenseReportId": "expense_report_123",
            }
        )
    ```

    When you pass along the current
    [`credentials()`](/docs/sdks/serverside-sdks/tesseral-sdk-flask#getting-the-requests-authenticated-credentials),
    Tesseral will automatically know which [User](/docs/concepts/users) or (if
    enabled) [API Key](/docs/features/managed-api-keys) performed the action you're
    audit logging.

  </Tab>

  <Tab title="FastAPI">
    <Tip>
      These instructions assume you've already set up [Tesseral for FastAPI](/docs/sdks/serverside-sdks/tesseral-sdk-fastapi).
    </Tip>

    First, construct a Tesseral Backend API client:

    ```python
    from tesseral import AsyncTesseral

    tesseral_client = AsyncTesseral() # or Tesseral()
    ```

    Then, anywhere in your code where you need to create an audit log event, call
    `audit_log_events.create_audit_log_event()`:

    ```python
    from fastapi import Depends
    from tesseral_fastapi import Auth, get_auth

    @app.post("/approve-expense-report")
    async def approve_expense_report(auth: Auth = Depends(get_auth)):
        # ...

        await tesseral_client.audit_log_events.create_audit_log_event(
            credentials=auth.credentials(),
            event_name="acme.expense_reports.approve",
            event_details={
                "expenseReportId": "expense_report_123",
            }
        )

        # ...
    ```

    When you pass along the current
    [`auth.credentials()`](/docs/sdks/serverside-sdks/tesseral-sdk-fastapi#getting-the-requests-authenticated-credentials),
    Tesseral will automatically know which [User](/docs/concepts/users) or (if
    enabled) [API Key](/docs/features/managed-api-keys) performed the action you're
    audit logging.

  </Tab>

  <Tab title="Go">
    <Tip>
      These instructions assume you've already set up [Tesseral for Go](/docs/sdks/serverside-sdks/tesseral-sdk-go).
    </Tip>

    First, construct a Tesseral Backend API client:

    ```go
    import (
        tesseralclient "github.com/tesseral-labs/tesseral-sdk-go/client"
    )

    tesseralClient := tesseralclient.NewClient()
    ```

    Then, anywhere in your code where you need to create an audit log event, call
    `AuditLogEvents.CreateAuditLogEvent()`:

    ```go
    import (
        "net/http"
        "github.com/tesseral-labs/tesseral-sdk-go/auth"
    )

    func ApproveExpenseReport(w http.ResponseWriter, r *http.Request) {
        // ...

        tesseralClient.AuditLogEvents.CreateAuditLogEvent(r.Context(), &AuditLogEventRequest{
            AuditLogEvent: &AuditLogEvent{
                Credentials: auth.Credentials(r.Context()),
                EventName:   "acme.expense_reports.approve",
                EventDetails: map[string]interface{}{
                    "expenseReportId": "expense_report_123",
                },
            },
        })

        // ...
    }
    ```

    When you pass along the current
    [`auth.Credentials(ctx)`](/docs/sdks/serverside-sdks/tesseral-sdk-go#getting-the-requests-authenticated-credentials),
    Tesseral will automatically know which [User](/docs/concepts/users) or (if
    enabled) [API Key](/docs/features/managed-api-keys) performed the action you're
    audit logging.

  </Tab>
</Tabs>

## Auto-collected audit logs

Tesseral's managed audit logs automatically collect many security-related events
on your behalf. You can also [publish your own audit log
events](#publishing-custom-audit-log-events) on top of the set of auto-collected
events.

The following table lists the auto-collected audit log events that Tesseral
produces.

| Event Name                                            | Description                                               | Fields                                               |
|-------------------------------------------------------|-----------------------------------------------------------|------------------------------------------------------|
| `tesseral.api_keys.create`                            | When a managed API Key is created.                        | `apiKey`                                             |
| `tesseral.api_keys.delete`                            | When a managed API Key is deleted.                        | `apiKey`                                             |
| `tesseral.api_keys.revoke`                            | When a managed API Key is revoked.                        | `apiKey`, `previousApiKey`                           |
| `tesseral.api_keys.update`                            | When a managed API Key is updated.                        | `apiKey`, `previousApiKey`                           |
| `tesseral.organizations.update_domains`               | When an Organization's associated domains are updated.    | `domains`, `previousDomains`                         |
| `tesseral.scim_api_keys.create`                       | When a SCIM API Key is created.                           | `scimApiKey`                                         |
| `tesseral.scim_api_keys.update`                       | When a SCIM API Key is updated.                           | `scimApiKey`, `previousScimApiKey`                   |
| `tesseral.scim_api_keys.delete`                       | When a SCIM API Key is deleted.                           | `scimApiKey`, `previousScimApiKey`                   |
| `tesseral.scim_api_keys.revoke`                       | When a SCIM API Key is revoked.                           | `scimApiKey`, `previousScimApiKey`                   |
| `tesseral.user_invites.create`                        | When a User Invite is created.                            | `userInvite`                                         |
| `tesseral.user_invites.delete`                        | When a User Invite is deleted.                            | `userInvite`                                         |
| `tesseral.organizations.create`                       | When a Organization is created.                           | `organization`                                       |
| `tesseral.organizations.update`                       | When an Organization is updated.                          | `organization`, `previousOrganization`               |
| `tesseral.organizations.delete`                       | When an Organization is deleted.                          | `organization`                                       |
| `tesseral.organizations.update_google_hosted_domains` | When an Organization's Google hosted domains are updated. | `googleHostedDomains`, `previousGoogleHostedDomains` |
| `tesseral.organizations.update_microsoft_tenant_ids`  | When an Organization's Microsoft tenant IDs are updated.  | `microsoftTenantIds`, `previousMicrosoftTenantIds`   |
| `tesseral.saml_connections.create`                    | When a SAML connection is created.                        | `samlConnection`                                     |
| `tesseral.saml_connections.update`                    | When a SAML connection is updated.                        | `samlConnection`, `previousSamlConnection`           |
| `tesseral.saml_connections.delete`                    | When a SAML connection is deleted.                        | `samlConnection`                                     |
| `tesseral.sessions.refresh`                           | When a User refreshes their access token.                 | `session`                                            |
| `tesseral.api_key_role_assignments.create`            | When a Role is assigned to an API Key.                    | `apiKeyRoleAssignment`                               |
| `tesseral.api_key_role_assignments.delete`            | When a Role is removed from an API Key.                   | `apiKeyRoleAssignment`                               |
| `tesseral.users.create`                               | When a User is created.                                   | `user`                                               |
| `tesseral.users.update`                               | When a User is updated.                                   | `user`, `previousUser`                               |
| `tesseral.users.delete`                               | When a User is deleted.                                   | `user`                                               |
| `tesseral.roles.create`                               | When a Role is created.                                   | `role`                                               |
| `tesseral.roles.update`                               | When a Role is updated.                                   | `role`, `previousRole`                               |
| `tesseral.roles.delete`                               | When a Role is deleted.                                   | `role`                                               |
| `tesseral.users.create_role_assignment`               | When a Role is assigned to a user.                        | `userRoleAssignment`                                 |
| `tesseral.users.delete_role_assignment`               | When a Role is removed from a user.                       | `userRoleAssignment`                                 |
| `tesseral.passkeys.create`                            | When a Passkey is created.                                | `passkey`                                            |
| `tesseral.passkeys.update`                            | When a Passkey is updated.                                | `passkey`, `previousPasskey`                         |
| `tesseral.passkeys.delete`                            | When a Passkey is deleted.                                | `passkey`                                            |
