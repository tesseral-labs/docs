---
title: Enable Audit Logs Tutorial
description: Learn how to use Audit Logs in your app using Tesseral.
---

This article explains how you can use Audit Logs in your app using Tesseral.

<Steps> 
  <Step>
   ### Sign up for Tesseral

    If you haven't already, follow the [Quickstart Guide](/docs/quickstart) to set up your Tesseral Project.

  </Step>

  <Step>
    ### Enabling Audit Logs for your Project

    <Frame caption="Enable Audit Logs for a Project">
      <video
        src="/assets/audit-logs/audit-logs-enable.mp4"
        autoplay
        loop
        playsinline
        muted
        controls
      />
    </Frame>

    Go to your Project's
    [Vault Customization Settings](https://console.tesseral.com/settings/vault).
    In the "Behavior Settings" section, enable the Audit Logs feature. Click **Save changes**.

    Once enabled, all significant actions taken by users in your application will be logged and can be accessed through the Audit Logs interface.

  </Step>
</Steps>

## Advanced Usage

### Publishing custom Audit Log events

Tesseral's managed audit log events automatically collect many security-related
events on your behalf. You can augment these events with additional events that
are specific to your product.

To publish a custom audit log event, you'll use the
[Tesseral Backend API](/docs/backend-api-reference/tesseral-backend-api)'s
**`CreateAuditLogEvent`** endpoint
(<a href="/docs/backend-api-reference/api-reference/audit-log-events/create-audit-log-event" target="_blank">API
Reference</a>).

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
        credentials: credentials(req),
        eventName: "acme.expense_reports.approve",
        eventDetails: {
          "expenseReportId": "expense_report_123",
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

  <Tab title="Django">
    <Tip>
      These instructions assume you've already set up [Tesseral for Django](/docs/sdks/serverside-sdks/tesseral-sdk-django).
    </Tip>

    First, construct a Tesseral Backend API client:

    ```python
    from tesseral import Tesseral

    tesseral_client = Tesseral() # or AsyncTesseral()
    ```

    Then, anywhere in your code where you need to create an audit log event, call
    `audit_log_events.create_audit_log_event()`:

    ```python
    from django.http import HttpRequest
    from tesseral_django import credentials

    @app.post("/approve-expense-report")
    def approve_expense_report(request: HttpRequest):
        # ...

        tesseral_client.audit_log_events.create_audit_log_event(
            credentials=credentials(request),
            event_name="acme.expense_reports.approve",
            event_details={
                "expenseReportId": "expense_report_123",
            }
        )
    ```

    When you pass along the current
    [`credentials()`](/docs/sdks/serverside-sdks/tesseral-sdk-django#getting-the-requests-authenticated-credentials),
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

        "github.com/tesseral-labs/tesseral-sdk-go"
        "github.com/tesseral-labs/tesseral-sdk-go/auth"
    )

    func ApproveExpenseReport(w http.ResponseWriter, r *http.Request) {
        // ...

        tesseralClient.AuditLogEvents.CreateAuditLogEvent(r.Context(), &tesseral.AuditLogEvent{
            EventName:        tesseral.String("acme.expense_reports.approve"),
            ActorCredentials: tesseral.String(auth.Credentials(r.Context())),
            EventDetails: map[string]any{
                "expenseReportId": "expense_report_123",
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

  <Tab title="Axum">
    <Tip>
      These instructions assume you've already set up [Tesseral for Axum](/docs/sdks/serverside-sdks/tesseral-sdk-axum).
    </Tip>

    In an Axum handler, access the authenticated credentials.

    ```rust
    async fn handler(auth: Auth) -> String {
      let credentials = auth.credentials();
      // ...
    }
    ```

    Use this credential to create an audit log event via the API's [**Create Audit Log Event**](/docs/backend-api-reference/api-reference/audit-log-events/create-audit-log-event) endpoint.

  </Tab>

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
</Tabs>
