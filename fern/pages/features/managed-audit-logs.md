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

Tesseral handles collecting audit logs for activity like logins, logouts,
inviting other users, modifying login settings, and more. These auto-collected
events cover the bulk of the generic security-related activity that B2B SaaS
buyers expect from their vendors. You do not need to write any code for these
authentication-related events.

You can [publish your own audit log events](#publishing-custom-audit-log-events)
on top of the Tesseral-produced events.

Tesseral provides a user interface your customers can use to view, search, and
export their audit logs. This functionality appears in the [Self-Serve
Organization Settings](/docs/features/self-serve-organization-settings). You do
not need to write any code to give your customers a UI for managing audit logs.

## Publishing custom audit log events

Tesseral's managed audit log events automatically collect many security-related
events on your behalf. You can augment these events with additional events that
are specific to your product.

To publish a custom audit log event, you'll use the [Tesseral Backend
API](/docs/backend-api-reference/tesseral-backend-api)'s
[`CreateAuditLogEvent`](...) endpoint.

<Tabs>
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
      These instructions assume you've already set up [Tesseral for Flask](/docs/sdks/serverside/python/flask).
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
            audit_log_event={
                "credentials": credentials(),
                "event_name": "acme.expense_reports.approve",
                "event_details": {
                    "expenseReportId": "expense_report_123",
                }
            }
        )
    ```

    When you pass along the current
    [`credentials()`](/docs/sdks/serverside-sdks/tesseral-sdk-flask#getting-the-requests-authenticated-credentials),
    Tesseral will automatically know which [User](/docs/concepts/users) or (if
    enabled) [API Key](/docs/features/managed-api-keys) performed the action you're
    audit logging.

  </Tab>

  <Tab title="Go">
    <Tip>
      These instructions assume you've already set up [Tesseral for Go](/docs/sdks/serverside/go).
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

Tesseral will automatically collect the following audit log events for you:

| Event Name | Description                        | Fields                     |
|-|------------------------------------|----------------------------|
| `tesseral.api_keys.create` | When a managed API Key is created. | `apiKey`                   |
| `tesseral.api_keys.delete` | When a managed API Key is deleted. | `apiKey`, `previousApiKey` |
| `tesseral.api_keys.revoke` | When a managed API Key is revoked. | `apiKey`, `previousApiKey` |
| `tesseral.api_keys.update` | When a managed API Key is updated. | `apiKey`, `previousApiKey` |
| `tesseral.organizations.update_domains` |                                    |                            |
| `tesseral.scim_api_keys.create` |                                    |                            |
| `tesseral.scim_api_keys.update` |                                    |                            |
| `tesseral.scim_api_keys.delete` |                                    |                            |
| `tesseral.scim_api_keys.revoke` |                                    |                            |
| `tesseral.user_invites.create` |                                    |                            |
| `tesseral.user_invites.delete` |                                    |                            |
| `tesseral.organizations.create` |                                    |                            |
| `tesseral.organizations.update` |                                    |                            |
| `tesseral.organizations.delete` |                                    |                            |
| `tesseral.organizations.update_google_hosted_domains` |                                    |                            |
| `tesseral.organizations.update_microsoft_tenant_ids` |                                    |                            |
| `tesseral.saml_connections.create` |                                    |                            |
| `tesseral.saml_connections.update` |                                    |                            |
| `tesseral.saml_connections.delete` |                                    |                            |
| `tesseral.api_key_role_assignments.create` |                                    |                            |
| `tesseral.api_key_role_assignments.delete` |                                    |                            |
| `tesseral.users.create` |                                    |                            |
| `tesseral.users.update` |                                    |                            |
| `tesseral.users.delete` |                                    |                            |
| `tesseral.roles.create` |                                    |                            |
| `tesseral.roles.update` |                                    |                            |
| `tesseral.roles.delete` |                                    |                            |
| `tesseral.users.create_role_assignment` |                                    |                            |
| `tesseral.users.delete_role_assignment` |                                    |                            |
| `tesseral.passkeys.update` |                                    |                            |
| `tesseral.passkeys.delete` |                                    |                            |
