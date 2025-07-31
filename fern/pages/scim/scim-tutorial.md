---
---

This article explains how you can add SAML to your app using Tesseral.

<Steps>

<Step>

  ### Sign up for Tesseral
  
  If you haven't already, sign up for Tesseral at
  [console.tesseral.com](https://console.tesseral.com) and follow the Quickstart
  Guide.

</Step>

<Step>

  ### Enable SCIM for an Organization

  <Frame caption="Enabling SCIM for an Organization">
    <video
      src="/assets/scim/scim-enable.mp4"
      autoplay
      loop
      playsinline
      muted
      controls
    >
    </video>
  </Frame>

  To enable SCIM for your customer, go to the [Organizations
  page](https://console.tesseral.com/organizations) in the Tesseral Console. Go to
  the Organization's **Authentication** tab, and enable **SCIM Enabled**. You
  will also need to configure **Allowed Domains**: add the list of domains that
  your customer's employees use for their emails. Only emails from these domains
  will be allowed to be provisioned over SCIM.

  You will need to repeat this process for each Organization you want to enable
  SCIM for. You can use the
  [`UpdateOrganization`](/docs/backend-api-reference/api-reference/organizations/update-organization)
  endpoint in the Tesseral Backend API to automate this process.

</Step>

</Steps>

## Advanced Configuration

### Setting up SCIM on your customer's behalf

<Frame caption="Setting up SCIM on your customer's behalf">
  <video
    src="/assets/scim/scim-manual-config.mp4"
    autoplay
    loop
    playsinline
    muted
    controls
  >
  </video>
</Frame>

The SCIM protocol requires configuration on your customer's end. When you enable
SCIM for an Organization, your customer will be able to configure SCIM
themselves.

You can also configure SCIM on your customer's behalf. To do this, you can go
into an Organization's **Authentication** tab in the Tesseral Console, and click
on **Create SCIM API Key**.

Your customer will need two pieces of information from you:

* A **SCIM API Key Secret Token**. This is given to you when you create the
  SCIM API Key.

* A **SCIM Base URL**. After creating the SCIM API Key, you can find this on the
  SCIM API Key's Details page under the **Service Provider Details** section.

The SCIM API Key Secret Token is sensitive. Share it with your customer only
over a secure channel. Do not share it with anyone else. Your customer will use
this SCIM API Key Secret Token and SCIM Base URL to configure SCIM in their
Identity Provider.
