---
title: "Customizing your login experience"
subtitle: "You can configure the appearance and functionality of your login flow without code"
---

## Styling your login experience

Tesseral provides a default login experience -- a Vault UI -- when you first sign up. It allows sign-in via email, lives on a Tesseral domain, and has minimal styling. You will likely wish to customize this experience for your users.

Broadly speaking, you have two options for customizing your login experience:

1. (Recommended) Styling the built-in Vault UI
2. Building a custom login page using the Tesseral SDKs

### Styling the built-in Vault UI

Tesseral makes it easy to modify the styles of the Vault UI. 

You can read more about styling the Vault UI [here](/docs/customize).


### Building a custom login page using the Tesseral SDKs

If you wish, you may use Tesseral's SDKs to build a custom login page to replace the built-in Vault UI. Be aware that this approach will involve considerable work; we do not generally advise building a custom login page unless you have unusual requirements. 

We have not yet prepared extensive public-facing documentation for building a custom login page. However, we are always happy to help if you reach out to *contact@tesseral.com*.


## Changing login methods

Tesseral supports several different ways for users to log in; these are sometimes called *authentication factors*. You can read more about the login methods that Tesseral supports [here](/docs/login-methods).

You may change the ways your users log in. For example, you can enable login methods like *Sign in with Google* or SAML single sign-on. 

There are two major ways to change the ways your users can log in: at the Project level and at the Organization level. If you want to change how users log in, you must first enable/disable login methods at the Project level. From there, you may override available login methods for a given Organization. 

For example, you may have a customer who insists that all users use SAML single sign-on. In this case, you would enable SAML single sign-on in your project settings.

<Note>If you wish to enable a login method for a given Organization, you **must** first confirm that the login method in question has been enabled at the Project level. An Organization can only have more restrictive settings than the Project.</Note>

### Changing login methods for a Project

To change the login methods enabled for a project, first navigate to your *Project Settings* page. Scroll down to the card labeled *Login Methods*. Press the *Edit* button. 

You will see a number of on/off toggles for login methods. Select the login methods you wish to enable.

<Frame caption="Adjusting project-level login methods" >
    <img src = "/assets/customize/customize-login-methods.gif">
    </img>
</Frame>

In some cases, this will change the appearance of your Vault UI. For example, if you enable *Login with Google*, you will see a *Login with Google* button appear.

### Changing login methods for an Organization

Organizations can have more restrictive login methods than the Projects they belong to. Organizations *cannot* use a login method that is not enabled for the Project.

If you wish to change the login methods available to an Organization, first navigate to the Organization's page in the Tesseral console. You can find this page by pressing *Organizations* in the navigation bar and finding the relevant Organization by its unique ID or display name. 

On the Organization's page, you'll see a *Details* card. Press the *Edit* button. 

<Frame caption="Adjusting login methods for a specific Organization" >
    <img src = "/assets/customize/customize-login-methods-organization.gif">
    </img>
</Frame>

Remember, Organizations can only have *more* restrictive login methods than the Project. 