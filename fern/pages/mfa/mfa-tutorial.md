---
---

This article explains how you can add MFA to your app using Tesseral.

<Steps>
  <Step>
    ### Sign up for Tesseral

    If you haven't already, follow the [Quickstart Guide](/docs/quickstart) to set up your Tesseral Project.

  </Step>

  <Step>
    ### Configure MFA for your Project

    <Frame caption="Configure MFA for your Project">
      <video
        src="/assets/mfa/mfa-configure-mfa.mp4"
        autoplay
        loop
        playsinline
        muted
        controls
      />
    </Frame>

    Go to your Project's
    [Authentication Settings](https://console.tesseral.com/settings/authentication).
    You will now enable the Multi-factor Authentication (MFA) methods you'd like
    allow for your application.

    You can choose from the following options:
    - **Authenticator Apps** - Users can use an authenticator app like Google Authenticator or Authy to generate time-based one-time passwords (TOTP).
    - **Passkeys** - Users can use passkeys for passwordless authentication. This is the most secure option and is recommended for most applications.

    Once you have selected the methods you want to enable, click **Save changes**.

  </Step> 
</Steps>

## Advanced Configuration

### Requiring MFA for Specific Organizations

<Frame caption="Require MFA for Specific Organizations">
  <video
    src="/assets/mfa/mfa-require-mfa.mp4"
    autoplay
    loop
    playsinline
    muted
    controls
  />
</Frame>

Your customers can enable or disable MFA for their own Organizations or you can
do it for them in the Tesseral Console.

You can require MFA for specific Organizations by going to the
[Organizations](https://console.tesseral.com/organizations) page in the Tesseral
Console and selecting the Organization you want to configure. In the
Organization Settings, choose the **Authentication** tab.

From there, you can enable or disable MFA for the Organization and configure any
additional settings as needed via the Multi-Factor Authentication (MFA) section.

Once you've made the desired changes, click **Save changes**.
