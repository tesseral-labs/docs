---
---

This article explains how you can add RBAC to your app using Tesseral.

<Steps>

<Step>

  ### Sign up for Tesseral

  If you haven't already, sign up for Tesseral at [console.tesseral.com](https://console.tesseral.com) and follow the Quickstart Guide.
</Step>

<Step>
  ### Define Actions

  <Frame caption="Defining an Action">
    <video
      src="/assets/rbac/rbac-create-action.mp4"
      autoplay
      loop
      playsinline
      muted
      controls
    >
    </video>
  </Frame>

  Go to your Project's [Access Control
  settings](https://console.tesseral.com/settings/access). You will now define a
  set of Actions. Each Action represents a single conceptual operation your Users
  can perform in your app. Actions have a **name** and a **description**.

  An Action's _name_ is the unique identifier for the Action. Later, when you add
  permission checks to your backend, you will reference the Action by its name.

  An Action's _description_ is a human-readable description of the Action. It
  will be displayed to your Users to explain what the Action does.

  You can create as many Actions as you want, and you can add more Actions later
  as your app develops further.

  By way of example, your set of Actions might look like:

  | Action Name            | Description               |
  |------------------------|---------------------------|
  | `acme.widgets.view`    | View a list of widgets    |
  | `acme.widgets.create`  | Create a new widget       |
  | `acme.widgets.delete`  | Delete an existing widget |
</Step>

<Step>

  ### Define Roles

  <Frame caption="Defining a Role">
    <video
      src="/assets/rbac/rbac-create-role.mp4"
      autoplay
      loop
      playsinline
      muted
      controls
    >
    </video>
  </Frame>

  Once you have defined Actions, you can define Roles. A Role is a set of
  Actions, and Users can be assigned to Roles. Users can be assigned to multiple
  Roles.

  In the previous step, you defined Actions. Each Action represents a fine-grained
  operation  Now, you will define Roles. A Role is a set of Actions.

  To define a new Role, click on "Create Role" at the top right of the
  "Roles" section. Give each Role a User-facing _Display Name_, then add
  Actions to the Role. You can add as many Actions as you want.

  Using the same example from the previous step, you might define the following
  Roles:

  | Role Display Name | Actions                                                           |
  |-------------------|-------------------------------------------------------------------|
  | Widget Admin      | `acme.widgets.view`, `acme.widgets.create`, `acme.widgets.delete` |
  | Widget Editor     | `acme.widgets.view`, `acme.widgets.create`                        |
  | Widget Viewer     | `acme.widgets.view`                                               |

</Step>

<Step>

  ### Assign Users to Roles

  <Frame caption="Assigning a User to a Role">
    <video
      src="/assets/rbac/rbac-assign-role.mp4"
      autoplay
      loop
      playsinline
      muted
      controls
    >
    </video>
  </Frame>

  Once you have defined Roles, you can assign Users to Roles. You can assign as
  many Users as you want to a Role, and you can assign a User to multiple Roles.

  Your customers can assign their own Users to Roles, or you can assign Users to
  Roles yourself from the Tesseral Console.

  To assign a User to a Role from the Tesseral Console, go to the [Organizations
  page](https://console.tesseral.com/organizations) in the Tesseral Console. Find
  the User's Organization and then navigate to the User's Role tab.

  From this User Roles tab, you can assign or unassign the User to or from Roles.

</Step>

<Step>
  ### Add permission checks to your backend

  Now that you've defined Roles and Users, you can add permission checks to your
  backend. Use the Tesseral SDK for your backend language to enforce permission
  checks in your product.

  <Tabs>
  
    <Tab title="Express.js">

    </Tab>

    <Tab title="Flask">

    </Tab>

    <Tab title="FastAPI">

    </Tab>

    <Tab title="Django">

    </Tab>

    <Tab title="Go">

      If you haven't already, follow the [Go Quickstart
      Guide](/docs/sdks/serverside-sdks/tesseral-sdk-go).

      Any time you need to check whether the current User is allowed to perform an
      action, use `auth.HasPermission`:
      
      ```go {6}
      import "github.com/tesseral-labs/tesseral-sdk-go/auth"
      
      func(w http.ResponseWriter, r *http.Request) {
          ctx := r.Context()
      
          if (!auth.HasPermission(ctx, "acme.widgets.delete")) {
              // ...
          }   
          // ...
      }
      ```

      Replace `acme.widgets.delete` with the name of one of the Actions you defined
      previously. Add `auth.HasPermission` checks everywhere in your backend where you
      need to enforce permissions.

    </Tab>

    <Tab title="Axum">

    </Tab>

    <Tab title="Next.js">

    </Tab>

  </Tabs>

</Step>

<Step>
  ### (Optional) Add permission checks to your frontend

  Adding permission checks to your frontend is optional. If you don't want to
  enforce permissions in your frontend, you can skip this step. The advantage of
  adding permission checks to your frontend is that you can display a more
  user-friendly error message to your Users if they are not allowed to perform an
  action.

  You can add permission checks to your frontend using the Tesseral SDK for your
  frontend language.

  <Tabs>

    <Tab title="React">

      If you haven't already, follow the React Quickstart Guide.

      Any time you want to check for permissions from your frontend, call
      `useHasPermission`:

      ```tsx {4,8}
      import { useHasPermission } from "@tesseral/tesseral-react";
      
      const DeleteWidgetsButton = () => {
        const hasPermission = useHasPermission();
      
        return (
          <Button 
            disabled={!hasPermission("acme.widgets.delete")}
          >
            Delete Widget
          </Button>
        );
      }
      ```

      Replace `acme.widgets.delete` with the name of one of the Actions you defined
      previously. Add `useHasPermission` checks everywhere in your frontend where you
      need to enforce permissions.


    </Tab>

  </Tabs>

</Step>

</Steps>

## Advanced Usage

### Custom Roles

<Tip>

  Once you've implemented RBAC, you do not need to make any code changes to
  support custom Roles.

</Tip>

In the previous steps, you defined Roles available to all Organizations in your
Project. If an Organization wants to define their own Roles, you can enable
Custom Roles for that Organization from the Tesseral Console.

After you have enabled Custom Roles for an Organization, your customers can
create their own Roles, or you can create those custom Roles yourself from the
Tesseral Console.

To enable Custom Roles for an Organization, go to the [Organizations
page](https://console.tesseral.com/organizations) in the Tesseral Console. Under
the Organization's Roles tab, enable Custom Roles.

To create a Custom Role for an Organization, go to that Organization's Roles tab
and click on "Create Role". Custom Roles work just like ordinary Roles, except
they only exist for a single Organization.

You do not need to change your backend or frontend permission checks to handle
Custom Roles.

### Assigning API Keys to Roles

<Tip>

If you're using API Keys, you don't need to make any code changes to have RBAC
support for API Keys.

</Tip>

<Frame caption="Assigning an API Key to a Role">
  <video
    src="/assets/rbac/rbac-assign-api-key-role.mp4"
    autoplay
    loop
    playsinline
    muted
    controls
  >
  </video>
</Frame>

If you're using API Keys, you can assign API Keys to Roles. This allows your
customers to define API Keys with specific permissions.

After you've enabled API Keys for your Project, your customers can assign their
own API Keys to Roles, or you can assign API Keys to Roles yourself from the
Tesseral Console.

To assign an API Key to a Role from the Tesseral Console, go to the
[Organizations page](https://console.tesseral.com/organizations) in the Tesseral
Console. Find the Organization the API Key belongs to, and then navigate to the
API Key's Role tab.
