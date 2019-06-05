!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("util"),require("path"),require("slugify"),require("nodegit"),require("botium-core/src/scripting/Constants"),require("debug"),require("botium-core/src/Capabilities"),require("intercept-stdout"),require("botium-core")):"function"==typeof define&&define.amd?define(["util","path","slugify","nodegit","botium-core/src/scripting/Constants","debug","botium-core/src/Capabilities","intercept-stdout","botium-core"],t):e.main=t(e.util,e.path,e.slugify,e.nodegit,e.Constants,e.debug,e.Capabilities,e.interceptStdout,e.botiumCore)}(this,function(e,t,s,o,r,n,a,c,i){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,s=s&&s.hasOwnProperty("default")?s.default:s,o=o&&o.hasOwnProperty("default")?o.default:o,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n,a=a&&a.hasOwnProperty("default")?a.default:a,c=c&&c.hasOwnProperty("default")?c.default:c,i=i&&i.hasOwnProperty("default")?i.default:i;const l=n("botium-retrieve-all-test-cases");var u={prepareConvos:(e,t,s)=>{const o=e.testSets.filter(e=>e.expandConvos).length>0,r=e.testSets.filter(e=>e.expandUtterancesToConvos).length>0,n=e.testSets.filter(e=>e.expandScriptingMemory).length>0;return r&&(s("expanding utterances to convos ..."),t.compiler.ExpandUtterancesToConvos()),n&&(s("expanding scripting memories to convos ..."),t.compiler.ExpandScriptingMemoryToConvos()),(o||r||n)&&(s("expanding convos ..."),t.compiler.ExpandConvos()),s(`found ${t.compiler.convos.length} convos ...`),t.compiler.convos},merge:(e,t,s)=>{const o={};e.botium&&e.botium.Capabilities&&Object.assign(o,e.botium.Capabilities),t.botium&&t.botium.Capabilities&&Object.assign(o,t.botium.Capabilities);const r={};e.botium&&e.botium.Sources&&Object.assign(r,e.botium.Sources),t.botium&&t.botium.Sources&&Object.assign(r,t.botium.Sources);const n=s?process.env:{};return e.botium&&e.botium.Envs&&Object.assign(n,e.botium.Envs),t.botium&&t.botium.Envs&&Object.assign(n,t.botium.Envs),{caps:o,sources:r,envs:n}},MESSAGE_TYPE:{CANCEL:"CANCEL",STOP:"STOP",CREATE_JOB:"CREATE_JOB",CREATE_JOB_COMPLETE:"CREATE_JOB_COMPLETE",CREATE_JOB_FAILED:"CREATE_JOB_FAILED",RESULT:"RESULT",LOG:"LOG"}};const T=i.BotDriver,{prepareConvos:p,merge:m,MESSAGE_TYPE:E}=u,S=e=>{O(E.LOG,e)};let C=!1,h=!1,d=0,g={};process.on("message",({type:e,requestId:t})=>{switch(e){case E.CANCEL:C=!0;break;case E.STOP:h=!0;break;case E.CREATE_JOB_COMPLETE:g[t].resolve(),delete g[t];break;case E.CREATE_JOB_FAILED:g[t].reject(),delete g[t];break;default:S(`Unknown message type: ${e}`),process.exit(1)}});const f=(e,t)=>{const s={requestId:++d};g[d]=s;const o=new Promise((o,r)=>{O(E.CREATE_JOB,{type:e,data:t},s.requestId),s.resolve=o,s.reject=r});return s.promise=o,o},O=(e,t,s)=>{process.send({type:e,message:t,requestId:s})},_=({agentConfig:t,jobId:s,data:o})=>{const{testSessionId:n,testSessionName:i,testSessionJobId:u}=o,E={unhook:null},d=()=>{E.unhook&&(E.unhook(),E.unhook=null)};return new Promise((d,g)=>{E.unhook=c(e=>{if(t.debug){const t=e.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,"");f("process.log",{testSessionId:n,testSessionName:i,testSessionJobId:u,log:t})}return e}),S(`Started processing, JobId #${s}.`);const{caps:O,sources:_,envs:R}=m(t,o,!1),b=new T(O,_,R),I=b.BuildFluent();I.compiler=b.BuildCompiler(),b._validate().then(()=>new Promise((t,s)=>{Promise.all(o.testSets.map(t=>((t,s,o,n)=>{t.convos&&t.convos.forEach(o=>{let n=[];try{o.format===r.SCRIPTING_FORMAT_TXT&&(n=s.Compile(o.content,r.SCRIPTING_FORMAT_TXT,r.SCRIPTING_TYPE_CONVO)),n&&n.forEach(e=>{e.sourceTag=o.sourceTag})}catch(s){throw l(s),new Error(`${t.name}: Convo Script compilation failed: ${e.inspect(s)}`)}}),t.pconvos&&t.pconvos.forEach(o=>{let n=[];try{o.format===r.SCRIPTING_FORMAT_TXT&&(n=s.Compile(o.content,r.SCRIPTING_FORMAT_TXT,r.SCRIPTING_TYPE_PCONVO)),n&&n.forEach(e=>{e.sourceTag=o.sourceTag})}catch(s){throw l(s),new Error(`${t.name}: Partial Convo Script compilation failed: ${e.inspect(s)}`)}}),t.utterances&&t.utterances.forEach(o=>{let n=[];try{o.format===r.SCRIPTING_FORMAT_TXT&&(n=s.Compile(o.content,r.SCRIPTING_FORMAT_TXT,r.SCRIPTING_TYPE_UTTERANCES)),n&&n.forEach(e=>{e.sourceTag=o.sourceTag})}catch(s){throw l(s),new Error(`${t.name}: Utterance script compilation failed: ${e.inspect(s)}`)}}),t.scriptingMemories&&t.scriptingMemories.forEach(o=>{let n=[];try{o.format===r.SCRIPTING_FORMAT_TXT&&(n=s.Compile(o.content,r.SCRIPTING_FORMAT_TXT,r.SCRIPTING_TYPE_SCRIPTING_MEMORY)),n&&n.forEach(e=>{e.sourceTag=o.sourceTag})}catch(s){throw l(s),new Error(`${t.name}: Scripting Memory script compilation failed: ${e.inspect(s)}`)}}),t.folders&&t.folders.forEach(o=>{try{const{convos:r,pconvos:n,utterances:a}=s.ReadScriptsFromDirectory(o.path,o.globFilter);r&&r.forEach(e=>{e.sourceTag=Object.assign({},e.sourceTag,o.sourceTag)}),n&&n.forEach(e=>{e.sourceTag=Object.assign({},e.sourceTag,o.sourceTag)}),a&&a.forEach(e=>{e.sourceTag=Object.assign({},e.sourceTag,o.sourceTag)})}catch(s){throw l(s),new Error(`${t.name}: Folder ${o} script compilation failed: ${e.inspect(s)}`)}});let c=Promise.resolve();t.excels&&t.excels.length>0&&(c=Promise.all(t.excels.map(({id:e,filename:t,filecontent:o,hasConvos:n,hasPartialConvos:c,hasUtterances:i,worksheetsConvos:l,worksheetsPartialConvos:u,worksheetsUtterances:T,startRow:p,startCol:m,sourceTag:E})=>new Promise(e=>{const t=Buffer.from(o,"base64");let S=[],C=[],h=[];n&&(l&&(s.caps[a.SCRIPTING_XLSX_SHEETNAMES]=l),isNaN(p)||(s.caps[a.SCRIPTING_XLSX_STARTROW]=p),isNaN(m)||(s.caps[a.SCRIPTING_XLSX_STARTCOL]=m),S=s.Compile(t,r.SCRIPTING_FORMAT_XSLX,r.SCRIPTING_TYPE_CONVO)),c&&(u&&(s.caps[a.SCRIPTING_XLSX_SHEETNAMES_PCONVOS]=u),isNaN(p)||(s.caps[a.SCRIPTING_XLSX_STARTROW]=p),isNaN(m)||(s.caps[a.SCRIPTING_XLSX_STARTCOL]=m),C=s.Compile(t,r.SCRIPTING_FORMAT_XSLX,r.SCRIPTING_TYPE_PCONVO)),i&&(T&&(s.caps[a.SCRIPTING_XLSX_SHEETNAMES_UTTERANCES]=T),isNaN(p)||(s.caps[a.SCRIPTING_XLSX_STARTROW]=p),isNaN(m)||(s.caps[a.SCRIPTING_XLSX_STARTCOL]=m),h=s.Compile(t,r.SCRIPTING_FORMAT_XSLX,r.SCRIPTING_TYPE_UTTERANCES)),S&&S.forEach(e=>{e.sourceTag=Object.assign({},e.sourceTag,E)}),C&&C.forEach(e=>{e.sourceTag=Object.assign({},e.sourceTag,E)}),h&&h.forEach(e=>{e.sourceTag=Object.assign({},e.sourceTag,E)}),e()}))));let i=Promise.resolve();return Promise.all([i,c])})(t,I.compiler,b.tempDirectory,b.sources))).then(()=>p(o,I,S)).then(e=>{t(e.reduce((e,t)=>e.concat(t),[]))}).catch(s)})).then(()=>{const e=o.batchNum||1,t=o.batchCount||1,s=Math.ceil(I.compiler.convos.length/t),r=s*(e-1),a=Math.min(r+s,I.compiler.convos.length)-1,c=a-r+1,l={batchNum:e,totalCount:0,failedCount:0,successCount:0};S(`batchNum: ${e} batchCount: ${t} convosPerBatch: ${s} batchStart: ${r} batchEnd: ${a} batchLength: ${c}`);for(let t=r;t<=a;t++){const T=t,p=I.compiler.convos[T];let m=null;const E=[],d=(e,t)=>{t.attachments&&E.push(...t.attachments)},g=(e,t)=>{t.attachments&&E.push(...t.attachments)},O=(e,t)=>{E.push(t)},_=(e,t)=>{t&&(p.sourceTag=Object.assign({},p.sourceTag,t))},R=()=>{b.eventEmitter.removeListener("MESSAGE_SENTTOBOT",d),b.eventEmitter.removeListener("MESSAGE_RECEIVEDFROMBOT",g),b.eventEmitter.removeListener("MESSAGE_ATTACHMENT",O),b.eventEmitter.removeListener("CONTAINER_STARTED",_)},N=()=>{b.on("MESSAGE_SENTTOBOT",d),b.on("MESSAGE_RECEIVEDFROMBOT",g),b.on("MESSAGE_ATTACHMENT",O),b.on("CONTAINER_STARTED",_)};let P=null;I.Call(()=>{if(C)throw new Error("Test Session cancelled")}),I.Call(N).Start(),I.Call(()=>new Promise(e=>{if(C)S(`Test Session cancelled, skipping Convo "${p.header.name}", Index ${T}, ${T-r} from ${s}`),e();else if(h)S(`Test Session stopped, skipping Convo "${p.header.name}", Index ${T}, ${T-r} from ${s}`),e();else{S(`Running Convo "${p.header.name}", Index ${T}, ${T-r+1} from ${c}`);try{return p.Run(I.container).then(t=>{S(`Running Convo "${p.header.name}" completed successfully.`),m=t,e()}).catch(t=>{S(`Running Convo "${p.header.name}" failed: ${t}.`),m=t.transcript,P=t,e()})}catch(t){P=t,e()}}})),I.Stop().Call(R),I.Call(()=>{if(C)throw new Error("Test Session cancelled")}),I.Call(()=>new Promise((t,S)=>C?t():h?t():(m&&(m.err=m.err?m.err.message?m.err.message:JSON.stringify(m.err):null,m.steps&&m.steps.forEach(e=>{e.err=e.err?e.err.message?e.err.message:JSON.stringify(e.err):null})),l.totalCount++,P?l.failedCount++:l.successCount++,null!==P&&o.bail&&(h=!0),void f("process.progress",{testSessionId:n,testSessionName:i,testSessionJobId:u,currentBatchIndex:T,batchNum:e,batchStart:r,batchEnd:a,batchLength:c,convosPerBatch:s,progress:Math.round((T-r+1)/c*100),testcase:p.header.name,source:p.toString(),sourceTag:p.sourceTag,transcript:m,attachments:E,success:null===P,err:P?P.message?P.message:JSON.stringify(P):null,stopTestSession:null!==P&&o.bail}).then(e=>{t(e)}).catch(e=>{S(e)}))))}I.Clean(),I.Exec().then(()=>d(l)).catch(e=>{I.container?(S(`Test Session Run failed (${e}), doing additional BotDriver Clean.`),I.container.Clean().catch(e=>S(e)).then(()=>{e.result=l,g(e)})):(S(`Test Session Run failed (${e}).`),g(e))})}).catch(g)}).then(e=>(d(),e)).catch(e=>{throw d(),e})};let R;try{R=JSON.parse(process.argv[2])}catch(e){S("Init: Failed to parse args!"),process.exit(1)}R&&_(R).then(e=>(O(E.RESULT,e),Promise.all(Object.values(g).map(e=>e.promise)).then(()=>process.exit(0)))).catch(()=>Promise.all(Object.values(g).map(e=>e.promise)).then(()=>process.exit(1)));return{}});
