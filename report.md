---
title: Report a Scam
subtitle: Send a report directly to ScamGuard and TAG
layout: page
hero_height: is-fullwidth
description: Report a Discord scammer to ScamGuard
---

Use the handy form below to submit reports of scammers to {{ site.bot_name }}.  

{% include notification.html message="Please do not submit **anything** containing secret or confidential information via this form. Submissions via this form are subject to [our privacy policy](/privacy)." status="is-danger is-light" icon="fas fa-exclamation-triangle" %}

{% if site.use_zapier_report == true %}
{% include report_zapier.html %}
{% else %}
{% include report_form.html %}
{% endif %}
