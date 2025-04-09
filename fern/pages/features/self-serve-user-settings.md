---
title: Self-service user settings for your customers
subtitle: "Each of your Users can manage their own settings in Tesseral"
---

Tesseral provides a UI that your customers can use to manage settings for their own User records. This UI comes pre-configured. You do not have to write any additional code.

Your customer can visit this UI by navigating to your [Vault Domain](/docs/concepts/projects#vault-domain) (when authenticated). For example, they might visit `vault.app.myapp.com/user-settings`.

It looks like this: 

<Frame caption="A screenshot of the self-service settings your customers can view">
  <img src="/assets/features/vault-self-service/obfuscated-user-settings.png" alt="" />
</Frame>

Your customer can use this page to configure a [passkey](/docs/concepts/passkeys). Exactly how things look may vary a little bit. For example, the below example shows what your customer might see if using Google Chrome's password manager, but if your customer uses 1Password, they'll have a slightly different experience.

<Frame caption="What your customer might see when configuring a passkey">
  <img src="/assets/features/vault-self-service/obfuscated-passkey.png" alt="" />
</Frame>

Your customer can also use this page to configure a [passkey](/docs/login-methods/secondary-factors/login-with-authenticator-app). Tesseral will show the customer a QR code. The customer can use an authenticator app like [Okta Verify](https://help.okta.com/en-us/content/topics/mobile/okta-verify-overview.htm) to scan this QR code and configure authenticator app MFA.

<Frame caption="What your customer sees when configuring an authenticator app">
  <img src="/assets/features/vault-self-service/obfuscated-authenticator-app.png" alt="" />
</Frame>

You can also manage an Organization on your customer's behalf using the Tesseral [console](console.tesseral.com).