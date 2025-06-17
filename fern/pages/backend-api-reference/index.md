---
title: "Tesseral Backend API Reference"
subtitle: "Learn how to use the Tesseral Backend API"
---

The Tesseral Backend API allows you to automate any operation you could
otherwise do by hand from the Tesseral Console.

## Tesseral Backend API vs Tesseral Frontend API

The Tesseral Backend API is an automated alternative to clicking around in the
Tesseral Console. It is meant to be used from your serverside code, or from
scripts on your developer's machines. 

The Backend API requires a Backend API Key, which are secret and must not be put
into clientside code. The Backend API lets you take actions across all
Organizations in your Project.

If instead your goal is to take action on behalf of one of your Users from your
clientside code, then you likely want the [Frontend
API](/docs/frontend-api-reference) instead. The Frontend API is much less
sensitive than the Backend API.

## Authenticating to the Backend API

<Frame caption="Creating a Backend API Key">
  <img src="create-backend-api-key.png" />
</Frame>

All requests to the Backend API require a Backend API Key, which you can create
by following these steps:

1. Sign in to the [Tesseral Console](https://console.tesseral.com).

2. Make sure you're in the Project you want to work with. You can switch between
   Projects using the Project Switcher at the top left of the Console. Go to
   your Project's [API Keys
   Settings](https://console.tesseral.com/project-settings/api-keys), and create a
   new Backend API Key.

3. When your Project API Key is created, you'll be given a
   chance to copy your Project API Key Secret Token. Keep this secret somewhere
   safe; it is sensitive.

You now have a Backend API Key Secret Token, which starts with:

```txt
tesseral_secret_key_...
```

If you're using one of Tesseral's [Backend API
SDKs](#tesseral-backend-api-sdks), then put this secret into an environment
variable named `TESSERAL_BACKEND_API_KEY`.

If you're using Tesseral's Backend API using a plain HTTP client, then include
the secret token as an `Authorization: Bearer` token:

```bash {2}
curl \
  -H "Authorization: Bearer tesseral_secret_key_..." \
  https://api.tesseral.com/v1/organizations
```

## Tesseral Backend API SDKs

Tesseral provides three SDKs for the Tesseral Backend API:

* The **Tesseral Node SDK** is a serverside TypeScript wrapper around the
  Tesseral Backend API. The Tesseral Node SDK is compatible with
  [Node.js](https://nodejs.org/) and Node.js-compatible runtimes, such as
  [Bun](https://bun.sh/) and [Deno](https://deno.com/).

* The **Tesseral Python SDK** is a Python wrapper around the Tesseral Backend
  API. It supports both sync and async I/O, and is thoroughly `typing`-annotated.

* The **Tesseral Go SDK** is a Golang wrapper around the Tesseral Backend API.

You can also use the Tesseral Backend API directly with cURL or any other HTTP
client.
