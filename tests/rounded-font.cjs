const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const root=path.resolve(__dirname,'..');
const server=http.createServer((request,response)=>{
  try{
    const name=decodeURIComponent(new URL(request.url,'http://localhost').pathname).slice(1)||'xiaoying-tongju-riji.html';
    response.setHeader('Content-Type',name.endsWith('.woff2')?'font/woff2':'text/html; charset=utf-8');
    response.end(fs.readFileSync(path.join(root,name)));
  }catch{response.writeHead(404);response.end();}
});
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
  try{
    const page=await browser.newPage({viewport:{width:390,height:844}});
    const errors=[],fontRequests=[];
    page.on('pageerror',error=>errors.push(error.message));
    page.on('request',request=>{if(request.url().endsWith('.woff2'))fontRequests.push(request.url());});
    await page.route(/https?:\/\/(?!127\.0\.0\.1)/,route=>route.abort());
    await page.goto('http://127.0.0.1:'+server.address().port);
    await page.evaluate(async()=>{
      const element=document.createElement('div');element.id='fontProbe';
      element.textContent='你平常喜歡做什麼？你有後悔過什麼事嗎？叠嫰麽';
      element.style.font='700 20px var(--game-font)';document.body.appendChild(element);
      await document.fonts.ready;
    });
    const cdp=await page.context().newCDPSession(page);
    async function usedFonts(){
      const {root:documentNode}=await cdp.send('DOM.getDocument');
      const {nodeId}=await cdp.send('DOM.querySelector',{nodeId:documentNode.nodeId,selector:'#fontProbe'});
      return (await cdp.send('CSS.getPlatformFontsForNode',{nodeId})).fonts;
    }
    await cdp.send('DOM.enable');await cdp.send('CSS.enable');
    let fonts=await usedFonts();
    assert.equal(fonts.length,1,JSON.stringify(fonts));assert(fonts[0].isCustomFont);
    assert(fonts[0].familyName.includes('GenSen'),JSON.stringify(fonts));
    assert(fontRequests.some(url=>url.endsWith('gensen-rounded-tw-regular.woff2')));
    assert.equal(fontRequests.some(url=>url.endsWith('gensen-rounded-tw-full.woff2')),false);
    console.log('PASS formerly mixed Chinese characters use one local rounded font, external font services blocked');
    await page.evaluate(async()=>{
      $('fontProbe').textContent='齉';
      await document.fonts.load('400 20px "GenSen Rounded TW"','齉');
      await document.fonts.ready;
    });
    fonts=await usedFonts();assert.equal(fonts.length,1,JSON.stringify(fonts));assert(fonts[0].isCustomFont);
    assert(fontRequests.some(url=>url.endsWith('gensen-rounded-tw-full.woff2')));
    console.log('PASS additional characters load the full rounded font on demand');
    for(const selector of ['body','#cohabTitle','#cohabOffer h2','.daySummary h2','#outChip','#roomTripLabel']){
      assert((await page.locator(selector).evaluate(element=>getComputedStyle(element).fontFamily)).includes('GenSen Rounded TW'),selector);
    }
    assert.deepEqual(errors,[]);
    console.log('PASS dialogue, action labels, titles and summaries share the same font family');
  }finally{await browser.close();server.close();}
})().catch(error=>{console.error(error);process.exit(1)});
