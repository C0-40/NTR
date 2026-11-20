const {chromium}=require('playwright'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const root=path.resolve(__dirname,'..');
const server=http.createServer((request,response)=>{
  try{
    const filename=decodeURIComponent(new URL(request.url,'http://localhost').pathname).slice(1)||'xiaoying-tongju-riji.html';
    response.setHeader('Content-Type',filename.endsWith('.png')?'image/png':'text/html; charset=utf-8');
    response.end(fs.readFileSync(path.join(root,filename)));
  }catch{response.writeHead(404);response.end()}
});
(async()=>{
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
try {
const p=await b.newPage({viewport:{width:360,height:740},reducedMotion:'reduce'});p.setDefaultTimeout(3000);const errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.clock.install();await p.goto('http://127.0.0.1:'+server.address().port+'/xiaoying-tongju-riji.html');
async function fixture(aff=60){await p.evaluate(aff=>{
cancelScenePresentation();resetMomReading();closePane();hideSqOpts();clearMoodPeek();
document.querySelectorAll('#mask,#momPhone,#chatRoom').forEach(e=>e.classList.remove('on'));
$('gameUI').inert=false;S=def();Object.assign(S,{day:4,aff,momIntroSeen:true,cohabToday:true,heroIntroPending:false});
S.seen=STORY.map(x=>x[0]).concat(NSTORY.map(x=>'n'+x[0]));S.memSeen=MEMORIES.map(x=>x[0]);S.memPending=[];tab='';mq=[];busy=backLock=mbLock=dayLock=0;
Object.assign(presentationPrefs,{textSpeed:0,music:0,ambient:0,sfx:0});ensureDailyBase();render();
},aff)}
await fixture();await p.evaluate(()=>go(0));await p.clock.runFor(600);
await p.locator('#mb').click();await p.clock.runFor(300);
assert(await p.locator('#roomTripLabel').isVisible());assert.equal(await p.evaluate(()=>isOutingPhase()),false);
assert.equal(await p.locator('.roomTripLink').innerText(),'窺探小紅狀態');
for(const width of [320,390,430]){
await p.setViewportSize({width,height:740});
assert(await p.locator('#roomNap').evaluate(e=>e.getBoundingClientRect().bottom<=innerHeight));
await p.locator('#roomBathroom').click();await p.clock.runFor(100);
assert(await p.locator('#roomActionDialogue').evaluate(e=>e.getBoundingClientRect().bottom<document.querySelector('.dock').getBoundingClientRect().top));
await p.locator('#roomActionDialogue').click();await p.clock.runFor(100);
}
await p.locator('#navChat').click();const remaining=await p.evaluate(()=>S.trip.forumRemaining);
await p.clock.runFor(90000);assert.equal(await p.evaluate(()=>tripSeconds()),Math.ceil(remaining/1000));assert(await p.locator('#forumPauseHint').isVisible());
await p.reload();assert(await p.locator('#roomTripLabel').isVisible());
assert(await p.evaluate(r=>S.trip.end-Date.now()<=r&&S.trip.end-Date.now()>r-1000,remaining));
await p.locator('#navChat').click();await p.locator('#chatClose').click();
await p.locator('#roomBathroom').click();await p.evaluate(()=>S.trip.end=Date.now()-1);await p.clock.runFor(1000);
assert(await p.locator('#roomActionDialogue').isVisible());await p.locator('#roomActionDialogue').click();await p.clock.runFor(1000);
assert(await p.locator('#mask.on.return-window').isVisible());
await p.locator('#mb').click();await p.clock.runFor(300);
assert.equal(await p.evaluate(()=>S.pendingObs),null);assert(await p.locator('.dock [data-t="go"]').isDisabled());
console.log('PASS room entry, mobile layout, forum pause/reload, deferred automatic return and one-time observation');
await fixture();await p.evaluate(()=>{S.trip={id:0,place:'超市',end:Date.now()+1000,acts:[],showDetails:true,metUncle:false};render()});
await p.clock.runFor(2000);assert(await p.locator('#mask.on.return-window').isVisible());
console.log('PASS automatic return from status screen');
await fixture(28);
await p.evaluate(()=>{S.day=2;S.seen=NSTORY.map(x=>'n'+x[0]);S.cohabToday=true;S.memSeen=MEMORIES.map(x=>x[0]);S.outToday=false;Math.random=()=>.99;ensureDailyBase();save();sleepDay()});
for(let i=0;i<65&&!await p.evaluate(()=>daySummaryOpen());i++){
await p.clock.runFor(150);
await p.evaluate(()=>{busy=mbLock=0;if(automaticReviewOpen())continueAutomaticReview();else if(maskOpen())dismissMask()});
}
assert(await p.evaluate(()=>daySummaryOpen()));assert(await p.evaluate(()=>S.aff===30&&S.morningCohab.some(x=>x.id===30&&x.day===3)));
await p.reload();assert(await p.evaluate(()=>daySummaryOpen()&&S.morningCohab.length===1));
await p.locator('#daySummaryContinue').click();await p.clock.runFor(1600);
assert(await p.locator('#mask.on').isVisible());assert(await p.evaluate(()=>S.day===3&&S.activeMorningCohab===30&&!S.cohabToday));
await p.reload();assert(await p.evaluate(()=>S.activeMorningCohab===30&&!S.cohabToday));
await p.locator('#mb').click();await p.clock.runFor(300);assert(await p.evaluate(()=>!S.morningCohab.length&&!S.cohabToday));
await p.reload();assert(await p.evaluate(()=>!S.morningCohab.length&&!maskOpen()));
console.log('PASS sleep bonus unlock saved, delivered tomorrow, no quota consumption or duplicate replay');
await fixture(33);
await p.evaluate(()=>{S.day=2;S.memSeen=[20];S.memPending=[];S.outToday=false;Math.random=()=>.99;ensureDailyBase();save();sleepDay()});
for(let i=0;i<65&&!await p.evaluate(()=>daySummaryOpen());i++){
  await p.clock.runFor(150);
  await p.evaluate(()=>{busy=mbLock=0;if(automaticReviewOpen())continueAutomaticReview();else if(maskOpen())dismissMask()});
}
assert(await p.evaluate(()=>daySummaryOpen()&&S.aff===35&&S.memPending.includes(35)&&!S.memSeen.includes(35)));
await p.locator('#daySummaryContinue').click();await p.clock.runFor(1600);
assert(await p.evaluate(()=>S.day===3&&S.memSeen.includes(35)&&maskOpen()));
console.log('PASS memory unlocked by sleep bonus appears the next morning');
assert.deepEqual(errors,[]);console.log('PASS no browser errors');
}finally{await b.close();server.close()}
})().catch(e=>{console.error(e);process.exit(1)});
