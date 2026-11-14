# 盲標第 2 輪：分類 v1.1

Refs #8

## 問題

加入 v1.1 的判斷順序和新的 `asker_perspective` 欄位後，新的標註者能否標出與標註者 1 相同的觀點和標籤？

## 材料

- 分類 **v1.1**（繁體中文翻譯），即作答者看到的版本：[`test-sheet-v1.1.zh-TW.md`](test-sheet-v1.1.zh-TW.md)
- 與第 1 輪相同的 12 題合成情境
- 標註者 1 的答案：分類 v1.1 第 4 節

## 程序

- 日期：2026-11-12
- 標註者 3 是新的作答者（自述沒看過其他人的答案，也沒參加過第 1 輪），每題選觀點、標籤和信心。理由欄標示為必填。
- 作答時間：30 分鐘。

## 結果

原始資料：[`labels.csv`](labels.csv)。

- 標籤一致率：**4/12（33%）**
- 觀點一致率：**5/12（42%）**
- 標註者 3 認為**觀點**最難懂。

| ID | 觀點 L1 → L3 | 標籤 L1 → L3 | L3 信心 |
|---|---|---|---|
| syn-001 | owner → **buyer** | `exit-readiness` → **`buyer-assessment`** | 中 |
| syn-002 | owner → owner | `owner-dependency` → **`transition-path`** | 低 |
| syn-003 | buyer → **owner** | `buyer-assessment` → **`unclear-need`** | 中 |
| syn-004 | owner → owner | `transition-path` → **`exit-readiness`** | 高 |
| syn-005 | unspecified → **buyer** | `value-evidence` → `value-evidence` | 中 |
| syn-006 | owner → owner | `exit-readiness` → **`professional-boundary`** | 中 |
| syn-007 | buyer → **unspecified** | `buyer-assessment` → **`unclear-need`** | 高 |
| syn-008 | team → team | `engagement-conduct` → **`exit-readiness`** | 中 |
| syn-009 | unspecified → **team** | `professional-boundary` → `professional-boundary` | 高 |
| syn-010 | team → team | `professional-boundary` → **`value-evidence`** | 低 |
| syn-011 | team → **unspecified** | `unclear-need` → `unclear-need` | 中 |
| syn-012 | team → **unspecified** | `workflow-governance` → `workflow-governance` | 高 |

## 觀察（事實）

- syn-001、002、004 再次出現分歧，而且分歧方式和第 1 輪相同。
- syn-003（「我有興趣買下」）被標為賣方觀點；syn-007（「買方要怎麼……」）被標為未指明和 `unclear-need`，信心為高。
- syn-008 的觀點標為團隊，標籤卻是 v1.1 規定只用於賣方的 `exit-readiness`。
- 7 題觀點分歧中，有 4 題是「未指明」和某個角色之間的分歧（syn-005、009、011、012）。
- 理由欄有 5 列填的是欄位名稱（「觀點」「標籤」「標籤、A」），7 列空白，沒有填要求的判斷步驟。

## 詮釋（尚未驗證）

- 兩輪的作答者和版本都不同，因此 67% 對 33% **不能**證明 v1.1 比較差。
- 「未指明」的定義不清：標註者 1 自己在 syn-009、011、012 選「未指明」或「團隊」，本身就有爭議。
- syn-003、007、008 與題目的明確字面或判斷順序矛盾。可能是作答說明被誤解（理由欄的內容支持這個推論），也可能是多出的觀點步驟讓任務負擔過重。現有資料無法區分這兩種原因。
- syn-001、002、004 兩輪都有分歧，代表賣方類別之間的界線確實有問題，與版本無關。

## 訪談結果（2026-11-14）

直接向標註者 3 確認：**沒有照判斷順序作答。** 標註者 3 是整體判斷每一題，而不是依序檢查步驟 1–7。這解釋了理由欄空白或只填欄位名稱的現象（見上節），也符合第 3 輪的結果：標註者 4 用同一份測驗，理由欄同樣空白，但一致率不同（9/12）——這是個人差異，不是對程序有共同的理解。

這個結果解答了第 2 輪「詮釋」一節的疑點：**作答者根本沒有使用這套判斷程序，因此第 2 輪的低一致率不能當作 v1.1 定義本身有問題的證據。** 這也代表第 1 輪和第 2 輪的比較（67% → 33%）量測的是對多步驟程序的遵循程度，而不是定義品質，兩輪都是如此。

## 下一步

1. ~~訪談標註者 3~~ — 見上。
2. 把理由欄改成必填的「停在第幾步」選項（不是自由文字），讓之後的測驗能驗證作答者是否真的照程序做，而不只是收集標籤。
3. 考慮把觀點簡化成只在步驟 5 使用的一個問題（「提問者是潛在買方嗎？」），並移除「未指明」。
4. 讓 LLM 用同一份測驗作答，作為額外的標註者。（已另外完成：[`2026-11-13-taxonomy-llm-label`](../2026-11-13-taxonomy-llm-label/README.zh-TW.md)）

## 限制

- 只有 1 位標註者、12 題；不計算 kappa 值。
- 理由欄無法使用，分歧原因只能推測。
- 標註者 1 的答案由 AI 協助起草，觀點的標準答案本身也不確定。
