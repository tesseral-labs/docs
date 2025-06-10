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
</Tabs>

## What audit log events to collect
