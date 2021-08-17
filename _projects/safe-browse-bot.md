---
short_name: safe-browse-bot
name: Safe Browse Bot
description: Google Safe Browsing for Discord
---

Safe Browse Bot is a Discord bot that automatically checks and flags URLs in messages against Google's [Safe Browsing](https://safebrowsing.google.com/) service.

It is written in [Go](https://golang.org/) using the official [`sbserver`](https://github.com/google/safebrowsing/tree/master/cmd/sbserver) proxy and the [discordgo](https://github.com) library.

Here's a screenshot of the bot's info message:

![A discord screenshot showing me and the bot, with a large message from the bot containing infomation about itself](/assets/projects/sbbot.png)

You can invite the bot into your server with this link:

[https://discord.com/api/oauth2/authorize?client_id=876793749982826497&permissions=262208&scope=bot](https://discord.com/api/oauth2/authorize?client_id=876793749982826497&permissions=262208&scope=bot)
