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


await fixture(30);
await p.emulateMedia({reducedMotion:'no-preference'});
await p.evaluate(()=>{presentationPrefs.textSpeed=30;S.seen=S.seen.filter(id=>id!==30);S.cohabToday=false;render()});
assert(await p.locator('#cohabPlay').isVisible());assert.equal(await p.locator('#mask.on').count(),0);
assert.equal(await p.locator('#cohabSpeaker').innerText(),'阿祿');
assert(await p.evaluate(()=>isTyping($('cohabText'))));
await p.locator('#cohabDialogue').dispatchEvent('click');
assert.equal(await p.evaluate(()=>S.cohabScene.index),0);
assert.equal(await p.locator('#cohabText').innerText(),'……只是倒杯水而已。');
await p.locator('#cohabDialogue').click();
assert.equal(await p.locator('#cohabSpeaker').innerText(),'小紅');
await p.reload();
assert.equal(await p.evaluate(()=>S.cohabScene.index),1);
assert(await p.locator('#cohabPlay').isVisible());
await p.emulateMedia({reducedMotion:'reduce'});await p.evaluate(()=>stopTyping($('cohabText'),true));
for(let i=1;i<9;i++){
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
await p.locator('#cohabSkip').click();
assert(await p.evaluate(()=>!S.morningCohab.length&&!S.cohabToday&&S.activeMorningCohab==null));
console.log('PASS deferred morning event keeps next-day quota');
assert.deepEqual(errors,[]);
}finally{await b.close();server.close()}
})().catch(e=>{console.error(e);process.exit(1)});
