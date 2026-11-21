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

for(const affinity of [30,60]){
  await fixture(affinity);
  await p.evaluate(()=>{
    S.trip={id:0,place:'超市',showDetails:false,end:Date.now()+60000,acts:[],metUncle:false};
    S.outToday=true;S.optSeen.blank.jack='old';render();
  });
  await p.locator('#roomContact').click();await p.clock.runFor(300);
  assert(await p.locator('#roomActionDialogue').isVisible());
  assert.equal(await p.evaluate(()=>isTyping($('roomActionText'))),false);
  assert.equal(await p.locator('#roomActionDialogue').evaluate(e=>e.classList.contains('is-message')),affinity===30);
  assert.equal(await p.locator('.dock').evaluate(e=>e.inert),false);
  assert(!(await p.locator('#roomActionDialogue').innerText()).includes('輕觸繼續'));
  const text=await p.locator('#roomActionText').innerText();
  await p.locator('#roomActionDialogue').hover();await p.mouse.down();await p.clock.runFor(9000);
  assert(await p.locator('#roomActionDialogue').isVisible());
  await p.mouse.up();await p.clock.runFor(7200);
  assert(!(await p.locator('#roomActionDialogue').isVisible()));
  await p.locator('#roomContact').click();await p.clock.runFor(300);
  assert.equal(await p.locator('#roomActionText').innerText(),text);
  await p.locator('#roomBathroom').click();await p.clock.runFor(300);
  assert.equal(await p.locator('#roomActionDialogue b').innerText(),'阿祿');
  assert(await p.evaluate(()=>roomActionReading.active));
  await p.locator('#navChat').click();await p.clock.runFor(300);
  assert(await p.locator('#chatRoom.on').isVisible());
  assert(!(await p.locator('#roomActionDialogue').isVisible()));
  await p.locator('#chatClose').click();await p.clock.runFor(300);
  console.log('PASS full text, timed dismissal, hold, cached reread and direct actions at affinity '+affinity);
}
await fixture();
await p.evaluate(()=>{S.trip={id:0,place:'超市',showDetails:false,end:Date.now()+60000,acts:[],metUncle:false};S.outToday=true;S.optSeen.blank.jack='old';render()});
await p.locator('#roomBathroom').click();await p.clock.runFor(300);
await p.locator('#roomActionDialogue').focus();await p.keyboard.down('Space');await p.clock.runFor(9000);
assert(await p.locator('#roomActionDialogue').isVisible());await p.keyboard.up('Space');
await p.evaluate(()=>S.trip.end=Date.now()-1);await p.clock.runFor(600);
assert(await p.locator('#roomActionDialogue').isVisible());assert.equal(await p.locator('#mask.on').count(),0);
await p.clock.runFor(7200);assert(await p.locator('#mask.on.return-window').isVisible());
console.log('PASS keyboard hold and automatic return after feedback');
await fixture();
await p.emulateMedia({reducedMotion:'no-preference'});
await p.evaluate(()=>{presentationPrefs.textSpeed=30;S.trip={id:0,end:Date.now()+60000,acts:[],metUncle:false};render()});
assert.equal(await p.locator('#roomTripLabel span').count(),5);
assert.equal(await p.locator('#roomTripLabel span').first().evaluate(e=>getComputedStyle(e).animationName),'outingLetterHop');
await p.locator('#roomBathroom').click();
assert(await p.locator('#roomActionText .typeInk').isVisible());
assert.equal(await p.evaluate(()=>roomActionReading.deadline),0);
assert.equal(await p.locator('#roomTripLabel span').first().evaluate(e=>getComputedStyle(e).animationPlayState),'paused');
await p.clock.runFor(9000);
assert(!(await p.locator('#roomActionDialogue').isVisible()));
assert.equal(await p.locator('#roomTripLabel span').first().evaluate(e=>getComputedStyle(e).animationPlayState),'running');
console.log('PASS progressive text, delayed auto-close, looping and paused title animation');
assert.deepEqual(errors,[]);
}finally{await b.close();server.close()}
})().catch(e=>{console.error(e);process.exit(1)});
