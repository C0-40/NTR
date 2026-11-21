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
 if(name==='STORY')continue; // All eight entries and the approved daisy replacements are checked in nstory-integration.cjs.
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
 await new Promise(r=>server.listen(0,'127.0.0.1',r));browser=await chromium.launch({executablePath:process.env.NTR_CHROMIUM_PATH||(fs.existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined),args:['--no-sandbox']});
 const p=await browser.newPage({viewport:{width:390,height:844},hasTouch:true,reducedMotion:'no-preference'});p.on('pageerror',e=>errors.push(e.message));await p.clock.install({time:new Date('2026-11-19T12:00:00Z')});await p.goto('http://127.0.0.1:'+server.address().port+'/');await p.clock.pauseAt(new Date('2026-11-19T12:00:10Z'));
 const copy=()=>p.evaluate(()=>[...document.querySelectorAll('.automaticReviewLine:not([hidden])')].map(x=>x.textContent).join('\n'));
 await fixture(p,{day:1,aff:0,step:0,m:0});await sleep(p);await drainNight(p,1,{stopReview:true});
 check('Ordinary unobserved trip reaches a full-screen transition without a return modal',await p.evaluate(()=>automaticReviewOpen()&&!document.querySelector('#mask').classList.contains('on')&&!returnWindowOpen()&&document.querySelector('#gameUI').inert&&maskOpen()));
 check('Transition preserves both user-provided lines exactly',await copy()==='她自行出門了一趟,傍晚才回到家中。\n你沒有查看她外出期間的心聲及剪影。');
 check('Transition uses a dark unframed stage and staggered text',await p.evaluate(()=>{const r=getComputedStyle(document.querySelector('#automaticReview')),a=getComputedStyle(document.querySelector('#automaticReviewReturn')),b=getComputedStyle(document.querySelector('#automaticReviewMissed'));return r.position==='fixed'&&r.borderTopWidth==='0px'&&r.backgroundColor==='rgb(33, 26, 32)'&&parseFloat(b.animationDelay)>parseFloat(a.animationDelay)}));
 check('First transition frame has no forced reading wait',await p.evaluate(()=>!automaticReview.ready&&!S.sleepRun.outingReviewSeen));
 await p.locator('#automaticReviewContinue').click();check('First early tap reveals all text without dismissing',await p.evaluate(()=>automaticReviewOpen()&&automaticReview.ready&&document.querySelector('#automaticReview').classList.contains('is-revealed')&&!S.sleepRun.outingReviewSeen));
 await p.locator('#automaticReviewContinue').click();check('Second tap enters summary with no extra day or affection',await p.evaluate(()=>!automaticReviewOpen()&&daySummaryOpen()&&S.sleepRun.outingReviewSeen&&S.day===1&&S.aff===2&&S.trips===1));
 await p.reload();check('Acknowledged transition does not replay on summary reload',await p.evaluate(()=>daySummaryOpen()&&!automaticReviewOpen()&&S.trips===1&&S.aff===2));await continueSummary(p);
 // Unread transitions survive reload; animations do not drive the clock or save progress.
 await fixture(p,{day:1,aff:0,step:0,m:0});await sleep(p);await drainNight(p,1,{stopReview:true});await p.reload();check('Unread scene restores the same day and one settled trip',await p.evaluate(()=>automaticReviewOpen()&&!daySummaryOpen()&&S.day===1&&S.aff===2&&S.trips===1));
 await p.keyboard.press('Tab');check('Keyboard focus stays on the transition control',await p.evaluate(()=>document.activeElement.id==='automaticReviewContinue'));await p.keyboard.press('Space');check('Keyboard can reveal the scene immediately',await p.evaluate(()=>automaticReviewOpen()&&automaticReview.ready));await p.keyboard.press('Enter');check('Keyboard can then continue to summary',await p.evaluate(()=>!automaticReviewOpen()&&daySummaryOpen()));await continueSummary(p);
 // Real stage-advancing return text is retained under its own approved stage title.
 await p.emulateMedia({reducedMotion:'reduce'});await fixture(p,{day:20,aff:100,step:4,m:24});await sleep(p);await p.clock.runFor(900);
 check('Major automatic return retains exact script under the stage title',await p.evaluate(()=>S.uncleStep===5&&document.querySelector('#mt').textContent===uncleArcByStep(5).title&&document.querySelector('#mp').textContent===uncleArcByStep(5).home&&!returnWindowOpen()&&!automaticReviewOpen()));
 await p.reload();check('Major automatic story survives reload without replaying the trip',await p.evaluate(()=>S.trips===1&&S.uncleStep===5&&document.querySelector('#mp').textContent===uncleArcByStep(5).home));await drainNight(p,20,{stopReview:true});check('Required major reading is followed by the short transition',await p.evaluate(()=>automaticReviewOpen()&&S.trips===1&&!document.querySelector('#mask').classList.contains('on')));await p.locator('#automaticReviewContinue').click();await continueSummary(p);
 // Manual outings retain the existing return/observation window.
 await fixture(p,{day:12,aff:100,step:1,m:4});await back(p);check('Manual outing still uses the original return and observation window',await p.evaluate(()=>returnWindowOpen()&&document.querySelector('#mt').textContent==='她回來了'&&!!S.pendingObs));await dismiss(p);await sleep(p);check('Manual outing does not acquire an automatic recap transition',await p.evaluate(()=>!automaticReviewOpen()&&!S.sleepRun.autoTrip));await drainNight(p,12);
 // Legacy ordinary return entries are skipped, while their one-time settlement remains intact.
 await fixture(p,{day:1,aff:0,step:0,m:0});await p.evaluate(()=>{S.outToday=true;S.trips=1;S.pendingObs={nightTxt:'舊版普通當晚內容',trTxt:'舊版痕跡',met:false};S.sleepRun={day:1,force:true,phase:'events',active:{returnHome:true,nightTxt:S.pendingObs.nightTxt},queued:[],autoTrip:{uid:'day-1-outing',day:1,id:0,place:PLACES[0][1],auto:true,metUncle:false}};save()});await p.reload();check('Old ordinary return save resumes at the transition without the removed window',await p.evaluate(()=>automaticReviewOpen()&&!returnWindowOpen()&&!document.querySelector('#mask').classList.contains('on')&&S.trips===1&&S.aff===2));await p.locator('#automaticReviewContinue').click();await continueSummary(p);
 // Existing modal-review saves open the new stage using the same persisted acknowledgment flag.
 await fixture(p,{day:1,aff:2,step:0,m:0});await p.evaluate(()=>{S.outToday=true;S.trips=1;S.lastDailyAffinityGrantedDay=1;S.sleepRun={day:1,force:true,phase:'outing-review',active:{automaticOutingReview:true},queued:[],autoTrip:{uid:'day-1-outing',auto:true}};save()});await p.reload();check('Prior-version review modal save migrates into the new stage',await p.evaluate(()=>automaticReviewOpen()&&!document.querySelector('#mask').classList.contains('on')&&S.aff===2&&S.trips===1));await p.locator('#automaticReviewContinue').click();await drainNight(p,1);
 // Rain-night text and next-morning return remain real, and never claim a same-night return.
 await fixture(p,{day:20,aff:98,step:9,m:69});await p.evaluate(()=>{delete S.nstory.read[100]});await sleep(p);await p.clock.runFor(900);check('Automatic storm presents the sole approved NSTORY5 scene',await p.evaluate(()=>isStormNight()&&document.querySelector('#mp').textContent===nstoryById(100)[2]));await drainNight(p,20,{stopReview:true});check('Storm transition suppresses false return text visually and accessibly',await p.evaluate(()=>automaticReviewOpen()&&document.querySelector('#automaticReviewReturn').hidden&&document.querySelector('#automaticReview').getAttribute('aria-describedby')==='automaticReviewMissed'));await p.locator('#automaticReviewContinue').click();await continueSummary(p);check('Storm return still occurs only next morning, once',await p.evaluate(()=>S.day===21&&S.trips===1&&!S.stormStay&&returnWindowOpen()&&document.querySelector('#mp').textContent===uncleArcByStep(10).home));await dismiss(p);
 // Fit and actual touch input on four mobile sizes, without capturing images or recordings.
 for(const [width,height] of [[320,568],[360,640],[390,844],[430,932]]){
  await p.setViewportSize({width,height});await fixture(p,{day:1,aff:0,step:0,m:0});await sleep(p);await drainNight(p,1,{stopReview:true});
  const bounds=await p.evaluate(()=>{const r=document.querySelector('#automaticReview').getBoundingClientRect(),c=document.querySelector('.automaticReviewCopy').getBoundingClientRect(),h=document.querySelector('#automaticReviewHint').getBoundingClientRect(),b=document.querySelector('#automaticReviewContinue').getBoundingClientRect();return {width:innerWidth,height:innerHeight,right:r.right,bottom:r.bottom,copyBottom:c.bottom,hintTop:h.top,buttonHeight:b.height,wide:document.documentElement.scrollWidth>innerWidth}});
  check(`Scene ${width}: full viewport and readable text do not overlap the continue hint`,bounds.right===width&&bounds.bottom===height&&bounds.copyBottom<bounds.hintTop&&bounds.buttonHeight>=44&&!bounds.wide,bounds);
  check(`Scene ${width}: reduced motion presents all text without animation`,await p.evaluate(()=>automaticReview.ready&&getComputedStyle(document.querySelector('#automaticReview')).animationName==='none'&&getComputedStyle(document.querySelector('#automaticReviewReturn')).opacity==='1'));
  await p.locator('#automaticReviewContinue').tap();await p.clock.runFor(100);check(`Scene ${width}: one touch reaches summary exactly once`,await p.evaluate(()=>!automaticReviewOpen()&&daySummaryOpen()&&S.day===1&&S.aff===2&&S.trips===1));await continueSummary(p);
 }
 check('No browser errors',errors.length===0,errors);await p.close();
})().then(async()=>{await browser.close();server.close();fs.writeFileSync(path.join(artifactDir,'ntr-automatic-outing-scene-tests.json'),JSON.stringify({passed:checks.length,errors,checks},null,2));console.log(JSON.stringify({passed:checks.length,errors}));}).catch(async e=>{console.error(e.stack);console.log(JSON.stringify({last:checks.slice(-2),errors}));if(browser)await browser.close();server.close();process.exit(1)});
