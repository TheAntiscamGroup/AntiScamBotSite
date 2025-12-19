---
title: Privacy Policy
subtitle: ScamGuard's Simple (yet detailed) Privacy Policy
layout: page
hero_height: is-fullwidth
description: The Privacy Policy for the ScamGuard Discord bot
redirect_from: /privacy-policy
toc: true
---

---

> Last Updated: 12/09/2025

The usage of this service/application ("bot") in your server requires the collection of some specific user data. Usage and interaction of {{ site.bot_name }} ("the bot"), reporting tools or the user app interactions ("tools") is considered an agreement to this policy.

## In a nutshell

The bot, tools and web reporter use the most minimal amount of data collection possible to keep the service running. We generally only store things you explicitly and consciously share with us.
Most of the information we store is public information. The things that are not immediately public information are held towards the highest amount of data security possible.

We won't share your information, we won't sell your information. We don't have access to your messages.

If you want this information gone, stop using the services and they'll be scrubbed automatically in around three calendar weeks.

This policy only goes into the level of detail that it does in order to be extremely transparent.

## What is collected?

The usage of the bot requires the following data collected/stored:

* A numeric value that represents a Discord Server ("Server ID")
* A numeric value that represents the Owner ID of the Server ("Owner ID")
* A numeric value that represents the activator of the bot in a server ("Activator ID")
* A value that represents if the bot is "activated" in a server with the "Server ID" ("Activated")
* User Settings related to {{ site.bot_name }}'s configuration in your server (provided by the `/scamguard config` and `/scamguard setup` commands)
* Basic server information to help first time installation/activation (not stored)

For the TAG approver/review team, the following information is stored when they ban an scammer:

* The approver's Discord username
* The approver's Discord User ID
* The time the ban was executed

For the Discord app interactions ("tool") that can be installed onto a Discord user account:

* Metrics regarding how many times a command is used (to help implement & enforce cooldowns and prevent abuse)
  * What command was used
  * Who used it
  * When the command was used
* The Channel ID if a message was forwarded using the tool.
  * This data is automatically deleted at the expiration time the tool responds with.

For reports, the following is collected and stored:

* Any information you explicitly share with us
* If the report was submitted automatically, the following is appended to a report:
  * The server the report came from
  * The user who submitted the report
  * Resolution of any names/handles into Discord User/Server IDs.

---
**Please note**: Discord provides access to Server/User IDs to everyone. They are considered _public information_ by Discord.

Collection of data may expand or modify in the future, but will attempt to stay within the scope of bare minimal collection as per the recommendations of Discord and their own Terms of Service.

## Who has access to that data?

### General

All users that either have the role of `Reporter` or `User`, or they are a part of TAG staff can see Scam Reports regardless of method submitted.  
This visibility and transparency allows us to stay **100% auditable**.

_Information in reports **should not** be considered private._

### Role Specific

Outside of the above general data access, some roles have access to a bit more private information.
Who has that access and the level of said access is detailed below.

#### Maintenance users

Have access to:

* The current list of activated servers and who owns a given server
* The server ids when the bot encounters an error with a server and needs help being restored

#### API users

Have access to:

* Ban statistics
* Information about a banned scammer
* The trusted approver who validated a scammer

**NOTE**: No server data is accessible via the API.

#### Trusted approvers

Have access to some basic server information when the bot is first added to a server. Some of this information does overlap with the data we store to maintain
the bot's ability to work. However, the scenario in which Trusted Approvers are able to see this information is limited to the first time the bot is installed until
the bot is fully activated.

---

Overall, while external access is protected, this is not guaranteed and the bot owners assume no liability for the unintentional or malicious breach of any data.  
In the event of unauthorized data access, users in [the control server](/discord) will be alerted.

## Where is the data stored?

The bot stores information in a SQLite database that the bot has access to.  
Outside of the data provided by the API, there's no external access to the database.

Both the bot and tools have log files that are stored locally and rotate about every 14 days.

## Do you sell this data?

No.

## Do you use AI or train on the data?

No.

## Do you store information about users in a server?

No.

However, you can extrapolate that an user came from a certain server if the user in question used the automated report command.  
If you don't want this to happen, you can turn off the `/scamguard report` command in your integration permissions view.

## Can the bot read server messages?

No.

## Do you store/read/access my private messages?

No.

User app interactions run in a sandbox environment, that only gives access to whatever message invoked them.  
If you send a message directly to the tool, it will only be able to see that message.

## How do I remove the data the bot has on me/my servers?

Kick/remove the bot from your server. Data will be removed the next time the bot is either online or is processing events.

Data will be fully removed from the active working database and all backups within three calendar weeks.

## What about reporting scams from the website/tool?

Data submitted via the [report page](/report) or the tool is handled in transit by Cloudflare before stored at rest on the TAG support server. Any uploaded image evidence lasts for approximately one calendar year from upload in a publicly accessible R2 bucket (not indexible) before being automatically deleted.  
  
All reports fall [under this section of the policy](/privacy#general).

## What about...?

For more information, you can check the [Discord Privacy Policy](https://discord.com/privacy).
