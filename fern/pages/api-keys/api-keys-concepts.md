---
---

API stands for "Application Programming Interface," a way for different software systems to talk to each other. A Key is a secret token you can use to give a system access to part of your application without needing a human to log in. 

## Why API Keys matter in B2B software

In B2B software, customers often want to connect your application to their own systems or tools. Think of scripts, services, or integrations. These aren't human users, but still need to prove their identities (i.e., that they actually **do** belong to a specific customer). 

In other words, your customers will have software that needs to be authenticated in *your* software; this is sometimes called machine-to-machine (M2M) authentication. 

For example: 

* Pulling reports into a dashboard  
  * An internal BI tool like Looker or Retool will call your API with a Key to fetch the latest data.

## How API Keys work in Tesseral

Tesseral's API Keys feature is not enabled by default, but it's very easy to opt into. Once you've configured it in your backend, you can turn API keys on or off for any given customer organization. So if a customer asks for API access (for example, to feed data into an internal dashboard) you can enable API Keys with a few clicks. It's a flexible lever for both functionality and monetization. 

As an example, let's say your application is a standard B2B SaaS payroll platform, used by a customer called "UlysseCorp." UlysseCorp's Head of Finance wants to pull monthly payroll reports into an internal dashboard. 

All you need to do is:

* Enable API Keys for UlysseCorp in the Tesseral Console.  
* Create a key for UlysseCorp.  
* Assign the key 'read-only access' to reports. 

UlysseCorp will then be able to use that key in their internal scripts to fetch data securely. 

## How Managed API Keys work in Tesseral 

You can give your customers self-service access to create and manage their own API keys, if you wish to. 

Extending the example from above, your customer UlysseCorp reaches out to say they want to programmatically access your platform's payroll data to feed it into more applications: internal BI / analytics tools to analyze headcount changes and payroll trends; data warehouses, to centralize employee data alongside other business metrics; and compliance or audit pipelines, which UlysseCorp uses for regulatory reporting.

Instead of manually generating different API Keys for UlysseCorp to use, you can enable Managed API Keys for their organization in the Tesseral Console. From there, UlysseCorp can log into your application, create API Keys on their own, and assign them appropriate roles: like read-only access to payroll reports. They can now integrate your B2B payroll platform into their systems securely and on their own timeline, without needing to route every request through you. 

<Card iconPosition="left" icon="light bolt" title="Ready to get started?" href="/docs/managed-api-keys/implement-api-keys-using-tesseral">
  Here's a tutorial on how to implement API Keys and Managed API Keys with Tesseral. 
</Card>
