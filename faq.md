---
title: FAQ
description: Answers regarding ScamGuard, what it does and other things!
layout: page
toc: true
hero_height: is-fullwidth
---

---

## {{ site.bot_name }} Info

---

### How do I enable {{ site.bot_name}} in my server?

{% include install_info.html %}

### Do I have to add a mod role to {{ site.bot_name }}?

It's recommended that you do, it solves so many potential issues with Discord permissions.

However, if you would not want to do so, [follow the instructions on this page here](/advanced-install).

### Can {{ site.bot_name }} ever ban the server owner or mods?

{{ site.bot_name }} cannot ban anyone who has a role equal to or higher than it in the roles list. This is why it is suggested to just give {{ site.bot_name }} a mod role, which will allow it to operate correctly.  

The only exception to this rule is if server ownership was transferred to the bot (please don't do this).

### Why does {{ site.bot_name }} need the permissions it has?

Because of how Discord handles permissions it needs the following permissions:

* `Create Commands`: To add the application commands to interact with the bot.

* `Create Private Threads`: This is used to send the first time setup message.

* `Send Messages`: To send responses to user commands.

* `Send Messages in Threads`: Same as above.

* `Ban Members`: To execute the bans on scammers.

* `Kick Members`: This is currently unused, but may be used in the future with more features.

* `Embed Links`: To give you information when you run `/scamguard check` and other commands.

* `Manage Webhooks`: To allow for subscribing to the ban notification feed if you so choose during setup.

* `View Channels`: To handle sending messages on initial setup.

### When I activated the bot, why did it suddenly started banning tons of accounts?

{{ site.bot_name }} imports all the bans of scammers that it knows about. This can be several hundreds to thousands of accounts, but not to worry, due to the way {{ site.bot_name }} processes bans, these accounts do not have to be in your server.  

While it may look like your Discord community is going through a ban wave, it is not.

### How come {{ site.bot_name }} started banning a bunch of accounts a day later?

Discord has a limit to the number of accounts you can ban a day. {{ site.bot_name }} detects when your server is getting close and stops _way before_ that limit is hit.

This process will then resume where the bot left off, every day over the next few days until it is all caught up.

### Someone messaged me saying they're unable to get into my server, is that {{ site.bot_name }}'s doing?

> It's _extremely unlikely_ that a legitimate user was caught and banned by {{ site.bot_name }}.

You can run a `/scamguard check` against their Discord user id to see if their account is registered as a scammer by {{ site.bot_name }}.  

If this check comes back as _false_, the user might have tried to join from a "suspicious IP" and was barred entry by Discord.

This can happen if a scammer previously had the user's IP address (as IP addresses often recycle to various people) and either made several accounts or violated the Discord TOS.

_Rarely_, when a scam account is banned, Discord may also flag the IP address the scammer was using.  
There's **no way to know** if/when Discord does this on your behalf.  
There's also **no way to turn this Discord feature off** but it has been observed this block expires after a few days.

Legitimate users can get around this Discord behavior by joining the server on their mobile device or a VPN instead.  
They can then access the server via anywhere without any negative effects.

_It's been two years (as of November 2025), since we've heard anyone having this issue. Discord may have turned it off._

### How come I don't see the channel I want to put messages in?

If you have a lot of channels in your server, the Discord API will cap out the number of channels that appear in the channel selector.

To fix this:  

* Move the category/channel that you want the bot to send messages into to the top of the your channel list
* Open your ScamGuard settings/activation using the command
* Set the channel
* Move the category/channel back to the original position

### Is {{ site.bot_name }} open source?

Yes! You can see the [project source code here](/github).

### What information do you store?

You can [view our privacy policy right here](/privacy)!

### Is there a terms of service for using {{ site.bot_name }}?

Yes, you can [view that page here](/terms)!

### Why is the icon of the bot "hey^^"?

When this project first started, scammers would always start their DMs with the message "hey^^". It was really easy to tell if someone was about to scam you because of this.

## How to use

---

This section assumes that you are in a server that has {{ site.bot_name }} and went through the setup steps.

### How do I report a scam?

Currently we support three different ways of reporting a scam!

* Via the `/scamguard report` command
* Via the [Discord Server](/discord)
* Via the [web report system](/report)

When you report an user, you'll be asked to provide some image evidence, this is important when determining appropriate action.

{% include notification.html message="**SUGGESTION**: When you go to ban a scammer from your server, use `/scamguard report` function beforehand, that way you can make your ban more impactful by helping protect others too!" status="is-warning is-light" icon="fas fa-exclamation" %}

### How do I know if someone is already banned?

A couple of different ways!

* Via the server feed (see below) that you can install when setting up {{ site.bot_name }}
* Looking them up in the [TAG Server](/discord)
* Via the [API](/api)
* Running the command `/scamguard check` with an user id or a Discord handle

{%include image.html lazy="true" fetch="low" width="637px" height="433px" alt="Action Feed Screenshot" src="/assets/botbanchannel.png" class="centered" %}

All bans will be logged into your server's audit log. You can revert any ban if you wish and {{ site.bot_name }} will not attempt to re-add it unless you explicitly ask it to reimport bans for your server.

> **Note**: Reports are not immediately visible to newly joined users of the TAG server to combat potential abuse.

## Scammers

---

### What is a scammer?

Scammers are users/bots on Discord who send unsolicited direct messages demanding that you commission the scammer that you do not know to buy their traced/genAI/stolen artwork. In some instances, they charge your payment account (Paypal, Boosty, etc) and never deliver anything.

This is not a complete list, but these are also scams as well:

* Ask you to playtest their game out of the blue (this is usually from someone getting their account compromised)
* Ask you what you'd do with sudden influxes of cash (the "sugar momma" scam)
* Direct solicitation of commissions
* Stolen/traced/obvious genAI artwork
* Fake steam game offers, phishing links
* Impersonating other users (usually big content creators)
* Proposing channel management services & SEO methods to boost your channel

They will always solicit you first. Do not give these scammers your money.

## The Process

---

### How does {{ site.bot_name }} know who is a scammer?

User report submissions! {{ site.bot_name }} has a Trust and Safety team that reviews each user report and takes appropriate action. We don't use AI.

### Do you use AI?

Nope. We're not interested. There's too many potential false positives.

### What about abuse?

The bot requires that someone with a `Trusted` role vets the report on the suspected scammer. If the approver confirms the report is valid, the ban will be blasted to all servers that use {{ site.bot_name }}.

### What about mistakes?

{{ site.bot_name }} can revert any mistakes if this needs to happen, approvers have a command to reverse any bans that the bot acted on (it cannot randomly unban any user, {{ site.bot_name }} can only unban users that it banned originally).

If you are a server mod, you can also just simply unban the user in your own server as well. If your server is already fully activated/sync'd, {{ site.bot_name }} will not attempt to reban the user.

## The Group

---

### What is "The Antiscam Group"?

It's just a silly little name for the Discord server.

### How do I join the group?

There's no official group or collective.  

However, by making reports or contributing to the bot [on Github](/github), you're helping all of us out.

### I don't have a Discord server, can I join the TAG server?

Yes! If you're getting commission scams, feel free to join and report them. However, realize that the TAG server isn't a social community. Streamer communities are much better suited for that.
