---
title: "Backend API Keys in Tesseral"
subtitle: "Backend API Keys authenticate your server-side code to Tesseral's backend API"
---

## What is a Backend API Key?

A *Backend API Key* is a globally unique secret that you 

Each Backend API Key is scoped to exactly one Project. 

<Frame caption="Backend API Keys always belong to Projects" >
    <img src = "/assets/concepts/hierarchy-backend-api-key.png">
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
1. 
