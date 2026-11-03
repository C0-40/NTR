# 《小櫻的同居日記》玩家可見文案

Source: `小櫻的同居日記.html` (byte-identical to `xiaoying-tongju-riji.html`).
Each line: `ID | exact current text | location note` (third column optional; keep it when editing).
Multi-line copy uses literal `\n` inside the text field so each entry stays one markdown line.
IDs encode the data path / nearby function so they stay unique and locateable.

## 開場訊息

OPEN-MOM-ARIA | 媽媽的訊息 | momPhone aria-label / chromeTitle
OPEN-MOM-FACE | 媽 | momPhone chromeFace
OPEN-MOM-WHO-1 | 媽媽 | momPhone msgBubble.who
OPEN-MOM-BUBBLE-1 | 阿祿，媽知道你腿骨折了，還不能出門、也不能復健。 | momPhone msgBubble
OPEN-MOM-WHO-2 | 媽媽 | momPhone msgBubble.who; dup-of OPEN-MOM-WHO-1
OPEN-MOM-BUBBLE-2 | 小櫻答應過去照顧你——就是那個青梅竹馬，多年沒見了吧。 | momPhone msgBubble
OPEN-MOM-WHO-3 | 媽媽 | momPhone msgBubble.who; dup-of OPEN-MOM-WHO-1
OPEN-MOM-BUBBLE-3 | 她會搬去跟你住一陣子。乖乖靜養，別逞強；起床、洗澡都讓她幫忙。 | momPhone msgBubble
OPEN-MOM-CONTINUE | 繼續 | momContinue
OPEN-ARRIVE-TITLE | 🚪 不請自來的同居 | dismissMomIntro mq.push
OPEN-ARRIVE-BODY | 玄關傳來拖行李箱的輪聲。多年沒見的青梅竹馬站在門口，渾身帶刺，不太好好說話。\n\n「……才不是為了你。我只是答應了阿姨。」 | dismissMomIntro mq.push
OPEN-ARRIVE-LOG | 🚪 第一章：小櫻拎著行李搬進來・「只是答應了阿姨」 | dismissMomIntro addLog

## 首頁對話

TALK-0-0 | ……才不是為了你。我只是答應阿姨而已。 | TALK[0][0]
TALK-0-1 | 別那樣盯著我看啦。 | TALK[0][1]
TALK-0-2 | 石膏別亂蹭，會裂開的。 | TALK[0][2]
TALK-0-3 | ……要起身就說一聲。我又不是不會扶。 | TALK[0][3]
TALK-1-0 | 今天天氣還行啦。……腿有沒有比較舒服？ | TALK[1][0]
TALK-1-1 | 我想去附近走走，幫你買點東西。才不是閒著無聊。 | TALK[1][1]
TALK-1-2 | 哼，別一直看我。我又沒怎樣。 | TALK[1][2]
TALK-2-0 | 今天晚餐想吃什麼？……我、我可以煮。 | TALK[2][0]
TALK-2-1 | 聽你說話……還算可以啦。 | TALK[2][1]
TALK-2-2 | 有趣的事晚點說。你先休息。 | TALK[2][2]
TALK-3-0 | 有你在，這個家就……還挺安穩的。 | TALK[3][0]
TALK-3-1 | 家事我會分擔。別把我當傭人！ | TALK[3][1]
TALK-3-2 | 那個……可以陪我看部電影嗎？才不是想黏著你。 | TALK[3][2]
TALK-4-0 | 家裡有你的味道……別誤會，我只是習慣了。 | TALK[4][0]
TALK-4-1 | 不知不覺，已經不想搬走了。……少得意。 | TALK[4][1]
TALK-4-2 | 阿祿，謝謝你一直在。……講完當我沒說。 | TALK[4][2]
TALK-5-0 | 不管發生什麼，我都在這裡。……才不是保證。 | TALK[5][0]
TALK-5-1 | 每一天都像在做夢……你笑什麼啦！ | TALK[5][1]
TALK-5-2 | 我們就這樣一直生活下去，好不好？……你、你答應啊。 | TALK[5][2]
FLAT_TALK-0 | 回來啦……今天也還好。 | FLAT_TALK[0]
FLAT_TALK-1 | 嗯，路上人有點多。……我先喝口水。 | FLAT_TALK[1]
FLAT_TALK-2 | 我先坐一下。不是不想理你，腿有點酸。 | FLAT_TALK[2]
FLAT_TALK-3 | 晚餐你吃什麼我都可以。……我陪你。 | FLAT_TALK[3]
FLAT_TALK-4 | 我洗個澡就過來。沒什麼事。……真的。 | FLAT_TALK[4]
FLAT_TALK-5 | 電視隨便轉，我都可以。我坐旁邊就好。 | FLAT_TALK[5]
FLAT_TALK-6 | 今天好普通喔。真的。……別盯著我。 | FLAT_TALK[6]
FLAT_TALK-7 | 阿祿，水我自己倒就好。你歇著。 | FLAT_TALK[7]
FLAT_TALK-8 | 有點睏，先讓我緩緩。……你在就好。 | FLAT_TALK[8]
FLAT_TALK-9 | 外套我放玄關。你別客氣。……我回來了。 | FLAT_TALK[9]
FLAT_PAT-0 | 「別鬧啦，我在滑手機……才不是不理你。」 | FLAT_PAT[0]
FLAT_PAT-1 | 「手、手拿開啦，有點熱。」 | FLAT_PAT[1]
FLAT_PAT-2 | 「……嗯？怎麼了。」她看你一眼，耳尖卻紅了。 | FLAT_PAT[2]
FLAT_PAT-3 | 「先讓我坐一下。……你靠著也行。」 | FLAT_PAT[3]
FLAT_GIFT-0 | 「喔……謝謝。放桌上就好。」 | FLAT_GIFT[0]
FLAT_GIFT-1 | 「嗯，我收下了。」她點頭，像收一件日用品。 | FLAT_GIFT[1]
FLAT_GIFT-2 | 「你人還是一樣好。」語氣平，沒有眼睛的笑。 | FLAT_GIFT[2]
FLAT_GIFT-3 | 「知道了，謝啦。」她已經看向別處。 | FLAT_GIFT[3]
NEAR_SAY-0-0 | ……外面有點亂。其他的，別問了。 | NEAR_SAY[0][0]
NEAR_SAY-0-1 | 有些話到嘴邊，又吞回去了。 | NEAR_SAY[0][1]
NEAR_SAY-0-2 | 我很好。真的。……別用那種眼神看我。 | NEAR_SAY[0][2]
NEAR_SAY-1-0 | 別問了，好不好。說了你會擔心。……也會失望。 | NEAR_SAY[1][0]
NEAR_SAY-1-1 | 我有把該記得的人放在心上。……你別追問細節。 | NEAR_SAY[1][1]
NEAR_SAY-1-2 | 今天差點跟你坦白一件事。算了，當我沒提。 | NEAR_SAY[1][2]
NEAR_SAY-2-0 | 算了。……差點說出來。 | NEAR_SAY[2][0]
NEAR_SAY-2-1 | 你想聽真話嗎？我怕聽完，你會更溫柔——然後我更愧疚。 | NEAR_SAY[2][1]
NEAR_SAY-2-2 | 門關上前我停了兩秒——不是整理鞋，是整理謊。 | NEAR_SAY[2][2]
NEAR_SAY-3-0 | 我差點告訴你今天……算了。不是你不該聽，是我沒臉說。 | NEAR_SAY[3][0]
NEAR_SAY-3-1 | 口罩下我差點叫錯名字。你聽見了嗎？……對不起。 | NEAR_SAY[3][1]
NEAR_SAY-3-2 | 他說比你更懂我。我沒回答。……我不敢看你。 | NEAR_SAY[3][2]
NT-0-0 | 今天遇到一位強叔……人挺好的。就是，靠得有點近，我有點不好意思。 | NT[0][0]
NT-1-0 | 最近商店街的強叔又找我聊天了。他說話的時候，總會先看我一眼。 | NT[1][0]
NT-1-1 | 阿祿，你覺得強叔是怎樣的人？……你為什麼突然那麼安靜。 | NT[1][1]
NT-1-2 | 強叔說下次要帶我去看夜景。我還沒答應，可是手機一直亮著他的對話。 | NT[1][2]
NT-2-0 | 你別一直問我去哪裡，好不好？……不是不想跟你說，是我怕說了會傷你。 | NT[2][0]
NT-2-1 | 強叔看我的眼神不太一樣。……我知道這不該拿來跟你比。 | NT[2][1]
NT-2-2 | 阿祿，我回訊息慢，不是故意晾你。……我只是有點亂。 | NT[2][2]
NT-3-0 | ……我現在不太敢跟你對視。胸口悶悶的。 | NT[3][0]
NT-3-1 | 你和強叔不一樣。你對我溫柔……所以我更覺得自己很過分。 | NT[3][1]
NT-3-2 | 別、別突然碰我。我手還……算了。訊息來了，我先看一下。 | NT[3][2]
HOME-SCENE-0-0 | 她窩在沙發上翻著素描本，偶爾抬頭看一眼門口。 | HOME[0][0]
HOME-SCENE-0-1 | 她煮了一壺茶，把你的杯子也一起洗乾淨了。 | HOME[0][1]
HOME-SCENE-0-2 | 她在窗邊澆花，哼著不成調的歌。 | HOME[0][2]
HOME-SCENE-1-0 | 她整天盯著手機，一聽到你的腳步就把螢幕扣上——訊息預覽裡，隱約閃過『強叔』兩個字。 | HOME[1][0]
HOME-SCENE-1-1 | 她坐在窗邊發呆，一筆也沒畫。領口的香水味，和家裡的皂香不太一樣。 | HOME[1][1]
TIER-0 | 重逢的青梅竹馬 | TIERS[0][1]
TIER-1 | 漸漸熟稔 | TIERS[1][1]
TIER-2 | 無話不談的夥伴 | TIERS[2][1]
TIER-3 | 值得信賴的人 | TIERS[3][1]
TIER-4 | 特別的人 | TIERS[4][1]
TIER-5 | 一輩子的家人 | TIERS[5][1]
TNAME-EXTRA-1 | 女主已搬走 | tname()
TNAME-EXTRA-2 | 出軌之後 | tname()
TNAME-EXTRA-3 | 回不去的戀人 | tname()
TNAME-EXTRA-4 | 對你愧疚的人 | tname()
TNAME-EXTRA-5 | 嘴硬心虛的人 | tname()
HOME-DEFAULT-SAY | ……才不是為了你。我只是答應了阿姨。 | HTML #say initial
PAT-INLINE-01 | 「……先別碰。我手還……有點亂。對不起。」 | function pat
PAT-INLINE-02 | 「……別突然碰我。我剛、剛有點心虛。」 | function pat
PAT-INLINE-03 | 「呀！突然戳我……」 | function pat
PAT-INLINE-04 | 「嘿嘿，癢癢的。」 | function pat
PAT-INLINE-05 | 「阿祿在看我嗎？」 | function pat

## 互動

HOME_ACT-care-NAME | 關心她 | HOME_ACTS[0][1]
HOME_ACT-care-DESC | 聊聊今天，聽她說外出的見聞 | HOME_ACTS[0][5]
HOME_ACT-tv-NAME | 一起看電視 | HOME_ACTS[1][1]
HOME_ACT-tv-DESC | 並肩坐在沙發上選一部片，邊看邊聊 | HOME_ACTS[1][5]
HOME_ACT-game-NAME | 玩桌遊 | HOME_ACTS[2][1]
HOME_ACT-game-DESC | 輸的人要答應對方一個小要求 | HOME_ACTS[2][5]
HOME_ACT-stars-NAME | 窗邊看星星 | HOME_ACTS[3][1]
HOME_ACT-stars-DESC | 熄燈後並肩坐在窗邊 | HOME_ACTS[3][5]
HOME_ACT-sweets-NAME | 一起做點心 | HOME_ACTS[4][1]
HOME_ACT-sweets-DESC | 他口述步驟，她動手，做一份甜點 | HOME_ACTS[4][5]
HOME_LINES-care-0-0 | 「今天商場有個奇怪店員……」她滔滔不絕，講到一半才發現你在笑。 | HOME_LINES.care[0][0]
HOME_LINES-care-0-1 | 「公園那隻狗超黏人。」她眼睛亮亮的，講完才小聲補：「……你幹嘛一直看我。」 | HOME_LINES.care[0][1]
HOME_LINES-care-0-2 | 「你這樣聽我說，我會講個不停啦。」 | HOME_LINES.care[0][2]
HOME_LINES-care-1-0 | 「強叔……算了。」她轉移話題：「總之你別擔心，我很安全。」 | HOME_LINES.care[1][0]
HOME_LINES-care-1-1 | 她提到外面的事，幾句就繞開：「別用那種眼神。」 | HOME_LINES.care[1][1]
HOME_LINES-care-1-2 | 「今天還好。」她很快把話題轉回你家裡的小事。 | HOME_LINES.care[1][2]
HOME_LINES-care-2-0 | 「就……買了點東西。」她只聊無關緊要的。 | HOME_LINES.care[2][0]
HOME_LINES-care-2-1 | 你問起強叔，她停頓一秒：「他……還好啦。」然後更溫柔地問你腿痛不痛。 | HOME_LINES.care[2][1]
HOME_LINES-care-2-2 | 她把手機螢幕扣上：「今天聽你說就好。」 | HOME_LINES.care[2][2]
HOME_LINES-tv-0-0 | 她選了一部愛情片，嘴上說「只是剛好」。 | HOME_LINES.tv[0][0]
HOME_LINES-tv-0-1 | 看到一半她靠上你的肩，醒來立刻彈開：「才、才沒有！」 | HOME_LINES.tv[0][1]
HOME_LINES-tv-0-2 | 「好無聊……可是還想再看一點。」 | HOME_LINES.tv[0][2]
HOME_LINES-tv-1-0 | 她邊看邊瞄手機，被你發現後說「在查食譜」。 | HOME_LINES.tv[1][0]
HOME_LINES-tv-1-1 | 隨即把頭靠過來補償：「繼續看吧，我陪你。」 | HOME_LINES.tv[1][1]
HOME_LINES-tv-1-2 | 片尾她笑得很淺，像在努力專心。 | HOME_LINES.tv[1][2]
HOME_LINES-tv-2-0 | 她把手機放得很遠，整場安靜地靠著你。 | HOME_LINES.tv[2][0]
HOME_LINES-tv-2-1 | 結束後說：「今天……再多坐一下。」 | HOME_LINES.tv[2][1]
HOME_LINES-tv-2-2 | 燈光暗著，她像在確認什麼。 | HOME_LINES.tv[2][2]
HOME_LINES-game-0-0 | 她愛耍賴，輸了不認帳。 | HOME_LINES.game[0][0]
HOME_LINES-game-0-1 | 被你要求「說一句真心話」，紅著臉只說出「……你是笨蛋」。 | HOME_LINES.game[0][1]
HOME_LINES-game-0-2 | 「再來一局！這次不准讓我！」 | HOME_LINES.game[0][2]
HOME_LINES-game-1-0 | 她心不在焉輸了好幾局。 | HOME_LINES.game[1][0]
HOME_LINES-game-1-1 | 你想讓她贏，她卻認真說「不要讓我」。 | HOME_LINES.game[1][1]
HOME_LINES-game-1-2 | 棋子碰撞聲裡，她忽然認真起來。 | HOME_LINES.game[1][2]
HOME_LINES-game-2-0 | 她故意輸給你，問「你贏了，想要什麼？」 | HOME_LINES.game[2][0]
HOME_LINES-game-2-1 | 你說「陪我再玩一局」，她眼眶紅紅地答應。 | HOME_LINES.game[2][1]
HOME_LINES-game-2-2 | 「……再一局。」聲音很輕。 | HOME_LINES.game[2][2]
HOME_LINES-stars-0-0 | 「星星有什麼好看的。」她嘴上嫌，卻一直沒起身。 | HOME_LINES.stars[0][0]
HOME_LINES-stars-0-1 | 夜風裡她抱著膝蓋，偶爾偷瞄你一眼。 | HOME_LINES.stars[0][1]
HOME_LINES-stars-0-2 | 「再坐一下下……才不是想跟你看。」 | HOME_LINES.stars[0][2]
HOME_LINES-stars-1-0 | 她看著夜空，突然問：「阿祿，你覺得人會變嗎？」 | HOME_LINES.stars[1][0]
HOME_LINES-stars-1-1 | 「……算了，當我沒問。」 | HOME_LINES.stars[1][1]
HOME_LINES-stars-1-2 | 窗玻璃映著兩張安靜的臉。 | HOME_LINES.stars[1][2]
HOME_LINES-stars-2-0 | 她靠在你肩上輕聲說：「如果可以一直這樣就好了。」 | HOME_LINES.stars[2][0]
HOME_LINES-stars-2-1 | 說完很久沒有抬頭。 | HOME_LINES.stars[2][1]
HOME_LINES-stars-2-2 | 手機在遠處震了一下，她沒有去拿。 | HOME_LINES.stars[2][2]
HOME_LINES-sweets-0-0 | 你口述、她手忙腳亂，做出一盤形狀奇怪的餅乾，笑到停不下來。 | HOME_LINES.sweets[0][0]
HOME_LINES-sweets-0-1 | 「這叫藝術造型！」她理直氣壯。 | HOME_LINES.sweets[0][1]
HOME_LINES-sweets-0-2 | 糖粉沾在她鼻尖上，她還不知道。 | HOME_LINES.sweets[0][2]
HOME_LINES-sweets-1-0 | 她把一半裝進盒子，說「要帶去給一個朋友」，沒有說是誰。 | HOME_LINES.sweets[1][0]
HOME_LINES-sweets-1-1 | 「你的那份在這裡。」她把比較完整的留給你。 | HOME_LINES.sweets[1][1]
HOME_LINES-sweets-1-2 | 烤箱叮一聲，她先看手機，再看你。 | HOME_LINES.sweets[1][2]
HOME_LINES-sweets-2-0 | 她把整盤都留給你：「這次不分給別人。」 | HOME_LINES.sweets[2][0]
HOME_LINES-sweets-2-1 | 說完自己也愣了一下。 | HOME_LINES.sweets[2][1]
HOME_LINES-sweets-2-2 | 「……吃吧。趁熱。」 | HOME_LINES.sweets[2][2]
HOME-PANE-HINT | 每天互動一次，增加親密度 | pane()
HOME-PANE-DONE | ・今天已做過 | pane()
HOME-PANE-AWAY-TITLE | 她出門了 | pane()
HOME-PANE-AWAY-BODY | 小櫻在外面時不能做室內互動。你留在家等她回來。 | pane()
HOME-DOCK-USED | 今天已做過 | mkDock
STATS-INC | 每天互動一次，增加親密度・外出一次・只有睡覺才會日結 | paintStats #inc
HOME-ACTS-COMMENT | 無體力；每天室內互動一次 | HOME_ACTS comment (dev note near player tip)
HOMEACT-INLINE-01 | （親密再高一點，才能做這件事。） | function homeActNow
HOMEACT-INLINE-02 | 你們一起度過了一段安靜的時間。 | function homeActNow
HOMEACT-INLINE-03 |  她的手機震了一下，看一眼又收起。 | function homeActNow
HOMEACT-INLINE-04 | ・親密 + | function homeActNow

## 外出

PLACE-0-NAME | 便利店 | PLACES[0][1]
PLACE-0-RET-0 | 買了飯糰與牛奶 | PLACES[0][6][0]
PLACE-0-RET-1 | 猶豫很久才選好布丁 | PLACES[0][6][1]
PLACE-0-RET-2 | 順路帶了洗髮精 | PLACES[0][6][2]
PLACE-0-ITEM-0 | 一盒布丁 | PLACES[0][7][0]
PLACE-0-ITEM-1 | 一瓶麥茶 | PLACES[0][7][1]
PLACE-1-NAME | 商場 | PLACES[1][1]
PLACE-1-RET-0 | 試穿了幾件衣服 | PLACES[1][6][0]
PLACE-1-RET-1 | 在廣場看了一會兒表演 | PLACES[1][6][1]
PLACE-1-RET-2 | 買了日用品回家 | PLACES[1][6][2]
PLACE-1-ITEM-0 | 一條手帕 | PLACES[1][7][0]
PLACE-1-ITEM-1 | 一盒餅乾 | PLACES[1][7][1]
PLACE-2-NAME | 咖啡店 | PLACES[2][1]
PLACE-2-RET-0 | 點了熱可可坐很久 | PLACES[2][6][0]
PLACE-2-RET-1 | 靠窗看人來人往 | PLACES[2][6][1]
PLACE-2-RET-2 | 帶了一本小說沒怎麼翻 | PLACES[2][6][2]
PLACE-2-ITEM-0 | 一張店名片 | PLACES[2][7][0]
PLACE-2-ITEM-1 | 一塊起司蛋糕 | PLACES[2][7][1]
PLACE-3-NAME | 公園 | PLACES[3][1]
PLACE-3-RET-0 | 在長椅上坐了一會兒 | PLACES[3][6][0]
PLACE-3-RET-1 | 沿著步道慢慢走 | PLACES[3][6][1]
PLACE-3-RET-2 | 拍了花壇的照片 | PLACES[3][6][2]
PLACE-3-ITEM-0 | 一枚落葉書籤 | PLACES[3][7][0]
PLACE-3-ITEM-1 | 一小袋烤地瓜 | PLACES[3][7][1]
PLACE-4-NAME | 書店 | PLACES[4][1]
PLACE-4-RET-0 | 在文學區站很久 | PLACES[4][6][0]
PLACE-4-RET-1 | 買了一本薄薄的散文 | PLACES[4][6][1]
PLACE-4-RET-2 | 角落座位翻了幾章 | PLACES[4][6][2]
PLACE-4-ITEM-0 | 一張書店書籤 | PLACES[4][7][0]
PLACE-4-ITEM-1 | 一本二手詩集 | PLACES[4][7][1]
PLACE_META-0-TAG | 短途・低危 | PLACE_META[0].tag
PLACE_META-1-TAG | 人多・偶遇中 | PLACE_META[1].tag
PLACE_META-2-TAG | 易久坐・強叔溫床 | PLACE_META[2].tag
PLACE_META-3-TAG | 戶外・透氣 | PLACE_META[3].tag
PLACE_META-4-TAG | 安靜・久坐 | PLACE_META[4].tag
PLACE_TH-0-0-0 | 便利店的燈好白。買完就回家，阿祿大概還開著燈。 | PLACE_TH[0][0][0]
PLACE_TH-0-0-1 | 布丁要選他喜歡的口味……希望他會笑。 | PLACE_TH[0][0][1]
PLACE_TH-0-0-2 | 排隊的人不多。好想快點回去說『我回來了』。 | PLACE_TH[0][0][2]
PLACE_TH-0-1-0 | 結帳時有人多看我一眼。只是錯覺吧……為什麼心會跳。 | PLACE_TH[0][1][0]
PLACE_TH-0-1-1 | 袋裡的布丁沉甸甸的。可是腦裡卻有別人的聲音殘響。 | PLACE_TH[0][1][1]
PLACE_TH-0-1-2 | 快點回家。把剛那一幕，關在自動門外面。 | PLACE_TH[0][1][2]
PLACE_TH-0-2-0 | 夜班店員的玩笑讓我想起不該想起的人。我加快結帳。 | PLACE_TH[0][2][0]
PLACE_TH-0-2-1 | 牛奶罐壁上的水珠，像我沒擦乾的心虛。 | PLACE_TH[0][2][1]
PLACE_TH-0-2-2 | 阿祿的訊息亮了。我回『在買東西』——沒說和誰擦肩。 | PLACE_TH[0][2][2]
PLACE_TH-0-3-0 | 便利店也能變成秘密會合點。這想法一冒出來，我就怕自己。 | PLACE_TH[0][3][0]
PLACE_TH-0-3-1 | 買完東西還在門口站著。不是不想回家——是愧疚讓腳步變慢。 | PLACE_TH[0][3][1]
PLACE_TH-0-3-2 | 回家路上我把收據揉掉。像揉掉一段不該存在的對白。 | PLACE_TH[0][3][2]
PLACE_TH-1-0-0 | 商場好大。想找件衣服給自己，也想帶點零食給阿祿。 | PLACE_TH[1][0][0]
PLACE_TH-1-0-1 | 人潮把我推著走。忽然很想聽他在家的聲音。 | PLACE_TH[1][0][1]
PLACE_TH-1-0-2 | 試衣間的鏡子裡，我笑得還算正常。 | PLACE_TH[1][0][2]
PLACE_TH-1-1-0 | 手扶梯上有人靠太近。我側過身，卻沒說出口。 | PLACE_TH[1][1][0]
PLACE_TH-1-1-1 | 專櫃小姐說這件適合約會。我說『只是亂逛』，耳尖卻熱。 | PLACE_TH[1][1][1]
PLACE_TH-1-1-2 | 袋裡多了一張傳單。不是我拿的……還是我自己拿的？ | PLACE_TH[1][1][2]
PLACE_TH-1-2-0 | 中庭座位有人招手。我假裝沒看見，心跳卻先認了。 | PLACE_TH[1][2][0]
PLACE_TH-1-2-1 | 試衣間門縫外有脚步。我拉高拉鍊，像防備被看穿。 | PLACE_TH[1][2][1]
PLACE_TH-1-2-2 | 阿祿問我在哪。我回『商場』——少說了半句『和他擦肩』。 | PLACE_TH[1][2][2]
PLACE_TH-1-3-0 | 更衣室的香氣不對。我把它怪到香氛區，不敢想別的。 | PLACE_TH[1][3][0]
PLACE_TH-1-3-1 | 購物袋很滿，心卻空了一塊留給不該等的人。 | PLACE_TH[1][3][1]
PLACE_TH-1-3-2 | 散場音樂響起時，我竟希望他還在同一個樓層。 | PLACE_TH[1][3][2]
PLACE_TH-2-0-0 | 咖啡很香。靠窗坐下，突然很想傳照片給阿祿。 | PLACE_TH[2][0][0]
PLACE_TH-2-0-1 | 杯子溫熱。我想著回家要怎麼跟他形容這家店。 | PLACE_TH[2][0][1]
PLACE_TH-2-0-2 | 店員叫號。平凡得讓人安心。 | PLACE_TH[2][0][2]
PLACE_TH-2-1-0 | 隔壁桌的對話太近。我戴上耳機，卻仍聽見一個低沉的『小姐』。 | PLACE_TH[2][1][0]
PLACE_TH-2-1-1 | 杯子換過一次。他說请客——我說不用，卻沒有立刻走。 | PLACE_TH[2][1][1]
PLACE_TH-2-1-2 | 甜點叉停在半空。我想起阿祿，又把那想法按下去。 | PLACE_TH[2][1][2]
PLACE_TH-2-2-0 | 他坐在我對面。只是聊天，真的只是聊天……我反覆說服自己。 | PLACE_TH[2][2][0]
PLACE_TH-2-2-1 | 牛奶泡沫上的心形被攪散。像我對家的保證。 | PLACE_TH[2][2][1]
PLACE_TH-2-2-2 | 阿祿來電，我拒接後回訊息：『店裡吵。』手在發抖。 | PLACE_TH[2][2][2]
PLACE_TH-2-3-0 | 靠窗位變成默契。他不說，我也不說，腿在桌下幾乎相碰。 | PLACE_TH[2][3][0]
PLACE_TH-2-3-1 | 帳單被他按住。我說下次我請——『下次』兩個字像約定。 | PLACE_TH[2][3][1]
PLACE_TH-2-3-2 | 離開時他替我披外套。咖啡香裡混進他的味道，我沒拒絕。 | PLACE_TH[2][3][2]
PLACE_TH-3-0-0 | 阿祿說去公園透氣也好。風很柔，我想著他腿還不能來。 | PLACE_TH[3][0][0]
PLACE_TH-3-0-1 | 長椅有點涼。我把外套拉緊，想像他在家開著燈。 | PLACE_TH[3][0][1]
PLACE_TH-3-0-2 | 步道不長。每走幾步就想：回去要跟他說今天的雲。 | PLACE_TH[3][0][2]
PLACE_TH-3-1-0 | 有人慢跑經過，我側身讓路。心卻飄回客廳那張沙發。 | PLACE_TH[3][1][0]
PLACE_TH-3-1-1 | 花壇的味道很乾淨。我想拍給他看，又覺得太黏。 | PLACE_TH[3][1][1]
PLACE_TH-3-1-2 | 風把瀏海吹亂。我笑了——像被他輕輕揉過一次頭。 | PLACE_TH[3][1][2]
PLACE_TH-3-2-0 | 坐太久，腿有點麻。忽然很想聽他問『回來了嗎』。 | PLACE_TH[3][2][0]
PLACE_TH-3-2-1 | 小孩在遠處笑。我數著時間，像數回家的路燈。 | PLACE_TH[3][2][1]
PLACE_TH-3-2-2 | 手機亮了是阿祿。回『還在公園』時嘴角自己揚起來。 | PLACE_TH[3][2][2]
PLACE_TH-3-3-0 | 天色開始偏晚。我起身拍掉裙上的草屑，準備回家。 | PLACE_TH[3][3][0]
PLACE_TH-3-3-1 | 透氣夠了。真正想呼吸的，還是玄關那一口熱氣。 | PLACE_TH[3][3][1]
PLACE_TH-3-3-2 | 袋裡的落葉書籤沙沙響。我想說：這是你提議的外出。 | PLACE_TH[3][3][2]
PLACE_TH-4-0-0 | 阿祿提議去書店看看。我帶了布袋，像赴一個溫柔的約。 | PLACE_TH[4][0][0]
PLACE_TH-4-0-1 | 文學區很靜。指尖滑過書脊，腦裡卻是他家裡的氣味。 | PLACE_TH[4][0][1]
PLACE_TH-4-0-2 | 角落座位空著。我坐下，先傳訊『到了』，才翻開第一頁。 | PLACE_TH[4][0][2]
PLACE_TH-4-1-0 | 散文寫得很慢。我讀兩行就想起他等我吃飯的樣子。 | PLACE_TH[4][1][0]
PLACE_TH-4-1-1 | 店員輕聲問找什麼，我說隨便看看——其實在想帶什麼回去。 | PLACE_TH[4][1][1]
PLACE_TH-4-1-2 | 二手區有一本薄詩集。我想：他腿傷的日子，適合一起讀。 | PLACE_TH[4][1][2]
PLACE_TH-4-2-0 | 翻到一半，忽然捨不得離開這片安靜。可是更捨不得他。 | PLACE_TH[4][2][0]
PLACE_TH-4-2-1 | 書頁香混著紙塵。我想把這味道帶進我們的客廳。 | PLACE_TH[4][2][1]
PLACE_TH-4-2-2 | 阿祿問我在哪。我回『書店』，又補『你說的地方真好』。 | PLACE_TH[4][2][2]
PLACE_TH-4-3-0 | 結帳時我選了書籤。小小的，卻像把『你的建議』折進口袋。 | PLACE_TH[4][3][0]
PLACE_TH-4-3-1 | 推門前我回頭看一眼書架——下次，想拉他一起來。 | PLACE_TH[4][3][1]
PLACE_TH-4-3-2 | 回家的路變短了。袋繩勒著手，心卻輕得像翻完一章。 | PLACE_TH[4][3][2]
PLACE_EV-0-0-0 | 買了飯糰與牛奶，店員多找了她零錢。 | PLACE_EV[0][0][0]
PLACE_EV-0-0-1 | 冰箱前猶豫很久，最後選了你喜歡的口味。 | PLACE_EV[0][0][1]
PLACE_EV-0-0-2 | 袋口露出洗髮精，跟她說的日用品清單對得上。 | PLACE_EV[0][0][2]
PLACE_EV-0-1-0 | 結帳時被人多搭了兩句，她敷衍笑過就離開。 | PLACE_EV[0][1][0]
PLACE_EV-0-1-1 | 夜燈下她加快腳步，像把什麼留在自動門後。 | PLACE_EV[0][1][1]
PLACE_EV-0-1-2 | 收據時間普通，她卻把細部店名折起來。 | PLACE_EV[0][1][2]
PLACE_EV-0-2-0 | 她說只是買東西，鎖骨旁卻有風吹過的涼意。 | PLACE_EV[0][2][0]
PLACE_EV-0-2-1 | 袋裡多了一張不是她寫的便條角，字跡被揉掉。 | PLACE_EV[0][2][1]
PLACE_EV-0-2-2 | 她堅持先洗手再拆袋，像洗掉一段對白。 | PLACE_EV[0][2][2]
PLACE_EV-0-3-0 | 便利店也能被說成『剛好遇到』。她否認得太快。 | PLACE_EV[0][3][0]
PLACE_EV-0-3-1 | 布丁是你愛的口味，語氣卻像補償。 | PLACE_EV[0][3][1]
PLACE_EV-0-3-2 | 她把某個對話刪到回收匣，又說手機沒電。 | PLACE_EV[0][3][2]
PLACE_EV-1-0-0 | 試衣、購物、廣場表演——行程講得很滿。 | PLACE_EV[1][0][0]
PLACE_EV-1-0-1 | 她帶了手帕回來，笑說想到你。 | PLACE_EV[1][0][1]
PLACE_EV-1-0-2 | 購物袋塞得滿滿，像真的只是逛街。 | PLACE_EV[1][0][2]
PLACE_EV-1-1-0 | 專櫃說『適合約會』時她耳尖紅了，隨即否認。 | PLACE_EV[1][1][0]
PLACE_EV-1-1-1 | 手扶梯上有人靠太近，她側身，卻沒出聲。 | PLACE_EV[1][1][1]
PLACE_EV-1-1-2 | 袋裡多了一張傳單，來路說不清。 | PLACE_EV[1][1][2]
PLACE_EV-1-2-0 | 中庭有人招手，她裝作沒看見。 | PLACE_EV[1][2][0]
PLACE_EV-1-2-1 | 試衣間待得偏久，出來時呼吸不穩。 | PLACE_EV[1][2][1]
PLACE_EV-1-2-2 | 她回『在商場』，少說了半句同行。 | PLACE_EV[1][2][2]
PLACE_EV-1-3-0 | 更衣室殘香不對，她怪到香氛區。 | PLACE_EV[1][3][0]
PLACE_EV-1-3-1 | 購物袋很滿，眼神卻像還在等人。 | PLACE_EV[1][3][1]
PLACE_EV-1-3-2 | 散場音樂響起，她回頭看了一眼空座位。 | PLACE_EV[1][3][2]
PLACE_EV-2-0-0 | 靠窗位，熱可可，小說翻了兩頁。很日常。 | PLACE_EV[2][0][0]
PLACE_EV-2-0-1 | 她拍了杯子照片，說想傳給你。 | PLACE_EV[2][0][1]
PLACE_EV-2-0-2 | 店員叫號，過程平凡得安心。 | PLACE_EV[2][0][2]
PLACE_EV-2-1-0 | 有人想請客，她說不用，卻沒立刻走。 | PLACE_EV[2][1][0]
PLACE_EV-2-1-1 | 耳機沒擋掉一句低沉的『小姐』。 | PLACE_EV[2][1][1]
PLACE_EV-2-1-2 | 甜點叉停在半空，像想起又不想說。 | PLACE_EV[2][1][2]
PLACE_EV-2-2-0 | 她承認『聊了一下』，對象含糊。 | PLACE_EV[2][2][0]
PLACE_EV-2-2-1 | 來電被她拒接，回訊寫『店裡吵』。 | PLACE_EV[2][2][1]
PLACE_EV-2-2-2 | 杯墊多印了一個號碼，她很快撕掉。 | PLACE_EV[2][2][2]
PLACE_EV-2-3-0 | 靠窗位像默契座位。她不否認『又遇到了』。 | PLACE_EV[2][3][0]
PLACE_EV-2-3-1 | 帳單被對方按住，她說了『下次』。 | PLACE_EV[2][3][1]
PLACE_EV-2-3-2 | 外套上殘一點咖啡香以外的味道。 | PLACE_EV[2][3][2]
PLACE_EV-3-0-0 | 她說你提議去公園。回來時鞋邊沾一點乾草。 | PLACE_EV[3][0][0]
PLACE_EV-3-0-1 | 她帶了落葉書籤，笑說風很大、雲很好看。 | PLACE_EV[3][0][1]
PLACE_EV-3-0-2 | 外套有陽光晒過的味道，很乾淨。 | PLACE_EV[3][0][2]
PLACE_EV-3-1-0 | 她在長椅坐得稍久，說腿有點麻。 | PLACE_EV[3][1][0]
PLACE_EV-3-1-1 | 花壇照片存在相簿，還沒傳給你。 | PLACE_EV[3][1][1]
PLACE_EV-3-1-2 | 回來得比預期晚一點，語氣卻很輕鬆。 | PLACE_EV[3][1][2]
PLACE_EV-3-2-0 | 她把草屑從裙邊拍掉，動作仔細。 | PLACE_EV[3][2][0]
PLACE_EV-3-2-1 | 說路上風大，其實頭髮整理得整齊。 | PLACE_EV[3][2][1]
PLACE_EV-3-2-2 | 提了烤地瓜，分你一半，像交差也像撒嬌。 | PLACE_EV[3][2][2]
PLACE_EV-3-3-0 | 她主動說『都是你提議的』，笑意真。 | PLACE_EV[3][3][0]
PLACE_EV-3-3-1 | 步數很多，呼吸卻穩。 | PLACE_EV[3][3][1]
PLACE_EV-3-3-2 | 玄關燈一開，她先喊你的名字。 | PLACE_EV[3][3][2]
PLACE_EV-4-0-0 | 她提著書店紙袋回來，書脊還貼著價簽。 | PLACE_EV[4][0][0]
PLACE_EV-4-0-1 | 散文翻到中段折了角，說想晚上讀給你聽。 | PLACE_EV[4][0][1]
PLACE_EV-4-0-2 | 袖口有淡淡紙墨香。 | PLACE_EV[4][0][2]
PLACE_EV-4-1-0 | 她在店裡待得偏久，說角落座位太舒服。 | PLACE_EV[4][1][0]
PLACE_EV-4-1-1 | 書籤夾在新書裡，圖案很素。 | PLACE_EV[4][1][1]
PLACE_EV-4-1-2 | 回訊『在書店』的時間戳對得上。 | PLACE_EV[4][1][2]
PLACE_EV-4-2-0 | 二手詩集頁邊有舊筆記，不是她的字。 | PLACE_EV[4][2][0]
PLACE_EV-4-2-1 | 她說挑了好久，想找適合你們一起看的。 | PLACE_EV[4][2][1]
PLACE_EV-4-2-2 | 布袋肩帶勒痕還在，像真的逛了很完整。 | PLACE_EV[4][2][2]
PLACE_EV-4-3-0 | 她把書放上茶几，邀你一起看目錄。 | PLACE_EV[4][3][0]
PLACE_EV-4-3-1 | 結帳收據折得很整齊。 | PLACE_EV[4][3][1]
PLACE_EV-4-3-2 | 『你建議得真好』——這句她說了兩次。 | PLACE_EV[4][3][2]
DEPART-0 | 她說去一下就回，卻在玄關對著鏡子撥瀏海，香水比平常淡、也更貼膚。 | DEPART[0]
DEPART-1 | 出門理由很普通。她換上週末才會穿的那件，鎖骨線露了一點點。 | DEPART[1]
DEPART-2 | 「很快回來。」她彎腰繫鞋帶時，沒讓你看清表情。 | DEPART[2]
DEPART-3 | 她把手機塞進口袋，又拿出來看了一眼——像在等誰的訊息，又像沒有。 | DEPART[3]
DEPART-4 | 整理袖口、噴香水、確認門沒鎖。每一個動作都合理，合得過了頭。 | DEPART[4]
DEPART-5 | 她笑著說去透氣。笑完，視線在你臉上停了一秒，像想說什麼又吞回去。 | DEPART[5]
DEPART_P-0-TITLE | 便利店・補貨 | DEPART_P[0][0]
DEPART_P-0-BODY | 她說缺牛奶。出門很輕鬆，像真的只是短途。 | DEPART_P[0][1]
DEPART_P-1-TITLE | 商場・逛街 | DEPART_P[1][0]
DEPART_P-1-BODY | 她說想看看衣服與日用品。袋是空的，笑容卻整齊。 | DEPART_P[1][1]
DEPART_P-2-TITLE | 咖啡店・坐坐 | DEPART_P[2][0]
DEPART_P-2-BODY | 她說想換個地方看書。出門前多噴了一點香。 | DEPART_P[2][1]
DEPART_P-3-TITLE | 公園・走走 | DEPART_P[3][0]
DEPART_P-3-BODY | 她說你提議去公園透氣。換了輕便的鞋。 | DEPART_P[3][1]
DEPART_P-4-TITLE | 書店・翻書 | DEPART_P[4][0]
DEPART_P-4-BODY | 她說你建議去書店看看。出門前帶了布袋。 | DEPART_P[4][1]
MEET-0-0 | 回來的路上，素描本掉了。一位強叔蹲下來替我撿起，指尖不小心擦過我的手背……他說抱歉時，靠得有點近。 | MEET[0][0]
MEET-0-1 | 有位強叔問路，後來請我喝咖啡。杯子遞過來時他看著我笑，我居然忘了說自己不是一個人住。 | MEET[0][1]
MEET-1-0 | 又遇到強叔了。他低聲說我笑起來很好看，靠得很近……我心跳得好大聲，卻沒有後退。 | MEET[1][0]
MEET-1-1 | 強叔請我吃甜點，眼神一直停在我嘴角。他問我是一個人住，還是……有誰在等。我支吾了很久。 | MEET[1][1]
MEET-2-0 | 過馬路時強叔握住我的手，掌心很熱。綠燈亮了，我還是沒有抽開。……阿祿，對不起。我只是、一下子而已。 | MEET[2][0]
MEET-2-1 | 強叔邀我去他家坐坐，說燈光比較柔。我說下次……名片塞進口袋時，我滿腦子都是愧疚。 | MEET[2][1]
MEET-3-0 | 我今天去了強叔家，待到很晚。他從背後抱住我……我沒推開。阿祿，你別那樣看我，我知道自己很過分。 | MEET[3][0]
MEET-3-1 | 強叔說我值得被更用力地對待。我竟點了頭——回家路上，我一直想著怎麼面對你。 | MEET[3][1]
FR-0-0 | 她在街角被一位陌生強叔叫住。對方遞給她一杯還燙手的咖啡，指尖在杯緣停了一下。她道了謝，卻沒有立刻走開。 | FR[0][0]
FR-0-1 | 強叔站在她身後看了很久。直到她轉過身對上視線，他才慢條斯理地移開——像什麼都沒發生過。 | FR[0][1]
FR-1-0 | 強叔替她拉開椅子，讓她坐在靠窗位置。她笑了，沒發現他的視線一直停在她沒戴戒指的手指上。 | FR[1][0]
FR-1-1 | 她對著手機猶豫很久，刪了又打。最後還是回了強叔；送出的瞬間，她下意識看了看四周有沒有熟人。 | FR[1][1]
FR-2-0 | 紅燈亮起時，強叔很自然地握住她的手。綠燈亮了，她喉嚨動了動，還是沒有抽開。 | FR[2][0]
FR-2-1 | 強叔在她耳邊低聲說了什麼。她耳根一下子紅了，下意識看向自己的腳尖——卻沒有後退半步。 | FR[2][1]
FR-3-0 | 強叔家的門在她身後關上。她看了一眼手機：阿祿的未接來電。螢幕翻過去前，她的拇指在『回撥』上停了一秒。 | FR[3][0]
FR-3-1 | 夜深了，窗簾被拉上。她沒有要回家的打算；只在鎖屏前，回了你一句「對不起，今晚可能晚」——像一句溫柔的謊。 | FR[3][1]
SOFT-0 | 陽光落在她的肩上。 | SOFT[0]
SOFT-1 | 她笑了，笑得很乾淨。 | SOFT[1]
SOFT-2 | 她拍了一張照片，想回家給你看。 | SOFT[2]
SOFT-3 | 她停下腳步，想到了你。 | SOFT[3]
TH-0-0 | 阿祿現在在做什麼呢……會不會在等我吃晚飯？ | TH[0][0]
TH-0-1 | 今天要帶什麼回去給阿祿好呢。 | TH[0][1]
TH-0-2 | 和阿祿一起住，真的很安心。 | TH[0][2]
TH-0-3 | 回家的時候，客廳的燈如果亮著就好了。 | TH[0][3]
TH-0-4 | 阿祿煮的湯，今天我也想喝一碗。 | TH[0][4]
TH-0-5 | 要是阿祿也在，這裡的風景會更好看吧。 | TH[0][5]
TH-1-0 | 不知道還會不會遇到那位強叔……為什麼一想到他就心虛。 | TH[1][0]
TH-1-1 | 阿祿很溫柔，可是強叔看我的眼神，讓心跳漏了一拍。 | TH[1][1]
TH-1-2 | 我是不是不該再跟強叔說話了……可是拒絕的話，好可惜。 | TH[1][2]
TH-1-3 | 強叔說我笑起來好看。那句話在耳邊繞了一整天。……阿祿也會誇我嗎。 | TH[1][3]
TH-1-4 | 手機震了一下——是強叔嗎？我居然先整理了瀏海，才敢滑開。 | TH[1][4]
TH-1-5 | 我只是聊聊天而已……對阿祿隱瞞這點，心裡好不安。 | TH[1][5]
TH-2-0 | 阿祿對我很好，可是為什麼，他的好會變成一種愧疚。 | TH[2][0]
TH-2-1 | 想見強叔。就一下下也好。……一想到阿祿在家等，心又縮起來。 | TH[2][1]
TH-2-2 | 手上還留著他的溫度。回家洗手前，我猶豫了很久。 | TH[2][2]
TH-2-3 | 如果被阿祿知道了——知道我讓人牽過手——他會是什麼表情呢…… | TH[2][3]
TH-2-4 | 跟強叔在一起的時候，我好像可以把『同居的小櫻』暫時脫下來。……可是脫下來之後，我更對不起阿祿。 | TH[2][4]
TH-2-5 | 我明明答應過要一起生活的，為什麼心卻往不該去的地方偏。 | TH[2][5]
TH-3-0 | 阿祿的訊息亮了。我想回，又不敢回太勤——怕他聽出我心虛。 | TH[3][0]
TH-3-1 | 一靠近玄關，愧疚就先撞上來。不是討厭家，是我沒臉坦然推門。 | TH[3][1]
TH-3-2 | 他越溫柔，我越像在騙他。……可是我還是想被他溫柔。 | TH[3][2]
TH-3-3 | 今晚好想晚一點回去。……不是因為恨他等，是因為我還沒把表情練好。 | TH[3][3]
TH-3-4 | 強叔說我值得被更用力地愛。那句話讓我熱，也讓我對阿祿更羞愧。 | TH[3][4]
TH-3-5 | 如果現在跟阿祿說清楚，他會哭嗎……我說不出口。對不起，還是先這樣爛在夜裡。 | TH[3][5]
BLANK_TH-0-0 | 阿祿現在在幹嘛呢……會不會還開著燈等我。 | BLANK_TH[0][0]
BLANK_TH-0-1 | 要帶什麼回去給他好呢。光是想像他笑，心就軟了。 | BLANK_TH[0][1]
BLANK_TH-0-2 | 外面的風有點涼。好想快點回家喝他煮的湯。 | BLANK_TH[0][2]
BLANK_TH-0-3 | 手機亮了——是阿祿嗎？我居然有點期待。 | BLANK_TH[0][3]
BLANK_TH-0-4 | 這條路好安靜。我在想，他會不會偷偷看時間。 | BLANK_TH[0][4]
BLANK_TH-0-5 | 回家第一句，要先說『我回來了』，還是先抱一下……我在想什麼啦。 | BLANK_TH[0][5]
BLANK_TH-1-0 | 強叔的訊息讓螢幕亮了一下。我猶豫了很久，才敢滑開。 | BLANK_TH[1][0]
BLANK_TH-1-1 | 阿祿若知道我現在心跳這麼快……會生氣嗎。還是更難過。 | BLANK_TH[1][1]
BLANK_TH-1-2 | 我只是多聊兩句而已。對他隱瞞這點，應該沒關係吧。 | BLANK_TH[1][2]
BLANK_TH-1-3 | 香水會不會太重了。希望阿祿聞不出來——又希望他聞得出來。我好亂。 | BLANK_TH[1][3]
BLANK_TH-1-4 | 他說我笑起來好看。那句話比阿祿的關心，更貼在耳邊。 | BLANK_TH[1][4]
BLANK_TH-1-5 | 要早點回去……可是腳步卻不想加快。 | BLANK_TH[1][5]
BLANK_TH-2-0 | 手上還留著不該留的溫度。回家前，我在洗手台前停了很久。 | BLANK_TH[2][0]
BLANK_TH-2-1 | 阿祿的訊息跳出來，我卻先回了另一個對話。心虛得想逃。 | BLANK_TH[2][1]
BLANK_TH-2-2 | 見面一下下就好。確認他看我時，還會不會靠近。 | BLANK_TH[2][2]
BLANK_TH-2-3 | 如果被阿祿知道——知道我讓人牽過馬路——他會是什麼表情。 | BLANK_TH[2][3]
BLANK_TH-2-4 | 跟強叔在一起時，我好像可以把『同居的小櫻』暫時脫下來。 | BLANK_TH[2][4]
BLANK_TH-2-5 | 我明明答應過要一起生活，為什麼心卻往不該去的地方偏。 | BLANK_TH[2][5]
BLANK_TH-3-0 | 阿祿的名字亮著。我想回，又怕回得太乾——他會聽出我心虛。 | BLANK_TH[3][0]
BLANK_TH-3-1 | 一靠近那個家，愧疚先撞上來。不是討厭家，是我沒臉坦然推門。 | BLANK_TH[3][1]
BLANK_TH-3-2 | 他越溫柔，我越像在騙他。……可是我還是想被他溫柔。 | BLANK_TH[3][2]; dup-of TH-3-2
BLANK_TH-3-3 | 今晚好想晚一點面對玄關的燈。不是因為他會等很煩，是因為我還沒把表情練好。 | BLANK_TH[3][3]
BLANK_TH-3-4 | 強叔說我值得被更用力地愛。那句話讓我熱，也讓我對阿祿更羞愧。 | BLANK_TH[3][4]; dup-of TH-3-4
BLANK_TH-3-5 | 說清楚嗎？我說不出口。對不起，還是先這樣爛在夜裡。 | BLANK_TH[3][5]
ACT_TH-msg-0-0 | 阿祿傳訊了……回慢一點，他會不會擔心。 | ACT_TH.msg[0][0]
ACT_TH-msg-0-1 | 螢幕亮起他的名字，心口軟了一下。 | ACT_TH.msg[0][1]
ACT_TH-msg-0-2 | 想回『想你了』，手卻停在貼圖上面。 | ACT_TH.msg[0][2]
ACT_TH-msg-1-0 | 他問我在哪。輸入框刪了又打，像在編一份無害的行程。 | ACT_TH.msg[1][0]
ACT_TH-msg-1-1 | 已讀之後該回什麼，才像『只是普通外出』。 | ACT_TH.msg[1][1]
ACT_TH-msg-1-2 | 阿祿越關心，我越覺得自己在演出門的樣子。 | ACT_TH.msg[1][2]
ACT_TH-msg-2-0 | 訊息一來，我竟先把另一個對話藏到後面。 | ACT_TH.msg[2][0]
ACT_TH-msg-2-1 | 他的關心像燈。亮著，我就更不敢讓影子被看見。 | ACT_TH.msg[2][1]
ACT_TH-msg-2-2 | 回『還在忙』的時候，指尖是熱的——不是為他。 | ACT_TH.msg[2][2]
ACT_TH-call-0-0 | 來電震動。想接，又怕聲音裡露出剛才的笑。 | ACT_TH.call[0][0]
ACT_TH-call-0-1 | 拒接後回訊息：『店裡有點吵。』心虛得想把手機扣過去。 | ACT_TH.call[0][1]
ACT_TH-call-0-2 | 阿祿的聲音……只要聽一秒，回家的路就會變近。 | ACT_TH.call[0][2]
ACT_TH-call-1-0 | 他打來的時候，我正站在不該多停的地方。 | ACT_TH.call[1][0]
ACT_TH-call-1-1 | 語音信箱亮著。我聽了開頭，又快速刪掉重錄。 | ACT_TH.call[1][1]
ACT_TH-call-1-2 | 掛斷後耳尖還熱。希望他只當我在趕路。 | ACT_TH.call[1][2]
ACT_TH-call-2-0 | 電話一響，我先看的是另一個人有沒有在旁邊。 | ACT_TH.call[2][0]
ACT_TH-call-2-1 | 對他說『訊號不好』。其實訊號很好，是我不想被聽穿。 | ACT_TH.call[2][1]
ACT_TH-call-2-2 | 聽筒裡他的呼吸那麼近——我卻把視線飄向別處。 | ACT_TH.call[2][2]
ACT_TH-search-0-0 | 忽然一陣冷。像有人翻過我的抽屜……大概是錯覺。 | ACT_TH.search[0][0]
ACT_TH-search-0-1 | 口袋裡的小東西被我按得更緊。說不上為什麼。 | ACT_TH.search[0][1]
ACT_TH-search-0-2 | 總覺得家裡有雙眼睛。可是阿祿應該坐在沙發上才對。 | ACT_TH.search[0][2]
ACT_TH-search-1-0 | 心跳漏一拍。好像有什麼被掀開了一角。 | ACT_TH.search[1][0]
ACT_TH-search-1-1 | 回家前要把表情練好。鏡子裡的自己，笑得太假。 | ACT_TH.search[1][1]
ACT_TH-search-1-2 | 若他找到什麼……我要怎麼把故事說圓。 | ACT_TH.search[1][2]
ACT_TH-search-2-0 | 背脊發麻。像秘密被人隔著門縫聞見。 | ACT_TH.search[2][0]
ACT_TH-search-2-1 | 我告訴自己：什麼都沒留下。什麼都沒有。 | ACT_TH.search[2][1]
ACT_TH-search-2-2 | 越是空蕩的房間，越像會說話。 | ACT_TH.search[2][2]
ACT_TH-jack-0-0 | 不知道為什麼，臉忽然熱起來。阿祿現在……在想我嗎。 | ACT_TH.jack[0][0]
ACT_TH-jack-0-1 | 遠處像有視線。我把衣領拉高一點。 | ACT_TH.jack[0][1]
ACT_TH-jack-0-2 | 心裡閃過不乾淨的畫面，又立刻怪自己胡思亂想。 | ACT_TH.jack[0][2]
ACT_TH-jack-1-0 | 身體忽然僵了一下。像被某種想像咬住。 | ACT_TH.jack[1][0]
ACT_TH-jack-1-1 | 我加速腳步，想把那股熱意甩在馬路後面。 | ACT_TH.jack[1][1]
ACT_TH-jack-1-2 | 若他正在想我——是溫柔的那種，還是更暗的。 | ACT_TH.jack[1][2]
ACT_TH-jack-2-0 | 一陣羞意湧上來，緊接著是愧疚。兩種都不該現在有。 | ACT_TH.jack[2][0]
ACT_TH-jack-2-1 | 我把耳機音量開大。掩蓋自己不該有的想像。 | ACT_TH.jack[2][1]
ACT_TH-jack-2-2 | 別想了。想了，回家就更不敢看他的眼睛。 | ACT_TH.jack[2][2]
BLANK_ACT-msg-NAME | 發訊息 | BLANK_ACT[0][2]
BLANK_ACT-msg-HINT | 純敘事・可重複 | BLANK_ACT[0][3]
BLANK_ACT-call-NAME | 打電話 | BLANK_ACT[1][2]
BLANK_ACT-call-HINT | 純敘事・可重複 | BLANK_ACT[1][3]; dup-of BLANK_ACT-msg-HINT
BLANK_ACT-jack-NAME | 尻槍 | BLANK_ACT[2][2]
BLANK_ACT-jack-HINT | 純敘事・可重複 | BLANK_ACT[2][3]; dup-of BLANK_ACT-msg-HINT
BLANK_ACT-nap-NAME | 打瞌睡 | BLANK_ACT[3][2]
BLANK_ACT-nap-HINT | 跳過等待 | BLANK_ACT[3][3]
BLANK_TXT-msg-0-0-0 | 你傳：「在哪？還好嗎？」已讀。過了很久，回一個「嗯」。像應付同事。 | BLANK_TXT.msg[0][0][0]
BLANK_TXT-msg-0-0-1 | 訊息出去後安靜得發慌。她回：「還在忙。」沒有貼圖，也沒有「想你」。 | BLANK_TXT.msg[0][0][1]
BLANK_TXT-msg-0-0-2 | 你打了又刪，最後只送「注意安全」。顯示已讀，沒有下文。 | BLANK_TXT.msg[0][0][2]
BLANK_TXT-msg-0-1-0 | 你問她到了沒。她回得很快，卻只有「到了～」——像背好的公式。 | BLANK_TXT.msg[0][1][0]
BLANK_TXT-msg-0-1-1 | 「誰跟你一起？」你傳完又後悔。她已讀，過三分鐘回「自己啦」。 | BLANK_TXT.msg[0][1][1]
BLANK_TXT-msg-0-1-2 | 你傳了定位請求。她拒絕了，附一句「訊號不好」。 | BLANK_TXT.msg[0][1][2]
BLANK_TXT-msg-0-2-0 | 你傳：「回來吃晚餐嗎？」已讀不回。螢幕亮了又暗，像被另一個人佔走。 | BLANK_TXT.msg[0][2][0]
BLANK_TXT-msg-0-2-1 | 訊息氣泡跳了兩下「對方正在輸入」，然後什麼都沒送來。 | BLANK_TXT.msg[0][2][1]
BLANK_TXT-msg-0-2-2 | 你傳了語音。她沒聽，只回文字：「等下再說。」冷得像隔了一堵牆。 | BLANK_TXT.msg[0][2][2]
BLANK_TXT-msg-1-0-0 | 你傳：「想你了。」她回一個臉紅貼圖，又補「別鬧」。語氣還算軟。 | BLANK_TXT.msg[1][0][0]
BLANK_TXT-msg-1-0-1 | 「多久回來？」她回：「快了快了。」你盯著那句，卻聽出心不在焉。 | BLANK_TXT.msg[1][0][1]
BLANK_TXT-msg-1-0-2 | 你傳了家裡的照片。她已讀，回「好溫暖」——溫暖得太客氣。 | BLANK_TXT.msg[1][0][2]
BLANK_TXT-msg-1-1-0 | 她回得慢了一點。你問怎麼了，她說「剛在跟人說話」。沒說是誰。 | BLANK_TXT.msg[1][1][0]
BLANK_TXT-msg-1-1-1 | 「今天好想聽你聲音。」她回：「回來再講。」像把親密延後。 | BLANK_TXT.msg[1][1][1]
BLANK_TXT-msg-1-1-2 | 你傳了日常碎唸。她回得很短，卻多了一個「乖」——說完又刪成「嗯」。 | BLANK_TXT.msg[1][1][2]
BLANK_TXT-msg-1-2-0 | 你傳：「他是不是也在？」已讀。很久以後她回：「你想太多。」 | BLANK_TXT.msg[1][2][0]
BLANK_TXT-msg-1-2-1 | 訊息裡她說「再一下下」。你數著分鐘，想像她把手機扣在另一個人胸口旁。 | BLANK_TXT.msg[1][2][1]
BLANK_TXT-msg-1-2-2 | 她回了一串省略號，然後：「別一直傳，人家在忙。」忙什麼，她不說。 | BLANK_TXT.msg[1][2][2]
BLANK_TXT-msg-2-0-0 | 你傳：「想牽你的手。」她回：「……我也是。」間隔很長，像經過掙扎。 | BLANK_TXT.msg[2][0][0]
BLANK_TXT-msg-2-0-1 | 「我在等你。」她回：「燈先開著。」這句讓你心軟，又讓你更怕失去。 | BLANK_TXT.msg[2][0][1]
BLANK_TXT-msg-2-0-2 | 你傳了很長的一段。她回：「看到了。別擔心我。」擔心與否，你自己最清楚。 | BLANK_TXT.msg[2][0][2]
BLANK_TXT-msg-2-1-0 | 她回訊時語氣溫柔，卻總像在趕時間。「親親，晚點聊。」錯字都沒改。 | BLANK_TXT.msg[2][1][0]
BLANK_TXT-msg-2-1-1 | 你問「想不想我」。她回「想啊」——後面卻多了一句「但現在不方便講」。 | BLANK_TXT.msg[2][1][1]
BLANK_TXT-msg-2-1-2 | 訊息已讀很快。內容卻敷衍。你覺得她在對你溫柔，心思卻不在對話框裡。 | BLANK_TXT.msg[2][1][2]
BLANK_TXT-msg-2-2-0 | 你傳：「別丟下我。」她久久才回：「……我沒有。」語音轉文字，背景有男人笑聲。 | BLANK_TXT.msg[2][2][0]
BLANK_TXT-msg-2-2-1 | 她回：「今晚可能晚。」你盯著那句，腦內自動補完她把衣服掛在別人椅背上的畫面。 | BLANK_TXT.msg[2][2][1]
BLANK_TXT-msg-2-2-2 | 「我愛你。」你傳完手抖。她回「我也是」——短得像贖罪，也像敷衍。 | BLANK_TXT.msg[2][2][2]
BLANK_TXT-call-0-0-0 | 撥過去，響了七聲才被拒接。你盯著未接來電，耳朵發熱。 | BLANK_TXT.call[0][0][0]
BLANK_TXT-call-0-0-1 | 接通一瞬，嘈雜風聲。她說「等下打給你」就掛了。全程不到兩秒。 | BLANK_TXT.call[0][0][1]
BLANK_TXT-call-0-0-2 | 語音信箱。你沒留言。掛斷後更安靜。 | BLANK_TXT.call[0][0][2]
BLANK_TXT-call-0-1-0 | 接通了。她聲音有點喘：「怎麼了？」背景像有人走動。你問不出口。 | BLANK_TXT.call[0][1][0]
BLANK_TXT-call-0-1-1 | 她說訊號不好，請你改簡訊。電話那頭隱約有低沉男聲。 | BLANK_TXT.call[0][1][1]
BLANK_TXT-call-0-1-2 | 通話中。她把音量調很小，像怕被旁邊的人聽見你的名字。 | BLANK_TXT.call[0][1][2]
BLANK_TXT-call-0-2-0 | 剛接通就被靜音。幾秒後她用氣音說：「別打過來。」然後忙線。 | BLANK_TXT.call[0][2][0]
BLANK_TXT-call-0-2-1 | 你打第二次。直接進語音信箱。像被放進另一個世界的門外。 | BLANK_TXT.call[0][2][1]
BLANK_TXT-call-0-2-2 | 接通時她笑了一下——不是對你。隨即壓低聲音：「我在外面，晚點。」 | BLANK_TXT.call[0][2][2]
BLANK_TXT-call-1-0-0 | 她接了，語氣軟：「想聽我聲音喔？」卻很快說要掛，像有人在催。 | BLANK_TXT.call[1][0][0]
BLANK_TXT-call-1-0-1 | 通話裡她喊你名字還親暱，背景卻忽然安靜得不自然。 | BLANK_TXT.call[1][0][1]
BLANK_TXT-call-1-0-2 | 你說想她。她「嗯」了一聲，又補「我也是」——太快，像背稿。 | BLANK_TXT.call[1][0][2]
BLANK_TXT-call-1-1-0 | 電話那頭有杯碰撞聲。她說在咖啡店。你記得她出門時沒提咖啡。 | BLANK_TXT.call[1][1][0]
BLANK_TXT-call-1-1-1 | 她一邊講一邊走，呼吸亂。你問是不是在跑，她笑著否認。 | BLANK_TXT.call[1][1][1]
BLANK_TXT-call-1-1-2 | 訊號裡混進一句聽不清的話。她說是電視。家裡沒開電視。 | BLANK_TXT.call[1][1][2]
BLANK_TXT-call-1-2-0 | 她接起來就先「噓」。然後小聲：「別鬧，我在忙。」忙的對象不是你。 | BLANK_TXT.call[1][2][0]
BLANK_TXT-call-1-2-1 | 通話被另一隻手拿走又還來。她說「朋友鬧我」。朋友是誰。 | BLANK_TXT.call[1][2][1]
BLANK_TXT-call-1-2-2 | 你聽見布料摩擦與壓抑的喘息。她說「風太大」。掛斷得乾脆。 | BLANK_TXT.call[1][2][2]
BLANK_TXT-call-2-0-0 | 她接聽時聲音軟軟的，說「想回家」。背景只有風聲。 | BLANK_TXT.call[2][0][0]
BLANK_TXT-call-2-0-1 | 電話裡她叫你「阿祿」的尾音有點喘，說剛走完一段路。 | BLANK_TXT.call[2][0][1]
BLANK_TXT-call-2-0-2 | 長通話。她一直安撫你，卻說訊號不穩、不方便開視訊。 | BLANK_TXT.call[2][0][2]
BLANK_TXT-call-2-1-0 | 你求她報平安。她用氣音說「我很好」。很好得像在別人臂彎裡。 | BLANK_TXT.call[2][1][0]
BLANK_TXT-call-2-1-1 | 接通瞬間是男人呼吸。她搶過手機：「是室友啦。」笑得勉強。 | BLANK_TXT.call[2][1][1]
BLANK_TXT-call-2-1-2 | 她讓你別擔心，卻把通話切成免持。你聽見遠方一句含糊的暱稱。 | BLANK_TXT.call[2][1][2]
BLANK_TXT-call-2-2-0 | 她幾乎是哭腔接的：「別打了……我會回去。」你聽出恐懼，也聽出沉溺。 | BLANK_TXT.call[2][2][0]
BLANK_TXT-call-2-2-1 | 通話結束前，她脫口「喜歡」——對象含糊。你問是誰，她裝沒聽見。 | BLANK_TXT.call[2][2][1]
BLANK_TXT-call-2-2-2 | 你罵了她。她沉默，然後輕輕說「對不起」。對不起的內容，她不願展開。 | BLANK_TXT.call[2][2][2]
BLANK_TXT-search-0-0-0 | 抽屜裡只有收據與髮圈。平凡得讓你覺得自己多心。 | BLANK_TXT.search[0][0][0]
BLANK_TXT-search-0-0-1 | 枕頭下沒有東西。你把房間復原，像什麼都沒發生。 | BLANK_TXT.search[0][0][1]
BLANK_TXT-search-0-0-2 | 衣架上多了一件你沒看過的外套——也可能是新買的。你說服自己。 | BLANK_TXT.search[0][0][2]
BLANK_TXT-search-0-1-0 | 垃圾桶有揉皺的便利貼，字跡被水暈開，只剩一個「等」。 | BLANK_TXT.search[0][1][0]
BLANK_TXT-search-0-1-1 | 梳妝台多了一支不是家裡常用的香水試管。味道偏濃。 | BLANK_TXT.search[0][1][1]
BLANK_TXT-search-0-1-2 | 床邊地毯壓出一個陌生鞋印大小的凹痕。也許是你自己的。 | BLANK_TXT.search[0][1][2]
BLANK_TXT-search-0-2-0 | 抽屜深處有一張折起來的名片，頭銜你看不懂，電話號碼被塗黑。 | BLANK_TXT.search[0][2][0]
BLANK_TXT-search-0-2-1 | 枕頭套內側沾到一點不易察覺的痕跡，乾了，顏色偏濁。你不敢深想。 | BLANK_TXT.search[0][2][1]
BLANK_TXT-search-0-2-2 | 她的充電線旁掉了一枚不屬於這個家的袖扣。金屬冷光。 | BLANK_TXT.search[0][2][2]
BLANK_TXT-search-1-0-0 | 你找到她換下的內衣，洗過了，卻還殘一點體香與別的味道混在一起。 | BLANK_TXT.search[1][0][0]
BLANK_TXT-search-1-0-1 | 筆記本夾層有半張撕掉的便條，殘字像「今晚」。 | BLANK_TXT.search[1][0][1]
BLANK_TXT-search-1-0-2 | 衣櫃深處多了一條男士手帕，熨得平整，不是你的。 | BLANK_TXT.search[1][0][2]
BLANK_TXT-search-1-1-0 | 垃圾桶裡有保險套包裝的尖角——也可能是別的塑膠。你盯了很久。 | BLANK_TXT.search[1][1][0]
BLANK_TXT-search-1-1-1 | 鏡子上有擦過的手印，高度不像她一個人能碰到的角度。 | BLANK_TXT.search[1][1][1]
BLANK_TXT-search-1-1-2 | 枕頭旁掉了一根短於她髮長的黑髮，髮質更粗。 | BLANK_TXT.search[1][1][2]
BLANK_TXT-search-1-2-0 | 你翻到手機備用機的收據。開通日是上個月。她沒跟你提過。 | BLANK_TXT.search[1][2][0]
BLANK_TXT-search-1-2-1 | 床頭櫃深處有潤滑液，瓶口有使用過的痕跡。家裡從未一起用過。 | BLANK_TXT.search[1][2][1]
BLANK_TXT-search-1-2-2 | 抽屜裡有一串你沒送過的鑰匙圈，掛著小小的姓氏飾片。 | BLANK_TXT.search[1][2][2]
BLANK_TXT-search-2-0-0 | 抽屜與枕頭都整齊得過分。你什麼都沒找到，卻仍覺得自己多心。 | BLANK_TXT.search[2][0][0]
BLANK_TXT-search-2-0-1 | 衣櫃裡只有她的衣服。高好感讓你更怕錯過什麼——但眼前確實乾淨。 | BLANK_TXT.search[2][0][1]
BLANK_TXT-search-2-0-2 | 你把房間復原，像什麼都沒發生。懷疑來自心裡，不是物證。 | BLANK_TXT.search[2][0][2]
BLANK_TXT-search-2-1-0 | 錄音筆誤開，殘留幾秒喘息與男人低語「別回家那麼早」。隨即靜音。 | BLANK_TXT.search[2][1][0]
BLANK_TXT-search-2-1-1 | 鏡子邊緣貼著半片保險套包裝，撕口新鮮。 | BLANK_TXT.search[2][1][1]
BLANK_TXT-search-2-1-2 | 床墊縫裡有一顆鈕扣，款式像西裝，不是她的衣服。 | BLANK_TXT.search[2][1][2]
BLANK_TXT-search-2-2-0 | 你翻到對話截圖的列印稿，收件人備註「強叔」。內容被撕到只剩「想要」。 | BLANK_TXT.search[2][2][0]
BLANK_TXT-search-2-2-1 | 枕頭套反面寫著日期與「第三次」。字跡不是她平時的圓潤。 | BLANK_TXT.search[2][2][1]
BLANK_TXT-search-2-2-2 | 抽屜最底有一條男士皮帶，扣環還帶彎痕。你把它放回去，手在抖。 | BLANK_TXT.search[2][2][2]
BLANK_TXT-jack-0-0-0 | 你靠在她空著的床沿，隔著褲子摩擦。想的只是她笑著說晚安。射完只覺得空。 | BLANK_TXT.jack[0][0][0]
BLANK_TXT-jack-0-0-1 | 廁所門反鎖。你想像她在外面買東西，平凡得可笑。高潮來時沒有別人的臉。 | BLANK_TXT.jack[0][0][1]
BLANK_TXT-jack-0-0-2 | 你把臉埋進她枕頭，只為一點洗髮精味。弄髒後自己換洗，像偷偷贖罪。 | BLANK_TXT.jack[0][0][2]
BLANK_TXT-jack-0-1-0 | 你擼的時候腦內開始跑偏：她被誰靠近、誰碰她的腰。射在掌心，嫌惡與快感並行。 | BLANK_TXT.jack[0][1][0]
BLANK_TXT-jack-0-1-1 | 你盯著她出門前的背影，幻想衣服被別的手掀起。膝蓋發軟。 | BLANK_TXT.jack[0][1][1]
BLANK_TXT-jack-0-1-2 | 高潮前你罵自己變態。高潮後你更清楚：你還想看更糟的畫面。 | BLANK_TXT.jack[0][1][2]
BLANK_TXT-jack-0-2-0 | 你想像她跪在強叔兩腿間，嘴角發亮。你跟著節奏套弄，射精時咬住她的名字。 | BLANK_TXT.jack[0][2][0]
BLANK_TXT-jack-0-2-1 | 腦內是她被從後面進入，同時回你「再一下下」。你射在內褲裡，黏膩發熱。 | BLANK_TXT.jack[0][2][1]
BLANK_TXT-jack-0-2-2 | 你握著她的內衣打手槍。射在布料上的瞬間，腦內是她被內射後若無其事地回家。 | BLANK_TXT.jack[0][2][2]
BLANK_TXT-jack-1-0-0 | 你一邊想她溫柔喊你的樣子，一邊因患得患失而更硬。射精時只有她的臉。 | BLANK_TXT.jack[1][0][0]
BLANK_TXT-jack-1-0-1 | 射精時你喊她的名字。腦內沒有別人，只有她遲遲不回的訊息氣泡。 | BLANK_TXT.jack[1][0][1]
BLANK_TXT-jack-1-0-2 | 你用她送的圍巾捂住口鼻擼到眼前發白。事後塞回原位，像偷偷贖罪。 | BLANK_TXT.jack[1][0][2]
BLANK_TXT-jack-1-1-0 | 幻想更細：旅館床、她咬著枕頭、手機亮著你的未接來電。你射得又急又多。 | BLANK_TXT.jack[1][1][0]
BLANK_TXT-jack-1-1-1 | 你想像她被抱到洗手台邊進入，還抽空回你「訊號不好」。你氣得更硬。 | BLANK_TXT.jack[1][1][1]
BLANK_TXT-jack-1-1-2 | 高潮邊緣你故意停住，逼自己看清那具交疊的身體——然後才釋放。 | BLANK_TXT.jack[1][1][2]
BLANK_TXT-jack-1-2-0 | 你承認：你在意的不只是她安不安全，還有她爽不爽。擼動變得又重又恨。 | BLANK_TXT.jack[1][2][0]
BLANK_TXT-jack-1-2-1 | 腦內強叔讓她叫床。她忍著不叫你的名字。你射在地板上，喘得像哭。 | BLANK_TXT.jack[1][2][1]
BLANK_TXT-jack-1-2-2 | 你邊看她出門前換下的絲襪邊打手槍。射精時幻想絲襪被撕開，掛在別人小腿上。 | BLANK_TXT.jack[1][2][2]
BLANK_TXT-jack-2-0-0 | 你愛她愛到想哭，卻仍只能靠幻想她的體溫自慰。射精時喉嚨發緊。 | BLANK_TXT.jack[2][0][0]
BLANK_TXT-jack-2-0-1 | 你把臉埋進她的枕頭打手槍，想的是她回家抱你。射完你說對不起，無人聽見。 | BLANK_TXT.jack[2][0][1]
BLANK_TXT-jack-2-0-2 | 高潮時你想像她在門外推門進來撞見。精液涼在小腹上，愧疚比快感更重。 | BLANK_TXT.jack[2][0][2]
BLANK_TXT-jack-2-1-0 | 你幻想她被內射到合不攏，還對你說「我很好」。你射得發疼，掌心全是白濁。 | BLANK_TXT.jack[2][1][0]
BLANK_TXT-jack-2-1-1 | 腦內鏡頭殘忍：她跪趴著，腰上有指印，手機震著你的來電。你跟著抽插節奏套弄到射。 | BLANK_TXT.jack[2][1][1]
BLANK_TXT-jack-2-1-2 | 你一邊哭一邊擼。哭的是失去，硬的是她被別人使用。射精時兩者疊在一起。 | BLANK_TXT.jack[2][1][2]
BLANK_TXT-jack-2-2-0 | 你想像把精液射在她被使用過的地方外面，像蓋章。理智罵你，手卻更快。 | BLANK_TXT.jack[2][2][0]
BLANK_TXT-jack-2-2-1 | 腦內她被中出後走路姿勢不對，回家還親你。你射在她換下的內褲裡，熱熱地黏著。 | BLANK_TXT.jack[2][2][1]
BLANK_TXT-jack-2-2-2 | 射精那幾秒你甚至希望她晚點回來——好讓幻想停在最髒的一幕。射完你又只想她立刻推門進來。 | BLANK_TXT.jack[2][2][2]
PHONE_RIPPLE-0-0-T | 想家 | PHONE_RIPPLE[0][0].t
PHONE_RIPPLE-0-0-BODY | 好想快點回去。阿祿大概還開著燈吧。 | PHONE_RIPPLE[0][0].body
PHONE_RIPPLE-0-0-SOFT | 想回家了……希望客廳的燈還亮著。 | PHONE_RIPPLE[0][0].soft
PHONE_RIPPLE-0-1-T | 安心 | PHONE_RIPPLE[0][1].t
PHONE_RIPPLE-0-1-BODY | 外面走走也好，心卻穩穩朝家的方向。 | PHONE_RIPPLE[0][1].body
PHONE_RIPPLE-0-1-SOFT | 一想到他在等，肩膀就鬆下來。 | PHONE_RIPPLE[0][1].soft
PHONE_RIPPLE-0-2-T | 軟 | PHONE_RIPPLE[0][2].t
PHONE_RIPPLE-0-2-BODY | 袋繩勒著手心，卻覺得踏實。想聽他說辛苦了。 | PHONE_RIPPLE[0][2].body
PHONE_RIPPLE-0-2-SOFT | 腳步自己加快——因為有人在家。 | PHONE_RIPPLE[0][2].soft
PHONE_RIPPLE-0-3-T | 惦記 | PHONE_RIPPLE[0][3].t
PHONE_RIPPLE-0-3-BODY | 走著走著就在想：他現在坐哪裡、有沒有餓。 | PHONE_RIPPLE[0][3].body
PHONE_RIPPLE-0-3-SOFT | 袋裡的東西不重要，想聽他喊我一聲。 | PHONE_RIPPLE[0][3].soft
PHONE_RIPPLE-1-0-T | 動搖 | PHONE_RIPPLE[1][0].t
PHONE_RIPPLE-1-0-BODY | 多聊兩句應該沒關係吧……可是又怕被問細節。 | PHONE_RIPPLE[1][0].body
PHONE_RIPPLE-1-0-SOFT | 心有點晃。還是想著阿祿會不會擔心。 | PHONE_RIPPLE[1][0].soft
PHONE_RIPPLE-1-1-T | 竊喜 | PHONE_RIPPLE[1][1].t
PHONE_RIPPLE-1-1-BODY | 被多看一眼，心口居然甜了一下。不該的。 | PHONE_RIPPLE[1][1].body
PHONE_RIPPLE-1-1-SOFT | 偷偷高興了一秒，隨即又想逃回家。 | PHONE_RIPPLE[1][1].soft
PHONE_RIPPLE-1-2-T | 亂 | PHONE_RIPPLE[1][2].t
PHONE_RIPPLE-1-2-BODY | 回訊打了又刪。到底要裝得多平常才好。 | PHONE_RIPPLE[1][2].body
PHONE_RIPPLE-1-2-SOFT | 腦袋好亂。阿祿的名字一閃，又被別的蓋過。 | PHONE_RIPPLE[1][2].soft
PHONE_RIPPLE-1-3-T | 猶豫 | PHONE_RIPPLE[1][3].t
PHONE_RIPPLE-1-3-BODY | 想靠近一點，又想立刻拔腿回家。 | PHONE_RIPPLE[1][3].body
PHONE_RIPPLE-1-3-SOFT | 停在路口。一邊是新鮮的，一邊是燈。 | PHONE_RIPPLE[1][3].soft
PHONE_RIPPLE-2-0-T | 心虛 | PHONE_RIPPLE[2][0].t
PHONE_RIPPLE-2-0-BODY | 阿祿的訊息亮了。我不敢先點開。 | PHONE_RIPPLE[2][0].body
PHONE_RIPPLE-2-0-SOFT | 心虛得發燙。他若問，我該用什麼語氣。 | PHONE_RIPPLE[2][0].soft
PHONE_RIPPLE-2-1-T | 發熱 | PHONE_RIPPLE[2][1].t
PHONE_RIPPLE-2-1-BODY | 味道還掛在袖口，心跳卻不肯停。 | PHONE_RIPPLE[2][1].body
PHONE_RIPPLE-2-1-SOFT | 臉好熱。想沖掉，又怕沖不掉。 | PHONE_RIPPLE[2][1].soft
PHONE_RIPPLE-2-2-T | 躲 | PHONE_RIPPLE[2][2].t
PHONE_RIPPLE-2-2-BODY | 找個角落站一下。別讓任何人讀我的臉。 | PHONE_RIPPLE[2][2].body
PHONE_RIPPLE-2-2-SOFT | 躲一躲再回訊……阿祿，對不起。 | PHONE_RIPPLE[2][2].soft
PHONE_RIPPLE-2-3-T | 慌 | PHONE_RIPPLE[2][3].t
PHONE_RIPPLE-2-3-BODY | 解釋的台詞在嘴裡轉，一句都說不出口。 | PHONE_RIPPLE[2][3].body
PHONE_RIPPLE-2-3-SOFT | 慌歸慌，還是想起家裡那盞燈。 | PHONE_RIPPLE[2][3].soft
PHONE_RIPPLE-3-0-T | 逃避 | PHONE_RIPPLE[3][0].t
PHONE_RIPPLE-3-0-BODY | 家裡那盞燈好亮。我還沒準備好用坦然的臉推門。 | PHONE_RIPPLE[3][0].body
PHONE_RIPPLE-3-0-SOFT | 想逃一下下……不是因為討厭燈，是因為愧疚。 | PHONE_RIPPLE[3][0].soft
PHONE_RIPPLE-3-1-T | 心虛 | PHONE_RIPPLE[3][1].t; dup-of PHONE_RIPPLE-2-0-T
PHONE_RIPPLE-3-1-BODY | 他一傳訊，心就縮一下。不是煩他，是怕被聽穿。 | PHONE_RIPPLE[3][1].body
PHONE_RIPPLE-3-1-SOFT | 心虛得發熱。還是會想起阿祿在等。 | PHONE_RIPPLE[3][1].soft
PHONE_RIPPLE-3-2-T | 沉 | PHONE_RIPPLE[3][2].t
PHONE_RIPPLE-3-2-BODY | 心沉在另一個人那邊，拖也拖不回來。……可是家的方向仍在。 | PHONE_RIPPLE[3][2].body
PHONE_RIPPLE-3-2-SOFT | 沉得好深。回家的路短，我卻隔得好遠。 | PHONE_RIPPLE[3][2].soft
PHONE_RIPPLE-3-3-T | 慢 | PHONE_RIPPLE[3][3].t
PHONE_RIPPLE-3-3-BODY | 腳步不想加快。不是冷掉，是我還在練習『我回來了』。 | PHONE_RIPPLE[3][3].body
PHONE_RIPPLE-3-3-SOFT | 燈在前面。我走得很慢，因為愧疚走不快。 | PHONE_RIPPLE[3][3].soft
VIEW_TH-guard-1-0 | 阿祿提醒過我要小心……今天遇到強叔，我下意識後退了半步。 | VIEW_TH.guard[1][0]
VIEW_TH-guard-1-1 | 手機亮了，是強叔。我看了一眼，沒有立刻回。 | VIEW_TH.guard[1][1]
VIEW_TH-guard-1-2 | 也許阿祿說得對。靠太近的人，不一定安全。 | VIEW_TH.guard[1][2]
VIEW_TH-guard-2-0 | 想回訊息，又想起阿祿的表情……手指停在螢幕上。 | VIEW_TH.guard[2][0]
VIEW_TH-guard-2-1 | 強叔又靠近了。我假裝整理瀏海，把距離拉開一點。 | VIEW_TH.guard[2][1]
VIEW_TH-guard-2-2 | 今晚早點回去吧。燈若是亮著，我大概會比較安心。 | VIEW_TH.guard[2][2]
VIEW_TH-guard-3-0 | 就算心還是會亂，我也想再聽一次阿祿說『我在意你』。 | VIEW_TH.guard[3][0]
VIEW_TH-guard-3-1 | 拒絕的話堵在喉嚨裡。可是阿祿的擔心，還掛在耳邊。 | VIEW_TH.guard[3][1]
VIEW_TH-guard-3-2 | 我是不是……還能把自己拉回那個家。 | VIEW_TH.guard[3][2]
VIEW_TH-soft-1-0 | 阿祿若知道，大概會擔心吧……我多聊兩句，心裡卻過意不去。 | VIEW_TH.soft[1][0]
VIEW_TH-soft-1-1 | 強叔的訊息亮著。回家要怎麼講才不會傷他。 | VIEW_TH.soft[1][1]
VIEW_TH-soft-1-2 | 被說好看的感覺讓我心虛——像偷了不該有的高興。 | VIEW_TH.soft[1][2]
VIEW_TH-soft-2-0 | 夜景邀約還在對話裡。我想拒絕，又沒有立刻拒絕。 | VIEW_TH.soft[2][0]
VIEW_TH-soft-2-1 | 他懂我——這句話滾了一圈，隨即撞上對阿祿的愧疚。 | VIEW_TH.soft[2][1]
VIEW_TH-soft-2-2 | 對阿祿隱瞞，比想像中更容易……也更難受。 | VIEW_TH.soft[2][2]
VIEW_TH-soft-3-0 | 門沒鎖。我知道這不該當成許可。 | VIEW_TH.soft[3][0]
VIEW_TH-soft-3-1 | 他不會兇我。……所以我更覺得自己很過分。 | VIEW_TH.soft[3][1]
VIEW_TH-soft-3-2 | 今晚……也許會晚一點。阿祿，對不起。 | VIEW_TH.soft[3][2]
JOURNAL-0-0-0-0 | 今天去便利店補牛奶和布丁。店裡的燈白得刺眼，我站在冷藏櫃前挑了好久，最後還是選了阿祿喜歡的那款。排隊時聽著廣播播促銷，忽然很想知道他現在在幹嘛——是不是又在客廳等我推門。結完帳我把收據塞進口袋，外面的風有點涼，袋繩勒著手心，卻讓人安心。回家的路不長，我還是走得偏快，想像他把燈開著的樣子。推開家門前我對自己說：先說「我回來了」，再把布丁拿出來給他看。這些小事普通得不行，可是一想到有人在等，心就軟得不像話。今晚想聽他說說今天過得怎麼樣，哪怕只是隨便聊兩句也好。 | JOURNAL_POOL[0][0][0][0]
JOURNAL-0-0-0-1 | 短短一趟便利店，卻把我想家的心情放大了。貨架上的即食麵讓我想到他熬夜時隨便應付的晚餐，於是多拿了一盒看起來比較像樣的。店員找零時對我笑了一下，我愣了半秒才道謝——最近好像很容易害羞，大概是同居讓情緒都變敏感了。走在回家的路上，我數著路燈，告訴自己不要想太多。阿祿若問我去哪，我就說補貨，很坦白，也很想被他知道我有在為這個家做事。袋裡的布丁涼涼的，像一種可以交出的心意。 | JOURNAL_POOL[0][0][0][1]
JOURNAL-0-0-1-0 | 便利店裡有人多看了我一眼。也許只是錯覺，我卻低頭盯著布丁包裝，耳尖發熱。結帳時光好像被拉長，自動門打開又關上，風灌進來時我竟鬆了口氣。回家路上我反覆告訴自己：只是買東西。阿祿的訊息若亮起來，我要若無其事地回「在便利店」。把收據揉進口袋的時候，手心有點濕。門把在掌心轉開前，我整理了一下表情——不為別的，只是突然不想讓他看出我剛才有多緊張。 | JOURNAL_POOL[0][0][1][0]
JOURNAL-0-1-0-0 | 便利店的燈光還是一樣白，可是我的心思已經不一樣了。拿牛奶時指尖凍得發疼，腦裡卻閃過另一個聲音——不該在這裡想起的聲音。我把布丁放進籃子，動作正常得像演戲。阿祿傳訊問我回不回得來吃晚餐，我回「快了」，刪掉了本來想打的「想你」。不是不想，是心虛。結帳時我笑得很標準，走出去才發現自己走得太快，像要逃離什麼。袋繩勒進手指的痛讓我清醒一點：我還有一個家要回，還有一個人在等。他越是等我，我越覺得自己對不起他。 | JOURNAL_POOL[0][1][0][0]
JOURNAL-0-1-0-1 | 夜班便利店人很少。我本來只想快速買完，卻在門前停了兩秒，像在確認身後有沒有腳步。沒有。只有自己的呼吸。回到家裡我把東西一一拿給阿祿看，語氣輕快，內心卻像塞了一塊沒拆封的冰塊。他若再溫柔一點，愧疚就更重——我更想躲進浴室把表情練好，才敢出來面對他。我討厭這樣的自己，卻又停不下來。 | JOURNAL_POOL[0][1][0][1]
JOURNAL-0-1-1-0 | 他出現在冷凍櫃旁的時候，我差點沒握住提籃。只是「剛好」碰到，只是聊了兩句哪一種布丁不甜，可是他的視線停在我臉上太久了。我說要回家，他笑著讓路，指尖幾乎擦過我的手背。走出自動門，夜風很涼，我的耳根卻燙。給阿祿的回訊我打了又刪，最後只剩「買完了」。推門回家前我在樓道深呼吸，把剛剛的心動按進喉嚨深處。他問我怎麼了，我說店裡空調太冷。謊話輕得像空氣，我卻覺得自己重得抬不起頭。 | JOURNAL_POOL[0][1][1][0]
JOURNAL-0-2-0-0 | 便利店成了最可笑的掩飾。我買牛奶，買他愛的布丁，像還在當那個乖巧的同居者；可是身體記得另一種觸感——在貨架轉角被壓低聲音的喘息，在冷氣出風口旁被吻到腿軟。回家的路每一步都像踩在自己的秘密上。阿祿若湊近，會不會聞到我袖口裡洗不掉的味道？我把收據扔進下水道，像扔掉罪證。門開的時候我已經練習好笑容。他把燈開著等我，溫柔得讓我想哭，也讓我想被更用力地弄壞。我把布丁放上桌，聲音穩得可怕：「我回來了。」 | JOURNAL_POOL[0][2][0][0]
JOURNAL-0-2-0-1 | 短途也能變成墮落的捷徑。我在監視器照不到的死角被他抵住，手指探進裙底時我咬住自己的唇，生怕叫出聲。結束後我若無其事去結帳，店員大概只當我臉紅是被冷風吹的。回到家我先沖澡，水開很大，像要沖掉腿間的黏稠與記憶。阿祿在門外問我要不要吃熱的，我應了一聲，背靠著磁磚，雙腿還在抖。我愛這個家，也正在一點點把它背叛得更徹底。 | JOURNAL_POOL[0][2][0][1]
JOURNAL-1-0-0-0 | 今天去商場轉轉，人潮把我推著走，耳機裡的歌都聽不太清。我試了兩件衣服，鏡子裡的自己看起來普通又安定。穿過中庭的時候忽然很想傳訊給阿祿，問他晚餐想吃什麼——這種想念來得很乾淨，沒有雜質。買了一條手帕和一盒餅乾，像給這個家帶一點小小的戰利品。手扶梯往下時我看著燈海，告訴自己：回去要先抱抱他，哪怕只是肩膀碰一下也好。同居讓逛街也變成「為兩個人找東西」的任務，這種感覺，我其實很喜歡。 | JOURNAL_POOL[1][0][0][0]
JOURNAL-1-0-0-1 | 商場太大，走著走著腳會酸。我在休息區坐下喝水，看著來來去去的人，忽然覺得自己的生活也開始有形狀了——有人等、有地方回、有可以分享的瑣事。阿祿大概還在家裡做自己的事。一想到燈可能亮著，我就忍不住加快腳步。專櫃小姐問我是不是買給男朋友，我愣了一下，說「青梅竹馬」。說完又有點後悔，好像把什麼說得太輕了。袋繩勒著手，心卻飄著，像裝了棉花糖。 | JOURNAL_POOL[1][0][0][1]
JOURNAL-1-0-1-0 | 商場人很多，有一瞬我以為有人跟著。回頭只有陌生臉孔。大概是我太敏感。試衣間的門關上時，我聽見外面有人低聲說話，聽不清內容，卻莫名心跳。出來後我把衣服放回架上，掌心出汗。給阿祿的訊息我打了「在商場」，發出去才覺得自己像在報備行程的小孩。可笑，又安心。 | JOURNAL_POOL[1][0][1][0]
JOURNAL-1-1-0-0 | 專櫃說這件衣服適合約會，我笑著否認，耳尖卻熱起來。鏡子裡的我比想像中更在意自己的線條。阿祿問我在哪，我回商場，刪掉了「想你」。不是不想，是怕一說想，就會對照到另一種想念——更燙、更不該。手扶梯上有人靠太近，我側過身，呼吸還是亂了。購物袋越來越滿，心卻越來越空出一塊留給不該等的人。回家前我在化妝室補唇，動作熟練得像準備見誰。見的是阿祿。我對自己這樣說，聲音虛得像謊。 | JOURNAL_POOL[1][1][0][0]
JOURNAL-1-1-0-1 | 中庭有人招手，我假裝沒看見，腳步卻慢了半拍。那種「被看見」的感覺又回來了，像身上貼了標籤。我買了很多東西，像要用消費證明自己只是逛街。阿祿的溫柔在腦裡轉了一圈，變成刺——他越好，我越像壞人。我把傳單塞進袋底，不敢看上面的字。 | JOURNAL_POOL[1][1][0][1]
JOURNAL-1-1-1-0 | 他在中庭等我的時候，背景音樂正好放到副歌。只是聊聊、只是幫忙提袋，可是他的手覆上我的手時，我沒有抽開。試衣間的門板很薄，他在外面「等」，我在裡面整理裙子，雙腿夾緊，生怕自己的呼吸被聽去。出來後我笑得很自然，自然得需要練習。回給阿祿的訊息短得無情：「還在逛。」其實我已經被他的氣味包圍。到家我把袋子攤開給他看，每一件都是藉口，每一件都是罪證。 | JOURNAL_POOL[1][1][1][0]
JOURNAL-1-2-0-0 | 商場的試衣間成了我們的臨時房間。他把我抵在鏡子前，掌心從腰滑進腿心，我咬著他的肩膀不讓自己叫出聲——外面還有導購的腳步。高潮來的時候我眼前發白，鏡子裡的自己淫蕩得陌生。結束後我若無其事整理衣領，出去結帳，笑容標準得像會員卡。袋裡的衣服是遮羞布，腿間的濕黏才是實話。阿祿開門時我把袋子塞進他懷裡，主動說「給你看」。我需要他的信任，好讓下一次墮落更安全。 | JOURNAL_POOL[1][2][0][0]
JOURNAL-1-2-0-1 | 人潮是最好的掩護。他牽著我穿過專櫃，指腹在我掌心畫圈，每一下都像在下腹點火。停車場的死角裡他把我轉過去，從後面頂進來，短促、凶、又準。我按著車門，不敢看四周的監視器。完事後我雙腿發軟，還要裝成腳痛去買飲料。回家路上我開著窗，讓風把情慾吹淡一點——吹不淡。門後的阿祿若擁抱我，會摸到我還在顫的脊骨。我讓他抱。擁抱成了另一層謊言。 | JOURNAL_POOL[1][2][0][1]
JOURNAL-2-0-0-0 | 咖啡店靠窗的位子很暖。我點了熱可可，杯壁燙得舒服，小說翻了兩頁就走神——走神到阿祿身上。他現在是不是也坐在沙發上？會不會覺得屋裡太安靜？我拍了一張杯子的照片，想傳給他，又覺得太黏，最後只存進相簿。店員叫號的聲音普通得讓人安心。離開時我把杯墊丟進垃圾桶，告訴自己：偶爾一個人坐坐也好，但回家的方向永遠比較甜。路上風吹過，我想著要不要買點小蛋糕帶回去分他。 | JOURNAL_POOL[2][0][0][0]
JOURNAL-2-0-0-1 | 咖啡很香，人也不多。我把耳機戴上，假裝自己很忙，其實只是想有一段不被打擾的空白。空白裡最先浮出來的，還是家裡的燈，還有阿祿喊我名字的方式。這種想念不轟烈，卻很穩。我把最後一口可可喝完，付帳，起身。推門的時候我對自己笑了一下：回去要先洗手，再給他看我買的蛋糕。同居讓「一個人的下午」也變成「會有人在意我晚不晚回」的事，我其實很貪戀這種被在意。 | JOURNAL_POOL[2][0][0][1]
JOURNAL-2-0-1-0 | 隔壁桌的對話太近，有個男聲讓我莫名緊繃。我把耳機音量調大，卻仍聽得見「小姐」兩個字的尾音。大概是叫別人。我低頭攪杯子，泡沫碎成一圈圈。給阿祿的訊息我打了「在咖啡店」，發完才覺得自己像在對空氣證明清白。可笑。 | JOURNAL_POOL[2][0][1][0]
JOURNAL-2-1-0-0 | 靠窗位變成一種習慣。可可還是一樣甜，心思卻開始發苦。有人想請客，我說不用，卻沒有立刻走——這半秒的猶豫，比任何告白都誠實。阿祿來電時我看著螢幕亮起，竟先感到心虛，才感到想念。拒接太過分，於是我回「店裡吵」。手在發抖，字卻打得很穩。離開座位時我回頭看了一眼空掉的椅子，像在確認有沒有把秘密遺落。回家的路變長了，每一步都踩在「我是不是變了」這個問題上。 | JOURNAL_POOL[2][1][0][0]
JOURNAL-2-1-0-1 | 甜點叉停在半空。我想起阿祿，又把那想法按下去，換成另一張臉。我討厭自己，可是咖啡香裡的曖昧讓人上癮。杯墊上被寫過的號碼我很快撕掉，像撕掉證據。門鈴聲一響，我整個人一震——只是別桌的人。我笑自己神經質，笑完眼眶卻熱。 | JOURNAL_POOL[2][1][0][1]
JOURNAL-2-1-1-0 | 他坐在我對面的時候，世界小成一張桌子。膝蓋在桌下幾乎相碰，誰也不先退。聊天內容很無害，眼神卻不是。阿祿的來電被我拒了，回訊寫店裡吵，其實我怕一接起來，聲音會洩漏我正在被人看著。他替我擦掉嘴角的奶油時，指腹停得太久，我腿心一緊。離開時他幫我披外套，咖啡香裡混進他的味道。我沒拒絕。到家我先刷牙，像要刷掉剛剛差點吻上去的那一瞬間。 | JOURNAL_POOL[2][1][1][0]
JOURNAL-2-2-0-0 | 咖啡店的廁所隔間窄得剛好容得下兩個人犯罪。他把我抱上水箱邊緣，掌心捂著我的嘴，下身一下下頂進來，外面還有沖水聲與腳步。我哭著高潮，眼淚跟涎水一起糊在他手上。完事後我整理裙子，走回座位把冷掉的可可喝完，像什麼都沒發生。帳單他按住，說「下次」。下次兩個字像項圈。回家我沖澡沖很久，阿祿問我是不是不舒服，我說咖啡因喝多了。躺在他旁邊時，體內還殘留被填滿的錯覺，我卻伸手回握住他——用忠誠的姿勢，完成不忠的夜晚。 | JOURNAL_POOL[2][2][0][0]
JOURNAL-2-2-0-1 | 靠窗位是我們的默契。窗外人潮流動，窗內他的手在桌下探進我的裙擺，指節彎曲，精準地揉到我發軟。我咬住吸管，不敢叫。高潮來時我把臉偏向街景，假裝看風景。離開後腿還軟，還要裝成正常步伐走回家。門開的一刻阿祿笑著接過袋子，我主動親他頰側，親得虔誠，像用一個吻去蓋章另一個吻。我已經分不清自己比較需要被愛，還是比較需要被弄髒。 | JOURNAL_POOL[2][2][0][1]
JOURNAL-3-0-0-0 | 阿祿說去公園透氣也好。我換了鞋，像赴一個他給的小小行程。步道不長，風卻把心吹得很開。長椅有點涼，我把外套拉緊，想像他在家把燈開著等。花壇的顏色普通得可愛，我拍了一張，想回去給他看。小孩在遠處笑，我忽然很想快點回家——不是因為無聊，是因為有人在。推門前我拍掉裙上的草屑，對自己說：先說我回來了，再把落葉書籤塞進他手心。 | JOURNAL_POOL[3][0][0][0]
JOURNAL-3-0-0-1 | 公園的雲走得很慢。我沿著你說的那條路走，一步都像在執行『好好照顧自己』的囑咐。袋裡後來多了烤地瓜，熱呼呼的，想著要分你一半。這種外出不刺激，卻很踏實：理由是你給的，回家的方向也是你。 | JOURNAL_POOL[3][0][0][1]
JOURNAL-3-0-1-0 | 有人慢跑經過，我側身讓路，心跳卻無端快了一拍。大概是風太涼。我低頭看手機，阿祿的對話框安安静静，我回『還在公園』，打完字才覺得自己像報備的小孩。可笑，又安心。 | JOURNAL_POOL[3][0][1][0]
JOURNAL-3-1-0-0 | 坐在長椅上時，我想起你腿傷不能來。這句遺憾很輕，卻反復出現。風把瀏海吹亂，我伸手整理，忽然很想被你揉一下頭。回程我走得偏快，像要把透氣剩下的時間，全還給玄關。 | JOURNAL_POOL[3][1][0][0]
JOURNAL-3-1-0-1 | 花壇照片我沒馬上傳。想當著面給你看，看你笑。這種小心思幼稚得不像話，我卻藏不住。 | JOURNAL_POOL[3][1][0][1]
JOURNAL-3-1-1-0 | 天色偏晚時我起身，拍掉草屑，心裡只有一個聲音：回去。沒有別的邀約，沒有別的名字。只有你提議的公園，和我想念的那盞燈。 | JOURNAL_POOL[3][1][1][0]
JOURNAL-3-2-0-0 | 公園的夜晚也只是夜晚。我把你的建議當成護身符——去透氣、去走走、然後回家。長椅空了，步道空了，我的口袋裡只有書籤和地瓜的餘溫。推門時我先喊你，聲音穩得很。 | JOURNAL_POOL[3][2][0][0]
JOURNAL-3-2-0-1 | 若有人問我今天去哪，我會說公園，再說是你讓我去的。這句話裡沒有秘密，只有同居的溫度。 | JOURNAL_POOL[3][2][0][1]
JOURNAL-4-0-0-0 | 你說去書店看看，我便帶了布袋出門。文學區安靜得能聽見紙頁翻動。我站了很久，指尖滑過書脊，腦裡卻是家裡沙發的凹陷——你常坐的那一邊。角落座位空著，我先傳訊『到了』，才敢坐下翻開第一頁。散文寫得很慢，我讀兩行就想起你等我吃飯的樣子。結帳時選了書籤，小小的，像把你的建議折進口袋。 | JOURNAL_POOL[4][0][0][0]
JOURNAL-4-0-0-1 | 二手區有一本薄詩集。我想：你腿傷的日子，適合晚上一起讀。店員問找什麼，我說隨便看看，其實在想帶什麼回去給這個家。推門前我回頭看一眼書架，告訴自己下次想拉你來——就算你暫時走不遠，我也想把書的味道帶回去。 | JOURNAL_POOL[4][0][0][1]
JOURNAL-4-0-1-0 | 店裡太靜，有一瞬我以為有人看我。抬頭只有書架與燈。我把耳機戴上，回你『在書店』，字打得很穩。 | JOURNAL_POOL[4][0][1][0]
JOURNAL-4-1-0-0 | 翻到一半忽然捨不得離開，可是更捨不得你。書頁香混著紙塵，我想把這味道帶進客廳。阿祿問我在哪，我回書店，又補『你說的地方真好』。打完這句，耳尖有點熱。 | JOURNAL_POOL[4][1][0][0]
JOURNAL-4-1-0-1 | 挑選的時間比預期長。不是迷路，是想挑一本配得上『你的提議』的書。 | JOURNAL_POOL[4][1][0][1]
JOURNAL-4-2-0-0 | 結完帳我把書抱在胸前，像抱著一個被允許的午後。回家的路變短了。茶几空出來的位置，我已經想好要怎麼擺。沒有曖昧的角落，只有想和你分享的目錄頁。 | JOURNAL_POOL[4][2][0][0]
JOURNAL-4-2-0-1 | 『你建議得真好』——這句話我回家後大概會再說一次。不是客套，是真的。 | JOURNAL_POOL[4][2][0][1]
UNCLE_ARC-1-HOME | 「……今天巷口有點亂。」她指節擦破了一點，卻很快把手藏進袖子。 | UNCLE_ARC[0].home
UNCLE_ARC-1-TH-0 | 手好抖，但不能讓他再被打。……就像小時候的我。 | UNCLE_ARC[0].th[0]
UNCLE_ARC-1-TH-1 | 他流血了，好可憐。一定要幫他。 | UNCLE_ARC[0].th[1]
UNCLE_ARC-1-TH-2 | 回去阿祿會說我太衝動吧……但他一定會誇我。 | UNCLE_ARC[0].th[2]
UNCLE_ARC-2-HOME | 「那個……他要人叫他強叔。」她坐下才補完半句，像怕說太多。 | UNCLE_ARC[1].home
UNCLE_ARC-2-TH-0 | 他說是為了媽媽……母親還去世了。 | UNCLE_ARC[1].th[0]
UNCLE_ARC-2-TH-1 | 阿祿當年也是這樣擋在我前面的。……所以我才停不下來。 | UNCLE_ARC[1].th[1]
UNCLE_ARC-2-TH-2 | 這件事要講給阿祿聽。 | UNCLE_ARC[1].th[2]
UNCLE_ARC-3-HOME | 「晚了二十分鐘。今晚煮你愛吃的。」她語氣得意，又有點心虛。 | UNCLE_ARC[2].home
UNCLE_ARC-3-TH-0 | 掃掃地板、煮個飯，不算什麼吧。 | UNCLE_ARC[2].th[0]
UNCLE_ARC-3-TH-1 | 被人需要的感覺，好奇怪，好溫暖。 | UNCLE_ARC[2].th[1]
UNCLE_ARC-3-TH-2 | 回去要煮阿祿愛吃的。 | UNCLE_ARC[2].th[2]
UNCLE_ARC-4-HOME | 「有人懂我。」她忽然說完又後悔，「……算了，你會擔心。」 | UNCLE_ARC[3].home
UNCLE_ARC-4-TH-0 | 他聽我講童年的時候沒有笑得太假。 | UNCLE_ARC[3].th[0]
UNCLE_ARC-4-TH-1 | 要不要跟阿祿說？算了，他會擔心。 | UNCLE_ARC[3].th[1]
UNCLE_ARC-4-TH-2 | 終於有人懂我……這種想法好危險。 | UNCLE_ARC[3].th[2]
UNCLE_ARC-5-HOME | 「我沒有怎樣。」她回來先洗了很久的手，重複這一句。 | UNCLE_ARC[4].home
UNCLE_ARC-5-TH-0 | 他說太孤單……手卻伸過來了。心跳好快。 | UNCLE_ARC[4].th[0]
UNCLE_ARC-5-TH-1 | 他馬上道歉。可是界線已經過了。 | UNCLE_ARC[4].th[1]
UNCLE_ARC-5-TH-2 | 對不起，阿祿。我一直告訴自己：我沒有怎樣。 | UNCLE_ARC[4].th[2]
UNCLE_ARC-6-HOME | 她很晚才回來，把熱牛奶放在你手邊，不敢提電影。 | UNCLE_ARC[5].home
UNCLE_ARC-6-TH-0 | 他說撐不住了。我不能不去。 | UNCLE_ARC[5].th[0]
UNCLE_ARC-6-TH-1 | 說好要陪阿祿的……『沒關係』比罵我還難受。 | UNCLE_ARC[5].th[1]
UNCLE_ARC-6-TH-2 | 我只去一下就回來。——我騙誰呢。 | UNCLE_ARC[5].th[2]
UNCLE_ARC-7-HOME | 「最近……比較常不小心。」她笑了一下，笑得很淺。 | UNCLE_ARC[6].home
UNCLE_ARC-7-TH-0 | 我好像習慣了。被依賴的感覺好危險。 | UNCLE_ARC[6].th[0]
UNCLE_ARC-7-TH-1 | 他還是很可憐。我走了誰照顧他？ | UNCLE_ARC[6].th[1]
UNCLE_ARC-7-TH-2 | 阿祿對我那麼溫柔……我更不能讓他知道。 | UNCLE_ARC[6].th[2]
UNCLE_ARC-8-HOME | 「阿祿不能知道。」她聲音發顫，又改口：「不想讓你擔心。」 | UNCLE_ARC[7].home
UNCLE_ARC-8-TH-0 | 重病……怎麼會這樣。 | UNCLE_ARC[7].th[0]
UNCLE_ARC-8-TH-1 | 他一直說不要連累我，可是他明明那麼痛。 | UNCLE_ARC[7].th[1]
UNCLE_ARC-8-TH-2 | 阿祿不能知道。 | UNCLE_ARC[7].th[2]
UNCLE_ARC-9-HOME | 她回來先沖澡，水聲開得很滿。出來後只說：「……我活著回來就好。」 | UNCLE_ARC[8].home
UNCLE_ARC-9-TH-0 | 只要能讓他們別再逼他……就這一次。 | UNCLE_ARC[8].th[0]
UNCLE_ARC-9-TH-1 | 他在哭。可是是我自己想幫他。 | UNCLE_ARC[8].th[1]
UNCLE_ARC-9-TH-2 | 對不起，阿祿。我是為了救人。——我一直這樣說服自己。 | UNCLE_ARC[8].th[2]
UNCLE_ARC-10-HOME | 隔天她回家先洗澡，出來後格外溫柔地替你準備早餐。 | UNCLE_ARC[9].home
UNCLE_ARC-10-TH-0 | 雨好大，回不去了。我不能把他一個人丟下。 | UNCLE_ARC[9].th[0]
UNCLE_ARC-10-TH-1 | 他說『我不能害你』。我說我自己願意的。 | UNCLE_ARC[9].th[1]
UNCLE_ARC-10-TH-2 | 阿祿，對不起……我好想你。可是我也沒辦法放手。 | UNCLE_ARC[9].th[2]
UNCLE_ARC-10-TH-3 | 先去洗澡。不能讓他聞到。 | UNCLE_ARC[9].th[3]
UNCLE_ARC-11-HOME | 「他說只有我不會丟下他。」她更黏你，卻也更閃躲。 | UNCLE_ARC[10].home
UNCLE_ARC-11-TH-0 | 又要出門了。是期待，還是害怕？ | UNCLE_ARC[10].th[0]
UNCLE_ARC-11-TH-1 | 手機亮了，是阿祿。……我怎麼可以一邊想他，一邊走向另一個人。 | UNCLE_ARC[10].th[1]
UNCLE_ARC-11-TH-2 | 他的腿快好了。我該回去了嗎？ | UNCLE_ARC[10].th[2]
MOTIF-tired-echo-J | 排隊的時候我一直在想阿祿——想回家把累說給他聽，哪怕只是抱怨兩句也好。 | MOTIF_PACK.tired.echo.j
MOTIF-tired-echo-TH | 好累……但一想到阿祿在等，好像又能多走幾步。 | MOTIF_PACK.tired.echo.th
MOTIF-queue-echo-J | 便利店人真的很多。我把布丁選好，心裡卻在數：再多久能推開家門。 | MOTIF_PACK.queue.echo.j
MOTIF-queue-echo-TH | 結完帳就回家。別想別的，阿祿大概還開著燈。 | MOTIF_PACK.queue.echo.th
MOTIF-miss_you-echo-J | 走在路上我會偷偷想：阿祿現在在幹嘛。這種想念很乾淨，我想把它寫下來留著。 | MOTIF_PACK.miss_you.echo.j
MOTIF-miss_you-echo-TH | 好想快點回去說『我回來了』。 | MOTIF_PACK.miss_you.echo.th
MOTIF-late-echo-J | 回來晚了。我知道阿祿會看時鐘。我在樓道裡對自己說：就說轉車——這句話我練了三次。 | MOTIF_PACK.late.echo.j
MOTIF-late-echo-TH | 晚了……希望他只聽『塞車』，別聽出我心虛。 | MOTIF_PACK.late.echo.th
MOTIF-late-clash-J | 其實沒有很晚啦。就是人多、路遠，我有乖乖回來。阿祿若問，我就這樣說。 | MOTIF_PACK.late.clash.j
MOTIF-late-clash-TH | 日記裡我寫『沒有很晚』。身體卻還記得多出來的那四十分鐘。 | MOTIF_PACK.late.clash.th
MOTIF-perfume-echo-J | 袖口好像沾到別的味道。我洗了手，還是不安——怕阿祿湊近時會問。 | MOTIF_PACK.perfume.echo.j
MOTIF-perfume-echo-TH | 味道洗不掉的話……我就說是店裡的香氛。 | MOTIF_PACK.perfume.echo.th
MOTIF-perfume-clash-J | 今天只是普通外出。我有好好把想帶回家的東西放進袋子，心裡想的也都是這個家。 | MOTIF_PACK.perfume.clash.j
MOTIF-perfume-clash-TH | 他靠得好近。那種味道還掛在鎖骨上——日記裡我偏要寫得乾乾淨淨。 | MOTIF_PACK.perfume.clash.th
MOTIF-mark-echo-J | 衣領有點亂。我在回家前對鏡整理了很久，仍怕有什麼痕跡被看見。 | MOTIF_PACK.mark.echo.j
MOTIF-mark-echo-TH | 別讓他靠太近……至少今晚不要。 | MOTIF_PACK.mark.echo.th
MOTIF-mark-clash-J | 什麼事都沒有。真的。我只是走路走快了，臉有點紅而已。 | MOTIF_PACK.mark.clash.j
MOTIF-mark-clash-TH | 鎖骨還燙著。日記寫『沒事』的時候，手居然很穩。 | MOTIF_PACK.mark.clash.th
MOTIF-sweet_lie-echo-J | 一進門我就想對阿祿好一點。倒水、問晚餐——用這些小事把自己拉回『照顧阿祿的小櫻』。 | MOTIF_PACK.sweet_lie.echo.j
MOTIF-sweet_lie-echo-TH | 越心虛，越想對他溫柔。這樣好奇怪。 | MOTIF_PACK.sweet_lie.echo.th
MOTIF-sweet_lie-clash-J | 好想阿祿。今天一路上都在數回家的路燈，想聽他說話，想被他看見『正常的我』。 | MOTIF_PACK.sweet_lie.clash.j
MOTIF-sweet_lie-clash-TH | 我想聽他說話——好掩飾我剛把另一個人的名字含在嘴裡。 | MOTIF_PACK.sweet_lie.clash.th
MOTIF-bath-echo-J | 我沖了很久的澡。水很大，像要把今天多餘的體溫沖掉，再出去當普通的同居者。 | MOTIF_PACK.bath.echo.j
MOTIF-bath-echo-TH | 水聲能不能再大一點……大到蓋過心跳。 | MOTIF_PACK.bath.echo.th
MOTIF-bath-clash-J | 洗個澡喘口氣而已。外面風沙大，我想乾乾淨淨地坐到阿祿旁邊。 | MOTIF_PACK.bath.clash.j
MOTIF-bath-clash-TH | 腿間還敏感著。我卻要在日記寫『只是風沙』。 | MOTIF_PACK.bath.clash.th
MOTIF-phone-echo-J | 阿祿傳訊的時候我回得很慢。不是不愛回，是手心出汗，打字會露餡。 | MOTIF_PACK.phone.echo.j
MOTIF-phone-echo-TH | 已讀很久……希望他只當我在忙。 | MOTIF_PACK.phone.echo.th
MOTIF-phone-clash-J | 訊號有點不穩，所以回得慢。家裡的事我都放在心上，真的。 | MOTIF_PACK.phone.clash.j
MOTIF-phone-clash-TH | 訊號很好。是我不想讓對話框裡出現他的名字。 | MOTIF_PACK.phone.clash.th
MOTIF-search_tidy-echo-J | 房間好像被動過。我把抽屜推回去的時候心在跳——不知道阿祿有沒有看見什麼。 | MOTIF_PACK.search_tidy.echo.j
MOTIF-search_tidy-echo-TH | 抽屜……我有沒有關好。 | MOTIF_PACK.search_tidy.echo.th
MOTIF-search_tidy-clash-J | 家裡一切如常。我沒有藏什麼，也不需要藏什麼。 | MOTIF_PACK.search_tidy.clash.j
MOTIF-search_tidy-clash-TH | 他翻過。我必須假裝什麼都沒少——也什麼都沒多。 | MOTIF_PACK.search_tidy.clash.th
OUT-TH-EXTRA-1 | 再亂想也不行……阿祿還在等我。 | outingThoughtPool
OUT-TH-EXTRA-2 | 想回去聽他說『辛苦了』。光想像，腳步就快了一點。 | outingThoughtPool
OUT-TH-EXTRA-3 | 他對我這麼好。我更不該把心分出去——可是—— | outingThoughtPool
OUT-TH-EXTRA-4 | 我們又不是男女朋友……可是一想到阿祿在等，這句話就變得很刺耳。 | outingThoughtPool
OUT-TH-EXTRA-5 | 家的燈很遠。我想晚一點回去——不是因為討厭燈，是因為還沒準備好看他的眼睛。 | outingThoughtPool
BLANK-TITLE-MSG | 📱 發訊息 | blankActNow
BLANK-TITLE-CALL | 📞 打電話 | blankActNow
BLANK-TITLE-JACK | 💦 尻槍 | blankActNow
OUTING-ACT-CLOSE | 輕觸關閉 | showOutingActLine
THBOX-LABEL | 💭 心聲 | thought()
NOTE-AWAY | 她還在外面 | HTML
NOTE-HOME-EMPTY | 屋裡只剩你 | HTML
SKIP-WAIT | ⏭ 跳過等待 | HTML
NAP-SUB | 跳過等待 | paintDock nap sub; dup-of BLANK_ACT-nap-HINT
SLEEP-INLINE-01 | （她還在外面。等她回來，或先點「打瞌睡」再睡。） | function sleepDay
GO-INLINE-01 | 🚪 她出門了 | function goNow
GO-INLINE-02 | 「那我出門囉！去 | function goNow
GO-INLINE-03 | ～別等太晚喔。」 | function goNow
GO-INLINE-04 | 🚪 外出： | function goNow
BACK-INLINE-01 | 「我回來了。」她把 | function back
BACK-INLINE-02 | 放在桌上，語氣平常得像只是去買菜。 | function back
BACK-INLINE-03 | 「……我回來了。」她把 | function back
BACK-INLINE-04 | 放在桌上，語氣平得像練習過。 | function back
BACK-INLINE-05 | 「阿祿，我回來了！我去了 | function back
BACK-INLINE-06 | 。這個 | function back
BACK-INLINE-07 | 送給你！」 | function back
BACK-INLINE-08 | \n\n你沒睡好。懷疑比她的呼吸聲更響。 | function back
BACK-INLINE-09 | 🌙 當晚 | function back
BACK-INLINE-10 | （尚未起疑） | function back
BACK-INLINE-11 | 她去了 | function back

## 提問

QA-0-Q | 你平常喜歡做什麼？ | QA[0][1]
QA-0-A-0 | 畫畫，還有吃布丁。才不是因為你煮得好吃！ | QA[0][3][0]
QA-0-A-1 | 畫畫啊。最近也喜歡幫人跑腿，被需要的感覺還不錯。 | QA[0][3][1]
QA-0-A-2 | 畫畫啊。……最近有人很會聽我說話。我一說出口就後悔了。 | QA[0][3][2]
QA-1-Q | 你怎麼看我？ | QA[1][1]
QA-1-A-0 | 你很笨，又很溫柔。……是我最不想失去的人。 | QA[1][3][0]
QA-1-A-1 | 你是我最信任的人，這句話我說得出口。 | QA[1][3][1]
QA-1-A-2 | 你是我最不想失去的人。這是真的。 | QA[1][3][2]
QA-2-Q | 你覺得強叔是什麼樣的人？ | QA[2][1]
QA-2-A-0 | 很可憐的大叔，但人不壞吧。 | QA[2][3][0]
QA-2-A-1 | 他有他的苦衷……你不要用那種眼神看我。 | QA[2][3][1]
QA-2-A-2 | 他是……需要我的人。你別這樣看我——我一說就覺得對不起你。 | QA[2][3][2]
QA-3-Q | 今天外出遇到什麼人嗎？ | QA[3][1]
QA-3-A-0 | 沒有啊，就買了點東西。 | QA[3][3][0]
QA-3-A-1 | 遇到一個很可憐的大叔，我幫了他一點小忙。 | QA[3][3][1]
QA-3-A-2 | 沒什麼，就買了東西。……真的。別用那種眼神，我會心虛。 | QA[3][3][2]
QA-4-Q | 你有後悔過什麼事嗎？ | QA[4][1]
QA-4-A-0 | 搬家那天沒回你的信。我到現在還在後悔。 | QA[4][3][0]
QA-4-A-1 | 有一件小事……我還在想要不要告訴你。 | QA[4][3][1]
QA-4-A-2 | 後悔？現在說還太早。 | QA[4][3][2]
QA-5-Q | 如果我的腿好了，你想做什麼？ | QA[5][1]
QA-5-A-0 | 第一件事，你自己去倒水！……然後陪你去海邊走走。 | QA[5][3][0]
QA-5-A-1 | 到時候……我們再說吧。 | QA[5][3][1]
QA-5-A-2 | 到時候我……還想陪你。可是我現在有點亂，你別追問。 | QA[5][3][2]
ASK-UI-01 | 💬 提問 | function paintAskTab
QA-LOVE-01 | ……問這個幹嘛。 | function qaLoveAnswer
QA-LOVE-02 | 有。一直都是你，這是真的。……你別這樣看我。 | function qaLoveAnswer
QA-LOVE-03 | 有。一直都是你。……最近我常常覺得對不起你，你別問為什麼。 | function qaLoveAnswer
QA-LOVE-04 | 有。你知道是誰。……我只是還沒準備好說出來。 | function qaLoveAnswer
QA-LOVE-05 | 有。……你別再問了。 | function qaLoveAnswer
QA-LOVE-06 | 有。可是我最近有點亂，好像……有兩個影子。 | function qaLoveAnswer
QA-LOVE-07 | ……有。你不要笑。是個很笨、很溫柔的人。 | function qaLoveAnswer

## 她的問題

SQ-0-Q | 我最喜歡吃什麼？你還記得嗎？ | SQ[0][1]
SQ-0-OPT-0 | 布丁啊，你一定記得。 | SQ[0][5][0][0]
SQ-0-REPLY-0 | 嘿嘿……被你記住了，有點開心。 | SQ[0][5][0][4]
SQ-0-TAG-0 | 親密 +12 | SQ[0][5][0][6]
SQ-0-OPT-1 | 巧克力？ | SQ[0][5][1][0]
SQ-0-REPLY-1 | 差一點點……不過你有在想我就好。 | SQ[0][5][1][4]
SQ-0-TAG-1 | 親密 +2 | SQ[0][5][1][6]
SQ-0-OPT-2 | 隨便吃就好吧。 | SQ[0][5][2][0]
SQ-0-REPLY-2 | ……這樣啊。好像不太在意呢。 | SQ[0][5][2][4]
SQ-0-TAG-2 | 親密 -2 | SQ[0][5][2][6]
SQ-1-Q | 和我一起住，會不會覺得麻煩？ | SQ[1][1]
SQ-1-OPT-0 | 一點都不。有你在家裡才像家。 | SQ[1][5][0][0]
SQ-1-REPLY-0 | ……真的嗎。那我會更努力一點的。 | SQ[1][5][0][4]
SQ-1-TAG-0 | 親密 +16 | SQ[1][5][0][6]
SQ-1-OPT-1 | 偶爾有一點，但可以接受。 | SQ[1][5][1][0]
SQ-1-REPLY-1 | 嗯……謝謝你誠實。 | SQ[1][5][1][4]
SQ-1-TAG-1 | 親密 +4 | SQ[1][5][1][6]
SQ-1-OPT-2 | 確實有點吵。 | SQ[1][5][2][0]
SQ-1-REPLY-2 | 對不起……我會小聲一點。 | SQ[1][5][2][4]
SQ-1-TAG-2 | 親密 -3 | SQ[1][5][2][6]
SQ-2-Q | 今晚……想陪我看一部電影嗎？ | SQ[2][1]
SQ-2-OPT-0 | 想。你選片子，我煮熱可可。 | SQ[2][5][0][0]
SQ-2-REPLY-0 | 約定好了喔。不准中途滑手機。 | SQ[2][5][0][4]
SQ-2-TAG-0 | 親密 +14 | SQ[2][5][0][6]
SQ-2-OPT-1 | 我有點累，下次吧。 | SQ[2][5][1][0]
SQ-2-REPLY-1 | 哦……那我自己看也好。 | SQ[2][5][1][4]
SQ-2-TAG-1 | 親密 +2 | SQ[2][5][1][6]; dup-of SQ-0-TAG-1
SQ-2-OPT-2 | 你自己看就好。 | SQ[2][5][2][0]
SQ-2-REPLY-2 | ……知道了。 | SQ[2][5][2][4]
SQ-2-TAG-2 | 親密 -2 | SQ[2][5][2][6]; dup-of SQ-0-TAG-2
SQ-3-Q | 我畫素描的時候，你覺得好看嗎？ | SQ[3][1]
SQ-3-OPT-0 | 好看。尤其是你專心的側臉。 | SQ[3][5][0][0]
SQ-3-REPLY-0 | 呀……突然這樣說，好害羞。 | SQ[3][5][0][4]
SQ-3-TAG-0 | 親密 +12 | SQ[3][5][0][6]; dup-of SQ-0-TAG-0
SQ-3-OPT-1 | 我不太懂畫，但看得出你很認真。 | SQ[3][5][1][0]
SQ-3-REPLY-1 | 嗯，這樣也被鼓勵到了。 | SQ[3][5][1][4]
SQ-3-TAG-1 | 親密 +6 | SQ[3][5][1][6]
SQ-3-OPT-2 | 普通吧。 | SQ[3][5][2][0]
SQ-3-REPLY-2 | ……好吧。 | SQ[3][5][2][4]
SQ-3-TAG-2 | 親密 -1 | SQ[3][5][2][6]
SQ-4-Q | 如果哪天我晚歸，你會等我嗎？ | SQ[4][1]
SQ-4-OPT-0 | 會。燈開著，湯也溫著。 | SQ[4][5][0][0]
SQ-4-REPLY-0 | ……聽起來好安心。我會早點回來的。 | SQ[4][5][0][4]
SQ-4-TAG-0 | 親密 +16 | SQ[4][5][0][6]; dup-of SQ-1-TAG-0
SQ-4-OPT-1 | 看情況，太晚我會先睡。 | SQ[4][5][1][0]
SQ-4-REPLY-1 | 也是……你也要休息。 | SQ[4][5][1][4]
SQ-4-TAG-1 | 親密 +4 | SQ[4][5][1][6]; dup-of SQ-1-TAG-1
SQ-4-OPT-2 | 你是大人了，不用報備。 | SQ[4][5][2][0]
SQ-4-REPLY-2 | 這樣啊……那我就更自由了呢。 | SQ[4][5][2][4]
SQ-4-TAG-2 | （態度變鬆） | SQ[4][5][2][6]
SQ-5-Q | 你覺得我笑起來怎麼樣？ | SQ[5][1]
SQ-5-OPT-0 | 很好看。是這個家最亮的地方。 | SQ[5][5][0][0]
SQ-5-REPLY-0 | 被你這樣說……心跳好像漏拍了。 | SQ[5][5][0][4]
SQ-5-TAG-0 | 親密 +14 | SQ[5][5][0][6]; dup-of SQ-2-TAG-0
SQ-5-OPT-1 | 不錯啊，很有精神。 | SQ[5][5][1][0]
SQ-5-REPLY-1 | 呵呵，謝謝。 | SQ[5][5][1][4]
SQ-5-TAG-1 | 親密 +6 | SQ[5][5][1][6]; dup-of SQ-3-TAG-1
SQ-5-OPT-2 | 沒特別注意。 | SQ[5][5][2][0]
SQ-5-REPLY-2 | ……哦。有人說過好看呢。 | SQ[5][5][2][4]
SQ-5-TAG-2 | 親密 -2 | SQ[5][5][2][6]; dup-of SQ-0-TAG-2
SQ-6-Q | 商店街那位強叔……你覺得他奇怪嗎？ | SQ[6][1]
SQ-6-OPT-0 | 靠太近了。下次我陪你去。 | SQ[6][5][0][0]
SQ-6-REPLY-0 | 嗯……聽你這麼說，我好像該小心一點。 | SQ[6][5][0][4]
SQ-6-TAG-0 | 親密 +8・強叔親密 -2 | SQ[6][5][0][6]
SQ-6-OPT-1 | 熱心幫忙而已吧，別想太多。 | SQ[6][5][1][0]
SQ-6-REPLY-1 | 是嗎……那我可能太多心了。 | SQ[6][5][1][4]
SQ-6-TAG-1 | 親密 +4・強叔親密 +1 | SQ[6][5][1][6]
SQ-6-OPT-2 | 他看起來挺會照顧人的。 | SQ[6][5][2][0]
SQ-6-REPLY-2 | 你也這麼覺得啊……我、我只是問問。 | SQ[6][5][2][4]
SQ-6-TAG-2 | 強叔親密 +2 | SQ[6][5][2][6]
SQ-7-Q | 他傳訊息問我一個人住不住……我該怎麼回？ | SQ[7][1]
SQ-7-OPT-0 | 別回太細。就說有人在家等。 | SQ[7][5][0][0]
SQ-7-REPLY-0 | ……好。我會這樣回。好像鬆了一口氣。 | SQ[7][5][0][4]
SQ-7-TAG-0 | 親密 +10・強叔親密 -1 | SQ[7][5][0][6]
SQ-7-OPT-1 | 委婉一點，別得罪人就好。 | SQ[7][5][1][0]
SQ-7-REPLY-1 | 嗯，我會注意分寸。 | SQ[7][5][1][4]
SQ-7-TAG-1 | 親密 +4 | SQ[7][5][1][6]; dup-of SQ-1-TAG-1
SQ-7-OPT-2 | 誠實說也沒關係吧？他又不是壞人。 | SQ[7][5][2][0]
SQ-7-REPLY-2 | ……你都不擔心的嗎。那我……隨便回好了。 | SQ[7][5][2][4]
SQ-7-TAG-2 | 強叔親密 +2 | SQ[7][5][2][6]; dup-of SQ-6-TAG-2
SQ-8-Q | 強叔邀我去看夜景。阿祿，我該答應嗎？ | SQ[8][1]
SQ-8-OPT-0 | 不要去。夜景可以我們一起看。 | SQ[8][5][0][0]
SQ-8-REPLY-0 | ……你原來會這麼說。那我拒絕他。 | SQ[8][5][0][4]
SQ-8-TAG-0 | 親密 +12・強叔親密 -3 | SQ[8][5][0][6]
SQ-8-OPT-1 | 去也可以，但早點回來，跟我報平安。 | SQ[8][5][1][0]
SQ-8-REPLY-1 | 嗯……我會準時回來的。大概。 | SQ[8][5][1][4]
SQ-8-TAG-1 | 親密 +6・強叔親密 +1 | SQ[8][5][1][6]
SQ-8-OPT-2 | 你決定就好，我不管。 | SQ[8][5][2][0]
SQ-8-REPLY-2 | 不管……嗎。那我更想去看看了。 | SQ[8][5][2][4]
SQ-8-TAG-2 | 親密 -1・強叔親密 +3 | SQ[8][5][2][6]
SQ-9-Q | 我提起強叔的時候，你心裡是什麼感覺？ | SQ[9][1]
SQ-9-OPT-0 | 會在意。不想把你讓給別人。 | SQ[9][5][0][0]
SQ-9-REPLY-0 | ……占有慾？好奇怪，但沒有討厭。 | SQ[9][5][0][4]
SQ-9-TAG-0 | 親密 +10・強叔親密 -1 | SQ[9][5][0][6]; dup-of SQ-7-TAG-0
SQ-9-OPT-1 | 有點微妙，說不上來。 | SQ[9][5][1][0]
SQ-9-REPLY-1 | 呵呵，你的表情好複雜。 | SQ[9][5][1][4]
SQ-9-TAG-1 | 親密 +4 | SQ[9][5][1][6]; dup-of SQ-1-TAG-1
SQ-9-OPT-2 | 沒什麼感覺啊。 | SQ[9][5][2][0]
SQ-9-REPLY-2 | 這樣啊……那我繼續跟他聊天，你也不介意吧。 | SQ[9][5][2][4]
SQ-9-TAG-2 | 親密 -2・強叔親密 +2 | SQ[9][5][2][6]
SQ-10-Q | 他說比你更懂我。你……會生氣嗎？ | SQ[10][1]
SQ-10-OPT-0 | 生氣。因為我不想失去你。 | SQ[10][5][0][0]
SQ-10-REPLY-0 | ……對不起。我會把心拉回來一點的。 | SQ[10][5][0][4]
SQ-10-TAG-0 | 親密 +8・強叔親密 -2 | SQ[10][5][0][6]; dup-of SQ-6-TAG-0
SQ-10-OPT-1 | 與其生氣，我更想聽你真正的想法。 | SQ[10][5][1][0]
SQ-10-REPLY-1 | 你總是這樣溫柔……讓我更愧疚了。 | SQ[10][5][1][4]
SQ-10-TAG-1 | 親密 +10 | SQ[10][5][1][6]
SQ-10-OPT-2 | 隨便他怎麼說。 | SQ[10][5][2][0]
SQ-10-REPLY-2 | ……你都不爭。那我也不知道該站在哪裡。 | SQ[10][5][2][4]
SQ-10-TAG-2 | 親密 -3・強叔親密 +3 | SQ[10][5][2][6]
SQ-11-Q | 如果我今晚想晚點回家……你可以當沒看到嗎？ | SQ[11][1]
SQ-11-OPT-0 | 不行。我擔心你，也擔心他。 | SQ[11][5][0][0]
SQ-11-REPLY-0 | ……知道了。你一認真，我反而沒辦法裝沒事。 | SQ[11][5][0][4]
SQ-11-TAG-0 | 親密 +6・強叔親密 -2 | SQ[11][5][0][6]
SQ-11-OPT-1 | 報個平安就好，別讓我瞎猜。 | SQ[11][5][1][0]
SQ-11-REPLY-1 | 嗯。至少……還想讓你知道我還在。 | SQ[11][5][1][4]
SQ-11-TAG-1 | 親密 +8 | SQ[11][5][1][6]
SQ-11-OPT-2 | 你的自由。門沒鎖。 | SQ[11][5][2][0]
SQ-11-REPLY-2 | 門沒鎖……聽起來好寂寞。可是也好方便。 | SQ[11][5][2][4]
SQ-11-TAG-2 | 親密 -2・強叔親密 +4 | SQ[11][5][2][6]
SQ-MASK-TITLE | ❓ 小櫻問你 | showSqMask
SQ-HINT | ✦＝此答案內容相對上次有變化 | showSqMask
QHOME-BTN | ❓ 問題 | HTML #qHomeBtn
QHOME-ARIA | 小櫻有問題要問你 | HTML

## 回憶

MEM-0-TITLE | 出頭的那一天 | MEMORIES[0][1]
MEM-0-BODY | 放學路上，有人圍著她罵「怪物」。她一邊反罵、一邊抓起書包砸過去，卻被推倒。你擋在她前面大喊「夠了」——她反而罵你多管閒事。\n\n「……那時候，我第一次覺得有人看得見我。我只是隨便講講。」 | MEMORIES[0][2]
MEM-1-TITLE | 被推開的人 | MEMORIES[1][1]
MEM-1-BODY | 那之後她對所有人豎起更多尖刺。你被她推開、罵走好幾次，還是每天坐在她家門外寫功課，等她開門。\n\n「你真的很煩。……謝謝你沒有走。」 | MEMORIES[1][2]
MEM-2-TITLE | 樓梯間的糖 | MEMORIES[2][1]
MEM-2-BODY | 被同學嘲笑燒傷的疤後，她躲在樓梯間哭。你在旁邊蹲下，什麼也沒說，只遞給她一顆糖。\n\n「那顆糖好甜。比他們說的任何話都清楚。」 | MEMORIES[2][2]
MEM-3-TITLE | 「不難看」 | MEMORIES[3][1]
MEM-3-BODY | 她問你：「我是不是很難看？」你認真看了她很久，說：「不難看。」\n\n「……直到現在我才明白。那是我第一次心動。才、才不是要誇你。」 | MEMORIES[3][2]
MEM-4-TITLE | 笨手笨腳的藥 | MEMORIES[4][1]
MEM-4-BODY | 每天放學你幫她擦燒傷的藥，總是弄痛她，又急著道歉。\n\n「弄痛我就算了，還一臉要哭。那樣更讓人沒辦法生氣。」 | MEMORIES[4][2]
MEM-5-TITLE | 小雛菊髮夾 | MEMORIES[5][1]
MEM-5-BODY | 畢業那天，你送她一支小雛菊髮夾，說「很適合你」。她一直戴到現在。\n\n「別盯著它看。……這是你給的。」 | MEMORIES[5][2]
MEM-6-TITLE | 長大以後的約定 | MEMORIES[6][1]
MEM-6-BODY | 你們約過：長大以後還要再一起去那條放學的路走走。約定很笨，卻沒有誰先說取消。\n\n「等你的腿好了……再說一次那個約定，好不好？」 | MEMORIES[6][2]
MEM-MASK-TITLE | 浮現一段塵封的回憶 | paintMaskChrome
MEM-MASK-TITLE-FULL | 🌸 浮現一段塵封的回憶 | checkMemories / flushMemoryQueue

## 日常/同居事件

STORY-0-TITLE | 第一次吵架 | STORY[0][1]
STORY-0-BODY | 你逞強撐著拐杖去倒水，腿一軟，杯沿撞上桌緣。小櫻衝過來扶你，嘴上卻不饒人：「笨蛋！石膏裂了怎麼辦——叫我啊。」\n\n她別過頭，耳朵微紅。 | STORY[0][2]
STORY-1-TITLE | 扶他起床 | STORY[1][1]
STORY-1-BODY | 打著石膏的腿使不上力。她扶你從床上坐起，兩人的臉靠得很近，呼吸交會的一瞬，同時別開視線。\n\n「別亂動。石膏會裂開。」聲音很硬，指尖卻停了一下。 | STORY[1][2]
STORY-2-TITLE | 停電夜 | STORY[2][1]
STORY-2-BODY | 燈光突然全滅。手電筒下，你們分著一碗泡麵，聊起童年的停電。她的聲音變得很輕。\n\n「那時候……樓梯間好黑。還好有人在。」 | STORY[2][2]
STORY-3-TITLE | 包住石膏洗澡 | STORY[3][1]
STORY-3-BODY | 她用保鮮膜把石膏纏好，在浴室門外守著，隔著門板喊：「熱水別太燙——我才沒有在聽！」\n\n門外傳來腳步挪動，又很快停住。 | STORY[3][2]
STORY-4-TITLE | 燒焦的鍋子 | STORY[4][1]
STORY-4-BODY | 她第一次做飯，鍋底燒焦。油煙裡她對火苗僵了一瞬，隨即嘴硬：「是你太挑剔——吃完。」\n\n最後兩人還是把焦味飯扒光了。 | STORY[4][2]
STORY-5-TITLE | 她睡著的沙發 | STORY[5][1]
STORY-5-BODY | 她累到在沙發上睡著。你用拐杖勾來毯子輕輕蓋上，看著她的睡臉，忘了時間。\n\n她夢裡嘟嚷：「……才不是為了你。」 | STORY[5][2]
STORY-6-TITLE | 髮夾 | STORY[6][1]
STORY-6-BODY | 燈光下你才看清：她還戴著當年那支小雛菊髮夾。她被你盯得不自在，伸手觸了觸它。\n\n「很適合你——你以前說過。」「……閉嘴啦。」 | STORY[6][2]
STORY-7-TITLE | 再一次，換你照顧我 | STORY[7][1]
STORY-7-BODY | 下廚時油鍋竄起火苗，燙到她的手。她整個人僵住，像回到小時候那場火。你撐著拐杖衝過去關火，帶她沖冷水，笨手笨腳地擦藥，弄痛了又道歉。\n\n她沒有嘴硬，也沒有轉開視線：「謝謝你，阿祿。當年是你，現在也是你。」\n\n「等你好了，再把剩下的話告訴我，好不好？」 | STORY[7][2]
NSTORY-0-TITLE | 街角的強叔 | NSTORY[0][1]
NSTORY-0-BODY | 她回家後猶豫了一下，才隨口說：「今天在商店街，有位大叔……幫我提了東西。」語氣太平淡了。你沒多想，卻注意到她耳尖微紅，那個稱呼，從這天起開始在家裡迴盪。 | NSTORY[0][2]
NSTORY-1-TITLE | 陌生的聯絡人 | NSTORY[1][1]
NSTORY-1-BODY | 她的手機多了一個沒存姓的聯絡人。「別誤會，阿祿。只是強叔說有店想介紹給我。」她把螢幕微微偏向自己，回訊息時嘴角彎起的弧度，是你很少見到的那種。 | NSTORY[1][2]
NSTORY-2-TITLE | 漸漸變冷的餐桌 | NSTORY[2][1]
NSTORY-2-BODY | 晚餐時她把手機壓在桌緣下，螢光一明一滅。你剛開口，她抬眼：「阿祿，我又不是小孩子……不是每則訊息都要給你看。」菜涼了，她卻仍在等下一則回覆。 | NSTORY[2][2]
NSTORY-3-TITLE | 沒有回來的夜晚 | NSTORY[3][1]
NSTORY-3-BODY | 那晚她很晚才推門進來，領口有一點不自然的皺褶，空氣裡混著陌生的菸草與低沉的古龍水。「……我晚了。」她小聲說完，終於不敢看你的眼睛。 | NSTORY[3][2]
NSTORY-4-TITLE | 空掉的房間 | NSTORY[4][1]
NSTORY-4-BODY | （此段不再由親密度滿值自動觸發搬走；僅結局路線會走到離開或出軌同居。） | NSTORY[4][2]
COHAB-MASK-PREFIX | 📌 同居事件： | queueCohabUnlock
UNCLE-Q-01 | （外面的事，又往前推了一步。） | function queueUncleStep
UNCLE-Q-02 | ・強叔親密 + | function queueUncleStep
CASTOFF-01 | 🩺 石膏拆了 | function queueCastOff
CASTOFF-02 | 上門的醫護人員拆掉石膏，宣布你可以自己走路了。\n\n媽媽來電：「小櫻可以回去了吧？」\n\n房間忽然變得很寬。你本來想問她——可以繼續住下去嗎？ | function queueCastOff

## 起疑

MOTIF-tired-echo-TR | 她說排隊排久了，聲音有點啞，像真的只是累。 | MOTIF_PACK.tired.echo.tr
MOTIF-queue-echo-TR | 收據時間普通。她把便利店袋子放桌上，說人有點多。 | MOTIF_PACK.queue.echo.tr
MOTIF-miss_you-echo-TR | 她進門就問你吃了沒，語氣輕，像真的惦記著家。 | MOTIF_PACK.miss_you.echo.tr
MOTIF-late-echo-TR | 她晚了半小時。解釋是轉車，路線講得偏急，像背過一遍。 | MOTIF_PACK.late.echo.tr
MOTIF-late-clash-TR | 時間對不上她出門前說的店。她很快換了話題，像不想留證據。 | MOTIF_PACK.late.clash.tr
MOTIF-perfume-echo-TR | 近了能聞到洗過又殘一點外來皂香，說不上來是哪家。 | MOTIF_PACK.perfume.echo.tr
MOTIF-perfume-clash-TR | 香水被另一層味道蓋過，近了才聞得到一點煙與陌生皂香的混雜。 | MOTIF_PACK.perfume.clash.tr
MOTIF-mark-echo-TR | 鎖骨附近被衣領遮著。她下意識拉了一下，又若無其事鬆開。 | MOTIF_PACK.mark.echo.tr
MOTIF-mark-clash-TR | 鎖骨一帶被衣領死死遮住；她不讓你靠太近。 | MOTIF_PACK.mark.clash.tr
MOTIF-sweet_lie-echo-TR | 她對你更好一點：倒水、問餓不餓，溫柔來得有些刻意。 | MOTIF_PACK.sweet_lie.echo.tr
MOTIF-sweet_lie-clash-TR | 溫柔得像贖罪，視線卻飄開。你分不清她是想靠近，還是不敢靠近。 | MOTIF_PACK.sweet_lie.clash.tr
MOTIF-bath-echo-TR | 她先進浴室。水聲開得很滿，蒸汽從門縫溢出來，久得不像只是洗手。 | MOTIF_PACK.bath.echo.tr
MOTIF-bath-clash-TR | 浴室水聲長得像要洗掉一整段不該留下的證據。 | MOTIF_PACK.bath.clash.tr
MOTIF-phone-echo-TR | 你記得空白裡那則已讀。她回來後沒主動提手機。 | MOTIF_PACK.phone.echo.tr
MOTIF-phone-clash-TR | 已讀很久才回的那則，她回來後當作沒發生。 | MOTIF_PACK.phone.clash.tr
MOTIF-search_tidy-echo-TR | 你翻找過的角落被她若無其事歸位，多了一點不自然的整齊。 | MOTIF_PACK.search_tidy.echo.tr
MOTIF-search_tidy-clash-TR | 她把你翻動過的抽屜又開了一次，確認什麼後才關上。 | MOTIF_PACK.search_tidy.clash.tr
TRACE-time-0-0 | 她比預期晚了一點，說店裡排隊。語氣普通，像真的只是逛街。 | TRACE.time[0][0]
TRACE-time-0-1 | 準時回來，額角有一點汗。她說走路走快了。 | TRACE.time[0][1]
TRACE-time-0-2 | 出門兩小時整，回來時還提著要給你的小東西。 | TRACE.time[0][2]
TRACE-time-0-3 | 她看了看時鐘：「哦，到點了。」笑得很平常。 | TRACE.time[0][3]
TRACE-time-1-0 | 她晚了半小時。解釋是轉車轉錯，路線講得有點急。 | TRACE.time[1][0]
TRACE-time-1-1 | 時間對得上，呼吸卻偏急，像一路趕回來。 | TRACE.time[1][1]
TRACE-time-1-2 | 「塞車。」她說完就去放袋子，沒再多講。 | TRACE.time[1][2]
TRACE-time-1-3 | 回來偏早。太早了，像臨時改了行程。 | TRACE.time[1][3]
TRACE-time-2-0 | 她說兩小時。門開時多走了快一小時。解釋很完整，完整得像背過。 | TRACE.time[2][0]
TRACE-time-2-1 | 準時回來。太準了。像算好你會等到幾點。 | TRACE.time[2][1]
TRACE-time-2-2 | 「路上有點亂。」她看著鞋尖，沒說亂在哪。 | TRACE.time[2][2]
TRACE-time-2-3 | 晚歸。手機定位空白，她只說訊號不好。 | TRACE.time[2][3]
TRACE-time-3-0 | 她幾乎是踩點推門。笑意慢半拍，像先在門外練習過。 | TRACE.time[3][0]
TRACE-time-3-1 | 時間對不上她出門前說的店。她很快換了話題。 | TRACE.time[3][1]
TRACE-time-3-2 | 整晚空白被她用一句「對不起，別等我太晚」蓋過。你看著時鐘，什麼都問不出口。 | TRACE.time[3][2]
TRACE-time-3-3 | 她回來時夜已深。解釋短得像不想留證據。 | TRACE.time[3][3]
TRACE-body-0-0 | 頭髮被風吹亂，她邊走邊整理髮圈，很日常。 | TRACE.body[0][0]
TRACE-body-0-1 | 聲音有點喘，說爬樓梯爬的。 | TRACE.body[0][1]
TRACE-body-0-2 | 臉頰被太陽曬紅，她要了杯水。 | TRACE.body[0][2]
TRACE-body-0-3 | 外套袖口沾到一點灰塵，她拍了拍就進門。 | TRACE.body[0][3]
TRACE-body-1-0 | 聲音有點沙。她說吹風吹的，說話時不太看你。 | TRACE.body[1][0]
TRACE-body-1-1 | 唇色淡了些，她說擦汗擦掉的，又快速補了一點。 | TRACE.body[1][1]
TRACE-body-1-2 | 她先進浴室洗手，水聲比平常稍長。 | TRACE.body[1][2]
TRACE-body-1-3 | 衣領有點皺，她一邊說話一邊扯平。 | TRACE.body[1][3]
TRACE-body-2-0 | 近了能聞到洗過又殘一點外來皂香，說不上來是哪家。 | TRACE.body[2][0]; dup-of MOTIF-perfume-echo-TR
TRACE-body-2-1 | 鎖骨附近被衣領遮著。她下意識拉了一下，又若無其事鬆開。 | TRACE.body[2][1]; dup-of MOTIF-mark-echo-TR
TRACE-body-2-2 | 唇色補得很匆忙，笑起來有點僵。 | TRACE.body[2][2]
TRACE-body-2-3 | 她把外套抱在胸前，像隔開一個你不該靠近的距離。 | TRACE.body[2][3]
TRACE-body-3-0 | 香水被另一層味道蓋過，近了才聞得到一點煙與陌生皂香的混雜。 | TRACE.body[3][0]; dup-of MOTIF-perfume-clash-TR
TRACE-body-3-1 | 她先進浴室。水聲開得很滿，蒸汽從門縫溢出來，久得不像只是洗手。 | TRACE.body[3][1]; dup-of MOTIF-bath-echo-TR
TRACE-body-3-2 | 鎖骨一帶被衣領死死遮住；她不讓你靠太近。 | TRACE.body[3][2]; dup-of MOTIF-mark-clash-TR
TRACE-body-3-3 | 她換好家居服才肯坐下來。布料新洗過，原來的氣味已經被沖掉。 | TRACE.body[3][3]
TRACE-item-0-0 | 袋子裡是便當與飲料，跟她出門說的差不多。 | TRACE.item[0][0]
TRACE-item-0-1 | 收據時間普通，店名你聽過。 | TRACE.item[0][1]
TRACE-item-0-2 | 背包重量差不多，她把東西一一拿給你看。 | TRACE.item[0][2]
TRACE-item-0-3 | 她帶了小點心回來，還問你要不要一起吃。 | TRACE.item[0][3]
TRACE-item-1-0 | 袋裡東西偏少，她說「逛著逛著就這樣」。 | TRACE.item[1][0]
TRACE-item-1-1 | 收據角露出一個你比較少去的店名，她很快抽走。 | TRACE.item[1][1]
TRACE-item-1-2 | 背包比出門時輕了一點。她沒解釋。 | TRACE.item[1][2]
TRACE-item-1-3 | 袖口有點灰，她說靠過路邊的欄杆。 | TRACE.item[1][3]
TRACE-item-2-0 | 袋裡東西很少，跟出門宣言對不上。她把袋子摺好塞進角落。 | TRACE.item[2][0]
TRACE-item-2-1 | 收據時間對得彆扭。她說店員打錯，卻不讓你看第二眼。 | TRACE.item[2][1]
TRACE-item-2-2 | 背包夹層多了一張摺痕很新的傳單，店名你沒聽過。 | TRACE.item[2][2]
TRACE-item-2-3 | 外套口袋裡有一枚不是你家的鑰匙扣環，她說撿到的。 | TRACE.item[2][3]
TRACE-item-3-0 | 袖口殘一點洗不掉的外來氣味，洗掉以前你經過沙發就聞得到。 | TRACE.item[3][0]
TRACE-item-3-1 | 袋裡幾乎是空的，卻說逛了很久。 | TRACE.item[3][1]
TRACE-item-3-2 | 你瞥見一張被撕半的票根，地點不是她提過的那家。 | TRACE.item[3][2]
TRACE-item-3-3 | 她把某個小東西塞進抽屜最深處，動作快得像反射。 | TRACE.item[3][3]
TRACE-talk-0-0 | 她興致勃勃講街頭的小狗與櫥窗，問你今天在家幹嘛。 | TRACE.talk[0][0]
TRACE-talk-0-1 | 「我回來了～」語氣輕快，還順便問晚餐。 | TRACE.talk[0][1]
TRACE-talk-0-2 | 她把路過看到的小事說了一輪，很像平常的她。 | TRACE.talk[0][2]
TRACE-talk-0-3 | 聊著聊著她打了個呵欠，說有點累，想早點洗漱。 | TRACE.talk[0][3]
TRACE-talk-1-0 | 解釋多了半句：路線、天氣，你插話時她會頓一下。 | TRACE.talk[1][0]
TRACE-talk-1-1 | 她對你更好一點：倒水、問餓不餓，溫柔來得有些刻意。 | TRACE.talk[1][1]; dup-of MOTIF-sweet_lie-echo-TR
TRACE-talk-1-2 | 「先讓我歇一下。」她坐著滑手機，螢幕亮度調得很低。 | TRACE.talk[1][2]
TRACE-talk-1-3 | 「今天人好多。」她說完就換話題，像不想被追問細節。 | TRACE.talk[1][3]
TRACE-talk-2-0 | 解釋太圓了：路線、天氣、人潮，一樣不漏。你一句都插不進去。 | TRACE.talk[2][0]
TRACE-talk-2-1 | 「我們……又不是男女朋友。」她先笑著說出口，隨即耳尖發紅，像自己也心虛。 | TRACE.talk[2][1]
TRACE-talk-2-2 | 她忽然補償似的關心你，眼神卻飄向門口。 | TRACE.talk[2][2]
TRACE-talk-2-3 | 「我身上髒，先洗澡。」不讓你靠近。門關上前又丟了一句對不起。 | TRACE.talk[2][3]
TRACE-talk-3-0 | 她幾乎不讓你問「跟誰」。話題全被她轉走。 | TRACE.talk[3][0]
TRACE-talk-3-1 | 溫柔得像贖罪，視線卻飄開。你分不清她是想靠近，還是不敢靠近。 | TRACE.talk[3][1]; dup-of MOTIF-sweet_lie-clash-TR
TRACE-talk-3-2 | 「別查我定位。」她說得太快，隨後又裝成玩笑。 | TRACE.talk[3][2]
TRACE-talk-3-3 | 她看著你，很久才說：「你相信我，好不好。」空白仍在。 | TRACE.talk[3][3]
TRACE-peek-0-0 | 你傳的訊息她有回。內容平常，沒有異常。 | TRACE.peek[0][0]
TRACE-peek-0-1 | 樓下偶爾有鄰居關門聲。她回來時樓道很安靜。 | TRACE.peek[0][1]
TRACE-peek-0-2 | 她進門前在包裡翻鑰匙，花了幾秒。 | TRACE.peek[0][2]
TRACE-peek-0-3 | 浴室水聲長度和平常差不多。 | TRACE.peek[0][3]
TRACE-peek-1-0 | 你記得空白裡那則已讀。她回來後沒主動提手機。 | TRACE.peek[1][0]; dup-of MOTIF-phone-echo-TR
TRACE-peek-1-1 | 樓道裡曾有過說話聲，聽不清。她說沒遇見熟人。 | TRACE.peek[1][1]
TRACE-peek-1-2 | 她進門前停了一秒，像先整理包包。 | TRACE.peek[1][2]
TRACE-peek-1-3 | 浴室水聲比平常稍長。你數著呼吸，什麼都沒問。 | TRACE.peek[1][3]
TRACE-peek-2-0 | 已讀很久才回的那則，她回來後當作沒發生。 | TRACE.peek[2][0]; dup-of MOTIF-phone-clash-TR
TRACE-peek-2-1 | 樓道裡短促笑聲一閃而過。她說是電視。 | TRACE.peek[2][1]
TRACE-peek-2-2 | 她進門前在門外停了兩秒，像先整理表情。 | TRACE.peek[2][2]
TRACE-peek-2-3 | 你翻找過的角落被她若無其事歸位，多了一點不自然的整齊。 | TRACE.peek[2][3]; dup-of MOTIF-search_tidy-echo-TR
TRACE-peek-3-0 | 空白裡那些「訊號不好」，回來後她絕口不提。 | TRACE.peek[3][0]
TRACE-peek-3-1 | 門外曾有過更低的男聲，短得像幻覺。她否認。 | TRACE.peek[3][1]
TRACE-peek-3-2 | 她把你翻動過的抽屜又開了一次，確認什麼後才關上。 | TRACE.peek[3][2]; dup-of MOTIF-search_tidy-clash-TR
TRACE-peek-3-3 | 浴室水聲長得像要洗掉一整段不該留下的證據。 | TRACE.peek[3][3]; dup-of MOTIF-bath-clash-TR
UNCLE_ARC-1-TRACE | 袖口有一點擦傷的藥味。她說只是撞到牆。 | UNCLE_ARC[0].trace
UNCLE_ARC-2-TRACE | 茶几上多了一張折痕很深的收據，不是你家附近的店。 | UNCLE_ARC[1].trace
UNCLE_ARC-3-TRACE | 她髮梢有清潔劑的味道，不像自家的品牌。 | UNCLE_ARC[2].trace
UNCLE_ARC-4-TRACE | 她說話時避開你的眼睛，手指卻一直轉著髮夾。 | UNCLE_ARC[3].trace
UNCLE_ARC-5-TRACE | 洗手台的水漬還在滴。她把袖口捲得很高。 | UNCLE_ARC[4].trace
UNCLE_ARC-6-TRACE | 沙發上仍攤著兩個人的毯子，只坐過一邊。 | UNCLE_ARC[5].trace
UNCLE_ARC-7-TRACE | 外套內袋露出一角收據，金額大得不合理。 | UNCLE_ARC[6].trace
UNCLE_ARC-8-TRACE | 她手機相簿裡有一張模糊的『病歷』截圖，很快被刪掉。 | UNCLE_ARC[7].trace
UNCLE_ARC-9-TRACE | 浴室蒸汽散得很慢。香水被皂香蓋過，仍有一絲殘留。 | UNCLE_ARC[8].trace
UNCLE_ARC-10-TRACE | 窗台外側有雨痕與泥點。她說風太大，回不來。 | UNCLE_ARC[9].trace
UNCLE_ARC-11-TRACE | 拆石膏的日子近了。她的行李角落多了一條不是你家的毛巾。 | UNCLE_ARC[10].trace
OBS-BTN-LAB | 起疑 | HTML .actLab
OBS-BTN-SUB | 窺探痕跡 | HTML .actSub
OBS-MASK-TITLE | 🔍 起疑 | observeTraces
OBS-BUSY | （先看完眼前的事，再起疑。） | observeTraces

## 她沒說出口的事

UNSPOKEN-TITLE | 她沒說出口的事 | endDay mq.push title
UNSPOKEN-BODY-NOTE | 💭 （正文來自心聲池：TH / BLANK_TH / PLACE_TH / ACT_TH / UNCLE_ARC.th / outingThoughtPool extras；彈窗前加「💭 」前綴） | endDay uses pick(thPool())
UNSPOKEN-PREFIX | 💭  | endDay mq body prefix

## 當晚

NIGHT-0-0 | 晚上同坐沙發，電視播著無關緊要的節目。她偶爾笑一下，很平常。 | NIGHT[0][0]
NIGHT-0-1 | 她洗完澡出來，問要不要熱牛奶。你點頭，氣氛鬆快。 | NIGHT[0][1]
NIGHT-0-2 | 關燈後各自道晚安。她的呼吸很快平穩。 | NIGHT[0][2]
NIGHT-0-3 | 她把明天的計畫隨口說了兩句，像任何一個普通夜晚。 | NIGHT[0][3]
NIGHT-1-0 | 晚上同坐沙發，距離近到能聽見彼此呼吸。電視亮著，誰也沒怎麼看進去。 | NIGHT[1][0]
NIGHT-1-1 | 她洗完澡出來，髮尾滴水。你想多問一句今天，最後只問了要不要熱牛奶。 | NIGHT[1][1]
NIGHT-1-2 | 關燈後房間很安靜。她的手機在枕頭邊亮了一下，又暗掉。 | NIGHT[1][2]
NIGHT-1-3 | 她說晚安的方式和平常一樣，卻像故意把話題截斷。 | NIGHT[1][3]
NIGHT-2-0 | 晚上同坐沙發，她靠得近，心卻像在別處。 | NIGHT[2][0]
NIGHT-2-1 | 她洗得很久。出來後頭髮還在滴水，不讓你靠太近。 | NIGHT[2][1]
NIGHT-2-2 | 關燈後手機又亮了一次。她翻過身，假裝睡著。 | NIGHT[2][2]
NIGHT-2-3 | 你躺著數她的呼吸。懷疑像潮水，卻被『別想太多』擋回去。 | NIGHT[2][3]
NIGHT-3-0 | 同屋卻像隔了一層膜。她的晚安短得像逃。 | NIGHT[3][0]
NIGHT-3-1 | 手機在暗裡亮了又暗。你沒問是誰。 | NIGHT[3][1]
NIGHT-3-2 | 她背對你睡，肩膀緊繃到半夜。 | NIGHT[3][2]
NIGHT-3-3 | 你數著呼吸，越數越清醒——空白比黑暗更響。 | NIGHT[3][3]
FLAT_NIGHT-0 | 晚上同坐沙發，她偶爾應一聲，像任何一個普通同居夜晚。電視亮著，誰也沒把今天攤開。 | FLAT_NIGHT[0]
FLAT_NIGHT-1 | 她洗完澡出來，問要不要熱牛奶——問完就看手機，螢幕亮度很低。 | FLAT_NIGHT[1]
FLAT_NIGHT-2 | 關燈後她說晚安，短促、正常。正常得幾乎像什麼都沒發生過。 | FLAT_NIGHT[2]
FLAT_NIGHT-3 | 她背對你睡，呼吸平穩得像練習過。你躺著，懷疑比她的呼吸更響。 | FLAT_NIGHT[3]
FLAT_NIGHT-4 | 同屋的空氣很安靜。她把今天過成『沒事』，你卻聽得見空白在響。 | FLAT_NIGHT[4]
NIGHT-MASK-TITLE | 當晚 | mask title string

## 聊天室

CHAT-T0-TITLE | 腿傷無聊・隨便刷到 | CHAT_THREADS[0].title
CHAT-T0-P0-WHO | 匿名 | CHAT_THREADS[0].posts[0].who
CHAT-T0-P0-META | 昨天・看板 | CHAT_THREADS[0].posts[0].meta
CHAT-T0-P0-BODY | 又輸光了。這個月的房租在哪裡？什麼時候才輪到我有女朋友。 | CHAT_THREADS[0].posts[0].body
CHAT-T0-P1-WHO | 匿名 | CHAT_THREADS[0].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T0-P1-META | 昨天・看板 | CHAT_THREADS[0].posts[1].meta; dup-of CHAT-T0-P0-META
CHAT-T0-P1-BODY | 沒人陪就算了，連賭桌都嫌我。這日子還有什麼意思。 | CHAT_THREADS[0].posts[1].body
CHAT-T0-P2-WHO | 路人A | CHAT_THREADS[0].posts[2].who
CHAT-T0-P2-META | 回覆 | CHAT_THREADS[0].posts[2].meta
CHAT-T0-P2-BODY | 兄弟別再賭了，先找份工作吧。 | CHAT_THREADS[0].posts[2].body
CHAT-T0-P3-WHO | 匿名 | CHAT_THREADS[0].posts[3].who; dup-of CHAT-T0-P0-WHO
CHAT-T0-P3-META | 回覆 | CHAT_THREADS[0].posts[3].meta; dup-of CHAT-T0-P2-META
CHAT-T0-P3-BODY | 說得容易。誰會看上我這種被丟下的人。 | CHAT_THREADS[0].posts[3].body
CHAT-T1-TITLE | 還是那個看板 | CHAT_THREADS[1].title
CHAT-T1-P0-WHO | 匿名 | CHAT_THREADS[1].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T1-P0-META | 今天・看板 | CHAT_THREADS[1].posts[0].meta
CHAT-T1-P0-BODY | 現在的女人都現實。溫柔？那是裝的。誰真心陪你走到最後。 | CHAT_THREADS[1].posts[0].body
CHAT-T1-P1-WHO | 匿名 | CHAT_THREADS[1].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T1-P1-META | 今天・看板 | CHAT_THREADS[1].posts[1].meta; dup-of CHAT-T1-P0-META
CHAT-T1-P1-BODY | 又輸了一晚。算了。抱怨給空氣聽，總比誰都不理我好。 | CHAT_THREADS[1].posts[1].body
CHAT-T2-TITLE | 匿名・巷口那晚 | CHAT_THREADS[2].title
CHAT-T2-P0-WHO | 匿名 | CHAT_THREADS[2].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T2-P0-META | 新串・剛剛 | CHAT_THREADS[2].posts[0].meta
CHAT-T2-P0-BODY | 巷口那個戴花髮夾的小妹，心軟得要命。我哭兩聲說醫藥費，她真的衝上來替我擋拳頭。 | CHAT_THREADS[2].posts[0].body
CHAT-T2-P1-WHO | 路人B | CHAT_THREADS[2].posts[1].who
CHAT-T2-P1-META | 回覆 | CHAT_THREADS[2].posts[1].meta; dup-of CHAT-T0-P2-META
CHAT-T2-P1-BODY | 兄弟你講的是真的？別害人家小姑娘。 | CHAT_THREADS[2].posts[1].body
CHAT-T2-P2-WHO | 匿名 | CHAT_THREADS[2].posts[2].who; dup-of CHAT-T0-P0-WHO
CHAT-T2-P2-META | 回覆 | CHAT_THREADS[2].posts[2].meta; dup-of CHAT-T0-P2-META
CHAT-T2-P2-BODY | 真的假的關你什麼事。她自己願意來的。 | CHAT_THREADS[2].posts[2].body
CHAT-T3-TITLE | 匿名・母親的故事 | CHAT_THREADS[3].title
CHAT-T3-P0-WHO | 匿名 | CHAT_THREADS[3].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T3-P0-META | 新串 | CHAT_THREADS[3].posts[0].meta
CHAT-T3-P0-BODY | 母親的事我一講，她眼睛就紅了。這種好騙……打著燈籠都難找。 | CHAT_THREADS[3].posts[0].body
CHAT-T3-P1-WHO | 匿名 | CHAT_THREADS[3].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T3-P1-META | 續 | CHAT_THREADS[3].posts[1].meta
CHAT-T3-P1-BODY | 她還叫我強叔。哭戲沒白練。 | CHAT_THREADS[3].posts[1].body
CHAT-T4-TITLE | 匿名・讓她來幫忙 | CHAT_THREADS[4].title
CHAT-T4-P0-WHO | 匿名 | CHAT_THREADS[4].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T4-P0-META | 新串 | CHAT_THREADS[4].posts[0].meta; dup-of CHAT-T3-P0-META
CHAT-T4-P0-BODY | 現在連打掃煮飯都包了。被需要的感覺——她比我還享受。 | CHAT_THREADS[4].posts[0].body
CHAT-T4-P1-WHO | 匿名 | CHAT_THREADS[4].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T4-P1-META | 回覆自己 | CHAT_THREADS[4].posts[1].meta
CHAT-T4-P1-BODY | 小事求助最穩。別一次要太多。 | CHAT_THREADS[4].posts[1].body
CHAT-T5-TITLE | 匿名・我也曾被幫過 | CHAT_THREADS[5].title
CHAT-T5-P0-WHO | 匿名 | CHAT_THREADS[5].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T5-P0-META | 新串 | CHAT_THREADS[5].posts[0].meta; dup-of CHAT-T3-P0-META
CHAT-T5-P0-BODY | 聽她講童年被欺負，我立刻編『我年輕時也被人幫過』。她真信了。 | CHAT_THREADS[5].posts[0].body
CHAT-T5-P1-WHO | 匿名 | CHAT_THREADS[5].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T5-P1-META | 續 | CHAT_THREADS[5].posts[1].meta; dup-of CHAT-T3-P1-META
CHAT-T5-P1-BODY | 無害人設要演滿。還早。 | CHAT_THREADS[5].posts[1].body
CHAT-T6-TITLE | 匿名・太孤單的時候 | CHAT_THREADS[6].title
CHAT-T6-P0-WHO | 匿名 | CHAT_THREADS[6].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T6-P0-META | 新串 | CHAT_THREADS[6].posts[0].meta; dup-of CHAT-T3-P0-META
CHAT-T6-P0-BODY | 太孤單的時候伸手，她也只是愣住。後來還替我說話——這種心軟，真的少見。 | CHAT_THREADS[6].posts[0].body
CHAT-T6-P1-WHO | 匿名 | CHAT_THREADS[6].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T6-P1-META | 攻略半套 | CHAT_THREADS[6].posts[1].meta
CHAT-T6-P1-BODY | 裝可憐→讓她覺得只有她能幫你→剩下的，等她自己點頭。 | CHAT_THREADS[6].posts[1].body
CHAT-T7-TITLE | 匿名・她爽約了別人 | CHAT_THREADS[7].title
CHAT-T7-P0-WHO | 匿名 | CHAT_THREADS[7].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T7-P0-META | 新串 | CHAT_THREADS[7].posts[0].meta; dup-of CHAT-T3-P0-META
CHAT-T7-P0-BODY | 一通電話，她就把別人晾在客廳。為了我。你們懂這種滋味嗎。 | CHAT_THREADS[7].posts[0].body
CHAT-T7-P1-WHO | 匿名 | CHAT_THREADS[7].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T7-P1-META | 續 | CHAT_THREADS[7].posts[1].meta; dup-of CHAT-T3-P1-META
CHAT-T7-P1-BODY | 唯一性養成中。 | CHAT_THREADS[7].posts[1].body
CHAT-T8-TITLE | 匿名・賭贏的本錢 | CHAT_THREADS[8].title
CHAT-T8-P0-WHO | 匿名 | CHAT_THREADS[8].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T8-P0-META | 新串 | CHAT_THREADS[8].posts[0].meta; dup-of CHAT-T3-P0-META
CHAT-T8-P0-BODY | 今天手氣好，一把翻身。本錢有了，局就能做大。她還以為我可憐。 | CHAT_THREADS[8].posts[0].body
CHAT-T8-P1-WHO | 匿名 | CHAT_THREADS[8].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T8-P1-META | 附圖（自稱） | CHAT_THREADS[8].posts[1].meta
CHAT-T8-P1-BODY | 截圖就不貼了。夠用就行。 | CHAT_THREADS[8].posts[1].body
CHAT-T9-TITLE | 匿名・債主演得不錯 | CHAT_THREADS[9].title
CHAT-T9-P0-WHO | 匿名 | CHAT_THREADS[9].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T9-P0-META | 新串 | CHAT_THREADS[9].posts[0].meta; dup-of CHAT-T3-P0-META
CHAT-T9-P0-BODY | 債主那幫人演得不錯，病歷都做得像真的。她嚇到了。 | CHAT_THREADS[9].posts[0].body
CHAT-T9-P1-WHO | 匿名 | CHAT_THREADS[9].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T9-P1-META | 續 | CHAT_THREADS[9].posts[1].meta; dup-of CHAT-T3-P1-META
CHAT-T9-P1-BODY | 重病戲碼，穩。 | CHAT_THREADS[9].posts[1].body
CHAT-T10-TITLE | 匿名・利息的別種算法 | CHAT_THREADS[10].title
CHAT-T10-P0-WHO | 匿名 | CHAT_THREADS[10].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T10-P0-META | 新串 | CHAT_THREADS[10].posts[0].meta; dup-of CHAT-T3-P0-META
CHAT-T10-P0-BODY | 利息可以用『別的方式』抵——我當場哭著拒絕，她卻自己點頭。老天都幫我。 | CHAT_THREADS[10].posts[0].body
CHAT-T10-P1-WHO | 路人C | CHAT_THREADS[10].posts[1].who
CHAT-T10-P1-META | 回覆 | CHAT_THREADS[10].posts[1].meta; dup-of CHAT-T0-P2-META
CHAT-T10-P1-BODY | ……你這樣寫沒問題嗎。 | CHAT_THREADS[10].posts[1].body
CHAT-T10-P2-WHO | 匿名 | CHAT_THREADS[10].posts[2].who; dup-of CHAT-T0-P0-WHO
CHAT-T10-P2-META | 回覆 | CHAT_THREADS[10].posts[2].meta; dup-of CHAT-T0-P2-META
CHAT-T10-P2-BODY | 她自己選的。 | CHAT_THREADS[10].posts[2].body
CHAT-T11-TITLE | 匿名・暴風雨那晚 | CHAT_THREADS[11].title
CHAT-T11-P0-WHO | 匿名 | CHAT_THREADS[11].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T11-P0-META | 當晚 | CHAT_THREADS[11].posts[0].meta; dup-of NIGHT-MASK-TITLE
CHAT-T11-P0-BODY | 風雨封路。她自己留下來的，我連開口求她都沒有。你們懂的。 | CHAT_THREADS[11].posts[0].body
CHAT-T11-P1-WHO | 匿名 | CHAT_THREADS[11].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T11-P1-META | 續 | CHAT_THREADS[11].posts[1].meta; dup-of CHAT-T3-P1-META
CHAT-T11-P1-BODY | 門一關，外面什麼都看不見。 | CHAT_THREADS[11].posts[1].body
CHAT-T12-TITLE | 匿名・只有她不會丟下我 | CHAT_THREADS[12].title
CHAT-T12-P0-WHO | 匿名 | CHAT_THREADS[12].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T12-P0-META | 康復日前夜 | CHAT_THREADS[12].posts[0].meta
CHAT-T12-P0-BODY | 只有她不會丟下我。髮夾、雨夜，細節你們自己對。 | CHAT_THREADS[12].posts[0].body
CHAT-T12-P1-WHO | 匿名 | CHAT_THREADS[12].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T12-P1-META | 最後一則 | CHAT_THREADS[12].posts[1].meta
CHAT-T12-P1-BODY | 他腿好了又怎樣？她還是會來。因為——只有我需要她需要到這個份上。 | CHAT_THREADS[12].posts[1].body
CHAT-T13-TITLE | 匿名・她出軌之後 | CHAT_THREADS[13].title
CHAT-T13-P0-WHO | 匿名 | CHAT_THREADS[13].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T13-P0-META | 新串・結局後 | CHAT_THREADS[13].posts[0].meta
CHAT-T13-P0-BODY | 他們正式在一起了，還住同一屋簷下。可笑——晚上過來的人還是我。她說因為我需要她。 | CHAT_THREADS[13].posts[0].body
CHAT-T13-P1-WHO | 匿名 | CHAT_THREADS[13].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T13-P1-META | 續 | CHAT_THREADS[13].posts[1].meta; dup-of CHAT-T3-P1-META
CHAT-T13-P1-BODY | 她一邊愧疚一邊來。髮夾還在她頭上，味道還在我房間。阿祿若問晚歸，她大概又會心虛地笑。 | CHAT_THREADS[13].posts[1].body
CHAT-T13-P2-WHO | 路人D | CHAT_THREADS[13].posts[2].who
CHAT-T13-P2-META | 回覆 | CHAT_THREADS[13].posts[2].meta; dup-of CHAT-T0-P2-META
CHAT-T13-P2-BODY | ……你這樣寫不太好吧。 | CHAT_THREADS[13].posts[2].body
CHAT-T13-P3-WHO | 匿名 | CHAT_THREADS[13].posts[3].who; dup-of CHAT-T0-P0-WHO
CHAT-T13-P3-META | 回覆 | CHAT_THREADS[13].posts[3].meta; dup-of CHAT-T0-P2-META
CHAT-T13-P3-BODY | 關你什麼事。她自己沒切斷。 | CHAT_THREADS[13].posts[3].body
CHAT-T14-TITLE | 匿名・她搬過來了 | CHAT_THREADS[14].title
CHAT-T14-P0-WHO | 匿名 | CHAT_THREADS[14].posts[0].who; dup-of CHAT-T0-P0-WHO
CHAT-T14-P0-META | 新串・結局後 | CHAT_THREADS[14].posts[0].meta; dup-of CHAT-T13-P0-META
CHAT-T14-P0-BODY | 她搬過來了。行李不大，心倒很大——說「他比你更需要我」。對，就是我。 | CHAT_THREADS[14].posts[0].body
CHAT-T14-P1-WHO | 匿名 | CHAT_THREADS[14].posts[1].who; dup-of CHAT-T0-P0-WHO
CHAT-T14-P1-META | 續 | CHAT_THREADS[14].posts[1].meta; dup-of CHAT-T3-P1-META
CHAT-T14-P1-BODY | 那個阿祿還在等燈嗎？隨便。她現在睡我這邊。 | CHAT_THREADS[14].posts[1].body
CHAT-T14-P2-WHO | 匿名 | CHAT_THREADS[14].posts[2].who; dup-of CHAT-T0-P0-WHO
CHAT-T14-P2-META | 攻略完結感言 | CHAT_THREADS[14].posts[2].meta
CHAT-T14-P2-BODY | 裝可憐到最後。你們學不會的。 | CHAT_THREADS[14].posts[2].body
CHAT-ROOM-TITLE | 匿名聊天室 | HTML
CHAT-ROOM-SUB | 偶然滑到的討論串，不知為何忍不住看下去 | HTML
CHAT-CLOSE | 關閉 | HTML
CHAT-BACK | ← 討論串 | HTML
CHAT-TAP-OUT | 輕觸外側關閉 | HTML
CHAT-NAV | 💬 聊天室 | navChat
CHAT-OPEN-LOG | 💬 打開匿名聊天室・看見一個愛抱怨的匿名路人 | openChatRoom
CHAT-BUSY-TRIP | （她出門了。等她回來再滑手機吧。） | openChatRoom
CHAT-BUSY | （現在不方便看聊天室。） | openChatRoom
CHAT-BUSY-MASK | （先看完眼前的事。） | openChatRoom
CHAT-NOTICE-TITLE | 有新討論串 | paintChatNotice
CHAT-FEED-01 | 討論串 | function paintChatFeed
CHAT-FEED-02 |  則</span></button> | function paintChatFeed
CHAT-FEED-03 | <p class="sm">還沒有討論串。</p> | function paintChatFeed
CHAT-FEED-04 | 偶然滑到的討論串，不知為何忍不住看下去 | function paintChatFeed; dup-of CHAT-ROOM-SUB
CHAT-FEED-05 | <p class="sm">這個討論串還沒有貼文。</p> | function paintChatFeed

## 結局

END-PREP-TITLE | 💬 聊天室・最後一則 | showEndingPrep
END-PREP-BODY-SUFFIX | 細節對上了：髮夾、暴風雨、只有她不會丟下我。\n\n你要怎麼面對？ | showEndingPrep
ENDING_CHAT | 只有她不會丟下我。髮夾還在，雨夜也還在。你們自己對細節吧——我贏了。 | ENDING_CHAT
END-OPT-DISBELIEVE | 不相信——那不是她 | showEndingPrep
END-OPT-BELIEVE | 面對真相——那就是她 | showEndingPrep
END-CHOICE-TITLE-TRUTH | 結局・面對之後 | showEndingChoice
END-CHOICE-TITLE-FAITH | 結局・你選擇相信她 | showEndingChoice
END-CHOICE-BODY-TRUTH | 你把聊天室攤在她面前。對照雨夜與髮夾。她崩潰了。\n\n你只能揭發——沒有別的路。 | showEndingChoice
END-CHOICE-BODY-FAITH | 你決定不當真。那麼，今晚你還要不要向她告白？ | showEndingChoice
END-OPT-REVEAL | 揭發真相（結局三） | showEndingChoice
END-OPT-CONFESS | 告白：在一起，繼續同居（結局一・出軌） | showEndingChoice
END-OPT-SEND-HOME | 不告白，讓媽媽接她回去（結局二） | showEndingChoice
END-TITLE-1 | 結局一・出軌 | finishEnding
END-TITLE-2 | 結局二・報恩的終點 | finishEnding
END-TITLE-3 | 結局三・回不去的地方 | finishEnding
END-BODY-1 | 你不相信聊天室，向她告白。她答應了——你們成為戀人，繼續住在一起。\n\n可是她沒有切斷和強叔的來往。她覺得他需要自己，每次出門都帶著對你的羞愧，卻仍舊去。你每天都在懷疑，卻選擇不問。\n\n結尾：你們在一起了；她的每一次晚歸，都是一次出軌。 | finishEnding
END-BODY-2 | 你不相信聊天室，也沒有告白。媽媽問：「小櫻可以回去了吧？」\n\n她說：「我不回去了……他比你更需要我。」她留在強叔身邊，直到最後都沒發現自己被利用。\n\n結尾：她把當年被給予的溫柔，原封不動地交給了不該給的人。 | finishEnding
END-BODY-3 | 你把真相攤開。她哭著刪掉聊天室，卻再也分不清哪些善意是真的。你們成為戀人，但有些地方永遠回不去了。\n\n她不再說「才不是為了你」，常問：「我是不是……很蠢？」 | finishEnding
END_GONE | （女主已搬走。房間裡只剩她留下的素描本，與空掉的位置。） | END_GONE
END_TALK-1-0 | ……燈開著就好。我愛你，這是真的。……晚歸的事，別問太細。 | END_TALK[1][0]
END_TALK-1-1 | 我們在一起了。可是他還需要我。……我知道自己很過分。 | END_TALK[1][1]
END_TALK-1-2 | 他傳訊來了。我出去一下就回。……對不起，阿祿。 | END_TALK[1][2]
END_TALK-1-3 | 你那麼溫柔，我更羞愧。……可是我還是會去。 | END_TALK[1][3]
END_TALK-1-4 | 有時候我會對不起你。可是我放不下那個需要我的人。……討厭這樣的自己。 | END_TALK[1][4]
END_TALK-3-0 | 我是不是……很蠢？ | END_TALK[3][0]
END_TALK-3-1 | 那些善意，哪些是真的？我分不清了。 | END_TALK[3][1]
END_TALK-3-2 | 阿祿，你還願意牽我的手嗎。 | END_TALK[3][2]
END_TALK-3-3 | 對不起。對不起。我不知道自己在救誰。 | END_TALK[3][3]
END_TALK-3-4 | 以後有人求助，我會先停一秒。……然後怕自己又點頭。 | END_TALK[3][4]
END-INLINE-01 | 結局一・出軌 | function finishEnding; dup-of END-TITLE-1
END-INLINE-02 | 結局二・報恩的終點 | function finishEnding; dup-of END-TITLE-2
END-INLINE-03 | 結局三・回不去的地方 | function finishEnding; dup-of END-TITLE-3
END-INLINE-04 | 你不相信聊天室，向她告白。她答應了——你們成為戀人，繼續住在一起。\n\n可是她沒有切斷和強叔的來往。她覺得他需要自己，每次出門都帶著對你的羞愧，卻仍舊去。你每天都在懷疑，卻選擇不問。\n\n結尾：你們在一起了；她的每一次晚歸，都是一次出軌。 | function finishEnding; dup-of END-BODY-1
END-INLINE-05 | 你不相信聊天室，也沒有告白。媽媽問：「小櫻可以回去了吧？」\n\n她說：「我不回去了……他比你更需要我。」她留在強叔身邊，直到最後都沒發現自己被利用。\n\n結尾：她把當年被給予的溫柔，原封不動地交給了不該給的人。 | function finishEnding; dup-of END-BODY-2
END-INLINE-06 | 你把真相攤開。她哭著刪掉聊天室，卻再也分不清哪些善意是真的。你們成為戀人，但有些地方永遠回不去了。\n\n她不再說「才不是為了你」，常問：「我是不是……很蠢？」 | function finishEnding; dup-of END-BODY-3
END-INLINE-07 | 小櫻 | function finishEnding
END-INLINE-08 | 強叔 | function finishEnding
END-INLINE-09 | ・強叔親密 → 100 | function finishEnding
END-INLINE-10 | 「……好。我們在一起。……其他的，你別問。」 | function finishEnding
END-INLINE-11 | 「我是不是……很蠢？」 | function finishEnding
END-PANE-GONE-TITLE | 女主已搬走 | pane(); dup-of TNAME-EXTRA-1
END-PANE-GONE-BODY | 小櫻搬去強叔那裡了。房間裡只剩下她留下的素描本。 | pane()
END-PANE-DONE-TITLE | 結局已定 | pane()
END-PANE-DONE-BODY | 互動／外出／提問已關閉。聊天室仍可回看。 | pane()
END-RESTART | 重新開始 | pane()

## 按鈕與說明

UI-TITLE | 小櫻養成日記 | HTML
UI-AFF-ALU | ❤️ 阿祿親密度 | HTML
UI-AFF-UNCLE | ❤️ 大叔親密度 | paintStats
UI-NAV-ASK | 💬 提問 | HTML; dup-of ASK-UI-01
UI-NAV-CHAT | 💬 聊天室 | HTML; dup-of CHAT-NAV
UI-NAV-DAILY | 📖 日常 | HTML
UI-NAV-MEM | 🌸 回憶 | HTML
UI-DOCK-HOME | 互動 | mkDock
UI-DOCK-GO | 外出 | mkDock
UI-SLEEP-LAB | 睡覺 | HTML
UI-SLEEP-SUB | 進入下一天 | HTML
UI-HERQ | ❓ 被問 | HTML
UI-MASK-CONTINUE | 繼續 | HTML #mb; dup-of OPEN-MOM-CONTINUE
UI-OPT-NEW | 有新內容 | optNewBadge
UI-ARIA-TOOLS | 音樂、事件、紀錄 | HTML
UI-ARIA-MUS-OFF | 關閉背景音樂 | musLabel
UI-ARIA-MUS-ON | 開啟背景音樂 | musLabel
UI-TITLE-MUS-ON | 音樂開 | musLabel
UI-TITLE-MUS-OFF | 音樂關 | musLabel
UI-TITLE-EV | 事件 | HTML
UI-ARIA-EV | 打開事件 | HTML
UI-TITLE-LOG | 紀錄 | HTML
UI-ARIA-LOG | 打開紀錄 | HTML
UI-ARIA-DAY | 天數 | HTML
UI-ARIA-ASKCHAT | 提問與聊天室 | HTML
UI-ARIA-OPENCHAT | 打開匿名聊天室 | HTML
UI-ARIA-DAILYMEM | 日常與回憶 | HTML
UI-ARIA-GIRL-HOLD | 和她聊天（長按可戳一下） | HTML
UI-ARIA-OUTING-LINE | 外出行動結果，點一下關閉 | HTML
UI-ARIA-SPD | 切換外出等待速度 | HTML
UI-ARIA-SIL | 若隱若現的剪影 | HTML
UI-ARIA-OBS | 起疑 | HTML; dup-of OBS-BTN-LAB
UI-ARIA-DLG | 和她聊天（點一下對話） | HTML
UI-ARIA-TH | 外出心聲 | HTML
UI-ARIA-DOCK | 主要行動 | HTML
UI-ARIA-SLEEP | 睡覺，進入下一天 | HTML
UI-ARIA-CHATROOM | 匿名聊天室 | HTML; dup-of CHAT-ROOM-TITLE
UI-ARIA-MOM | 媽媽的訊息 | HTML; dup-of OPEN-MOM-ARIA
UI-ARIA-OUTING-DOCK | 外出中的行動 | paintDock
UI-SPEAKER-SAKURA | 小櫻 | HTML; dup-of END-INLINE-07
UI-SPEAKER-SAKURA-EMOJI | 🌸 小櫻 | paintMaskChrome
UI-SPEAKER-UNCLE | 強叔 | paintMaskChrome; dup-of END-INLINE-08
UI-DAY-FADE-PREFIX | 第  | playDayAdvance label prefix
UI-DAY-FADE-SUFFIX |  天 | playDayAdvance label suffix
PANE-01 | <div class="row"><span class="i">🗝️</span><div class="m"><b>女主已搬走</b><div class="sm">小櫻搬去強叔那裡了。房間裡只剩下她留下的素描本。</div></div><button class="btn" onclick="doReset()">重新開始</button></div> | function pane
PANE-02 | <div class="row"><span class="i">📜</span><div class="m"><b>結局已定</b><div class="sm">互動／外出／提問已關閉。聊天室仍可回看。</div></div><button class="btn" onclick="doReset()">重新開始</button></div> | function pane
PANE-03 | <div class="row"><span class="i">🛋️</span><div class="m"><b>她出門了</b><div class="sm">小櫻在外面時不能做室內互動。你留在家等她回來。</div></div></div> | function pane
PANE-04 | <div class="sm" style="margin-bottom:8px">每天互動一次，增加親密度 | function pane
PANE-05 | 　・今天已做過 | function pane
PANE-06 | 需要阿祿親密度  | function pane
PANE-07 | 今天已做過 | function pane; dup-of HOME-DOCK-USED
PANE-08 | 未解鎖 | function pane
PANE-09 | 互動 | function pane; dup-of UI-DOCK-HOME
PANE-10 | <div class="blankbox"><div class="beat">她去了 | function pane
PANE-11 | ・<span id="tripCd">倒數 -- 秒</span></div><div class="sm" style="margin-top:6px">外出行動已在底欄：發訊息／打電話／尻槍／打瞌睡。</div></div> | function pane
PANE-12 | <div class="sm" style="margin-bottom:8px">今天已經外出過一次。只有睡覺日結後，明天才能再外出。</div> | function pane
PANE-13 | <div class="sm" style="margin-bottom:8px">一天只能外出一次，而等待總是漫長。</div> | function pane
PANE-15 | 今天已外出・明天再外出 | function pane
PANE-16 |  秒 | function pane
PANE-17 | 外出中 | function pane
PANE-19 | 外出 | function pane; dup-of UI-DOCK-GO
PANE-20 | <div class="sm" style="margin-top:6px">她出門中。底欄可直接行動；上方可調速度或提前結束等待。</div> | function pane
PANE-22 | 巷口事件後解鎖 | function pane
PANE-23 | 外出一次後解鎖 | function pane
PANE-25 | 答案好像出現變化 | function pane
PANE-26 | )">提問</button></div> | function pane
PANE-27 | <div class="sm" style="margin-top:6px">小櫻外出中，回來後再問她吧。</div> | function pane
PANE-28 | <div class="sm">她有問題時，主畫面會出現「問題」按鈕；點了才打開提問窗。</div> | function pane
PANE-29 | 隨著跟小櫻的相處愈多，塵封的回憶逐漸浮現 | function pane
PANE-30 | 對於這位青梅竹馬，暫時只有零碎的記憶。 | function pane
PANE-31 | <p class="sm">對於這位青梅竹馬，暫時只有零碎的記憶。</p> | function pane
PANE-32 | 親密  | function pane
PANE-33 | )">回憶</button></div> | function pane
PANE-34 | <div class="sm" style="margin-bottom:8px;opacity:.75">同居事件紀錄（親密度解鎖）</div> | function pane
PANE-35 | </b><div class="sm">親密度  | function pane
PANE-36 |  解鎖</div></div> | function pane
PANE-37 | )">重看</button> | function pane
PANE-38 | </b><div class="sm">強叔親密度  | function pane
PANE-39 | )">重看</button></div> | function pane
PANE-40 | <p class="sm">還沒有紀錄。在家互動，或派她出門吧。</p> | function pane
PANE-41 | <button type="button" class="pane-x" aria-label="關閉" onclick="closePane()">×</button> | function pane
DOCK-01 | 外出中的行動 | function paintDock; dup-of UI-ARIA-OUTING-DOCK
DOCK-02 | <span class="dockSub">跳過等待</span> | function paintDock
DOCK-03 | （跳過等待） | function paintDock
DOCK-04 | 主要行動 | function paintDock; dup-of UI-ARIA-DOCK
DOCK-05 |  今天已做過 | function paintDock
DOCK-06 | 互動 | function paintDock; dup-of UI-DOCK-HOME
DOCK-07 | 外出 | function paintDock; dup-of UI-DOCK-GO
DOCK-08 |  aria-label="睡覺，進入下一天"><span class="dockSleep-ico" aria-hidden="true">☾</span><span class="dockSleep-txt"><span class="dockSleep-lab">睡覺</span><span class="dockSleep-sub">進入下一天</span></span></button><button type="button" data-t="herq" style="display:none" aria-hidden="true">❓ 被問</button> | function paintDock
DOCK-09 | （故事已經走到結局了。） | function paintDock
STATUS-01 | <span class="dayMark-tick" aria-hidden="true"></span><span class="dayMark-k">第</span><span class="dayMark-n"> | function status
STATUS-02 | </span><span class="dayMark-k">天</span> | function status
STATUS-03 | 空屋 | function status
STATUS-04 | 女主已搬走 | function status; dup-of TNAME-EXTRA-1
STATUS-05 | 小櫻搬去強叔那裡了。互動／外出／提問／睡覺都已關閉。 | function status
STATUS-06 | 💭 心聲 | function status; dup-of THBOX-LABEL
STATUS-10 | 屋裡只剩你 | function status; dup-of NOTE-HOME-EMPTY
STATUS-11 | 小櫻還在外面…… | function status
STATUS-12 | 倒數  | function status
STATUS-13 |  秒 | function status; dup-of PANE-16
DUALTIP-01 | 親密  | function dualTip; dup-of PANE-32
DUALTIP-02 | ・強叔  | function dualTip
MUS-01 | 音樂開 | function musLabel; dup-of UI-TITLE-MUS-ON
MUS-02 | 音樂關 | function musLabel; dup-of UI-TITLE-MUS-OFF
MUS-03 | 關閉背景音樂 | function musLabel; dup-of UI-ARIA-MUS-OFF
MUS-04 | 開啟背景音樂 | function musLabel; dup-of UI-ARIA-MUS-ON
STATS-01 | 每天互動一次，增加親密度・外出一次・只有睡覺才會日結 | function paintStats; dup-of STATS-INC
STATS-02 | ❤️ 大叔親密度 <span class="affVal"> | function paintStats
DAYFADE-01 | 第  | function playDayAdvance; dup-of UI-DAY-FADE-PREFIX
DAYFADE-02 |  天 | function playDayAdvance; dup-of UI-DAY-FADE-SUFFIX
ENDDAY-01 | 📅 第 | function endDay
ENDDAY-02 | 天結束，外出  | function endDay
ENDDAY-03 |  次 | function endDay
ENDDAY-04 | ，遇見強叔  | function endDay
ENDDAY-06 | ・提早睡覺 | function endDay
ENDDAY-07 | 她沒說出口的事 | function endDay; dup-of UNSPOKEN-TITLE

## 除錯

DBG-RESET | 重置存檔 | HTML #rs
DBG-RESET-CONFIRM | 再按一次確認，清除全部進度 | resetAll
DBG-END-TEST | 結局測試 | HTML #dj
DBG-END-CONFIRM | 跳到第30天、阿祿親密度100、大叔親密度99，進入結局選擇？ | debugJumpEnding

## How to send edits back

1. Change **only** the text after the first `|` — keep the `ID` unchanged.
2. Leave the third `| location` column alone unless you are clarifying where it lives.
3. Keep `\n` markers for multi-line lines; do not break one entry across markdown lines.
4. Send the edited file (or just the changed `ID | text` rows). We grep the location note / original text in both HTML files and replace.

_Entries: 1411_
