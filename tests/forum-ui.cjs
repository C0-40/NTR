const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const http = require('http');
const vm = require('vm');
const assert = require('assert/strict');
const { execFileSync } = require('child_process');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'xiaoying-tongju-riji.html'), 'utf8');
const before = execFileSync('git', ['show', '2f21a95:xiaoying-tongju-riji.html'], { cwd: root, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 });
const checks = [], errors = [];
let browser;
function check(name, condition, detail) {
  assert.ok(condition, name + (detail ? ' ' + JSON.stringify(detail) : ''));
  checks.push(name);
}
function data(text, name) {
  return vm.runInNewContext('(' + text.match(new RegExp('var ' + name + '=(\\[.*?\\]);', 's'))[1] + ')');
}
check('Both HTML files are identical', source === fs.readFileSync(path.join(root, '小櫻的同居日記.html'), 'utf8'));
for (const name of ['CHAT_THREADS', 'UNCLE_ARC', 'STORY', 'MEMORIES', 'NSTORY']) {
  check(name + ' approved data remains byte-for-byte equivalent', JSON.stringify(data(source, name)) === JSON.stringify(data(before, name)));
}
for (const script of source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(script[1]);
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  try {
    response.setHeader('Content-Type', pathname.endsWith('.png') ? 'image/png' : 'text/html; charset=utf-8');
    response.end(fs.readFileSync(path.join(root, pathname === '/' ? 'xiaoying-tongju-riji.html' : pathname.slice(1))));
  } catch { response.writeHead(404); response.end(); }
});
async function fixture(page, options = {}) {
  await page.evaluate(options => {
    cancelScenePresentation(); resetMomReading(); closePane();
    document.querySelectorAll('#mask,#momPhone,#chatRoom').forEach(element => element.classList.remove('on'));
    S = def();
    Object.assign(S, { day: 25, aff: 100, m: 90, uncleStep: 11, uncleStarted: true, momIntroSeen: true, heroIntroPending: false, cohabToday: true }, options);
    S.seen = STORY.map(event => event[0]).concat(NSTORY.map(event => 'n' + event[0]));
    S.memSeen = MEMORIES.map(event => event[0]); S.memPending = [];
    mq = []; busy = backLock = mbLock = dayLock = 0;
    chatReadingPositions = {}; chatRenderedKey = null;
    Object.assign(presentationPrefs, { textSpeed: 0, letterSound: false, music: 0, ambient: 0, sfx: 0 });
    ensureDailyBase(); render(); openChatRoom();
  }, options);
  await page.clock.runFor(250);
}
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  browser = await chromium.launch({ executablePath: process.env.NTR_CHROMIUM_PATH || '/usr/bin/chromium', args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  page.on('pageerror', error => errors.push(error.message));
  await page.clock.install({ time: new Date('2026-11-19T12:00:00Z') });
  await page.goto('http://127.0.0.1:' + server.address().port + '/');
  await fixture(page);
  check('Dark masthead and larger reading window apply', await page.evaluate(() => getComputedStyle(document.querySelector('.chatHead')).backgroundColor === 'rgb(75, 41, 47)' && document.querySelector('.chatPanel').getBoundingClientRect().height > innerHeight * .89));
  check('Every list row contains author, views, reply count and unread badge', await page.locator('.cThread').evaluateAll(rows => rows.every(row => row.querySelector('.threadAuthor').textContent.trim() && row.querySelectorAll('.forumMetric').length === 2 && row.querySelector('.forumNew'))));
  const initialViews = await page.locator('.cThread .threadStats .forumMetric:first-child').allTextContents();
  check('Later thread view counts increase monotonically', initialViews.every((value, index) => index === 0 || parseInt(value.replaceAll(',', '')) > parseInt(initialViews[index - 1].replaceAll(',', ''))));
  check('List omits dates and the old footer', await page.evaluate(() => !document.querySelector('#chatRoom .chatFoot') && !/第\s*\d+\s*天|昨天|今天/.test(document.querySelector('#chatFeed').textContent)));
  await page.locator('.cThread[data-thread-index="3"]').scrollIntoViewIfNeeded();
  await page.clock.runFor(100);
  const listPosition = await page.locator('#chatFeed').evaluate(element => element.scrollTop);
  await page.locator('.cThread[data-thread-index="3"]').click();
  await page.clock.runFor(250);
  check('Opening marks only the chosen thread read', await page.evaluate(() => S.forumRead['CHAT-T3'] && !S.forumRead['CHAT-T0']));
  check('Main post, replies and single heart are distinct', await page.evaluate(() => {
    const thread = CHAT_THREADS[3], posts = [...document.querySelectorAll('.cPost')];
    return document.querySelectorAll('.forumLike').length === 1 && document.querySelector('.is-main .forumLike') && document.querySelector('.forumReplyHeading').textContent.trim() === '回覆 ' + (thread.posts.length - 1) && posts.every((post, index) => post.querySelector('.body').textContent === thread.posts[index].body && post.querySelector('.forumFloor').textContent === (index ? 'B' + index : '主帖'));
  }));
  check('Repeated authors retain the owner label and stable avatar', await page.evaluate(() => [...document.querySelectorAll('.cPost')].every((post, index) => !!post.querySelector('.forumAuthor') === (CHAT_THREADS[3].posts[index].who === CHAT_THREADS[3].posts[0].who))));
  check('Thread omits dates and exposes views', await page.evaluate(() => !document.querySelector('.cPost .meta') && document.querySelector('.forumMetrics').textContent.includes('2,840 次瀏覽')));
  await page.locator('.forumLike').scrollIntoViewIfNeeded();
  await page.clock.runFor(100);
  const readingPosition = await page.locator('#chatFeed').evaluate(element => element.scrollTop);
  const mechanics = await page.evaluate(() => JSON.stringify({ aff:S.aff,m:S.m,step:S.uncleStep,day:S.day,seen:S.seen,trip:S.trip,ending:S.ending,forumpub:S.forumPublishDays }));
  await page.locator('.forumLike').click();
  check('Heart toggles on with accessible confirmation', await page.locator('.forumLike').evaluate(button => button.getAttribute('aria-pressed') === 'true' && button.getAttribute('aria-label') === '取消喜歡此帖文' && button.classList.contains('is-liked') && button.textContent === '已喜歡'));
  check('Liking preserves reading position', await page.locator('#chatFeed').evaluate((element, expected) => Math.abs(element.scrollTop - expected) < 2, readingPosition));
  await page.locator('.forumLike').click();
  check('Heart toggles off again', await page.evaluate(() => !S.forumLiked['CHAT-T3'] && document.querySelector('.forumLike').getAttribute('aria-pressed') === 'false'));
  await page.locator('.forumLike').click();
  check('Like actions have no story or numerical effects', await page.evaluate(expected => JSON.stringify({ aff:S.aff,m:S.m,step:S.uncleStep,day:S.day,seen:S.seen,trip:S.trip,ending:S.ending,forumpub:S.forumPublishDays }) === expected, mechanics));
  await page.locator('.forumBack').click();
  await page.clock.runFor(250);
  check('Breadcrumb returns to the previous list position and focus', await page.evaluate(expected => Math.abs(document.querySelector('#chatFeed').scrollTop - expected) < 2 && document.activeElement.dataset.threadIndex === '3', listPosition));
  check('Only opened thread loses its new badge', await page.evaluate(() => !document.querySelector('[data-thread-index="3"] .forumNew') && document.querySelector('[data-thread-index="0"] .forumNew')));
  await page.locator('[data-thread-index="3"]').click();
  await page.clock.runFor(250);
  check('Reopening restores thread reading position', await page.locator('#chatFeed').evaluate((element, expected) => Math.abs(element.scrollTop - expected) < 2, readingPosition));
  await page.reload();
  await page.evaluate(() => { openChatRoom(); chatOpenThread(3); });
  await page.clock.runFor(250);
  check('Liked and read states survive reload', await page.evaluate(() => S.forumRead['CHAT-T3'] && S.forumLiked['CHAT-T3'] && document.querySelector('.forumLike').getAttribute('aria-pressed') === 'true'));
  await page.evaluate(() => { chatBackToList(); closeChatRoom(); openChatRoom(); });
  await page.clock.runFor(250);
  check('Repeated reads do not inflate authored view counts', JSON.stringify(initialViews) === JSON.stringify(await page.locator('.cThread .threadStats .forumMetric:first-child').allTextContents()));
  await page.evaluate(() => { delete S.forumRead; delete S.forumLiked; save(); });
  await page.reload();
  check('Old saves receive empty forum state', await page.evaluate(() => typeof S.forumRead === 'object' && typeof S.forumLiked === 'object' && Object.keys(S.forumLiked).length === 0));
  await page.evaluate(() => { S.forumRead = []; S.forumLiked = 'old'; save(); });
  await page.reload();
  check('Malformed legacy forum state recovers', await page.evaluate(() => !Array.isArray(S.forumRead) && typeof S.forumLiked === 'object'));
  await fixture(page, { day: 2, aff: 0, uncleStep: 0, m: 0 });
  await page.evaluate(() => { chatOpenThread(0); toggleForumLike(0, document.createElement('button')); });
  check('Locked posts cannot be opened or liked', await page.evaluate(() => S.chatOpenStep == null && !S.forumRead['CHAT-T0'] && !S.forumLiked['CHAT-T0']));
  await fixture(page);
  await page.evaluate(() => chatOpenThread(2));
  await page.locator('.cPost.is-main .body').click();
  check('Tapping body keeps the forum open', await page.evaluate(() => document.querySelector('#chatRoom').classList.contains('on')));
  await page.locator('.forumLike').focus();
  await page.keyboard.press('Tab');
  check('Keyboard focus remains inside the dialog', await page.evaluate(() => document.querySelector('#chatRoom').contains(document.activeElement)));
  await page.keyboard.press('Escape');
  check('Escape closes and returns focus to the forum entry', await page.evaluate(() => !document.querySelector('#chatRoom').classList.contains('on') && document.activeElement.id === 'navChat'));
  for (const viewport of [{ width:320,height:568 },{ width:360,height:640 },{ width:390,height:844 },{ width:915,height:412 }]) {
    await page.setViewportSize(viewport);
    await fixture(page);
    const listFits = await page.evaluate(() => {
      const panel=document.querySelector('.chatPanel').getBoundingClientRect(),feed=document.querySelector('#chatFeed');
      return panel.left >= 0 && panel.right <= innerWidth && panel.top >= 0 && panel.bottom <= innerHeight && feed.scrollWidth <= feed.clientWidth + 1 && feed.clientHeight > 100;
    });
    check(`${viewport.width}x${viewport.height} list fits without horizontal scrolling`, listFits);
    await page.evaluate(() => chatOpenThread(12));
    await page.clock.runFor(250);
    check(`${viewport.width}x${viewport.height} long thread fits and heart remains touch-sized`, await page.evaluate(() => {
      const feed=document.querySelector('#chatFeed'),heart=document.querySelector('.forumLike').getBoundingClientRect(),close=document.querySelector('#chatClose').getBoundingClientRect(),back=document.querySelector('.forumBack').getBoundingClientRect();
      return feed.scrollWidth <= feed.clientWidth + 1 && heart.height >= 44 && heart.width >= 44 && close.width >= 44 && close.height >= 44 && back.height >= 44 && getComputedStyle(document.querySelector('.forum-enter')).animationName === 'none';
    }));
  }
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.evaluate(() => chatBackToList());
  check('Normal-motion page transition is brief', await page.locator('#chatFeed').evaluate(element => getComputedStyle(element).animationDuration === '0.15s'));
  check('No browser errors', errors.length === 0, errors);
  console.log(JSON.stringify({ passed:checks.length,errors,checks }));
})().then(async () => { if(browser)await browser.close();server.close(); }).catch(async error => {
  console.error(error.stack);console.error(JSON.stringify({ checks,errors }));
  if(browser)await browser.close();server.close();process.exitCode=1;
});
