'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var util = _interopDefault(require('util'));
var ioredis = _interopDefault(require('ioredis'));
var lodash = _interopDefault(require('lodash'));
var requestPromiseNative = _interopDefault(require('request-promise-native'));
var debug = _interopDefault(require('debug'));

const debug$1 = debug('botium-connector-asynchttp');
const Capabilities = {
  ASYNCRECEIVER_REDISURL: 'ASYNCRECEIVER_REDISURL',
  ASYNCRECEIVER_POSTURL: 'ASYNCRECEIVER_POSTURL',
  ASYNCRECEIVER_UNIQUEID: 'ASYNCRECEIVER_UNIQUEID'
};

class BotiumConnectorAsyncReceiver {
  constructor({
    queueBotSays,
    caps
  }) {
    this.queueBotSays = queueBotSays;
    this.caps = caps;
    this.redis = null;
    this.queueReceivedMessages = false;
  }

  async Build() {
    debug$1('Build called');
    await this._buildRedis();
  }

  async Start() {
    debug$1('Start called');
    this.queueReceivedMessages = true;
  }

  async UserSays(msg) {
    debug$1(`UserSays called ${util.inspect(msg)}`);
    await requestPromiseNative({
      method: 'POST',
      uri: this.caps[Capabilities.ASYNCRECEIVER_POSTURL],
      body: {
        data: [{
          AppClient: "Botium",
          conversation: this.caps[Capabilities.ASYNCRECEIVER_UNIQUEID],
          event: "INBOX",
          from: this.caps[Capabilities.ASYNCRECEIVER_UNIQUEID],
          chat: {
            id: this.caps[Capabilities.ASYNCRECEIVER_UNIQUEID],
            first_name: "Botium Client",
            type: "private"
          },
          name: "Botium Client",
          text: msg,
          first_name: "Botium Client"
        }],
        "AppClient": "Botium"
      },
      json: true
    });
    return Promise.resolve(this);
  }

  async Stop() {
    debug$1('Stop called');
    this.queueReceivedMessages = false;
  }

  async Clean() {
    debug$1('Clean called');
    await this._cleanRedis();
  }

  _buildRedis() {
    return new Promise((resolve, reject) => {
      this.redis = new ioredis(this.caps[Capabilities.ASYNCRECEIVER_REDISURL]);
      this.redis.on('connect', () => {
        debug$1(`Redis connected to ${util.inspect(this.caps[Capabilities.ASYNCRECEIVER_REDISURL])}`);
        this.redis.subscribe(this.caps[Capabilities.ASYNCRECEIVER_UNIQUEID], (err, count) => {
          if (err) {
            return reject(new Error(`Redis failed to subscribe channel ${this.caps[Capabilities.ASYNCRECEIVER_UNIQUEID]}: ${util.inspect(err)}`));
          }

          debug$1(`Redis subscribed to ${count} channels. Listening for updates on the ${this.caps[Capabilities.ASYNCRECEIVER_UNIQUEID]} channel.`);
          resolve();
        });
      });
      this.redis.on('message', (channel, event) => {
        if (this.queueReceivedMessages) {
          if (!lodash.isString(event)) {
            return debug$1(`WARNING: received non-string message from ${channel}, ignoring: ${event}`);
          }

          try {
            event = JSON.parse(event);
          } catch (err) {
            return debug$1(`WARNING: received non-json message from ${channel}, ignoring: ${event}`);
          }

          if (!event.message) {
            return debug$1(`Received a message without content from ${channel}: ${util.inspect(event)}`);
          }

          const botMsg = {
            sender: 'bot',
            sourceData: event
          };

          if (event.message.text) {
            botMsg.messageText = event.message.text;
          }

          if (event.message.attachments && event.message.attachments.length > 0) {
            event.message.attachments.forEach(a => {
              if (a.type === 'image' && a.payload && a.payload.url) {
                botMsg.media = botMsg.media || [];
                botMsg.media.push({
                  mediaUri: a.payload.url
                });
              }

              if (a.type === 'template' && a.payload && a.payload.template_type === 'generic') {
                a.payload.elements && a.payload.elements.forEach(e => {
                  botMsg.cards = botMsg.cards || [];
                  const card = {
                    text: e.title
                  };

                  if (e.image_url) {
                    card.image = {
                      mediaUri: e.image_url
                    };
                  }

                  if (e.buttons) {
                    card.buttons = e.buttons.map(b => ({
                      text: b.title,
                      payload: b.payload
                    }));
                  }

                  botMsg.cards.push(card);
                });
              }
            });
          }

          debug$1(`Received a message to queue at ${channel}: ${util.inspect(botMsg)}`);
          this.queueBotSays(botMsg);
        } else {
          debug$1(`Received message from ${channel}, ignoring`);
        }
      });
    });
  }

  _cleanRedis() {
    if (this.redis) {
      this.redis.disconnect();
      this.redis = null;
    }
  }

}

var connector = BotiumConnectorAsyncReceiver;

var botiumConnectorAsynchttp = {
  PluginVersion: 1,
  PluginClass: connector
};
var botiumConnectorAsynchttp_1 = botiumConnectorAsynchttp.PluginVersion;
var botiumConnectorAsynchttp_2 = botiumConnectorAsynchttp.PluginClass;

exports.default = botiumConnectorAsynchttp;
exports.PluginVersion = botiumConnectorAsynchttp_1;
exports.PluginClass = botiumConnectorAsynchttp_2;
//# sourceMappingURL=botium-connector-asynchttp-cjs.js.map
