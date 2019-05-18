# Botium Box - Community Edition

[![NPM](https://nodei.co/npm/botium-box.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/botium-box/)

Chatbots are driving the industry. With Botium we are driving chatbots. Botium is a suite of open source software components that support chatbot makers in training and quality assurance.

Botium Box is running on standard components available for free. You can install it on your own server (on premise), or use cloud providers for serverless installation, or even a mixture of those approaches.

**_IF YOU LIKE WHAT YOU SEE, PLEASE CONSIDER GIVING US A STAR ON GITHUB!_**

## Quickstart

This is the fastest way to launch Botium Box and all required components ([docker](https://www.docker.com/get-started) and 
[docker-compose](https://docs.docker.com/compose/install/) required):

```
> curl --output docker-compose-all.yml https://raw.githubusercontent.com/codeforequity-at/botium-box-basic-dist/master/docker-compose-all.yml
> docker-compose -f docker-compose-all.yml up
```

Botium Box will now run on http://127.0.0.1:4000

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

Botium Box requires three directories for operations. You can just let them created inside the Docker container, but this is not recommended.

* A directory holding the test sets should be mounted to /app/server/testsets
* A working directory for the Botium Box server mounted to /app/server/botiumwork and for the agents mounted to /app/agent/botiumwork
* A resources directory for the Botium Box server mounted to /app/server/resources and for the agents mounted to /app/agent/resources

All of them can be handed over to docker with the _-v_ command line flag.

For hosting Botium Box as Docker, use these commands to run the Docker image:

```
> docker run -v `pwd`/botiumwork:/app/server/botiumwork \
	-v `pwd`/botiumwork:/app/agent/botiumwork \
	-v `pwd`/testsets:/app/server/testsets \
	-v `pwd`/resources:/app/server/resources \
	-v `pwd`/resources:/app/agent/resources \
	-e BOTIUMBOX_QUEUE_REDISURL=redis://redisuser:redispassword@redishost:redisport \
	-e PRISMA_ENDPOINT=https://my-prisma-endpoint:my-prisma-port/demo/dev \
	-e PRISMA_MANAGEMENT_API_SECRET=my-prisma-management-api-secret \
	-e PRISMA_SECRET=something123 \
	-e JWT_SECRET=something123 \
	-p 4000:4000 botium/botium-box-ce:box-latest
```

Botium Box will now run on http://127.0.0.1:4000

For some log output, you can add the _-e DEBUG=botium*_ environment variable

## Botium Box Standalone Installation

You can run Botium Box on your own server.

### Prerequisites

* [docker](https://www.docker.com/get-started)
* [docker-compose](https://docs.docker.com/compose/install/)
* [Node.js](https://nodejs.org/en/download/) (only when running node processes outside of docker)

### Run Botium Box with Docker-Compose (recommended)

The Docker-Compose file contains all prerequisites for running Botium Box and is the recommended and most easy way to run Botium Box.

1. Download [docker-compose-all.yml](https://github.com/codeforequity-at/botium-box-basic-dist/blob/master/docker-compose-all.yml) and save to your local hard drive.
2. Start Botium Box by running docker-compose:
```
> docker-compose -f docker-compose-all.yml up
```
3. Point your browser to http://127.0.0.1:4000

_To make your Botium testsets, resources and working directory point to a folder of your choice (recommended), you have to edit the docker-compose-all.yml file!_


### Run Botium Box with standalone Docker image (not recommended)

Botium Box can use "docker-in-docker" to startup in a single docker container, spawning the prerequisites in separate docker containers.

_Don't use this setup in production environments!_

```
> docker run -v `pwd`/botiumwork:/app/server/botiumwork \
	-v `pwd`/botiumwork:/app/agent/botiumwork \
	-v `pwd`/testsets:/app/server/testsets \
	-v `pwd`/resources:/app/server/resources \
	-v `pwd`/resources:/app/agent/resources \
	-v /var/run/docker.sock:/var/run/docker.sock \
    -p 4000:4000 botium/botium-box-ce:standalone-latest
```

Point your browser to http://127.0.0.1:4000

### Download, build and run from NPM registry

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

if you run this under macOS then you need to install those first. This is basically needed, because
there is no timeout command in the OSX bash shell. Here you find more information [wait-for-it OSX issue timeout](https://github.com/vishnubob/wait-for-it/issues/15)
```
> brew install coreutils
> alias timeout=gtimeout
```

```
> git clone https://github.com/codeforequity-at/botium-box-basic-dist.git && cd botium-box-basic-dist
> npm install
> npm run start-standalone:backend
> npm run start-standalone:frontend
```

Botium Box will now run on http://127.0.0.1:4000

_Installation and startup can take a while, especially on first usage._

## Botium Box Hybrid Installation

It is possible to mix the above architecture: Prisma, Redis and Botium Box are loosly coupled, you can choose whatever your infrastructure suggests as best option - Prisma and Redis in the cloud, Botium Box locally. Or run Prisma locally, Botium Box in the cloud and use an existing Redis service - it's totally up to you.

__The only thing you have to make sure is connectivity between Botium Box and Prisma as well as Redis service.__

## Login to Botium Box

Default username: "admin"

Default password: "nooneknows"

Have fun.
