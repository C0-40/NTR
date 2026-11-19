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
 const actual=literal(source,name),expected=literal(before,name);
 // CHAT-T0 was replaced by the approved Day3 thread; forum-first-post.cjs checks it.
 check(`${name}: approved prose and data unchanged`,JSON.stringify(name==='CHAT_THREADS'?actual.slice(1):actual)===JSON.stringify(name==='CHAT_THREADS'?expected.slice(1):expected));
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
  S.uncleTh=o.step?uncleArcByStep(o.step).th.slice():[];tab='';mq=[];busy=backLock=mbLock=dayLock=0;
  Object.assign(presentationPrefs,{textSpeed:0,letterSound:false,music:0,ambient:0,sfx:0});Math.random=()=>.1;ensureDailyBase();render();
 },{day,aff,m,step});
}
async function dismiss(p){await p.evaluate(()=>{busy=mbLock=0;if(automaticReviewOpen())continueAutomaticReview();else dismissMask()});await p.clock.runFor(100);}
async function back(p){await p.evaluate(()=>{S.trip={id:0,place:PLACES[0][1],end:Date.now()+60000,acts:[],metUncle:true};S.outToday=true;back();render()});await p.clock.runFor(900);}
async function sleep(p){await p.evaluate(()=>{busy=mbLock=0;sleepDay()});}
async function continueSummary(p){await p.locator('#daySummaryContinue').click();await p.clock.runFor(1600);}
async function snap(p){return p.evaluate(()=>({day:S.day,aff:S.aff,m:S.m,step:S.uncleStep,trips:S.trips,summary:daySummaryOpen(),totals:daySummaryTotals(),pending:S.pendingDayEnd,notice:S.chatNotice,thread:chatThreadUnlocked(CHAT_THREADS.find(t=>t.step===5)),title:document.querySelector('#mt').textContent}));}
async function drainNight(p,fromDay,{stopSummary=false,stopReview=false}={}){
 for(let i=0;i<70;i++){
  const s=await p.evaluate(()=>({day:S.day,ended:S.endingDone,ending:S.ending,summary:daySummaryOpen(),mask:document.querySelector('#mask').classList.contains('on'),phase:scenePresentation.phase,flow:S.sleepRun&&S.sleepRun.phase,review:automaticReviewOpen(),title:document.querySelector('#mt').textContent,options:sqOptsOn()}));
  if(s.day>fromDay||s.ended)return s;
  if(stopSummary&&s.summary)return s;
  if(stopReview&&s.flow==='outing-review'&&s.review)return s;
  if(s.summary)await p.evaluate(()=>continueDaySummary());
  else if(s.review)await p.evaluate(()=>{finishAutomaticReviewReveal();continueAutomaticReview()});
  else if(s.mask&&!s.options)await p.evaluate(()=>{busy=mbLock=0;dismissMask()});
  else if(s.options)throw new Error('Unexpected ending/options before day end: '+JSON.stringify(s));
  await p.clock.runFor(900);
 }
 throw new Error('Night stalled '+JSON.stringify(await p.evaluate(()=>({day:S.day,flow:S.sleepRun,queue:mq,phase:scenePresentation.phase,lock:dayLock,summary:daySummaryOpen(),mask:maskOpen()}))));
}
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));browser=await chromium.launch({executablePath:process.env.NTR_CHROMIUM_PATH||(fs.existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined),args:['--no-sandbox']});const p=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});p.on('pageerror',e=>errors.push(e.message));await p.clock.install({time:new Date('2026-11-19T12:00:00Z')});const url='http://127.0.0.1:'+server.address().port+'/';await p.goto(url);
 await fixture(p,{day:1,aff:0,step:0,m:0});
 check('All five actions now give five with unchanged thresholds',await p.evaluate(()=>HOME_ACTS.every(a=>a[4]===5)&&HOME_ACTS.map(a=>a[3]).join(',')==='0,10,30,70,90'));
 await sleep(p);check('Automatic events settle on the same day without the old departure prompt',await p.evaluate(()=>S.day===1&&S.aff<=2&&S.trips===1&&!returnWindowOpen()));
 await drainNight(p,1,{stopReview:true});check('Exact user text appears after events and before nightly results',await p.evaluate(()=>S.day===1&&S.aff===2&&S.trips===1&&!daySummaryOpen()&&[...document.querySelectorAll('.automaticReviewLine:not([hidden])')].map(x=>x.textContent).join('\n')==='她自行出門了一趟,傍晚才回到家中。\n你沒有查看她外出期間的心聲及剪影。'));
 await p.reload();check('Unread review survives reload without another outing or grant',await p.evaluate(()=>S.day===1&&S.aff===2&&S.trips===1&&S.sleepRun.phase==='outing-review'&&automaticReviewOpen()&&document.querySelector('#automaticReviewReturn').textContent.startsWith('她自行出門了一趟,')));
 await dismiss(p);check('Acknowledging review goes directly to results and records one-time acknowledgment',await p.evaluate(()=>daySummaryOpen()&&S.sleepRun.outingReviewSeen&&S.day===1&&S.trips===1));
 await drainNight(p,1,{stopSummary:true});check('Automatic outing settles once on original day, then daily +2',await p.evaluate(()=>S.day===1&&S.aff===2&&S.trips===1&&S.dEv.length===1&&S.dEv[0].auto&&S.lastDailyAffinityGrantedDay===1&&daySummaryOpen()&&S.pendingDayEnd.aff===2));
 await p.reload();check('Reloaded daily summary does not reroll or duplicate bonus',await p.evaluate(()=>daySummaryOpen()&&S.day===1&&S.aff===2&&S.trips===1));await continueSummary(p);check('Confirmed sleep advances once and clears sleep transaction',await p.evaluate(()=>S.day===2&&!S.sleepRun&&!S.pendingDayEnd&&!document.querySelector('#gameUI').inert));
 await fixture(p,{day:1,aff:0,step:0,m:0});await p.evaluate(()=>{homeActNow(0);homeActNow(0)});check('Interaction is optional, once, +5',await p.evaluate(()=>S.aff===5&&S.homeActToday));await sleep(p);await drainNight(p,1,{stopSummary:true});check('Interaction plus daily life totals seven',await p.evaluate(()=>S.aff===7&&S.pendingDayEnd.aff===7));await continueSummary(p);
 await fixture(p,{day:20,aff:93,step:0,m:0});await p.evaluate(()=>homeActNow(0));check('Day20 remains playable before final check',await p.evaluate(()=>S.aff===98&&!S.endingDone&&S.day20Check===null));await sleep(p);await drainNight(p,20);check('Day20 twelfth interaction and final daily +2 can pass',await p.evaluate(()=>S.aff===100&&S.day===21&&S.day20Check==='passed'&&!S.endingDone));
 await fixture(p,{day:20,aff:93,step:0,m:0});await sleep(p);await drainNight(p,20);check('Day20 95 goes to ending four after final bonus',await p.evaluate(()=>S.aff===95&&S.day===20&&S.endingDone&&S.ending===4&&S.day20Check==='failed'&&!S.stormStay));
 check('Ending four is marked provisional and does not expose uncle ending text',await p.evaluate(()=>document.querySelector('#mp').textContent.includes('待結局階段細化')&&!document.querySelector('#mp').textContent.includes('強叔')&&S.m<100&&S.ending4DraftVersion===1));
 await p.reload();check('Ending four survives reload without a new day or grant',await p.evaluate(()=>S.ending===4&&S.aff===95&&S.day===20&&!S.sleepRun&&document.querySelector('#mask').classList.contains('on')));await dismiss(p);check('Ending four provides review and restart actions',await p.locator('#reviewEndingFour').isVisible()&&await p.locator('#restartEndingFour').isVisible());await p.locator('#reviewEndingFour').click();await dismiss(p);await p.locator('#restartEndingFour').click();check('Restart uses new rules from day1 and resets ending',await p.evaluate(()=>S.day===1&&S.aff===0&&!S.endingDone&&S.affinityRulesStartDay===1));

 // Full twenty-day accounting through the real sleep/outing pipeline.
 for(const activeDays of [Array.from({length:12},(_,i)=>i+9),Array.from({length:11},(_,i)=>i+10),[],Array.from({length:20},(_,i)=>i+1)]){
  await fixture(p,{day:1,aff:0,step:0,m:0});await p.evaluate(()=>{S.seen=[];S.memSeen=[];S.memPending=[];S.cohabToday=false;S.dailyBase={day:1,aff:0,m:0};save()});
  for(let d=1;d<=20;d++){
   if(activeDays.includes(d))await p.evaluate(()=>{busy=0;homeActNow(0)});
   // Read any newly unlocked event before pressing sleep.
   for(let j=0;j<20&&await p.evaluate(()=>maskOpen()&&!daySummaryOpen());j++){await p.evaluate(()=>{mbLock=busy=0;dismissMask()});await p.clock.runFor(350)}
   await sleep(p);await drainNight(p,d);await p.clock.runFor(350);
  }
  const got=await p.evaluate(()=>({aff:S.aff,day:S.day,ending:S.ending,checked:S.day20Check,trips:S.trips,last:S.lastDailyAffinityGrantedDay}));
  const expected=Math.min(100,40+activeDays.length*5);
  check(`20 days / ${activeDays.length} interactions: exact accounting and correct branch`,got.aff===expected&&got.last===20&&got.trips===20&&(expected===100?got.day===21&&got.checked==='passed'&&!got.ending:got.day===20&&got.ending===4),got);
 }
 // Old saves preserve their earned total and their in-progress old-rule day.
 await fixture(p,{day:10,aff:35,step:0,m:0});await p.evaluate(()=>{delete S.affinityRulesVersion;delete S.affinityRulesStartDay;delete S.lastDailyAffinityGrantedDay;S.outToday=true;save()});await p.reload();
 check('Old save migrates without retroactive grants',await p.evaluate(()=>S.aff===35&&S.affinityRulesStartDay===11&&S.lastDailyAffinityGrantedDay===10));
 await p.evaluate(()=>{busy=0;homeActNow(0)});check('Old-rule migration day retains its seven-point interaction',await p.evaluate(()=>S.aff===42));await sleep(p);await drainNight(p,10);check('Migration day receives no additional daily bonus',await p.evaluate(()=>S.aff===42&&S.day===11));
 await p.evaluate(()=>{busy=0;homeActNow(0)});await sleep(p);await drainNight(p,11);check('Next day switches to five plus two exactly once',await p.evaluate(()=>S.aff===49&&S.lastDailyAffinityGrantedDay===11));
 await fixture(p,{day:25,aff:42,step:0,m:0});await p.evaluate(()=>{delete S.affinityRulesVersion;save()});await p.reload();check('Already past Day20 legacy save is not retroactively failed',await p.evaluate(()=>S.aff===42&&S.day===25&&S.day20Check==='legacy-passed'&&!S.endingDone));
 // A manual outing consumes the day; sleeping never performs a second roll/visit.
 await fixture(p,{day:10,aff:100,step:1,m:4});await back(p);await dismiss(p);const manual=await p.evaluate(()=>{window.__reviewCount=0;const show=showAutomaticOutingNotice;showAutomaticOutingNotice=function(){window.__reviewCount++;return show()};return {trips:S.trips,m:S.m,step:S.uncleStep}});await sleep(p);await drainNight(p,10);check('Manual outing is not repeated on sleep',await p.evaluate(x=>S.trips===x.trips&&S.m===x.m&&S.uncleStep===x.step&&window.__reviewCount===0,manual));
 // Persisted auto decision is reused across refresh before and after settlement.
 await fixture(p,{day:8,aff:100,step:1,m:4});await sleep(p);const decision=await p.evaluate(()=>JSON.stringify(S.sleepRun.autoTrip));check('Automatic settlement is saved before its return transition ends',await p.evaluate(()=>S.trips===1&&!S.trip&&!returnWindowOpen()));const afterAuto=await p.evaluate(()=>({trips:S.trips,m:S.m,step:S.uncleStep}));await p.reload();check('Reload preserves the automatic destination and encounter',await p.evaluate(x=>JSON.stringify(S.sleepRun.autoTrip)===x&&S.trips===1,decision));check('Reload during return preserves one settlement and original day',await p.evaluate(x=>S.day===8&&S.trips===x.trips&&S.m===x.m&&S.uncleStep===x.step,afterAuto));await drainNight(p,8);check('Finishing resumed auto outing still advances once',await p.evaluate(()=>S.day===9&&S.trips===1&&S.lastDailyAffinityGrantedDay===8));
 // A b14cea2 save on the former pre-outing notice migrates without a false return report.
 await fixture(p,{day:8,aff:100,step:1,m:4});await p.evaluate(()=>{S.sleepRun={day:8,force:true,phase:'notice',active:{automaticOutingNotice:true},queued:[],autoTrip:{uid:'day-8-outing',day:8,id:0,place:PLACES[0][1],end:Date.now(),acts:[],auto:true,skipped:true,metUncle:true}};save()});await p.reload();await p.clock.runFor(50);check('Former pre-outing notice saves settle once before showing retrospective text',await p.evaluate(()=>S.trips===1&&!returnWindowOpen()));await drainNight(p,8,{stopReview:true});check('Migrated old notice reaches the new before-results review',await p.evaluate(()=>S.trips===1&&S.sleepRun.phase==='outing-review'&&!daySummaryOpen()));await drainNight(p,8);
 // Day20 storm: one night, one grant, then next-morning return or early-ending cancellation.
 await fixture(p,{day:20,aff:98,step:9,m:69});await sleep(p);await drainNight(p,20,{stopReview:true});check('Storm review only reports missed information and never falsely says she returned',await p.evaluate(()=>isStormNight()&&automaticReviewOpen()&&document.querySelector('#automaticReviewReturn').hidden&&document.querySelector('#automaticReviewMissed').textContent==='你沒有查看她外出期間的心聲及剪影。'&&!daySummaryOpen()));await drainNight(p,20,{stopSummary:true});check('Day20 storm is still night before summary confirmation',await p.evaluate(()=>S.aff===100&&isStormNight()&&S.day===20&&S.trips===1&&S.day20Check==='passed'));await p.reload();await continueSummary(p);check('Storm returns next morning without another outing or bonus',await p.evaluate(()=>S.day===21&&S.aff===100&&S.trips===1&&!S.stormStay&&S.lastDailyAffinityGrantedDay===20&&document.querySelector('#mt').textContent==='她回來了'));
 await fixture(p,{day:20,aff:93,step:9,m:69});await sleep(p);await drainNight(p,20);check('Day20 failed storm cannot resurrect a return after ending four',await p.evaluate(()=>S.ending===4&&S.day===20&&S.aff===95&&S.trips===1&&!S.stormStay&&!S.pendingObs));
 // Correct order when daily +2 unlocks a memory or cohab event.
 await fixture(p,{day:7,aff:18,step:0,m:0});await p.evaluate(()=>{S.memSeen=[];S.memPending=[];S.outToday=true;save()});await sleep(p);check('Daily bonus can unlock a memory before the summary',await p.evaluate(()=>S.aff===20&&document.querySelector('#mask').classList.contains('memory-window')&&!daySummaryOpen()));await p.reload();check('Pending unlocked memory survives sleep reload',await p.evaluate(()=>S.aff===20&&document.querySelector('#mask').classList.contains('memory-window')));await drainNight(p,7);check('Completing bonus-unlocked reading does not grant again',await p.evaluate(()=>S.day===8&&S.aff===20&&S.lastDailyAffinityGrantedDay===7));
 // Repeated sleep while a transaction is active cannot create another decision.
 await fixture(p,{day:6,aff:100,step:0,m:0});await p.evaluate(()=>{busy=0;sleepDay();busy=0;sleepDay();busy=0;sleepDay()});check('Repeated sleep starts one persisted automatic outing',await p.evaluate(()=>S.sleepRun.autoTrip.uid==='day-6-outing'&&S.trips===1));await drainNight(p,6);check('Day6 encounter retains forced zero uncle gain',await p.evaluate(()=>S.day===7&&S.m===0&&S.trips===1));

 await fixture(p,{day:9,aff:99,step:0,m:0});await p.evaluate(()=>{S.outToday=true});await sleep(p);await drainNight(p,9,{stopSummary:true});check('Daily cap reports actual one rather than two',await p.evaluate(()=>S.aff===100&&S.pendingDayEnd.aff===1&&S.lastDailyAffinityGrantedDay===9));await continueSummary(p);
 // Ending preparation cannot bypass stage 11 or the next-day forum release.
 for(const x of [{day:29,step:11,m:99},{day:30,step:10,m:84},{day:30,step:11,m:90,due:31}]){await fixture(p,{...x,aff:100});if(x.due)await p.evaluate(d=>S.forumPublishDays[11]=d,x.due);check(`Final gate day${x.day} step${x.step} due${x.due||0}: waits for valid story`,await p.evaluate(()=>!canOfferFinalEnding()));}
 await fixture(p,{day:30,aff:100,step:11,m:90});check('Day30 completed stage11 can provide existing ending',await p.evaluate(()=>canOfferFinalEnding()));
 // Explicit encounter boundaries are identical for manual and automatic trips.
 for(const [day,r,expected] of [[1,0,false],[5,0,false],[6,.59,true],[15,.6,false],[16,.99,true]]){await fixture(p,{day,aff:100,step:0,m:0});check(`Encounter boundary day${day} random${r}`,await p.evaluate(o=>{Math.random=()=>o.r;return uncleAppearRoll()===o.expected},{r,expected}));}
 // Four seed/schedule observations exercise the remaining 30-day scheduling boundary.
 const simulations=[];
 for(const scenario of [{seed:1,active:Array.from({length:20},(_,i)=>i+1)},{seed:77,active:Array.from({length:20},(_,i)=>i+1)},{seed:1,active:Array.from({length:12},(_,i)=>i+9)},{seed:77,active:Array.from({length:12},(_,i)=>i+1)}]){
  await fixture(p,{day:1,aff:0,step:0,m:0});await p.evaluate(seed=>{S.seen=[];S.memSeen=[];S.memPending=[];S.cohabToday=false;S.dailyBase={day:1,aff:0,m:0};window.__rng=seed;Math.random=()=>{window.__rng=(Math.imul(window.__rng,1664525)+1013904223)>>>0;return window.__rng/4294967296};save()},scenario.seed);
  const timeline=[];
  for(let d=1;d<30;d++){
   for(let j=0;j<25&&await p.evaluate(()=>maskOpen()&&!daySummaryOpen());j++){if(await p.evaluate(()=>sqOptsOn()))throw new Error('Premature final options '+d);await p.evaluate(()=>{busy=mbLock=0;dismissMask()});await p.clock.runFor(350)}
   if(scenario.active.includes(d))await p.evaluate(()=>{busy=0;homeActNow(0)});
   for(let j=0;j<25&&await p.evaluate(()=>maskOpen()&&!daySummaryOpen());j++){await p.evaluate(()=>{busy=mbLock=0;dismissMask()});await p.clock.runFor(350)}
   await sleep(p);await drainNight(p,d);await p.clock.runFor(350);timeline.push(await p.evaluate(()=>({day:S.day,step:S.uncleStep,aff:S.aff,trips:S.trips,ending:S.ending})));
   if(await p.evaluate(()=>S.endingDone))break;
  }
  const result=await p.evaluate(()=>({day:S.day,step:S.uncleStep,aff:S.aff,trips:S.trips,ending:S.ending,day20:S.day20Check,finalReady:canOfferFinalEnding()}));
  check(`Thirty-day pipeline seed${scenario.seed} / ${scenario.active[0]}-${scenario.active.at(-1)}: no skipped day20 or early ending`,result.day===30&&result.day20==='passed'&&result.aff===100&&!result.ending,result);
  simulations.push({seed:scenario.seed,activeDays:scenario.active,result,timeline});
 }
 fs.writeFileSync(path.join(artifactDir,'ntr-v2-30day-observations.json'),JSON.stringify(simulations,null,2));
 check('No browser errors',errors.length===0,errors);await p.close();
})().then(async()=>{await browser.close();server.close();fs.writeFileSync(path.join(artifactDir,'ntr-v2-rules-tests.json'),JSON.stringify({passed:checks.length,errors,checks},null,2));console.log(JSON.stringify({passed:checks.length,errors}));}).catch(async e=>{console.error(e.stack);console.log(JSON.stringify({last:checks.slice(-2),errors}));if(browser)await browser.close();server.close();process.exit(1)});
