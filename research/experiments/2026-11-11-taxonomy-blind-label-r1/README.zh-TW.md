# 盲標第 1 輪：分類 v1.0

Refs #8

## 問題

第二個人只看書面定義，能否標出與標註者 1 相同的痛點標籤？

## 材料

- 分類 **v1.0** 的定義（繁體中文翻譯），即作答者看到的版本：[`test-sheet-v1.0.zh-TW.md`](test-sheet-v1.0.zh-TW.md)
- `examples/ownership-code/synthetic-scenarios.json` v0.1.0 的 12 題合成情境（繁體中文翻譯）
- 標註者 1 的標籤：分類 v1.0 第 3 節（貢獻者判斷，有 AI 協助起草）

## 程序

- 日期：2026-11-11
- 標註者 2 讀完定義後，每題選一個標籤，並填寫信心（高／中／低）和選填的理由。
- 標註者 2 沒有看過標註者 1 的標籤（自述沒有看過其他人的答案）。
- 作答時間：15 分鐘。

## 結果

原始資料：[`labels.csv`](labels.csv)。原始一致率 **8/12（67%）**。樣本只有 12 題，因此不計算 kappa 值。

| ID | 標註者 1 | 標註者 2 | 信心 |
|---|---|---|---|
| syn-001 | `exit-readiness` | `buyer-assessment` | 高 |
| syn-002 | `owner-dependency` | `transition-path` | 中 |
| syn-004 | `transition-path` | `exit-readiness` | 高 |
| syn-006 | `exit-readiness` | `buyer-assessment` | 中 |

其餘 8 題一致。標註者 2 認為 `exit-readiness`（A）的定義最難懂。理由欄未填寫。

## 觀察（事實）

- 4 題分歧中有 3 題涉及 `exit-readiness`。
- syn-001 和 syn-006 的提問者是老闆，卻被標成 `buyer-assessment`；syn-001 的題目提到買家。
- syn-001 和 syn-004 是高信心的分歧。
- `professional-boundary`、`engagement-conduct`、`unclear-need`、`workflow-governance` 完全一致。

## 詮釋（尚未驗證）

- `buyer-assessment` 沒有寫明提問者必須是買方，作答者可能依關鍵字判斷。
- `exit-readiness` 和 `transition-path` 的界線不清；「交接路徑」這類短名稱可能讓作答者依關鍵字作答。
- 高信心的分歧，代表問題較可能出在定義，而不是作答者不確定。
- 分歧不代表標註者 2 錯誤。

## 因此做的修改

分類 v1.1（見分類文件的修訂紀錄）：固定的判斷順序、`asker_perspective` 欄位、縮小 `exit-readiness`、`buyer-assessment` 必須是買方觀點、修改短名稱。類別和標註者 1 的標籤都沒有改變。

## 限制

- 只有 1 位第二標註者、12 題。
- 沒有收集到理由，分歧原因只能推測。
- 標註者 1 的標籤由 AI 協助起草。
- 標註者 2 已經看過題目，不能參加第 2 輪。
