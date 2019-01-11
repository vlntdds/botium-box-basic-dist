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

* [docker](https://www.docker.com/get-started)
* [docker-compose](https://docs.docker.com/compose/install/)
* [Node.js](https://nodejs.org/en/download/)

### Download, build and run from NPM registry (recommended)

__Prepare Backend services__

1. Download [docker-compose.yml](https://github.com/codeforequity-at/botium-box-basic-dist/blob/master/server/database/docker-compose.yml) and save to your local hard drive.
2. Start backend services (includes Prisma, MySQL and Redis) by running docker-compose:
```
> docker-compose up
```

__Download and run Botium Box__

1. Download Botium Box:
```
> npm install -g botium-box
```
2. Run Botium Box:
```
> botium-box-cli start --pe http://127.0.0.1:4466/box/dev -r redis://127.0.0.1:6379 -p 8080
```
3. Point your browser to http://127.0.0.1:8080

### Download, build and run from Git repository

```
> git clone https://github.com/codeforequity-at/botium-box-basic-dist.git && cd botium-box-basic-dist
> npm install
> npm run start-standalone:backend
> npm run start-standalone:frontend
```

Botium Box will now run on http://localhost:4000

_Installation and startup can take a while, especially on first usage._

## Botium Box Hybrid Installation

It is possible to mix the above architecture: Prisma, Redis and Botium Box are loosly coupled, you can choose whatever your infrastructure suggests as best option - Prisma and Redis in the cloud, Botium Box locally. Or run Prisma locally, Botium Box in the cloud and use an existing Redis service - it's totally up to you.

__The only thing you have to make sure is connectivity between Botium Box and Prisma as well as Redis service.__

## Login to Botium Box

Default username: "admin"

Default password: "nooneknows"

Have fun.
