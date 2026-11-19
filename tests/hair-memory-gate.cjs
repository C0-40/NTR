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
 await new Promise(r=>server.listen(0,'127.0.0.1',r));browser=await chromium.launch({executablePath:process.env.NTR_CHROMIUM_PATH||(fs.existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined),args:['--no-sandbox']});const p=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});p.on('pageerror',e=>errors.push(e.message));await p.clock.install({time:new Date('2026-11-19T12:00:00Z')});await p.goto('http://127.0.0.1:'+server.address().port+'/');
 async function hair({aff=100,used=false}={}){await fixture(p,{day:18,aff,step:4,m:24});await p.evaluate(used=>{S.seen=STORY.slice(0,7).map(x=>x[0]);S.memSeen=MEMORIES.map(m=>m[0]);S.finalMemoryConfirmed=false;S.cohabToday=used;mq=[];save()},used)}
 await hair();await p.evaluate(()=>queueCohabUnlock());check('Opening/unlocking the last memory alone cannot unlock hair',await p.evaluate(()=>S.memSeen.includes(95)&&!S.finalMemoryConfirmed&&!S.seen.includes(100)&&mq.length===0));
 await p.evaluate(()=>replayMem(5));check('Last memory is displayed with exact existing text',await p.evaluate(()=>document.querySelector('#mask').classList.contains('memory-window')&&document.querySelector('#memoryEventTitle').textContent==='離別與約定'&&document.querySelector('#mp').textContent===memBody(memByAff(95))));
 await p.locator('#mp').click();check('Tapping memory text does not count as confirmation',await p.evaluate(()=>!S.finalMemoryConfirmed&&!S.seen.includes(100)));
 await p.locator('#mask').click({position:{x:2,y:2}});await p.clock.runFor(100);check('Closing via backdrop does not confirm the memory',await p.evaluate(()=>!maskOpen()&&!S.finalMemoryConfirmed&&!S.seen.includes(100)));
 await p.evaluate(()=>replayMem(5));await p.locator('#mb').click();await p.clock.runFor(100);check('A real Continue confirms memory and unlocks hair at affinity100',await p.evaluate(()=>S.finalMemoryConfirmed&&S.seen.includes(100)&&S.cohabToday&&document.querySelector('#mt').textContent.includes('替她整理頭髮')));
 await p.evaluate(()=>{S.uncleStep=9;S.m=69});check('Unlocked cohabitation counts as complete before its own Continue',await p.evaluate(()=>storyComplete()&&canAdvanceUncle()&&document.querySelector('#mask').classList.contains('on')));await dismiss(p);
 await p.evaluate(()=>replayMem(5));await p.locator('#mb').click();await p.clock.runFor(100);check('Reconfirmation cannot duplicate the unlocked event',await p.evaluate(()=>S.finalMemoryConfirmed&&S.seen.filter(x=>x===100).length===1&&mq.length===0));
 await hair();await p.evaluate(()=>replayMem(0));await p.locator('#mb').click();await p.clock.runFor(100);check('Another memory cannot satisfy the last-memory prerequisite',await p.evaluate(()=>!S.finalMemoryConfirmed&&!S.seen.includes(100)));
 await hair({aff:99});await p.evaluate(()=>replayMem(5));await p.locator('#mb').click();await p.clock.runFor(100);check('Confirmed last memory still requires affinity100 for hair',await p.evaluate(()=>S.finalMemoryConfirmed&&!S.seen.includes(100)));await p.evaluate(()=>{S.aff=100;queueCohabUnlock()});check('Reaching affinity100 after confirmation unlocks hair',await p.evaluate(()=>S.seen.includes(100)));
 await hair({used:true});await p.evaluate(()=>replayMem(5));await p.locator('#mb').click();await p.clock.runFor(100);check('Confirming memory cannot bypass one-cohab-per-day',await p.evaluate(()=>S.finalMemoryConfirmed&&!S.seen.includes(100)));await p.evaluate(()=>{S.day++;S.cohabToday=false;queueCohabUnlock()});check('The next day offers hair using the saved confirmation',await p.evaluate(()=>S.seen.includes(100)&&S.cohabToday));
 await hair({aff:99});await p.evaluate(()=>replayMem(5));await p.locator('#mb').click();await p.clock.runFor(100);await p.reload();check('Confirmation persists without changing affinity',await p.evaluate(()=>S.finalMemoryConfirmed&&S.aff===99&&!S.seen.includes(100)));await p.evaluate(()=>{S.aff=100;queueCohabUnlock()});check('Reloaded confirmation can unlock hair',await p.evaluate(()=>S.seen.includes(100)));
 await hair();await p.evaluate(()=>{delete S.finalMemoryConfirmed;save()});await p.reload();check('Old seen95 flag is not silently promoted into a read confirmation',await p.evaluate(()=>S.memSeen.includes(95)&&S.finalMemoryConfirmed===false&&!S.seen.includes(100)));
 await p.evaluate(()=>replayMem(5));await p.reload();check('Refresh during reading does not fake completion',await p.evaluate(()=>!S.finalMemoryConfirmed&&!S.seen.includes(100)));await p.evaluate(()=>replayMem(5));await p.locator('#mb').click();await p.clock.runFor(100);check('An old save can replay and confirm the required memory',await p.evaluate(()=>S.finalMemoryConfirmed&&S.seen.includes(100)));
 await fixture(p,{day:25,aff:100,step:10,m:76});await p.evaluate(()=>{delete S.finalMemoryConfirmed;save()});await p.reload();check('Existing unlocked hair and progressed stage are not revoked',await p.evaluate(()=>S.seen.includes(100)&&S.uncleStep===10&&S.m===76&&!S.finalMemoryConfirmed));
 // Favorable actual-trip simulation: every possible encounter succeeds, and all cohab is ready.
 await fixture(p,{day:1,aff:100,step:0,m:0});await p.evaluate(()=>S.finalMemoryConfirmed=true);const timeline=[];
 for(let day=1;day<=25;day++){
  await p.evaluate(day=>{cancelScenePresentation();document.querySelector('#mask').classList.remove('on');mq=[];busy=mbLock=backLock=dayLock=0;S.day=day;S.pendingObs=null;S.outToday=false;S.dEv=[];S.cohabToday=true;S.trip={id:0,place:PLACES[0][1],end:Date.now()+60000,acts:[],metUncle:day>=6};back();render()},day);
  const r=await p.evaluate(()=>({day:S.day,step:S.uncleStep,m:S.m}));timeline.push(r);if(r.step===10)break;
 }
 check('Actual most-favorable trip path reaches rain on Day23',timeline.at(-1).day===23&&timeline.at(-1).step===10,timeline);
 check('Day20 is still stage7 with relationship60 under the current gains',timeline.find(x=>x.day===20).step===7&&timeline.find(x=>x.day===20).m===60,timeline.find(x=>x.day===20));
 // Exhaust all 1024 possible encounter schedules for Days6-15, then guaranteed daily encounters.
 const bound=await p.evaluate(()=>{const original=S;let earliest=Infinity;for(let schedule=0;schedule<1024;schedule++){S=def();S.aff=100;S.seen=STORY.map(x=>x[0]);S.finalMemoryConfirmed=true;for(let day=1;day<=30;day++){S.day=day;const met=day>=16||(day>=6&&!!(schedule&(1<<(day-6))));if(met&&canAdvanceUncle()){S.uncleStep++;addM(uncleStepMAmt())}if(met)addM(appearMAmt());if(day===6)S.m=0;if(S.uncleStep===10){earliest=Math.min(earliest,day);break}}}S=original;return earliest});check('All legal early encounter schedules have earliest rain Day23',bound===23,bound);
 fs.writeFileSync(path.join(artifactDir,'ntr-rain-earliest.json'),JSON.stringify({earliestDay:bound,day20:timeline.find(x=>x.day===20),actualTimeline:timeline},null,2));
 check('No browser errors',errors.length===0,errors);await p.close();
})().then(async()=>{await browser.close();server.close();fs.writeFileSync(path.join(artifactDir,'ntr-hair-memory-gate-tests.json'),JSON.stringify({passed:checks.length,errors,checks},null,2));console.log(JSON.stringify({passed:checks.length,errors}));}).catch(async e=>{console.error(e.stack);console.log(JSON.stringify({last:checks.slice(-2),errors}));if(browser)await browser.close();server.close();process.exit(1)});
