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
  S.nstory.read=Object.fromEntries(NSTORY.map(event=>[event[0],true]));
Object.assign(presentationPrefs,{textSpeed:0,music:0,ambient:0,sfx:0});ensureDailyBase();render();
},aff)}


await fixture(30);
await p.emulateMedia({reducedMotion:'no-preference'});
const homeBounds=await p.locator("#dlg").boundingBox();
await p.evaluate(()=>{presentationPrefs.textSpeed=30;S.seen=S.seen.filter(id=>id!==30);S.cohabToday=false;render()});
assert(await p.locator('#cohabOffer[open]').isVisible());
await p.locator('#cohabOfferPlay').click();
assert(await p.locator('#cohabPlay').isVisible());
assert.deepEqual(await p.locator('#cohabDialogue').boundingBox(),homeBounds);
assert.equal(await p.locator('.topHud').isVisible(),false);
assert.equal(await p.locator('#navAsk').isVisible(),false);
assert.equal(await p.locator('#mask.on').count(),0);
assert.equal(await p.locator('#cohabSpeaker').innerText(),'阿祿');
assert(await p.evaluate(()=>isTyping($('cohabText'))));
await p.locator('#cohabDialogue').dispatchEvent('click');
assert.equal(await p.evaluate(()=>S.cohabScene.index),0);
assert.equal(await p.locator('#cohabText').innerText(),'……只是倒杯水而已。');
await p.clock.runFor(250);
assert((await p.locator('#av').evaluate(e=>getComputedStyle(e).filter)).includes('brightness(0.9)'));
const maleBadge=await p.locator('#cohabSpeaker').evaluate(e=>getComputedStyle(e).backgroundColor);

await p.locator('#cohabDialogue').click();
assert.equal(await p.locator('#cohabSpeaker').innerText(),'小紅');
await p.clock.runFor(250);
assert(await p.locator('#av').evaluate(e=>{getComputedStyle(e).filter;e.getAnimations().filter(animation=>Number.isFinite(animation.effect.getComputedTiming().endTime)).forEach(animation=>animation.finish());return Number(getComputedStyle(e).filter.match(/brightness\(([\d.]+)\)/)[1])>=.99}));
assert.notEqual(await p.locator('#cohabSpeaker').evaluate(e=>getComputedStyle(e).backgroundColor),maleBadge);

await p.reload();
assert.equal(await p.evaluate(()=>S.cohabScene.index),1);
assert(await p.locator('#cohabPlay').isVisible());
await p.emulateMedia({reducedMotion:'reduce'});await p.evaluate(()=>stopTyping($('cohabText'),true));
const dialogueBounds=await p.locator("#cohabDialogue").boundingBox();
for(let i=1;i<9;i++){
  assert.deepEqual(await p.locator("#cohabDialogue").boundingBox(),dialogueBounds);
  assert.equal(await p.evaluate(()=>S.cohabScene.index),i);
  if(i===8)assert.equal(await p.locator('#cohabNext').innerText(),'結束 ▾');
  await p.locator('#cohabDialogue').click();
}
assert(!(await p.locator('#cohabPlay').isVisible()));
assert(await p.evaluate(()=>S.seen.includes(30)&&S.cohabToday&&!S.cohabScene));
await p.evaluate(()=>replay(0));assert(await p.locator('#mask.on').isVisible());
assert.equal(await p.locator('#mp').innerText(),await p.evaluate(()=>STORY[0][2]));
console.log('PASS natural first unlock, speaker turns, typewriter completion, reload, ending and full-text replay');
await fixture(30);
await p.evaluate(()=>{S.seen=S.seen.filter(id=>id!==30);S.cohabToday=false;render()});
assert(await p.locator('#cohabOffer[open]').isVisible());
await p.locator('#cohabOfferPlay').click();
await p.locator('#cohabSkip').click();
assert(await p.evaluate(()=>!S.cohabScene&&S.seen.includes(30)&&S.cohabToday&&!presentationHeld()));
console.log('PASS one-click skip and existing unlock quota');
await fixture(30);
await p.evaluate(()=>{S.cohabScene={id:30,index:0};showCohabScene(30)});
for(const width of [320,390,430]){
 await p.setViewportSize({width,height:640});await p.clock.runFor(100);
 assert(await p.locator('#cohabDialogue').evaluate(e=>{const r=e.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth&&r.top>120&&r.bottom<innerHeight}));
 await p.evaluate(()=>typeDialogue($('cohabText'),'水'.repeat(35)));
 assert(await p.locator('#cohabText').evaluate(e=>e.scrollHeight<=e.clientHeight+1&&e.scrollWidth<=e.clientWidth+1));
}
await p.locator('#cohabSkip').click();
console.log('PASS 35 Chinese characters and short mobile layouts');
await fixture(30);
await p.evaluate(()=>{S.morningCohab=[{id:30,day:S.day}];mq=[{morningCohab:30}];S.cohabToday=false;nextPop()});
await p.locator('#cohabOfferPlay').click();
await p.locator('#cohabSkip').click();
assert(await p.evaluate(()=>!S.morningCohab.length&&!S.cohabToday&&S.activeMorningCohab==null));
console.log('PASS deferred morning event keeps next-day quota');
await fixture(40);
await p.evaluate(()=>{S.seen=S.seen.filter(id=>id!==40);S.cohabToday=false;render()});
assert.equal(await p.locator('#cohabOfferTitle').innerText(),'起床');
await p.reload();assert.equal(await p.evaluate(()=>S.cohabOffer),40);
await p.locator('#cohabOfferSkip').click();
assert(await p.evaluate(()=>S.cohabOffer==null&&S.seen.includes(40)&&!maskOpen()));
await p.evaluate(()=>replay(1));assert(await p.locator('#mask.on').isVisible());
console.log('PASS first-event choice restores, skip preserves unlock and replay remains full text');
await fixture(30);
await p.evaluate(()=>{S.sleepRun={day:S.day,phase:'events',active:{cohabOffer:30},queued:[],autoTrip:null};showCohabOffer(30)});
await p.locator('#cohabOfferPlay').click();await p.reload();
assert(await p.locator('#cohabPlay').isVisible());
assert.equal(await p.locator('#cohabSkip').evaluate(e=>e.closest('#gameUI').inert),false);
await p.locator('#cohabSkip').click();await p.clock.runFor(300);
assert(await p.evaluate(()=>!S.cohabScene&&S.cohabOffer==null));
console.log('PASS sleep flow scene reload and one-time completion');
await fixture(9);
await p.evaluate(()=>{S.seen=S.seen.filter(id=>id!==30);S.cohabToday=false;render()});
assert.equal(await p.locator('#cohabOffer[open]').count(),0);
await p.evaluate(()=>{S.aff=10;render()});
assert.equal(await p.evaluate(()=>S.cohabOffer),30);
await p.locator('#cohabOfferSkip').click();
await p.reload();
assert(await p.evaluate(()=>S.seen.includes(30)&&S.cohabOffer==null));
await p.evaluate(()=>{setTab('story')});
assert((await p.locator('#pane').innerText()).includes('親密度 10 解鎖'));
console.log('PASS affinity 9/10 boundary, original ID and saved unlock record');

const cases=await p.evaluate(()=>STORY.map((event,index)=>({id:event[0],name:event[1],text:event[2],index,aff:cohabRequiredAff(event)})));
for(const event of cases){
  await fixture(event.aff);
  await p.evaluate(id=>{S.seen=S.seen.filter(value=>value!==id);S.cohabToday=false;S.finalMemoryConfirmed=true;render()},event.id);
  assert.equal(await p.locator('#cohabOfferTitle').innerText(),event.name);
  await p.locator('#cohabOfferPlay').click();
  const lines=event.text.split(/\n+/).filter(Boolean);
  for(let index=0;index<lines.length;index++){
    if(index===1){await p.reload();assert.equal(await p.evaluate(()=>S.cohabScene.index),1)}
    assert.equal(await p.locator('#cohabSpeaker').innerText(),lines[index].split('：')[0]);
    assert.equal(await p.locator('#cohabText').innerText(),lines[index].slice(lines[index].indexOf('：')+1).trim());
    await p.locator('#cohabDialogue').click();
  }
  assert(await p.evaluate(()=>S.cohabScene==null&&!presentationHeld()));
  await p.evaluate(index=>replay(index),event.index);
  assert.equal(await p.locator('#mp').innerText(),event.text);
  console.log('PASS '+event.name+' natural unlock, exact dialogue, reload and full-text replay');
}
await fixture(100);
await p.evaluate(()=>{S.seen=S.seen.filter(id=>id!==100);S.cohabToday=false;S.finalMemoryConfirmed=false;render()});
assert.equal(await p.locator('#cohabOffer[open]').count(),0);
await p.evaluate(()=>{S.finalMemoryConfirmed=true;render()});
assert.equal(await p.evaluate(()=>S.cohabOffer),100);
await p.locator('#cohabOfferSkip').click();
console.log('PASS final memory prerequisite');
assert.deepEqual(errors,[]);
}finally{await b.close();server.close()}
})().catch(e=>{console.error(e);process.exit(1)});
