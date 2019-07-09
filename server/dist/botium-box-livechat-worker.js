! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("path"), require("uuid/v1"), require("child_process"), require("lodash"), require("ioredis"), require("better-queue"), require("debug"), require("util"), require("botium-core")) : "function" == typeof define && define.amd ? define(["path", "uuid/v1", "child_process", "lodash", "ioredis", "better-queue", "debug", "util", "botium-core"], t) : e.main = t(e.path, e.v1, e.child_process, e.lodash, e.ioredis, e.betterQueue, e.debug, e.util, e.botiumCore)
}(this, function(e, t, s, n, a, o, r, i, c) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t, s = s && s.hasOwnProperty("default") ? s.default : s, n = n && n.hasOwnProperty("default") ? n.default : n, a = a && a.hasOwnProperty("default") ? a.default : a, o = o && o.hasOwnProperty("default") ? o.default : o, r = r && r.hasOwnProperty("default") ? r.default : r, i = i && i.hasOwnProperty("default") ? i.default : i, c = c && c.hasOwnProperty("default") ? c.default : c;
    const u = s.fork,
        d = r("botium-box-server-livechat"),
        S = r("botium-box-server-livechat-worker"),
        p = c.BotDriver,
        l = c.Capabilities,
        E = process.env.BOTIUMBOX_LIVECHAT_IDLE_TIMEOUT || 3e5,
        O = {},
        v = {},
        T = (e, t, s) => {
            e.send({
                type: t,
                message: s
            })
        },
        I = ({
            conversationId: e,
            queueSettings: t,
            pubsub: s
        }) => {
            v[e] && clearTimeout(v[e]), v[e] = setTimeout(async () => {
                const n = new a({
                    port: 16616, // Redis port
                    host: "redis-16616.c10.us-east-1-2.ec2.cloud.redislabs.com", // Redis host
                    family: 4, // 4 (IPv4) or 6 (IPv6)
                    password: "1eAcDS0PJ4R4nvr2ewqq7nZiUKnOpc7d",
                    db: 0
                  });
                d(`Auto cleanup of conversation ${e} after ${E}ms idle time`), m(e), await n.del(e), s.publish(e, {
                    liveChatConvoStepAdded: {
                        err: `Automatically closed chatbot connection after ${E}ms idle time`
                    }
                })
            }, E)
        },
        m = async e => {
            v[e] && clearTimeout(v[e]), delete v[e];
            const t = O[e];
            t && T(t, f.STOP_CONVERSATION)
        }, h = async ({
            conversationId: e
        }, {
            queueSettings: t
        }) => {
            const s = new a(t.redis),
                n = await s.get(e);
            return n && JSON.parse(n)
        }, _ = async (e, t, s) => {
            await s.set(e, JSON.stringify(t)), await s.expire(e, E / 1e3);
            const n = await s.ttl(e);
            d(`updateConversation(${e}) TTL(seconds): ${n}`)
        }, f = {
            USER_SAYS: "USER_SAYS",
            USER_SAYS_FAILED: "USER_SAYS_FAILED",
            STOP_CONVERSATION: "STOP_CONVERSATION",
            STOP_CONVERSATION_FINISHED: "STOP_CONVERSATION_FINISHED",
            MESSAGE_SENTTOBOT: "MESSAGE_SENTTOBOT",
            MESSAGE_RECEIVEDFROMBOT: "MESSAGE_RECEIVEDFROMBOT",
            LOG: "LOG"
        };
    var g = {
        startListeners: async ({
            db: e,
            pubsub: t,
            queueSettings: s
        }) => new Promise((e, t) => {
            const n = new a(s.redis);
            n.subscribe("livechat.send", "livechat.stop", (s, n) => {
                s ? t(new Error(`Redis subscribe failed: ${s}`)) : (d(`Livechat Redis connected to ${n} channels.`), e())
            }), n.on("message", async (e, t) => {
                const {
                    conversationId: s,
                    convoStep: n
                } = JSON.parse(t);
                if (!O[s]) return;
                const a = O[s];
                "livechat.send" === e ? (d(`liveChatSendToBot(${s}) sending convoStep ${i.inspect(n)}`), T(a, f.USER_SAYS, n)) : "livechat.stop" === e && m(s)
            })
        }),
        startBot: async ({
            caps: s,
            sources: n,
            envs: r
        }, {
            pubsub: c,
            queueSettings: p
        }) => {
            const l = new a(p.redis),
                E = t(),
                v = new o(async (e, t) => {
                    try {
                        const t = await h({
                                conversationId: E
                            }, {
                                queueSettings: p
                            }),
                            s = t.length,
                            n = JSON.stringify(Object.assign(e, {
                                convoStepIndex: s
                            }));
                        c.publish(E, {
                            liveChatConvoStepAdded: {
                                convoStep: n
                            }
                        }), t.push(n), _(E, t, l), I({
                            conversationId: E,
                            queueSettings: p,
                            pubsub: c
                        })
                    } catch (e) {
                        d(`listenerQueue err: ${e}`)
                    }
                    t()
                }),
                T = u(e.resolve(__dirname, process.env.BOTIUMBOX_LIVECHAT_WORKER_FILE || "livechatWorker.js"), [JSON.stringify({
                    caps: s,
                    sources: n,
                    envs: r,
                    conversationId: E
                })], {
                    env: Object.assign({}, process.env, r),
                    execArgv: ["--inspect=0"]
                });
            return T.on("message", ({
                type: e,
                message: t
            }) => {
                switch (d(`Received IPC message ${e} from worker. conversationId: ${E}, message: ${i.inspect(t)}`), e) {
                    case f.USER_SAYS_FAILED:
                        d(`liveChatSendToBot UserSays failed: ${t}`), c.publish(E, {
                            liveChatConvoStepAdded: {
                                err: `Failed sending to chatbot: ${t}`
                            }
                        });
                        break;
                    case f.LOG:
                        S(t);
                        break;
                    case f.STOP_CONVERSATION_FINISHED:
                        delete T[t.conversationId];
                        break;
                    case f.MESSAGE_SENTTOBOT:
                    case f.MESSAGE_RECEIVEDFROMBOT:
                        v.push(t);
                        break;
                    default:
                        d(`Unknown message type: ${e}`)
                }
            }), O[E] = T, _(E, [], l), I({
                conversationId: E,
                queueSettings: p,
                pubsub: c
            }), E
        },
        sendToBot: async ({
            conversationId: e,
            convoStep: t
        }, {
            queueSettings: s
        }) => {
            new a(s.redis).publish("livechat.send", JSON.stringify({
                conversationId: e,
                convoStep: t
            }))
        },
        stopBot: async ({
            conversationId: e
        }, {
            queueSettings: t
        }) => {
            new a(t.redis).publish("livechat.stop", JSON.stringify({
                conversationId: e
            }))
        },
        getConversation: h,
        IPC_MESSAGE_TYPE: f,
        getConversationScripts: async ({
            caps: e,
            conversationId: t,
            testCaseName: s,
            types: a,
            splitToConvoAndUtterancesMe: o,
            splitToConvoAndUtterancesBot: r
        }, {
            queueSettings: c
        }) => {
            const u = await h({
                conversationId: t
            }, {
                queueSettings: c
            });
            if (!n.isArray(u)) throw new Error("Conversation not available (anymore).");
            const S = {
                    header: {
                        name: s
                    },
                    conversation: u.map(e => ((e, t) => (e.asserters || (e.asserters = []), t && !t.includes("text") && (e.messageText = ""), t && !t.includes("buttons") && (e.buttons = []), t && !t.includes("media") && (e.media = []), e.nlp && (t && !t.includes("intents") || !e.nlp.intent || e.asserters.push({
                        name: "INTENT",
                        args: [e.nlp.intent.name]
                    }), t && !t.includes("entities") || !e.nlp.entities || e.asserters.push({
                        name: "ENTITIES",
                        args: e.nlp.entities.map(e => e.name)
                    })), e))(JSON.parse(e), a))
                },
                E = new p(e).BuildCompiler(),
                O = [];
            if (o || r) {
                const e = {
                        all: 0,
                        empty: 0,
                        multirow: 0,
                        me: 0,
                        bot: 0,
                        filteredOut: 0,
                        utterances: []
                    },
                    t = s.replace(" ", "_").toUpperCase() + "_";
                for (const s of S.conversation)
                    if (e.all++, s.messageText && s.messageText.length)
                        if (s.messageText.includes(E.caps[l.SCRIPTING_TXT_EOL])) e.multirow++;
                        else if ("me" === s.sender && o || "bot" === s.sender && r) {
                    const n = (t + s.sender + "_" + (e[s.sender] + 1)).toUpperCase(),
                        a = s.messageText;
                    s.messageText = n, O.push({
                        script: n + E.caps[l.SCRIPTING_TXT_EOL] + a,
                        name: n
                    }), e[s.sender]++, e.utterances.push(n)
                } else e.filteredOut++;
                else e.empty++;
                d(`Decompiled utterances: ${i.inspect(e)}`)
            }
            const v = E.Decompile([S], "SCRIPTING_FORMAT_TXT");
            return d(`Decompiled script: ${v}`), {
                script: v,
                utterances: O
            }
        }
    };
    const b = c.BotDriver,
        {
            IPC_MESSAGE_TYPE: y
        } = g;
    let C, w;
    const A = e => {
        N(y.LOG, e)
    };
    process.on("message", ({
        type: e,
        message: t
    }) => {
        switch (A(`Received IPC message ${e} from worker. Message: ${i.inspect(t)}`), e) {
            case y.USER_SAYS:
                R(t);
                break;
            case y.STOP_CONVERSATION:
                $();
                break;
            default:
                A(`Unknown message type: ${e}`), process.exit(1)
        }
    });
    const N = (e, t) => {
            process.send({
                type: e,
                message: t
            })
        },
        R = async e => {
            try {
                await C.UserSays(e)
            } catch (e) {
                A(`userSays(${w}) failed: ${e}`), N(y.USER_SAYS_FAILED, e.message || i.inspect(e))
            }
        }, $ = async () => {
            try {
                await C.Stop()
            } catch (e) {
                A(`stopConversation(${w}) Stop failed: ${e}`)
            }
            try {
                await C.Clean()
            } catch (e) {
                A(`stopConversation(${w}) Clean failed: ${e}`)
            }
            A(`stopConversation(${w}) container stopped.`), N(y.STOP_CONVERSATION_FINISHED, {
                conversationId: w
            })
        };
    (async e => {
        w = e.conversationId;
        const t = new b(e.caps, e.sources, e.envs);
        t.on("MESSAGE_SENTTOBOT", (e, t) => N(y.MESSAGE_SENTTOBOT, t)), t.on("MESSAGE_RECEIVEDFROMBOT", (e, t) => N(y.MESSAGE_RECEIVEDFROMBOT, t)), C = await t.Build(), A(`liveChatStartBot(${w}) container built, now starting`), await C.Start(), A(`liveChatStartBot(${w}) container started.`)
    })(JSON.parse(process.argv[2])).catch(e => {
        A(`Failed to start worker: ${e}`), process.exit(1)
    });
    return {}
});