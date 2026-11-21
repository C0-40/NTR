const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const http=require('node:http');
const root=require('node:path').resolve(__dirname,'..');
const server=http.createServer((req,res)=>{
  const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname).slice(1)||'xiaoying-tongju-riji.html';
  try {res.end(fs.readFileSync(root+'/'+name));} catch {res.writeHead(404);res.end();}
});
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
  try {
    const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.clock.install();await page.goto('http://127.0.0.1:'+server.address().port);
    async function fixture(aff=55){
      await page.evaluate(aff=>{
        cancelScenePresentation();resetMomReading();closePane();hideSqOpts();
        document.querySelectorAll('#mask,#momPhone,#chatRoom').forEach(el=>el.classList.remove('on'));
        $('gameUI').inert=false;S=def();Object.assign(S,{day:4,aff,momIntroSeen:true,cohabToday:true});
        S.seen=STORY.map(x=>x[0]).concat(NSTORY.map(x=>'n'+x[0]));
        S.nstory.read=Object.fromEntries(NSTORY.map(x=>[x[0],true]));
        S.memSeen=MEMORIES.map(x=>x[0]);mq=[];tab='';busy=backLock=mbLock=dayLock=0;
        Object.assign(presentationPrefs,{textSpeed:0,music:0,sfx:0,ambient:0});
        ensureDailyBase();render();
      },aff);
    }
    await fixture();
    assert.equal(await page.locator('#privateThoughts').isVisible(),false);
    for(let place=0;place<5;place++){
      await fixture(100);
      const elapsed=await page.evaluate(place=>{goNow(place);return S.trip.end-Date.now()},place);
      assert(elapsed<=120000&&elapsed>119000);
    }
    console.log('PASS all five destinations use 120 seconds');
    await fixture(54);
    await page.evaluate(()=>{S.trip={id:0,place:'超市',end:Date.now()+120000,acts:[],showDetails:true};render();thought()});
    assert.equal(await page.locator('#privateThoughts').isVisible(),true);
    for(const button of await page.locator('[data-thought-topic]').all())assert(await button.isDisabled());
    await page.evaluate(()=>selectThoughtTopic('alu'));
    assert.equal(await page.evaluate(()=>selectedThoughtTopic()),null);
    assert.equal(await page.locator('#focusPad').isEnabled(),true);
    await page.evaluate(()=>{S.aff=55;render()});
    for(const button of await page.locator('[data-thought-topic]').all())assert(await button.isEnabled());
    const heartBefore=await page.evaluate(()=>({text:$('thb').textContent,time:thT,face:$('heartFace').getAttribute('data-face')}));
    await page.locator('[data-thought-topic="alu"]').click();
    assert.equal(await page.locator('#privateThoughtView').innerText(),'此項想法內容待補。');
    assert.equal(await page.locator('#focusPad').isEnabled(),true);
    assert.deepEqual(await page.evaluate(()=>({text:$('thb').textContent,time:thT,face:$('heartFace').getAttribute('data-face')})),heartBefore);
    console.log('PASS 54/55 gate and independent pending reader');
    await page.evaluate(()=>{
      PRIVATE_THOUGHTS[0].entries=[{step:0,text:'測試用早期內容'},{step:3,text:'測試用後期內容'}];
      PRIVATE_THOUGHTS[1].entries=[{step:0,text:'測試用第二類內容'}];
      S.uncleStep=2;render();
    });
    const state=await page.evaluate(()=>JSON.stringify([S.aff,S.m,S.uncleStep,S.trip.end,S.trip.acts,S.seen]));
    assert.equal(await page.locator('#privateThoughtView').textContent(),'測試用早期內容');
    assert.equal(await page.locator('#focusPad').isEnabled(),true);
    await page.locator('#focusPad').focus();await page.keyboard.down('Enter');
    assert.equal(await page.evaluate(()=>outingFocus.holding),true);
    assert.equal(await page.locator('#thb').getAttribute('aria-hidden'),'false');
    await page.keyboard.up('Enter');
    const panelHeight=await page.locator('#privateThoughts').evaluate(el=>el.getBoundingClientRect().height);
    await page.locator('#privateThoughtBack').click();
    await page.locator('[data-thought-topic="uncle"]').click();
    assert.equal(await page.locator('#privateThoughtView').textContent(),'測試用第二類內容');
    assert.equal(await page.evaluate(()=>JSON.stringify([S.aff,S.m,S.uncleStep,S.trip.end,S.trip.acts,S.seen])),state);
    assert.equal(await page.locator('#privateThoughts').evaluate(el=>el.getBoundingClientRect().height),panelHeight);
    const lastThoughtTime=await page.evaluate(()=>thT);
    await page.clock.runFor(6500);
    assert(await page.evaluate(time=>thT>time,lastThoughtTime));
    assert.equal(await page.locator('#privateThoughtView').textContent(),'測試用第二類內容');
    assert((await page.locator('#thbox b').innerText()).endsWith('心聲'));
    await page.evaluate(()=>{S.uncleStep=3;selectThoughtTopic('alu')});
    assert.equal(await page.locator('#privateThoughtView').textContent(),'測試用後期內容');
    await page.locator('#privateThoughtBack').click();
    assert.equal(await page.evaluate(()=>selectedThoughtTopic()),null);
    assert.equal(await page.locator('#privateThoughtView').isVisible(),false);
    console.log('PASS separate reader, live thought rotation, focus, stable height and no gameplay side effects');
    for(const size of [{width:320,height:640},{width:360,height:740},{width:390,height:844},{width:430,height:932},{width:844,height:390}]){
      await page.setViewportSize(size);await page.evaluate(()=>render());
      const layout=await page.evaluate(()=>{
        const panel=$('privateThoughts').getBoundingClientRect(),heart=$('heartRow').getBoundingClientRect(),back=$('tripRoomBack').getBoundingClientRect();
        return {width:innerWidth,height:innerHeight,panel:{left:panel.left,right:panel.right,top:panel.top,bottom:panel.bottom},heartBottom:heart.bottom,backTop:back.top,backBottom:back.bottom};
      });
      assert(layout.panel.left>=0&&layout.panel.right<=layout.width,JSON.stringify(layout));
      assert(layout.panel.top>=layout.heartBottom-1,JSON.stringify(layout));
      assert(layout.backTop>=layout.panel.bottom-1,JSON.stringify(layout));
      if(size.height>=640)assert(layout.backBottom<=layout.height,JSON.stringify(layout));
    }
    console.log('PASS mobile layouts and no overlap with back control');
    await page.evaluate(()=>{selectThoughtTopic('uncle');save()});await page.reload();
    assert.equal(await page.evaluate(()=>S.trip.thoughtTopic),'uncle');
    await page.evaluate(()=>switchTripView(true));
    assert.equal(await page.locator('[data-thought-topic="uncle"]').getAttribute('aria-pressed'),'true');
    await page.evaluate(()=>{delete S.trip.thoughtTopic;save()});await page.reload();
    await page.evaluate(()=>switchTripView(true));
    assert.equal(await page.evaluate(()=>selectedThoughtTopic()),null);
    await page.evaluate(()=>{S.trip.end=Date.now()-1;busy=mbLock=0});await page.clock.runFor(1500);
    assert.equal(await page.evaluate(()=>S.trip),null);
    assert.equal(await page.locator('#privateThoughts').isVisible(),false);
    assert.deepEqual(errors,[]);
    console.log('PASS reload, legacy saves and automatic return');
  } finally {await browser.close();server.close();}
})().catch(error=>{console.error(error);process.exit(1)});
