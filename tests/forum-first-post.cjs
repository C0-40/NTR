const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const http = require('http');
const vm = require('vm');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'xiaoying-tongju-riji.html'), 'utf8');
const checks = [];
const errors = [];
let browser;
function check(name, pass) {
  assert.ok(pass, name);
  checks.push(name);
}
const expectedPosts = [
  ['龜頭孛力丸', '我現在已經快五字頭，身邊的人已經結婚生子。反觀自己又肥又窮又宅，還賭到欠得一身屁債。\n\n每次只要出街見到年青男女在放閃，就搞到我一整個人心理不平衡，我也想要大奶白滑的少女做我女朋友\n\n上天真是不公平，甚麼時候才給我翻身的機會？'],
  ['人被幹就會爽', '想翻生就戒賭開始吧'],
  ['龜頭孛力丸', '閉嘴，我這種人人生已經完蛋了，要翻身只能靠絕地一博'],
  ['樹下的孤太狼', '心動不如行動，嫖妓比較實際'],
  ['龜頭孛力丸', '你給我錢嗎？'],
];
const expectedSecondPosts = [
  ['龜頭孛力丸', '本來收到內幕消息打算穩賺一筆，還借錢下了個重注，誰知血本無歸，現在還被債主追上門了\n\n我的人生已經看不到未來了，只希望死前可以找個大奶騷女好好爽爽'],
  ['人被幹就會爽', '一想到未來我有機會變成這樣的可憐人，就立刻有動力工作了（雙手合十'],
  ['龜頭孛力丸', '滾！你媽生下你才可憐'],
  ['Cyberpunk2067', '不要太過悲觀，現在人生開始努力也不遲'],
  ['龜頭孛力丸', '你給我錢就不悲觀了'],
];
check('Both production HTML files match', source === fs.readFileSync(path.join(root, '小櫻的同居日記.html'), 'utf8'));
for (const match of source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(match[1]);
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  try {
    const file = path.join(root, pathname === '/' ? 'xiaoying-tongju-riji.html' : pathname.slice(1));
    response.setHeader('Content-Type', pathname.endsWith('.png') ? 'image/png' : 'text/html; charset=utf-8');
    response.end(fs.readFileSync(file));
  } catch {
    response.writeHead(404);
    response.end();
  }
});
async function fixture(page, day, aff = 0) {
  await page.evaluate(({ day, aff }) => {
    cancelScenePresentation();
    resetMomReading();
    closePane();
    document.querySelectorAll('#mask,#momPhone,#chatRoom').forEach(element => element.classList.remove('on'));
    S = def();
    Object.assign(S, { day, aff, momIntroSeen: true, heroIntroPending: false, cohabToday: true, outToday: true });
    S.seen = STORY.map(event => event[0]).concat(NSTORY.map(event => 'n' + event[0]));
    S.memSeen = MEMORIES.map(event => event[0]);
    S.memPending = [];
    mq = [];
    busy = backLock = mbLock = dayLock = 0;
    Object.assign(presentationPrefs, { textSpeed: 0, letterSound: false, music: 0, ambient: 0, sfx: 0 });
    ensureDailyBase();
    render();
  }, { day, aff });
}
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  browser = await chromium.launch({ executablePath: process.env.NTR_CHROMIUM_PATH || '/usr/bin/chromium', args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  page.on('pageerror', error => errors.push(error.message));
  await page.clock.install({ time: new Date('2026-11-19T12:00:00Z') });
  await page.goto('http://127.0.0.1:' + server.address().port + '/');
  for (const day of [1, 2]) {
    await fixture(page, day, 100);
    await page.evaluate(() => { openChatRoom(); chatOpenThread(0); });
    check(`Day${day} list and direct open hide the new first thread`, await page.evaluate(() => !chatThreadUnlocked(CHAT_THREADS[0]) && S.chatOpenStep == null && !document.querySelector('#chatFeed').textContent.includes('我的人生是否完蛋了？')));
  }
  await fixture(page, 3);
  await page.evaluate(() => { openChatRoom(); chatOpenThread(0); });
  const rendered = await page.locator('#chatFeed .cPost').evaluateAll(posts => posts.map(post => [post.querySelector('.who').textContent, post.querySelector('.body').textContent]));
  check('Day3 shows the exact five approved posts in order', JSON.stringify(rendered) === JSON.stringify(expectedPosts));
  check('New title and fixed publication date render', await page.evaluate(() => document.querySelector('.forumTitle').textContent === '我的人生是否完蛋了？' && document.querySelector('.cPost .meta').textContent === '第3天・發佈'));
  await page.evaluate(() => save());
  await page.reload();
  check('Reload keeps publication available at zero affinity', await page.evaluate(() => S.day === 3 && S.aff === 0 && chatThreadUnlocked(CHAT_THREADS[0])));
  await fixture(page, 12);
  check('The first post remains available on later days', await page.evaluate(() => chatThreadUnlocked(CHAT_THREADS[0])));
  await fixture(page, 2);
  await page.evaluate(() => { S.chatOpenStep = 0; save(); });
  await page.reload();
  await page.evaluate(() => paintChatFeed());
  check('Old saves with the first thread open cannot bypass the date gate', await page.evaluate(() => S.chatOpenStep == null && !document.querySelector('#chatFeed').textContent.includes('我的人生是否完蛋了？')));
  await fixture(page, 2);
  await page.evaluate(() => sleepDay());
  for (let i = 0; i < 40 && !await page.evaluate(() => daySummaryOpen()); i++) await page.clock.runFor(100);
  check('Normal Day2 sleep reaches daily summary', await page.evaluate(() => daySummaryOpen()));
  await page.locator('#daySummaryContinue').click();
  await page.clock.runFor(1800);
  check('Normal day advance publishes on Day3 and shows the update notice', await page.evaluate(() => S.day === 3 && chatThreadUnlocked(CHAT_THREADS[0]) && S.chatNotice));
  await page.evaluate(() => { openChatRoom(); chatOpenThread(0); });
  check('Opening the published thread clears its update notice', await page.evaluate(() => S.chatOpenStep === 0 && !S.chatNotice));
  for (const { day, aff, unlocked } of [
    { day: 1, aff: 29, unlocked: false },
    { day: 1, aff: 30, unlocked: true },
    { day: 5, aff: 29, unlocked: false },
    { day: 5, aff: 30, unlocked: true },
    { day: 6, aff: 0, unlocked: true },
  ]) {
    await fixture(page, day, aff);
    await page.evaluate(() => { openChatRoom(); chatOpenThread(1); });
    check(`Second thread keeps its existing Day${day}/affinity${aff} gate`, await page.evaluate(unlocked => chatThreadUnlocked(CHAT_THREADS[1]) === unlocked && (unlocked ? S.chatOpenStep === 1 : S.chatOpenStep == null), unlocked));
  }
  const secondRendered = await page.locator('#chatFeed .cPost').evaluateAll(posts => posts.map(post => [post.querySelector('.who').textContent, post.querySelector('.body').textContent]));
  check('Second thread shows all five approved posts and names verbatim', JSON.stringify(secondRendered) === JSON.stringify(expectedSecondPosts));
  check('Second thread displays its approved title', await page.evaluate(() => document.querySelector('.forumTitle').textContent === '又輸到血本無歸了'));
  await page.evaluate(() => save());
  await page.reload();
  await page.evaluate(() => { openChatRoom(); chatOpenThread(1); });
  check('Reload opens the updated second thread at its original index', await page.evaluate(() => S.chatOpenStep === 1 && document.querySelector('.forumTitle').textContent === '又輸到血本無歸了' && document.querySelectorAll('#chatFeed .cPost').length === 5));
  await fixture(page, 10);
  await page.evaluate(() => { S.uncleStep = 1; S.forumPublishDays = { 1: 11 }; });
  check('Stage threads still wait until the following day', await page.evaluate(() => !chatThreadUnlocked(CHAT_THREADS.find(thread => thread.step === 1))));
  await page.evaluate(() => S.day = 11);
  check('Stage threads publish on their scheduled day', await page.evaluate(() => chatThreadUnlocked(CHAT_THREADS.find(thread => thread.step === 1))));
  check('No browser errors', errors.length === 0);
  console.log(JSON.stringify({ passed: checks.length, errors, checks }));
})().then(async () => {
  if (browser) await browser.close();
  server.close();
}).catch(async error => {
  console.error(error.stack);
  console.error(JSON.stringify({ checks, errors }));
  if (browser) await browser.close();
  server.close();
  process.exitCode = 1;
});
