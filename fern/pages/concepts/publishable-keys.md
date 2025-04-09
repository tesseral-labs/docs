---
title: "Publishable Keys in Tesseral"
subtitle: "Publishable Keys help Tesseral's client-side SDKs identify the appropriate project"
---

## What is a Publishable Key?

A Publishable Key is a globally unique identifier that Tesseral uses to identify [Projects](/docs/concepts/projects) in its [client-side SDKs](/docs/sdks/clientside-sdks). Each Publishable Key belongs to exactly one Project. 

A Publishable Key is **not** a secret. A Publishable Key does **not** authenticate your application to Tesseral. A Publishable Key does **not** itself confer any privileges. 

A Publishable Key's value always begins with `publishable_key_`. Here's an example: `publishable_key_0qo01898k369ncxc05oyyn8qn`.

## How a Publishable Key gets used

Let's consider an example with Tesseral's [React SDK](/docs/sdks/clientside-sdks/react). When you use the React SDKs, you will rely heavily on a `TesseralProvider` component. The `TesseralProvider` handles a great deal of work on your behalf; for example, it redirects the user to your Tesseral Vault when the user is not currently authenticated. 

When you instantiate a `TesseralProvider` component, you must pass it a Publishable Key. The `TesseralProvider` can infer the appropriate Project from the Publishable Key. 

It looks something like this:

```javascript

<TesseralProvider publishableKey="publishable_key_0qo01238k456ncxc05oyyn8qn">
      <App />
</TesseralProvider>

```

## Properties of Publishable Keys

Each Publishable Key belongs to exactly one Project.

<Frame caption="Publishable Keys always belong to Projects" >
    <img src = "/assets/concepts/hierarchy-publishable-key.png">
    </img>
</Frame>


Publishable Keys have a few top-level properties:
1. Display name: a human-legible string describing the Publishable Key
2. ID: a globally unique identifier for the Publishable Key
3. Created: a timestamp for the moment the Publishable Key was created
4. Updated: a timestamp for the moment the Publishable Key was most recently updated
5. [Dev Mode](#dev-mode): a boolean value indicating whether the Publishable Key is in Dev Mode

### Dev Mode

*Dev Mode* enables Tesseral to work on `localhost`. If you are using Tesseral with an app in local development, use a Publishable Key with Dev Mode set to `enabled`. If you are using Tesseral in production -- such that the Vault lives on a domain like `vault.app.myapp.com` -- you should use a Publishable Key with Dev Mode set to `disabled`.

<Info> The mechanics of Dev Mode are quite involved and esoteric. They are **not** relevant to most developers. In short, some modern browsers limit Tesseral's ability to set cookies. Dev Mode navigates around such limitations on `localhost` by passing opaque data in a URL fragment. We have not yet published extensive public documentation on Dev Mode. If you wish to understand Dev Mode in more detail, please reach out to contact@tesseral.com.</Info>


## Managing Publishable Keys

You may find, create, or delete Publishable Keys in the Tesseral console. First navigate to the relevant Project. Then select *Project API Keys* in the navigation bar. You will see a card marked *Publishable Keys*.
