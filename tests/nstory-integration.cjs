const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'xiaoying-tongju-riji.html'), 'utf8');
const approved = fs.readFileSync(path.join(root, 'docs/nstory-approved-2026-11-21.md'), 'utf8');
const expected = [...approved.matchAll(/^### NSTORY \d+：([^\n]+)\n([\s\S]*?)(?=^### NSTORY |^## 五、)/gm)]
  .map(match => [match[1].trim(), match[2].trim()]);
function arrayData(text,name){
  const match=new RegExp('\\b'+name+'\\s*=\\s*\\[').exec(text);
  assert(match,'Missing data '+name);
  const start=text.indexOf('[',match.index);
  let depth=0,quote=null,escaped=false;
  for(let index=start;index<text.length;index++){
    const character=text[index];
    if(quote){
      if(escaped)escaped=false;
      else if(character==='\\')escaped=true;
      else if(character===quote)quote=null;
      continue;
    }
    if(character==='"'||character==="'"){quote=character;continue;}
    if(character==='[')depth++;
    if(character===']'&&--depth===0)return JSON.parse(JSON.stringify(vm.runInNewContext(text.slice(start,index+1),{OUTING_SECONDS:Number(text.match(/\bOUTING_SECONDS\s*=\s*(\d+)/)[1])})));
  }
  throw new Error('Unclosed data '+name);
}
const actual=arrayData(source,'NSTORY');
const previous=require('node:child_process').execFileSync('git',['show','5a06d6b:xiaoying-tongju-riji.html'],{cwd:root,encoding:'utf8',maxBuffer:8*1024*1024});
for(const name of ['CHAT_THREADS','STORY','MEMORIES','NEAR_SAY','NT','SOFT','HOME','FLAT_NIGHT','NIGHT','SQ','PLACES','PLACE_TH']){
  assert.deepEqual(arrayData(source,name),arrayData(previous,name),'Unrelated data changed: '+name);
}
const currentArc=arrayData(source,'UNCLE_ARC'),previousArc=arrayData(previous,'UNCLE_ARC');
const newHome="翌日，小紅終於回到家中，看起來有些疲倦。\n\n阿祿：回來了？昨晚在朋友家還好嗎？\n\n小紅：嗯……雨聲太大，沒怎麼睡。\n\n阿祿：那先休息一下吧。\n\n小紅：……嗯。讓你擔心了。";
assert.equal(currentArc.find(event=>event.step===10).home,newHome);
currentArc.find(event=>event.step===10).home=previousArc.find(event=>event.step===10).home;
assert.deepEqual(currentArc.find(event=>event.step===5).th,['……為甚麼突然這樣！','對方的體溫傳過來了，吐息好重……','一切也太突然了，一時候拒絕不了……']);
assert.equal(currentArc.find(event=>event.step===1).trace,'她一邊收拾買回來的東西，一邊小聲哼歌。提起街角的事時，她偷偷看了你一眼，像是在等你說些甚麼。');
assert.deepEqual(currentArc.find(event=>event.step===6).th,["……他已經為上次的事道歉了……可是，我明明答應過阿祿，不再跟他聯絡……", "他說病已經治不好了……如果連我也不理他，他就真的只剩下一個人了……", "……只是過來看一眼而已……確認他沒事，我就回家……"]);
currentArc.find(event=>event.step===5).th=previousArc.find(event=>event.step===5).th;
currentArc.find(event=>event.step===6).th=previousArc.find(event=>event.step===6).th;
currentArc.find(event=>event.step===1).trace=previousArc.find(event=>event.step===1).trace;
assert.deepEqual(currentArc,previousArc,'Other main-story data changed');
assert.deepEqual(JSON.parse(JSON.stringify(actual.map(event => event.slice(1)))), expected);
assert(fs.readFileSync(path.join(root, '小櫻的同居日記.html')).equals(Buffer.from(source)));
const server = http.createServer((request, response) => {
  try {
    const name = decodeURIComponent(new URL(request.url, 'http://localhost').pathname).slice(1) || 'xiaoying-tongju-riji.html';
    response.setHeader('Content-Type', name.endsWith('.png') ? 'image/png' : 'text/html; charset=utf-8');
    response.end(fs.readFileSync(path.join(root, name)));
  } catch { response.writeHead(404); response.end(); }
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.clock.install();
    await page.goto('http://127.0.0.1:' + server.address().port + '/');
    async function fixture(step) {
      await page.evaluate(step => {
        cancelScenePresentation(); resetMomReading(); hideSqOpts(); closePane(); hideAutomaticReview(); hideDaySummary();
        document.querySelectorAll('#mask,#momPhone,#chatRoom').forEach(element => element.classList.remove('on'));
        $('gameUI').inert = false;
        S = def();
        Object.assign(S, { day: 24, aff: 100, m: 90, uncleStep: step - 1, uncleStarted: true, momIntroSeen: true, cohabToday: true });
        S.seen = STORY.map(event => event[0]); S.memSeen = MEMORIES.map(event => event[0]);
        for (const event of NSTORY) if (NSTORY_STEPS[event[0]] < step) S.nstory.read[event[0]] = true;
        mq = []; tab = ''; busy = backLock = mbLock = dayLock = 0;
        Object.assign(presentationPrefs, { textSpeed: 0, letterSound: false, music: 0, ambient: 0, sfx: 0 });
        Math.random = () => .9;
        ensureDailyBase(); render();
      }, step);
    }
    async function settle() {
      await page.evaluate(() => {
        S.trip = { id: 0, uid: 'test-outing', place: '超市', end: Date.now() - 1, acts: [], metUncle: true };
        S.outToday = true; back(); render();
      });
      await page.clock.runFor(1000);
    }
    async function dismiss() {
      await page.locator('#mb').click();
      await page.clock.runFor(300);
    }
    for (const [step, id] of [[1, 1], [2, 20], [5, 45], [8, 70]]) {
      await fixture(step);
      await page.evaluate(() => { if (S.uncleStep === 4) { S.nstory.read[45] = false; S.seen = S.seen.filter(id => id !== 80); } });
      await settle();
      assert.equal(await page.evaluate(() => S.uncleStep), step);
      assert.equal(await page.locator('#mt').innerText(), actual.find(event => event[0] === id)[1]);
      assert.equal(await page.locator('#mp').innerText(), actual.find(event => event[0] === id)[2]);
      assert.equal(await page.evaluate(id => !!S.nstory.read[id], id), false);
      if (step === 5) assert.equal(await page.evaluate(() => canAdvanceUncle()), false);
      await page.reload();
      assert.equal(await page.locator('#mt').innerText(), actual.find(event => event[0] === id)[1]);
      await page.evaluate(() => observeTraces());
      await page.clock.runFor(400);
      assert.equal(await page.evaluate(id => !!S.nstory.read[id], id), false);
      await dismiss();
      assert(await page.evaluate(id => S.nstory.read[id], id));
      assert.equal(await page.locator('#mask.on').count(), 0);
      if (step === 5) assert(await page.evaluate(() => canAdvanceUncle()));
      const before = await page.evaluate(() => JSON.stringify([S.day, S.aff, S.m, S.uncleStep, S.trips, S.dEv]));
      await page.evaluate(id => replayN(NSTORY.findIndex(event => event[0] === id)), id);
      await dismiss();
      assert.equal(await page.evaluate(() => JSON.stringify([S.day, S.aff, S.m, S.uncleStep, S.trips, S.dEv])), before);
      console.log('PASS stage ' + step + ' exact body, single return, explicit completion, reload and side-effect-free review');
    }
    await fixture(2);
    await page.evaluate(() => sleepDay());
    for(let index=0;index<20 && await page.locator('#mt').innerText()!=='日常的侵蝕';index++)await page.clock.runFor(100);
    assert.equal(await page.locator('#mt').innerText(),'日常的侵蝕');
    assert(await page.evaluate(()=>S.sleepRun.autoTrip&&S.trips===1&&S.sleepRun.autoTrip.acts.length===0));
    await page.reload();
    assert.equal(await page.locator('#mt').innerText(),'日常的侵蝕');
    assert.equal(await page.evaluate(()=>S.trips),1);
    await dismiss();
    assert(await page.evaluate(()=>S.nstory.read[20]));
    console.log('PASS automatic outing delivers mandatory story without optional phone or observation');
    await fixture(10); await settle();
    assert(await page.evaluate(() => isStormNight() && S.pendingObs == null));
    assert.equal(await page.locator('#mt').innerText(), '暴風雨之夜');
    await dismiss();
    assert.equal(await page.locator('#mt').innerText(), '沒有回音的雨夜');
    assert.equal(await page.locator('#mp').innerText(), expected[4][1]);
    assert(await page.evaluate(() => isStormNight() && !S.trip && !S.pendingObs && !S.nstory.read[100]));
    await page.reload();
    assert.equal(await page.locator('#mt').innerText(), '沒有回音的雨夜');
    await dismiss();
    assert(await page.evaluate(() => isStormNight() && S.nstory.read[100]));
    await page.evaluate(() => sleepDay());
    for (let i = 0; i < 80 && await page.evaluate(() => S.day===24&&!daySummaryOpen()); i++) {
      await page.clock.runFor(100);
      await page.evaluate(() => { busy = mbLock = 0; if (maskOpen() && !daySummaryOpen()) dismissMask(); });
    }
    if(await page.evaluate(() => daySummaryOpen())){
      await page.locator('#daySummaryContinue').click(); await page.clock.runFor(1800);
    }
    await page.clock.runFor(1800);
    assert.equal(await page.locator('#mt').innerText(), '她回來了');
    assert((await page.locator('#mp').innerText()).includes('昨晚在朋友家還好嗎'));
    await page.evaluate(() => observeTraces()); await page.clock.runFor(400);
    await page.reload();
    assert.equal(await page.locator('#mt').innerText(), '她回來了');
    await dismiss();
    assert(await page.evaluate(() => !isStormNight() && S.nstory.milestones['10-return'] && canAdvanceUncle()));
    console.log('PASS overnight main scene, NSTORY5, sleep-only day advance, dedicated return, observation reload and step11 gate');

    await fixture(6);
    await page.evaluate(() => {
      delete S.nstory; S.uncleStep = 5; S.seen.push('n1', 'n20', 'n45'); save();
    });
    await page.reload();
    assert(await page.evaluate(() => S.nstory.legacyBefore === 5 && Object.keys(S.nstory.read).length === 0 && canAdvanceUncle()));
    assert.equal(await page.locator('#mask.on').count(), 0);
    await page.evaluate(() => save()); await page.reload();
    assert(await page.evaluate(() => S.nstory.legacyBefore === 5 && Object.keys(S.nstory.read).length === 0));
    console.log('PASS legacy stage5 save avoids retroactive batches and preserves progress without marking new episodes read');
    await fixture(10); await settle();
    await page.evaluate(()=>{delete S.nstory;save()});
    await page.reload();
    assert(await page.evaluate(()=>S.nstory.legacyBefore===9&&S.nstory.milestones[10]&&isStormNight()));
    await dismiss();
    assert.equal(await page.locator('#mt').innerText(),'沒有回音的雨夜');
    console.log('PASS legacy overnight save retains its current-night required story');
    await page.evaluate(()=>{
      delete S.nstory;
      S.sleepRun={day:S.day,phase:'events',active:{sleepLine:true,title:'💔 街角的強叔',body:'舊稿'},queued:[['💔 空掉的房間','舊稿'],{endingPrep:1}]};
      migrateNstory();
    });
    assert(await page.evaluate(()=>S.sleepRun.active==null&&S.sleepRun.queued.length===1&&S.sleepRun.queued[0].endingPrep===1));
    console.log('PASS retired queue entries removed while ending entries survive');
    await fixture(11);
    await page.evaluate(()=>{
      delete S.nstory;S.uncleStep=10;S.pendingObs={homeStep:10,nightTxt:uncleArcByStep(10).home,trTxt:'既有觀察',met:true};save();
    });
    await page.reload();
    assert.equal(await page.locator('#mt').innerText(),'她回來了');
    assert(await page.evaluate(()=>S.nstory.legacyBefore===10&&Object.keys(S.nstory.read).length===0));
    await dismiss();
    assert(await page.evaluate(()=>canAdvanceUncle()));
    console.log('PASS old save during next-day return avoids replaying the past night and can continue');
    await fixture(3);
    await page.evaluate(()=>{
      delete S.nstory;S.uncleStep=2;S.pendingObs={homeStep:2,trTxt:'既有觀察',met:true};
      S.sleepRun={day:S.day,phase:'events',autoTrip:{id:0,acts:[]},active:null,queued:[]};save();
    });
    await page.reload();
    assert.equal(await page.locator('#mt').innerText(),'日常的侵蝕');
    await dismiss();
    assert(await page.evaluate(()=>S.nstory.read[20]));
    console.log('PASS old automatic outing save delivers its current pending chapter');


    assert.deepEqual(errors, []);
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
