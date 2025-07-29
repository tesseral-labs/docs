---
---

This article explains how you can add API Keys to your app using Tesseral.

<Steps>

<Step>

  ### Sign up for Tesseral
  
  If you haven't already, sign up for Tesseral at
  [console.tesseral.com](https://console.tesseral.com) and follow the Quickstart
  Guide.

</Step>

<Step>

  ### Enable Managed API Keys

  <Frame caption="Enabling Managed API Keys">
    <video
      src="/assets/managed-api-keys/enable-api-keys.mp4"
      autoplay
      loop
      playsinline
      muted
      controls
    >
    </video>
  </Frame>

  Go to the [Authentication](https://console.tesseral.com/settings/authentication)
  page in the Tesseral Console and click on "Configure Managed API Keys".

</Step>

<Step>

  ### Create a Backend API Key

  <Frame caption="Creating a Backend API Key">
    <video
      src="/assets/managed-api-keys/create-backend-api-key.mp4"
      autoplay
      loop
      playsinline
      muted
      controls
    >
    </video>
  </Frame>

  Go to the [API Keys](https://console.tesseral.com/settings/api-keys) page in the
  Tesseral Console and click on "Create Backend API Key".

  Copy the Backend API Key Secret Token. You will need it in the next step.

</Step>

<Step>

  ### Enable API Keys in your backend code

  In your backend code, configure an environment variable called
  `TESSERAL_BACKEND_API_KEY`. Set its value to the Backend API Key Secret Token
  you copied in the previous step.

  Next, you'll need to enable API Key authentication in your backend code.

  <Tabs>

    <Tab title="Express.js">

      If you haven't already, follow the [Express.js Quickstart
      Guide](/docs/sdks/serverside-sdks/tesseral-sdk-express).

      Enable API Key authentication by passing `enableApiKeys` to `requireAuth`:

      ```ts {4}
      app.use(
        requireAuth({
          publishableKey: "publishable_key_...",
          enableApiKeys: true,
        }),
      );
      ```

    </Tab>

    <Tab title="Flask">

      If you haven't already, follow the [Flask Quickstart
      Guide](/docs/sdks/serverside-sdks/tesseral-sdk-flask).

      Enable API Key authentication by passing `enable_api_keys` to `require_auth`:

      ```python {4}
      app.before_request(
          require_auth(
              publishable_key="publishable_key_...",
              enable_api_keys=True,
          )
      )
      ```

    </Tab>

    <Tab title="FastAPI">

      If you haven't already, follow the [FastAPI Quickstart
      Guide](/docs/sdks/serverside-sdks/tesseral-sdk-fastapi).

      Enable API Key authentication by passing `api_keys_enabled` to `RequireAuthMiddleware`:

      ```python {4}
      app.add_middleware(
          RequireAuthMiddleware,
          publishable_key="publishable_key_...",
          api_keys_enabled=True,
      )
      ```

    </Tab>

    <Tab title="Django">

      If you haven't already, follow the [Django Quickstart
      Guide](/docs/sdks/serverside-sdks/tesseral-sdk-django).

      Enable API Key authentication by adding `TESSERAL_API_KEYS_ENABLED` to your
      Django settings:

      ```python {8}
      MIDDLEWARE = [
          # ...
          'tesseral_django.middleware.AuthMiddleware',
          # ...
      ]

      TESSERAL_PUBLISHABLE_KEY = "publishable_key_..."
      TESSERAL_API_KEYS_ENABLED = True
      ```

    </Tab>

    <Tab title="Go">

      If you haven't already, follow the [Go Quickstart
      Guide](/docs/sdks/serverside-sdks/tesseral-sdk-go).

      Enable API Key authentication by passing `auth.WithEnableAPIKeys()` to
      `auth.RequireAuth`:

      ```go {4}
      http.ListenAndServe("...", auth.RequireAuth(
          server, 
          auth.WithPublishableKey("publishable_key_..."),
          auth.WithEnableAPIKeys(),
      ))
      ```

    </Tab>

    <Tab title="Axum">

      If you haven't already, follow the [Axum Quickstart
      Guide](/docs/sdks/serverside-sdks/tesseral-sdk-axum).

      Enable API Key authentication by calling `with_api_keys_enabled(true)` on your
      `Authenticator`:

      ```rust {2}
      let authenticator = Authenticator::new("publishable_key_...".into())
          .with_api_keys_enabled(true);

      let app: Router = Router::new()
          .route("/", get(handler))
          .layer(require_auth(authenticator));
      ```

    </Tab>

    <Tab title="Next.js">

      If you haven't already, follow the [Next.js Quickstart
      Guide](/docs/sdks/tesseral-sdk-nextjs).

      Enable API Key authentication by configuring an environment variable called
      `TESSERAL_AUTH_ENABLE_API_KEYS` whose value is set to `1`. To do this, edit your
      `.env` and add this line:

      ```txt
      TESSERAL_AUTH_ENABLE_API_KEYS=1      
      ```

    </Tab>

  </Tabs>

</Step>

<Step>

  ### Enable Managed API Keys for an Organization

  <Frame caption="Enabling Managed API Keys for an Organization">
    <video
      src="/assets/managed-api-keys/enable-org-managed-api-keys.mp4"
      autoplay
      loop
      playsinline
      muted
      controls
    >
    </video>
  </Frame>

  By default, Organizations don't have Managed API Keys enabled. You must enable
  API Keys for an Organization in the Tesseral Console. (This is in service of
  letting you charge your customers for API access.)

  To enable Managed API Keys for your customer, go to the [Organizations
  page](https://console.tesseral.com/organizations) in the Tesseral Console. Go to
  the Organization's API Keys tab, and enable Managed API Keys.

  You will need to repeat this process for each Organization you want to enable
  Managed API Keys for. You can use the
  [`UpdateOrganization`](/docs/backend-api-reference/api-reference/organizations/update-organization)
  endpoint in the Tesseral Backend API to automate this process.

</Step>

<Step>

  ### (Optional) Create a Managed API Key

  <Frame caption="Creating a Managed API Key">
    <video
      src="/assets/managed-api-keys/create-managed-api-key.mp4"
      autoplay
      loop
      playsinline
      muted
      controls
    >
    </video>
  </Frame>

  Once you have enabled Manged API Keys for your Project and in your backend code,
  you can create API Keys and use them with your backend code.

  Your customers can create API Keys, or you can create them yourself from the
  Tesseral Console.

  To create an API Key on your customers' behalf, go to the [Organizations
  page](https://console.tesseral.com/organizations) in the Tesseral Console. Under
  the Organization's API Keys tab, click "Create API Key".

  From here, you can send an HTTP request to your backend code with the API Key
  you just created. Include your newly created API Key's secret token as the value
  of the `Authorization: Bearer` header. For example, if your new API Key secret
  token is `acme_sk_1234567890`, you can send an HTTP request with the following
  header:

  ```
  Authorization: Bearer acme_sk_1234567890
  ```

  The capitalization of the word "Bearer" is important.

</Step>

</Steps>
