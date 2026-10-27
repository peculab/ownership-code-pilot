# Projects 看板與狀態

## 目前狀態

Repository 和 Issues 可正常使用。**GitHub Projects 看板尚未建立**：目前 Git 登入具有 `repo`、`gist`、`workflow`，缺少 `project` 權限；主辦者選擇稍後授權。不要把以下預定設定當作已存在的看板。

## 預定五個狀態

| 狀態 | 進入條件 |
| --- | --- |
| 待認領 | 任務範圍清楚，歡迎提出認領做法 |
| 已認領 | 範圍、主要負責人及預計交付日已確認 |
| 進行中 | 正在研究或製作 |
| 待審閱 | 已附可審閱成果／非 Draft PR |
| 已完成 | 符合完成標準，完成審閱並合併 |

欄位：**Assignees／負責人**（GitHub 內建）、**預計交付日**（Date）、**任務類型**（Single select：研究、知識、內容、AI、工程、測試、提案）。

`blocked` 是獨立標籤，不是第六個狀態。保留任務進度，同時在 Issue 註明阻礙、所需協助與下次更新。兩張研究題可先提出認領；其餘等待輸入的任務先保留為可規劃、尚不可執行。

## 授權後建立

1. GitHub 個人頁 → Projects → New project → Board，名稱 `Ownership Code Pilot`。
2. 設為 **Private**，連結 `peculab/ownership-code-pilot`。成員存取權另行確認，不公開合作資料。
3. 把 Status 設成上方五個選項，新增日期與任務類型欄位，顯示 Assignees、Labels、預計交付日。
4. 將七張 Issue 加入看板；先都置於「待認領」，依 Issue 類型填欄位，保留 `blocked` 標籤。尚未有人認領，不填假日期或 Assignee。
5. 在 Repository 的 Projects 頁確認已連結。需要自動 Done 時，可在 Projects Workflows 依自己設定的選項開啟「Item closed」；未設定前仍需人工更新。

也可使用本庫的 `scripts/setup-project.mjs`，先在 GitHub CLI 授權 `project` 後執行；腳本會建立私有 Project、連結 Repository、設定 Status／日期／類型欄位並加入任務。不會邀請成員或替學生指定交付日期。Board 版面如未由 API 建立成功，依腳本提示在網站新增 Board View；不要把只有 Project 而沒有 Board View 說成全部完成。

```powershell
gh auth refresh -h github.com -s project
node --use-system-ca scripts/setup-project.mjs
```

若尚未安裝或登入 GitHub CLI，先完成官方 CLI 的安裝與登入。`GH_BIN` 可指定 CLI 執行檔；腳本不需要把任何 token 放進檔案或對話。此腳本僅完成語法檢查，因主辦者暫緩 Projects 授權，尚未做真實 Project API 寫入驗證。

GitHub 官方參考：[Projects API 與授權](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)。
