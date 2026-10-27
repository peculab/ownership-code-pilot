# 協作與交付方式

## 認領

1. 選一個 Issue，閱讀目標、前置需求、成果位置與完成標準。
2. 留言：

   ```text
   我想認領的原因：
   我預計採取的做法：
   我預計交付的日期（含時區）：
   我需要的協助：
   ```

3. Pecu／指定審閱者確認後設定 Assignee，將看板移至「已認領」，填入預計交付日。**留言不代表已獲指派。**
4. 每人同時先負責一題；開始實作時移至「進行中」。協作者與審閱者在 Issue 中列出。

## 分支與 PR

已有此私有庫寫入權限的同學，可直接在庫內建立分支；不要假設私有庫一定允許 Fork。

```powershell
git clone https://github.com/peculab/ownership-code-pilot.git
cd ownership-code-pilot
git switch main
git pull --ff-only
git switch -c task-1-owner-research
# 新增研究文件或程式，檢查差異後，只加入該題相關檔案。
git add research/經營需求觀察.md
git commit -m "Document community needs observations"
git push -u origin task-1-owner-research
```

在 GitHub 建立 PR，使用範本並寫 `Closes #1`（請換成實際任務編號）。附上可重現的檢查方式，研究任務也要檢查來源、分類與推測標記。已可審閱才移至「待審閱」；未完成可先開 Draft PR，不要當成已交付。

審閱者依 [審閱標準](docs/REVIEW.md) 回饋。學生在同一分支提交修正，不必重開 PR。審閱通過後才合併並將看板移至「已完成」。看板狀態不會單靠 Git push 自動更新，除非另行設定 GitHub Projects 工作流程。

## 卡住時

在 Issue 說明「目前進度、缺什麼、需要誰協助、下一次更新時間」，加 `blocked` 標籤。不要為了填滿成果而編造觀察、案例、測試或日期。取得素材後先確認能否引用，再移除阻礙。

## 不包含在本次設定的事項

目前沒有自動部署、外部寄信、社群貼文發布或正式 NOMA 串接。任何對外發布或聯絡都需由主辦者明確安排。程式與研究都以可審閱的小成果為單位。
