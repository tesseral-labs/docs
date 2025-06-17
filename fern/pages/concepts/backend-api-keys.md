---
title: "Backend API Keys in Tesseral"
subtitle: "Backend API Keys authenticate your server-side code to Tesseral's backend API"
---

## What is a Backend API Key?

A *Backend API Key* is a globally unique secret that you use to authenticate with Tesseral's [backend API](/docs/backend-api-reference/). If you wish to use the backend API, you must pass it a valid Backend API Key.  

The backend API primarily helps you perform CRUD operations on Tesseral resources. For example, if you want to pull a list of [Users](/docs/concepts/users) from Tesseral, you can make an HTTP GET request to `https://api.tesseral.com/v1/users`. (Most developers will use a [server-side SDK](/docs/sdks/serverside-sdks) for this.)

Each Backend API Key belongs to -- and can interact with -- exactly one [Project](/docs/concepts/projects). 

<Frame caption="Backend API Keys always belong to Projects" >
    <img src = "/assets/concepts/hierarchy-project-api-key.png">
    </img>
</Frame>


## How a Backend API Key gets used

Consider the following simple example using Python that creates an Organization. 

```python
# instantiates a Tesseral backend API client using an API Key
client = Tesseral(backend_api_key = os.getenv("TESSERAL_KEY"))

# creates a new Organization within the Project that the API Key belongs to
client.organizations.create_organization()
```

<Note>Because each API Key belongs to exactly one Project, Tesseral's API can infer the appropriate Project from the API Key. Tesseral's API does not need the Project's unique identifier for operations like `create_organization`.</Note>


## Properties of a Backend API Key

A Backend API key has a few top-level properties:
* ID
* Display name
* Created time
* Updated time
* Revoked

### ID

Each Backend API Key has an `id` property that begins with `backend_api_key_`. This value is **not** a secret. It merely identifies the API key; for example, you can find a given Backend API Key in the Tesseral console at the route `https://console.tesseral.com/project-settings/api-keys/backend-api-keys/backend_api_key_...`.

<Warning> Each Backend API Key has a secret value that begins with `tesseral_secret_key_`. This is distinct from the `id`, which begins with `backend_api_key`. You **must** take measures to keep this value secret.</Warning>

### Display name

Each Project may have many Backend API Keys. It may become practically difficult to identify Backend API Keys by their `id` values, merely because `id` is not really human-legible. 

For this reason, Tesseral lets you assign a descriptive *display name* to each Backend API Key. This can be any string. 

### Created time

This field simply represents the timestamp from when the Backend API Key record was created.

### Updated time

This field simply represents the timestamp from when the Backend API Key record was most recently updated.

### Revoked

*Revoked* is a boolean value. Tesseral's backend API will reject any requests that use Backend API Keys for which this value is `True` (displayed as *yes* in the console). 

You cannot restore a revoked Backend API Key -- that is, you cannot change this value from `True` to `False`. Instead, you can simply create a new Backend API Key. 
