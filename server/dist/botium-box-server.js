! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("node-cache"), require("zaproxy"), require("botium-core/src/Capabilities"), require("nodegit"), require("botium-core/src/scripting/Constants"), require("natural"), require("mkdirp"), require("rimraf"), require("botium-core"), require("uuid/v1"), require("child_process"), require("ioredis"), require("better-queue"), require("url"), require("kue"), require("watson-developer-cloud/assistant/v1"), require("botium-core/src/scripting/CompilerTxt"), require("fs"), require("path"), require("passport"), require("passport-local"), require("passport-ldapauth"), require("botium-connector-dialogflow"), require("botium-connector-alexa-smapi"), require("botium-connector-watson"), require("randomatic"), require("bcryptjs"), require("jsonwebtoken"), require("graphql-yoga"), require("graphql-tools"), require("graphql"), require("express-jwt"), require("body-parser"), require("botium-connector-fbpagereceiver/src/proxy"), require("adm-zip"), require("request-promise-native"), require("moment"), require("xml"), require("pdfkit"), require("concat-stream"), require("slugify"), require("debug"), require("lodash"), require("util"), require("dotenv-flow"), require("graphql-redis-subscriptions"), require("prisma-binding"), require("express"), require("connect-history-api-fallback")) : "function" == typeof define && define.amd ? define(["node-cache", "zaproxy", "botium-core/src/Capabilities", "nodegit", "botium-core/src/scripting/Constants", "natural", "mkdirp", "rimraf", "botium-core", "uuid/v1", "child_process", "ioredis", "better-queue", "url", "kue", "watson-developer-cloud/assistant/v1", "botium-core/src/scripting/CompilerTxt", "fs", "path", "passport", "passport-local", "passport-ldapauth", "botium-connector-dialogflow", "botium-connector-alexa-smapi", "botium-connector-watson", "randomatic", "bcryptjs", "jsonwebtoken", "graphql-yoga", "graphql-tools", "graphql", "express-jwt", "body-parser", "botium-connector-fbpagereceiver/src/proxy", "adm-zip", "request-promise-native", "moment", "xml", "pdfkit", "concat-stream", "slugify", "debug", "lodash", "util", "dotenv-flow", "graphql-redis-subscriptions", "prisma-binding", "express", "connect-history-api-fallback"], t) : e.main = t(e.nodeCache, e.zaproxy, e.Capabilities, e.nodegit, e.Constants, e.natural, e.mkdirp, e.rimraf, e.botiumCore, e.v1, e.child_process, e.ioredis, e.betterQueue, e.url, e.kue, e.v1$1, e.CompilerTxt, e.fs, e.path, e.passport, e.passportLocal, e.passportLdapauth, e.botiumConnectorDialogflow, e.botiumConnectorAlexaSmapi, e.botiumConnectorWatson, e.randomatic, e.bcryptjs, e.jsonwebtoken, e.graphqlYoga, e.graphqlTools, e.graphql, e.expressJwt, e.bodyParser, e.proxy, e.admZip, e.requestPromiseNative, e.moment, e.xml, e.pdfkit, e.concatStream, e.slugify, e.debug, e.lodash, e.util, e.dotenvFlow, e.graphqlRedisSubscriptions, e.prismaBinding, e.express, e.connectHistoryApiFallback)
}(this, function(e, t, s, n, a, r, o, i, c, d, l, u, p, h, S, m, f, T, g, b, y, E, w, C, v, I, O, R, N, x, A, P, _, $, D, M, k, j, B, q, L, F, U, J, G, V, H, z, Y) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t, s = s && s.hasOwnProperty("default") ? s.default : s, n = n && n.hasOwnProperty("default") ? n.default : n, a = a && a.hasOwnProperty("default") ? a.default : a, r = r && r.hasOwnProperty("default") ? r.default : r, o = o && o.hasOwnProperty("default") ? o.default : o, i = i && i.hasOwnProperty("default") ? i.default : i, c = c && c.hasOwnProperty("default") ? c.default : c, d = d && d.hasOwnProperty("default") ? d.default : d, l = l && l.hasOwnProperty("default") ? l.default : l, u = u && u.hasOwnProperty("default") ? u.default : u, p = p && p.hasOwnProperty("default") ? p.default : p, h = h && h.hasOwnProperty("default") ? h.default : h, S = S && S.hasOwnProperty("default") ? S.default : S, m = m && m.hasOwnProperty("default") ? m.default : m, f = f && f.hasOwnProperty("default") ? f.default : f, T = T && T.hasOwnProperty("default") ? T.default : T, g = g && g.hasOwnProperty("default") ? g.default : g, b = b && b.hasOwnProperty("default") ? b.default : b, y = y && y.hasOwnProperty("default") ? y.default : y, E = E && E.hasOwnProperty("default") ? E.default : E, w = w && w.hasOwnProperty("default") ? w.default : w, C = C && C.hasOwnProperty("default") ? C.default : C, v = v && v.hasOwnProperty("default") ? v.default : v, I = I && I.hasOwnProperty("default") ? I.default : I, O = O && O.hasOwnProperty("default") ? O.default : O, R = R && R.hasOwnProperty("default") ? R.default : R, N = N && N.hasOwnProperty("default") ? N.default : N, x = x && x.hasOwnProperty("default") ? x.default : x, A = A && A.hasOwnProperty("default") ? A.default : A, P = P && P.hasOwnProperty("default") ? P.default : P, _ = _ && _.hasOwnProperty("default") ? _.default : _, $ = $ && $.hasOwnProperty("default") ? $.default : $, D = D && D.hasOwnProperty("default") ? D.default : D, M = M && M.hasOwnProperty("default") ? M.default : M, k = k && k.hasOwnProperty("default") ? k.default : k, j = j && j.hasOwnProperty("default") ? j.default : j, B = B && B.hasOwnProperty("default") ? B.default : B, q = q && q.hasOwnProperty("default") ? q.default : q, L = L && L.hasOwnProperty("default") ? L.default : L, F = F && F.hasOwnProperty("default") ? F.default : F, U = U && U.hasOwnProperty("default") ? U.default : U, J = J && J.hasOwnProperty("default") ? J.default : J, G = G && G.hasOwnProperty("default") ? G.default : G, V = V && V.hasOwnProperty("default") ? V.default : V, H = H && H.hasOwnProperty("default") ? H.default : H, z = z && z.hasOwnProperty("default") ? z.default : z, Y = Y && Y.hasOwnProperty("default") ? Y.default : Y;
    const W = {
        buildTarget: "COMMUNITY EDITION",
        buildBranch: "release/1.7.2",
        buildRevision: "10496eafe058947a3d402ac7eda45308e8110f8e",
        buildDate: "2019-06-27T00:02:57+02:00"
    };
    var X = W,
        K = () => {
            console.log("BOTIUM BOX - SERVER"), console.log(`BUILD_TARGET: ${W.buildTarget}`), console.log(`BUILD_BRANCH: ${W.buildBranch}`), console.log(`BUILD_REVISION: ${W.buildRevision}`), console.log(`BUILD_TIMESTAMP: ${W.buildDate}`), console.log(`PRISMA_ENDPOINT: ${process.env.PRISMA_ENDPOINT}`), console.log(`BOTIUMBOX_QUEUE_REDISURL: ${process.env.BOTIUMBOX_QUEUE_REDISURL}`)
        };
    const Q = F("botium-box-server-cache");
    var Z = class {
        constructor(t) {
            this.cache = new e({
                stdTTL: t,
                checkperiod: .2 * t,
                useClones: !1
            }), this.loading = {}
        }
        get(e, t) {
            const s = this.cache.get(e);
            if (s) return Q(`Serving key ${e} from cache`), Promise.resolve(s);
            if (this.loading[e]) {
                return Q(`Load process for key ${e} already running, waiting ...`), new Promise((t, s) => {
                    this.loading[e].listeners.push({
                        resolve: t,
                        reject: s
                    })
                })
            }
            this.loading[e] = this.loading[e] || {
                listeners: []
            };
            const n = new Promise((t, s) => {
                this.loading[e].listeners.push({
                    resolve: t,
                    reject: s
                })
            });
            return Q(`Load process for key ${e} started, waiting ...`), t().then(t => {
                Q(`Load process for key ${e} ready, notifying listeners ...`), this.cache.set(e, t), this.loading[e].listeners.forEach(({
                    resolve: e
                }) => e(t)), delete this.loading[e]
            }).catch(t => {
                this.loading[e].listeners.forEach(({
                    reject: e
                }) => e(t)), delete this.loading[e]
            }), n
        }
        del(e) {
            this.cache.del(e)
        }
        delStartWith(e = "") {
            if (!e) return;
            const t = this.cache.keys();
            for (const s of t) 0 === s.indexOf(e) && this.del(s)
        }
        flush() {
            this.cache.flushAll()
        }
    };
    const ee = F("botium-box-server-utils");
    var te = {
        FindFullTestSet: (e, t) => e.query.testSet({
            where: {
                id: t
            }
        }, " \n{\n  id\n  name\n  client { id }\n  expandConvos\n  expandUtterancesToConvos\n  expandUtterancesIncomprehension\n  excelHasConvos\n  excelHasPartialConvos\n  excelHasUtterances\n  excelWorksheetsConvos\n  excelWorksheetsPartialConvos\n  excelWorksheetsUtterances\n  excelStartRow\n  excelStartCol  \n  selectionType\n  tags\n  scripts { id name script scriptType }\n  repositories { id name giturl gitbranch gitdir gituser gitpassword globFilter }\n  folders { id name path globFilter }\n  excels { id name filename filecontent }\n}"),
        RetrieveTestSetDetails: e => ({
            id: e.id,
            name: e.name,
            expandConvos: e.expandConvos,
            expandUtterancesToConvos: e.expandUtterancesToConvos,
            expandScriptingMemory: e.expandScriptingMemory,
            excelHasConvos: e.excelHasConvos,
            excelHasPartialConvos: e.excelHasPartialConvos,
            excelHasUtterances: e.excelHasUtterances,
            excelWorksheetsConvos: e.excelWorksheetsConvos,
            excelWorksheetsPartialConvos: e.excelWorksheetsPartialConvos,
            excelWorksheetsUtterances: e.excelWorksheetsUtterances,
            excelStartRow: e.excelStartRow,
            excelStartCol: e.excelStartCol,
            convos: "SELECTION_TYPE_REMOTE_ONLY" !== e.selectionType && e.scripts && e.scripts.filter(e => "SCRIPTING_TYPE_CONVO" === e.scriptType).map(t => ({
                format: "SCRIPTING_FORMAT_TXT",
                content: t.script,
                sourceTag: {
                    testSetId: e.id,
                    testSetScriptId: t.id
                }
            })),
            pconvos: "SELECTION_TYPE_REMOTE_ONLY" !== e.selectionType && e.scripts && e.scripts.filter(e => "SCRIPTING_TYPE_PCONVO" === e.scriptType).map(t => ({
                format: "SCRIPTING_FORMAT_TXT",
                content: t.script,
                sourceTag: {
                    testSetId: e.id,
                    testSetScriptId: t.id
                }
            })),
            utterances: "SELECTION_TYPE_REMOTE_ONLY" !== e.selectionType && e.scripts && e.scripts.filter(e => "SCRIPTING_TYPE_UTTERANCES" === e.scriptType).map(t => ({
                format: "SCRIPTING_FORMAT_TXT",
                content: t.script,
                sourceTag: {
                    testSetId: e.id,
                    testSetScriptId: t.id
                }
            })),
            scriptingMemories: e.scripts && e.scripts.filter(e => "SCRIPTING_TYPE_SCRIPTING_MEMORY" === e.scriptType).map(t => ({
                format: "SCRIPTING_FORMAT_TXT",
                content: t.script,
                sourceTag: {
                    testSetId: e.id,
                    testSetScriptId: t.id
                }
            })),
            folders: "SELECTION_TYPE_LOCAL_ONLY" !== e.selectionType && e.folders && e.folders.map(t => ({
                id: t.id,
                path: t.path,
                globFilter: t.globFilter,
                sourceTag: {
                    testSetId: e.id,
                    testSetFolderId: t.id
                }
            })),
            excels: "SELECTION_TYPE_REMOTE_ONLY" !== e.selectionType && e.excels && e.excels.map(t => ({
                id: t.id,
                filename: t.filename,
                filecontent: t.filecontent,
                sourceTag: {
                    testSetId: e.id,
                    testSetExcelId: t.id,
                    filename: t.filename
                }
            }))
        }),
        ExtractQueueSettings: () => {
            let e = {};
            if (process.env.BOTIUMBOX_QUEUE_SETTINGS) try {
                e = JSON.parse(process.env.BOTIUMBOX_QUEUE_SETTINGS), ee(`Got queue settings '${JSON.stringify(e)}'`)
            } catch (e) {
                ((e, t) => {
                    e && console.log(e), t && console.log(t), process.exit(1)
                })(`ERROR parsing queue settings "${process.env.BOTIUMBOX_QUEUE_SETTINGS}":`, e)
            } else process.env.BOTIUMBOX_QUEUE_PREFIX && (e.prefix = process.env.BOTIUMBOX_QUEUE_PREFIX), process.env.BOTIUMBOX_QUEUE_REDISURL && (e.redis = process.env.BOTIUMBOX_QUEUE_REDISURL);
            return e
        }
    };
    const se = F("botium-zap-connector"),
        ne = new t({
            proxy: process.env.ZAP_ENDPOINT
        }),
        ae = async e => new Promise(t => setTimeout(t, e)), re = async e => ne.spider.status(e).then(t => (se(`Status of scan: ${e}: ${J.inspect(t)}`), t), t => {
            const s = new Error(`Status of ${e} failed: ${t.message}`);
            throw se(s), t
        });
    var oe, ie = {
            basicScan: async e => ne.spider.scan(e).then(e => (se(`Zap scan started: ${J.inspect(e)}`), e), t => {
                const s = new Error(`Scan of ${e} failed: ${t.message}`);
                throw se(s), t
            }),
            getResults: async e => ne.spider.results(e).then(t => (se(`Scan results of scan ${e}: ${J.inspect(t)}`), t), t => {
                se(new Error(`Result of scan: ${e} failed: ${t.message}`))
            }),
            getFullResults: async e => ne.spider.fullResults(e).then(t => (se(`Full results of scan: ${e}: ${J.inspect(t)}`), t), t => {
                const s = new Error(`Result of ${e} failed: ${t.message}`);
                throw se(s), t
            }),
            getAlertsByUrl: async e => ne.core.alerts(e).then(t => (se(`Alerts for url: ${e}: ${J.inspect(t)}`), t), e => {
                const t = new Error(`Alerts for url failed: ${e.message}`);
                throw se(t), e
            }),
            getStatus: re,
            polling: async (e, t) => {
                for (; e.progress < 100;) e.progress = await re(e.scanId).then(e => parseInt(e.status)).catch(e => {
                    throw new Error(`can't get Progress ${J.inspect(e)}`)
                }), e = await t.db.mutation.updateZapScan({
                    where: {
                        id: e.id
                    },
                    data: {
                        progress: e.progress
                    }
                }), t.pubsub.publish(`zapScan:${e.id}`, {
                    changeZapScan: e
                }), await ae(2e3)
            },
            createContext: async ({
                testSessionId: e,
                ctx: t
            }) => {
                const s = await ce.findFullTestSession(t.db, e).catch(e => {
                    throw se.error(J.inspect(e)), new Error(e)
                });
                if ("simplerest" === (e => e.filter(e => "CONTAINERMODE" === e.name).map(e => e.stringValue)[0].toLowerCase())(s.chatbot.capabilities)) {
                    const t = s.chatbot.capabilities.filter(e => "SIMPLEREST_URL" === e.name).map(e => e.stringValue)[0];
                    return await ne.context.newContext(e), ne.context.includeInContext(e, t)
                }
                return Promise.resolve()
            },
            deleteContext: e => ne.core.deleteSiteNode(e).catch(e => se(new Error(e))),
            deleteAllAlerts: () => ne.core.deleteAllAlerts().catch(e => se(new Error(e)))
        },
        ce = (function(e) {
            const t = F("botium-box-server-agents-utils"),
                n = e.exports,
                a = J,
                {
                    RetrieveTestSetDetails: r
                } = te;
            e.exports.getServerDefaultCapabilities = (e => ({
                FBPAGERECEIVER_REDISURL: e && e.queueSettings && e.queueSettings.redis
            })), e.exports.getAttachment = ((e, t) => e.query.testSessionTestCaseResultAttachment({
                where: {
                    id: t
                }
            }, "{ id name mimeType base64 testSessionTestCaseResult { testSession { client { id } } } }")), e.exports.securityCheck = (async (e, s) => {
                if (e.securityCheck) {
                    try {
                        await ie.createContext({
                            testSessionId: e.id,
                            ctx: s
                        }).catch(e => {
                            const s = new Error(`Zap is not reachable: ${a.inspect(e)}`);
                            throw t(s), s
                        })
                    } catch (e) {
                        return {
                            securityCapabilies: [],
                            zapAvailable: !1
                        }
                    }
                    return process.env.ZAP_ENDPOINT ? {
                        securityCapabilities: [{
                            name: "ZAP_PROXY",
                            type: "STRING",
                            stringValue: process.env.ZAP_ENDPOINT,
                            intValue: null,
                            booleanValue: null,
                            jsonValue: null
                        }],
                        zapAvailable: !0
                    } : (t(new Error("Security test cannot be done. Missing Zap configuration (ZAP_ENDPOINT) not set")), {
                        securityCapabilies: [],
                        zapAvailable: !1
                    })
                }
                return {
                    securityCapabilities: [],
                    zapAvailable: !0
                }
            }), e.exports.getExcel = ((e, t) => e.query.testSetExcel({
                where: {
                    id: t
                }
            }, "{ id filename filecontent testSet { client { id } } }")), e.exports.lookupApiKey = ((e, t) => {
                const s = new Date(Date.now()).toISOString();
                if (!t) return;
                const n = {
                    where: {
                        AND: [{
                            key: t
                        }, {
                            OR: [{
                                validFrom: null
                            }, {
                                validFrom_lte: s
                            }]
                        }, {
                            OR: [{
                                validTo: null
                            }, {
                                validTo_gte: s
                            }]
                        }]
                    }
                };
                return e.query.apiKeys(n, "{ id name clients { id name } permissions }").then(e => e && 0 !== e.length ? e[0] : null)
            }), e.exports.findFullPerformanceTestSession = ((e, t) => e.query.performanceTestSession({
                where: {
                    id: t
                }
            }, "{ \n    id \n    client { id name }\n    createdAt\n    name\n    description\n    tags\n    chatbot { \n      id \n      name\n      description \n      tags\n      capabilities { name type stringValue intValue booleanValue jsonValue } \n      sources { name type stringValue intValue booleanValue jsonValue } \n      envs { name type stringValue intValue booleanValue jsonValue } \n    } \n    testSets { \n      id \n      name\n      useMatchingMode\n      expandConvos\n      expandConvosMode\n      expandConvosModeRandomCount\n      expandUtterancesToConvos\n      expandUtterancesIncomprehension\n      useScriptingMemory\n      useScriptingMemoryMatchingMode\n      expandScriptingMemory\n      normalizeText\n    }\n    registeredComponents { id name type default src ref global args }\n    testProject { id name description tags capabilities { name type stringValue intValue booleanValue jsonValue } }\n    results {id stepIndex convo execCount execDurationMin execDurationMax execDurationSum waitCount waitDurationMin waitDurationMax waitDurationSum}\n    jobs {id status err started finished agentName}\n    capabilities { name type stringValue intValue booleanValue jsonValue } \n    sources { name type stringValue intValue booleanValue jsonValue } \n    envs { name type stringValue intValue booleanValue jsonValue }\n    parallelConvoCount\n    parallelJobCount\n    tickRepeatInitial\n    tickRepeatPerTick\n    tickMaxTime\n    tickTime\n    dataDensity     \n    }")), e.exports.findFullTestSession = ((e, t) => e.query.testSession({
                where: {
                    id: t
                }
            }, "{ \n    id \n    name\n    client { id name }\n    description\n    createdAt\n    securityCheck\n    tags\n    batchCount\n    bail\n    chatbot { \n      id \n      name\n      description \n      tags\n      capabilities { name type stringValue intValue booleanValue jsonValue } \n      sources { name type stringValue intValue booleanValue jsonValue } \n      envs { name type stringValue intValue booleanValue jsonValue } \n    } \n    testSets { \n      id \n      name\n      useMatchingMode\n      expandConvos\n      expandConvosMode\n      expandConvosModeRandomCount\n      expandUtterancesToConvos\n      expandUtterancesIncomprehension\n      useScriptingMemory\n      useScriptingMemoryMatchingMode\n      expandScriptingMemory\n      normalizeText\n    }\n    deviceSets { id name description tags provider { id name type url username password } devices { id name capabilities } } \n    testProject { id name description tags capabilities { name type stringValue intValue booleanValue jsonValue } }\n    registeredComponents { id name type default src ref global args }\n    agent { id name } \n    capabilities { name type stringValue intValue booleanValue jsonValue } \n    sources { name type stringValue intValue booleanValue jsonValue } \n    envs { name type stringValue intValue booleanValue jsonValue } \n    }")), e.exports.findSimpleTestSessionResults = ((e, t) => e.query.testSession({
                where: {
                    id: t
                }
            }, "{ id name status createdAt\n    client { id name }\n    results { \n      id testcaseName createdAt testcaseSource success err duration \n      testSet { id name tags } \n      testSetRepository { id name gitbranch }\n      testSetFolder { id name }\n      testSetExcel { id name }\n      testSetFilename\n    } }")), e.exports.findSimplePerformanceTestSessionResults = ((e, t) => e.query.performanceTestSession({
                where: {
                    id: t
                }
            }, "{ id name createdAt\n    client { id name }\n    results {id stepIndex convo execCount execDurationMin execDurationMax execDurationSum waitCount waitDurationMin waitDurationMax waitDurationSum stepStartAt job {id}}\n    jobs {id status err started finished agentName}\n    }")), e.exports.findAgentFromJobData = ((e, s, n) => {
                if (!s.data.name || !s.data.group) {
                    const e = `invalid agent event, name or group not given ${s.data}`;
                    return t(e), Promise.reject(e)
                }
                return e.query.agent({
                    where: {
                        name: s.data.name
                    }
                }, n || "{ id name debug capabilities { name type stringValue intValue booleanValue jsonValue } }")
            }), e.exports.findAgentFromName = ((e, t, s) => e.query.agent({
                where: {
                    name: t
                }
            }, s || "{ id name debug capabilities { name type stringValue intValue booleanValue jsonValue } }"));
            const o = e => ({
                ref: e.ref,
                src: e.src,
                global: e.global,
                args: e.args && JSON.parse(e.args)
            });
            e.exports.combineRegisteredComponents = ((...e) => {
                const t = {
                        ASSERTERS: [],
                        LOGIC_HOOKS: [],
                        USER_INPUTS: []
                    },
                    s = {
                        ASSERTER: "ASSERTERS",
                        LOGICHOOK: "LOGIC_HOOKS",
                        USERINPUT: "USER_INPUTS"
                    };
                return e && e.forEach(e => {
                    e && e.forEach(e => {
                        const n = s[e.type];
                        if (!n) return;
                        const a = t[n].findIndex(t => t.ref === e.ref);
                        a >= 0 ? t[n][a] = o(e) : t[n].push(o(e))
                    })
                }), t
            }), e.exports.getChatbotCapabilities = (async (t, s, n) => {
                const a = await s.query.chatbot({
                    where: {
                        id: t
                    }
                }, "{ id name capabilities { name type stringValue intValue booleanValue jsonValue } }");
                return {
                    caps: e.exports.combineBotiumCapabilities(e.exports.composeBotiumCapabilities(a.capabilities), e.exports.getServerDefaultCapabilities({
                        queueSettings: n
                    })),
                    envs: e.exports.combineBotiumCapabilities(e.exports.composeBotiumCapabilities(a.envs))
                }
            }), e.exports.composeBotiumCapabilities = (e => e && e.reduce((e, t) => ("STRING" !== t.type && "TEXT" !== t.type && "JS" !== t.type || (e[t.name] = t.stringValue ? t.stringValue.replace(/\\n/g, "\n") : ""), "INT" === t.type && (e[t.name] = parseInt(t.intValue)), "BOOLEAN" === t.type && (e[t.name] = !!t.booleanValue), "JSON" === t.type && (e[t.name] = t.jsonValue), e), {})), e.exports.combineBotiumCapabilities = ((...e) => {
                const t = {};
                return e && e.forEach(e => {
                    e && Object.keys(e).forEach(s => {
                        t[s] = e[s]
                    })
                }), t
            }), e.exports.extractTestSessionLike = (async (s, a) => {
                const o = await s.db.query.registeredComponents({
                        where: {
                            default: !0
                        }
                    }),
                    i = n.combineRegisteredComponents(o, a.registeredComponents),
                    {
                        securityCapabilities: c,
                        zapAvailable: d
                    } = await n.securityCheck(a, s),
                    l = n.combineBotiumCapabilities(i, {
                        PROJECTNAME: a.name
                    }, n.composeBotiumCapabilities(a.chatbot.capabilities), n.combineScriptingCapabilities(a.testSets), a.testProject && n.composeBotiumCapabilities(a.testProject.capabilities) || [], n.composeBotiumCapabilities(a.capabilities), n.composeBotiumCapabilities(c), n.getServerDefaultCapabilities(s));
                t(`extractTestSessionLike ${a.id} testSessionCaps: ${JSON.stringify(l)}`);
                const u = n.combineBotiumCapabilities(n.composeBotiumCapabilities(a.chatbot.sources), n.composeBotiumCapabilities(a.sources));
                t(`extractTestSessionLike ${a.id} testSessionSources: ${JSON.stringify(u)}`);
                const p = n.combineBotiumCapabilities(n.composeBotiumCapabilities(a.chatbot.envs), n.composeBotiumCapabilities(a.envs));
                t(`extractTestSessionLike ${a.id} testSessionEnvs: ${JSON.stringify(p)}`);
                const h = (await e.exports.extractAllInvolvedTestSets(s, a.testSets)).map(e => r(e));
                return t(`extractTestSessionLike ${a.id} testSessionTestSets: ${JSON.stringify(h)}`), {
                    testSessionCaps: l,
                    testSessionSources: u,
                    testSessionEnvs: p,
                    testSessionTestSets: h,
                    zapAvailable: d
                }
            }), e.exports.extractAllInvolvedTestSets = (async (e, t) => {
                const s = [],
                    n = async t => {
                        if (s.findIndex(e => e.id === t) >= 0) return;
                        const a = await e.db.query.testSet({
                            where: {
                                id: t
                            }
                        }, "{ \n        id \n        name\n        description \n        tags\n        useMatchingMode\n        expandConvos\n        expandConvosMode\n        expandConvosModeRandomCount\n        expandUtterancesToConvos\n        expandUtterancesIncomprehension\n        useScriptingMemory\n        useScriptingMemoryMatchingMode\n        expandScriptingMemory\n        normalizeText\n        excelHasConvos\n        excelHasPartialConvos\n        excelHasUtterances\n        excelWorksheetsConvos\n        excelWorksheetsPartialConvos\n        excelWorksheetsUtterances\n        excelStartRow\n        excelStartCol        \n        selectionType\n        scripts { id name script scriptType } \n        repositories { id name giturl gitbranch gitdir gituser gitpassword globFilter } \n        folders { id name path globFilter }\n        excels { id name filename filecontent }\n        dependencies { id }\n      }");
                        if (s.push(a), a.dependencies)
                            for (const e of a.dependencies) await n(e.id)
                    };
                for (const e of t) await n(e.id);
                return s
            });
            const i = {
                    UTTEXPANSION_MODE_ALL: "all",
                    UTTEXPANSION_MODE_FIRST: "first",
                    UTTEXPANSION_MODE_RANDOM: "random"
                },
                c = {
                    MATCHING_MODE_REGEXP: "regexp",
                    MATCHING_MODE_INCLUDE: "include",
                    MATCHING_MODE_INCLUDELOWERCASE: "includeLowerCase"
                },
                d = {
                    MATCHING_MODE_NON_WHITESPACE: "non_whitespace",
                    MATCHING_MODE_WORD: "word"
                };
            e.exports.combineScriptingCapabilities = (e => {
                if (!e) return {};
                const t = {},
                    n = e.filter(e => e.useMatchingMode).map(e => e.useMatchingMode);
                if (U.uniq(n).length > 1) throw new Error(`Test Sets not compatible, found multiple SCRIPTING_MATCHING_MODE: ${J.inspect(n)} ...`);
                n.length > 0 && (t[s.SCRIPTING_MATCHING_MODE] = c[n[0]]), t[s.SCRIPTING_NORMALIZE_TEXT] = !!(e.findIndex(e => e.normalizeText) >= 0), t[s.SCRIPTING_ENABLE_MEMORY] = !!(e.findIndex(e => e.useScriptingMemory) >= 0);
                const a = U.uniq(e.filter(e => e.useScriptingMemory && e.useScriptingMemoryMatchingMode).map(e => e.useScriptingMemoryMatchingMode));
                if (a.length > 1) throw new Error(`Test Sets not compatible, found multiple SCRIPTING_MEMORY_MATCHING_MODE: ${J.inspect(a)} ...`);
                a.length > 0 && (t[s.SCRIPTING_MEMORY_MATCHING_MODE] = d[a[0]]);
                const r = U.uniq(e.filter(e => e.expandConvos && e.expandConvosMode).map(e => e.expandConvosMode));
                if (r.length > 1) throw new Error(`Test Sets not compatible, found multiple SCRIPTING_UTTEXPANSION_MODE: ${J.inspect(r)} ...`);
                r.length > 0 && (t[s.SCRIPTING_UTTEXPANSION_MODE] = i[r[0]]);
                const o = U.uniq(e.filter(e => e.expandConvos && "UTTEXPANSION_MODE_RANDOM" === e.expandConvosMode && e.expandConvosModeRandomCount).map(e => e.expandConvosModeRandomCount));
                if (o.length > 1) throw new Error(`Test Sets not compatible, found multiple SCRIPTING_UTTEXPANSION_RANDOM_COUNT: ${J.inspect(o)} ...`);
                o.length > 0 && (t[s.SCRIPTING_UTTEXPANSION_RANDOM_COUNT] = o[0]);
                const l = U.uniq(e.filter(e => e.expandUtterancesToConvos && e.expandUtterancesIncomprehension).map(e => e.expandUtterancesIncomprehension));
                if (l && l.length > 1) throw new Error(`Test Sets not compatible, found multiple SCRIPTING_UTTEXPANSION_INCOMPREHENSION: ${J.inspect(l)} ...`);
                return l && l.length > 0 && (t[s.SCRIPTING_UTTEXPANSION_INCOMPREHENSION] = l[0]), t
            })
        }(oe = {
            exports: {}
        }, oe.exports), oe.exports);
    ce.getServerDefaultCapabilities, ce.getAttachment, ce.securityCheck, ce.getExcel, ce.lookupApiKey, ce.findFullPerformanceTestSession, ce.findFullTestSession, ce.findSimpleTestSessionResults, ce.findSimplePerformanceTestSessionResults, ce.findAgentFromJobData, ce.findAgentFromName, ce.combineRegisteredComponents, ce.getChatbotCapabilities, ce.composeBotiumCapabilities, ce.combineBotiumCapabilities, ce.extractTestSessionLike, ce.extractAllInvolvedTestSets, ce.combineScriptingCapabilities;
    const de = F("botium-retrieve-all-test-cases");
    var le = (e, t, n) => {
        const {
            excelHasConvos: r,
            excelHasPartialConvos: o,
            excelHasUtterances: i,
            excelWorksheetsConvos: c,
            excelWorksheetsPartialConvos: d,
            excelWorksheetsUtterances: l,
            excelStartRow: u,
            excelStartCol: p
        } = e;
        r && c && (t.caps[s.SCRIPTING_XLSX_SHEETNAMES] = c), o && d && (t.caps[s.SCRIPTING_XLSX_SHEETNAMES_PCONVOS] = d), i && l && (t.caps[s.SCRIPTING_XLSX_SHEETNAMES_UTTERANCES] = l), isNaN(u) || (t.caps[s.SCRIPTING_XLSX_STARTROW] = u), isNaN(p) || (t.caps[s.SCRIPTING_XLSX_STARTCOL] = p), e.convos && e.convos.forEach(s => {
            let n = [];
            try {
                s.format === a.SCRIPTING_FORMAT_TXT && (n = t.Compile(s.content, a.SCRIPTING_FORMAT_TXT, a.SCRIPTING_TYPE_CONVO)), n && n.forEach(e => {
                    e.sourceTag = s.sourceTag
                })
            } catch (t) {
                throw de(t), new Error(`${e.name}: Convo Script compilation failed: ${J.inspect(t)}`)
            }
        }), e.pconvos && e.pconvos.forEach(s => {
            let n = [];
            try {
                s.format === a.SCRIPTING_FORMAT_TXT && (n = t.Compile(s.content, a.SCRIPTING_FORMAT_TXT, a.SCRIPTING_TYPE_PCONVO)), n && n.forEach(e => {
                    e.sourceTag = s.sourceTag
                })
            } catch (t) {
                throw de(t), new Error(`${e.name}: Partial Convo Script compilation failed: ${J.inspect(t)}`)
            }
        }), e.utterances && e.utterances.forEach(s => {
            let n = [];
            try {
                s.format === a.SCRIPTING_FORMAT_TXT && (n = t.Compile(s.content, a.SCRIPTING_FORMAT_TXT, a.SCRIPTING_TYPE_UTTERANCES)), n && n.forEach(e => {
                    e.sourceTag = s.sourceTag
                })
            } catch (t) {
                throw de(t), new Error(`${e.name}: Utterance script compilation failed: ${J.inspect(t)}`)
            }
        }), e.scriptingMemories && e.scriptingMemories.forEach(s => {
            let n = [];
            try {
                s.format === a.SCRIPTING_FORMAT_TXT && (n = t.Compile(s.content, a.SCRIPTING_FORMAT_TXT, a.SCRIPTING_TYPE_SCRIPTING_MEMORY)), n && n.forEach(e => {
                    e.sourceTag = s.sourceTag
                })
            } catch (t) {
                throw de(t), new Error(`${e.name}: Scripting Memory script compilation failed: ${J.inspect(t)}`)
            }
        }), e.folders && e.folders.forEach(s => {
            try {
                const {
                    convos: n,
                    pconvos: a,
                    utterances: r
                } = t.ReadScriptsFromDirectory(s.path, s.globFilter);
                n && n.forEach(e => {
                    e.sourceTag = Object.assign({}, e.sourceTag, s.sourceTag)
                }), a && a.forEach(e => {
                    e.sourceTag = Object.assign({}, e.sourceTag, s.sourceTag)
                }), r && r.forEach(e => {
                    e.sourceTag = Object.assign({}, e.sourceTag, s.sourceTag)
                })
            } catch (t) {
                throw de(t), new Error(`${e.name}: Folder ${s} script compilation failed: ${J.inspect(t)}`)
            }
        });
        let h = Promise.resolve();
        e.excels && e.excels.length > 0 && (h = Promise.all(e.excels.map(({
            id: e,
            filename: s,
            filecontent: n,
            sourceTag: c
        }) => new Promise(e => {
            const s = Buffer.from(n, "base64");
            let d = [],
                l = [],
                u = [];
            r && (d = t.Compile(s, a.SCRIPTING_FORMAT_XSLX, a.SCRIPTING_TYPE_CONVO)), o && (l = t.Compile(s, a.SCRIPTING_FORMAT_XSLX, a.SCRIPTING_TYPE_PCONVO)), i && (u = t.Compile(s, a.SCRIPTING_FORMAT_XSLX, a.SCRIPTING_TYPE_UTTERANCES)), d && d.forEach(e => {
                e.sourceTag = Object.assign({}, e.sourceTag, c)
            }), l && l.forEach(e => {
                e.sourceTag = Object.assign({}, e.sourceTag, c)
            }), u && u.forEach(e => {
                e.sourceTag = Object.assign({}, e.sourceTag, c)
            }), e()
        }))));
        let S = Promise.resolve();
        return Promise.all([S, h])
    };
    const ue = new r.RegexpTokenizer({
            pattern: /([A-zÀ-ÿ-$]+|[0-9._]+|.|!|\?|'|"|:|;|,|-)/i
        }),
        pe = e => ue.tokenize(e),
        he = e => pe(e).filter(e => !me(e));
    const Se = (e, t, s) => [e.substr(0, t), s, e.substr(t + 1)].join("");
    const me = e => e && e.length > 1 && e.startsWith("$");
    var fe = {
        tokenize: he,
        evaluateProbability: e => Math.random() < e,
        getLongestToken: e => {
            const t = he(e).sort((e, t) => t.length - e.length);
            return t.length ? t[0] : ""
        },
        replaceCharAtCaseSensitive: (e, t, s) => {
            const n = (e => e === e.toLocaleLowerCase())(e.charAt(t)) ? s.toLocaleLowerCase() : s.toLocaleUpperCase();
            return Se(e, t, n)
        },
        replaceCharAt: Se,
        insertAt: (e, t, s) => [e.substr(0, t), s, e.substr(t)].join(""),
        replaceWith: (e, t, s) => {
            const n = e.indexOf(t);
            return [e.substr(0, n), s, e.substr(n + t.length)].join("")
        },
        reverse: e => {
            return e.split("").reverse().join("")
        },
        keymap: {
            1: ["2", "q"],
            2: ["1", "q", "w", "3"],
            3: ["2", "w", "e", "4"],
            4: ["3", "e", "r", "5"],
            5: ["4", "r", "t", "6"],
            6: ["5", "t", "y", "z", "7"],
            7: ["6", "y", "z", "u", "8"],
            8: ["7", "u", "i", "9"],
            9: ["8", "i", "o", "0"],
            0: ["9", "o", "p"],
            q: ["1", "2", "w", "a"],
            w: ["q", "a", "s", "e", "3", "2"],
            e: ["w", "s", "d", "r", "4", "3"],
            r: ["e", "d", "f", "t", "5", "4"],
            t: ["r", "f", "g", "y", "z", "6", "5"],
            y: ["t", "g", "h", "u", "7", "6", "x", "s", "a"],
            u: ["y", "z", "h", "j", "i", "8", "7"],
            i: ["u", "j", "k", "o", "9", "8"],
            o: ["i", "k", "l", "p", "0", "9"],
            p: ["o", "l", "0"],
            a: ["y", "z", "s", "w", "q"],
            s: ["a", "y", "z", "x", "d", "e", "w"],
            d: ["s", "x", "c", "f", "r", "e"],
            f: ["d", "c", "v", "g", "t", "r"],
            g: ["f", "v", "b", "h", "y", "z", "t"],
            h: ["g", "b", "n", "j", "u", "y", "z"],
            j: ["h", "n", "m", "k", "i", "u"],
            k: ["j", "m", "l", "o", "i"],
            l: ["k", "p", "o"],
            z: ["x", "s", "a", "t", "g", "h", "u", "7", "6"],
            x: ["y", "z", "c", "d", "s"],
            c: ["x", "v", "f", "d"],
            v: ["c", "b", "g", "f"],
            b: ["v", "n", "h", "g"],
            n: ["b", "m", "j", "h"],
            m: ["n", "k", "j"],
            "ö": ["l", "p", "ü", "ä", "-", "."],
            "ä": ["-", "ö", "ü", "+", "#"],
            "ü": ["p", "ö", "ä", "+", "´", "ß"],
            "ß": ["ü", "p", "0"]
        },
        normalizeNumberOfResult: (e, t = 3) => {
            if (e.length <= t) return e;
            const s = [],
                n = (e.length - t) / t / 2;
            for (let a = 0; a < t; a++) s.push(e[Math.round(n + a * (e.length / t))]);
            return s
        },
        isModifiableWord: (e, t) => {
            const s = ((e, t) => {
                const s = pe(e).sort((e, t) => t.length - e.length);
                for (let n = 0; n < s.length; n++) {
                    const a = s[n];
                    let r = 0;
                    do {
                        if ((r = e.indexOf(a, r)) >= 0) {
                            if (r <= t && t < r + a.length) return a;
                            r++
                        }
                    } while (r >= 0)
                }
                return null
            })(e, t);
            return !!s && !me(s)
        }
    };
    const {
        normalizeNumberOfResult: Te,
        isModifiableWord: ge
    } = fe;
    var be = {
        execute: e => {
            let t = [""];
            const s = e.toLocaleLowerCase();
            for (let n = 0; n < e.length; n++) {
                const a = e.charAt(n) !== s.charAt(n) && ge(e, n);
                a && (t = t.concat(t));
                for (let r = 0; r < t.length; r++) {
                    const o = a && r < t.length / 2;
                    t[r] = t[r].concat(o ? s.charAt(n) : e.charAt(n))
                }
            }
            return t = t.slice(1), Te(t)
        },
        metadata: {
            id: "Case sensitivity"
        }
    };
    const {
        normalizeNumberOfResult: ye
    } = fe;
    var Ee = {
            execute: e => {
                const t = e.split(/(?<! ) (?! )/);
                let s = [t[0]];
                for (let e = 1; e < t.length; e++) {
                    s = s.concat(s);
                    for (let n = 0; n < s.length; n++) s[n] = s[n] + (n < s.length / 2 ? " " : "  "), s[n] = s[n] + t[e]
                }
                return s = s.slice(1), ye(s)
            },
            metadata: {
                id: "Duplicate space"
            }
        },
        we = {
            execute: e => [e + " :)"],
            metadata: {
                id: "Emojis"
            }
        };
    const {
        normalizeNumberOfResult: Ce
    } = fe;
    var ve = [be, Ee, we, {
        execute: e => {
            let t = [""];
            const s = e.replace(/(.) /g, "$1\n");
            for (let n = 0; n < e.length; n++) {
                e.charAt(n) !== s.charAt(n) && (t = t.concat(t));
                for (let a = 0; a < t.length; a++) t[a] = t[a].concat(a < t.length / 2 ? e.charAt(n) : s.charAt(n))
            }
            return t = t.slice(1), Ce(t)
        },
        metadata: {
            id: "Enter instead of space"
        }
    }, {
        execute: e => [e.replace(" ,", " ").replace(", ", " ").replace(",", " ")],
        metadata: {
            id: "Missing punctuation mark"
        }
    }];
    const {
        getLongestToken: Ie,
        insertAt: Oe,
        replaceWith: Re
    } = fe;
    const Ne = e => {
        const t = [];
        let s = e;
        return [2, e.length - 2].forEach(n => {
            t.push(Oe(e, n, e[n])), s = Oe(s, n, s[n])
        }), t.push(s), t
    };
    var xe = {
        execute: e => {
            const t = [],
                s = Ie(e);
            return s.length < 5 ? t : (Ne(s).forEach(n => {
                t.push(Re(e, s, n))
            }), t)
        },
        metadata: {
            id: "Double character"
        }
    };
    const {
        getLongestToken: Ae,
        replaceWith: Pe,
        reverse: _e
    } = fe;
    const $e = e => {
        const t = new Set([e]);
        return [1, 2].forEach(s => {
            let n = s,
                a = !1;
            do {
                const s = e.substr(n, 3),
                    r = Pe(e, s, _e(s));
                t.has(r) || (t.add(r), a = !0), ++n >= e.length - 2 && (a = !0)
            } while (!a)
        }), t.delete(e), t
    };
    var De = {
        execute: e => {
            const t = [],
                s = Ae(e);
            return s.length < 7 ? t : ($e(s).forEach(n => {
                t.push(Pe(e, s, n))
            }), t)
        },
        metadata: {
            id: "Duplicate space"
        }
    };
    const {
        tokenize: Me,
        replaceWith: ke
    } = fe, je = ["Aale, Ahle", "Ai, Ei", "Annalen, analen", "aß, Aas", "Bad, bat", "bald, ballt", "Bällen, bellen", "Band, bannt", "Beete, bete", "bis, Biss", "Block, Blog", "Boot, bot", "Boote, Bote", "Bug, buk", "Bund, bunt", "Chor, Korps", "Code, Kot", "das, dass", "dehnen, denen", "erhält, erhellt", "Fähre, faire", "Fälle, Felle", "fällt, Feld", "Färse, Ferse, Verse", "fast, fasst", "fetter, Vetter", "fiel, viel", "fließt, fliehst, fliest", "frisst, Frist", "Fühler, Phyla", "Geld, gellt", "Gewand, gewandt", "Grad, Grat", "Graf, Graph", "Halt, hallt", "hallte, halte", "hält, Held, hellt", "Hämmer, Hemmer", "hängst, Hengst", "harrt, hart", "hasst, hast", "Häute, heute", "Heer, hehr, her", "Hemd, hemmt", "hohl, hol", "Hund, Hunt", "isst, ist", "kannte, Kante", "konnten, Konten", "Kuh, Coup", "küsste, Küste", "Laib, Leib", "Laie, Leihe", "laichen, Leichen", "lasst, Last", "läuten, Leuten", "Lärche, Lerche", "Leere, Lehre", "leeren, lehren", "Leerstelle, Lehrstelle", "Leid, leiht", "Lid, Lied", "lies, ließ", "liest, least", "Mahl, Mal", "Mähre, Märe, Meere", "mahlen, malen", "man, Mann", "Märkte, merkte", "Meer, mehr", "Miene, Mine", "misst, Mist", "Mohr, Moor", "mühten, Mythen", "Mund, Munt", "Nachnahme, Nachname", "nahmen, Namen", "packt, Pakt", "pisste, Piste", "rächen, Rechen", "rächt, Recht", "Rad, Rat", "Rain, rein", "Rede, Reede", "Reis, reiß", "reist, reißt", "ruhte, Rute, Route", "säen, sähen", "Sämann, Seemann", "Sätzen, setzen", "Saite, Seite", "seid, seit", "schafft, Schaft", "schallten, schalten", "Schänke, schenke", "schellte, Schelte", "Schlächter, schlechter", "Schlämme, schlemme", "Schwälle, Schwelle", "Schwämme, Schwemme", "Seen, sehen", "seid, seiht, seit", "sie, sieh", "Siegel, Sigel", "Sohle, Sole", "Sold, sollt", "späht, spät", "Stadt, statt", "Städte, Stätte", "Ställe, Stelle", "starrt, Start", "stehlen, Stelen", "stiehl, Stiel, Stil", "Tod, tot", "Trend, trennt", "Uhrzeit, Urzeit", "Verband, verbannt", "Verben, werben", "verließ, Verlies", "verwaist, verweist", "Villen, Willen", "Waage, vage", "Waagen, wagen", "Wahl, Wal", "wahr, war", "wahre, Ware", "Waise, Weise", "Wald, wallt", "Wälle, Welle", "Wände, Wende", "Weck, weg", "Wehr, wer", "wehrt, Wert", "weiht, weit", "weis, weiß", "weist, weißt", "wieder, wider", "wird, Wirt", "Zunahme, Zuname", "accept,except", "acclamation,acclimation", "acts,ax,axe", "adolescence,adolescents", "aeration,erration", "aerie,airy", "affect,effect", "aid,aide", "ail,ale", "air,heir,err,ere", "aisle,isle,I'll", "all,awl", "allowed,aloud", "allude,elude", "altar,alter", "appose,oppose", "arc,ark", "are,our", "ascent,assent", "ate,eight", "away,aweigh", "aye,I,eye", "bade,bayed", "bail,bale", "bait,bate", "bald,bawled,balled", "ball,bawl", "band,banned", "bard,barred", "bare,bear", "baron,barren", "base,bass", "based,baste", "bazaar,bizarre", "be,bee", "beach,beech", "bean,been", "beat,beet", "been,bin", "beer,bier", "bell,belle", "berry,bury", "berth,birth", "better,bettor", "bight,bite", "billed,build", "bird,burred", "blew,blue", "boar,bore,boor", "board,bored", "boarder,border", "bode,bowed", "bold,bowled", "bolder,boulder,bowlder", "bole,bowl", "boos,booze", "bough,bow", "boy,buoy", "braid,brayed", "braise,braze,brays,braize", "brake,break", "breach,breech", "bread,bred", "brewed,brood", "brews,bruise", "bridal,bridle", "burro,burrow", "bus,buss", "bused,bust", "but,butt", "buy,bye,by", "cache,cash", "callous,callus", "can't,cant", "cannon,canon", "canter,cantor", "carat,carrot,caret", "caries,carries", "cast,caste", "cede,seed", "cell,sell", "cellar,seller", "censor,sensor", "cent,sent,scent", "cents,sense,scents", "cereal,serial", "cession,session", "chaise,chase", "chalk,chock", "chance,chants", "chased,chaste", "cheap,cheep", "chews,choose", "chic,sheik", "choir,quire", "chord,cored,cord", "chute,shoot", "cite,site,sight", "clause,claws", "click,clique", "close,clothes", "coal,cole", "coaled,cold", "coarse,course", "coated,coded", "cocks,cox", "complement,compliment", "contingence,contingents", "coo,coup", "coop,coupe", "correspondence,correspondents", "cosign,cosine", "council,counsel", "councilor,counselor", "creak,creek", "crewed,crude", "crews,cruise", "cue,queue", "currant,current", "curser,cursor", "dam,damn", "Dane,deign", "days,daze", "dear,deer", "dense,dents", "dependence,dependents", "dew,due,do", "die,dye", "dire,dyer", "discreet,discrete", "doe,dough", "does,doze,doughs", "done,dun", "dual,duel", "ducked,duct", "earn,urn", "either,ether", "emigrant,immigrant", "eutopia,utopia", "ewe,you,yew", "eyed,I'd", "fain,feign", "faint,feint", "fair,fare", "fairy,ferry", "fate,fete", "faze,phase", "feat,feet", "feudal,futile", "find,fined", "finish,Finnish", "fir,fur", "flair,flare", "flea,flee", "flecks,flex", "flew,flue", "flour,flower", "foaled,fold", "for,four,fore", "forego,forgo", "foreword,forward", "forth,fourth", "foul,fowl", "frees,frieze,freeze", "friar,fryer", "gage,gauge", "gait,gate", "gel,jell", "gene,jean", "gild,guild", "gneiss,nice", "gored,gourd", "grade,grayed,greyed", "grate,great", "grays,greys,graze", "grisly,grizzly", "groan,grown", "guessed,guest", "guide,guyed", "guise,guys", "hail,hale", "hair,hare", "hairy,harry", "hall,haul", "halve,have", "hangar,hanger", "hay,hey", "hays,haze", "he'd,heed", "he'll,heel,heal", "hear,here", "heard,herd", "heated,heeded", "hew,hue", "hi,high", "higher,hire", "him,hymn", "ho,hoe", "hoar,whore", "hoard,horde", "hoarse,horse", "hoes,hose", "hold,holed", "hole,whole", "holey,wholly,holy", "hostel,hostile", "hour,our", "idle,idol", "immanent,imminent", "in,inn", "incidence,incidents", "incite,insight", "instance,instants", "intense,intents", "intension,intention", "it's,its", "jam,jamb", "knave,nave", "knead,need,kneed", "knew,new", "knight,night", "knit,nit", "knot,not,naught", "know,no", "knows,nose", "lacks,lax", "lade,laid", "lain,lane", "lair,layer", "lam,lamb", "laps,lapse", "lay,lei", "lays,laze", "leach,leech", "lead,led", "leak,leek", "lean,lien", "leased,least", "lends,lens", "lessen,lesson", "lesser,lessor", "let's,lets", "levee,levy", "liar,lyre", "lichen,liken", "lickerish,licorice", "lie,lye", "links,lynx", "lo,low", "load,lode", "loan,lone", "loch,lock", "locks,lox", "loop,loupe", "loos,lose", "lose,loose", "made,maid", "mail,male", "main,mane", "maize,maze,Mays", "mall,maul", "manner,manor", "marshal,martial", "massed,mast", "mat,matte", "mean,mien", "meat,mete,meet", "medal,mettle,meddle,metal", "might,mite", "mince,mints", "mind,mined", "miner,minor", "missed,mist", "moat,mote", "mood,mooed", "moor,more", "morning,mourning", "muscle,mussel", "mussed,must", "naval,navel", "nay,neigh", "nicks,nix", "none,nun", "oar,ore,or", "ode,owed", "oh,owe", "once,wants", "one,won", "oohs,ooze", "overseas,oversees", "paced,paste", "packed,pact", "pail,pale", "pain,pane", "pair,pear,pare", "palate,pallet,palette", "parish,perish", "passed,past", "patience,patients", "pause,paws", "peace,piece", "peak,pique,peek", "peal,peel", "pearl,purl", "pedal,petal,peddle", "peer,pier", "penance,pennants", "per,purr", "pi,pie", "plain,plane", "plainer,planer,planar", "plait,plate", "pleas,please", "pole,poll", "poor,pour,pore", "populace,populous", "praise,preys,prays", "pray,prey", "precedence,precedents", "premier,premiere", "presence,presents", "pride,pried", "prier,prior", "pries,prize", "prince,prints", "principal,principle", "profit,prophet", "rack,wrack", "raid,rayed", "rail,rale", "rain,rein,reign", "raise,raze,rays", "rap,wrap", "rapt,wrapped,wrapt", "re-cover,recover", "re-lay,relay", "read,red", "read,reed", "real,reel", "recede,reseed", "reek,wreak", "residence,residents", "rest,wrest", "retch,wretch", "rhyme,rime", "right,write,rite,wright", "ring,wring", "ringer,wringer", "rise,ryes", "road,rowed,rode", "roe,row", "roil,royal", "role,roll", "roomer,rumor,rumour", "root,route", "rose,rows", "rote,wrote", "rude,rued", "rues,ruse", "rung,wrung", "rye,wry", "sail,sale", "scene,seen", "sea,see", "seam,seem", "sear,seer", "seas,seize,sees", "sects,sex", "sew,sow,so", "shake,sheik", "shear,sheer", "shoe,shoo", "sic,sick", "sics,six", "side,sighed", "sighs,size", "sign,sine", "slay,sleigh", "sleight,slight", "slew,slough", "soar,sore", "soared,sword", "sold,soled", "sole,soul", "some,sum", "son,sun", "stair,stare", "stake,steak", "steal,steel", "step,steppe", "storey,story", "straight,strait", "suite,sweet", "tacked,tact", "tacks,tax", "tail,tale", "taper,tapir", "tarry,terry", "taught,taut", "tea,tee", "team,teem", "tears,tiers", "teas,tees,tease", "tense,tents", "than,then", "there,they're,their", "threw,through", "throne,thrown", "thyme,time", "tide,tied", "tier,tire", "tighten,titan", "to,two,too", "toad,towed,toed", "toe,tow", "told,tolled", "tracked,tract", "tray,trey", "udder,utter", "vain,vein,vane", "vale,veil", "vial,vile", "vice,vise", "wade,weighed", "wail,whale", "waist,waste", "wait,weight", "waive,wave", "waiver,waver", "wale,whale", "war,wore", "ward,warred", "ware,where,wear", "warn,worn", "wax,whacks", "way,whey,weigh", "we,wee", "we'd,weed", "we'll,wheel,weal,wheal", "we're,weir,were", "we're,whir", "we've,weave", "weak,week", "wearer,where're", "weather,whether", "wet,whet", "wheeled,wield", "which,witch", "while,wile", "whiled,wild", "whine,wine", "whined,wined,wind", "whirled,world", "whit,wit", "whither,wither", "who's,whose", "whoa,woe", "wood,would", "yack,yak", "yaw,your,yore,you're", "yoke,yolk", "yore,your,you're", "you'll,Yule", "aahed,odd", "adieu,ado", "ant,aunt", "aural,oral", "marry,merry", "rout,route", "seated,seeded", "shone,shown", "tidal,title", "trader,traitor", "vary and very"];
    let Be;
    const qe = () => {
            if (Be) return Be;
            const e = je.map(function(e) {
                return e.toLocaleLowerCase().trim().split(",")
            });
            return Be = [], e.forEach(function(e) {
                e.forEach(function(t) {
                    Be[t] = e.filter(e => e !== t)
                })
            }), Be
        },
        Le = e => {
            const t = qe();
            if ((e = e.toLocaleLowerCase()) in t) return t[e][0]
        };
    var Fe = {
        execute: e => {
            const t = Me(e);
            let s = e;
            return t.forEach(e => {
                const t = Le(e);
                t && (s = ke(s, e, t))
            }), s !== e ? [s] : []
        },
        metadata: {
            id: "Homophones"
        }
    };
    const {
        getLongestToken: Ue,
        replaceCharAtCaseSensitive: Je,
        replaceWith: Ge,
        keymap: Ve
    } = fe;
    const He = e => {
        const t = [];
        return [2, e.length - 2].forEach(s => {
            const n = e[s].toLocaleLowerCase();
            if (n in Ve) {
                const a = Ve[n];
                [a[0], a[a.length - 1]].forEach(n => {
                    t.push(Je(e, s, n))
                })
            }
        }), t
    };
    var ze = {
        execute: e => {
            const t = [],
                s = Ue(e);
            return s.length < 5 ? t : (He(s).forEach(n => {
                t.push(Ge(e, s, n))
            }), t)
        },
        metadata: {
            id: "Mishit"
        }
    };
    const {
        getLongestToken: Ye,
        replaceCharAtCaseSensitive: We,
        replaceWith: Xe
    } = fe;
    const Ke = e => {
        const t = [];
        return [2, e.length - 2].forEach(s => {
            t.push(We(e, s, ""))
        }), t
    };
    var Qe = {
        execute: e => {
            const t = [],
                s = Ye(e);
            return s.length < 5 ? t : (Ke(s).forEach(n => {
                t.push(Xe(e, s, n))
            }), t)
        },
        metadata: {
            id: "Missing character"
        }
    };
    const {
        getLongestToken: Ze,
        replaceWith: et,
        reverse: tt
    } = fe;
    const st = e => {
        const t = new Set([e]);
        return [2, e.length - 2].forEach(s => {
            let n = s,
                a = !1;
            do {
                const s = e.substr(n, 2),
                    r = et(e, s, tt(s));
                t.has(r) || (t.add(r), a = !0), ++n >= e.length - 2 && (a = !0)
            } while (!a)
        }), t.delete(e), t
    };
    var nt = {
        execute: e => {
            const t = [],
                s = Ze(e);
            return s.length < 5 ? t : (st(s).forEach(n => {
                t.push(et(e, s, n))
            }), t)
        },
        metadata: {
            id: "Mixing character"
        }
    };
    const {
        replaceCharAt: at
    } = fe, rt = {
        z: "y",
        Z: "Y",
        y: "z",
        Y: "Z"
    };
    var ot = {
        execute: e => {
            let t = e;
            for (let e = 0; e < t.length; e++) {
                const s = t.charAt(e);
                s in rt && (t = at(t, e, rt[s]))
            }
            return t === e ? [] : [t]
        },
        metadata: {
            id: "qwertz vs qwerty keyboard"
        }
    };
    const {
        getLongestToken: it,
        replaceCharAtCaseSensitive: ct,
        replaceWith: dt,
        keymap: lt
    } = fe;
    const ut = e => {
        const t = [],
            s = Math.round(e.length / 2),
            n = e[s].toLocaleLowerCase();
        if (n in lt) {
            const a = lt[n];
            [a[0], a[a.length - 1]].forEach(n => {
                t.push(ct(e, s, e[s] + n))
            })
        }
        return t
    };
    var pt = {
        execute: e => {
            const t = [],
                s = it(e);
            return s.length < 5 ? t : (ut(s).forEach(n => {
                t.push(dt(e, s, n))
            }), t)
        },
        metadata: {
            id: "Sausage fingers"
        }
    };
    const {
        getLongestToken: ht,
        replaceWith: St
    } = fe;
    const mt = e => {
        const t = new Set([e]);
        return [1, 2].forEach(s => {
            let n = s,
                a = !1;
            do {
                const s = e.substr(n, 3).split("");
                let r = Array.from(s);
                r.push(r[0]), r.shift();
                const o = St(e, s.join(""), r.join(""));
                t.has(o) || (t.add(o), a = !0), ++n >= e.length - 2 && (a = !0)
            } while (!a)
        }), t.delete(e), t
    };
    var ft = [xe, De, Fe, ze, Qe, nt, ot, pt, {
        execute: e => {
            const t = [],
                s = ht(e);
            return s.length < 7 ? t : (mt(s).forEach(n => {
                t.push(St(e, s, n))
            }), t)
        },
        metadata: {
            id: "Shift characters"
        }
    }];
    const Tt = ve.concat(ft),
        gt = {};
    Tt.forEach(e => {
        gt[e.metadata.id] = e
    });
    const bt = {};
    ve.forEach(e => {
        bt[e.metadata.id] = "habits"
    }), ft.forEach(e => {
        bt[e.metadata.id] = "typo"
    });
    var yt = {
        GetMutatorById: e => {
            if (!(e in bt)) throw Error(`Unknown ID: ${e}`);
            return gt[e]
        },
        allMutatorNames: Object.keys(gt),
        pipelineAllMutatorCombined: [
            [ve, ft],
            [ve],
            [ft]
        ],
        pipelineAllMutatorNotCombined: [
            [ve],
            [ft]
        ]
    };
    const {
        pipelineAllMutatorCombined: Et,
        pipelineAllMutatorNotCombined: wt,
        GetMutatorById: Ct,
        allMutatorNames: vt
    } = yt;
    const It = (e, t) => {
        let s = new Set;
        for (const n of t) {
            let t = [e];
            for (const e of n) {
                let s = [];
                for (const n of e)
                    for (const e of t) s = s.concat(n.execute(e));
                t = s
            }
            for (const e of t) s.has(e) ? console.log("duplicate utterance : <" + e + "> created by " + JSON.stringify(n, 2)) : s.add(e)
        }
        return [...s]
    };
    const Ot = e => {
        if (!e.humanifiersToExecute || !e.humanifiersToExecute.length) return [
            [wt]
        ];
        return [
            [(e => e.map(e => Ct(e)))(e.humanifiersToExecute)]
        ]
    };
    var Rt = {
        pipelineAllMutatorCombined: Et,
        pipelineAllMutatorNotCombined: wt,
        allHumanifiers: vt,
        Execute: (e, t) => {
            const s = Ot(t);
            return It(e, s)
        },
        ExecutePipeline: It
    };
    const Nt = F("botium-box-clone-testset"),
        {
            BotDriver: xt,
            Capabilities: At
        } = c,
        {
            RetrieveTestSetDetails: Pt
        } = te,
        {
            combineScriptingCapabilities: _t
        } = ce;
    const $t = (e, t) => {
            const s = {
                all: e.utterances,
                me: new Set,
                bot: new Set,
                both: null,
                neither: null,
                toHumanify: {},
                allUtteranceCount: 0,
                utterancesToHumanifyCount: 0
            };
            s.neither = new Set(Object.keys(s.all)), e.convos.forEach(e => {
                e.conversation.forEach(e => {
                    e.messageText && e.messageText in s.all && (s[e.sender].add(e.messageText), s.neither.delete(e.messageText))
                })
            });
            const n = U.uniq(Array.from(s.me)).filter(e => s.bot.has(e));
            s.both = new Set(n);
            const a = {};
            let r = 0,
                o = 0;
            return t.humanifiersToExecute && t.humanifiersToExecute.length && [...s.me, ...n, ...s.neither].forEach(e => {
                o += s.all[e].utterances.length;
                let n = Math.round(o * t.percentToHumanify - r);
                0 === r && 0 === n && (n = 1), a[e] = n, r += n
            }), s.toHumanify = a, s.allUtteranceCount = o, s.utterancesToHumanifyCount = r, s
        },
        Dt = (e, t, s) => {
            t.both.forEach(s => {
                if (t.toHumanify[s]) {
                    let t = s + "_JUST_BOT";
                    if (t in e.utterances) throw new Error(`There is already an utterance ${t} in the testset!`)
                }
            });
            const n = {
                humanifiedRefs: [],
                humanifiedRefCount: 0,
                humanifiedUtterancesCount: 0,
                duplicates: 0
            };
            t.both.forEach(s => {
                t.toHumanify[s] && (e.utterances[s + "_JUST_BOT"] = U.cloneDeep(e.utterances[s]))
            });
            Object.keys(t.toHumanify).forEach(a => {
                if (t.toHumanify[a]) {
                    const r = (n => {
                        e.utterances[n].utterances = U.uniq(e.utterances[n].utterances);
                        const a = t.toHumanify[n],
                            r = e.utterances[n].utterances;
                        let o = 0;
                        for (let t = 0; t < a; t++) {
                            const a = Rt.Execute(r[t], {
                                humanifiersToExecute: s.humanifiersToExecute
                            });
                            e.utterances[n].utterances = e.utterances[n].utterances.concat(a), o += a.length
                        }
                        let i = e.utterances[n].utterances.length;
                        return e.utterances[n].utterances = U.uniq(e.utterances[n].utterances), {
                            humanifiedRefCount: a,
                            humanifiedUtterancesCount: o,
                            duplicates: i - e.utterances[n].length
                        }
                    })(a);
                    n.humanifiedRefs.push(a), n.humanifiedRefCount += r.humanifiedRefCount, n.humanifiedUtterancesCount += r.humanifiedUtterancesCount, n.duplicates += r.duplicates
                }
            });
            const a = [];
            return e.convos.forEach(e => {
                ((e, t) => (e.conversation.forEach(e => {
                    if (e.messageText && t.both.has(e.messageText)) return !0
                }), !1))(e, t)
            }), e.convos = e.convos.concat(a), n.clonedConvoCount = a.length, n
        };
    var Mt = {
        possibleOptions: {
            humanifiers: Rt.allHumanifiers
        },
        CloneTestset: async (e, t) => {
            const s = _t([e]),
                n = new xt(s).BuildCompiler(),
                a = g.join(process.env.BOTIUM_TEMPDIR, `${L(e.name)}_CLONED_${I("Aa0",5)}`);
            o.sync(a), await le(Pt(e), n), i(a, e => {
                e && Nt(`Failed rimraf ${a}: ${e}`)
            });
            const r = {},
                c = $t(n, t);
            return r.utterances = {
                all: Object.keys(c.all).length,
                me: c.me.size,
                bot: c.bot.size,
                both: c.both.size,
                neither: c.neither.size,
                toHumanify: Object.values(c.toHumanify).filter(e => e).length,
                allUtteranceCount: c.allUtteranceCount,
                utterancesToHumanifyCount: c.utterancesToHumanifyCount
            }, r.process = Dt(n, c, t), Nt(`Cloning finished: ${JSON.stringify(r)}`), n
        },
        ExportTestsetToFolder: async (e, t) => {
            const s = g.join(process.env.TESTSETDIR, `${L(t)}_${I("Aa0",5)}`);
            o.sync(s);
            const n = e.caps[At.SCRIPTING_TXT_EOL],
                r = Object.keys(e.utterances);
            for (let t = 0; t < r.length; t++) {
                let a = [r[t]].concat(e.utterances[r[t]].utterances).join(n);
                T.writeFileSync(g.join(s, `${r[t]}.utterances.txt`), a)
            }
            const i = e.GetCompiler(a.SCRIPTING_FORMAT_TXT);
            return e.convos && e.convos.forEach((e, t) => {
                let n = i.Decompile([e]);
                T.writeFileSync(g.join(s, `c${t}_${L(e.header.name)}.convo.txt`), n)
            }), e.partialConvos && Object.values(e.partialConvos).forEach((e, t) => {
                let n = i.Decompile([e]);
                T.writeFileSync(g.join(s, `p_${L(e.header.name)}.pconvo.txt`), n)
            }), s
        },
        ExportTestsetToLocalRepository: async e => {
            const t = [],
                s = e.caps[At.SCRIPTING_TXT_EOL],
                n = Object.keys(e.utterances);
            for (let a = 0; a < n.length; a++) {
                let r = [n[a]].concat(e.utterances[n[a]].utterances).join(s);
                t.push({
                    name: n[a],
                    script: r,
                    scriptType: "SCRIPTING_TYPE_UTTERANCES"
                })
            }
            const r = e.GetCompiler(a.SCRIPTING_FORMAT_TXT);
            return e.convos && e.convos.forEach((e, s) => {
                let n = r.Decompile([e]);
                t.push({
                    name: e.header.name,
                    description: e.header.description,
                    script: n,
                    scriptType: "SCRIPTING_TYPE_CONVO"
                })
            }), e.partialConvos && Object.values(e.partialConvos).forEach((e, s) => {
                let n = r.Decompile([e]);
                t.push({
                    name: e.header.name,
                    description: e.header.description,
                    script: n,
                    scriptType: "SCRIPTING_TYPE_PCONVO"
                })
            }), t
        }
    };
    const {
        BotDriver: kt
    } = c, {
        FindFullTestSet: jt,
        RetrieveTestSetDetails: Bt
    } = te, qt = F("botium-box-mutate-testset");
    var Lt = {
        createTestSet: async (e, {
            testSet: t
        }, s, n) => s.db.mutation.createTestSet({
            data: t
        }, n),
        async updateTestSet(e, {
            id: t,
            testSet: s
        }, n, a) {
            if (!await n.db.exists.TestSet({
                    id: t
                })) throw new Error(`TestSet not found ${t}`);
            return n.db.mutation.updateTestSet({
                where: {
                    id: t
                },
                data: s
            }, a)
        },
        deleteTestSet: async (e, {
            id: t
        }, s) => new Promise((e, n) => {
            s.db.mutation.deleteTestSet({
                where: {
                    id: t
                }
            }, "{id}").then(() => e(!0)).catch(e => n(e))
        }),
        createTestSetScript: async (e, {
            testSetScript: t
        }, s, n) => s.db.mutation.createTestSetScript({
            data: t
        }, n),
        async updateTestSetScript(e, {
            id: t,
            testSetScript: s
        }, n, a) {
            if (!await n.db.exists.TestSetScript({
                    id: t
                })) throw new Error(`TestSetScript not found ${t}`);
            return n.db.mutation.updateTestSetScript({
                where: {
                    id: t
                },
                data: s
            }, a)
        },
        deleteTestSetScript: async (e, {
            id: t
        }, s) => new Promise((e, n) => {
            s.db.mutation.deleteTestSetScript({
                where: {
                    id: t
                }
            }, "{id}").then(() => e(!0)).catch(e => n(e))
        }),
        async createTestSetRepository(e, {
            testSetRepository: t
        }, s, n) {},
        async updateTestSetRepository(e, {
            id: t,
            testSetRepository: s
        }, n, a) {},
        async deleteTestSetRepository(e, {
            id: t
        }, s) {},
        createTestSetFolder: async (e, {
            testSetFolder: t
        }, s, n) => s.db.mutation.createTestSetFolder({
            data: t
        }, n),
        async updateTestSetFolder(e, {
            id: t,
            testSetFolder: s
        }, n, a) {
            if (!await n.db.exists.TestSetFolder({
                    id: t
                })) throw new Error(`TestSetFolder not found ${t}`);
            return n.db.mutation.updateTestSetFolder({
                where: {
                    id: t
                },
                data: s
            }, a)
        },
        deleteTestSetFolder: async (e, {
            id: t
        }, s) => new Promise((e, n) => {
            s.db.mutation.deleteTestSetFolder({
                where: {
                    id: t
                }
            }, "{id}").then(() => e(!0)).catch(e => n(e))
        }),
        createTestSetExcel: async (e, {
            testSetExcel: t
        }, s, n) => s.db.mutation.createTestSetExcel({
            data: t
        }, n),
        async updateTestSetExcel(e, {
            id: t,
            testSetExcel: s
        }, n, a) {
            if (!await n.db.exists.TestSetExcel({
                    id: t
                })) throw new Error(`TestSetExcel not found ${t}`);
            return n.db.mutation.updateTestSetExcel({
                where: {
                    id: t
                },
                data: s
            }, a)
        },
        deleteTestSetExcel: async (e, {
            id: t
        }, s) => new Promise((e, n) => {
            s.db.mutation.deleteTestSetExcel({
                where: {
                    id: t
                }
            }, "{id}").then(() => e(!0)).catch(e => n(e))
        }),
        async cloneTestSet(e, {
            id: t,
            options: s
        }, n, a) {
            const r = await jt(n.db, t);
            if (!r) throw new Error(`TestSet not found ${t}`);
            const o = await Mt.CloneTestset(r, s),
                i = [`Cloned from "${r.name}"`];
            s.humanifiersToExecute && s.humanifiersToExecute.length > 0 && (i.push(`Humanifiers "${s.humanifiersToExecute.join(", ")}"`), i.push(`Percentage ${100*s.percentToHumanify}%`));
            const c = {
                data: {
                    ...r,
                    name: s.name,
                    client: r.client && {
                        connect: {
                            id: r.client.id
                        }
                    } || null,
                    description: i.join(", "),
                    tags: {
                        set: r.tags ? [...r.tags, "Cloned"] : ["Cloned"]
                    },
                    folders: {},
                    repositories: {},
                    scripts: [],
                    excels: {}
                }
            };
            if ("FOLDER" === s.output) {
                const e = await Mt.ExportTestsetToFolder(o, s.name);
                c.data.folders.create = [{
                    name: "Test Set Scripts",
                    path: g.resolve(e)
                }]
            } else if ("LOCAL" === s.output) {
                const e = await Mt.ExportTestsetToLocalRepository(o);
                c.data.scripts.create = e
            }
            return delete c.data.id, n.db.mutation.createTestSet(c, a)
        },
        exportTestSetToGit: async (e, {
            id: t,
            options: s
        }, n, a) => !0,
        async exportTestSetToFolder(e, {
            id: t,
            options: s
        }, n, a) {
            const r = await jt(n.db, t);
            if (!r) throw new Error(`TestSet not found ${t}`);
            const i = r.folders && r.folders.find(e => e.id === s.id);
            if (!i) throw new Error(`Folder ${s.id} not found in Test Set ${t}`);
            let c = i.path;
            s.subdirectory && (c = g.join(c, s.subdirectory));
            try {
                o.sync(c), qt(`Created output directory ${c}`)
            } catch (e) {
                throw new Error(`Failed to create output directory ${c}: ${e}`)
            }
            const d = (e, t) => {
                try {
                    T.writeFileSync(g.join(c, e), t), qt(`Wrote file ${e} to output directory ${c}`)
                } catch (t) {
                    throw new Error(`Failed to write file ${e} to output directory ${c}: ${t}`)
                }
            };
            return r.scripts && r.scripts.forEach(e => {
                "SCRIPTING_TYPE_CONVO" === e.scriptType && d(`${L(e.name)}.convo.txt`, e.script), "SCRIPTING_TYPE_PCONVO" === e.scriptType && d(`${L(e.name)}.pconvo.txt`, e.script), "SCRIPTING_TYPE_UTTERANCES" === e.scriptType && d(`${L(e.name)}.utterances.txt`, e.script), "SCRIPTING_TYPE_SCRIPTING_MEMORY" === e.scriptType && d(`${L(e.name)}.scriptingmemory.txt`, e.script)
            }), r.excels && r.excels.forEach(e => {
                const t = Buffer.from(e.filecontent, "base64");
                d(`${L(e.name)}.xlsx`, t)
            }), !0
        },
        async updateTestSetStats(e, {
            id: t
        }, s, n) {
            const a = await jt(s.db, t);
            if (!a) throw new Error(`TestSet not found ${t}`);
            const r = (new kt).BuildCompiler(),
                c = g.join(process.env.BOTIUM_TEMPDIR, `${L(a.name)}_STATS_${I("Aa0",5)}`);
            o.sync(c);
            const d = Bt(a);
            try {
                await le(d, r);
                const e = r.convos && r.convos.map(e => ({
                        name: e.header.name,
                        order: e.header.order,
                        description: e.header.description,
                        sourceTag: JSON.stringify(e.sourceTag),
                        stepCount: e.conversation && e.conversation.length || 0
                    })) || [],
                    a = r.partialConvos && Object.values(r.partialConvos).map(e => ({
                        name: e.header.name,
                        description: e.header.description,
                        sourceTag: JSON.stringify(e.sourceTag),
                        stepCount: e.conversation && e.conversation.length || 0
                    })) || [],
                    o = e.length,
                    l = a.length,
                    u = Object.keys(r.utterances).reduce((e, t) => e + r.utterances[t].utterances.length, 0),
                    p = r.scriptingMemories.length,
                    h = await s.db.query.testSet({
                        where: {
                            id: t
                        }
                    }, "{ statsCompiledConvos { id } }");
                return await s.db.mutation.updateTestSet({
                    where: {
                        id: t
                    },
                    data: {
                        statsUpdatedAt: new Date,
                        statsConvoCount: o || 0,
                        statsPartialConvoCount: l || 0,
                        statsUtterancesCount: u || 0,
                        statsScriptingMemoryCount: p || 0,
                        statsCompiledConvos: {
                            create: e.concat(a),
                            deleteMany: {
                                id_in: h.statsCompiledConvos && h.statsCompiledConvos.map(e => e.id) || []
                            }
                        }
                    }
                }, n)
            } finally {
                i(c, e => {
                    e && qt(`Failed rimraf ${c}: ${e}`)
                })
            }
        }
    };
    const {
        updateTestSetStats: Ft
    } = Lt, Ut = F("botium-box-testset-scanner"), Jt = (e, t) => process.env.TESTSETDIR_PUBLIC ? g.resolve(process.env.TESTSETDIR_PUBLIC, t) : g.resolve(e, t), Gt = (e, t) => T.readdirSync(e).reduce((s, n) => {
        const a = g.join(e, n);
        return t(a) && s.push(n), s
    }, []), Vt = async (e, t, s) => {
        const n = g.join(t, s);
        Ut(`scanDirForTestSets scanning ${n} ...`);
        const a = (e => Gt(e, e => T.statSync(e).isDirectory()))(n),
            r = (e => Gt(e, e => T.statSync(e).isFile()))(n);
        if (a && a.length > 0) await a.forEach(async n => {
            const a = Jt(t, g.join(s, n));
            await (async (e, t) => {
                let s = await e.query.testSetFolders({
                    where: {
                        path: t
                    }
                }, "{ id name testSet { id name } }");
                return s && 0 !== s.length || (s = await e.query.testSetFolders({
                    where: {
                        path: t + g.sep
                    }
                }, "{ id name testSet { id name } }")), !!(s && s.length > 0) && (Ut(`Folder ${t} already in use - ${s[0].name} in Test Set ${s[0].testSet.name}`), !0)
            })(e, a) || await Vt(e, t, g.join(s, n))
        });
        else if (r && r.length > 0) {
            const a = {
                data: {
                    name: s.split(g.sep).join("/"),
                    description: `Imported from directory ${n}, ${r.length} files`,
                    expandConvos: !0,
                    expandUtterancesToConvos: !0,
                    expandScriptingMemory: !1,
                    tags: {
                        set: s.split(g.sep)
                    },
                    folders: {
                        create: [{
                            name: s,
                            path: Jt(t, s)
                        }]
                    }
                }
            };
            try {
                const t = await e.mutation.createTestSet(a, "{ id }");
                Ut(`scanDirForTestSets ${s} Imported Test Set ${t.id} with ${r.length} files`), await Ft(void 0, {
                    id: t.id
                }, {
                    db: e
                }), Ut(`scanDirForTestSets ${s} Updated Test Set Stats ${t.id}`)
            } catch (e) {
                Ut(`scanDirForTestSets ${s} Failed to create ${a.data}: ${e}`)
            }
        }
    };
    var Ht = e => {
        (async () => {
            Vt(e, process.env.TESTSETDIR, ".")
        })().catch(e => {
            Ut(`scanForTestSets failed: ${e}`)
        })
    };
    const zt = l.fork,
        Yt = F("botium-box-server-livechat"),
        Wt = F("botium-box-server-livechat-worker"),
        Xt = c.BotDriver,
        Kt = c.Capabilities,
        Qt = process.env.BOTIUMBOX_LIVECHAT_IDLE_TIMEOUT || 3e5,
        Zt = {},
        es = {},
        ts = (e, t, s) => {
            e.send({
                type: t,
                message: s
            })
        },
        ss = ({
            conversationId: e,
            queueSettings: t,
            pubsub: s
        }) => {
            es[e] && clearTimeout(es[e]), es[e] = setTimeout(async () => {
                const n = new u(t.redis);
                Yt(`Auto cleanup of conversation ${e} after ${Qt}ms idle time`), ns(e), await n.del(e), s.publish(e, {
                    liveChatConvoStepAdded: {
                        err: `Automatically closed chatbot connection after ${Qt}ms idle time`
                    }
                })
            }, Qt)
        },
        ns = async e => {
            es[e] && clearTimeout(es[e]), delete es[e];
            const t = Zt[e];
            t && ts(t, os.STOP_CONVERSATION)
        }, as = async ({
            conversationId: e
        }, {
            queueSettings: t
        }) => {
            const s = new u(t.redis),
                n = await s.get(e);
            return n && JSON.parse(n)
        }, rs = async (e, t, s) => {
            await s.set(e, JSON.stringify(t)), await s.expire(e, Qt / 1e3);
            const n = await s.ttl(e);
            Yt(`updateConversation(${e}) TTL(seconds): ${n}`)
        }, os = {
            USER_SAYS: "USER_SAYS",
            USER_SAYS_FAILED: "USER_SAYS_FAILED",
            STOP_CONVERSATION: "STOP_CONVERSATION",
            STOP_CONVERSATION_FINISHED: "STOP_CONVERSATION_FINISHED",
            MESSAGE_SENTTOBOT: "MESSAGE_SENTTOBOT",
            MESSAGE_RECEIVEDFROMBOT: "MESSAGE_RECEIVEDFROMBOT",
            LOG: "LOG"
        };
    var is = {
        startListeners: async ({
            db: e,
            pubsub: t,
            queueSettings: s
        }) => new Promise((e, t) => {
            const n = new u(s.redis);
            n.subscribe("livechat.send", "livechat.stop", (s, n) => {
                s ? t(new Error(`Redis subscribe failed: ${s}`)) : (Yt(`Livechat Redis connected to ${n} channels.`), e())
            }), n.on("message", async (e, t) => {
                const {
                    conversationId: s,
                    convoStep: n
                } = JSON.parse(t);
                if (!Zt[s]) return;
                const a = Zt[s];
                "livechat.send" === e ? (Yt(`liveChatSendToBot(${s}) sending convoStep ${J.inspect(n)}`), ts(a, os.USER_SAYS, n)) : "livechat.stop" === e && ns(s)
            })
        }),
        startBot: async ({
            caps: e,
            sources: t,
            envs: s
        }, {
            pubsub: n,
            queueSettings: a
        }) => {
            const r = new u(a.redis),
                o = d(),
                i = new p(async (e, t) => {
                    try {
                        const t = await as({
                                conversationId: o
                            }, {
                                queueSettings: a
                            }),
                            s = t.length,
                            i = JSON.stringify(Object.assign(e, {
                                convoStepIndex: s
                            }));
                        n.publish(o, {
                            liveChatConvoStepAdded: {
                                convoStep: i
                            }
                        }), t.push(i), rs(o, t, r), ss({
                            conversationId: o,
                            queueSettings: a,
                            pubsub: n
                        })
                    } catch (e) {
                        Yt(`listenerQueue err: ${e}`)
                    }
                    t()
                }),
                c = zt(g.resolve(__dirname, process.env.BOTIUMBOX_LIVECHAT_WORKER_FILE || "livechatWorker.js"), [JSON.stringify({
                    caps: e,
                    sources: t,
                    envs: s,
                    conversationId: o
                })], {
                    env: Object.assign({}, process.env, s),
                    execArgv: ["--inspect=0"]
                });
            return c.on("message", ({
                type: e,
                message: t
            }) => {
                switch (Yt(`Received IPC message ${e} from worker. conversationId: ${o}, message: ${J.inspect(t)}`), e) {
                    case os.USER_SAYS_FAILED:
                        Yt(`liveChatSendToBot UserSays failed: ${t}`), n.publish(o, {
                            liveChatConvoStepAdded: {
                                err: `Failed sending to chatbot: ${t}`
                            }
                        });
                        break;
                    case os.LOG:
                        Wt(t);
                        break;
                    case os.STOP_CONVERSATION_FINISHED:
                        delete c[t.conversationId];
                        break;
                    case os.MESSAGE_SENTTOBOT:
                    case os.MESSAGE_RECEIVEDFROMBOT:
                        i.push(t);
                        break;
                    default:
                        Yt(`Unknown message type: ${e}`)
                }
            }), Zt[o] = c, rs(o, [], r), ss({
                conversationId: o,
                queueSettings: a,
                pubsub: n
            }), o
        },
        sendToBot: async ({
            conversationId: e,
            convoStep: t
        }, {
            queueSettings: s
        }) => {
            new u(s.redis).publish("livechat.send", JSON.stringify({
                conversationId: e,
                convoStep: t
            }))
        },
        stopBot: async ({
            conversationId: e
        }, {
            queueSettings: t
        }) => {
            new u(t.redis).publish("livechat.stop", JSON.stringify({
                conversationId: e
            }))
        },
        getConversation: as,
        IPC_MESSAGE_TYPE: os,
        getConversationScripts: async ({
            caps: e,
            conversationId: t,
            testCaseName: s,
            types: n,
            splitToConvoAndUtterancesMe: a,
            splitToConvoAndUtterancesBot: r
        }, {
            queueSettings: o
        }) => {
            const i = await as({
                conversationId: t
            }, {
                queueSettings: o
            });
            if (!U.isArray(i)) throw new Error("Conversation not available (anymore).");
            const c = {
                    header: {
                        name: s
                    },
                    conversation: i.map(e => ((e, t) => (e.asserters || (e.asserters = []), t && !t.includes("text") && (e.messageText = ""), t && !t.includes("buttons") && (e.buttons = []), t && !t.includes("media") && (e.media = []), e.nlp && (t && !t.includes("intents") || !e.nlp.intent || e.asserters.push({
                        name: "INTENT",
                        args: [e.nlp.intent.name]
                    }), t && !t.includes("entities") || !e.nlp.entities || e.asserters.push({
                        name: "ENTITIES",
                        args: e.nlp.entities.map(e => e.name)
                    })), e))(JSON.parse(e), n))
                },
                d = new Xt(e).BuildCompiler(),
                l = [];
            if (a || r) {
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
                for (const s of c.conversation)
                    if (e.all++, s.messageText && s.messageText.length)
                        if (s.messageText.includes(d.caps[Kt.SCRIPTING_TXT_EOL])) e.multirow++;
                        else if ("me" === s.sender && a || "bot" === s.sender && r) {
                    const n = (t + s.sender + "_" + (e[s.sender] + 1)).toUpperCase(),
                        a = s.messageText;
                    s.messageText = n, l.push({
                        script: n + d.caps[Kt.SCRIPTING_TXT_EOL] + a,
                        name: n
                    }), e[s.sender]++, e.utterances.push(n)
                } else e.filteredOut++;
                else e.empty++;
                Yt(`Decompiled utterances: ${J.inspect(e)}`)
            }
            const u = d.Decompile([c], "SCRIPTING_FORMAT_TXT");
            return Yt(`Decompiled script: ${u}`), {
                script: u,
                utterances: l
            }
        }
    };
    const cs = F("botium-box-server-agents-performancetestsession"),
        ds = (e, t) => null === e ? t : Math.min(e, t),
        ls = (e, t) => null === e ? t : Math.max(e, t),
        us = new p(async (e, t) => {
            cs(`progressProcessorQueue  starting with ${e.length} entries`);
            const s = async e => {
                cs(`progressProcessorQueue  update entry: ${J.inspect(e.data)}`), await e.ctx.db.mutation.updatePerformanceTestSessionJob({
                    data: e.data,
                    where: {
                        id: e.performanceTestSessionJobId
                    }
                })
            };
            let n = 0;
            for (const t of e) t.data && "RUNNING" === t.data.status && (await s(t), n++);
            const a = e[0].ctx,
                r = U.uniq(e.filter(e => e.dataRaw).map(e => e.performanceTestSessionId));
            let o = null;
            const i = new Map;
            if (0 !== r.length) {
                cs("progressProcessorQueue aggregating");
                const t = e => {
                        if (!e.performanceTestSessionId) throw new Error("performanceTestSessionId is not set");
                        if (!e.performanceTestSessionJobId) throw new Error("performanceTestSessionJobId is not set");
                        if (!e.convo) throw new Error("convo is not set");
                        const t = {
                            performanceTestSessionId: e.performanceTestSessionId,
                            performanceTestSessionJobId: e.performanceTestSessionJobId,
                            convo: e.convo,
                            stepIndex: e.stepIndex ? e.stepIndex : 0
                        };
                        return JSON.stringify(t)
                    },
                    s = (e, t, s, n) => {
                        e < s && cs(`Bad state, ${s} (${s.getTime()}) should be after ${e} (${e.getTime()})!`);
                        const a = (e, t, s, n) => !(t < s || n < e);
                        let r = 0;
                        const o = [];
                        for (;;) {
                            let i = k(s).add(n, "ms").toDate();
                            if (o.length >= 1e3) return cs("getSteps terminating at 1000 steps"), o;
                            if (a(s, i, e, t)) o.push(r);
                            else if (o.length > 0) return o;
                            r++, s = i
                        }
                    },
                    n = async () => {
                        const e = await a.db.query.performanceTestSessions({
                                where: {
                                    id_in: r
                                }
                            }),
                            t = new Map;
                        for (const s of e) t.set(s.id, s);
                        return t
                    }, c = await n();
                cs(`progressProcessorQueue  affected sessions ${c.size}`);
                for (const n of e.filter(e => e.dataRaw)) {
                    if (!c.has(n.performanceTestSessionId)) throw new Error(`progressProcessorQueue PerformanceTestSession not found by ID ${n.performanceTestSessionId}`);
                    const {
                        dataDensity: e,
                        createdAt: a
                    } = c.get(n.performanceTestSessionId), r = (s, r, o) => {
                        const c = o ? "wait" : "exec",
                            d = o ? s.testBegin.getTime() - s.queueBegin.getTime() : s.runtime,
                            l = t({
                                performanceTestSessionId: n.performanceTestSessionId,
                                performanceTestSessionJobId: n.performanceTestSessionJobId,
                                convo: n.dataRaw.convo,
                                stepIndex: r
                            });
                        i.has(l) || i.set(l, {
                            temporary: {
                                performanceTestSessionJobId: n.performanceTestSessionJobId,
                                firstStepAt: a
                            },
                            stepIndex: r,
                            execCount: 0,
                            execDurationSum: 0,
                            execDurationMin: null,
                            execDurationMax: null,
                            waitCount: 0,
                            waitDurationSum: 0,
                            waitDurationMin: null,
                            waitDurationMax: null,
                            stepStartAt: k(a).add(e * r, "ms").toDate()
                        });
                        const u = i.get(l);
                        u[c + "Count"]++, u[c + "DurationSum"] += d, u[c + "DurationMin"] = ds(u[c + "DurationMin"], d), u[c + "DurationMax"] = ls(u[c + "DurationMax"], d)
                    }, o = s(n.dataRaw.queueBegin, n.dataRaw.testBegin, a, e);
                    for (const e of o) r(n.dataRaw, e, !0);
                    const d = s(n.dataRaw.testBegin, n.dataRaw.testEnd, a, e);
                    for (const e of d) r(n.dataRaw, e, !1)
                }
                cs(`progressProcessorQueue  aggregated to ${i.size} records`);
                const d = new p(async (e, t) => {
                    cs(`progressProcessorQueue  upserting ${e.length} records`);
                    let s = 0,
                        n = 0;
                    for (const [t, r] of e) {
                        const {
                            performanceTestSessionId: e,
                            performanceTestSessionJobId: o,
                            convo: i,
                            stepIndex: c
                        } = JSON.parse(t), d = await a.db.query.performanceTestSessionAggregatedResults({
                            where: {
                                AND: [{
                                    testSession: {
                                        id: e
                                    }
                                }, {
                                    job: {
                                        id: o
                                    }
                                }, {
                                    stepIndex: c
                                }, {
                                    convo: i
                                }]
                            }
                        });
                        if (d.length > 1) throw new Error(`Expected result: 0 or 1. Found: ${d.length} by ${t}`);
                        if (0 === d.length) {
                            n++;
                            const t = Object.assign([], r);
                            delete t.temporary, await a.db.mutation.createPerformanceTestSessionAggregatedResult({
                                data: {
                                    testSession: {
                                        connect: {
                                            id: e
                                        }
                                    },
                                    job: {
                                        connect: {
                                            id: o
                                        }
                                    },
                                    stepIndex: c,
                                    convo: i,
                                    ...t
                                }
                            })
                        } else {
                            s++;
                            const e = d[0],
                                t = r;
                            await a.db.mutation.updatePerformanceTestSessionAggregatedResult({
                                data: {
                                    execCount: t.execCount + e.execCount,
                                    execDurationMin: ds(t.execDurationMin, e.execDurationMin),
                                    execDurationMax: ls(t.execDurationMax, e.execDurationMax),
                                    execDurationSum: t.execDurationSum + e.execDurationSum,
                                    waitCount: t.waitCount + e.waitCount,
                                    waitDurationMin: ds(t.waitDurationMin, e.waitDurationMin),
                                    waitDurationMax: ls(t.waitDurationMax, e.waitDurationMax),
                                    waitDurationSum: t.waitDurationSum + e.waitDurationSum
                                },
                                where: {
                                    id: e.id
                                }
                            })
                        }
                    }
                    cs(`progressProcessorQueue  upserted ${e.length} records, inserts ${n} updates: ${s}`), t()
                }, {
                    batchSize: 100
                });
                for (const e of i.entries()) d.push(e);
                o = new Promise(e => {
                    d.on("drain", () => {
                        e()
                    })
                })
            } else cs("No progress data found in batch");
            o && await o;
            for (const t of e) t.data && "READY" === t.data.status && (await s(t), n++);
            cs(`progressProcessorQueue  batch processed. Full size: ${e.length} stat entries: ${e.length-n} aggregated: ${i.size}`), t()
        }, {
            batchSize: 1e3,
            batchDelay: 1e3
        });
    var ps = {
        startPerformanceTestSession: async (e, {
            performanceTestSessionId: t
        }) => {},
        performanceTestSessionAgentStart: async (e, {
            performanceTestSessionId: t,
            performanceTestSessionJobId: s,
            agentName: n
        }) => {
            us.push({
                ctx: e,
                performanceTestSessionId: t,
                performanceTestSessionJobId: s,
                data: {
                    agentName: n,
                    status: "RUNNING",
                    started: new Date(Date.now()).toISOString()
                }
            })
        },
        performanceTestSessionProgress: async (e, t) => {
            const s = Object.assign({}, t);
            s.queueBegin && (s.queueBegin = new Date(s.queueBegin)), s.testBegin && (s.testBegin = new Date(s.testBegin)), s.testEnd && (s.testEnd = new Date(s.testEnd)), us.push({
                ctx: e,
                performanceTestSessionId: t.performanceTestSessionId,
                performanceTestSessionJobId: t.performanceTestSessionJobId,
                dataRaw: s
            })
        },
        performanceTestSessionSetJobReadySuccess: async (e, {
            performanceTestSessionId: t,
            performanceTestSessionJobId: s
        }) => {
            us.push({
                ctx: e,
                performanceTestSessionId: t,
                performanceTestSessionJobId: s,
                data: {
                    status: "READY",
                    finished: new Date(Date.now()).toISOString()
                }
            })
        },
        performanceTestSessionSetJobReadyFailed: async (e, {
            performanceTestSessionId: t,
            performanceTestSessionJobId: s,
            err: n
        }) => {
            us.push({
                ctx: e,
                performanceTestSessionId: t,
                performanceTestSessionJobId: s,
                data: {
                    status: "FAILED",
                    finished: new Date(Date.now()).toISOString(),
                    err: n
                }
            })
        }
    };
    const hs = F("botium-box-server-charts-mutation");
    var Ss = {
        updateChartCacheForTestSession: (e, {
            testSessionId: t
        }, s, n) => s.db.query.testSession({
            where: {
                id: t
            }
        }, "{ id status results { success testSet { id } } jobs { status totalCount failedCount successCount } }").then(e => {
            if (!e) return;
            const n = {};
            return "READY" === e.status || "FAILED" === e.status ? (n.totalCount = e.jobs.filter(e => "READY" === e.status || "FAILED" === e.status).reduce((e, t) => e + (t.totalCount || 0), 0) || 0, n.failedCount = e.jobs.filter(e => "READY" === e.status || "FAILED" === e.status).reduce((e, t) => e + (t.failedCount || 0), 0) || 0, n.successCount = e.jobs.filter(e => "READY" === e.status || "FAILED" === e.status).reduce((e, t) => e + (t.successCount || 0), 0) || 0) : (n.totalCount = e.results.length, n.failedCount = e.results.filter(e => !e.success).length, n.successCount = e.results.filter(e => e.success).length), n.countByTestSetId = e.results.reduce((e, t) => {
                const s = t.testSet ? t.testSet.id : "NULL";
                return e[s] || (e[s] = {
                    totalCount: 0,
                    failedCount: 0,
                    successCount: 0
                }), e[s].totalCount++, t.success ? e[s].successCount++ : e[s].failedCount++, e
            }, {}), n.countByDeviceSetId = e.results.reduce((e, t) => {
                const s = t.deviceSet ? t.deviceSet.id : "NULL";
                return e[s] || (e[s] = {
                    totalCount: 0,
                    failedCount: 0,
                    successCount: 0
                }), e[s].totalCount++, t.success ? e[s].successCount++ : e[s].failedCount++, e
            }, {}), hs(`updateChartCacheForTestSession ${t} chartData updated: ${J.inspect(n)}`), s.db.mutation.updateTestSession({
                where: {
                    id: e.id
                },
                data: {
                    chartData: JSON.stringify(n)
                }
            }).then(() => n)
        }).then(e => (s.chartsCache.flush(), e))
    };
    const ms = F("botium-box-server-mutation-testsession"),
        fs = ie.createContext;
    var Ts = {
        createTestSession: async (e, {
            testSession: t
        }, s, n) => s.db.mutation.createTestSession({
            data: t
        }, n).then(async e => (e.securityCheck && await fs({
            testSessionId: e.id,
            ctx: s
        }), e)).then(e => new Promise((n, a) => {
            s.queueConnector.create("box.createprocessingjobs", {
                title: `Job Creation Job for Test Session ${t.name}`,
                testSessionId: e.id
            }).removeOnComplete(!0).save(t => {
                if (t) return a(t);
                n(e)
            })
        })),
        deleteTestSession: async (e, {
            id: t
        }, s) => new Promise((e, n) => {
            s.db.mutation.deleteManyTestSessionJobLogs({
                where: {
                    testSessionJob: {
                        testSession: {
                            id: t
                        }
                    }
                }
            }).then(() => s.db.mutation.deleteManyTestSessionJobs({
                where: {
                    testSession: {
                        id: t
                    }
                }
            })).then(() => s.db.mutation.deleteManyTestSessionTestCaseResultAttachments({
                where: {
                    testSessionTestCaseResult: {
                        testSession: {
                            id: t
                        }
                    }
                }
            })).then(() => s.db.mutation.deleteManyTestSessionTestCaseResults({
                where: {
                    testSession: {
                        id: t
                    }
                }
            })).then(() => s.db.mutation.deleteTestSession({
                where: {
                    id: t
                }
            }, "{id}")).then(() => e(!0)).catch(e => (ms(`Error deleting test session ${t}: ${e}`), n(e)))
        }),
        async cancelTestSession(e, {
            id: t
        }, s) {
            const n = await s.db.query.testSession({
                where: {
                    id: t
                }
            }, "{ id name jobs { id status jobId } }");
            if (!n) return !1;
            n.jobs.filter(e => e.jobId).forEach(async e => {
                S.Job.remove(e.jobId, t => {
                    ms(t ? `cancelTestSession - Failed to remove job ${e.jobId}: ${t}` : `cancelTestSession - removed job ${e.jobId}`)
                }), "PENDING" === e.status ? (ms(`cancelTestSession - status of job (${e.jobId}) is PENDING, setting to FAILED`), await s.db.mutation.updateTestSessionJob({
                    data: {
                        status: "FAILED",
                        finished: new Date(Date.now()).toISOString(),
                        progressPercent: 100,
                        totalCount: 0,
                        failedCount: 0,
                        successCount: 0,
                        err: "Job cancelled"
                    },
                    where: {
                        id: e.id
                    }
                })) : ms(`cancelTestSession - status of job (${e.jobId}) is ${e.status}, keeping`)
            });
            const a = await s.db.query.agents({
                where: {}
            }, "{ id name }");
            for (const e of a) ms(`cancelTestSession - sending cancel test session event ${n.id}/${n.name} to agent ${e.id}/${e.name}`), await s.queueConnector.create(`process.cancel.${e.name}`, {
                title: `Cancel Test Session Job for Test Session ${n.id}/${n.name}, Agent ${e.name}`,
                testSessionId: n.id,
                testSessionName: n.name
            }).removeOnComplete(!0).save(e => {
                if (e) throw e
            });
            return !0
        },
        async stopTestSession(e, {
            id: t
        }, s) {
            const n = await s.db.query.testSession({
                where: {
                    id: t
                }
            }, "{ id name jobs { id status jobId } }");
            if (!n) return !1;
            await s.db.mutation.updateTestSession({
                where: {
                    id: n.id
                },
                data: {
                    status: "FAILED"
                }
            });
            for (const e of n.jobs) e.jobId && S.Job.remove(e.jobId, t => {
                ms(t ? `stopTestSession - Failed to remove job ${e.jobId}: ${t}` : `stopTestSession - removed job ${e.jobId}`)
            }), "PENDING" === e.status ? (ms(`cancelTestSession - status of job (${e.jobId}) is PENDING, setting to READY`), await s.db.mutation.updateTestSessionJob({
                data: {
                    status: "READY",
                    finished: new Date(Date.now()).toISOString(),
                    progressPercent: 100,
                    totalCount: 0,
                    failedCount: 0,
                    successCount: 0,
                    err: "Job cancelled"
                },
                where: {
                    id: e.id
                }
            })) : ms(`cancelTestSession - status of job (${e.jobId}) is ${e.status}, keeping`);
            const a = await s.db.query.agents({
                where: {}
            }, "{ id name }");
            for (const e of a) ms(`stopTestSession - sending stop test session event ${n.id}/${n.name} to agent ${e.id}/${e.name}`), await s.queueConnector.create(`process.stop.${e.name}`, {
                title: `Stop Test Session Job for Test Session ${n.id}/${n.name}, Agent ${e.name}`,
                testSessionId: n.id,
                testSessionName: n.name
            }).removeOnComplete(!0).save(e => {
                if (e) throw e
            });
            return !0
        }
    };
    const {
        URL: gs
    } = h, bs = F("botium-box-server-agents-testsession"), {
        updateChartCacheForTestSession: ys
    } = Ss, {
        stopTestSession: Es
    } = Ts;
    const ws = new p(async (e, t) => {
            const s = U.uniq(e.map(e => e.testSessionId));
            bs(`sendProgressProcessingQueue for testSessionIds: ${s}`), s.forEach(async t => {
                try {
                    await ys(null, {
                        testSessionId: t
                    }, e[0].ctx)
                } catch (e) {
                    bs(`updateChartCacheForTestSession failed: ${e}`)
                }
                e[0].ctx.pubsub.publish("TEST_SESSION_PROGRESS", {
                    testSessionProgress: {
                        id: t
                    }
                })
            }), t()
        }, {
            batchSize: 1e3,
            batchDelay: 3e3
        }),
        Cs = (e, t) => {
            ws.push({
                testSessionId: t,
                ctx: e
            })
        };
    var vs = {
        startTestSession: async (e, {
            testSessionId: t
        }) => {
            try {
                const s = await ce.findFullTestSession(e.db, t);
                if (!s) throw new Error(`Test Session ${t} not configured`);
                const n = s.agent ? "process.run." + s.agent.name : "process.run";
                bs(`startTestSession ${s.id} queueToSend: ${n}`);
                const {
                    testSessionCaps: a,
                    testSessionSources: r,
                    testSessionEnvs: o,
                    testSessionTestSets: i,
                    zapAvailable: c
                } = await ce.extractTestSessionLike(e, s);
                if (!c) throw new Error("Zaproxy is not reachable");
                let d = 1;
                const l = async (t, a, i) => {
                    for (let i = 1; i <= d; i++) {
                        const c = await e.db.mutation.createTestSessionJob({
                                data: {
                                    status: "PENDING",
                                    progressPercent: 0,
                                    testSession: {
                                        connect: {
                                            id: s.id
                                        }
                                    }
                                }
                            }, "{ id }"),
                            l = e.queueConnector.create(n, {
                                title: `Processing Job #${i}/${d} for Test Session ${s.name}`,
                                testSessionId: s.id,
                                testSessionName: s.name,
                                testSessionJobId: c.id,
                                botium: {
                                    Capabilities: t,
                                    Sources: r,
                                    Envs: o
                                },
                                testSets: a,
                                batchNum: i,
                                batchCount: d,
                                bail: s.bail
                            }).removeOnComplete(!0).save(async t => {
                                if (t) return bs(`Saving batchJob failed: ${t}`);
                                const n = l.id;
                                try {
                                    await e.db.mutation.updateTestSessionJob({
                                        data: {
                                            jobId: n
                                        },
                                        where: {
                                            id: c.id
                                        }
                                    }), bs(`TestSessionJob for TestSession ${s.name} registered (jobId: ${n} id: ${c.id})`)
                                } catch (t) {
                                    bs(`TestSessionJob for TestSession ${s.name} registration failed (jobId: ${n}): ${t}`)
                                }
                                try {
                                    await e.db.mutation.createTestSessionJobLog({
                                        data: {
                                            log: "Job queued for execution",
                                            testSessionJob: {
                                                connect: {
                                                    id: c.id
                                                }
                                            }
                                        }
                                    }, "{ id }")
                                } catch (t) {
                                    bs(`TestSessionJob for TestSession ${s.name} logging failed (jobId: ${n}): ${t}`)
                                }
                            })
                    }
                };
                if (s.deviceSets && s.deviceSets.length > 0) {
                    const e = s.deviceSets.reduce((e, t) => [...e, ...t.devices.map(e => {
                        const n = t.provider.url && new gs(t.provider.url),
                            r = n ? {
                                protocol: n && n.protocol.replace(":", ""),
                                host: n && n.hostname,
                                port: n && n.port,
                                path: n && n.pathname
                            } : {};
                        return "SAUCELABS" === t.provider.type ? {
                            deviceSetId: t.id,
                            deviceName: e.name,
                            deviceOptions: Object.assign({
                                desiredCapabilities: Object.assign({}, JSON.parse(e.capabilities), {
                                    name: s.name,
                                    username: t.provider.username,
                                    accessKey: t.provider.password
                                })
                            }, r)
                        } : "TESTOBJECTS" === t.provider.type ? {
                            deviceSetId: t.id,
                            deviceName: e.name,
                            deviceOptions: Object.assign({
                                desiredCapabilities: Object.assign({}, JSON.parse(e.capabilities), {
                                    testobject_suite_name: s.name,
                                    testobject_api_key: t.provider.password
                                })
                            }, r)
                        } : "EXPERITEST" === t.provider.type ? {
                            deviceSetId: t.id,
                            deviceName: e.name,
                            deviceOptions: Object.assign({
                                desiredCapabilities: Object.assign({}, JSON.parse(e.capabilities), {
                                    testName: s.name,
                                    accessKey: t.provider.password
                                })
                            }, r)
                        } : "LOCALSELENIUM" === t.provider.type ? {
                            deviceSetId: t.id,
                            deviceName: e.name,
                            deviceOptions: Object.assign({
                                desiredCapabilities: Object.assign({}, JSON.parse(e.capabilities), {
                                    name: s.name
                                })
                            }, r)
                        } : ("INTEGRATED" === t.provider.type && (bs(`startTestSession ${s.id} adding capability for starting integrated PhantomJS`), a.WEBDRIVERIO_START_PHANTOMJS = !0), {
                            deviceSetId: t.id,
                            deviceName: e.name,
                            deviceOptions: Object.assign({
                                desiredCapabilities: Object.assign({}, JSON.parse(e.capabilities), {
                                    name: s.name
                                })
                            }, r)
                        })
                    })], []);
                    bs(`startTestSession ${s.id} testSessionDevices: ${JSON.stringify(e,null,2)}`);
                    let t = Promise.resolve();
                    e.forEach(e => {
                        const s = t => t && t.forEach(t => {
                                t.sourceTag = Object.assign({}, t.sourceTag, {
                                    deviceSetId: e.deviceSetId,
                                    deviceName: e.deviceName
                                })
                            }),
                            n = U.cloneDeep(i);
                        n.forEach(e => {
                            s(e.convos), s(e.utterances), s(e.repositories), s(e.folders), s(e.excels)
                        });
                        const r = Object.assign({}, a, {
                            WEBDRIVERIO_OPTIONS: e.deviceOptions
                        });
                        t = t.then(() => l(r, n, c))
                    }), await t
                } else await l(a, i, c)
            } catch (s) {
                bs(`startTestSession failed: ${s}`), await e.db.mutation.updateTestSession({
                    where: {
                        id: t
                    },
                    data: {
                        status: "FAILED",
                        jobs: {
                            create: [{
                                progressPercent: 100,
                                status: "FAILED",
                                started: new Date(Date.now()).toISOString(),
                                finished: new Date(Date.now()).toISOString(),
                                err: `${s}`
                            }]
                        }
                    }
                })
            }
        },
        testSessionLog: async (e, {
            testSessionJobId: t,
            log: s
        }) => {
            try {
                await e.db.mutation.createTestSessionJobLog({
                    data: {
                        log: s,
                        testSessionJob: {
                            connect: {
                                id: t
                            }
                        }
                    }
                }, "{ id }")
            } catch (e) {
                throw bs(`testSessionJobCompleted failed: ${e}`), e
            }
        },
        testSessionProgress: async (e, {
            testSessionId: t,
            testSessionJobId: s,
            batchNum: n,
            progress: a,
            ...r
        }) => {
            try {
                const {
                    count: a
                } = await e.db.mutation.updateManyTestSessions({
                    data: {
                        status: "RUNNING"
                    },
                    where: {
                        id: t,
                        status: "PENDING"
                    }
                });
                a > 0 && bs(`Test Session Job ${s}/#${n} set Test Session ${t} RUNNING.`)
            } catch (e) {
                throw bs(`Test Session Job ${s}/#${n} set Test Session ${t} RUNNING failed: ${e}`), e
            }
            try {
                const {
                    count: r
                } = await e.db.mutation.updateManyTestSessionJobs({
                    data: {
                        status: "RUNNING",
                        started: new Date(Date.now()).toISOString(),
                        progressPercent: U.isNumber(a) && a
                    },
                    where: {
                        id: s,
                        status: "PENDING"
                    }
                });
                r > 0 && bs(`Test Session Job ${s}/#${n} set Test Session ${t} Job RUNNING.`)
            } catch (e) {
                throw bs(`Test Session Job ${s}/#${n} set Test Session ${t} Job RUNNING failed: ${e}`), e
            }
            if (U.isNumber(a)) try {
                const {
                    count: t
                } = await e.db.mutation.updateManyTestSessionJobs({
                    data: {
                        progressPercent: a
                    },
                    where: {
                        id: s,
                        progressPercent_lt: a
                    }
                });
                t > 0 && bs(`Test Session Job ${s}/#${n} set Test Session Job progressPercent ${a}.`)
            } catch (e) {
                throw bs(`Test Session Job ${s}/#${n} set Test Session Job progressPercent ${a} failed: ${e}`), e
            }
            if (r.testcase) {
                const a = {
                    testcaseName: r.testcase,
                    testcaseSource: r.source,
                    success: r.success,
                    err: r.err && (U.isString(r.err) ? r.err : JSON.stringify(r.err)),
                    testSession: {
                        connect: {
                            id: t
                        }
                    }
                };
                r.transcript && (r.transcript.convoBegin && r.transcript.convoEnd && (a.duration = k(r.transcript.convoEnd).diff(r.transcript.convoBegin)), r.transcript.steps && (a.steps = {
                    create: r.transcript.steps.map((e, t) => ({
                        step: t,
                        sender: e.expected && e.expected.sender,
                        expected: e.expected && (U.isString(e.expected) ? e.expected : JSON.stringify(e.expected)),
                        not: !!e.not,
                        actual: e.actual && (U.isString(e.actual) ? e.actual : JSON.stringify(e.actual)),
                        stepDuration: e.stepBegin && e.stepEnd && k(e.stepEnd).diff(e.stepBegin),
                        botDuration: e.botBegin && e.botEnd && k(e.botEnd).diff(e.botBegin),
                        err: e.err && (U.isString(e.err) ? e.err : JSON.stringify(e.err))
                    }))
                })), r.sourceTag && (r.sourceTag.filename && (a.testSetFilename = r.sourceTag.filename), r.sourceTag.testSetId && (a.testSet = {
                    connect: {
                        id: r.sourceTag.testSetId
                    }
                }), r.sourceTag.testSetScriptId && (a.testSetScript = {
                    connect: {
                        id: r.sourceTag.testSetScriptId
                    }
                }), r.sourceTag.testSetRepositoryId && (a.testSetRepository = {
                    connect: {
                        id: r.sourceTag.testSetRepositoryId
                    }
                }), r.sourceTag.testSetFolderId && (a.testSetFolder = {
                    connect: {
                        id: r.sourceTag.testSetFolderId
                    }
                }), r.sourceTag.testSetExcelId && (a.testSetExcel = {
                    connect: {
                        id: r.sourceTag.testSetExcelId
                    }
                }), r.sourceTag.deviceSetId && (a.deviceSet = {
                    connect: {
                        id: r.sourceTag.deviceSetId
                    }
                }), r.sourceTag.deviceName && (a.deviceName = r.sourceTag.deviceName)), r.attachments && (a.attachments = {
                    create: r.attachments.map(e => ({
                        name: e.name,
                        mimeType: e.mimeType,
                        base64: e.base64
                    }))
                });
                try {
                    const o = await e.db.mutation.createTestSessionTestCaseResult({
                        data: a
                    }, "{ id }");
                    bs(`TestResult for TestCase "${r.testcase}" in TestSession "${t}" registered (jobId: ${s}/#${n} id: ${o.id})`)
                } catch (e) {
                    throw bs(`TestResult for TestCase "${r.testcase}" in TestSession "${t}" registration failed (jobId: ${s}/#${n}): ${e}`), e
                }
            }
            if (r.stopTestSession) try {
                await Es(null, {
                    id: t
                }, e), bs(`Test Session "${t}" stopped (jobId: ${s}/#${n}.`)
            } catch (e) {
                throw bs(`Test Session "${t}" stopping failed (jobId: ${s}/#${n}: ${e}`), e
            }
            bs(`testSessionProgress - Testsession "${t}", Job ${s}/#${n}, progress ${a}, ready.`), Cs(e, t)
        },
        testSessionSetJobCompletedResult: async (e, {
            testSessionId: t,
            testSessionJobId: s,
            result: n
        }) => {
            try {
                bs(`Test Session Job ${s}/${t} completed: ${JSON.stringify(n)}`), await e.db.mutation.updateTestSessionJob({
                    data: {
                        status: "READY",
                        finished: new Date(Date.now()).toISOString(),
                        progressPercent: 100,
                        totalCount: n && n.totalCount,
                        failedCount: n && n.failedCount,
                        successCount: n && n.successCount
                    },
                    where: {
                        id: s
                    }
                }, "{ id }"), await e.db.mutation.createTestSessionJobLog({
                    data: {
                        log: "Job completed",
                        testSessionJob: {
                            connect: {
                                id: s
                            }
                        }
                    }
                }, "{ id }"), Cs(e, t)
            } catch (e) {
                throw bs(`testSessionJobCompleted failed: ${e}`), e
            }
        },
        testSessionSetJobFailedErr: async (e, {
            testSessionId: t,
            testSessionJobId: s,
            result: n,
            err: a
        }) => {
            try {
                bs(`Test Session Job ${s}/${t} failed: ${a}.`), await e.db.mutation.updateTestSessionJob({
                    data: {
                        status: "FAILED",
                        finished: new Date(Date.now()).toISOString(),
                        progressPercent: 100,
                        totalCount: n && n.totalCount,
                        failedCount: n && n.failedCount,
                        successCount: n && n.successCount,
                        err: a && (U.isString(a) ? a : JSON.stringify(a))
                    },
                    where: {
                        id: s
                    }
                }, "{ id }"), await e.db.mutation.createTestSessionJobLog({
                    data: {
                        log: `Job failed: ${a}`,
                        testSessionJob: {
                            connect: {
                                id: s
                            }
                        }
                    }
                }, "{ id }"), Cs(e, t)
            } catch (a) {
                throw bs(`testSessionJobFailed failed: ${a}`), a
            }
        },
        testSessionCheckFinished: async (e, {
            testSessionId: t,
            testSessionJobId: s
        }) => {
            try {
                const n = await e.db.query.testSession({
                    where: {
                        id: t
                    }
                }, "{ id name status jobs { status finished failedCount } }");
                if (!n) return;
                if (n.jobs && n.jobs.find(e => "READY" !== e.status && "FAILED" !== e.status)) return void bs(`Test Session testSessionCheckFinished ${t}/${s} waiting for other jobs to finish.`);
                let a = n.jobs && !!n.jobs.find(e => "FAILED" === e.status);
                const r = n.jobs && !!n.jobs.find(e => e.failedCount > 0),
                    {
                        securityAlerts: o,
                        url: i,
                        zapAvailable: c
                    } = await async function(t) {
                        try {
                            const s = await e.db.query.testSessions({
                                where: {
                                    id: t,
                                    securityCheck: !0
                                }
                            }, "{ chatbot { capabilities { name stringValue intValue booleanValue jsonValue } } }").then(async e => {
                                if (e && e.length) {
                                    const [t] = e;
                                    return t.chatbot.capabilities.filter(e => "SIMPLEREST_URL" === e.name).map(e => e.stringValue)[0]
                                }
                                if (0 === e.length) return bs("Security check is disabled"), null;
                                throw new Error("Can't get security info from prisma")
                            }).catch(e => {
                                const t = new Error(`Can't fetch security results ${J.inspect(e)}`);
                                throw bs(t), t
                            });
                            return s ? {
                                securityAlerts: await ie.getAlertsByUrl(s).then(e => e.alerts).then(e => e.map(e => {
                                    const t = e.reference.split("\n");
                                    return {
                                        evidence: e.evidence,
                                        method: e.method,
                                        confidence: e.confidence,
                                        risk: e.risk,
                                        alert: e.alert,
                                        solution: e.solution,
                                        references: {
                                            set: t
                                        }
                                    }
                                })).catch(e => {
                                    bs(new Error(`Can't get information from zap ${J.inspect(e)}`))
                                }),
                                url: s,
                                zapAvailable: !0
                            } : {
                                securityAlerts: [],
                                url: "",
                                zapAvailable: !0
                            }
                        } catch (e) {
                            return {
                                securityAlerts: [],
                                url: "",
                                zapAvailable: !1
                            }
                        }
                    }(t);
                c || (a = !0), i && bs(`Security alerts for ${i}`), a || r ? (bs(`testSessionCheckFinished test session ${t}/${n.name} failed (job failed: ${a}, result failed: ${r})`), await e.db.mutation.updateTestSession({
                    where: {
                        id: t
                    },
                    data: {
                        status: "FAILED",
                        securityAlerts: {
                            create: o
                        }
                    }
                })) : (bs(`testSessionCheckFinished test session ${t}/${n.name} success`), await e.db.mutation.updateTestSession({
                    where: {
                        id: t
                    },
                    data: {
                        status: "READY",
                        securityAlerts: {
                            create: o
                        }
                    }
                }).then(e => e)), await ie.deleteAllAlerts(), Cs(e, t)
            } catch (e) {
                throw bs(`testSessionCheckFinished ${t} failed: ${e}`), e
            }
        }
    };
    const Is = F("botium-box-server-agents-heartbeat");
    const Os = F("botium-box-server-agents-registeragent");
    const Rs = F("botium-box-server-agents"),
        {
            startPerformanceTestSession: Ns,
            performanceTestSessionAgentStart: xs,
            performanceTestSessionProgress: As,
            performanceTestSessionSetJobReadyFailed: Ps,
            performanceTestSessionSetJobReadySuccess: _s
        } = ps,
        {
            startTestSession: $s,
            testSessionSetJobCompletedResult: Ds,
            testSessionSetJobFailedErr: Ms,
            testSessionLog: ks,
            testSessionProgress: js,
            testSessionCheckFinished: Bs
        } = vs;
    const qs = F("botium-box-server-testcasecleanup"),
        Ls = async (e, t, s, n) => {
            const a = await e.db.query.testSessionTestCaseResults({
                where: {
                    createdAt_lte: t,
                    success: n,
                    attachments_some: {
                        base64_not: ""
                    }
                }
            }, "{ id attachments { id } }");
            a.length > 0 ? (qs(`Found ${a.length} screenshots to cleanup for ${s} (older than ${t}`), await e.db.mutation.deleteManyTestSessionTestCaseResultAttachments({
                where: {
                    id_in: a.reduce((e, t) => e.concat(t.attachments.map(e => e.id)), [])
                }
            })) : qs(`Found no screenshots to cleanup for ${s} (older than ${t}`)
        }, Fs = async (e, t, s, n) => {
            const a = await e.db.query.testSessionTestCaseResults({
                where: {
                    createdAt_lte: t,
                    success: n,
                    steps_some: {
                        expected_not: ""
                    }
                }
            }, "{ id steps { id } }");
            a.length > 0 ? (qs(`Found ${a.length} transcripts to cleanup for ${s} (older than ${t}`), await e.db.mutation.deleteManyTestSessionTestCaseResultTranscripts({
                where: {
                    id_in: a.reduce((e, t) => e.concat(t.steps.map(e => e.id)), [])
                }
            })) : qs(`Found no transcripts to cleanup for ${s} (older than ${t}`)
        }, Us = async (e, t, s, n) => {
            const a = await e.db.query.testSessionTestCaseResults({
                where: {
                    createdAt_lte: t,
                    success: n,
                    testcaseSource_not: ""
                }
            }, "{ id }");
            a.length > 0 ? (qs(`Found ${a.length} results to cleanup for ${s} (older than ${t}`), await e.db.mutation.updateManyTestSessionTestCaseResults({
                data: {
                    testcaseSource: ""
                },
                where: {
                    id_in: a.map(e => e.id)
                }
            })) : qs(`Found no results to cleanup for ${s} (older than ${t}`)
        }, Js = async (e, t) => {
            const s = await e.db.query.systemSettingses();
            if (isNaN(t) && (!s || !s[0].cleanupJobIntervalMinutes)) return void qs("cleanupJobIntervalMinutes not configured, not scheduling cleanup task.");
            const n = isNaN(t) ? 60 * s[0].cleanupJobIntervalMinutes * 1e3 : t;
            let a = [];
            try {
                a = await J.promisify(S.Job.rangeByType)("box.testcasecleanup", "delayed", 0, 10, "")
            } catch (e) {
                qs(`error checking job states: ${e}`)
            }
            if (a && a.length)
                for (const e of a) try {
                    await J.promisify(e.remove).bind(e)(), qs(`Removed duplicate Scheduled Test Case Cleanup Job ${e.id}.`)
                } catch (t) {
                    return qs(`Removing Scheduled Test Case Cleanup Job ${e.id} failed: ${t}`), void qs("Skipping cleanup job removal.")
                }
            return new Promise(t => {
                const s = e.queueConnector.create("box.testcasecleanup", {
                    title: "Scheduled Test Case Cleanup Job"
                }).removeOnComplete(!0).delay(n).save(e => {
                    if (e) qs(`Scheduling Test Case Cleanup Job failed: ${e}`);
                    else {
                        const e = s.id;
                        qs(`Scheduled Test Case Cleanup Job ${e}, next run delay: ${n}`)
                    }
                    return t()
                })
            })
        };
    var Gs = async e => {
        e.queueConnector.process("box.testcasecleanup", async (t, s) => {
            try {
                await (async e => {
                    qs("runCleanup started ...");
                    const t = await e.db.query.systemSettingses();
                    if (t && !isNaN(t[0].keepTestCaseSuccessScreenshotsDays)) {
                        const s = k().subtract(t[0].keepTestCaseSuccessScreenshotsDays, "days").startOf("day").toDate();
                        try {
                            await Ls(e, s, "keepTestCaseSuccessScreenshotsDays", !0)
                        } catch (e) {
                            qs(`runCleanupScreenshots keepTestCaseSuccessScreenshotsDays failed: ${e}`)
                        }
                    }
                    if (t && !isNaN(t[0].keepTestCaseFailedScreenshotsDays)) {
                        const s = k().subtract(t[0].keepTestCaseFailedScreenshotsDays, "days").startOf("day").toDate();
                        try {
                            await Ls(e, s, "keepTestCaseFailedScreenshotsDays", !1)
                        } catch (e) {
                            qs(`runCleanupScreenshots keepTestCaseFailedScreenshotsDays failed: ${e}`)
                        }
                    }
                    if (t && !isNaN(t[0].keepTestCaseSuccessConversationDays)) {
                        const s = k().subtract(t[0].keepTestCaseSuccessConversationDays, "days").startOf("day").toDate();
                        try {
                            await Fs(e, s, "keepTestCaseSuccessConversationDays", !0)
                        } catch (e) {
                            qs(`runCleanupTranscripts keepTestCaseSuccessConversationDays failed: ${e}`)
                        }
                        try {
                            await Us(e, s, "keepTestCaseSuccessConversationDays", !0)
                        } catch (e) {
                            qs(`runCleanupDetails keepTestCaseSuccessConversationDays failed: ${e}`)
                        }
                    }
                    if (t && !isNaN(t[0].keepTestCaseFailedConversationDays)) {
                        const s = k().subtract(t[0].keepTestCaseFailedConversationDays, "days").startOf("day").toDate();
                        try {
                            await Fs(e, s, "keepTestCaseFailedConversationDays", !1)
                        } catch (e) {
                            qs(`runCleanupTranscripts keepTestCaseFailedConversationDays failed: ${e}`)
                        }
                        try {
                            await Us(e, s, "keepTestCaseFailedConversationDays", !1)
                        } catch (e) {
                            qs(`runCleanupDetails keepTestCaseFailedConversationDays failed: ${e}`)
                        }
                    }
                })(e), qs("Test Case Cleanup ready."), s(), await Js(e)
            } catch (t) {
                qs(`Test Case Cleanup failed: ${t}`), s(), await Js(e)
            }
        }), await Js(e, 0)
    };
    const Vs = e => ({
            id: e
        }),
        Hs = e => e && e.id;
    var zs = {
        jwtSettings: () => ({
            secret: process.env.JWT_SECRET,
            audience: process.env.JWT_AUDIENCE || "botiumbox",
            issuer: process.env.JWT_ISSUER || "botiumbox"
        }),
        userIdToToken: Vs,
        tokenToUserId: Hs,
        generateToken: e => R.sign(Vs(e.id), process.env.JWT_SECRET, {
            expiresIn: 86400 * (process.env.JWT_EXPIRY_DAYS || 30),
            audience: process.env.JWT_AUDIENCE || "botiumbox",
            issuer: process.env.JWT_ISSUER || "botiumbox",
            subject: e.id.toString()
        }),
        validateToken: async (e, t) => {
            const s = R.verify(e, process.env.JWT_SECRET, {
                audience: process.env.JWT_AUDIENCE || "botiumbox",
                issuer: process.env.JWT_ISSUER || "botiumbox"
            });
            return await t.query.user({
                where: {
                    id: Hs(s)
                }
            }, "{ id name email roles { id name permissions } clients { id name } }")
        }
    };
    const {
        generateToken: Ys
    } = zs;
    var Ws = {
            me: async (e, t, s, n) => s.request && s.request.user,
            async autologin(e, t, s, n) {
                if (s.request && s.request.user) return {
                    user: s.request.user,
                    token: Ys(s.request.user)
                }
            }
        },
        Xs = {
            agents: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.agents({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o)),
            agent: (e, {
                id: t
            }, s, n) => s.db.query.agent({
                where: {
                    id: t
                }
            }, n)
        };
    const Ks = F("botium-box-server-resolvers-chatbots");
    var Qs = {
        chatbots: (e, {
            where: t,
            orderBy: s,
            skip: n,
            first: a
        }, r, o) => (s = s || "name_ASC", r.db.query.chatbots({
            where: t,
            orderBy: s,
            skip: n,
            first: a
        }, o)),
        chatbot: (e, {
            id: t
        }, s, n) => s.db.query.chatbot({
            where: {
                id: t
            }
        }, n),
        availablewatsonworkspaces: (e, {
            url: t,
            version: s,
            apikey: n,
            username: a,
            password: r
        }) => new Promise((e, o) => {
            const i = {
                url: t,
                version: s
            };
            n ? Object.assign(i, {
                iam_apikey: n
            }) : Object.assign(i, {
                username: a,
                password: r
            }), Ks(`listWorkspaces for watson assistant: ${JSON.stringify(i)}`), new m(i).listWorkspaces((t, s) => {
                if (t) o(t);
                else {
                    const t = s.workspaces.map(e => ({
                        name: e.name,
                        description: e.description,
                        value: e.workspace_id
                    }));
                    e(t)
                }
            })
        })
    };
    const Zs = (e, t) => {
        if (!e) return !1;
        if (!e.roles && !e.permissions) return !1;
        if ("admin" !== e.name && process && process.env && process.env.BOTIUMBOX_DISABLE_PERMISSIONS && process.env.BOTIUMBOX_DISABLE_PERMISSIONS.indexOf(t) >= 0) return !1;
        const s = [];
        if (e.roles)
            for (const t of e.roles) t.permissions && t.permissions.forEach(e => s.push(e));
        e.permissions && e.permissions.forEach(e => s.push(e));
        for (const e of s) {
            if ("*" === e) return !0;
            if (e.endsWith("*")) {
                if (t.startsWith(e.substr(0, e.length - 1))) return !0
            } else if (e.startsWith("*")) {
                if (t.endsWith(e.substr(1))) return !0
            } else if (e === t) return !0
        }
        return !1
    };
    var en = {
        permissionTypes: {
            AGENTS_SELECT: "AGENTS_SELECT",
            AGENTS_CREATE: "AGENTS_CREATE",
            AGENTS_UPDATE: "AGENTS_UPDATE",
            AGENTS_DELETE: "AGENTS_DELETE",
            CHATBOTS_SELECT: "CHATBOTS_SELECT",
            CHATBOTS_CREATE: "CHATBOTS_CREATE",
            CHATBOTS_UPDATE: "CHATBOTS_UPDATE",
            CHATBOTS_DELETE: "CHATBOTS_DELETE",
            CHATBOTS_LIVECHAT: "CHATBOTS_LIVECHAT",
            DEVICESETS_SELECT: "DEVICESETS_SELECT",
            DEVICESETS_CREATE: "DEVICESETS_CREATE",
            DEVICESETS_UPDATE: "DEVICESETS_UPDATE",
            DEVICESETS_DELETE: "DEVICESETS_DELETE",
            TESTPROJECTS_SELECT: "TESTPROJECTS_SELECT",
            TESTPROJECTS_CREATE: "TESTPROJECTS_CREATE",
            TESTPROJECTS_UPDATE: "TESTPROJECTS_UPDATE",
            TESTPROJECTS_DELETE: "TESTPROJECTS_DELETE",
            TESTSETS_SELECT: "TESTSETS_SELECT",
            TESTSETS_CREATE: "TESTSETS_CREATE",
            TESTSETS_UPDATE: "TESTSETS_UPDATE",
            TESTSETS_DELETE: "TESTSETS_DELETE",
            TESTSESSIONS_SELECT: "TESTSESSIONS_SELECT",
            TESTSESSIONS_CREATE: "TESTSESSIONS_CREATE",
            TESTSESSIONS_DELETE: "TESTSESSIONS_DELETE",
            TESTSESSIONS_REPORTS: "TESTSESSIONS_REPORTS",
            APIKEYS_SELECT: "APIKEYS_SELECT",
            APIKEYS_MANAGE: "APIKEYS_MANAGE",
            DEVICEPROVIDERS_SELECT: "DEVICEPROVIDERS_SELECT",
            DEVICEPROVIDERS_MANAGE: "DEVICEPROVIDERS_MANAGE",
            REGISTEREDCOMPONENTS_SELECT: "REGISTEREDCOMPONENTS_SELECT",
            REGISTEREDCOMPONENTS_MANAGE: "REGISTEREDCOMPONENTS_MANAGE",
            USERS_MANAGE: "USERS_MANAGE",
            SYSTEMSETTINGS_MANAGE: "SYSTEMSETTINGS_MANAGE",
            IMPORT_PRISMA: "IMPORT_PRISMA"
        },
        hasPermission: Zs,
        hasAnyPermission: (e, t) => {
            for (const s of t)
                if (Zs(e, s)) return !0;
            return !1
        },
        hasAllPermissions: (e, t) => {
            for (const s of t)
                if (!Zs(e, s)) return !1;
            return !0
        }
    };
    var tn = {
        isLoggedIn: e => {
            const t = (e => U.get(e, "request.user"))(e),
                s = (e => U.get(e, "request.apiKey"))(e),
                n = (e => U.get(e, "connection.context.user"))(e);
            if (!t && !s && !n) throw new Error("Not logged in");
            return t || s || n
        },
        getClientIdFilter: e => {
            return null
        },
        withClientConnect: (e, t, s) => {
            if (s && !e.client && (e.client = {
                    connect: {
                        id: s
                    }
                }), e.client && e.client.connect && e.client.connect.id) {
                if (!t) throw new Error("Unauthorized, missing client access");
                if (!t.find(t => t.id === e.client.connect.id)) throw new Error("Unauthorized, missing client access")
            }
            return e
        },
        withClientFilter: (e, t, s) => {
            return {
                AND: [e || {}]
            }
        },
        assertClient: (e, t) => {
            if (e && (!t || !t.find(t => t.id === e))) throw new Error("Unauthorized, missing client access")
        }
    };
    const sn = F("botium-box-server-livechat"),
        {
            hasPermission: nn
        } = en,
        {
            isLoggedIn: an,
            getClientIdFilter: rn,
            withClientConnect: on
        } = tn,
        {
            startBot: cn,
            sendToBot: dn,
            stopBot: ln,
            getConversation: un,
            getConversationScripts: pn
        } = is,
        {
            getChatbotCapabilities: hn
        } = ce;
    var Sn = {
            liveChatConvoStepAdded: {
                subscribe: (e, {
                    conversationId: t
                }, {
                    pubsub: s
                }) => s.asyncIterator(t)
            }
        },
        mn = {
            async liveChatConvoSteps(e, {
                conversationId: t
            }, s) {
                try {
                    return un({
                        conversationId: t
                    }, s)
                } catch (e) {
                    throw sn(e), new Error(`Conversation ${t} not available.`)
                }
            }
        },
        fn = {
            async liveChatStartBot(e, {
                chatbotId: t
            }, {
                db: s,
                pubsub: n,
                queueSettings: a
            }) {
                const {
                    caps: r,
                    envs: o
                } = await hn(t, s, a);
                return await cn({
                    caps: r,
                    envs: o
                }, {
                    pubsub: n,
                    queueSettings: a
                })
            },
            liveChatSendToBot: async (e, {
                conversationId: t,
                convoStep: s
            }, {
                queueSettings: n
            }) => (await dn({
                conversationId: t,
                convoStep: JSON.parse(s)
            }, {
                queueSettings: n
            }), !0),
            liveChatStopBot: async (e, {
                conversationId: t
            }, {
                queueSettings: s
            }) => (await ln({
                conversationId: t
            }, {
                queueSettings: s
            }), !0),
            async liveChatSaveConvoSteps(e, {
                chatbotId: t,
                conversationId: s,
                testSetId: n,
                newTestSetName: a,
                testCaseName: r,
                splitToConvoAndUtterancesMe: o,
                splitToConvoAndUtterancesBot: i,
                types: c
            }, d) {
                const l = an(d),
                    {
                        caps: u
                    } = await hn(t, d.db, d.queueSettings);
                let p = null;
                if (a) {
                    if (!nn(l, "TESTSETS_CREATE")) throw new Error("Missing permission TESTSETS_CREATE");
                    p = await d.db.mutation.createTestSet({
                        data: on({
                            name: a
                        }, l.clients, rn(d))
                    }, "{ id name }")
                } else p = await d.db.query.testSet({
                    where: {
                        id: n
                    }
                }, "{ id name }");
                const {
                    script: h,
                    utterances: S
                } = await pn({
                    caps: u,
                    conversationId: s,
                    testCaseName: r,
                    types: c,
                    splitToConvoAndUtterancesMe: o,
                    splitToConvoAndUtterancesBot: i
                }, d);
                sn(`live2ChatSaveConvoSteps(${s}) saving test case for test set ${p.id}/${p.name}`);
                let m = await d.db.mutation.createTestSetScript({
                    data: {
                        name: r,
                        script: h,
                        scriptType: "SCRIPTING_TYPE_CONVO",
                        testSet: {
                            connect: {
                                id: p.id
                            }
                        }
                    }
                }, "{ id name }");
                for (const e of S) await d.db.mutation.createTestSetScript({
                    data: {
                        name: e.name,
                        script: e.script,
                        scriptType: "SCRIPTING_TYPE_UTTERANCES",
                        testSet: {
                            connect: {
                                id: p.id
                            }
                        }
                    }
                }, "{ id name }");
                return sn(`liveChatSaveConvoSteps(${s}) saved test case for test set ${p.id}/${p.name} - ${m.id}/${m.name} - utterance count: ${S.length}`), p.id
            }
        },
        Tn = {
            testsessions: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "createdAt_DESC", n = isNaN(n) ? 0 : n, a = isNaN(a) ? 100 : a, r.db.query.testSessions({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o)),
            testsession: (e, {
                id: t
            }, s, n) => s.db.query.testSession({
                where: {
                    id: t
                }
            }, n),
            testsessiontestcaseresult: (e, {
                id: t
            }, s, n) => s.db.query.testSessionTestCaseResult({
                where: {
                    id: t
                }
            }, n),
            testsessionjoblogs: (e, {
                jobId: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => r.db.query.testSessionJobLogs({
                where: {
                    testSessionJob: {
                        id: t
                    }
                },
                orderBy: s,
                skip: n,
                first: a
            }, o)
        },
        gn = {
            testsets: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.testSets({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o).then(e => (e && e.forEach(e => {
                e.repositories && e.repositories.forEach(e => {
                    delete e.gitpassword
                })
            }), e))),
            testset: (e, {
                id: t
            }, s, n) => s.db.query.testSet({
                where: {
                    id: t
                }
            }, n).then(e => (e.repositories && e.repositories.forEach(e => {
                delete e.gitpassword
            }), e)),
            testsetscripts: (e, {
                testSetId: t,
                skip: s,
                first: n
            }, a, r) => a.db.query.testSetScripts({
                where: {
                    testSet: {
                        id: t
                    }
                },
                skip: s,
                first: n
            }, r),
            testsetscript: (e, {
                id: t
            }, s, n) => s.db.query.testSetScript({
                where: {
                    id: t
                }
            }, n),
            validatetestsetscript(e, {
                script: t,
                scriptType: s
            }) {
                const n = new f({
                    AddConvos: () => {},
                    AddPartialConvos: () => {},
                    AddUtterances: () => {},
                    AddScriptingMemories: () => {},
                    IsAsserterValid: () => !0,
                    IsLogicHookValid: () => !0,
                    IsUserInputValid: () => !0,
                    GetPartialConvos: () => [],
                    scriptingEvents: {}
                }, {
                    SCRIPTING_TXT_EOL: "\n"
                }).Compile(t, s);
                return n && n.length > 0 ? "SCRIPTING_TYPE_UTTERANCES" === s ? Promise.resolve({
                    name: n[0].name,
                    description: "Utterances",
                    script: t,
                    scriptType: s
                }) : "SCRIPTING_TYPE_SCRIPTING_MEMORY" === s ? Promise.resolve({
                    name: "Scripting Memory",
                    description: `Test Cases: ${n.map(e=>e.header.name).join("/")}`,
                    script: t,
                    scriptType: s
                }) : Promise.resolve({
                    name: n[0].header.name,
                    description: n[0].header.description,
                    script: t,
                    scriptType: s
                }) : Promise.reject(new Error("no script provided"))
            },
            testsetrepositories: (e, {
                testSetId: t,
                skip: s,
                first: n
            }, a, r) => a.db.query.testSetRepositories({
                where: {
                    testSet: {
                        id: t
                    }
                },
                skip: s,
                first: n
            }, r).then(e => (e && e.forEach(e => {
                delete e.gitpassword
            }), e)),
            testsetrepository: (e, {
                id: t
            }, s, n) => s.db.query.testSetRepository({
                where: {
                    id: t
                }
            }, n).then(e => (e && delete e.password, e)),
            testsetfolders: (e, {
                testSetId: t,
                skip: s,
                first: n
            }, a, r) => a.db.query.testSetFolders({
                where: {
                    testSet: {
                        id: t
                    }
                },
                skip: s,
                first: n
            }, r),
            testsetfolder: (e, {
                id: t
            }, s, n) => s.db.query.testSetFolder({
                where: {
                    id: t
                }
            }, n),
            testsetexcels: (e, {
                testSetId: t,
                skip: s,
                first: n
            }, a, r) => a.db.query.testSetExcels({
                where: {
                    testSet: {
                        id: t
                    }
                },
                skip: s,
                first: n
            }, r),
            testsetexcel: (e, {
                id: t
            }, s, n) => s.db.query.testSetExcel({
                where: {
                    id: t
                }
            }, n),
            clonetestsetoptions: (e, t, s, n) => Mt.possibleOptions
        };
    const bn = new Z(3600);
    var yn = {
            devicesets: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.deviceSets({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o)),
            deviceset: (e, {
                id: t
            }, s, n) => s.db.query.deviceSet({
                where: {
                    id: t
                }
            }, n),
            async availabledevices(e, {
                provider: t
            }, s) {
                const n = await s.db.query.deviceProvider({
                    where: {
                        id: t
                    }
                });
                if (!n) return [];
                let a = [];
                "SAUCELABS" === n.type ? a = await bn.get("SAUCELABS", () => M({
                    url: "https://saucelabs.com/rest/v1/info/platforms/all",
                    json: !0
                }).then(e => {
                    return e.filter(e => !e.device).map(e => ({
                        name: `${e.long_name} ${e.short_version}, ${e.os}`,
                        value: JSON.stringify({
                            type: "DESKTOP",
                            capabilities: {
                                browserName: e.api_name,
                                platform: e.os,
                                version: e.short_version
                            }
                        })
                    })).concat(e.filter(e => e.device).map(e => ({
                        name: `${e.long_name}, ${e.short_version}`,
                        value: JSON.stringify({
                            type: "MOBILEBROWSER",
                            capabilities: {
                                browserName: ["iphone", "ipad"].indexOf(e.api_name) >= 0 ? "Safari" : "Chrome",
                                deviceName: e.device,
                                platformName: ["iphone", "ipad"].indexOf(e.api_name) >= 0 ? "iOS" : "Android",
                                platformVersion: e.short_version
                            }
                        })
                    })))
                })) : "TESTOBJECTS" === n.type ? n.username && n.password && (a = await bn.get("TESTOBJECTS_" + n.url, () => M({
                    url: "https://app.testobject.com/api/rest/v2/devices",
                    json: !0
                }).auth(n.username, n.password).then(e => {
                    return e[n.url.includes("eu1") ? "EU" : "US"].map(e => ({
                        name: `${e.name}, ${e.os}, ${e.osVersion}`,
                        value: JSON.stringify({
                            type: "MOBILEAPP",
                            capabilities: {
                                deviceName: e.name,
                                platformName: e.os,
                                platformVersion: e.osVersion
                            }
                        })
                    }))
                }))) : "EXPERITEST" === n.type && (a = await bn.get("EXPERITEST", () => M({
                    url: "https://cloud.seetest.io/api/v1/devices",
                    headers: {
                        Authorization: `Bearer ${n.password}`
                    },
                    json: !0
                }).then(e => {
                    return e.data && e.data.filter(e => e.deviceName).map(e => ({
                        name: `${e.deviceName}, ${e.deviceOs} ${e.osVersion}`,
                        value: JSON.stringify({
                            type: "MOBILEBROWSER",
                            capabilities: {
                                browserName: "iOS" === e.deviceOs ? "Safari" : "Chrome",
                                platformName: e.deviceOs,
                                platformVersion: e.osVersion,
                                deviceManufacturer: e.manufacturer,
                                deviceModel: e.model,
                                deviceCategory: e.deviceCategory
                            }
                        })
                    }))
                })));
                const r = (a || []).concat((e => {
                    const t = g.join("resources", `${e.type}.json`);
                    if (T.existsSync(t)) {
                        const e = JSON.parse(T.readFileSync(t, "utf8"));
                        if (U.isArray(e)) {
                            let t = e.filter(e => e.name && e.value).map(e => ({
                                name: e.name,
                                value: JSON.stringify(e.value)
                            }));
                            return U.uniqBy(U.orderBy(t, "name", "asc"), "name")
                        }
                    }
                    return []
                })(n) || []);
                return U.uniqBy(U.orderBy(r, "name", "asc"), "name")
            }
        },
        En = {
            testprojects: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.testProjects({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o)),
            testproject: (e, {
                id: t
            }, s, n) => s.db.query.testProject({
                where: {
                    id: t
                }
            }, n)
        },
        wn = {
            users: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.users({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o)),
            user: (e, {
                id: t
            }, s, n) => s.db.query.user({
                where: {
                    id: t
                }
            }, n),
            userroles: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.userRoles({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o)),
            clients: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.clients({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o)),
            apikeys: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.apiKeys({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o)),
            apikey: (e, {
                id: t
            }, s, n) => s.db.query.apiKey({
                where: {
                    id: t
                }
            }, n),
            deviceproviders: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.deviceProviders({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o).then(e => (e && e.forEach(e => {
                delete e.password
            }), e))),
            deviceprovider: (e, {
                id: t
            }, s, n) => s.db.query.deviceProvider({
                where: {
                    id: t
                }
            }, n).then(e => (e && delete e.password, e)),
            registeredcomponents: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.registeredComponents({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o)),
            registeredcomponent: (e, {
                id: t
            }, s, n) => s.db.query.registeredComponent({
                where: {
                    id: t
                }
            }, n),
            systemsettings: (e, t, s, n) => s.db.query.systemSettingses({
                skip: 0,
                first: 1
            }, n).then(e => e && e.length && e[0]),
            tags: (e, {
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, r, o) => (s = s || "name_ASC", r.db.query.tags({
                where: t,
                orderBy: s,
                skip: n,
                first: a
            }, o)),
            availableconnectors(e, t, s, n) {
                const a = [{
                        name: "echo",
                        description: "Botium Sample Chatbot (Echo)"
                    }, {
                        name: "watson",
                        description: "IBM Watson Assistant API"
                    }, {
                        name: "directline3",
                        description: "Microsoft Bot Framework (Directline 3)"
                    }, {
                        name: "dialogflow",
                        description: "Google Dialogflow"
                    }, {
                        name: "koreai-webhook",
                        description: "Kore.ai"
                    }, {
                        name: "fbpagereceiver",
                        description: "Facebook Messenger Bots"
                    }, {
                        name: "botkit",
                        description: "Botkit Anywhere via HTTP(s)/JSON"
                    }, {
                        name: "botkit-websocket",
                        description: "Botkit Anywhere via Websockets"
                    }, {
                        name: "botpress",
                        description: "Botpress.io"
                    }, {
                        name: "simplerest",
                        description: "Generic HTTP/JSON Interface"
                    }, {
                        name: "lex",
                        description: "Amazon Lex"
                    }, {
                        name: "alexa-avs",
                        description: "Alexa Voice Service"
                    }, {
                        name: "alexa-smapi",
                        description: "Alexa Skill Management API"
                    }, {
                        name: "luis",
                        description: "Microsoft LUIS"
                    }, {
                        name: "google-assistant",
                        description: "Google Assistant"
                    }, {
                        name: "wechat",
                        description: "Wechat Webhook"
                    }, {
                        name: "webdriverio",
                        description: "WebdriverIO (Selenium or Appium)"
                    }, {
                        name: "rasa",
                        description: "Rasa (Rasa RestInput channel)"
                    }],
                    r = [{
                        name: "docker",
                        description: "Dockerize Facebook/Slack/Botkit Chatbot"
                    }, {
                        name: "fbdirect",
                        description: "Connect Live Facebook Chatbot"
                    }, {
                        name: "webspeech",
                        description: "Webspeech (Talk/Listen)"
                    }];
                if (process.env.BOTIUMBOX_DISABLE_CONNECTORS) {
                    process.env.BOTIUMBOX_DISABLE_CONNECTORS.split(",").forEach(e => a.findIndex(t => t.name === e) >= 0 && a.splice(a.findIndex(t => t.name === e), 1))
                }
                if (process.env.BOTIUMBOX_ENABLE_CONNECTORS) {
                    process.env.BOTIUMBOX_ENABLE_CONNECTORS.split(",").forEach(e => {
                        a.findIndex(t => t.name === e) >= 0 || (r.findIndex(t => t.name === e) >= 0 ? a.push(r.find(t => t.name === e)) : a.push({
                            name: e,
                            value: e,
                            description: e
                        }))
                    })
                }
                return a.forEach(e => {
                    e.value = e.name
                }), U.sortBy(a, "description")
            }
        };
    const Cn = F("botium-box-server-charts-query"),
        {
            updateChartCacheForTestSession: vn
        } = Ss,
        {
            isLoggedIn: In,
            getClientIdFilter: On,
            withClientFilter: Rn
        } = tn,
        Nn = e => "TODAY" === e ? k().utc().startOf("day") : "LASTWEEK" === e ? k().utc().subtract(6, "days").startOf("day") : "LAST2WEEKS" === e ? k().utc().subtract(13, "days").startOf("day") : "LASTMONTH" === e ? k().utc().subtract(30, "days").startOf("day") : "LAST2MONTHS" === e ? k().utc().subtract(60, "days").startOf("day") : void 0,
        xn = e => k().utc().endOf("day"),
        An = (e, t) => {
            let s = Promise.resolve();
            return t && t.forEach(t => {
                s = s.then(() => {
                    if (!t.chartData) return vn(null, {
                        testSessionId: t.id
                    }, e).then(e => {
                        t.chartData = e
                    });
                    t.chartData = JSON.parse(t.chartData)
                })
            }), s
        };
    var Pn = {
        chartFailedCountByTestSetByDay(e, {
            testProjectId: t,
            timeFrame: s
        }, n, a) {
            const r = In(n),
                o = Nn(s || "LAST2WEEKS"),
                i = xn();
            Cn(`called chartFailedCountByTestSetByDay ${o} - ${i}`);
            const c = `chartFailedCountByTestSetByDay_${JSON.stringify({fromDate:o,testProjectId:t,clientId:On(n)})}`;
            return n.chartsCache.get(c, () => {
                const e = Rn({
                    status_in: ["READY", "FAILED"],
                    createdAt_gte: k(o).toDate(),
                    createdAt_lte: k(i).toDate(),
                    jobs_every: {
                        status: "READY"
                    }
                }, r.clients, On(n));
                return t && (e.testProject = {
                    id: t
                }), n.db.query.testSessions({
                    where: e
                }, "{ id createdAt testSets { id name } chartData }").then(e => An(n, e).then(() => e)).then(e => {
                    if (!e) return;
                    const t = e.filter(e => e.chartData).reduce((e, t) => e.concat(t.testSets.map(e => ({
                            testSet: e,
                            createdAt: t.createdAt,
                            chartData: t.chartData.countByTestSetId[e.id]
                        }))), []).filter(e => e.chartData),
                        s = U.groupBy(t, e => e.testSet.id),
                        n = {};
                    Object.keys(s).forEach(e => {
                        n[e] = s[e][0].testSet.name, s[e] = U.groupBy(s[e], e => k.utc(e.createdAt).startOf("day")), Object.keys(s[e]).forEach(t => {
                            const n = s[e][t];
                            s[e][t] = Math.ceil(n.reduce((e, t) => e + t.chartData.failedCount, 0) / n.length)
                        })
                    });
                    const a = [];
                    for (const e = k(o); e.isBefore(i); e.add(1, "days")) a.push(k(e));
                    const r = Object.keys(s).map(e => ({
                        id: e,
                        name: n[e],
                        data: a.map(t => s[e][t])
                    }));
                    return U.sortBy(r, "name")
                })
            })
        },
        chartFailedCountByChatbotByDay(e, {
            timeFrame: t
        }, s, n) {
            const a = In(s),
                r = Nn(t || "LAST2WEEKS"),
                o = xn();
            Cn(`called chartFailedCountByChatbotByDay ${r} - ${o}`);
            const i = `chartFailedCountByChatbotByDay_${JSON.stringify({fromDate:r,clientId:On(s)})}`;
            return s.chartsCache.get(i, () => s.db.query.testSessions(Rn({
                where: {
                    status_in: ["READY", "FAILED"],
                    createdAt_gte: k(r).toDate(),
                    createdAt_lte: k(o).toDate(),
                    jobs_every: {
                        status: "READY"
                    }
                }
            }, a.clients, On(s)), "{ id createdAt chatbot { id name } chartData }").then(e => An(s, e).then(() => e)).then(e => {
                if (!e) return;
                const t = U.groupBy(e, e => e.chatbot.id),
                    s = {};
                Object.keys(t).forEach(e => {
                    s[e] = t[e][0].chatbot.name, t[e] = U.groupBy(t[e], e => k.utc(e.createdAt).startOf("day")), Object.keys(t[e]).forEach(s => {
                        const n = t[e][s];
                        t[e][s] = Math.ceil(n.reduce((e, t) => e + t.chartData.failedCount, 0) / n.length)
                    })
                });
                const n = [];
                for (const e = k(r); e.isBefore(o); e.add(1, "days")) n.push(k(e));
                const a = Object.keys(t).map(e => ({
                    id: e,
                    name: s[e],
                    data: n.map(s => t[e][s])
                }));
                return U.sortBy(a, "name")
            }).then(e => e.filter(e => e.data && e.data.filter(e => !isNaN(e)).length > 0)))
        },
        chartTestSetResultCount(e, {
            testProjectId: t
        }, s, n) {
            const a = In(s),
                r = `chartTestSetResultCount_${JSON.stringify({testProjectId:t,clientId:On(s)})}`;
            return s.chartsCache.get(r, () => s.db.query.testSets({
                orderBy: "name_ASC"
            }, "{ id name }").then(e => Promise.all(e.map(e => {
                const n = Rn({
                    status_in: ["READY", "FAILED"],
                    testSets_some: {
                        id: e.id
                    },
                    jobs_every: {
                        status: "READY"
                    }
                }, a.clients, On(s));
                return t && (n.testProject = {
                    id: t
                }), s.db.query.testSessions({
                    where: n,
                    orderBy: "createdAt_DESC",
                    skip: 0,
                    first: 2
                }, "{ id createdAt chartData }").then(e => An(s, e).then(() => e)).then(t => {
                    const s = {
                        id: e.id,
                        name: e.name,
                        testCaseLastTotalCount: 0,
                        testCaseLastSuccessCount: 0,
                        testCaseLastSuccessRate: 0,
                        testCasePreviousTotalCount: 0,
                        testCasePreviousSuccessCount: 0,
                        testCasePreviousSuccessRate: 0,
                        testCaseTrend: "UNKNOWN"
                    };
                    if (t && t.length > 0) {
                        const n = t[0].chartData.countByTestSetId[e.id];
                        s.lastRun = t[0].createdAt, s.lastTestSessionId = t[0].id, s.testCaseLastTotalCount = n ? n.totalCount : 0, s.testCaseLastSuccessCount = n ? n.successCount : 0, s.testCaseLastSuccessRate = s.testCaseLastTotalCount === s.testCaseLastSuccessCount ? 100 : s.testCaseLastSuccessCount / s.testCaseLastTotalCount * 100
                    }
                    if (t && t.length > 1) {
                        const n = t[1].chartData.countByTestSetId[e.id];
                        s.previousRun = t[1].createdAt, s.previousTestSessionId = t[1].id, s.testCasePreviousTotalCount = n ? n.totalCount : 0, s.testCasePreviousSuccessCount = n ? n.successCount : 0, s.testCasePreviousSuccessRate = s.testCasePreviousTotalCount === s.testCasePreviousSuccessCount ? 100 : s.testCasePreviousSuccessCount / s.testCasePreviousTotalCount * 100, s.testCaseLastSuccessRate > s.testCasePreviousSuccessRate ? s.testCaseTrend = "GOOD" : s.testCaseLastSuccessRate < s.testCasePreviousSuccessRate ? s.testCaseTrend = "BAD" : s.testCaseTrend = "CONSTANT"
                    }
                    return s
                })
            }))).then(e => {
                const t = e.filter(e => e.testCaseLastTotalCount > 0);
                return U.orderBy(t, "lastRun", "desc")
            }))
        },
        chartTestProjectTrainingStatusByTestSet(e, {
            testProjectId: t
        }, s, n) {
            const a = In(s),
                r = `chartTestProjectTrainingStatusByTestSet_${JSON.stringify({testProjectId:t,clientId:On(s)})}`;
            return s.chartsCache.get(r, async () => {
                const e = Rn({
                        status_in: ["READY", "FAILED"],
                        testProject: {
                            id: t
                        },
                        jobs_every: {
                            status: "READY"
                        }
                    }, a.clients, On(s)),
                    n = await s.db.query.testSessions({
                        where: e,
                        orderBy: "createdAt_DESC",
                        skip: 0,
                        first: 1
                    }, "{ id createdAt testSets { id name } chartData }");
                return n && 0 !== n.length ? (await An(s, n), n[0].testSets.forEach(e => {
                    const t = n[0].chartData.countByTestSetId[e.id];
                    e.totalCount = t ? t.totalCount : 0, e.successCount = t ? t.successCount : 0, e.failedCount = t ? t.failedCount : 0
                }), U.sortBy(n[0].testSets, "name")) : []
            })
        },
        chartTestProjectTrainingStatusByDeviceSet(e, {
            testProjectId: t
        }, s, n) {
            const a = In(s),
                r = `chartTestProjectTrainingStatusByDeviceSet_${JSON.stringify({testProjectId:t,clientId:On(s)})}`;
            return s.chartsCache.get(r, async () => {
                const e = Rn({
                        status_in: ["READY", "FAILED"],
                        testProject: {
                            id: t
                        },
                        jobs_every: {
                            status: "READY"
                        }
                    }, a.clients, On(s)),
                    n = await s.db.query.testSessions({
                        where: e,
                        orderBy: "createdAt_DESC",
                        skip: 0,
                        first: 1
                    }, "{ id createdAt deviceSets { id name } chartData }");
                if (!n || 0 === n.length) return [];
                await An(s, n);
                const r = n[0].deviceSets || [];
                r.forEach(e => {
                    const t = n[0].chartData.countByDeviceSetId[e.id];
                    e.totalCount = t ? t.totalCount : 0, e.successCount = t ? t.successCount : 0, e.failedCount = t ? t.failedCount : 0
                });
                const o = n[0].chartData.countByDeviceSetId.NULL;
                return o && r.push({
                    id: "",
                    name: "No Device Set",
                    totalCount: o.totalCount,
                    successCount: o.successCount,
                    failedCount: o.failedCount
                }), U.sortBy(r, "name")
            })
        }
    };
    const _n = e => {
        const t = new Set(e ? e.map(e => e.status) : []);
        let s = null;
        if (t.has("RUNNING") ? s = "RUNNING" : t.has("PENDING") ? s = "PENDING" : t.has("READY") && (s = "READY"), t.has("FAILED") && (null == s ? s = "FAILED" : s += "/FAILED"), null === s) {
            if (e && e.length) throw new Error("illegal state, status cant be null");
            s = "NO JOBS"
        }
        return s
    };
    var $n = {
        performancetestsessions: (e, {
            where: t,
            orderBy: s,
            skip: n,
            first: a
        }, r, o) => (s = s || "createdAt_DESC", n = isNaN(n) ? 0 : n, a = isNaN(a) ? 100 : a, r.db.query.performanceTestSessions({
            where: t,
            orderBy: s,
            skip: n,
            first: a
        }, o)),
        performancetestsessionssimplifiedwithstatus: (e, {
            where: t,
            orderBy: s,
            skip: n,
            first: a
        }, r) => (s = s || "createdAt_DESC", n = isNaN(n) ? 0 : n, a = isNaN(a) ? 100 : a, r.db.query.performanceTestSessions({
            where: t,
            orderBy: s,
            skip: n,
            first: a
        }, "{ id createdAt updatedAt name description tags parallelConvoCount parallelJobCount tickRepeatInitial tickRepeatPerTick tickMaxTime tickTime dataDensity jobs {status} }").then(e => e.map(e => (e.status = _n(e.jobs), delete e.jobs, e))).then(e => e)),
        performancetestsession: (e, {
            id: t
        }, s, n) => s.db.query.performanceTestSession({
            where: {
                id: t
            }
        }, n),
        performancetestsessionstatus: (e, {
            id: t
        }, s) => s.db.query.performanceTestSession({
            where: {
                id: t
            }
        }, "{ id jobs {status} }").then(e => ({
            id: e.id,
            status: _n(e.jobs)
        })),
        performancetestsessionjobs: (e, {
            where: t,
            orderBy: s,
            skip: n,
            first: a
        }, r, o) => (s = s || "createdAt_DESC", n = isNaN(n) ? 0 : n, a = isNaN(a) ? 100 : a, r.db.query.performanceTestSessionJobs({
            where: t,
            orderBy: s,
            skip: n,
            first: a
        }, o)),
        performancetestsessionaggregatedresults: (e, {
            where: t,
            orderBy: s,
            skip: n,
            first: a
        }, r, o) => (s = s || "createdAt_DESC", n = isNaN(n) ? 0 : n, a = isNaN(a) ? 100 : a, r.db.query.performanceTestSessionAggregatedResults({
            where: t,
            orderBy: s,
            skip: n,
            first: a
        }, o))
    };
    const Dn = y.Strategy,
        {
            generateToken: Mn
        } = (F("botium-box-server-passport"), zs);
    var kn = {
        loadStrategy: async e => {
            const t = e();
            b.use(new Dn(async (e, s, n) => {
                try {
                    const a = {
                            OR: [{
                                name: e
                            }, {
                                email: e
                            }]
                        },
                        r = await t.db.query.users({
                            where: a
                        }, "{ id name password email roles { id name permissions } clients { id name } }");
                    if (!r || 0 === r.length) return n(null, !1, {
                        message: `No such user found: ${e}`
                    });
                    const o = r[0];
                    return o.password && await O.compare(s, o.password) ? (delete o.password, n(null, o)) : n(null, !1, {
                        message: "Invalid password."
                    })
                } catch (e) {
                    return n(e)
                }
            }))
        },
        authenticate: (e, t) => new Promise((s, n) => {
            b.authenticate(t || "local", (e, t, a) => e ? n(e) : t ? void s({
                token: Mn(t),
                user: t
            }) : n(new Error(a.message)))(e.request, e.response, () => {})
        })
    };
    const {
        authenticate: jn
    } = kn;
    var Bn = {
        login: async (e, {
            name: t,
            email: s,
            password: n
        }, a, r) => (a.request.body = {
            username: t || s,
            password: n
        }, "admin" === t ? jn(a, "local") : jn(a))
    };
    const qn = F("botium-box-server-agents-mutation"),
        Ln = (e, t) => {
            e.forEach(e => {
                const s = `agent.reconfigure.${e}`;
                t.queueConnector.create(s, {
                    title: `Reconfigure Agent ${e}`
                }).removeOnComplete(!0).save(t => {
                    if (t) return qn(`Saving reconfigure job failed: ${t}`);
                    qn(`Sent reconfigure job to ${e}`)
                })
            })
        };
    var Fn = {
        async createAgent(e, {
            agent: t
        }, s, n) {},
        async updateAgent(e, {
            id: t,
            agent: s
        }, n, a) {
            if (!await n.db.exists.Agent({
                    id: t
                })) throw new Error(`Agent not found ${t}`);
            const r = await n.db.mutation.updateAgent({
                    where: {
                        id: t
                    },
                    data: s
                }, a),
                o = (await n.db.query.agent({
                    where: {
                        id: t
                    }
                })).name;
            if ("Default Agent" === o) {
                const e = await n.db.query.agents({
                    where: {
                        name_not: "Default Agent"
                    }
                });
                Ln(e.map(e => e.name), n)
            } else Ln([o], n);
            return r
        },
        async deleteAgent(e, {
            id: t
        }, s) {}
    };
    const Un = F("botium-box-server-resolvers-chatbots-mutation"),
        {
            hasPermission: Jn
        } = en,
        {
            isLoggedIn: Gn,
            getClientIdFilter: Vn,
            withClientConnect: Hn
        } = tn,
        {
            getChatbotCapabilities: zn
        } = ce,
        {
            importDialogflowIntents: Yn,
            importDialogflowConversations: Wn
        } = w.Utils,
        {
            importAlexaIntents: Xn
        } = C.Utils,
        {
            importWatsonIntents: Kn
        } = v.Utils,
        Qn = async (e, t, s, n, a) => {
            const r = Gn(n),
                {
                    caps: o
                } = await zn(e, n.db, n.queueSettings);
            let i = null;
            if (s.name) {
                if (!Jn(r, "TESTSETS_CREATE")) throw new Error("Missing permission TESTSETS_CREATE");
                i = await n.db.mutation.createTestSet({
                    data: Hn(s, r.clients, Vn(n))
                }, "{ id name }")
            } else i = await n.db.query.testSet({
                where: {
                    id: t
                }
            }, "{ id name }");
            Un(`importDialogflowIntents importing to test set ${i.id}/${i.name}`);
            const {
                convos: c,
                utterances: d,
                compiler: l
            } = await a(o);
            if (l)
                for (const e of c || []) {
                    const t = l.Decompile([e], "SCRIPTING_FORMAT_TXT");
                    await n.db.mutation.createTestSetScript({
                        data: {
                            name: e.header.name,
                            script: t,
                            scriptType: "SCRIPTING_TYPE_CONVO",
                            testSet: {
                                connect: {
                                    id: i.id
                                }
                            }
                        }
                    }, "{ id }")
                }
            for (const e of d || []) {
                const t = [e.name, ...e.utterances].join("\n");
                await n.db.mutation.createTestSetScript({
                    data: {
                        name: e.name,
                        script: t,
                        scriptType: "SCRIPTING_TYPE_UTTERANCES",
                        testSet: {
                            connect: {
                                id: i.id
                            }
                        }
                    }
                }, "{ id }")
            }
            return i.id
        };
    var Zn = {
        createChatbot: async (e, {
            chatbot: t
        }, s, n) => s.db.mutation.createChatbot({
            data: {
                ...t
            }
        }, n),
        async updateChatbot(e, {
            id: t,
            chatbot: s
        }, n, a) {
            if (!await n.db.exists.Chatbot({
                    id: t
                })) throw new Error(`Chatbot not found ${t}`);
            return n.db.mutation.updateChatbot({
                where: {
                    id: t
                },
                data: {
                    ...s
                }
            }, a)
        },
        deleteChatbot: async (e, {
            id: t
        }, s) => (await s.db.mutation.deleteChatbot({
            where: {
                id: t
            }
        }, "{id}"), !0),
        async importFromDialogflow(e, {
            chatbotId: t,
            testSetId: s,
            newTestSetName: n,
            importer: a
        }, r) {
            const o = {
                name: n,
                expandConvos: !0,
                expandConvosMode: "UTTEXPANSION_MODE_ALL",
                expandUtterancesToConvos: !1,
                useScriptingMemory: !1,
                expandScriptingMemory: !1
            };
            return "importDialogflowIntents" === a ? Qn(t, s, o, r, async e => {
                const {
                    convos: t,
                    utterances: s,
                    botiumContext: {
                        compiler: n
                    }
                } = await Yn(null, e);
                return {
                    convos: t,
                    utterances: s,
                    compiler: n
                }
            }) : "importDialogflowConversations" === a ? Qn(t, s, o, r, async e => {
                const {
                    convos: t,
                    utterances: s,
                    botiumContext: {
                        compiler: n
                    }
                } = await Wn(null, e);
                return {
                    convos: t,
                    utterances: s,
                    compiler: n
                }
            }) : null
        },
        importFromAlexa: async (e, {
            chatbotId: t,
            testSetId: s,
            newTestSetName: n,
            buildconvos: a,
            expandcustomslots: r,
            expandbuiltinslots: o,
            expandbuiltinslotsid: i,
            slotsamples: c,
            invocation: d
        }, l) => Qn(t, s, {
            name: n,
            expandConvos: !!a,
            expandConvosMode: "UTTEXPANSION_MODE_ALL",
            expandUtterancesToConvos: !a,
            useScriptingMemory: !1,
            expandScriptingMemory: !1
        }, l, async e => {
            const {
                convos: t,
                utterances: s,
                compiler: n
            } = await Xn({
                caps: e,
                buildconvos: !!a,
                expandcustomslots: !!r,
                expandbuiltinslots: !!o,
                expandbuiltinslotsid: i,
                slotsamples: c && JSON.parse(c),
                invocation: d
            });
            return {
                convos: t,
                utterances: s,
                compiler: n
            }
        }),
        importFromWatson: async (e, {
            chatbotId: t,
            testSetId: s,
            newTestSetName: n,
            buildconvos: a
        }, r) => Qn(t, s, {
            name: n,
            expandConvos: !!a,
            expandConvosMode: "UTTEXPANSION_MODE_ALL",
            expandUtterancesToConvos: !a,
            useScriptingMemory: !1,
            expandScriptingMemory: !1
        }, r, async e => {
            const {
                convos: t,
                utterances: s,
                compiler: n
            } = await Kn({
                caps: e,
                buildconvos: !!a
            });
            return {
                convos: t,
                utterances: s,
                compiler: n
            }
        })
    };
    const ea = Ts.createTestSession,
        ta = F("botium-box-server-mutation-testproject"),
        sa = (e, t, s, n) => {
            void 0 === t.securityCheck && (t.securityCheck = !1);
            const a = {
                testSession: Object.assign({}, {
                    status: "PENDING",
                    chatbot: {
                        connect: {
                            id: t.chatbot.id
                        }
                    },
                    testSets: {
                        connect: t.testSets && t.testSets.map(e => ({
                            id: e.id
                        }))
                    },
                    deviceSets: {
                        connect: t.deviceSets && t.deviceSets.map(e => ({
                            id: e.id
                        }))
                    },
                    registeredComponents: {
                        connect: t.registeredComponents && t.registeredComponents.map(e => ({
                            id: e.id
                        }))
                    },
                    securityCheck: t.securityCheck,
                    testProject: {
                        connect: {
                            id: t.id
                        }
                    },
                    batchCount: t.batchCount,
                    bail: t.bail
                }, s)
            };
            return t.client && (a.testSession.client = {
                connect: {
                    id: t.client.id
                }
            }), t.agent && (a.testSession.agent = {
                connect: {
                    id: t.agent.id
                }
            }), ea(e, a, n, "{ id }")
        };
    var na = {
        createTestProject: async (e, {
            testProject: t
        }, s, n) => s.db.mutation.createTestProject({
            data: {
                ...t,
                code: L(t.name)
            }
        }, n),
        startTestProject: async (e, {
            id: t,
            code: s
        }, n) => n.db.query.testProject({
            where: {
                id: t,
                code: s
            }
        }, "{ id name securityCheck client { id } chatbot { id } testSets { id } deviceSets { id } agent { id } registeredComponents { id } batchCount bail }").then(a => {
            if (!a) throw new Error(`Test Project ${t}/${s} not found`);
            return sa(e, a, {
                name: a.name + " - Test Session",
                tags: {
                    set: ["BoxTriggered"]
                }
            }, n)
        }).then(e => e.id),
        quickstartTestProject: async (e, {
            testProject: t,
            startProject: s
        }, n) => n.db.mutation.createTestProject({
            data: {
                ...t,
                code: L(t.name)
            }
        }, "{ id name client { id } chatbot { id } testSets { id } deviceSets { id } agent { id } registeredComponents { id } batchCount bail }").then(t => s ? sa(e, t, {
            name: t.name + " - Initial Test Session",
            tags: {
                set: ["QuickStart"]
            }
        }, n).then(e => e.id) : t.id),
        async updateTestProject(e, {
            id: t,
            testProject: s
        }, n, a) {
            if (!await n.db.exists.TestProject({
                    id: t
                })) throw new Error(`TestProject not found ${t}`);
            return n.db.mutation.updateTestProject({
                where: {
                    id: t
                },
                data: {
                    ...s,
                    code: L(s.name)
                }
            }, a)
        },
        deleteTestProject: async (e, {
            id: t
        }, s) => new Promise((e, n) => {
            s.db.mutation.deleteTestProject({
                where: {
                    id: t
                }
            }, "{id}").then(() => e(!0)).catch(e => (ta(`Error deleting TestProject ${t}: ${e}`), n(e)))
        })
    };
    const aa = F("botium-box-server-mutation-settings");
    let ra = ["LOCALSELENIUM"];
    var oa = {
        createUser: async (e, {
            user: t
        }, s, n) => (t.password && (t.password = await O.hash(t.password, 10)), s.db.mutation.createUser({
            data: t
        }, n)),
        async updateUser(e, {
            id: t,
            user: s
        }, n, a) {
            const r = await n.db.query.user({
                where: {
                    id: t
                }
            });
            if (!r) throw new Error(`User not found ${t}`);
            return s.password && (s.password = await O.hash(s.password, 10)), "admin" === r.name && (s.name = "admin", s.roles = {
                connect: [{
                    name: "ADMIN"
                }]
            }), n.db.mutation.updateUser({
                where: {
                    id: t
                },
                data: s
            }, a)
        },
        async deleteUser(e, {
            id: t
        }, s) {
            const n = await s.db.query.user({
                where: {
                    id: t
                }
            });
            if (!n) return !0;
            if ("admin" === n.name) throw new Error('Not allowed to delete user "admin"');
            return s.db.mutation.deleteUser({
                where: {
                    id: t
                }
            }, "{id}").then(() => !0).catch(e => {
                throw aa(`Error deleting User ${t}: ${e}`), e
            })
        },
        createApiKey: async (e, {
            apiKey: t
        }, s, n) => (t.key = I("Aa0", 20), s.db.mutation.createApiKey({
            data: t
        }, n)),
        async updateApiKey(e, {
            id: t,
            apiKey: s
        }, n, a) {
            if (!await n.db.exists.ApiKey({
                    id: t
                })) throw new Error(`ApiKey not found ${t}`);
            return delete s.key, n.db.mutation.updateApiKey({
                where: {
                    id: t
                },
                data: s
            }, a)
        },
        deleteApiKey: async (e, {
            id: t
        }, s) => s.db.mutation.deleteApiKey({
            where: {
                id: t
            }
        }, "{id}").then(() => !0).catch(e => {
            throw aa(`Error deleting ApiKey ${t}: ${e}`), e
        }),
        async createDeviceProvider(e, {
            deviceProvider: t
        }, s, n) {
            if ("INTEGRATED" === t.type) throw new Error("DeviceProvider type INTEGRATED not allowed to create");
            if (ra.indexOf(t.type) < 0) throw new Error(`DeviceProvider type ${t.type} not supported in this version`);
            return s.db.mutation.createDeviceProvider({
                data: t
            }, n)
        },
        async updateDeviceProvider(e, {
            id: t,
            deviceProvider: s
        }, n, a) {
            if (!await n.db.exists.DeviceProvider({
                    id: t
                })) throw new Error(`DeviceProvider not found ${t}`);
            if (ra.indexOf(s.type) < 0) throw new Error(`DeviceProvider type ${s.type} not supported in this version`);
            const r = await n.db.mutation.updateDeviceProvider({
                where: {
                    id: t
                },
                data: s
            }, a);
            return delete r.password, r
        },
        async deleteDeviceProvider(e, {
            id: t
        }, s) {
            const n = await s.db.query.deviceProvider({
                where: {
                    id: t
                }
            });
            if (!n) return !0;
            if ("INTEGRATED" === n.type) throw new Error("DeviceProvider type INTEGRATED not allowed to delete");
            try {
                return await s.db.mutation.deleteDeviceProvider({
                    where: {
                        id: t
                    }
                }, "{id}"), !0
            } catch (e) {
                throw aa(`Error deleting DeviceProvider ${t}: ${e}`), e
            }
        },
        createRegisteredComponent: async (e, {
            registeredComponent: t
        }, s, n) => s.db.mutation.createRegisteredComponent({
            data: t
        }, n),
        async updateRegisteredComponent(e, {
            id: t,
            registeredComponent: s
        }, n, a) {
            if (!await n.db.exists.RegisteredComponent({
                    id: t
                })) throw new Error(`RegisteredComponent not found ${t}`);
            return n.db.mutation.updateRegisteredComponent({
                where: {
                    id: t
                },
                data: s
            }, a)
        },
        deleteRegisteredComponent: async (e, {
            id: t
        }, s) => s.db.mutation.deleteRegisteredComponent({
            where: {
                id: t
            }
        }, "{id}").then(() => !0).catch(e => {
            throw aa(`Error deleting RegisteredComponent ${t}: ${e}`), e
        }),
        async updateSystemSettings(e, {
            systemSettings: t
        }, s, n) {
            const a = await s.db.query.systemSettingses({
                skip: 0,
                first: 1
            });
            return a && a.length > 0 ? s.db.mutation.updateSystemSettings({
                where: {
                    id: a[0].id
                },
                data: t
            }, n) : s.db.mutation.createSystemSettings({
                data: t
            }, n)
        },
        async importPrisma(e, {
            prismaFile: t
        }, s, n) {
            const a = R.sign({}, process.env.PRISMA_SECRET),
                r = {
                    uri: process.env.PRISMA_ENDPOINT + "/import",
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${a}`
                    },
                    json: !0,
                    body: JSON.parse(t)
                },
                o = await M(r);
            if (o && o.length > 0) throw new Error(o.join("\r\n"));
            return !0
        }
    };
    const ia = F("botium-box-server-mutation-deviceset");
    var ca = {
            createDeviceSet: async (e, {
                deviceSet: t
            }, s, n) => s.db.mutation.createDeviceSet({
                data: t
            }, n),
            async updateDeviceSet(e, {
                id: t,
                deviceSet: s
            }, n, a) {
                if (!await n.db.exists.DeviceSet({
                        id: t
                    })) throw new Error(`DeviceSet not found ${t}`);
                return n.db.mutation.updateDeviceSet({
                    where: {
                        id: t
                    },
                    data: s
                }, a)
            },
            deleteDeviceSet: async (e, {
                id: t
            }, s) => new Promise((e, n) => {
                s.db.query.deviceSet({
                    where: {
                        id: t
                    }
                }, "{ id devices { id } }").then(e => {
                    if (!e) throw new Error(`DeviceSet not found ${t}`);
                    return s.db.mutation.deleteManyDeviceDescriptors({
                        where: {
                            id_in: e.devices.map(e => e.id)
                        }
                    })
                }).then(() => s.db.mutation.deleteDeviceSet({
                    where: {
                        id: t
                    }
                }, "{id}")).then(() => e(!0)).catch(e => (ia(`Error deleting DeviceSet ${t}: ${e}`), n(e)))
            })
        },
        da = {
            createPerformanceTestSession: async (e, {
                testProjectId: t,
                options: s
            }, n, a) => n.db.query.testProject({
                where: {
                    id: t
                }
            }, "{ id name client { id } chatbot { id } testSets { id } deviceSets { id } agent { id } registeredComponents { id } batchCount }").then(e => {
                if (!e) throw Error(`Test project not found by id ${t}`);
                const a = Object.assign({}, s, {
                    chatbot: {
                        connect: {
                            id: e.chatbot.id
                        }
                    },
                    testSets: {
                        connect: e.testSets && e.testSets.map(e => ({
                            id: e.id
                        }))
                    },
                    registeredComponents: {
                        connect: e.registeredComponents && e.registeredComponents.map(e => ({
                            id: e.id
                        }))
                    },
                    testProject: {
                        connect: {
                            id: e.id
                        }
                    }
                });
                return e.client && (a.client = {
                    connect: {
                        id: e.client.id
                    }
                }), n.db.mutation.createPerformanceTestSession({
                    data: a
                }, "{id name}")
            }).then(e => new Promise((t, s) => {
                n.queueConnector.create("box.createperformanceprocessingjobs", {
                    title: `Job Creation Job for Test Session ${e.name}`,
                    performanceTestSessionId: e.id
                }).removeOnComplete(!0).save(n => {
                    if (n) return s(n);
                    t(e.id)
                })
            })),
            deletePerformanceTestSession: async (e, {
                id: t
            }, s) => s.db.mutation.deletePerformanceTestSession({
                where: {
                    id: t
                }
            }, "{id}").then(() => !0)
        };
    var la = {};
    const {
        withFilter: ua
    } = N;
    var pa = {
            testSessionProgress: {
                resolve: (e, {
                    testSessionId: t
                }, s, n) => s.db.query.testSession({
                    where: {
                        id: t
                    }
                }, n),
                subscribe: ua((e, {
                    testSessionId: t
                }, {
                    pubsub: s
                }) => s.asyncIterator("TEST_SESSION_PROGRESS"), (e, {
                    testSessionId: t
                }) => e && e.testSessionProgress && e.testSessionProgress.id === t)
            }
        },
        ha = {
            Query: {
                ...Ws,
                ...Xs,
                ...Qs,
                ...mn,
                ...Tn,
                ...gn,
                ...yn,
                ...En,
                ...wn,
                ...Pn,
                ...$n
            },
            Mutation: {
                ...Bn,
                ...Fn,
                ...Zn,
                ...fn,
                ...Ts,
                ...Lt,
                ...na,
                ...oa,
                ...ca,
                ...da
            },
            Subscription: {
                ...la,
                ...Sn,
                ...pa
            }
        };
    const {
        SchemaDirectiveVisitor: Sa
    } = x, {
        defaultFieldResolver: ma
    } = A, {
        hasPermission: fa,
        hasAnyPermission: Ta
    } = en, {
        isLoggedIn: ga,
        getClientIdFilter: ba,
        withClientConnect: ya,
        withClientFilter: Ea,
        assertClient: wa
    } = tn, Ca = F("botium-box-server-directives");
    var va = {
        hasAnyPermission: class extends Sa {
            visitFieldDefinition(e) {
                const {
                    resolve: t = ma
                } = e, {
                    permissions: s
                } = this.args;
                e.resolve = (async (e, n, a, r) => {
                    const o = ga(a);
                    if (Ta(o, s)) return t.call(this, e, n, a, r);
                    throw Ca(`User ${JSON.stringify(o)} missing any permissions ${s.join("|")}`), new Error(`Unauthorized, missing any permissions ${s.join("|")}`)
                })
            }
        },
        hasPermission: class extends Sa {
            visitFieldDefinition(e) {
                const {
                    resolve: t = ma
                } = e, {
                    permission: s
                } = this.args;
                e.resolve = (async (e, n, a, r) => {
                    const o = ga(a);
                    if (fa(o, s)) return t.call(this, e, n, a, r);
                    throw Ca(`User ${JSON.stringify(o)} missing permission ${s}`), new Error(`Unauthorized, missing permission ${s}`)
                })
            }
        },
        clientFilter: class extends Sa {
            visitFieldDefinition(e) {
                const {
                    resolve: t = ma
                } = e;
                e.resolve = (async (e, {
                    where: s,
                    ...n
                }, a, r) => {
                    const o = ga(a),
                        i = Ea(s, o.clients, ba(a));
                    return t.call(this, e, {
                        where: i,
                        ...n
                    }, a, r)
                })
            }
        },
        assertClient: class extends Sa {
            visitFieldDefinition(e) {
                const {
                    resolve: t = ma
                } = e, {
                    query: s,
                    argsBase: n,
                    idParam: a,
                    selector: r
                } = this.args, o = e => e && e.client ? e.client.id : e && Object.keys(e).length > 0 ? o(e[Object.keys(e)[0]]) : null;
                e.resolve = (async (e, i, c, d) => {
                    const l = ga(c),
                        u = U.isArray(s) ? s : [s],
                        p = n && (U.isArray(n) ? n : [n]),
                        h = a && (U.isArray(a) ? a : [a]),
                        S = r && (U.isArray(r) ? r : [r]);
                    for (let e in u) {
                        const t = p ? U.get(i, p[e]) : i;
                        if (t)
                            for (const s of U.isArray(t) ? t : [t]) {
                                const t = U.get(s, h && h[e] || "id");
                                if (!t) continue;
                                const n = await c.db.query[u[e]]({
                                        where: {
                                            id: t
                                        }
                                    }, S && S[e] || "{ client { id } }"),
                                    a = o(n);
                                try {
                                    wa(a, l.clients)
                                } catch (s) {
                                    throw Ca(`User ${JSON.stringify(l)} missing client access, query ${u[e]}, id ${t}, clientId ${a}`), s
                                }
                            }
                    }
                    return t.call(this, e, i, c, d)
                })
            }
        },
        clientConnector: class extends Sa {
            visitFieldDefinition(e) {
                const {
                    resolve: t = ma
                } = e, {
                    dataParam: s
                } = this.args, n = U.isArray(s) ? s : [s];
                e.resolve = (async (e, s, a, r) => {
                    const o = ga(a);
                    return n.forEach(e => {
                        const t = U.get(s, e);
                        if (!t) return;
                        const n = ba(a);
                        for (const e of U.isArray(t) ? t : [t]) ya(e, o.clients, n)
                    }), t.call(this, e, s, a, r)
                })
            }
        },
        clientDisconnector: class extends Sa {
            visitFieldDefinition(e) {
                const {
                    resolve: t = ma
                } = e, {
                    dataParam: s
                } = this.args;
                e.resolve = (async (e, n, a, r) => {
                    const o = n[s];
                    return o && o.client && delete o.client, t.call(this, e, n, a, r)
                })
            }
        },
        tagsResolver: class extends Sa {
            visitFieldDefinition(e) {
                const {
                    resolve: t = ma
                } = e, {
                    dataParam: s,
                    field: n
                } = this.args;
                e.resolve = (async (e, a, r, o) => {
                    const i = a[s][n || "tags"];
                    if (i && i.set)
                        for (const e of i.set) await r.db.query.tag({
                            where: {
                                name: e
                            }
                        }) || (await r.db.mutation.createTag({
                            data: {
                                name: e
                            }
                        }), Ca(`Added new tag to tag suggestion list: ${e}`));
                    return t.call(this, e, a, r, o)
                })
            }
        }
    };
    const {
        jwtSettings: Ia,
        tokenToUserId: Oa
    } = zs, Ra = F("botium-box-middleware-jwt");
    let Na = null;
    var xa = (e, t, s) => {
        e.use((() => P(Object.assign({}, Ia(), {
            credentialsRequired: !1,
            getToken: e => e.headers.authorization && "Bearer" === e.headers.authorization.split(" ")[0] ? e.headers.authorization.split(" ")[1] : e.query && e.query.token ? e.query.token : e.body && e.body.token ? e.body.token : null
        })))()), e.use((e, t, n) => (async (e, t, s, n) => {
            if (e.user) {
                const t = n({
                        request: e
                    }),
                    a = e.user,
                    r = await t.db.query.user({
                        where: {
                            id: Oa(a)
                        }
                    }, "{ id name email roles { id name permissions } clients { id name } }");
                return e.user = {
                    ...r,
                    token: a
                }, s()
            }
            if (process.env.JWT_AUTOLOGIN_USERNAME) {
                if (!Na) {
                    const t = n({
                        request: e
                    });
                    Na = await t.db.query.user({
                        where: {
                            name: process.env.JWT_AUTOLOGIN_USERNAME
                        }
                    }, "{ id name email roles { id name permissions } clients { id name } }"), Ra(`Auto login user ${process.env.JWT_AUTOLOGIN_USERNAME}.`)
                }
                return e.user = {
                    ...Na,
                    token: null
                }, s()
            }
            return s()
        })(e, 0, n, s)), e.use((e, t, n) => (async (e, t, s, n) => {
            const a = e.query.APIKEY || e.query.apikey || e.body && e.body.APIKEY || e.body && e.body.apikey || e.headers.APIKEY || e.headers.apikey,
                r = n({
                    request: e
                });
            if (!a) return s();
            ce.lookupApiKey(r.db, a).then(t => t ? (Ra(`Api Key found - ${t.name}`), e.apiKey = t, s()) : (Ra(`Api Key not found - ${a}`), s())).catch(e => (Ra(`Api Key lookup error - ${a} - ${e}`), s()))
        })(e, 0, n, s))
    };
    const {
        setupEndpoints: Aa,
        verifySignature: Pa
    } = $, _a = F("botium-box-server-fbproxy");
    const $a = F("botium-box-server-endpoints-testset"),
        {
            isLoggedIn: Da,
            assertClient: Ma
        } = tn,
        {
            FindFullTestSet: ka
        } = te;
    const ja = F("botium-box-server-endpoints-attachments"),
        {
            isLoggedIn: Ba,
            assertClient: qa
        } = tn;
    const La = F("botium-box-server-endpoints-build"),
        {
            isLoggedIn: Fa,
            assertClient: Ua
        } = tn,
        Ja = Ts.createTestSession,
        Ga = e => {
            if (!e) return "";
            return e.split("\n").map(e => e.trim()).join("     ")
        },
        Va = (e, t) => e.query[t] || e.query[t.toLowerCase()] || e.body && e.body[t] || e.body && e.body[t.toLowerCase()] || e.headers[`X-BOTIUM-${t}`],
        Ha = (e, t) => {
            const s = (Va(e, "REPORTER") || "json").toLowerCase();
            return "json" === s || "junit" === s || "csv" === s || "jiracsv" === s || "pdf" === s || (t.sendStatus(404).send("VALID REPORTER OPTIONS: json, junit, csv, jiracsv, pdf"), !1)
        },
        za = (e, t) => {
            return e.map(e => `"${e.map(e=>U.isString(e)&&e.replace(/"/g,'""')).join(`"${t||";"}"`)}"`).join("\r\n")
        },
        Ya = async (e, t, s, n) => {
            try {
                const a = (Va(s, "REPORTER") || "json").toLowerCase();
                if ("json" === a) {
                    const {
                        ts: s,
                        output: r
                    } = await Xa(e, t, a);
                    n.setHeader("Content-Type", "application/json"), n.setHeader("Content-disposition", `attachment; filename="${L(s.name)}.json"`), n.status(200).send(r)
                } else if ("junit" === a) {
                    const {
                        ts: s,
                        output: r
                    } = await Xa(e, t, a);
                    n.setHeader("Content-Type", "text/xml"), n.setHeader("Content-disposition", `attachment; filename="${L(s.name)}.xml"`), n.status(200).send(r)
                } else if ("csv" === a || "jiracsv" === a) {
                    const {
                        ts: s,
                        output: r
                    } = await Xa(e, t, a);
                    n.setHeader("Content-Type", "text/csv"), n.setHeader("Content-disposition", `attachment; filename="${L(s.name)}.csv"`), n.status(200).send(r)
                } else if ("pdf" === a) {
                    const {
                        ts: s,
                        output: r
                    } = await Xa(e, t, a);
                    n.setHeader("Content-Type", "application/pdf"), n.setHeader("Content-disposition", `attachment; filename=${L(s.name)}.pdf`), n.status(200).send(r)
                }
            } catch (t) {
                La(`Test Session lookup error - ${e} - ${t}`), n.sendStatus(404)
            }
        }, Wa = async (e, t, s, n, a) => {
            try {
                const r = (a || "json").toLowerCase(),
                    o = {
                        uri: s,
                        method: n,
                        headers: {}
                    };
                if ("get" !== n.toLowerCase()) {
                    const {
                        output: s
                    } = await Xa(e, t, r);
                    "json" === r ? (o.body = s, o.json = !0) : "junit" === r ? (o.headers["Content-Type"] = "text/xml", o.body = s) : "csv" === r || "jiracsv" === r ? (o.headers["Content-Type"] = "text/csv", o.body = s) : "pdf" === r && (o.headers["Content-Type"] = "application/pdf", o.body = s)
                }
                await M(o), La(`sendTestSessionOutput callbackUrl ${s} ready for test session ${e}`)
            } catch (t) {
                La(`sendTestSessionOutput callbackUrl ${s} failed for test session ${e} - ${t}`)
            }
        }, Xa = async (e, t, s) => {
            const n = await ce.findSimpleTestSessionResults(t.db, e);
            if (!n) throw new Error(`Test Session ${e} not found`);
            if ("json" === s) return delete n.results, {
                ts: n,
                output: n
            };
            if ("pdf" === s) {
                const s = await ce.findFullTestSession(t.db, e),
                    a = await ce.extractAllInvolvedTestSets(t, s.testSets),
                    r = new B({
                        bufferPages: !0,
                        margins: {
                            top: 50,
                            bottom: 50,
                            left: 72,
                            right: 72
                        }
                    });
                r.reset = (() => r.font("Helvetica").fontSize(12).fillColor("black")), r.bold = (() => r.font("Helvetica-Bold")), r.fontSize(25).text(s.name, {
                    underline: !0
                }).reset(), r.text(`Test Session Started: ${k(s.createdAt).format("lll")}`), r.moveDown(), "READY" === n.status && r.fillColor("green").fontSize(25).bold().text("TEST SESSION OK").reset(), "FAILED" === n.status && r.fillColor("red").fontSize(25).bold().text("TEST SESSION FAILED").reset(), r.text(`${n.results.length} Test Case(s)`), r.fillColor("green").text(`${n.results.filter(e=>e.success).length} Test Case(s) succeeded`).reset(), r.fillColor("red").text(`${n.results.filter(e=>!e.success).length} Test Case(s) failed`).reset(), s.testProject && (r.moveDown(), r.font("Helvetica-Bold").text(`Test Project: ${s.testProject.name}`).reset(), s.testProject.description && r.text(s.testProject.description), s.testProject.tags && r.fillColor("darkgrey").text(s.testProject.tags.join(" | ")).reset()), s.chatbot && (r.moveDown(), r.font("Helvetica-Bold").text(`Chatbot Under Test: ${s.chatbot.name}`).reset(), s.chatbot.description && r.text(s.chatbot.description), s.chatbot.tags && r.fillColor("darkgrey").text(s.chatbot.tags.join(" | ")).reset()), a && a.forEach(e => {
                    r.moveDown(), r.font("Helvetica-Bold").text(`Test Set: ${e.name}`).reset(), e.description && r.text(e.description), e.scripts && r.text(`Scripts: ${e.scripts.length}`), e.repositories && e.repositories.forEach(e => {
                        r.text(`Repository: ${e.name}, ${e.gitbranch}`)
                    }), e.folders && e.folders.forEach(e => {
                        r.text(`Shared Folder: ${e.name}`)
                    }), e.excels && e.excels.forEach(e => {
                        r.text(`Excel File: ${e.name}, ${e.filename}`)
                    }), e.tags && r.fillColor("darkgrey").text(e.tags.join(" | ")).reset()
                });
                const o = r.bufferedPageRange();
                for (let e = o.start; e < o.start + o.count; e++) r.switchToPage(e), r.fontSize(8), r.image("media/botium-logo.png", r.page.width - 35, 10, {
                    width: 25
                }), r.text(`${s.name}, page ${e+1} of ${o.count}`, 200, r.page.height - 40, {
                    height: 25
                });
                return r.end(), new Promise(e => {
                    r.pipe(q(t => e({
                        ts: n,
                        output: t
                    })))
                })
            }
            if ("junit" === s) {
                const e = U.groupBy(n.results, e => e.testSet ? e.testSet.name : ""),
                    t = U.keys(e).map(t => {
                        const s = e[t];
                        return {
                            testsuite: [{
                                _attr: {
                                    name: t || "unnamed",
                                    tests: s.length,
                                    failures: s.filter(e => !e.success).length,
                                    time: s.reduce((e, t) => t.duration ? e + t.duration : e, 0) / 1e3
                                }
                            }]
                        }
                    }),
                    s = j({
                        testsuites: [{
                            _attr: {
                                name: n.name,
                                tests: n.results.length,
                                failures: n.results.filter(e => !e.success).length,
                                time: n.results.reduce((e, t) => t.duration ? e + t.duration : e, 0) / 1e3
                            }
                        }].concat(t)
                    }, {
                        declaration: !0
                    });
                return {
                    ts: n,
                    output: s
                }
            }
            if ("csv" === s) {
                delete n.results;
                const e = [];
                e.push(["testSessionId", "testSessionStatus", "testSessionName", "testCaseId", "testCaseName", "testCaseSource", "testCaseSuccess", "testCaseErr", "testCaseDuration", "testSetId", "testSetName", "testSetTags", "testSetRepository", "testSetRepositoryBranch", "testSetFolder", "testSetExcel", "testSetFilename"]);
                const t = (e, t) => {
                        t ? (e.push(t.id), e.push(t.testcaseName), e.push(Ga(t.testcaseSource)), e.push(t.success), e.push(Ga(t.err)), e.push(t.duration), t.testSet ? (e.push(t.testSet.id), e.push(t.testSet.name), e.push(t.testSet.tags && t.testSet.tags.join("|")), t.testSetRepository ? (e.push(t.testSetRepository.name), e.push(t.testSetRepository.gitbranch)) : e.push(null, null), t.testSetFolder ? e.push(t.testSetFolder.name) : e.push(null), t.testSetExcel ? e.push(t.testSetExcel.name) : e.push(null), e.push(t.testSetFilename)) : e.push(null, null, null, null, null, null, null, null)) : e.push(null, null, null, null, null, null, null, null, null, null, null, null, null, null)
                    },
                    s = [n.id, n.status, n.name];
                return n.results && n.results.length > 0 ? n.results.forEach(n => {
                    const a = s.slice(0);
                    t(a, n), e.push(a)
                }) : (t(s, null), e.push(s)), {
                    ts: n,
                    output: za(e)
                }
            }
            if ("jiracsv" === s) {
                const e = [];
                return e.push(["Build", "Date", "Summary", "Description"]), "FAILED" !== n.status && e.push([n.name, n.createdAt, `${n.name}: Botium Test Session failed`, `${n.results.filter(e=>!e.success).length} Test Cases failed of ${n.results.length}`]), {
                    ts: n,
                    output: za(e, ",")
                }
            }
        }, Ka = (e, t, s) => {
            const n = t.pubsub.asyncIterator("TEST_SESSION_PROGRESS");
            !async function() {
                for (;;) {
                    const {
                        value: a
                    } = await n.next();
                    if (a.testSessionProgress && a.testSessionProgress.id === e) {
                        const n = await t.db.query.testSession({
                            where: {
                                id: e
                            }
                        }, "{ id status }");
                        if (La(`Test Project ${e} got status: ${n.status}`), "READY" === n.status) return s();
                        if ("FAILED" === n.status) return s()
                    }
                }
            }()
        }, Qa = (e, t, s, n) => {
            const a = Va(s, "WAIT");
            "READY" !== e.status && "FAILED" !== e.status && "1" === a ? Ka(e.id, t, () => Ya(e.id, t, s, n)) : Ya(e.id, t, s, n)
        }, Za = (e, t, s) => {
            const n = Va(s, "CALLBACKURL"),
                a = Va(s, "CALLBACKMETHOD") || "POST",
                r = Va(s, "REPORTER");
            n && ("READY" !== e.status && "FAILED" !== e.status ? Ka(e.id, t, () => Wa(e.id, t, n, a, r)) : Wa(e.id, t, n, a, r))
        };
    var er = (e, t) => {
        const s = (e, s) => {
            (({
                ctxFactory: e,
                testProjectCode: t,
                req: s,
                res: n
            }) => {
                if (!Ha(s, n)) return;
                const a = e({
                        request: s
                    }),
                    r = Fa(a);
                a.db.query.testProject({
                    where: {
                        code: t
                    }
                }, "{ id name chatbot { id } testSets { id } deviceSets { id } agent { id } batchCount client { id } }").then(e => {
                    if (!e) throw new Error(`Test Project ${t} not found`);
                    const n = U.get(e, "client.id");
                    Ua(n, r.clients);
                    const o = Va(s, "BUILDID"),
                        i = Va(s, "BUILDCOMMENT"),
                        c = Va(s, "TAG"),
                        d = e => Object.keys(e).reduce((t, s) => (t.push({
                            name: s,
                            type: "STRING",
                            stringValue: e[s]
                        }), t), []),
                        l = s.body && s.body.CAPS && d(s.body.CAPS) || [],
                        u = s.body && s.body.SOURCES && d(s.body.SOURCES) || [],
                        p = s.body && s.body.ENVS && d(s.body.ENVS) || [],
                        h = {
                            name: o || e.name + " - Test Session",
                            description: i,
                            status: "PENDING",
                            tags: {
                                set: c ? U.isArray(c) ? c : [c] : []
                            },
                            chatbot: {
                                connect: {
                                    id: e.chatbot.id
                                }
                            },
                            testSets: {
                                connect: e.testSets && e.testSets.map(e => ({
                                    id: e.id
                                }))
                            },
                            deviceSets: {
                                connect: e.deviceSets && e.deviceSets.map(e => ({
                                    id: e.id
                                }))
                            },
                            testProject: {
                                connect: {
                                    id: e.id
                                }
                            },
                            capabilities: {
                                create: l
                            },
                            sources: {
                                create: u
                            },
                            envs: {
                                create: p
                            },
                            batchCount: e.batchCount,
                            bail: e.bail
                        };
                    return e.agent && (h.agent = {
                        connect: {
                            id: e.agent.id
                        }
                    }), La(`Creating Test Session ${JSON.stringify(h,null,2)}`), Ja(null, {
                        testSession: h
                    }, a, "{ id status }")
                }).then(e => {
                    Qa(e, a, s, n), Za(e, a, s)
                }).catch(e => {
                    La(`Test Project start error - ${t} - ${e}`), n.sendStatus(404)
                })
            })({
                testProjectCode: e.params.code,
                ctxFactory: t,
                req: e,
                res: s
            })
        };
        e.post("/api/triggerbuild/:code", s), e.get("/api/triggerbuild/:code", s), e.get("/api/build/:nameOrId", (e, s) => {
            (({
                ctxFactory: e,
                nameOrId: t,
                req: s,
                res: n
            }) => {
                if (!Ha(s, n)) return;
                const a = e({
                        request: s
                    }),
                    r = Fa(a);
                a.db.query.testSessions({
                    where: {
                        OR: [{
                            id: t
                        }, {
                            name: t
                        }]
                    },
                    orderBy: "createdAt_DESC",
                    first: 1
                }, "{ id name status client { id } }").then(e => {
                    if (!e) return n.sendStatus(404);
                    const t = e[0],
                        o = U.get(t, "client.id");
                    Ua(o, r.clients), Qa(t, a, s, n), Za(t, a, s)
                }).catch(e => {
                    La(`Test Session lookup error - ${t} - ${e}`), n.sendStatus(404)
                })
            })({
                nameOrId: e.params.nameOrId,
                ctxFactory: t,
                req: e,
                res: s
            })
        }), e.get("/api/log/:nameOrId", (e, s) => {
            (({
                ctxFactory: e,
                nameOrId: t,
                req: s,
                res: n
            }) => {
                const a = e({
                        request: s
                    }),
                    r = Fa(a);
                a.db.query.testSessions({
                    where: {
                        OR: [{
                            id: t
                        }, {
                            name: t
                        }]
                    },
                    orderBy: "createdAt_DESC",
                    first: 1
                }, "{ id name jobs { id logs { createdAt log } } client { id } }").then(e => {
                    if (!e) return n.sendStatus(404);
                    const t = e[0],
                        s = U.get(t, "client.id");
                    Ua(s, r.clients), n.set("Content-Type", "text/plain"), t.jobs && t.jobs.forEach(e => {
                        n.write(`Job Output (${e.id})\n`), e.logs && e.logs.forEach(e => {
                            n.write(e.createdAt + ": " + e.log + "\n")
                        }), n.write("\n\n"), n.write("##############################################################\n"), n.write("##############################################################\n"), n.write("##############################################################\n"), n.write("\n\n")
                    }), n.status(200).end()
                }).catch(e => {
                    La(`Test Session lookup error - ${t} - ${e}`), n.sendStatus(404)
                })
            })({
                nameOrId: e.params.nameOrId,
                ctxFactory: t,
                req: e,
                res: s
            })
        }), e.get("/api/joblog/:id", (e, s) => {
            (({
                ctxFactory: e,
                id: t,
                req: s,
                res: n
            }) => {
                const a = e({
                        request: s
                    }),
                    r = Fa(a);
                a.db.query.testSessionJob({
                    where: {
                        id: t
                    },
                    orderBy: "createdAt_ASC"
                }, "{ id logs { createdAt log } testSession { client { id } } }").then(e => {
                    if (!e) return n.sendStatus(404);
                    const t = U.get(e, "testSession.client.id");
                    Ua(t, r.clients), n.set("Content-Type", "text/plain"), e.logs && e.logs.forEach(e => {
                        n.write(e.createdAt + ": " + e.log + "\n")
                    }), n.status(200).end()
                }).catch(e => {
                    La(`Test Session Job lookup error - ${t} - ${e}`), n.sendStatus(404)
                })
            })({
                id: e.params.id,
                ctxFactory: t,
                req: e,
                res: s
            })
        }), e.get("/api/transcript/:nameOrId", (e, s) => {
            (({
                ctxFactory: e,
                nameOrId: t,
                req: s,
                res: n
            }) => {
                const a = e({
                        request: s
                    }),
                    r = Fa(a);
                a.db.query.testSessions({
                    where: {
                        OR: [{
                            id: t
                        }, {
                            name: t
                        }]
                    },
                    orderBy: "createdAt_DESC",
                    first: 1
                }, "{ id status name client { id } results { id testcaseName createdAt success err duration steps { step expected not actual stepDuration botDuration err } } }").then(e => {
                    if (!e) return n.sendStatus(404);
                    const t = e[0],
                        a = U.get(t, "client.id");
                    Ua(a, r.clients);
                    const o = Va(s, "REPORTER") || "json";
                    if (delete t.results, t.results && t.results.forEach(e => {
                            e.steps && e.steps.forEach(e => {
                                e.actual && U.isString(e.actual) && (e.actual = JSON.parse(e.actual)), e.expected && U.isString(e.expected) && (e.expected = JSON.parse(e.expected))
                            })
                        }), "json" === o) n.setHeader("Content-disposition", `attachment; filename="${L(t.name)}.json"`), n.status(200).send(t);
                    else if ("csv" === o) {
                        const e = [];
                        e.push(["testSessionId", "testSessionStatus", "testSessionName", "testCaseId", "testCaseName", "testCaseCreatedAt", "testCaseSuccess", "testCaseErr", "testCaseDuration", "convoStepIndex", "convoStepSender", "convoStepActual", "convoStepNot", "convoStepExpected", "convoStepDuration", "convoStepBotDuration", "convoStepErr"]);
                        const s = (e, t) => {
                                t ? (e.push(t.id), e.push(t.testcaseName), e.push(t.createdAt), e.push(t.success), e.push(Ga(t.err)), e.push(t.duration)) : e.push(null, null, null, null, null, null)
                            },
                            a = e => {
                                if ("me" === e.sender) {
                                    if (e.buttons && e.buttons.length > 0) return `BUTTON ${e.buttons[0].payload||e.buttons[0].text}`;
                                    if (e.media && e.media.length > 0) return `MEDIA ${e.media[0].mediaUri}`
                                }
                                return e.messageText
                            },
                            r = (e, t) => {
                                t ? (e.push(t.step), e.push(t.actual && t.actual.sender), e.push(t.actual && Ga(a(t.actual))), e.push(t.not), e.push(t.expected && Ga(a(t.expected))), e.push(t.stepDuration), e.push(t.botDuration), e.push(Ga(t.err))) : e.push(null, null, null, null, null, null, null, null)
                            },
                            o = [t.id, t.status, t.name];
                        t.results && t.results.length > 0 ? t.results.forEach(t => {
                            const n = o.slice(0);
                            s(n, t), t.steps && t.steps.length > 0 ? t.steps.forEach(t => {
                                const s = n.slice(0);
                                r(s, t), e.push(s)
                            }) : (r(n, null), e.push(n))
                        }) : (s(o, null), r(o, null), e.push(o));
                        const i = za(e);
                        n.setHeader("Content-disposition", `attachment; filename="${L(t.name)}.csv"`), n.status(200).send(i)
                    } else n.sendStatus(404).send("VALID REPORTER OPTIONS: json, csv");
                    n.status(200).end()
                }).catch(e => {
                    La(`Test Session lookup error - ${t} - ${e}`), n.sendStatus(404)
                })
            })({
                nameOrId: e.params.nameOrId,
                ctxFactory: t,
                req: e,
                res: s
            })
        })
    };
    const tr = F("botium-box-server-endpoints-performancebuild"),
        {
            isLoggedIn: sr,
            assertClient: nr
        } = tn,
        ar = (e, t) => {
            return e.map(e => `"${e.map(e=>U.isString(e)?e.replace(/"/g,'""'):e).join(`"${t||";"}"`)}"`).join("\r\n")
        },
        rr = (e, t) => e.query[t] || e.query[t.toLowerCase()] || e.body && e.body[t] || e.body && e.body[t.toLowerCase()] || e.headers[`X-BOTIUM-${t}`],
        or = ({
            ctxFactory: e,
            nameOrId: t,
            req: s,
            res: n
        }) => {
            if (!((e, t) => {
                    const s = (rr(e, "REPORTER") || "json").toLowerCase();
                    return "json" === s || "csv" === s || (t.sendStatus(404).send("VALID REPORTER OPTIONS: json, csv"), !1)
                })(s, n)) return;
            const a = e({
                    request: s
                }),
                r = sr(a);
            a.db.query.performanceTestSessions({
                where: {
                    OR: [{
                        id: t
                    }, {
                        name: t
                    }]
                },
                orderBy: "createdAt_DESC",
                first: 1
            }, "{ id name client { id } }").then(e => {
                if (!e) return n.sendStatus(404);
                const t = e[0],
                    o = U.get(t, "client.id");
                nr(o, r.clients), ir(t.id, a, s, n)
            }).catch(e => {
                tr(`Test Session lookup error - ${t} - ${e}`), n.sendStatus(404)
            })
        },
        ir = async (e, t, s, n) => {
            try {
                const a = (rr(s, "REPORTER") || "json").toLowerCase();
                if ("json" === a) {
                    const {
                        ts: s,
                        output: r
                    } = await cr(e, t, a);
                    n.setHeader("Content-Type", "application/json"), n.setHeader("Content-disposition", `attachment; filename="${L(s.name)}.json"`), n.status(200).send(r)
                } else if ("csv" === a) {
                    const {
                        ts: s,
                        output: r
                    } = await cr(e, t, a);
                    n.setHeader("Content-Type", "text/csv"), n.setHeader("Content-disposition", `attachment; filename="${L(s.name)}.csv"`), n.status(200).send(r)
                }
            } catch (t) {
                tr(`Test Session lookup error - ${e} - ${t}`), n.sendStatus(404)
            }
        }, cr = async (e, t, s) => {
            const n = await ce.findSimplePerformanceTestSessionResults(t.db, e);
            if (!n) throw new Error(`Test Session ${e} not found`);
            if ("json" === s) return n.results.map(e => ({
                execCount: e.execCount,
                execDurationMin: e.execDurationMin,
                execDurationMax: e.execDurationMax,
                execDurationSum: e.execDurationSum
            })), {
                ts: n,
                output: n
            };
            if ("csv" === s) {
                const e = [],
                    t = ["testSessionId", "testSessionName", "testResultId", "testResultJobId", "testResultStepIndex", "testResultStepStartAt", "testResultConvo", "execResultCount", "execResultDurationMin", "execResultDurationMax", "execResultDurationSum"];
                e.push(t);
                const s = (e, t) => {
                        tr(`result ${JSON.stringify(t)}`), t ? (e.push(t.id), e.push(t.job.id), e.push(t.stepIndex), e.push(t.stepStartAt), e.push(t.convo), e.push(t.execCount), e.push(t.execDurationMin), e.push(t.execDurationMax), e.push(t.execDurationSum)) : e.push(null, null, null, null, null, null, null, null), tr(`result line ${JSON.stringify(e)}`)
                    },
                    a = [n.id, n.name];
                return n.results && n.results.length > 0 ? n.results.forEach(t => {
                    const n = a.slice(0);
                    s(n, t), e.push(n)
                }) : (s(a, null), e.push(a)), {
                    ts: n,
                    output: ar(e)
                }
            }
        };
    const {
        hasPermission: dr
    } = en, lr = {
        "/api/testset/": "TESTSETS_SELECT",
        "/api/attachment/excel/": "TESTSETS_SELECT",
        "/api/attachment/screenshot/": "TESTSESSIONS_SELECT",
        "/api/triggerbuild/": "TESTSESSIONS_CREATE",
        "/api/build/": "TESTSESSIONS_REPORTS",
        "/api/performancebuild/": "PERFORMANCETESTSESSIONS_REPORTS",
        "/api/log/": "TESTSESSIONS_REPORTS",
        "/api/joblog/": "TESTSESSIONS_REPORTS",
        "/api/transcript/": "TESTSESSIONS_REPORTS"
    };
    var ur = async (e, t) => {
        await (async (e, t) => {
            const s = t();
            (await s.db.query.chatbots({
                where: {}
            }, " { id name capabilities { name type stringValue intValue booleanValue jsonValue } } ")).filter(e => e.capabilities && e.capabilities.filter(e => "CONTAINERMODE" === e.name && "fbpagereceiver" === e.stringValue).length > 0).forEach(t => {
                const n = {
                        app: e,
                        endpoint: "/api/fbproxy/" + t.capabilities.find(e => "FBPAGERECEIVER_ENDPOINT" === e.name).stringValue,
                        verifytoken: t.capabilities.find(e => "FBPAGERECEIVER_VERIFYTOKEN" === e.name).stringValue,
                        accesstoken: t.capabilities.find(e => "FBPAGERECEIVER_ACCESSTOKEN" === e.name).stringValue,
                        redisurl: s.queueSettings.redis
                    },
                    a = t.capabilities.find(e => "FBPAGERECEIVER_APPSECRET" === e.name);
                a && a.stringValue ? e.use(n.endpoint, _.json({
                    verify: Pa.bind(null, a.stringValue)
                })) : e.use(n.endpoint, _.json()), Aa(n), _a(`Started FB Proxy for chatbot ${t.id}/${t.name}, endpoint: ${n.endpoint}`)
            })
        })(e, t), e.use(_.json({
            limit: "50mb",
            extended: !0
        })), e.use(["/api/testset/*", "/api/attachment/*", "/api/performancebuild/*", "/api/build/*", "/api/triggerbuild/*", "/api/log/*", "/api/joblog/*", "/api/transcript/*"], ((e, t, s, n) => {
            if (!t.apiKey && !t.user) return s.sendStatus(401);
            for (const e in lr)
                if (t.baseUrl.startsWith(e)) {
                    if (t.user && !dr(t.user, lr[e])) return s.sendStatus(401);
                    if (t.apiKey && !dr(t.apiKey, lr[e])) return s.sendStatus(401)
                } return n()
        }).bind(null, t)), ((e, t) => {
            e.get("/api/testset/:id", async (e, s) => {
                const n = e.params.id,
                    a = t({
                        request: e
                    });
                try {
                    const e = Da(a),
                        t = await ka(a.db, n);
                    if (t) {
                        const n = U.get(t, "client.id");
                        Ma(n, e.clients);
                        const a = new D;
                        t.scripts && t.scripts.forEach(e => {
                            "SCRIPTING_TYPE_CONVO" === e.scriptType && a.addFile(`scripts/${e.name}.convo.txt`, Buffer.alloc(e.script.length, e.script)), "SCRIPTING_TYPE_PCONVO" === e.scriptType && a.addFile(`scripts/${e.name}.pconvo.txt`, Buffer.alloc(e.script.length, e.script)), "SCRIPTING_TYPE_UTTERANCES" === e.scriptType && a.addFile(`scripts/${e.name}.utterances.txt`, Buffer.alloc(e.script.length, e.script)), "SCRIPTING_TYPE_SCRIPTING_MEMORY" === e.scriptType && a.addFile(`scripts/${e.name}.scriptingmemory.txt`, Buffer.alloc(e.script.length, e.script))
                        });
                        const r = a.toBuffer();
                        s.writeHead(200, {
                            "Content-disposition": `attachment; filename="${t.name}.zip"`,
                            "Content-Length": r.length
                        }), s.end(r)
                    } else $a(`TestSet not found - ${n}`), s.sendStatus(404)
                } catch (e) {
                    $a(`TestSet lookup error - ${n} - ${e}`), s.sendStatus(404)
                }
            })
        })(e, t), ((e, t) => {
            e.get("/api/attachment/excel/:id", async (e, s) => {
                const n = e.params.id,
                    a = t({
                        request: e
                    });
                try {
                    const e = Ba(a),
                        t = await ce.getExcel(a.db, n);
                    if (t) {
                        const n = U.get(t, "testSet.client.id");
                        qa(n, e.clients);
                        const a = Buffer.from(t.filecontent, "base64");
                        s.writeHead(200, {
                            "Content-disposition": `attachment; filename="${t.filename}"`,
                            "Content-Length": a.length
                        }), s.end(a)
                    } else ja(`Excel not found - ${n}`), s.sendStatus(404)
                } catch (e) {
                    ja(`Excel lookup error - ${n} - ${e}`), s.sendStatus(404)
                }
            }), e.get("/api/attachment/screenshot/:id", async (e, s) => {
                const n = e.params.id,
                    a = t({
                        request: e
                    });
                try {
                    const e = Ba(a),
                        t = await ce.getAttachment(a.db, n);
                    if (t) {
                        const n = U.get(t, "testSessionTestCaseResult.testSession.client.id");
                        qa(n, e.clients);
                        const a = Buffer.from(t.base64, "base64");
                        s.writeHead(200, {
                            "Content-Disposition": `inline; filename="${t.name}"`,
                            "Content-Type": t.mimeType,
                            "Content-Length": a.length
                        }), s.end(a)
                    } else ja(`Attachment not found - ${n}`), s.sendStatus(404)
                } catch (e) {
                    ja(`Attachment lookup error - ${n} - ${e}`), s.sendStatus(404)
                }
            })
        })(e, t), er(e, t), ((e, t) => {
            e.get("/api/performancebuild/:nameOrId", (e, s) => {
                or({
                    nameOrId: e.params.nameOrId,
                    ctxFactory: t,
                    req: e,
                    res: s
                })
            })
        })(e, t), ((e, t) => {
            e.get("/api/version", (e, t) => {
                t.status(200).send(X)
            })
        })(e), ((e, t) => {
            e.get("/api/chatbot/:chatBotCode/zap/scan", async (e, s) => {
                const n = e.params.chatBotCode,
                    a = t(e),
                    r = await a.db.query.chatbot({
                        where: {
                            code: n
                        }
                    }, "{ id }").then(e => {
                        if (!e) throw new Error(`chatbot ${n} not found`);
                        return e
                    }).catch(e => e),
                    o = e.header("url"),
                    i = await ie.basicScan(o).then(e => [{
                        url: o,
                        scanId: parseInt(e.scan),
                        progress: 0
                    }]).then(e => (delete e.id, e)),
                    c = r.id;
                a.db.mutation.updateChatbot({
                    where: {
                        id: c
                    },
                    data: {
                        zapScans: {
                            create: i
                        }
                    }
                }, "{ id zapScans { id url scanId  progress } }").then(e => e.zapScans).then(e => e[e.length - 1]).then(e => {
                    s.status(200).send(e), ie.polling(e, a)
                }).catch(e => s.status(500).send(J.inspect(e)))
            }), e.get("/api/zap/:scanId/status", (e, t) => {
                const s = e.params.scanId;
                ie.getStatus(s).then(e => t.status(200).send(e)).catch(e => t.status(500).send(J.inspect(e)))
            }), e.get("/api/zap/:scanId/results", (e, t) => {
                const s = e.params.scanId;
                ie.getResults(s).then(e => t.status(200).send(e)).catch(e => t.status(500).send(J.inspect(e)))
            }), e.get("/api/zap/:scanId/fullResults", (e, t) => {
                const s = e.params.scanId;
                ie.getFullResults(s).then(e => t.status(200).send(e)).catch(e => t.status(500).send(J.inspect(e)))
            })
        })(e, t)
    };
    G.config(), K();
    const {
        GraphQLServer: pr
    } = N, {
        RedisPubSub: hr
    } = V, {
        Prisma: Sr
    } = H, {
        validateToken: mr
    } = zs, {
        ExtractQueueSettings: fr
    } = te, Tr = F("botium-box-server-index"), gr = () => new Sr({
        typeDefs: process.env.PRISMA_SCHEMA || "src/generated/prisma.graphql",
        endpoint: process.env.PRISMA_ENDPOINT,
        debug: process.env.PRISMA_DEBUG,
        secret: process.env.PRISMA_SECRET
    }), br = (e, t) => {
        e && console.log(e), t && console.log(t), process.exit(1)
    };
    let yr = fr();
    // yr.redis = {
    //     port: 16616,
    //     host: "redis-16616.c10.us-east-1-2.ec2.cloud.redislabs.com",
    //     auth: "1eAcDS0PJ4R4nvr2ewqq7nZiUKnOpc7d",
    //     db: 0
    // };
    //redis://example.com:1234?redis_option=value&redis_option=value
    //redis://:1eAcDS0PJ4R4nvr2ewqq7nZiUKnOpc7d@redis-16616.c10.us-east-1-2.ec2.cloud.redislabs.com:16616?auth=1eAcDS0PJ4R4nvr2ewqq7nZiUKnOpc7d
    Tr(`connecting to custom Botium queue '${JSON.stringify(dbredis)}'`);
    let dbredis = {};
    dbredis.prefix = "qbasic";
    dbredis.redis = {};
    dbredis.redis.port = 16616;
    dbredis.redis.host = "redis-16616.c10.us-east-1-2.ec2.cloud.redislabs.com";
    dbredis.redis.auth = "1eAcDS0PJ4R4nvr2ewqq7nZiUKnOpc7d";

    const Er = S.createQueue(dbredis);
    Er.setMaxListeners(1e3), Er.watchStuckJobs(), Er.on("error", e => {
        console.log(`ERROR on custom queue Server '${JSON.stringify(dbredis)}':`, e)
    }), process.env.BOTIUM_TEMPDIR = process.env.BOTIUM_TEMPDIR || "./botiumwork";
    try {
        o.sync(process.env.BOTIUM_TEMPDIR), Tr(`Using BOTIUM_TEMPDIR ${process.env.BOTIUM_TEMPDIR}`)
    } catch (e) {
        br(`ERROR verifying BOTIUM_TEMPDIR '${process.env.BOTIUM_TEMPDIR}':`, e)
    }
    process.env.TESTSETDIR = process.env.TESTSETDIR || "./testsets";
    try {
        o.sync(process.env.TESTSETDIR), Tr(`Using TESTSETDIR ${process.env.TESTSETDIR}`)
    } catch (e) {
        br(`ERROR verifying TESTSETDIR '${process.env.TESTSETDIR}':`, e)
    }
    Ht(gr());
    const wr = new hr({
        connection: yr.redis
    });
    wr.ee && wr.ee.setMaxListeners && wr.ee.setMaxListeners(0);
    const Cr = new Z(43200),
        vr = e => ({
            ...e || {},
            db: gr(),
            queueConnector: Er,
            queueSettings: yr,
            pubsub: wr,
            chartsCache: Cr
        });
    Tr(`Using Prisma Endpoint ${process.env.PRISMA_ENDPOINT}`);
    const Ir = new pr({
            typeDefs: process.env.GRAPHQL_SCHEMA || "./src/schema.graphql",
            resolvers: ha,
            resolverValidationOptions: {
                requireResolversForResolveType: !1
            },
            schemaDirectives: va,
            context: vr,
            middlewares: [async (e, t, s, n, a) => {
                try {
                    const r = await e(t, s, n, a);
                    return r instanceof Error && Tr(r), r
                } catch (e) {
                    throw Tr(e), e
                }
            }]
        }),
        Or = {
            port: process.env.PORT || 4e3,
            endpoint: "/graphql",
            subscriptions: {
                path: "/subscriptions",
                onConnect: async (e, t, s) => {
                    if (e.Authorization) {
                        return {
                            user: await mr(e.Authorization, gr())
                        }
                    }
                    throw new Error("Missing auth token!")
                },
                onDisconnect: (e, t) => {}
            },
            playground: "/playground"
        };
    (async () => {
        await kn.loadStrategy(vr), await xa(Ir.express, 0, vr), await ur(Ir.express, vr), Ir.start(Or, ({
            port: e
        }) => {
            const t = process.env.BOTIUMBOX_STATIC_PATH ? g.resolve(process.env.BOTIUMBOX_STATIC_PATH) : g.resolve(g.join(__dirname, "../../botium-box-client/build"));
            Ir.express.use(Y()), Ir.express.use("/", z.static(t)), console.log(`Server started, listening on port ${e} for incoming requests, static files served from ${t}`)
        })
    })(), new class {
        constructor(e) {
            this.ctxFactory = e
        }
        start() {
            const e = this.ctxFactory();
            e.queueConnector.process("agent.heartbeat", 1, (t, s) => {
                Rs("agent.heartbeat: " + JSON.stringify(t.data)), (async (e, t, s) => {
                    try {
                        const {
                            count: n
                        } = await e.db.mutation.updateManyAgents({
                            data: {
                                heartbeat: new Date(Date.now()).toISOString()
                            },
                            where: {
                                name: t.data.name
                            }
                        });
                        if (!(n > 0)) {
                            const e = `Agent ${t.data.name} not configured`;
                            return Is(e), s(e)
                        }
                        s()
                    } catch (e) {
                        s(e)
                    }
                })(e, t, s)
            }), e.queueConnector.process("agent.register", 1, (t, s) => {
                Rs("agent.register: " + JSON.stringify(t.data)), (async (e, t, s) => {
                    const n = process.env.BOTIUMBOX_AGENTREGISTRATION && "AUTO" === process.env.BOTIUMBOX_AGENTREGISTRATION || !0;
                    try {
                        let a = await ce.findAgentFromJobData(e.db, t);
                        if (!a) {
                            if (!n) {
                                const e = `Agent ${t.data.name} not configured`;
                                return Os(e), s(e)
                            }
                            Os(`Agent ${t.data.name} not yet registered, automatically registering.`), a = await e.db.mutation.createAgent({
                                data: {
                                    name: t.data.name
                                }
                            })
                        }
                        let r = await ce.findAgentFromName(e.db, "Default Agent");
                        const o = ce.combineBotiumCapabilities(ce.composeBotiumCapabilities(r && r.capabilities || []), ce.composeBotiumCapabilities(a.capabilities)),
                            i = {
                                debug: !!(a.debug || r && r.debug),
                                botium: {
                                    Capabilities: o
                                }
                            };
                        Os(`Agent ${t.data.name} registered, config: ${JSON.stringify(i)}`), s(null, i)
                    } catch (e) {
                        Os(`Agent ${t.data.name} registration failed: ${J.inspect(e)}`), s(e)
                    }
                })(e, t, s)
            }), e.queueConnector.process("box.createprocessingjobs", 1, (t, s) => {
                Rs("box.createprocessingjobs: " + JSON.stringify(t.data)), $s(e, t.data).then(() => s()).catch(s)
            }), e.queueConnector.process("box.createperformanceprocessingjobs", 1, (t, s) => {
                Rs("box.createperformanceprocessingjobs: " + JSON.stringify(t.data)), Ns(e, t.data).then(() => s()).catch(s)
            }), e.queueConnector.on("error", e => {
                Rs("ERROR connecting to queue:"), Rs(e)
            }), e.queueConnector.on("job failed attempt", (e, t) => {
                S.Job.get(e, (s, n) => {
                    s || (n = n.toJSON(), Rs(`Job ${e}/${n.type} failed attempt, ${JSON.stringify(n.attempts)} - Err: ${t}`))
                })
            }).on("job failed", (e, t) => {
                S.Job.get(e, (s, n) => {
                    s || (n = n.toJSON(), Rs(`Job ${e}/${n.type} failed finally, ${JSON.stringify(n.attempts)} - Err: ${t} - Job Data: ${JSON.stringify(n.data)}`))
                })
            }), e.queueConnector.process("process.progress", 1, async (t, s) => {
                try {
                    await js(e, t.data), s()
                } catch (e) {
                    s(e)
                }
            }), e.queueConnector.process("process.log", 1, async (t, s) => {
                try {
                    await ks(e, t.data), s()
                } catch (e) {
                    s(e)
                }
            }), e.queueConnector.process("process.ready.success", 1, async (t, s) => {
                Rs("process.ready.success: " + JSON.stringify(t.data));
                try {
                    await Ds(e, t.data), await Bs(e, t.data), s()
                } catch (e) {
                    s(e)
                }
            }), e.queueConnector.process("process.ready.failed", 1, async (t, s) => {
                Rs("process.ready.failed: " + JSON.stringify(t.data));
                try {
                    await Ms(e, t.data), await Bs(e, t.data), s()
                } catch (e) {
                    s(e)
                }
            }), e.queueConnector.process("performanceprocess.started", 1, async (t, s) => {
                Rs("performanceprocess.started: " + JSON.stringify(t.data));
                try {
                    await xs(e, t.data), s()
                } catch (e) {
                    s(e)
                }
            }), e.queueConnector.process("performanceprocess.progress", 1, async (t, s) => {
                Rs("performanceprocess.progress: " + JSON.stringify(t.data));
                try {
                    await As(e, t.data), s()
                } catch (e) {
                    s(e)
                }
            }), e.queueConnector.process("performanceprocess.ready.success", 1, async (t, s) => {
                Rs("performanceprocess.ready.success: " + JSON.stringify(t.data));
                try {
                    await _s(e, t.data), s()
                } catch (e) {
                    s(e)
                }
            }), e.queueConnector.process("performanceprocess.ready.failed", 1, async (t, s) => {
                Rs("performanceprocess.ready.failed " + JSON.stringify(t.data));
                try {
                    await Ps(e, t.data), s()
                } catch (e) {
                    s(e)
                }
            })
        }
    }(vr).start(), new class {
        constructor(e) {
            this.ctxFactory = e
        }
        start() {
            const e = this.ctxFactory();
            Gs(e)
        }
    }(vr).start(), is.startListeners(vr()), process.on("uncaughtException", e => {
        console.log("UNCAUGHTEXCEPTION", e), console.log(e.stack)
    }), process.on("warning", e => {
        Tr("WARNING", e)
    });
    return {}
});