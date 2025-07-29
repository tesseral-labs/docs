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

  `TESSERAL_BACKEND_API_KEY` is a secret. Do not expose it to the frontend.

  <Tabs>

    <Tab title="Express.js">

      If you haven't already, follow the [Express.js Quickstart
      Guide](/docs/sdks/serverside-sdks/tesseral-sdk-express).

      Enable API Key authentication by passing `enableApiKeys` to `requireAuth`:

      ```ts
      app.use(
        requireAuth({
          publishableKey: "publishable_key_...",
          enableApiKeys: true,
        }),
      );
      ```

    </Tab>

    <Tab title="Flask">

    </Tab>

    <Tab title="FastAPI">

    </Tab>

    <Tab title="Django">

    </Tab>

    <Tab title="Go">

    </Tab>

    <Tab title="Axum">

    </Tab>

    <Tab title="Next.js">

    </Tab>

  </Tabs>

</Step>

<Step>

  ### (Optional) Test out an API Key

</Step>

</Steps>
