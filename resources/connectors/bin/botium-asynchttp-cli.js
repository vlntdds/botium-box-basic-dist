#!/usr/bin/env node
const util = require('util')
const yargsCmd = require('yargs')
const debug = require('debug')('botium-asynchttp-cli')

const startProxy = require('../src/proxy').startProxy

const wrapHandler = (builder) => {
  const origHandler = builder.handler
  builder.handler = (argv) => {
    if (argv.verbose) {
      require('debug').enable('botium*')
    }
    debug(`command options: ${util.inspect(argv)}`)
    origHandler(argv)
  }
  return builder
}

yargsCmd.usage('Botium AsyncHTTP Proxy\n\nUsage: $0 [options]') // eslint-disable-line
  .help('help').alias('help', 'h')
  .version('version', require('../package.json').version).alias('version', 'V')
  .showHelpOnFail(true)
  .strict(true)
  .demandCommand(1, 'You need at least one command before moving on')
  .env('BOTIUM_AHTTP')
  .command(wrapHandler({
    command: 'start',
    describe: 'Launch Botium AsyncHTTP Proxy',
    builder: (yargs) => {
      yargs
        .option('port', {
          describe: 'Local port the proxy is listening to (also read from env variable "BOTIUM_AHTTP_PORT")',
          demandOption: true,
          number: true,
          default: 5000
        })
        .option('endpoint', {
          describe: 'Webhook Endpoint (also read from env variable "BOTIUM_AHTTP_ENDPOINT")',
          demandOption: true,
          default: '/api/botium-connector-asynchttp'
        })
        .option('redisurl', {
          describe: 'Redis connection url (also read from env variable "BOTIUM_AHTTP_REDISURL")'
        })
    },
    handler: startProxy
  }))
  .option('verbose', {
    alias: 'v',
    describe: 'Enable verbose output (also read from env variable "BOTIUM_AHTTP_VERBOSE" - "1" means verbose)',
    default: false
  })
  .argv
