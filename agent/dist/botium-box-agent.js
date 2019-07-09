! function(e, s) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = s(require("lodash"), require("path"), require("fs"), require("child_process"), require("mkdirp"), require("rimraf"), require("debug"), require("dotenv-flow"), require("os"), require("kue")) : "function" == typeof define && define.amd ? define(["lodash", "path", "fs", "child_process", "mkdirp", "rimraf", "debug", "dotenv-flow", "os", "kue"], s) : e.main = s(e.lodash, e.path, e.fs, e.child_process, e.mkdirp, e.rimraf, e.debug, e.dotenvFlow, e.os, e.kue)
}(this, function(e, s, o, t, r, n, i, a, c, d) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e, s = s && s.hasOwnProperty("default") ? s.default : s, o = o && o.hasOwnProperty("default") ? o.default : o, t = t && t.hasOwnProperty("default") ? t.default : t, r = r && r.hasOwnProperty("default") ? r.default : r, n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a, c = c && c.hasOwnProperty("default") ? c.default : c, d = d && d.hasOwnProperty("default") ? d.default : d;
    const p = {
        buildTarget: "COMMUNITY EDITION",
        buildBranch: "release/1.7.2",
        buildRevision: "10496eafe058947a3d402ac7eda45308e8110f8e",
        buildDate: "2019-06-27T00:02:53+02:00"
    };
    var l = () => {
            console.log("BOTIUM BOX - AGENT"), console.log(`BUILD_TARGET: ${p.buildTarget}`), console.log(`BUILD_BRANCH: ${p.buildBranch}`), console.log(`BUILD_REVISION: ${p.buildRevision}`), console.log(`BUILD_TIMESTAMP: ${p.buildDate}`), console.log(`BOTIUMBOX_QUEUE_REDISURL: ${process.env.BOTIUMBOX_QUEUE_REDISURL}`)
        },
        u = {
            prepareConvos: (e, s, o) => {
                const t = e.testSets.filter(e => e.expandConvos).length > 0,
                    r = e.testSets.filter(e => e.expandUtterancesToConvos).length > 0,
                    n = e.testSets.filter(e => e.expandScriptingMemory).length > 0;
                return r && (o("expanding utterances to convos ..."), s.compiler.ExpandUtterancesToConvos()), n && (o("expanding scripting memories to convos ..."), s.compiler.ExpandScriptingMemoryToConvos()), (t || r || n) && (o("expanding convos ..."), s.compiler.ExpandConvos()), o(`found ${s.compiler.convos.length} convos ...`), s.compiler.convos
            },
            merge: (s, o, t) => {
                const r = {};
                s.botium && s.botium.Capabilities && Object.assign(r, s.botium.Capabilities), o.botium && o.botium.Capabilities && Object.assign(r, o.botium.Capabilities);
                const n = {};
                s.botium && s.botium.Sources && Object.assign(n, s.botium.Sources), o.botium && o.botium.Sources && Object.assign(n, o.botium.Sources);
                const i = t ? e.cloneDeep(process.env) : {};
                return s.botium && s.botium.Envs && Object.assign(i, s.botium.Envs), o.botium && o.botium.Envs && Object.assign(i, o.botium.Envs), {
                    caps: r,
                    sources: n,
                    envs: i
                }
            },
            MESSAGE_TYPE: {
                CANCEL: "CANCEL",
                STOP: "STOP",
                CREATE_JOB: "CREATE_JOB",
                CREATE_JOB_COMPLETE: "CREATE_JOB_COMPLETE",
                CREATE_JOB_FAILED: "CREATE_JOB_FAILED",
                RESULT: "RESULT",
                LOG: "LOG"
            }
        };
    const f = t.fork,
        E = i("botium-box-worker-runtestcases-main"),
        g = i("botium-box-worker-runtestcases-main-worker"),
        {
            merge: T,
            MESSAGE_TYPE: m
        } = u,
        S = {},
        O = (e, s) => {
            S[e] && S[e].forEach(e => {
                e.send(s)
            })
        },
        b = (e, s) => {
            e.send(s)
        };
    var I = (e, {
            id: t,
            data: i
        }, a) => new Promise((c, d) => {
            const {
                envs: p
            } = T(e, i, !0);
            i.botium.Capabilities.ZAP_PROXY && (p.http_proxy = i.botium.Capabilities.ZAP_PROXY, p.https_proxy = i.botium.Capabilities.ZAP_PROXY);
            const l = [process.env.BOTIUM_TEMPDIR || "./botiumwork", `runtestcases-job-${t}`];
            E(`Creating directory ${l}`);
            const u = s.join(...l);
            r.sync(u), l.push("dataToWorker.json");
            const O = s.join(...l);
            o.writeFileSync(O, JSON.stringify({
                agentConfig: e,
                jobId: t,
                data: i
            }));
            const I = f(s.resolve(__dirname, process.env.BOTIUMBOX_AGENT_WORKER_FILE || "runtestcasesWorker.js"), [JSON.stringify(l)], {
                    env: p,
                    execArgv: ["--inspect=0"]
                }),
                $ = i.testSessionId;
            let _;
            S[$] || (S[$] = new Set), S[$].add(I), I.on("message", ({
                type: e,
                message: s,
                requestId: o
            }) => {
                e === m.CREATE_JOB ? a(s).on("complete", () => {
                    b(I, {
                        type: m.CREATE_JOB_COMPLETE,
                        requestId: o
                    })
                }).on("failed", e => {
                    d(new Error(`process.progress finally failed after retry attempts: ${e}, decr redis counter`)), b(I, {
                        type: m.CREATE_JOB_FAILED,
                        requestId: o
                    })
                }) : e === m.RESULT ? _ = s : e === m.LOG ? g(s) : E(`Unknown message type ${JSON.stringify(e)}`)
            }), I.on("exit", e => (E(`worker for job ${t} exited with code ${e}`), n(u, e => {
                e && E(`Failed rimraf ${u}: ${e}`)
            }), S[$].delete(I), 0 === S[$].length && delete S[$], 0 === e ? _ ? c(_) : d(new Error("Worker finished succesful but without result")) : d(new Error("Worker finished with error"))))
        }),
        $ = e => {
            O(e, {
                type: m.CANCEL
            })
        },
        _ = e => {
            O(e, {
                type: m.STOP
            })
        };
    const y = t.fork,
        U = i("botium-box-worker-runperformancetestcases"),
        R = i("botium-box-worker-runperformancetestcases-worker"),
        {
            merge: v,
            MESSAGE_TYPE: h
        } = u,
        B = {},
        P = (e, s) => {
            e.send(s)
        };
    var C = (e, {
            id: t,
            data: i
        }, a) => new Promise((c, d) => {
            const {
                envs: p
            } = v(e, i, !0), l = [process.env.BOTIUM_TEMPDIR || "./botiumwork", `runPerformanceTestcases-job-${t}`];
            U(`Creating directory ${l}`);
            const u = s.join(...l);
            r.sync(u), l.push("dataToWorker.json");
            const f = s.join(...l);
            o.writeFileSync(f, JSON.stringify({
                agentConfig: e,
                jobId: t,
                data: i
            }));
            const E = y(s.resolve(__dirname, process.env.BOTIUMBOX_AGENT_PERFORMANCE_WORKER_FILE || "runPerformanceTestcasesWorker.js"), [JSON.stringify(l)], {
                    env: p,
                    execArgv: ["--inspect=0"]
                }),
                g = i.performanceTestSessionId;
            B[g] || (B[g] = new Set), B[g].add(E), E.on("message", ({
                type: e,
                message: s,
                requestId: o
            }) => {
                e === h.CREATE_JOB ? a(s).on("complete", () => {
                    P(E, {
                        type: h.CREATE_JOB_COMPLETE,
                        requestId: o
                    })
                }).on("failed", e => {
                    d(new Error(`performanceprocess.progress finally failed after retry attempts: ${e}, decr redis counter`)), P(E, {
                        type: h.CREATE_JOB_FAILED,
                        requestId: o
                    })
                }) : e === h.LOG ? R(s) : U(`Unknown message type ${JSON.stringify(e)}`)
            }), E.on("exit", e => (U(`worker for job ${t} exited with code ${e}`), n(u, e => {
                e && U(`Failed rimraf ${u}: ${e}`)
            }), B[g].delete(E), 0 === B[g].length && delete B[g], 0 === e ? c() : d(new Error("Worker finished with error"))))
        }),
        N = e => {
            ((e, s) => {
                B[e] && B[e].forEach(e => {
                    e.send(s)
                })
            })(e, {
                type: h.CANCEL
            })
        };
    a.config(), l();
    const J = i("botium-box-worker"),
        w = (() => {
            if (process.env.BOTIUMBOX_AGENT_NAME) return process.env.BOTIUMBOX_AGENT_NAME;
            const e = c.hostname();
            return e && process.env.hasOwnProperty("BOTIUMBOX_AGENT_NUM") ? `${e}_${process.env.BOTIUMBOX_AGENT_NUM}` : e || "Default Agent"
        })(),
        A = process.env.BOTIUMBOX_AGENT_GROUP || "Default Group";
    J(`Connecting agent ${w} to group ${A} ...`);
    let M = {};
    if (process.env.BOTIUMBOX_QUEUE_SETTINGS) try {
        M = JSON.parse(process.env.BOTIUMBOX_QUEUE_SETTINGS), J(`Got queue settings '${JSON.stringify(M)}'`)
    } catch (e) {
        console.log(`ERROR parsing queue settings '${process.env.BOTIUMBOX_QUEUE_SETTINGS}':`), console.log(e), process.exit(1)
    } else process.env.BOTIUMBOX_QUEUE_PREFIX && (M.prefix = process.env.BOTIUMBOX_QUEUE_PREFIX), process.env.BOTIUMBOX_QUEUE_REDISURL && (M.redis = process.env.BOTIUMBOX_QUEUE_REDISURL);
    J(`connecting to Botium queue '${JSON.stringify(M)}'`);
    const x = process.env.hasOwnProperty("BOTIUMBOX_QUEUE_PROGRESS_RETRY_ATTEMPTS") ? process.env.BOTIUMBOX_QUEUE_PROGRESS_RETRY_ATTEMPTS : 5,
        L = process.env.hasOwnProperty("BOTIUMBOX_QUEUE_PROGRESS_RETRY_DELAY") ? process.env.BOTIUMBOX_QUEUE_PROGRESS_RETRY_DELAY : 1e4;
    J(`Using job progress retryAttempts: ${x}, retryDelay: ${L}`);
    const j = process.env.BOTIUMBOX_QUEUE_CONCURRENCY || 1,
        k = process.env.BOTIUMBOX_QUEUE_CONCURRENCY_PERFORMANCE || 1;
    let X = process.env.BOTIUMBOX_QUEUE_HEARTBEAT || 3e5;
    X > 0 && X < 5e3 && (X = 5e3);
    M.redis = {
        port: 16616,
        host: "redis-16616.c10.us-east-1-2.ec2.cloud.redislabs.com",
        auth: "1eAcDS0PJ4R4nvr2ewqq7nZiUKnOpc7d",
        db: 0
    };
    const G = d.createQueue(M);
    G.on("error", e => {
        console.log(`ERROR connecting to queue '${JSON.stringify(M)}':`), console.log(e), process.exit(1)
    });
    const D = (e, s) => G.create(e, s).removeOnComplete(!0).save(),
        q = e => {
            const {
                type: s,
                data: o
            } = e;
            return G.create(s, o).attempts(x).backoff({
                delay: L,
                type: "fixed"
            }).removeOnComplete(!0).save()
        };
    let Q = {};
    const F = e => {
        Q = e
    };
    J("Trying to register agent ..."), D("agent.register", {
        title: `register agent ${w} to group ${A}`,
        name: w,
        group: A
    }).on("failed", e => {
        console.log("ERROR registering agent:"), console.log(e), process.exit(1)
    }).on("complete", e => {
        J(`Registration completed with result '${JSON.stringify(e)}', now accepting processing jobs (concurrency ${j}, concurrencyPerformance, ${k}).`), F(e);
        const s = (e, s) => {
            const {
                testSessionId: o,
                testSessionName: t,
                testSessionJobId: r
            } = e.data;
            if (!o || !r) return s(new Error(`Processing Job ${e.id} failed, no testSessionId or testSessionJobId given.`));
            J(`Processing Job ${e.id} for Test Session ${o}/${t}, Job ${r}`);
            try {
                I(Q, e, q).then(n => {
                    J(`Processing Job ${e.id} finished with result:`), n && J(n), s(null, n), q({
                        type: "process.ready.success",
                        data: {
                            title: `Processing Job ${e.id} for Test Session ${o}/${t} ready`,
                            testSessionId: o,
                            testSessionName: t,
                            testSessionJobId: r,
                            jobId: e.id,
                            result: n
                        }
                    })
                }).catch(n => {
                    J(`Processing Job ${e.id} failed:`), J(n), s(n), q({
                        type: "process.ready.failed",
                        data: {
                            title: `Processing Job ${e.id} for Test Session ${o}/${t} failed`,
                            testSessionId: o,
                            testSessionName: t,
                            testSessionJobId: r,
                            jobId: e.id,
                            result: n.result,
                            err: `${n}`
                        }
                    })
                })
            } catch (n) {
                J(`Processing Job ${e.id} failed:`), J(n), s(n), q({
                    type: "process.ready.failed",
                    data: {
                        title: `Processing Job ${e.id} for Test Session ${o}/${t} failed`,
                        testSessionId: o,
                        testSessionName: t,
                        testSessionJobId: r,
                        jobId: e.id,
                        err: n
                    }
                })
            }
        };
        if (G.process(`process.run.${A}`, j, s), G.process(`process.run.${w}`, j, s), G.process("process.run", j, s), G.process(`process.cancel.${w}`, j, (e, s) => {
                if (!e.data || !e.data.testSessionId) return [J, s].forEach(e => e("Cancel Test Session event received, but no testSessionId given"));
                J(`Canceling Test Session ${e.data.testSessionId}/${e.data.testSessionName}`);
                try {
                    $(e.data.testSessionId), J(`Canceling Test Session ${e.data.testSessionId}/${e.data.testSessionName} finished.`), s()
                } catch (o) {
                    J(`Canceling Test Session Job ${e.data.testSessionId}/${e.data.testSessionName} failed:`), J(o), s(o)
                }
            }), G.process(`process.stop.${w}`, j, (e, s) => {
                if (!e.data || !e.data.testSessionId) return [J, s].forEach(e => e("Stop Test Session event received, but no testSessionId given"));
                J(`Stopping Test Session ${e.data.testSessionId}/${e.data.testSessionName}`);
                try {
                    _(e.data.testSessionId), J(`Stopping Test Session ${e.data.testSessionId}/${e.data.testSessionName} finished.`), s()
                } catch (o) {
                    J(`Stopping Test Session Job ${e.data.testSessionId}/${e.data.testSessionName} failed:`), J(o), s(o)
                }
            }), G.process(`agent.ping.${w}`, j, (e, s) => {
                s()
            }), G.process("performanceprocess.run", k, (e, s) => {
                const {
                    performanceTestSessionId: o,
                    performanceTestSessionName: t,
                    performanceTestSessionJobId: r
                } = e.data;
                if (!o || !r) return s(new Error(`Processing Job ${e.id} failed, no performanceTestSessionId or performanceTestSessionJobId given.`));
                J(`Processing Job ${e.id} for Test Session ${o}/${t}, Job ${r}`);
                try {
                    q({
                        type: "performanceprocess.started",
                        data: {
                            title: `Processing Job ${e.id} for Test Session ${o}/${t} started`,
                            performanceTestSessionId: o,
                            performanceTestSessionName: t,
                            performanceTestSessionJobId: r,
                            agentName: w,
                            jobId: e.id
                        }
                    }), C(Q, e, q).then(n => {
                        J(`Processing Job ${e.id} finished`), s(null, n), q({
                            type: "performanceprocess.ready.success",
                            data: {
                                title: `Processing Job ${e.id} for Test Session ${o}/${t} ready`,
                                performanceTestSessionId: o,
                                performanceTestSessionName: t,
                                performanceTestSessionJobId: r,
                                agent: w,
                                jobId: e.id,
                                result: n
                            }
                        })
                    }).catch(n => {
                        J(`Processing Job ${e.id} failed:`), J(n), s(n), q({
                            type: "performanceprocess.ready.failed",
                            data: {
                                title: `Processing Job ${e.id} for Test Session ${o}/${t} failed`,
                                performanceTestSessionId: o,
                                performanceTestSessionName: t,
                                performanceTestSessionJobId: r,
                                agent: w,
                                jobId: e.id,
                                result: n.result,
                                err: `${n}`
                            }
                        })
                    })
                } catch (o) {
                    J(`Processing Job ${e.id} failed:`), J(o), s(o), q("performanceprocess.ready.failed", (e.id, e.id))
                }
            }), G.process(`performanceprocess.cancel.${w}`, k, (e, s) => {
                if (!e.data || !e.data.performanceTestSessionId) return [J, s].forEach(e => e("Cancel Test Session event received, but no performanceTestSessionId given"));
                J(`Canceling Test Session ${e.data.performanceTestSessionId}/${e.data.performanceTestSessionName}`);
                try {
                    N(e.data.performanceTestSessionId, e), J(`Canceling Test Session ${e.data.performanceTestSessionId}/${e.data.performanceTestSessionName} finished.`), s()
                } catch (o) {
                    J(`Canceling Test Session Job ${e.data.performanceTestSessionId}/${e.data.performanceTestSessionName} failed:`), J(o), s(o)
                }
            }), G.process(`agent.reconfigure.${w}`, j, (e, s) => {
                J("Trying to reconfigure agent ..."), D("agent.register", {
                    title: `reconfigure agent ${w} for group ${A}`,
                    name: w,
                    group: A
                }).on("failed", e => {
                    J("ERROR reconfiguring agent:"), J(e), s(e)
                }).on("complete", e => {
                    J(`Reconfiguration completed with result '${JSON.stringify(e)}'.`), F(e), s()
                })
            }), X > 0) {
            const e = () => {
                J("sending heartbeat ..."), D("agent.heartbeat", {
                    title: `heartbeat from agent ${w} for group ${A}`,
                    name: w,
                    group: A
                }).on("complete", () => {
                    setTimeout(e, X)
                })
            };
            e()
        }
    }), process.on("uncaughtException", e => {
        console.log("Got an uncaughtException", e)
    });
    return {}
});