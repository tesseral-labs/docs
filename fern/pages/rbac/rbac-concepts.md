---
---

In business software, we often want different users to have different
privileges; not everyone within a workspace gets to do the same things. Most
commonly, business software applications rely on a design pattern called *RBAC*
to handle these kinds of user privileges.

RBAC stands for "role-based access control." It's a way to manage what users can
do in your app based on the Roles they have. You define Roles like admin,
editor, or viewer within an Organization, then assign those Roles to that
Organization's users. Each role comes with a set of allowed Actions.

As an example, let's use a standard B2B payroll application used by UlysseCorp.
Within the UlysseCorp organization, the CFO, the Head of HR, and employees need
access to different features. The Head of HR will need the ability to create a
new employee profile, for example. Similarly, some features should not be
available to everyone – employees should not be able to view others' paystubs.

Here's what UlysseCorp's RBAC structure could look like:

| Action               | Description                                                                                                                                                                                                         | CFO | Head of HR | Employee |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|------------|----------|
| `profile.update`     | Update your own profile information.<br /><br />This is a baseline permission available to all UlysseCorp users.                                                                                                    | ✅   | ✅          | ✅        |
| `paystubs.view_self` | View your own paystubs.<br /><br />This is a baseline permission available to all UlysseCorp users.                                                                                                                 | ✅   | ✅          | ✅        |
| `paystubs.view_all`  | View all employees' paystubs.<br /><br />This is split from `paystubs.view_self` so that all UlysseCorp employees can view their own paystubs, but only the Head of HR and the CFO can view every employee's paystub. | ✅   | ✅          | ❌        |
| `employee.create`    | Add new hires to the organization.                                                                                                                                                                                  | ❌   | ✅          | ❌        |
| `payroll.run`        | Execute payroll for all employees.                                                                                                                                                                                  | ❌   | ✅          | ❌        |
| `reports.view`       | View HR and financial reports.                                                                                                                                                                                      | ❌   | ✅          | ❌        |
| `billing.view`       | View billing and payment settings.                                                                                                                                                                                  | ✅   | ❌          | ❌        |
| `billing.update`     | Update company billing details.                                                                                                                                                                                     | ✅   | ❌          | ❌        |

## Why RBAC matters in B2B software

RBAC is essential in modern B2B apps, where different users from the same
Organization have different responsibilities.

* In B2C software, access control is often user-specific: one user, one set of
  permissions. If you're logging in to an app like Club Penguin or Facebook, you
  will have the same access to all the standard features as other users.
* In B2B software, users belong to companies, and roles within the app need to
  reflect job functions. As illustrated in the example above, UlysseCorp's CFO
  needs different permissions within the payroll application from the Head of HR
  and from employees.

With RBAC, you can enforce least privilege, ensuring that users can only see and
do what they're meant to, and keep permission logic organized, secure, and
scalable.

## How RBAC works in Tesseral

Tesseral handles all the logic for RBAC on your behalf, so you don't have to
write your own user permission system from scratch.

All you have to do is:

1. Define Actions in your Tesseral Project: these represent specific operations
   in your app (e.g., `employees.create`, `billing.update`, and `payroll.run`).
2. Create Roles and assign them sets of Actions.
3. Assign Users to Roles through the Console.

<Tip>

Tesseral also offers RBAC support for API keys. If you're using API keys, you
don't need to make any code changes. You can assign them to Roles to allow your
customers to define API keys with specific permissions. More on that
[here](/docs/managed-api-keys/concepts-what-are-api-keys).

</Tip>

<Card iconPosition="left" icon="light bolt" title="Ready to get started?" href="/docs/rbac/implement-rbac-using-tesseral">
  Here's a tutorial on how to implement RBAC with Tesseral.
</Card>
