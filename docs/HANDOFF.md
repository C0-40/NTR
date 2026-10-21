# 《小櫻的同居日記》— AI 交接主入口（HANDOFF）

> **給下一個 Cursor AI 工作區的第一份必讀。**  
> 讀完本檔 → [`game-brief.md`](./game-brief.md)（敘事）→ [`handoff-commands.md`](./handoff-commands.md)（操作）→ 再改 HTML。  
> 語言：對使用者／文件用**繁體中文**；下方啟動模板含中英對照標題方便貼入。

---

## 0. 專案一句話＋直達

**一句話：** 單檔 HTML 的 NTR／隱奸養成視覺小說——同居未官宣的日常裡，玩家靠心聲、空白等待、歸來痕跡與日記，體驗女主被大叔線拉走。

| 項 | 值 |
|--|--|
| 本專案對話曾名 | **NTR項目** |
| 原 Project agent（可選回溯） | https://cursor.com/agents/bc-07732f45-6895-4703-9abe-4a6e31e0a8f2 |
| Canonical 遊戲 | [`docs/小櫻的同居日記.html`](./小櫻的同居日記.html) |
| Mirror（預覽常用） | [`docs/xiaoying-tongju-riji.html`](./xiaoying-tongju-riji.html) |
| 存檔鍵 | `localStorage.sakura_v1` |

---

## 1. 遊戲介紹／背景

### 世界觀
合租同居、互有好感、**尚未官宣**。玩家（李朔）多待在家；女主（小櫻）有正當外出理由。門外可能與「大叔／黃毛」發生隱密互動——玩家幾乎看不到正戲，只得到**時間空白、痕跡、心聲與腦補**。

### 角色（以實作 HTML 為準）
| 角色 | 稱呼 | 功能 |
|--|--|--|
| 玩家 | **李朔** | 居家等待、觀察、互動改 `aff`／`m` |
| 女主 | **小櫻**（UI 標 24 歲） | 討好／合理化；日記與心聲為第一人稱 |
| 對手 | **大叔／黃毛** | 少出鏡；後台推進 `m`；剪影若隱若現 |

> 劇本規格檔用「阿澤／小雨／陳叔」當寫作模板名；**進遊戲文案請用李朔／小櫻／大叔**。全員明確成年。

### NTR／隱奸核心愉悅點
- **隱奸**：姦情在暗處；表面日常仍運轉  
- **患得患失／窺淫**：合理出門理由 + 看不見的空白 + 可疑歸來痕跡 + 若無其事同屋  
- **少直給正戲**：優先痕跡、心聲、差點說破的聊天短句  

### 雙軸數值
| 軸 | 變數 | UI |
|--|--|--|
| 對玩家好感 | `aff` → `tier()` | 日常顯示 |
| 大叔好感 | `m` → `stage()`（閾約 15／38／60） | `m>0` 後顯示大叔條 |
| 後台 | `viewM` | **不顯示**；只微調心聲池／遇見 |

舊三軸 `anxiety`／`fantasy`／`evidence` 已從存檔與 UI **刪除**（規格檔若仍提到，僅作寫作情緒參考，勿寫回引擎）。

詳見：[game-brief.md](./game-brief.md) · [game-outline.md](./game-outline.md) · [project-context.md](./project-context.md)

---

## 2. 目前玩法現況（實作快照）

### 一天節奏
- 日進度：`dsec` × `DAY_RATE`（2）；一天長度 `DL=180`  
- **每天外出 1 次**；可「☾ 睡覺」提早日結  
- 指針圓鐘在立繪右上（6:00→24:00）；扁紙感 HUD 只留好感／大叔條  

### 外出四段（開發用語；UI 只寫白話）
1. **她出門了** — 選地點：便利店／商場／咖啡店／加班／朋友聚會（影響遇見率、`m`、心聲／事件分檔）  
2. **你在家等待** — 空白四選可重複、**純敘事不改** `aff`／`m`：**發訊息／打電話／翻找對方房間／尻槍**；場景主視覺為放大剪影（**僅呈現**）：未遇見僅女角，`metOut` 後加大叔，距離依 `stage` 遠／中／近  
3. **她回來了** — 痕跡、時間差；需點「👁 觀察」看細痕跡  
4. **當晚** — 同屋卻碰不到真相的收束  

### 其他已落地系統
| 系統 | 現況 |
|--|--|
| **空白四選** | 可重複按；文案 `BLANK_TXT` 依 `tier`×`stage` 3×3 池 |
| **仔細觀察** | 只推痕跡；空屋壓暗＋深棕奶油 chrome |
| **日記** | `m>0` 解鎖；第一人稱私密獨白 ≥200 字；與「紀錄」分開；歸來可延遲 ✦ |
| **心聲** | **＝女角第一人稱**（外出中）；池依 stage／地點／空白行動／tier／`m` |
| **幾乎說破** | `NEAR_SAY`／`pendingChat` → **聊天對話框** `talk()`，不進觀察 mask |
| **剪影** | 外出主視覺放大；未 `metOut` 僅女角，遇見後雙人遠／中／近；隱蔽頭像／日記小圖同素材；日常對談仍立繪 |
| **空屋 chrome** | 觀察／日記／空白結果／沒說出口的事／手機餘波／隱蔽 SQ・回憶 → 深棕＋奶油字；日常主畫面亮木殼 |
| **含糊句** | 舊「一句含糊的話」功能**已刪**；含糊／說破走聊天 |
| **被問** | 回家後彈窗一題／天；「❓ 被問」分頁已隱藏 |
| **資訊對照** | 歸來 `motif`（echo／clash）同步痕跡・日記・心聲 |
| **同屋落差** | `dissonanceOn`（高 stage／高 `m`）時當面若無其事 |

近期完成錨點（internal）：`outing-present-136`、`empty-house-chrome-reuse`、`heart-heroine-no-vague`、`vague-into-chat`、`outing-silhouette-display-only`、`silhouette-assets-embed`、`hud-flat-sprite-clock`。

---

## 3. 檔案地圖

```
/cursor/stores/self/
├── docs/
│   ├── 小櫻的同居日記.html          ← canonical 遊戲本體（改完必同步 mirror）
│   ├── xiaoying-tongju-riji.html    ← mirror（HTTPS 預覽常用此檔名）
│   ├── sil-hero.png / sil-uncle.png ← 外出剪影全身
│   ├── sil-hero-av.png / sil-uncle-av.png ← 圓頭像
│   ├── sil-hero-ico.png             ← 日記小圖示
│   ├── HANDOFF.md                   ← 本檔
│   ├── game-brief.md
│   ├── handoff-commands.md
│   ├── project-context.md / game-outline.md / ui-home-layout.md / ui-shell.md
│   └── NTR隱奸遊戲劇本_AI交接規格.md  ← 寫作規格（名字模板≠實作名；變數章部分過時）
├── media/                           ← 截圖／參考圖（webp/png）
├── workflows/preview-game.md        ← 公開預覽流程與 hostname
├── preferences.md / notes.md
└── internal/                        ← 實作報告（非玩家文件）
```

---

## 4. 技術約束

- **單檔 HTML**＋內嵌 CSS／JS；素材相對路徑同目錄 `sil-*.png`  
- **存檔**：`localStorage.sakura_v1`（另有 `sakura_bgm`、`sakura_spd`）  
- **無綁定 git repo／Cloud environment**（截至交接時；綁 repo 需使用者另提供網址）  
- **預覽**：公開 HTTPS tunnel 開 mirror；**不要**依賴 Try Live／雲端桌面當主預覽（見 preferences）  
- **雙 HTML 必須同步**：`小櫻的同居日記.html` 與 `xiaoying-tongju-riji.html` 內容應一致（改一改二）  
- 禁止把 `browser-sync` client 寫進 HTML；靜態 serve 即可  

---

## 5. 使用者偏好（濃縮自 preferences.md）

1. 溝通與文案：**繁體中文**  
2. 改完 HTML → 給**公開 HTTPS 預覽**；少用 Try Live／手動開檔  
3. 選項文案因好感改變時：旁標 **✦ 新**（僅「曾見過後又變了」才標；首次不標）；**不要 toast**  
4. 外出空白四選：**可重複**，勿鎖一次  
5. 文案必須對齊 `aff`／`m`／stage：**大叔未登場／stage0 禁止劇透與可疑親密**  
6. 日記：`m>0` 才解鎖與生成  
7. UI：安靜賽馬娘式殼＋溫暖木色；好感條紙感、勿賽馬娘貼紙風  
8. 日子＋時間＝立繪右上指針鐘；HUD 扁、不放日子條  
9. 外出：空屋壓暗、手機餘波薄 UI、日記延遲 ✦；私密面板統一空屋深棕奶油  
10. 心聲＝女角第一人稱；含糊／說破走聊天；剪影僅呈現  

---

## 6. 明確不要做／已否決

| 否決項 | 說明 |
|--|--|
| ❌ 可互動剪影 | 不要「看著／移開視線」；剪影只若隱若現 |
| ❌ Toast 提醒選項更新 | 只用 ✦ 標在選項旁 |
| ❌ 「一句含糊的話」當觀察彈窗 | 功能已刪；說破句走 `talk()` |
| ❌ 日常 HUD／主畫面用剪影當主視覺 | 日常＝立繪；剪影＝外出／隱蔽／日記小圖 |
| ❌ 把三軸 anxiety／fantasy／evidence 加回 UI | 已 scrub |
| ❌ 日記在大叔登場前可開／可寫 | 未解鎖只提示 |
| ❌ 空白四選改數值 | 純敘事 |
| ❌ 對玩家顯示「四拍」「三軸」等開發詞 | UI 白話 |
| ❌ 未成年／幼化暗示 | 全員成年 |
| ❌ 過早直給正戲全程 | 隱奸優先 |
| ❌ Try Live 當預設驗收 | 用 HTTPS tunnel |

---

## 7. 給接手 AI 的啟動指令（複製即用）

### System／角色（可貼為 system 或第一則長指令）

```text
【角色 Role】
你是 Cursor AI，接手維護《小櫻的同居日記》——單檔 HTML 的繁中 NTR／隱奸養成視覺小說。

【必讀 Must-read（依序）】
1. docs/HANDOFF.md
2. docs/game-brief.md
3. docs/handoff-commands.md
4. docs/game-outline.md、docs/project-context.md、docs/ui-home-layout.md、docs/ui-shell.md
5. preferences.md
6. 改文案／劇本時再讀 docs/NTR隱奸遊戲劇本_AI交接規格.md（注意：角色名模板與三軸變數以 HANDOFF／實作為準）

【Canonical】
- 遊戲：docs/小櫻的同居日記.html
- Mirror：docs/xiaoying-tongju-riji.html（每次改完必須同步）
- 存檔：localStorage.sakura_v1
- 剪影：docs/sil-*.png（相對 HTML）

【硬約束 Hard rules】
- 繁體中文；隱奸少直給正戲；雙軸 aff／m；剪影不可互動
- 含糊／幾乎說破 → 聊天框；不要 toast；不要恢復「一句含糊的話」
- 改 HTML 後雙檔同步；預覽用 workflows/preview-game.md 的 HTTPS URL，勿依賴 Try Live
- 勿發明與 HANDOFF／outline 衝突的系統；有疑問先對照現有 HTML 實作
```

### 第一則 User prompt 模板

```text
【任務 Task】
（在此填：例如「擴充咖啡店 stage2 心聲池」或「修日記解鎖提示文案」）

【驗收 Acceptance】
- 只改需要的檔；雙 HTML 同步
- 自測路徑：（填：外出→空白→歸來觀察／日記／聊天…）
- 給預覽 URL（見 workflows/preview-game.md）；若隧道掛了先報告

【禁止 Don't】
- 可互動剪影、toast、觀察彈窗塞說破句、stage0 大叔劇透、改空白四選數值
```

---

## 8. 建議下一步（可選）

- 結局分支／差一步事件／劇本卡擴池（待使用者指定）  
- 若要版本控管：等使用者提供 GitHub／GitLab 並綁 environment  
- 隧道 hostname 變更時更新 `workflows/preview-game.md`  

---

## 9. 規格檔摘要（過長時的要點）

[`NTR隱奸遊戲劇本_AI交接規格.md`](./NTR隱奸遊戲劇本_AI交接規格.md) 核心仍有效：隱奸快感公式、少正戲、痕跡庫、寫作禁區、六幕情緒弧。  
**與現況差異請覆寫為：** 角色名＝李朔／小櫻／大叔；進度軸＝`aff`＋`m`（無三軸）；外出空白＝現行四選；幾乎說破＝聊天。
