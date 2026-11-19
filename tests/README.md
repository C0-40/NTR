# v2 日結回歸測試

本測試使用 Playwright 與 Chromium，沒有錄影、截圖或實錄功能。只在本機 HTTP 伺服器運行，不存取正式遊戲或玩家存檔。

先提供可用的 `playwright` Node 模組與 Chromium，再執行：

```sh
node tests/v2-sleep-rules.cjs
```

可用 `NODE_PATH` 指向既有 Playwright 安裝；`NTR_CHROMIUM_PATH` 指向瀏覽器。如未指定，優先使用 `/usr/bin/chromium`，否則使用 Playwright 已安裝的瀏覽器。

`NTR_TEST_ARTIFACT_DIR` 可指定 JSON 結果目錄，預設為系統暫存目錄。輸出包括測試結果及四種種子／互動安排的三十日觀察，不會輸出任何影片。

涵蓋 +2／+5、Day20 正反例、可選互動、手動與自動外出去重、重載、舊檔計分遷移、共同生活解鎖閱讀、跨夜與暫行結局四。劇本資料與 `c98097c` 比較，確保沒有附帶重寫已批准內容。

三十日觀察中，達100不代表已完成未定案的方案C／後期排程；`finalReady=false` 是待決規則的證據，不能冒稱已完成 v2 全部驗收。

另外驗證自動行程回顧位於日結畫面之前、使用使用者原文、留宿不誤報回家、手動外出不顯示、未讀／已確認提示的存檔接續，以及舊出門前通知狀態的相容。
