---
title: Implement OIDC using Tesseral
description:
  Learn how to implement OpenID Connect (OIDC) authentication in your app using
  Tesseral.
---

This article explains how you can implement OpenID Connect (OIDC) authentication
in your app using Tesseral.

<Steps>
  <Step>
    ### Sign up for Tesseral

    If you haven't already, follow the [Quickstart Guide](/docs/quickstart) to set up your Tesseral Project.

  </Step>

  <Step>
    ### Enable OIDC on your Project

    <Frame caption="Enabling OIDC on a Project">
      <video
        src="/assets/oidc/oidc-project-enable.mp4"
        autoplay
        loop
        playsinline
        muted
        controls
      />
    </Frame>

    Go to the [Authentication](https://console.tesseral.com/settings/authentication)
    page in the Tesseral Console and click on **Configure Enterprise Settings**.
    Then enable **Log in with OIDC**. Click **Save changes**.

  </Step>

  <Step>
    ### Enable OIDC for an Organization

    <Frame caption="Enabling OIDC for an Organization">
      <video
        src="/assets/oidc/oidc-organization-enable.mp4"
        autoplay
        loop
        playsinline
        muted
        controls
      />
    </Frame>

    By default, Organizations don't have OIDC enabled. You must enable OIDC for an
    Organization in the Tesseral Console.

    To enable OIDC for your customer, go to the [Organizations](https://console.tesseral.com/organizations)
    page in the Tesseral Console, select the Organization you'd like to enable OIDC for and go to the **Authentication** tab.

    In the **SSO** section, enable **Log in with OIDC**. You will also need to provide at least one **Allowed Domain** for user of the Organization to log in with OIDC.

  </Step>

</Steps>

## Advanced Configuration

### Setting up OIDC on your customer's behalf

<Frame caption="Setting up OIDC on an Organization">
  <video
    src="/assets/oidc/oidc-organization-configure.mp4"
    autoplay
    loop
    playsinline
    muted
    controls
  />
</Frame>

The OIDC protocol requires configuration on your customer's end. When you enable
OIDC for an Organization, your customers will be able to configure OIDC
themselves.

You can also configure OIDC on your customer's behalf. To do this, you will need
three pieces of information from your customer:

- A **Configuration URL**
- A **Client ID**
- A **Client Secret**

From there, you can go into an Organization's **Authentication** tab in the
Tesseral Console, and click on **Create OIDC Connection**. Input the three
pieces of information.

Your customer will need one piece of information from you:

- A **Redirect URL**

In the Tesseral Console, you can copy this value from the **Service Provider
Details** section on your newly created OIDC Connection. Your customer will need
to enter these values into their provider.
