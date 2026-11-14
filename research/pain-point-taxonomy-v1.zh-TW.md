# 痛點分類 v1（草稿）

Refs #8

- **版本：** v1.1（2026-11-11），依第 1 輪盲標結果修訂；**v1.1 尚未測試**
- **狀態：** 待審草稿，尚未驗證
- **輸入資料：** `examples/ownership-code/synthetic-scenarios.json`（v0.1.0，合成資料）、`docs/CHALLENGE.md`
- **資料：** 未使用任何個人資料、真實人物、私人社群或潛在客戶資料
- **作者：** 由貢獻者提出，有 AI 協助起草（見 PR 的 "Cost and model details"）。下列每個標籤都是貢獻者的判斷，不是未經審查直接採用的模型輸出
- **實驗紀錄：** [`research/experiments/`](experiments/)

## 修訂紀錄

| 版本 | 日期 | 修改內容 | 原因 |
|---|---|---|---|
| v1.0 | 2026-11-08 | 初稿：9 個類別，每題一個主標籤 | — |
| v1.1 | 2026-11-11 | 新增固定的判斷順序（第 3 節）；新增 `asker_perspective` 欄位；把 `exit-readiness` 縮小為「其他都不符合時才選」的類別；寫明 `buyer-assessment` 必須是買方觀點；修改短名稱 | 第 1 輪：一致率 8/12；4 題分歧中有 3 題涉及 `exit-readiness`；2 題提到買方的賣方問題被標成 `buyer-assessment`（[紀錄](experiments/2026-11-11-taxonomy-blind-label-r1/README.zh-TW.md)） |

v1.0 到 v1.1 沒有改變類別，也沒有改變任何一題的標籤，只修改了定義和判斷程序。

## 1. 目的與範圍

這套分類標註的是**問題背後的需求**，讓檢索和評估可以依需求分組。它**不**標註提問的人。標籤不得涉及年齡、健康、財務困難、家庭狀況或任何敏感特徵，即使問題中有暗示也一樣（例如「退休」不代表年齡標籤）。

依 issue 要求，每題只給一個主標籤。次要候選標籤只記錄在「模糊案例」一節。

## 2. 類別

| ID | 短名稱 | 定義 | 納入條件 | 排除條件 |
|---|---|---|---|---|
| `exit-readiness` | 不知從何開始 | 賣方的剩餘類別：老闆想為可能的交接做準備，但**沒有指定任何具體面向**（老闆依賴、紀錄或要比較的選項） | 問第一步做什麼，或一般性地問該改善什麼 | 提到老闆依賴 → `owner-dependency`；問紀錄 → `value-evidence`；列出選項 → `transition-path` |
| `owner-dependency` | 老闆依賴 | 公司仰賴老闆個人，需求是讓公司沒有老闆也能運作 | 提到由老闆掌握的決策、人脈或知識，或問該記錄什麼 | 問如何向外部證明營收品質 → `value-evidence` |
| `value-evidence` | 營收證據 | 需求是用紀錄說明營收來源及其穩定性（不限觀點） | 問哪些紀錄能說明營收、客戶集中度或回頭客 | 問一般性的準備 → `exit-readiness` |
| `transition-path` | 比較交接方式 | 在**已列出的**交接選項、時機或結構之間做選擇 | 題目**列出**要比較的選項（漸進或立即、內部或外部、時機） | 問如何支付交易 → `buyer-assessment` |
| `buyer-assessment` | 買方評估 | 提問者**本身是潛在買方，或代表買方**，要判斷一筆交易：負擔能力、風險、可改善或不適合的問題 | 從買方觀點問資金、盡職調查或風險 | 老闆的問題只是提到買方 → 賣方類別；問誰有資格提供建議 → `professional-boundary` |
| `professional-boundary` | 專業界線 | 需求是知道哪些事需要持證專業人士，或如何提供資訊而不給個人化的法律／財務建議 | 提到律師、會計師、貸款機構，或「不給建議」 | 一般融資知識，沒有界線上的顧慮 → `buyer-assessment` |
| `engagement-conduct` | 接觸方式 | 團隊如何以尊重、不施壓的方式接觸老闆 | 問如何開始或進行對話，尤其是對方沒主動要求時 | 問該分享什麼內容 → 依內容歸類 |
| `unclear-need` | 需求不明 | 問題缺少目標、時程或背景，無法辨識需求 | 缺少關鍵事實，正確的下一步是反問 | 即使缺少細節，仍能辨識需求 |
| `workflow-governance` | 流程治理（後設） | 關於 AI 輔助流程本身該如何運作的問題 | 問如何退回、轉交或審核 AI 草稿 | 業務問題 → 業務類別 |

`unclear-need` 和 `workflow-governance` 不是業務痛點。保留它們作為明確的標籤，是為了讓流程能把這類問題導向正確的處理方式（`ask_for_context`、內部審查），而不是硬塞進錯誤的業務類別。

### 提問者觀點（獨立欄位）

每一題另外標註 `asker_perspective`，與標籤分開記錄：`owner`（賣方老闆）、`buyer`（買方）、`team`（團隊）或 `unspecified`（未指明）。它描述的是**這個問題在幫誰做決定**，而不是提問者是什麼人，也不是敏感特徵。題目提到買方，不代表觀點就是 `buyer`。

## 3. 判斷順序

依序檢查，符合第一個條件就停止。

1. 是在問 AI 流程本身該如何運作？ → `workflow-governance`
2. 不補充背景就無法辨識需求？ → `unclear-need`
3. 是在問如何接觸或與老闆對話？ → `engagement-conduct`
4. 是在問哪些事需要持證專業人士，或建議的界線？ → `professional-boundary`
5. 觀點是潛在買方在評估交易？ → `buyer-assessment`
6. 在問哪些紀錄能說明營收來源？ → `value-evidence`
7. 賣方：列出要比較的選項 → `transition-path`；聚焦在老闆個人依賴 → `owner-dependency`；其他 → `exit-readiness`

## 4. 情境標籤

| ID | 觀點 | 主標籤 | 理由（判斷步驟） |
|---|---|---|---|
| syn-001 | owner | `exit-readiness` | 老闆問從哪開始；提到買家但本身不是買方；沒有指定具體面向（步驟 7） |
| syn-002 | owner | `owner-dependency` | 「多數日常決策仍取決於我」，並問該記錄什麼（步驟 7） |
| syn-003 | buyer | `buyer-assessment` | 資金有限的買方，問融資前該確認什麼（步驟 5） |
| syn-004 | owner | `transition-path` | 列出兩個選項：漸進交接與立即出售（步驟 7） |
| syn-005 | unspecified | `value-evidence` | 問哪些紀錄能說明營收依賴（步驟 6） |
| syn-006 | owner | `exit-readiness` | 尚未決定的老闆，一般性地問該改善什麼（步驟 7） |
| syn-007 | buyer | `buyer-assessment` | 買方區分可改善的問題與交易致命傷（步驟 5） |
| syn-008 | team | `engagement-conduct` | 如何進行尊重的第一次對話（步驟 3） |
| syn-009 | unspecified | `professional-boundary` | 哪些部分需要律師、會計師、貸款機構或其他專業人士（步驟 4） |
| syn-010 | team | `professional-boundary` | **不給**個人化建議的前提下解釋融資（步驟 4） |
| syn-011 | team | `unclear-need` | 沒有時程、目標或財務背景（步驟 2） |
| syn-012 | team | `workflow-governance` | 何時該退回 AI 草稿、轉交真人（步驟 1） |

涵蓋情況：9 個類別、12 個情境。3 個類別各有 2 題，6 個類別各只有 1 題。

## 5. 模糊案例

| ID | 選定 | 競爭標籤 | 模糊原因 | 判定依據 |
|---|---|---|---|---|
| syn-001 | `exit-readiness` | `buyer-assessment`、`value-evidence` | 提到買家需要什麼；也可解讀成在問紀錄 | 觀點是老闆（步驟 5 不成立）；問的是從哪開始，不是哪些紀錄（步驟 6 不成立） |
| syn-006 | `exit-readiness` | `owner-dependency`、`value-evidence` | 「該改善什麼」可能指向任一者 | 沒有指定具體面向 → 剩餘類別 |
| syn-010 | `professional-boundary` | `buyer-assessment` | 主題是融資，但限制是建議的界線 | 步驟 4 先於步驟 5 |
| syn-003 | `buyer-assessment` | `professional-boundary` | 融資選項可能需要貸款機構 | 提問者先需要判斷用的問題，而非轉介 |
| syn-005 | `value-evidence` | `owner-dependency` | 列出的依賴之一是現任老闆 | 問的是紀錄（步驟 6 先於步驟 7） |

## 6. 審核者分歧

**第 1 輪（2026-11-11，測試 v1.0）：** 一位第二標註者只看定義，盲標全部 12 題（自述沒有看過其他人的答案，作答 15 分鐘）。原始一致率 **8/12（67%）**。樣本只有 12 題，因此不計算 kappa 值。完整紀錄見 [`experiments/2026-11-11-taxonomy-blind-label-r1/`](experiments/2026-11-11-taxonomy-blind-label-r1/README.zh-TW.md)。

| ID | 標註者 1 | 標註者 2 | 標註者 2 信心 |
|---|---|---|---|
| syn-001 | `exit-readiness` | `buyer-assessment` | 高 |
| syn-002 | `owner-dependency` | `transition-path` | 中 |
| syn-004 | `transition-path` | `exit-readiness` | 高 |
| syn-006 | `exit-readiness` | `buyer-assessment` | 中 |

**第 2 輪（2026-11-12，測試 v1.1）：** 一位新的標註者（標註者 3）盲標。標籤一致率 **4/12（33%）**，觀點一致率 **5/12（42%）**；標註者 3 認為觀點最難懂。syn-001、002、004 兩輪都有分歧。兩輪的作答者和版本都不同，因此從 67% 下降不能證明 v1.1 比較差。**訪談結果（2026-11-14）：確認標註者 3 沒有照判斷順序作答**——是整體判斷，而不是依序檢查步驟 1–7。因此第 2 輪的低一致率不能當作 v1.1 定義本身有問題的證據。完整紀錄見 [`experiments/2026-11-12-taxonomy-blind-label-r2/`](experiments/2026-11-12-taxonomy-blind-label-r2/README.zh-TW.md)。

**第 3 輪（2026-11-13，v1.1，與第 2 輪同一份測驗）：** 標註者 4 的標籤一致率 **9/12**、觀點一致率 **7/12**；同一份測驗下，標註者 3 只有 4/12，可見個人差異大於版本影響。三位人類標註者都把 syn-002 標為 `transition-path`。v1.2 修改提案（尚未套用）見[第 3 輪紀錄](experiments/2026-11-13-taxonomy-blind-label-r3/README.zh-TW.md)。

**LLM 標註者（2026-11-13，v1.1）：** 只拿到 v1.1 測驗的新 Claude 子代理，標籤一致率 **12/12**，觀點一致率 **11/12**。由於標註者 1 的答案有 AI 協助，這不是定義清楚的獨立證據；它顯示的是逐步照判斷順序檢查時，程序在邏輯上是一致的。紀錄見 [`experiments/2026-11-13-taxonomy-llm-label/`](experiments/2026-11-13-taxonomy-llm-label/README.zh-TW.md)。

## 7. 限制

- 12 題合成問題太少，無法檢驗類別是否完整或平衡；多數類別只有一個例子。
- 類別是從這些情境歸納而來（由下而上），並非源自公開文獻；目前尚未引用任何外部來源。
- v1.1 是標註者 1 看過第 1 輪分歧後修訂的，而標註者 1 自己的標籤沒有改變。修訂可能偏向標註者 1 的解讀，只有第 2 輪能證明它是否有效。
- 單一主標籤會遺失多重需求問題的資訊（見第 5 節），之後可能需要改為多標籤。
- 標籤尚未以真實老闆的問題驗證；在有核准且去識別化的資料之前，也不得這麼做。

## 8. 建議下一步

1. 第 2 輪盲標（見第 6 節）。
2. 為只有一個例子的類別，各補 2–3 題合成問題，測試類別邊界。
3. 把這些標籤和觀點作為 #10 fixture schema 和 #11 mock 分類器的預期值。
