---
title: Multifactor authentication (MFA) in Tesseral"
subtitle: "Tesseral's tenancy model is designed specifically for B2B SaaS"
---

## What is multifactor authentication (MFA)?

Authentication of a user (i.e., confirmation of identity) relies on the user's presentation of proof. To give an example, software applications have traditionally authenticated users using secret passwords; a user's knowledge of the password constitutes proof of their identity. 

The different kinds of proof that establish users' identity are called *authentication factors*. *Multifactor authentication* (MFA) is, as the name suggests, the use of multiple successive authentication factors to establish a user's identity. 

Consider an example. Suppose a user successfully presents the correct password; a software application might then send an SMS message to his cell phone that contains a short-lived secret code. The user needs to enter the secret code to successfully authenticate. Therefore, the user must simultaneously (1) know the password and (2) have access to a trusted phone number. 

MFA substantially improves security. Even if an attacker steals a user's password, that's not enough to get through authentication. The attacker would *also* need to breach user's secondary factor; this is usually quite difficult. 


## Multifactor authentication in Tesseral

Tesseral supports multifactor authentication (MFA). 

Currently, Tesseral supports two secondary authentication factors: 
1. Authenticator apps ([learn more](/docs/login-methods/secondary-factors/login-with-authenticator-app))
2. Passkeys ([learn more](/docs/login-methods/secondary-factors/login-with-passkey))

Learn more about enabling these secondary authentication factors [here](/docs/features/customizing-your-login-experience).
