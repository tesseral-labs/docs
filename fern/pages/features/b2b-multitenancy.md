---
title: "B2B multitenancy in Tesseral"
subtitle: "Tesseral's tenancy model is designed specifically for B2B SaaS"
---

## What is multitenancy?

Consider the calculator app on your phone. It doesn't really store any data. It doesn't need to support multiple people using the app. It's a pretty simple app that just handles arithmetic for you. 

Most web-based software is more complicated than that. Loosely speaking, people who use web-based software will interact with the same application, which runs on shared cloud infrastructure. Again loosely speaking, that means everyone's data inhabits the same database. 

A software application can't generally show *all* of its data to just *anyone*. Imagine a chat application; messages exchanged between Alice and Bob likely should not be available to a third person, Eve.

Software applications therefore usually implement *multitenant logical isolation*, using software-defined rules that scope access to certain data or functionality. 


## The main multitenancy models in cloud software

Not all multitenancy models work the same way. Two main archetypes of multitenancy characterize cloud software applications:

1. Consumer (B2C) multitenancy
2. Enterprise (B2B) multitenancy

### Consumer (B2C) multitenancy

Consumer (B2C) multitenancy generally characterizes cloud software applications used by individuals. Familiar examples of such applications might include:
* Social media like Reddit or Pinterest
* Ecommerce websites like Etsy or Brooklinen
* Video games like Chess.com or Geoguessr

Software using the B2C multitenancy model implements tenancy boundaries around *individuals*. The software considers each person using the software to be a tenant. Settings, permissions, and other data belong to the individual. 


### Enterprise (B2B) multitenancy

Enterprise (B2B) multitenancy characterizes cloud software applications used by *businesses* or similar entities (e.g., schools); we usually just call this kind of software "B2B SaaS." Familiar examples might include:
* Human resources software like Workday or Paylocity
* Collaboration software like Slack or Asana
* Technical software like Datadog or Hashicorp

In B2B SaaS, Users belong to Organizations. For example, if a human resources manager at Southwest Airlines signs into Workday, he signs in as a member of the Southwest Airlines Organization. If he leaves Southwest to begin a new job at Best Buy, he will need a new Workday account that represents his employment at Best Buy. 

In this sense, the *Organization* is the first-class tenant, not the User.

This matters greatly for a few reasons, including:
1. The Organization receives the bill for services. For example, if a B2B SaaS charges for seat-based licenses, it needs a way to aggregate charges at the Organization level. 
2. Users within an Organization change all the time. For example, companies frequently hire new employees and/or part ways with employees.
3. Organizations usually wish to implement policies that apply to all Users. For example, an IT team may wish to require single sign-on. 
4. Users may have different roles within an Organization. For example, an Organization may have *admins* that have broader privileges.

Business software nearly always requires this form of multitenancy.

## How multitenancy works in Tesseral

Tesseral always uses the enterprise (B2B) multitenancy model. In Tesseral, users always belong to Organizations. Users cannot exist outside an Organization.

Note that Organizations do not need to have multiple users. To accommodate individual users -- as in the consumer (B2C) multitenancy model -- you may create Organizations that simply have one user.

<Info>
If you wish to hide the creation of Organizations from your customers, you may toggle the *Auto-create Organizations*. 
</Info>
