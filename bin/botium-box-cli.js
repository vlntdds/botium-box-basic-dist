#!/usr/bin/env node
const util = require('util')
const opn = require('opn')
const path = require('path')
const yargsCmd = require('yargs')
const { spawn } = require('child_process')
const debug = require('debug')('botium-box-cli')

const start = (argv) => {
  if (argv.verbose) {
    require('debug').enable('botium*')
  }
  debug(`command options: ${util.inspect(argv)}`)
  if (argv.prismaEndpoint) process.env.PRISMA_ENDPOINT = argv.prismaEndpoint
  if (argv.prismaSecret) process.env.PRISMA_SECRET = argv.prismaSecret
  if (argv.prismaManagementApiSecret) process.env.PRISMA_MANAGEMENT_API_SECRET = argv.prismaManagementApiSecret
  if (argv.jwtSecret) process.env.JWT_SECRET = argv.jwtSecret
  if (argv.redisUrl) process.env.BOTIUMBOX_QUEUE_REDISURL = argv.redisUrl
  if (argv.port) process.env.PORT = argv.port

  const child = spawn('npm start', {
    stdio: 'inherit',
    shell: true,
    cwd: path.resolve(__dirname, '..')
  })
  child.on('exit', function (code, signal) {
    console.log(`child process exited with code ${code} and signal ${signal}`)
  })
  opn(`http://127.0.0.1:${argv.port}`)
}

yargsCmd.usage('Botium Box CLI\n\nUsage: $0 [options]') // eslint-disable-line
  .help('help').alias('help', 'h')
  .version('version', require('../package.json').version).alias('version', 'V')
  .showHelpOnFail(true)
  .strict(true)
  .demandCommand(1, 'You need at least one command before moving on')
  .env('BOTIUMBOXCLI')
  .command({
    command: 'start',
    describe: 'Run Botium Box',
    handler: start,
    builder: (yargs) => {
      yargs
        .option('prismaEndpoint', {
          alias: 'pe',
          describe: 'Prisma Endpoint URL, f.e. "http://127.0.0.1:4466/box/standalone" (also read from env variable "BOTIUMBOXCLI_PRISMA_ENDPOINT")',
          demandOption: true
        })
        .option('prismaSecret', {
          alias: 'ps',
          describe: 'Prisma secret (also read from env variable "BOTIUMBOXCLI_PRISMA_SECRET")',
          default: 'mysecret123',
          demandOption: true
        })
        .option('prismaManagementApiSecret', {
          alias: 'pm',
          describe: 'Prisma Management Api secret, if applicable (also read from env variable "BOTIUMBOXCLI_PRISMA_MANAGEMENT_API_SECRET")'
        })
        .option('jwtSecret', {
          alias: 'j',
          describe: 'JWT secret (Json Web Tokens) (also read from env variable "BOTIUMBOXCLI_JWT_SECRET")',
          default: 'jwtsecret123',
          demandOption: true
        })
        .option('redisUrl', {
          alias: 'r',
          describe: 'Redis URL, for example redis://127.0.0.1:6379 (also read from env variable "BOTIUMBOXCLI_REDIS_URL")'
        })
        .option('port', {
          alias: 'p',
          describe: 'Server port to listen (also read from env variable "BOTIUMBOXCLI_PORT")',
          number: true,
          default: 4000
        })
    }
  })
  .option('verbose', {
    alias: 'v',
    describe: 'Enable verbose output (also read from env variable "BOTIUMBOX_VERBOSE" - "1" means verbose)',
    default: false
  })
  .argv
