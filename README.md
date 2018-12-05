# Botium Box - Community Edition

## Prerequisite 1: Redis

Get Redis - a free instance from https://redislabs.com/ as a starter. From the "Configuration" please note the Endpoint and the Redis Password for later use (you can choose any Redis username when configuring Botium Box later).

## Prerequisite 2: Prisma

Get Prisma - a free instance running on Heroku as a starter. See [here](https://www.prisma.io/blog/heroku-integration-homihof6eifi). From the Heroku Dashboard, open the "Settings" tab, then "Reveal Config Vars", the environment variable named "CONFIG" shows the "Management API Secret" - you will need this later. The Heroku endpoint is required later as well.

## Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Fill in the environment variables from what you know from above.

Default username: "admin"

Default password: "nooneknows"

Have fun.
