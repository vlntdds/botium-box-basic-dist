! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("util"), require("path"), require("slugify"), require("nodegit"), require("botium-core/src/scripting/Constants"), require("debug"), require("botium-core/src/Capabilities"), require("lodash"), require("fs"), require("intercept-stdout"), require("botium-core")) : "function" == typeof define && define.amd ? define(["util", "path", "slugify", "nodegit", "botium-core/src/scripting/Constants", "debug", "botium-core/src/Capabilities", "lodash", "fs", "intercept-stdout", "botium-core"], t) : e.main = t(e.util, e.path, e.slugify, e.nodegit, e.Constants, e.debug, e.Capabilities, e.lodash, e.fs, e.interceptStdout, e.botiumCore)
}(this, function(e, t, s, o, r, n, a, c, i, l, u) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t, s = s && s.hasOwnProperty("default") ? s.default : s, o = o && o.hasOwnProperty("default") ? o.default : o, r = r && r.hasOwnProperty("default") ? r.default : r, n = n && n.hasOwnProperty("default") ? n.default : n, a = a && a.hasOwnProperty("default") ? a.default : a, c = c && c.hasOwnProperty("default") ? c.default : c, i = i && i.hasOwnProperty("default") ? i.default : i, l = l && l.hasOwnProperty("default") ? l.default : l, u = u && u.hasOwnProperty("default") ? u.default : u;
    const T = n("botium-retrieve-all-test-cases");
    var p = {
        prepareConvos: (e, t, s) => {
            const o = e.testSets.filter(e => e.expandConvos).length > 0,
                r = e.testSets.filter(e => e.expandUtterancesToConvos).length > 0,
                n = e.testSets.filter(e => e.expandScriptingMemory).length > 0;
            return r && (s("expanding utterances to convos ..."), t.compiler.ExpandUtterancesToConvos()), n && (s("expanding scripting memories to convos ..."), t.compiler.ExpandScriptingMemoryToConvos()), (o || r || n) && (s("expanding convos ..."), t.compiler.ExpandConvos()), s(`found ${t.compiler.convos.length} convos ...`), t.compiler.convos
        },
        merge: (e, t, s) => {
            const o = {};
            e.botium && e.botium.Capabilities && Object.assign(o, e.botium.Capabilities), t.botium && t.botium.Capabilities && Object.assign(o, t.botium.Capabilities);
            const r = {};
            e.botium && e.botium.Sources && Object.assign(r, e.botium.Sources), t.botium && t.botium.Sources && Object.assign(r, t.botium.Sources);
            const n = s ? c.cloneDeep(process.env) : {};
            return e.botium && e.botium.Envs && Object.assign(n, e.botium.Envs), t.botium && t.botium.Envs && Object.assign(n, t.botium.Envs), {
                caps: o,
                sources: r,
                envs: n
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
    const m = u.BotDriver,
        {
            prepareConvos: E,
            merge: h,
            MESSAGE_TYPE: d
        } = p,
        S = e => {
            _(d.LOG, e)
        };
    let C = !1,
        g = !1,
        f = 0,
        O = {};
    process.on("message", ({
        type: e,
        requestId: t
    }) => {
        switch (e) {
            case d.CANCEL:
                C = !0;
                break;
            case d.STOP:
                g = !0;
                break;
            case d.CREATE_JOB_COMPLETE:
                O[t].resolve(), delete O[t];
                break;
            case d.CREATE_JOB_FAILED:
                O[t].reject(), delete O[t];
                break;
            default:
                S(`Unknown message type: ${e}`), process.exit(1)
        }
    });
    const b = (e, t) => {
            const s = {
                requestId: ++f
            };
            O[f] = s;
            const o = new Promise((o, r) => {
                _(d.CREATE_JOB, {
                    type: e,
                    data: t
                }, s.requestId), s.resolve = o, s.reject = r
            });
            return s.promise = o, o
        },
        _ = (e, t, s) => {
            process.send({
                type: e,
                message: t,
                requestId: s
            })
        };
    let I, P, R;
    try {
        I = JSON.parse(process.argv[2])
    } catch (t) {
        S(`Init: Failed to parse args: ${process.argv[2]} - ${e.inspect(t)}!`), process.exit(1)
    }
    try {
        P = i.readFileSync(t.join(...I))
    } catch (t) {
        S(`Init: Error loading arg file ${I} - ${e.inspect(t)}!`), process.exit(1)
    }
    try {
        R = JSON.parse(P)
    } catch (t) {
        S(`Init: Error parsing arg file ${I} - ${e.inspect(t)}!`), process.exit(1)
    }(({
        agentConfig: t,
        jobId: s,
        data: o
    }) => {
        const {
            testSessionId: n,
            testSessionName: c,
            testSessionJobId: i
        } = o, u = {
            unhook: null
        }, p = () => {
            u.unhook && (u.unhook(), u.unhook = null)
        };
        return new Promise((p, d) => {
            u.unhook = l(e => {
                if (t.debug) {
                    const t = e.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");
                    b("process.log", {
                        testSessionId: n,
                        testSessionName: c,
                        testSessionJobId: i,
                        log: t
                    })
                }
                return e
            }), S(`Started processing, JobId #${s}.`);
            const {
                caps: f,
                sources: O,
                envs: _
            } = h(t, o, !1), I = new m(f, O, _), P = I.BuildFluent();
            P.compiler = I.BuildCompiler(), I._validate().then(() => new Promise((t, s) => {
                Promise.all(o.testSets.map(t => ((t, s, o) => {
                    const {
                        excelHasConvos: n,
                        excelHasPartialConvos: c,
                        excelHasUtterances: i,
                        excelWorksheetsConvos: l,
                        excelWorksheetsPartialConvos: u,
                        excelWorksheetsUtterances: p,
                        excelStartRow: m,
                        excelStartCol: E
                    } = t;
                    n && l && (s.caps[a.SCRIPTING_XLSX_SHEETNAMES] = l), c && u && (s.caps[a.SCRIPTING_XLSX_SHEETNAMES_PCONVOS] = u), i && p && (s.caps[a.SCRIPTING_XLSX_SHEETNAMES_UTTERANCES] = p), isNaN(m) || (s.caps[a.SCRIPTING_XLSX_STARTROW] = m), isNaN(E) || (s.caps[a.SCRIPTING_XLSX_STARTCOL] = E), t.convos && t.convos.forEach(o => {
                        let n = [];
                        try {
                            o.format === r.SCRIPTING_FORMAT_TXT && (n = s.Compile(o.content, r.SCRIPTING_FORMAT_TXT, r.SCRIPTING_TYPE_CONVO)), n && n.forEach(e => {
                                e.sourceTag = o.sourceTag
                            })
                        } catch (s) {
                            throw T(s), new Error(`${t.name}: Convo Script compilation failed: ${e.inspect(s)}`)
                        }
                    }), t.pconvos && t.pconvos.forEach(o => {
                        let n = [];
                        try {
                            o.format === r.SCRIPTING_FORMAT_TXT && (n = s.Compile(o.content, r.SCRIPTING_FORMAT_TXT, r.SCRIPTING_TYPE_PCONVO)), n && n.forEach(e => {
                                e.sourceTag = o.sourceTag
                            })
                        } catch (s) {
                            throw T(s), new Error(`${t.name}: Partial Convo Script compilation failed: ${e.inspect(s)}`)
                        }
                    }), t.utterances && t.utterances.forEach(o => {
                        let n = [];
                        try {
                            o.format === r.SCRIPTING_FORMAT_TXT && (n = s.Compile(o.content, r.SCRIPTING_FORMAT_TXT, r.SCRIPTING_TYPE_UTTERANCES)), n && n.forEach(e => {
                                e.sourceTag = o.sourceTag
                            })
                        } catch (s) {
                            throw T(s), new Error(`${t.name}: Utterance script compilation failed: ${e.inspect(s)}`)
                        }
                    }), t.scriptingMemories && t.scriptingMemories.forEach(o => {
                        let n = [];
                        try {
                            o.format === r.SCRIPTING_FORMAT_TXT && (n = s.Compile(o.content, r.SCRIPTING_FORMAT_TXT, r.SCRIPTING_TYPE_SCRIPTING_MEMORY)), n && n.forEach(e => {
                                e.sourceTag = o.sourceTag
                            })
                        } catch (s) {
                            throw T(s), new Error(`${t.name}: Scripting Memory script compilation failed: ${e.inspect(s)}`)
                        }
                    }), t.folders && t.folders.forEach(o => {
                        try {
                            const {
                                convos: r,
                                pconvos: n,
                                utterances: a
                            } = s.ReadScriptsFromDirectory(o.path, o.globFilter);
                            r && r.forEach(e => {
                                e.sourceTag = Object.assign({}, e.sourceTag, o.sourceTag)
                            }), n && n.forEach(e => {
                                e.sourceTag = Object.assign({}, e.sourceTag, o.sourceTag)
                            }), a && a.forEach(e => {
                                e.sourceTag = Object.assign({}, e.sourceTag, o.sourceTag)
                            })
                        } catch (s) {
                            throw T(s), new Error(`${t.name}: Folder ${o} script compilation failed: ${e.inspect(s)}`)
                        }
                    });
                    let h = Promise.resolve();
                    t.excels && t.excels.length > 0 && (h = Promise.all(t.excels.map(({
                        id: e,
                        filename: t,
                        filecontent: o,
                        sourceTag: a
                    }) => new Promise(e => {
                        const t = Buffer.from(o, "base64");
                        let l = [],
                            u = [],
                            T = [];
                        n && (l = s.Compile(t, r.SCRIPTING_FORMAT_XSLX, r.SCRIPTING_TYPE_CONVO)), c && (u = s.Compile(t, r.SCRIPTING_FORMAT_XSLX, r.SCRIPTING_TYPE_PCONVO)), i && (T = s.Compile(t, r.SCRIPTING_FORMAT_XSLX, r.SCRIPTING_TYPE_UTTERANCES)), l && l.forEach(e => {
                            e.sourceTag = Object.assign({}, e.sourceTag, a)
                        }), u && u.forEach(e => {
                            e.sourceTag = Object.assign({}, e.sourceTag, a)
                        }), T && T.forEach(e => {
                            e.sourceTag = Object.assign({}, e.sourceTag, a)
                        }), e()
                    }))));
                    let d = Promise.resolve();
                    return Promise.all([d, h])
                })(t, P.compiler, I.tempDirectory))).then(() => E(o, P, S)).then(e => {
                    t(e.reduce((e, t) => e.concat(t), []))
                }).catch(s)
            })).then(() => {
                const e = o.batchNum || 1,
                    t = o.batchCount || 1,
                    s = Math.ceil(P.compiler.convos.length / t),
                    r = s * (e - 1),
                    a = Math.min(r + s, P.compiler.convos.length) - 1,
                    l = a - r + 1,
                    u = {
                        batchNum: e,
                        totalCount: 0,
                        failedCount: 0,
                        successCount: 0
                    };
                S(`batchNum: ${e} batchCount: ${t} convosPerBatch: ${s} batchStart: ${r} batchEnd: ${a} batchLength: ${l}`);
                for (let t = r; t <= a; t++) {
                    const T = t,
                        p = P.compiler.convos[T];
                    let m = null;
                    const E = [],
                        h = (e, t) => {
                            t.attachments && E.push(...t.attachments)
                        },
                        d = (e, t) => {
                            t.attachments && E.push(...t.attachments)
                        },
                        f = (e, t) => {
                            E.push(t)
                        },
                        O = (e, t) => {
                            t && (p.sourceTag = Object.assign({}, p.sourceTag, t))
                        },
                        _ = () => {
                            I.eventEmitter.removeListener("MESSAGE_SENTTOBOT", h), I.eventEmitter.removeListener("MESSAGE_RECEIVEDFROMBOT", d), I.eventEmitter.removeListener("MESSAGE_ATTACHMENT", f), I.eventEmitter.removeListener("CONTAINER_STARTED", O)
                        },
                        R = () => {
                            I.on("MESSAGE_SENTTOBOT", h), I.on("MESSAGE_RECEIVEDFROMBOT", d), I.on("MESSAGE_ATTACHMENT", f), I.on("CONTAINER_STARTED", O)
                        };
                    let v = null;
                    P.Call(() => {
                        if (C) throw new Error("Test Session cancelled")
                    }), P.Call(R).Start(), P.Call(() => new Promise(e => {
                        if (C) S(`Test Session cancelled, skipping Convo "${p.header.name}", Index ${T}, ${T-r} from ${s}`), e();
                        else if (g) S(`Test Session stopped, skipping Convo "${p.header.name}", Index ${T}, ${T-r} from ${s}`), e();
                        else {
                            S(`Running Convo "${p.header.name}", Index ${T}, ${T-r+1} from ${l}`);
                            try {
                                return p.Run(P.container).then(t => {
                                    S(`Running Convo "${p.header.name}" completed successfully.`), m = t, e()
                                }).catch(t => {
                                    S(`Running Convo "${p.header.name}" failed: ${t}.`), m = t.transcript, v = t, e()
                                })
                            } catch (t) {
                                v = t, e()
                            }
                        }
                    })), P.Stop().Call(_), P.Call(() => {
                        if (C) throw new Error("Test Session cancelled")
                    }), P.Call(() => new Promise((t, h) => C ? t() : g ? t() : (m && (m.err = m.err ? m.err.message ? m.err.message : JSON.stringify(m.err) : null, m.steps && m.steps.forEach(e => {
                        e.err = e.err ? e.err.message ? e.err.message : JSON.stringify(e.err) : null
                    })), u.totalCount++, v ? u.failedCount++ : u.successCount++, null !== v && o.bail && (g = !0), void b("process.progress", {
                        testSessionId: n,
                        testSessionName: c,
                        testSessionJobId: i,
                        currentBatchIndex: T,
                        batchNum: e,
                        batchStart: r,
                        batchEnd: a,
                        batchLength: l,
                        convosPerBatch: s,
                        progress: Math.round((T - r + 1) / l * 100),
                        testcase: p.header.name,
                        source: p.toString(),
                        sourceTag: p.sourceTag,
                        transcript: m,
                        attachments: E,
                        success: null === v,
                        err: v ? v.message ? v.message : JSON.stringify(v) : null,
                        stopTestSession: null !== v && o.bail
                    }).then(e => {
                        t(e)
                    }).catch(e => {
                        h(e)
                    }))))
                }
                P.Clean(), P.Exec().then(() => p(u)).catch(e => {
                    P.container ? (S(`Test Session Run failed (${e}), doing additional BotDriver Clean.`), P.container.Clean().catch(e => S(e)).then(() => {
                        e.result = u, d(e)
                    })) : (S(`Test Session Run failed (${e}).`), d(e))
                })
            }).catch(d)
        }).then(e => (p(), e)).catch(e => {
            throw p(), e
        })
    })(R).then(e => (_(d.RESULT, e), Promise.all(Object.values(O).map(e => e.promise)).then(() => process.exit(0)))).catch(() => Promise.all(Object.values(O).map(e => e.promise)).then(() => process.exit(1)));
    return {}
});