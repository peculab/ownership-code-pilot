# Ownership Code Pilot｜開源 AI 實作計畫

**建立一套由人審閱、可追溯的 AI 流程，把真實客戶問題轉成有用的回應。**

[English](README.md) · [題目說明](docs/CHALLENGE.md) · [適合第一次參與的任務](https://github.com/peculab/ownership-code-pilot/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22) · [貢獻方式](CONTRIBUTING.md)

## 我們要回答的問題

AI 能否協助人類團隊整理反覆出現的客戶痛點、依核准資料準備有用的回應，並判斷何時應交給真人接手——同時不冒充真人，也不發送未經核准的訊息？

這個 Repository 開發可重複使用的流程、評量方法與參考實作。**Ownership Code 提供第一個企業情境，但不獨占此開源專案或貢獻者的成果。**其他社群與組織也可以使用自己的核准資料、帳號與模型供應商，改作自己的 use case。

## 第一個公開 use case

Ownership Code 服務的對象包括企業經營者、買方、營運者與投資人。現有關係建立流程需要有經驗的人研究問題、理解情境、提供有用資訊，再決定何時適合真人對談。

第一期先測試更小的流程：

```text
核准或合成的輸入
        ↓
辨識問題及有證據支持的痛點
        ↓
取得核准的參考資料
        ↓
產生附來源與不確定性的回應草稿
        ↓
人工審閱：核准、修改、拒絕或真人接手
        ↓
記錄回饋，進行評量
```

本專案不做私人社群爬取、冒充真人、心理操控或未經核准的自動訊息。詳見 [安全原則](docs/SAFETY.md)。

## 我們要建立什麼

- 不綁定單一模型公司的通用流程。
- 僅使用合成或經核准、去識別化案例的小型參考資料集。
- 痛點分類與資料檢索 baseline。
- 人工審閱與真人接手規則。
- 評量相關性、來源支持、安全性與實用性的測試工具。
- 放在 `examples/ownership-code/` 的 Ownership Code 公開案例。

第一個里程碑是可審閱的原型，不是全自動 sales agent，也不承諾商業成果。

## 你可以怎麼參與

不需要一次完成整個系統。先選一項小成果：

| 領域 | 可貢獻的成果 |
| --- | --- |
| 研究 | 將合成問題整理成清楚的痛點分類 |
| 知識 | 把一份核准資料整理成可追溯的案例卡 |
| UX | 設計核准、修改、拒絕與真人接手畫面 |
| AI | 建立分類或檢索 baseline |
| 評量 | 評分回應的實用性、來源、不確定性與安全性 |
| 工程 | 串起輸入、檢索、草稿與審閱的最小流程 |
| 文件 | 改善設定、範例、圖解與新人說明 |

可從 [`good first issue`](https://github.com/peculab/ownership-code-pilot/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22)、`help wanted` 及投入時間標籤開始。較大的工作請先留言說明做法。

## 自備模型帳號與 Token 預算

本專案採 **Bring Your Own Key（BYOK）**：

- 不得提交 API key 或 access token。
- 貢獻者可以選擇支援的模型供應商。
- 每個部署者自行負擔模型、主機與第三方服務費用。
- 測試優先使用小型 fixture，並盡量提供 mock 或不連網的路徑。
- 供應商連接器放在系統邊界，核心資料格式維持可攜。

## 公開與私密資料邊界

可以放進此公開 Repository：程式、架構、prompt、schema、評量規則、合成案例，以及取得許可的去識別化範例。

不得提交：

- 客戶、潛在客戶或社群成員名單與聯絡資料。
- 私人 Facebook 社團或受限社群內容。
- 未核准公開的會議逐字稿與合作方文件。
- 帳密、Token、私有 prompt 或帳號設定。
- 未取得授權與同意、對真實對象發送的訊息。

提交範例前請閱讀 [資料處理原則](docs/DATA_HANDLING.md)。

## 參與、署名與後續機會

貢獻會留在 Issues、commits 與 Pull Requests。經接受的貢獻者可在本人同意下列入 release notes 及公開 demo。

參與不保證成果被採用，也不保證報酬、實習、聘僱、股權、成立公司或與 PecuLab／Ownership Code 建立商業關係。任何這類安排都必須另行簽訂書面協議。貢獻者只依 Repository 授權條款提供權利，並保留專案紀錄中的署名。

## 專案狀態

**探索／pre-alpha。** 題目已初步界定，正在建立公開 baseline、介面與成功標準。目前沒有核准的正式部署或自動對外聯繫。

接著閱讀：[第一次參與](docs/GETTING_STARTED.md)、[系統架構](docs/ARCHITECTURE.md)、[評量方法](docs/EVALUATION.md)與[路線圖](docs/ROADMAP.md)。

## 授權

採用 [Apache License 2.0](LICENSE)。各組織名稱與商標仍屬各權利人所有，此授權不授予商標使用權。
