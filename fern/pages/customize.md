---
title: "Customize Tesseral"
subtitle: "Adapt the look and feel of Tesseral to blend with your product"
---

## Viewing your Vault UI (login page)

Once you have Tesseral integrated with both your [clientside code](docs/getting-started/quickstart#add-tesseral-to-your-clientside-code) and your [serverside code](/docs/getting-started/quickstart#add-tesseral-to-your-serverside-code), you will have a functiona; login page. In Tesseral, this page is called a *Vault UI*. 

You can view the current state of your Vault UI in your web browser by visiting your *Vault Domain*. You will find your current Vault Domain within your [Project Settings](https://console.tesseral.com/project-settings/vault-domain-settings) page in Tesseral's console. Look for the field labeled **Current Vault Domain**. 

<Info> Note that your Vault UI belongs to a Project in Tesseral. Confirm that you are using the intended Project (e.g., *Development* vs. *Production*) when adjusting your Vault UI. </Info>

By default, the Vault UI will look something like this: 

<Frame caption="The default appearance of the Vault UI" >
    <img src = "/assets/customize/default-vault-ui-example.png">
    </img>
</Frame>







## Changing the appearance of your Vault UI (login page)

You can customize the appearance of your Vault UI. 

First navigate to the Tesseral console. Visit your Project's settings and select the *Vault UI Settings* tab. You can also navigate directly to the *Vault UI Settings* using [this link](https://console.laresset-stage.com/project-settings/vault-ui-settings). 

Here you will find a dynamic preview of your Vault UI. It will re-render each time you adjust the Vault UI settings, which include options for:
* [Layout](#layout)
* [Dark mode](#dark-mode)
* [Logo(s)](#logos)
* [Primary color(s)](#primary-colors)

### Layout

Tesseral currently supports two layouts: a *center card* layout and a *side by side* layout. You can toggle between them as shown here:

<Frame caption="The default appearance of the Vault UI" >
    <img src = "/assets/customize/customize-layout.gif">
    </img>
</Frame>

### Dark mode

Tesseral can support dark mode for your users. If you wish to enable dark mode, ensure that *auto-detect dark mode* is switched on. 

If you have dark mode enabled, you will be able to see a preview of your dark mode Vault UI. The toggle for seeing a dark mode preview lies to the top right of the Preview card.

<Frame caption="Enabling dark mode and toggling the dark mode preview" >
    <img src = "/assets/customize/customize-dark-mode.gif">
    </img>
</Frame>

Note that dark mode uses a different [logo](#logos) and [primary color](#primary-colors).

### Logo(s)

By default, the Vault UI displays a Tesseral logo to your users. You may change this to show your own logo. Simply upload a new file.

<Frame caption="Uploading a new Vault UI logo" >
    <img src = "/assets/customize/customize-logo.gif">
    </img>
</Frame>

<Info> For best results, please use a tightly cropped, high resolution file with a transparent background </Info>

If you have dark mode enabled, you will need to upload a separate file under *Dark mode logo*. 


### Primary color(s)

You may change adjust the colors used on the Vault UI if you wish. Use the color selectors in the control panel like this:

<Frame caption="Adjusting the colors of the Vault UI" >
    <img src = "/assets/customize/customize-color.gif">
    </img>
</Frame>

If you have dark mode enabled, you will need to select a suitable color for dark mode as well. 


## Changing login methods 

You may also change how your users log in. For example, you may choose to turn off *Login with Microsoft*. Your users' Vault UI will update to reflect any such changes. 

You may read more about customizing login methods [here](/docs/features/customizing-your-login-experience).
