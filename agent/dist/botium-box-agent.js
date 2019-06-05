!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s(require("path"),require("child_process"),require("debug"),require("dotenv-flow"),require("os"),require("kue")):"function"==typeof define&&define.amd?define(["path","child_process","debug","dotenv-flow","os","kue"],s):e.main=s(e.path,e.child_process,e.debug,e.dotenvFlow,e.os,e.kue)}(this,function(e,s,o,t,n,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,s=s&&s.hasOwnProperty("default")?s.default:s,o=o&&o.hasOwnProperty("default")?o.default:o,t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;const i={buildTarget:"COMMUNITY EDITION",buildBranch:"feature/BOT-595-box-test-cases-should-be-execute",buildRevision:"17e99b526a4dae53d87b2f82489357dcd7bebe7e",buildDate:"2019-06-05T22:19:21+02:00"};var a=()=>{console.log("BOTIUM BOX - AGENT"),console.log(`BUILD_TARGET: ${i.buildTarget}`),console.log(`BUILD_BRANCH: ${i.buildBranch}`),console.log(`BUILD_REVISION: ${i.buildRevision}`),console.log(`BUILD_TIMESTAMP: ${i.buildDate}`)},c={prepareConvos:(e,s,o)=>{const t=e.testSets.filter(e=>e.expandConvos).length>0,n=e.testSets.filter(e=>e.expandUtterancesToConvos).length>0,r=e.testSets.filter(e=>e.expandScriptingMemory).length>0;return n&&(o("expanding utterances to convos ..."),s.compiler.ExpandUtterancesToConvos()),r&&(o("expanding scripting memories to convos ..."),s.compiler.ExpandScriptingMemoryToConvos()),(t||n||r)&&(o("expanding convos ..."),s.compiler.ExpandConvos()),o(`found ${s.compiler.convos.length} convos ...`),s.compiler.convos},merge:(e,s,o)=>{const t={};e.botium&&e.botium.Capabilities&&Object.assign(t,e.botium.Capabilities),s.botium&&s.botium.Capabilities&&Object.assign(t,s.botium.Capabilities);const n={};e.botium&&e.botium.Sources&&Object.assign(n,e.botium.Sources),s.botium&&s.botium.Sources&&Object.assign(n,s.botium.Sources);const r=o?process.env:{};return e.botium&&e.botium.Envs&&Object.assign(r,e.botium.Envs),s.botium&&s.botium.Envs&&Object.assign(r,s.botium.Envs),{caps:t,sources:n,envs:r}},MESSAGE_TYPE:{CANCEL:"CANCEL",STOP:"STOP",CREATE_JOB:"CREATE_JOB",CREATE_JOB_COMPLETE:"CREATE_JOB_COMPLETE",CREATE_JOB_FAILED:"CREATE_JOB_FAILED",RESULT:"RESULT",LOG:"LOG"}};const d=s.fork,p=o("botium-box-worker-runtestcases-main"),l=o("botium-box-worker-runtestcases-main-worker"),{merge:u,MESSAGE_TYPE:f}=c,E={},g=(e,s)=>{E[e]&&E[e].forEach(e=>{e.send(s)})},S=(e,s)=>{e.send(s)};var T=(s,{id:o,data:t},n)=>new Promise((r,i)=>{const{envs:a}=u(s,t,!0),c=d(e.resolve(__dirname,process.env.BOTIUMBOX_AGENT_WORKER_FILE||"runtestcasesWorker.js"),[JSON.stringify({agentConfig:s,jobId:o,data:t})],{env:a,execArgv:["--inspect=0"]}),g=t.testSessionId;let T;E[g]||(E[g]=new Set),E[g].add(c),c.on("message",({type:e,message:s,requestId:o})=>{e===f.CREATE_JOB?n(s).on("complete",()=>{S(c,{type:f.CREATE_JOB_COMPLETE,requestId:o})}).on("failed",e=>{i(new Error(`process.progress finally failed after retry attempts: ${e}, decr redis counter`)),S(c,{type:f.CREATE_JOB_FAILED,requestId:o})}):e===f.RESULT?T=s:e===f.LOG?l(s):p(`Unknown message type ${JSON.stringify(e)}`)}),c.on("exit",e=>(p(`worker for job ${o} exited with code ${e}`),E[g].delete(c),0===E[g].length&&delete E[g],0===e?T?r(T):i(new Error("Worker finished succesful but without result")):i(new Error("Worker finished with error"))))}),m=e=>{g(e,{type:f.CANCEL})},O=e=>{g(e,{type:f.STOP})};const b=s.fork,I=o("botium-box-worker-runperformancetestcases"),$=o("botium-box-worker-runperformancetestcases-worker"),{merge:_,MESSAGE_TYPE:v}=c,R={},U=(e,s)=>{e.send(s)};var y=(s,{id:o,data:t},n)=>new Promise((r,i)=>{const{envs:a}=_(s,t,!0),c=b(e.resolve(__dirname,process.env.BOTIUMBOX_AGENT_PERFORMANCE_WORKER_FILE||"runPerformanceTestcasesWorker.js"),[JSON.stringify({agentConfig:s,jobId:o,data:t})],{env:a,execArgv:["--inspect=0"]}),d=t.performanceTestSessionId;R[d]||(R[d]=new Set),R[d].add(c),c.on("message",({type:e,message:s,requestId:o})=>{e===v.CREATE_JOB?n(s).on("complete",()=>{U(c,{type:v.CREATE_JOB_COMPLETE,requestId:o})}).on("failed",e=>{i(new Error(`performanceprocess.progress finally failed after retry attempts: ${e}, decr redis counter`)),U(c,{type:v.CREATE_JOB_FAILED,requestId:o})}):e===v.LOG?$(s):I(`Unknown message type ${JSON.stringify(e)}`)}),c.on("exit",e=>(I(`worker for job ${o} exited with code ${e}`),R[d].delete(c),0===R[d].length&&delete R[d],0===e?r():i(new Error("Worker finished with error"))))}),B=e=>{((e,s)=>{R[e]&&R[e].forEach(e=>{e.send(s)})})(e,{type:v.CANCEL})};t.config(),a();const h=o("botium-box-worker"),C=(()=>{if(process.env.BOTIUMBOX_AGENT_NAME)return process.env.BOTIUMBOX_AGENT_NAME;const e=n.hostname();return e&&process.env.hasOwnProperty("BOTIUMBOX_AGENT_NUM")?`${e}_${process.env.BOTIUMBOX_AGENT_NUM}`:e||"Default Agent"})(),N=process.env.BOTIUMBOX_AGENT_GROUP||"Default Group";h(`Connecting agent ${C} to group ${N} ...`);let J={};if(process.env.BOTIUMBOX_QUEUE_SETTINGS)try{J=JSON.parse(process.env.BOTIUMBOX_QUEUE_SETTINGS),h(`Got queue settings '${JSON.stringify(J)}'`)}catch(e){console.log(`ERROR parsing queue settings '${process.env.BOTIUMBOX_QUEUE_SETTINGS}':`),console.log(e),process.exit(1)}else process.env.BOTIUMBOX_QUEUE_PREFIX&&(J.prefix=process.env.BOTIUMBOX_QUEUE_PREFIX),process.env.BOTIUMBOX_QUEUE_REDISURL&&(J.redis=process.env.BOTIUMBOX_QUEUE_REDISURL);h(`connecting to Botium queue '${JSON.stringify(J)}'`);const P=process.env.hasOwnProperty("BOTIUMBOX_QUEUE_PROGRESS_RETRY_ATTEMPTS")?process.env.BOTIUMBOX_QUEUE_PROGRESS_RETRY_ATTEMPTS:5,A=process.env.hasOwnProperty("BOTIUMBOX_QUEUE_PROGRESS_RETRY_DELAY")?process.env.BOTIUMBOX_QUEUE_PROGRESS_RETRY_DELAY:1e4;h(`Using job progress retryAttempts: ${P}, retryDelay: ${A}`);const w=process.env.BOTIUMBOX_QUEUE_CONCURRENCY||1,M=process.env.BOTIUMBOX_QUEUE_CONCURRENCY_PERFORMANCE||1;let x=process.env.BOTIUMBOX_QUEUE_HEARTBEAT||3e5;x>0&&x<5e3&&(x=5e3);const L=r.createQueue(J);L.on("error",e=>{console.log(`ERROR connecting to queue '${JSON.stringify(J)}':`),console.log(e),process.exit(1)});const G=(e,s)=>L.create(e,s).removeOnComplete(!0).save(),X=e=>{const{type:s,data:o}=e;return L.create(s,o).attempts(P).backoff({delay:A,type:"fixed"}).removeOnComplete(!0).save()};let k={};const j=e=>{k=e};h("Trying to register agent ..."),G("agent.register",{title:`register agent ${C} to group ${N}`,name:C,group:N}).on("failed",e=>{console.log("ERROR registering agent:"),console.log(e),process.exit(1)}).on("complete",e=>{h(`Registration completed with result '${JSON.stringify(e)}', now accepting processing jobs (concurrency ${w}, concurrencyPerformance, ${M}).`),j(e);const s=(e,s)=>{const{testSessionId:o,testSessionName:t,testSessionJobId:n}=e.data;if(!o||!n)return s(new Error(`Processing Job ${e.id} failed, no testSessionId or testSessionJobId given.`));h(`Processing Job ${e.id} for Test Session ${o}/${t}, Job ${n}`);try{T(k,e,X).then(r=>{h(`Processing Job ${e.id} finished with result:`),r&&h(r),s(null,r),X({type:"process.ready.success",data:{title:`Processing Job ${e.id} for Test Session ${o}/${t} ready`,testSessionId:o,testSessionName:t,testSessionJobId:n,jobId:e.id,result:r}})}).catch(r=>{h(`Processing Job ${e.id} failed:`),h(r),s(r),X({type:"process.ready.failed",data:{title:`Processing Job ${e.id} for Test Session ${o}/${t} failed`,testSessionId:o,testSessionName:t,testSessionJobId:n,jobId:e.id,result:r.result,err:`${r}`}})})}catch(r){h(`Processing Job ${e.id} failed:`),h(r),s(r),X({type:"process.ready.failed",data:{title:`Processing Job ${e.id} for Test Session ${o}/${t} failed`,testSessionId:o,testSessionName:t,testSessionJobId:n,jobId:e.id,err:r}})}};if(L.process(`process.run.${N}`,w,s),L.process(`process.run.${C}`,w,s),L.process("process.run",w,s),L.process(`process.cancel.${C}`,w,(e,s)=>{if(!e.data||!e.data.testSessionId)return[h,s].forEach(e=>e("Cancel Test Session event received, but no testSessionId given"));h(`Canceling Test Session ${e.data.testSessionId}/${e.data.testSessionName}`);try{m(e.data.testSessionId),h(`Canceling Test Session ${e.data.testSessionId}/${e.data.testSessionName} finished.`),s()}catch(o){h(`Canceling Test Session Job ${e.data.testSessionId}/${e.data.testSessionName} failed:`),h(o),s(o)}}),L.process(`process.stop.${C}`,w,(e,s)=>{if(!e.data||!e.data.testSessionId)return[h,s].forEach(e=>e("Stop Test Session event received, but no testSessionId given"));h(`Stopping Test Session ${e.data.testSessionId}/${e.data.testSessionName}`);try{O(e.data.testSessionId),h(`Stopping Test Session ${e.data.testSessionId}/${e.data.testSessionName} finished.`),s()}catch(o){h(`Stopping Test Session Job ${e.data.testSessionId}/${e.data.testSessionName} failed:`),h(o),s(o)}}),L.process(`agent.ping.${C}`,w,(e,s)=>{s()}),L.process("performanceprocess.run",M,(e,s)=>{const{performanceTestSessionId:o,performanceTestSessionName:t,performanceTestSessionJobId:n}=e.data;if(!o||!n)return s(new Error(`Processing Job ${e.id} failed, no performanceTestSessionId or performanceTestSessionJobId given.`));h(`Processing Job ${e.id} for Test Session ${o}/${t}, Job ${n}`);try{X({type:"performanceprocess.started",data:{title:`Processing Job ${e.id} for Test Session ${o}/${t} started`,performanceTestSessionId:o,performanceTestSessionName:t,performanceTestSessionJobId:n,agentName:C,jobId:e.id}}),y(k,e,X).then(r=>{h(`Processing Job ${e.id} finished`),s(null,r),X({type:"performanceprocess.ready.success",data:{title:`Processing Job ${e.id} for Test Session ${o}/${t} ready`,performanceTestSessionId:o,performanceTestSessionName:t,performanceTestSessionJobId:n,agent:C,jobId:e.id,result:r}})}).catch(r=>{h(`Processing Job ${e.id} failed:`),h(r),s(r),X({type:"performanceprocess.ready.failed",data:{title:`Processing Job ${e.id} for Test Session ${o}/${t} failed`,performanceTestSessionId:o,performanceTestSessionName:t,performanceTestSessionJobId:n,agent:C,jobId:e.id,result:r.result,err:`${r}`}})})}catch(o){h(`Processing Job ${e.id} failed:`),h(o),s(o),X("performanceprocess.ready.failed",(e.id,e.id))}}),L.process(`performanceprocess.cancel.${C}`,M,(e,s)=>{if(!e.data||!e.data.performanceTestSessionId)return[h,s].forEach(e=>e("Cancel Test Session event received, but no performanceTestSessionId given"));h(`Canceling Test Session ${e.data.performanceTestSessionId}/${e.data.performanceTestSessionName}`);try{B(e.data.performanceTestSessionId,e),h(`Canceling Test Session ${e.data.performanceTestSessionId}/${e.data.performanceTestSessionName} finished.`),s()}catch(o){h(`Canceling Test Session Job ${e.data.performanceTestSessionId}/${e.data.performanceTestSessionName} failed:`),h(o),s(o)}}),L.process(`agent.reconfigure.${C}`,w,(e,s)=>{h("Trying to reconfigure agent ..."),G("agent.register",{title:`reconfigure agent ${C} for group ${N}`,name:C,group:N}).on("failed",e=>{h("ERROR reconfiguring agent:"),h(e),s(e)}).on("complete",e=>{h(`Reconfiguration completed with result '${JSON.stringify(e)}'.`),j(e),s()})}),x>0){const e=()=>{h("sending heartbeat ..."),G("agent.heartbeat",{title:`heartbeat from agent ${C} for group ${N}`,name:C,group:N}).on("complete",()=>{setTimeout(e,x)})};e()}}),process.on("uncaughtException",e=>{console.log("Got an uncaughtException",e)});return{}});
