---
title: Self-service Organization settings for your customers
subtitle: "Your Users can manage certain settings on behalf of their Organizations"
---

Tesseral provides a UI that your customers can use to manage settings for their own Organizations. This UI comes pre-configured. You do not have to write any additional code.

Your customer can visit this UI by navigating to your [Vault Domain](/docs/concepts/projects#vault-domain) (when authenticated). For example, they might visit `vault.app.myapp.com/organization-settings`. A User must be an [owner](/concepts/users#owner) within the Organization to make changes here.

It looks like this: 

<Frame caption="A screenshot of the self-service settings your customers can view">
  <img src="/assets/features/vault-self-service/obfuscated-org-home.png" alt="" />
</Frame>

Your customer can use this page to [invite](/docs/concepts/user-invites) other Users. They can also *revoke* outstanding invites.

<Frame caption="Inviting a new User to the Organization">
  <img src="/assets/features/vault-self-service/obfuscated-passkey.png" alt="" />
</Frame>

Your customer can also use this page to configure authentication settings. For example, they can enable (or disable) primary factors like [passwprds](/docs/login-methods/primary-factors/passwords). They can also require (or elect not to require) [multifactor authentication (MFA)](/docs/features/multifactor-authentication-mfa).

<Frame caption="What your customer sees when configuring an authenticator app">
  <img src="/assets/features/vault-self-service/obfuscated-auth.png" alt="" />
</Frame>

Note that the above QR code example simply links to `tesseral.com`. Your customer will see a real QR code that works with authenticator apps.