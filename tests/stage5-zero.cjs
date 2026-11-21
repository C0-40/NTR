const {chromium}=require('playwright');
const fs=require('fs'),path=require('path'),http=require('http'),vm=require('vm');
const root=path.resolve(__dirname,'..'),source=fs.readFileSync(path.join(root,'xiaoying-tongju-riji.html'),'utf8'),before=require('child_process').execFileSync('git',['show','c98097c:xiaoying-tongju-riji.html'],{cwd:root,maxBuffer:8*1024*1024,encoding:'utf8'});
const artifactDir=process.env.NTR_TEST_ARTIFACT_DIR||require('os').tmpdir();fs.mkdirSync(artifactDir,{recursive:true});
const checks=[],errors=[];let browser;
function check(name,pass,detail){checks.push({name,pass:!!pass,detail});if(!pass)throw new Error(name+' '+JSON.stringify(detail));}
function literal(s,n){return vm.runInNewContext('('+s.match(new RegExp('var '+n+'=(\\[.*?\\]);','s'))[1]+')');}
check('Production HTML files are identical',Buffer.from(source).equals(fs.readFileSync(path.join(root,'小櫻的同居日記.html'))));
for(const m of source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
for(const name of ['UNCLE_ARC','CHAT_THREADS','STORY','MEMORIES','NSTORY','HOME_TH','PLACE_TH','NIGHT','FLAT_NIGHT']){
 if(name==='NSTORY')continue; // Approved replacement is verified in nstory-integration.cjs.
 const actual=literal(source,name),expected=literal(before,name);
 if(name==='UNCLE_ARC'){
   actual.find(event=>event.step===10).home=expected.find(event=>event.step===10).home;
   actual.find(event=>event.step===5).th=expected.find(event=>event.step===5).th;
   actual.find(event=>event.step===6).th=expected.find(event=>event.step===6).th;
   actual.find(event=>event.step===1).trace=expected.find(event=>event.step===1).trace;
 }
 // The separately approved next-day home text is verified in nstory-integration.cjs.
 // CHAT-T0 and CHAT-T1 have approved replacements checked by forum-first-post.cjs.
 check(`${name}: approved prose and data unchanged`,JSON.stringify(name==='CHAT_THREADS'?actual.slice(2):actual)===JSON.stringify(name==='CHAT_THREADS'?expected.slice(2):expected));
}
const server=http.createServer((req,res)=>{
 const pn=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 try{const b=fs.readFileSync(path.join(root,pn==='/'?'xiaoying-tongju-riji.html':pn.slice(1)));res.setHeader('Content-Type',pn.endsWith('.png')?'image/png':'text/html; charset=utf-8');res.end(b)}catch(e){res.writeHead(404);res.end()}
});
async function fixture(p,{day=20,aff=50,m=24,step=4}={}){
 await p.evaluate(o=>{
  cancelScenePresentation();resetMomReading();closePane();hideSqOpts();clearMoodPeek();
  document.querySelectorAll('#mask,#momPhone,#chatRoom').forEach(e=>e.classList.remove('on'));document.querySelector('#gameUI').inert=false;
  S=def();Object.assign(S,{day:o.day,aff:o.aff,m:o.m,uncleStep:o.step,uncleStarted:o.step>0,metOut:o.step>0,momIntroSeen:true,heroIntroPending:false,cohabToday:true,chatNotice:false});
  S.seen=STORY.map(x=>x[0]).concat(NSTORY.map(x=>'n'+x[0]));S.memSeen=MEMORIES.map(x=>x[0]);S.memPending=[];
  S.nstory.read=Object.fromEntries(NSTORY.map(event=>[event[0],true]));S.nstory.milestones['10-return']=true;
  S.uncleTh=o.step?uncleArcByStep(o.step).th.slice():[];tab='';mq=[];busy=backLock=mbLock=dayLock=0;
  Object.assign(presentationPrefs,{textSpeed:0,letterSound:false,music:0,ambient:0,sfx:0});Math.random=()=>.1;ensureDailyBase();render();
 },{day,aff,m,step});
}
async function dismiss(p){await p.evaluate(()=>{busy=mbLock=0;if(automaticReviewOpen())continueAutomaticReview();else if($("cohabOffer").open)chooseCohabOffer(false);else if(S.cohabScene)finishCohabScene();else dismissMask()});await p.clock.runFor(100);}
async function back(p){await p.evaluate(()=>{S.trip={id:0,place:PLACES[0][1],end:Date.now()+60000,acts:[],metUncle:true};S.outToday=true;back();render()});await p.clock.runFor(900);}
async function sleep(p){await p.evaluate(()=>{busy=mbLock=0;sleepDay()});}
async function continueSummary(p){await p.locator('#daySummaryContinue').click();await p.clock.runFor(1600);}
async function snap(p){return p.evaluate(()=>({day:S.day,aff:S.aff,m:S.m,step:S.uncleStep,trips:S.trips,summary:daySummaryOpen(),totals:daySummaryTotals(),pending:S.pendingDayEnd,notice:S.chatNotice,thread:chatThreadUnlocked(CHAT_THREADS.find(t=>t.step===5)),title:document.querySelector('#mt').textContent}));}
async function drainNight(p,fromDay,{stopSummary=false,stopReview=false}={}){
 for(let i=0;i<70;i++){
  const s=await p.evaluate(()=>({day:S.day,ended:S.endingDone,ending:S.ending,summary:daySummaryOpen(),mask:maskOpen()||!!S.cohabScene,phase:scenePresentation.phase,flow:S.sleepRun&&S.sleepRun.phase,review:automaticReviewOpen(),title:document.querySelector('#mt').textContent,options:sqOptsOn()}));
  if(s.day>fromDay||s.ended)return s;
  if(stopSummary&&s.summary)return s;
  if(stopReview&&s.flow==='outing-review'&&s.review)return s;
  if(s.summary)await p.evaluate(()=>continueDaySummary());
  else if(s.review)await p.evaluate(()=>{finishAutomaticReviewReveal();continueAutomaticReview()});
  else if(s.mask&&!s.options)await p.evaluate(()=>{busy=mbLock=0;if($("cohabOffer").open)chooseCohabOffer(false);else if(S.cohabScene)finishCohabScene();else dismissMask()});
  else if(s.options)throw new Error('Unexpected ending/options before day end: '+JSON.stringify(s));
  await p.clock.runFor(900);
 }
 throw new Error('Night stalled '+JSON.stringify(await p.evaluate(()=>({day:S.day,flow:S.sleepRun,queue:mq,phase:scenePresentation.phase,lock:dayLock,summary:daySummaryOpen(),mask:maskOpen()}))));
}
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));browser=await chromium.launch({executablePath:process.env.NTR_CHROMIUM_PATH||(fs.existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined),args:['--no-sandbox']});const p=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});p.on('pageerror',e=>errors.push(e.message));await p.clock.install({time:new Date('2026-11-19T12:00:00Z')});await p.goto('http://127.0.0.1:'+server.address().port+'/');
 async function empty(o){await fixture(p,{aff:0,...o});await p.evaluate(()=>{S.seen=[];S.memSeen=[];S.memPending=[];S.cohabToday=true;mq=[];save();render()})}
 // The approved requirement is zero, with no extra date beyond the route's original opening.
 for(const day of [6,10,12,13,16,20]){await empty({day,step:4,m:24});check(`Day${day}: stage5 accepts zero cohabitation events`,await p.evaluate(()=>S.seen.length===0&&step5Open()&&canAdvanceUncle()&&!storyComplete()));}
 await empty({day:5,step:4,m:24});check('Original Day1-5 route exclusion remains',await p.evaluate(()=>!canAdvanceUncle()));
 await empty({day:12,step:3,m:24});check('Completing all eight cannot skip the fourth stage',await p.evaluate(()=>{S.seen=STORY.map(x=>x[0]);return !step5Open()}));
 await empty({day:12,step:4,m:23});check('Original stage5 relationship threshold is retained',await p.evaluate(()=>!canAdvanceUncle()));await p.evaluate(()=>S.m=24);check('Original threshold boundary opens stage5',await p.evaluate(()=>canAdvanceUncle()));
 // Encounter remains mandatory at settlement; zero cohab does not imply automatic stage gain.
 await empty({day:12,step:4,m:24});await p.evaluate(()=>{S.trip={id:0,place:PLACES[0][1],end:Date.now()+60000,acts:[],metUncle:false};S.outToday=true;back();render()});await p.clock.runFor(900);check('A trip without an encounter does not advance stage5',await p.evaluate(()=>S.uncleStep===4&&S.m===24&&S.trips===1));
 await empty({day:12,step:4,m:24});await p.evaluate(()=>{S.trip={id:0,place:PLACES[0][1],end:Date.now()+60000,acts:[],metUncle:true};S.outToday=true;back();render()});await p.clock.runFor(900);check('Manual encounter advances stage5 with no cohab entries',await p.evaluate(()=>S.uncleStep===5&&S.seen.filter(x=>typeof x==='number').length===0&&S.trips===1&&S.m===28));
 const manual=await p.evaluate(()=>({step:S.uncleStep,m:S.m,due:S.forumPublishDays[5]}));await empty({day:12,step:4,m:24});await sleep(p);await p.clock.runFor(900);check('Automatic encounter advances the same stage without cohab',await p.evaluate(x=>S.uncleStep===x.step&&S.m===x.m&&S.forumPublishDays[5]===x.due&&S.trips===1&&S.seen.filter(v=>typeof v==='number').length===0,manual));
 check('Stage5 uses its exact approved return script and next-day forum timing',await p.evaluate(()=>document.querySelector('#mp').textContent===uncleArcByStep(5).home&&S.forumPublishDays[5]===13&&!chatThreadUnlocked(CHAT_THREADS.find(t=>t.step===5))));
 // All callers of step5Open must release the obsolete eight-record cap at the same point.
 await empty({day:16,step:5,m:40});check('Relationship cap and voice band do not keep an obsolete cohab lock',await p.evaluate(()=>uncleMCap()===49&&stage()===2&&canAdvanceUncle()));await p.reload();check('Existing stage5 save is not clamped back to 29 on load',await p.evaluate(()=>S.uncleStep===5&&S.m===40&&S.seen.filter(v=>typeof v==='number').length===0&&canAdvanceUncle()));
 for(const [step,m] of [[5,40],[6,49],[7,58],[8,65]]){await empty({day:18,step,m});check(`After stage${step}: stages6-9 remain independent of cohab count`,await p.evaluate(()=>canAdvanceUncle()));}
 // The old stage10+ record condition is separated, rather than accidentally removed.
 await empty({day:25,step:9,m:69});check('Stage10 remains closed with zero cohab records',await p.evaluate(()=>!canAdvanceUncle()));await p.evaluate(()=>S.seen=STORY.slice(0,7).map(x=>x[0]));check('Seven records still cannot enter stage10',await p.evaluate(()=>!canAdvanceUncle()));await p.evaluate(()=>S.seen=STORY.map(x=>x[0]));check('Eight records retain the pre-existing stage10 boundary',await p.evaluate(()=>canAdvanceUncle()));
 await empty({day:27,step:10,m:80});check('Stage11 retains the old record prerequisite',await p.evaluate(()=>!canAdvanceUncle()));await p.evaluate(()=>S.seen=STORY.map(x=>x[0]));check('Stage11 boundary otherwise retains existing conditions',await p.evaluate(()=>canAdvanceUncle()));
 check('No browser errors',errors.length===0,errors);await p.close();
})().then(async()=>{await browser.close();server.close();fs.writeFileSync(path.join(artifactDir,'ntr-stage5-zero-tests.json'),JSON.stringify({passed:checks.length,errors,checks},null,2));console.log(JSON.stringify({passed:checks.length,errors}));}).catch(async e=>{console.error(e.stack);console.log(JSON.stringify({last:checks.slice(-2),errors}));if(browser)await browser.close();server.close();process.exit(1)});
