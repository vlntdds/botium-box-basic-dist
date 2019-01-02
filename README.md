# Botium Box - Community Edition

Botium Box is running on standard components available for free. You can install it on your own server (on premise), or use cloud providers for serverless installation, or even a mixture of those approaches.

## Botium Box Serverless Installation

Botium Box can be installed "serverless" using existing cloud services. 

### Prerequisites

#### Prerequisite 1: Redis

Get Redis - a free instance from https://redislabs.com/ as a starter. From the "Configuration" please note the Endpoint and the Redis Password for later use (you can choose any Redis username when configuring Botium Box later).

#### Prerequisite 2: Prisma

Get Prisma - a free instance running on Heroku as a starter. See [here](https://www.prisma.io/blog/heroku-integration-homihof6eifi). From the Heroku Dashboard, open the "Settings" tab, then "Reveal Config Vars", the environment variable named "CONFIG" shows the "Management API Secret" - you will need this later. The Heroku endpoint is required later as well.

### Botium Box Deployment

#### Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Fill in the environment variables from what you know from above, and afterwards navigate to the Heroku App.

*Attention: the Heroku free tier is not suitable for Botium Box production usage*

#### Build and run Docker Container

For hosting Botium Box as Docker, use these commands to build and run a Docker image:

```
> git clone https://github.com/codeforequity-at/botium-box-basic-dist.git && cd botium-box-basic-dist
> docker build --build-arg BOTIUMBOX_QUEUE_REDISURL=redis://redisuser:redispassword@redishost:redisport --build-arg PRISMA_ENDPOINT=https://my-prisma-endpoint/demo/dev --build-arg PRISMA_MANAGEMENT_API_SECRET=my-prisma-management-api-secret --build-arg PRISMA_SECRET=something123 --build-arg JWT_SECRET=something123 -t botiumbox .
> docker run -p 4000:4000 botiumbox
```

Botium Box will now run on http://localhost:4000

For some log output, run this command instead:

```
> docker run -p 4000:4000 -e DEBUG=botium* botiumbox
```

## Botium Box Standalone Installation

You can run Botium Box on your own server.

### Prerequisites

* docker
* docker-compose

### Build and run

```
> git clone https://github.com/codeforequity-at/botium-box-basic-dist.git && cd botium-box-basic-dist
> npm install
> npm run start-standalone:backend
> npm run start-standalone:frontend
```

Botium Box will now run on http://localhost:4000

_Installation and startup can take a while, especially on first usage._

## Login to Botium Box

Default username: "admin"

Default password: "nooneknows"

Have fun.
