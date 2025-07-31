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

  ### Enable SAML on your Project

  <Frame caption="Enabling SAML on a Project">
    <video
      src="/assets/saml/saml-project-enable.mp4"
      autoplay
      loop
      playsinline
      muted
      controls
    >
    </video>
  </Frame>

  Go to the [Authentication](https://console.tesseral.com/settings/authentication)
  page in the Tesseral Console and click on **Configure Enterprise Settings**.
  Then enable **Log in with SAML**.

</Step>

<Step>

  ### Enable SAML for an Organization

  <Frame caption="Enabling SAML for an Organization">
    <video
      src="/assets/saml/saml-org-enable.mp4"
      autoplay
      loop
      playsinline
      muted
      controls
    >
    </video>
  </Frame>

  To enable SAML for your customer, go to the [Organizations
  page](https://console.tesseral.com/organizations) in the Tesseral Console. Go to
  the Organization's **Authentication** tab, and enable **Log in with SAML**. You
  will also need to configure **Allowed Domains**: add the list of domains that
  your customer's employees use for their emails. Only emails from these domains
  will be allowed to log in with SAML.

  You will need to repeat this process for each Organization you want to enable
  SAML for. You can use the
  [`UpdateOrganization`](/docs/backend-api-reference/api-reference/organizations/update-organization)
  endpoint in the Tesseral Backend API to automate this process.

</Step>

</Steps>

## Advanced Configuration

### Setting up SAML on your customer's behalf

<Frame caption="Setting up SAML on your customer's behalf">
  <video
    src="/assets/saml/saml-manual-config.mp4"
    autoplay
    loop
    playsinline
    muted
    controls
  >
  </video>
</Frame>

The SAML protocol requires configuration on your customer's end. When you enable
SAML for an Organization, your customer will be able to configure SAML
themselves.

You can also configure SAML on your customer's behalf. To do this, you will need
three pieces of information from your customer:

* An **IDP Entity ID**.
* An **IDP Redirect URL**.
* An **IDP Certificate**.

From there, you can go into an Organization's **Authentication** tab in the
Tesseral Console, and click on **Create SAML Connection**. Input the three pieces
of information.

Your customer will need two pieces of information from you:

* An **Assertion Consumer Service (ACS) URL**
* An **SP Entity ID**

In the Tesseral Console, you can copy these values from the **Service Provider
Details** section on your newly created SAML Connection. Your customer will need
to enter these values into their Identity Provider.

### Making SAML required for an Organization

<Frame caption="Making SAML required for an Organization">
  <video
    src="/assets/saml/saml-required.mp4"
    autoplay
    loop
    playsinline
    muted
    controls
  >
  </video>
</Frame>

Once SAML is enabled for an Organization, you can make it the only way to log in
to that Organization.

Your customers can make SAML their only allowed login method, or you can enforce
that yourself from the Tesseral Console.

To make SAML required for an Organization, go to the Organization's
**Authentication** tab in the Tesseral Console, and disable all login methods
except **Log in with SAML**.
