! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("util"), require("path"), require("slugify"), require("nodegit"), require("botium-core/src/scripting/Constants"), require("debug"), require("botium-core/src/Capabilities"), require("lodash"), require("fs"), require("p-queue"), require("delay"), require("botium-core"), require("botium-core/src/Fluent")) : "function" == typeof define && define.amd ? define(["util", "path", "slugify", "nodegit", "botium-core/src/scripting/Constants", "debug", "botium-core/src/Capabilities", "lodash", "fs", "p-queue", "delay", "botium-core", "botium-core/src/Fluent"], t) : e.main = t(e.util, e.path, e.slugify, e.nodegit, e.Constants, e.debug, e.Capabilities, e.lodash, e.fs, e.pQueue, e.delay, e.botiumCore, e.Fluent)
}(this, function(e, t, r, s, o, i, a, n, u, c, l, p, d) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t, r = r && r.hasOwnProperty("default") ? r.default : r, s = s && s.hasOwnProperty("default") ? s.default : s, o = o && o.hasOwnProperty("default") ? o.default : o, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a, n = n && n.hasOwnProperty("default") ? n.default : n, u = u && u.hasOwnProperty("default") ? u.default : u, c = c && c.hasOwnProperty("default") ? c.default : c, l = l && l.hasOwnProperty("default") ? l.default : l, p = p && p.hasOwnProperty("default") ? p.default : p, d = d && d.hasOwnProperty("default") ? d.default : d;
    i("botium-retrieve-all-test-cases");
    var m = {
        prepareConvos: (e, t, r) => {
            const s = e.testSets.filter(e => e.expandConvos).length > 0,
                o = e.testSets.filter(e => e.expandUtterancesToConvos).length > 0,
                i = e.testSets.filter(e => e.expandScriptingMemory).length > 0;
            return o && (r("expanding utterances to convos ..."), t.compiler.ExpandUtterancesToConvos()), i && (r("expanding scripting memories to convos ..."), t.compiler.ExpandScriptingMemoryToConvos()), (s || o || i) && (r("expanding convos ..."), t.compiler.ExpandConvos()), r(`found ${t.compiler.convos.length} convos ...`), t.compiler.convos
        },
        merge: (e, t, r) => {
            const s = {};
            e.botium && e.botium.Capabilities && Object.assign(s, e.botium.Capabilities), t.botium && t.botium.Capabilities && Object.assign(s, t.botium.Capabilities);
            const o = {};
            e.botium && e.botium.Sources && Object.assign(o, e.botium.Sources), t.botium && t.botium.Sources && Object.assign(o, t.botium.Sources);
            const i = r ? n.cloneDeep(process.env) : {};
            return e.botium && e.botium.Envs && Object.assign(i, e.botium.Envs), t.botium && t.botium.Envs && Object.assign(i, t.botium.Envs), {
                caps: s,
                sources: o,
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
    p.BotDriver;
    const {
        prepareConvos: b,
        merge: f,
        MESSAGE_TYPE: E
    } = m, g = e => {
        C(E.LOG, e)
    };
    let O = {};
    process.on("message", ({
        type: e,
        requestId: t
    }) => {
        switch (e) {
            case E.CANCEL:
                break;
            case E.CREATE_JOB_COMPLETE:
                O[t].resolve(), delete O[t];
                break;
            case E.CREATE_JOB_FAILED:
                O[t].reject(), delete O[t];
                break;
            default:
                g(`Unknown message type: ${e}`), process.exit(1)
        }
    });
    const C = (e, t, r) => {
        process.send({
            type: e,
            message: t,
            requestId: r
        })
    };
    let h, y, v;
    try {
        h = JSON.parse(process.argv[2])
    } catch (t) {
        g(`Init: Failed to parse args: ${process.argv[2]} - ${e.inspect(t)}!`), process.exit(1)
    }
    try {
        y = u.readFileSync(t.join(...h))
    } catch (t) {
        g(`Init: Error loading arg file ${h} - ${e.inspect(t)}!`), process.exit(1)
    }
    try {
        v = JSON.parse(y)
    } catch (t) {
        g(`Init: Error parsing arg file ${h} - ${e.inspect(t)}!`), process.exit(1)
    }(void 0).then(e => (C(E.RESULT, e), g("Exiting, worker finished"), Promise.all(Object.values(O).map(e => e.promise)).then(() => process.exit(0)))).catch(t => (g(`Exiting, error occured: ${e.inspect(t)}`), Promise.all(Object.values(O).map(e => e.promise)).then(() => process.exit(1))));
    return {}
});