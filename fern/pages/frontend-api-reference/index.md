---
title: Frontend API Reference
subtitle: Learn how to use the Tesseral Frontend API
---

The Tesseral Frontend API allows your clientside code to carry out actions on
behalf of your Users.

## Tesseral Frontend API vs Tesseral Backend API

The Tesseral Frontend API is meant to be used from your clientside code. When
you're using the Frontend API, you're authenticated as an individual User, and
can only carry out the actions that user has permission to do.

If you need to automate actions from your serverside code, or if you want to
take actions that aren't scoped to the permission of an individual User, then
you likely want the [Tesseral Backend API](/docs/backend-api-reference).

## Accessing the Frontend API from the Tesseral React SDK

If you're using the [Tesseral React
SDK](/docs/sdks/clientside-sdks/tesseral-sdk-react), then the
`frontendApiClient` property under `useTesseral()` gives you a TypeScript
interface to the Frontend API:

```typescript
import { useTesseral } from "@tesseral/tesseral-react";

async function example() {
  const { frontendApiClient } = useTesseral();

  console.log(await frontendApiClient.me.whoami());
}
```
