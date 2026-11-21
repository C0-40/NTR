# 《褪色的雛菊》— 交接指令與操作清單

> How to open / preview / sync. 搭配 [HANDOFF.md](./HANDOFF.md)。

---

## 1. 在新工作區打開／引用這些檔

### 若仍在同一 Cursor Project store
路徑前綴：`/cursor/stores/self/`（或專案 Context 根）。

```text
必讀：
  docs/HANDOFF.md
  docs/game-brief.md
  docs/handoff-commands.md
  preferences.md

實作：
  docs/小櫻的同居日記.html
  docs/xiaoying-tongju-riji.html
  docs/sil-*.png

參考：
  docs/project-context.md
  docs/game-outline.md
  docs/ui-home-layout.md
  docs/ui-shell.md
  docs/NTR隱奸遊戲劇本_AI交接規格.md
  workflows/preview-game.md
  internal/（近期報告標題見 HANDOFF）
```

### 若複製到另一個 Cursor 工作區
1. 整包帶上至少：`docs/`（含雙 HTML＋`sil-*.png`＋交接 md）、`preferences.md`、`workflows/preview-game.md`  
2. 可選：`media/`（截圖參考）、`internal/`（實作決策證據）  
3. 新對話貼上 HANDOFF §7 的 System＋第一則 User 模板  
4. 用 `@` 或絕對路徑引用 `docs/HANDOFF.md` 作為第一份必讀  

### 原專案對話（可選回溯）
- 名稱：NTR項目  
- Agent：https://cursor.com/agents/bc-07732f45-6895-4703-9abe-4a6e31e0a8f2  

---

## 2. 本地預覽

### 建議：靜態伺服器（同目錄才能載入 `sil-*.png`）

```bash
# 在 docs/ 目錄起靜態伺服器（埠可自訂）
cd /cursor/stores/self/docs
python3 -m http.server 8765
```

瀏覽器開其一：
- http://127.0.0.1:8765/小櫻的同居日記.html  
- http://127.0.0.1:8765/xiaoying-tongju-riji.html  

### 專案既有公開預覽（使用者瀏覽器）
見 [`workflows/preview-game.md`](../workflows/preview-game.md)：

- 固定覆寫 mirror：`docs/xiaoying-tongju-riji.html`  
- 開啟：https://acer-arab-equality-meter.trycloudflare.com/xiaoying-tongju-riji.html  
- 隧道掛了（530／DNS）→ 請協調者重啟預覽 worker；hostname 可能變，以回報為準並更新該 workflow  

**偏好：** 公開 HTTPS 預覽；**避免** Try Live／雲端桌面當主驗收。  
**禁止：** 把 `browser-sync` client 寫進 HTML。

---

## 3. 改完必須同步 mirror — 檢查清單

每次改遊戲邏輯／UI／文案池：

- [ ] 編輯 **canonical**：`docs/小櫻的同居日記.html`  
- [ ] **完整覆寫** mirror：`docs/xiaoying-tongju-riji.html`（兩檔應一致；可用 `diff -q` 確認）  
- [ ] 若改剪影／圖：檔放 `docs/`，HTML 內相對路徑仍為 `sil-….png`（兩 HTML 同目錄）  
- [ ] 若改版面契約：同步一句到 `ui-home-layout.md`／`ui-shell.md`／`game-outline.md`（僅必要時）  
- [ ] 本地或 HTTPS 預覽點過主路徑（見下）  
- [ ] 需要時更新 `workflows/preview-game.md` 的 URL  

```bash
# 同步範例（在商店根目錄）
cp "/cursor/stores/self/docs/小櫻的同居日記.html" \
   "/cursor/stores/self/docs/xiaoying-tongju-riji.html"
diff -q "/cursor/stores/self/docs/小櫻的同居日記.html" \
        "/cursor/stores/self/docs/xiaoying-tongju-riji.html"
```

### 建議自測路徑
1. 在家：立繪點聊、長按戳、禮物、提問、睡覺  
2. 外出：選地點 → 見空屋＋雙剪影 → 空白四選重複按 → 心聲為女角第一人稱  
3. 歸來：痕跡 → 👁 觀察（進暗＋chrome）→ 日記（`m>0`）→ 聊天是否吐出幾乎說破句  
4. 確認：無 toast、無剪影按鈕、stage0 文案無大叔劇透  

---

## 4. 關鍵 localStorage key

| Key | 用途 |
|--|--|
| **`sakura_v1`** | 主存檔（整包 JSON：`aff`、`m`、`day`、`dsec`、`trip`、`journals`、`pendingObs`、`pendingChat`、`optSeen`…） |
| `sakura_bgm` | `"1"`＝BGM 開 |
| `sakura_spd` | 倍速索引整數 |

- 讀寫：`load()`／`save()`；重置：`doReset()` → `removeItem("sakura_v1")`  
- 舊欄位 `anxiety`／`fantasy`／`evidence`／hint flags：載入時刪除並忽略  
- 清除存檔：瀏覽器該來源的 Application → Local Storage，或遊戲內重置  

---

## 5. 素材路徑清單

皆相對於 `docs/`（與雙 HTML 同層）：

| 檔案 | 用途 |
|--|--|
| `sil-hero.png` | 外出空屋層・女角剪影 |
| `sil-uncle.png` | 外出空屋層・大叔剪影 |
| `sil-hero-av.png` | 圓形頭像・女角（心聲／隱蔽對話等） |
| `sil-uncle-av.png` | 圓形頭像・大叔 |
| `sil-hero-ico.png` | 日記 kicker／列表小圓圖 |

來源參考（media，非執行時必載）：
- `media/xiaoying-silhouette-hero.png`  
- `media/uncle-silhouette-hero.jpg`（v2）  
- 嵌入驗證截圖：`media/sil-embed-outing.webp` 等  

CSS 變數（HTML 內）：`--sil-hero`／`--sil-uncle`／`--sil-hero-av`／`--sil-uncle-av`／`--sil-hero-ico`。

---

## 6. 常用開發錨點（在 HTML 內搜）

| 關鍵字 | 意義 |
|--|--|
| `sakura_v1` | 存檔 |
| `BLANK_ACT`／`BLANK_TXT`／`blankActNow` | 空白四選 |
| `outingThoughtPool`／`BLANK_TH`／`PLACE_TH`／`ACT_TH` | 女角心聲 |
| `NEAR_SAY`／`pendingChat` | 幾乎說破 → 聊天 |
| `dissonanceOn`／`FLAT_*` | 同屋若無其事 |
| `mood-chrome`／`paintMaskChrome` | 空屋深棕奶油 |
| `silHero`／`silUncle`／`setSilFace` | 剪影呈現 |
| `M_GAIN`／`stage(`／`tier(` | 雙軸 |
| `writeJournal`／`journalOn`／`scheduleJournalGlow` | 日記解鎖與 ✦ |

---

## 7. 啟動指令捷徑

完整 System／User 模板：見 [HANDOFF.md §7](./HANDOFF.md)。  
最短一則：

```text
讀 docs/HANDOFF.md 後執行：（任務）。雙 HTML 同步；預覽用 workflows/preview-game.md；遵守 preferences 與 HANDOFF「不要做」。
```
