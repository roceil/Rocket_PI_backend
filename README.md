<p align="center">
  <a href="https://pi-rocket-coding.vercel.app/">
    <img width="200" src ="https://raw.githubusercontent.com/roceil/Rocket_Topic_Consultation/main/public/images/footer/footerLOGO.svg">
  </a>
</p>

<h1 align="center" style="font-weight: 700">拍拍｜線上心理諮商平台（管理者後台）</h1>

<div align="center" style="margin-bottom:24px">

<span>｜</span>
<a href="https://pi-rocket-coding.vercel.app/">
前台網站
</a>
<span>｜</span>
<a href="https://pi-rocket-backend.zeabur.app/">
後台網站
</a>
<span>｜</span>
<a href="https://github.com/roceil/Rocket_Topic_Consultation">
前台 Repo
</a>
<span>｜</span>
<a href="https://wistful-cod-85c.notion.site/5cefa38475a64702b599810da2fb3475">
API List
</a>
<span>｜</span>
<a href="https://pi.rocket-coding.com/swagger/index.html?url=/swagger/v1/swagger.json#/">
Swagger
</a>
<span>｜</span>

<br>
<p>
歡迎來到拍拍！拍拍是個線上心理諮商平台<br>
幫助人們克服各種情緒和心理上的困難，改善他們的生活品質。
</p>
<img
  style="border-radius: 16px;"
  src="https://raw.githubusercontent.com/roceil/Rocket_Topic_Consultation/main/public/images/Readme/Mockup.png">
</div>

# 拍拍｜線上心理諮商平台

拍拍的進駐諮商師皆為經驗豐富、專業資格齊全的心理學家和臨床心理師，能夠針對每個人的獨特情況提供量身定制的建議和解決方案。您可以隨時隨地在線上與諮商師進行互動，無論您在家中、辦公室或旅途中，都可以方便地使用我們的服務。

我們的目標是成為您信任和依賴的心理諮商平台，幫助您實現自我成長、改善人際關係、克服情緒困擾、減輕壓力和焦慮等問題。歡迎您註冊成為拍拍會員，開始您的心理健康之旅！

---

## 功能介紹

### 管理員端：

- 管理員登入
- 管理員查看諮商師審核狀態
- 管理員審核諮商師
- 管理員要求諮商師補件
- 管理員查看所有訂單狀態
- 管理員查看特定用戶的訂單狀態
- 管理員查看所有金流狀態
- 管理員查看特定用戶的總消費金額

---

## 建議體驗流程

- 後台管理員：
  1. 登入帳號
  2. 確認新註冊的諮商師資格，並決定是否通過審核，如無法通過審核，則發信要求補件
  3. 確認每筆訂單的課程狀態
  4. 確認每筆訂單的金流狀態，且可搜尋特定用戶的總消費金額

---

## 下載與安裝

Clone 專案

```bash
  git clone https://github.com/roceil/Rocket_PI_backend.git
```

進入專案

```bash
  cd Rocket_PI_backend
```

安裝套件

```bash
  npm install
```

建立環境變數

```bash
  .env.example 改為 .env.local
```

啟動專案

```bash
  npm run dev
```

---

## 資料夾結構

```flow
Rocket_PI_backend/
├── public/
│   ├── loading
│   ├── logo.svg
│   └── ...
├── src/
│   ├── common/
│   │   ├── components/
│   │   │   └── Loading.tsx
│   │   ├── helpers/
│   │   │   └── customAlert.tsx
│   │   ├── hooks/
│   │   │   ├── useCloseLoading.tsx
│   │   │   └── useOpenLoading.tsx
│   │   └── redux/
│   │       ├── feature/
│   │       │   └── loading.ts
│   │       └── store.ts
│   ├── modules/
│   │   └── dashboard/
│   │       └── DashBoardLayout.tsx
│   ├── pages/
│   │   ├── dashboard/
│   │   │   ├── index.tsx
│   │   │   ├── order.tsx
│   │   │   └── payment.tsx
│   │   ├── index.tsx
│   │   └── ...
│   ├── styles/
│   │   ├── antd/
│   │   │   └── antd.css
│   │   └── globals.css
│   ├── types
│   └── interface.ts
├── next.config.js
├── package.js
├── tailwind.config.js
└── tsconfig.js
```

---

## Git Commit 規則

| 類型       | 格式                              | 範例                               |
| :--------- | :-------------------------------- | :--------------------------------- |
| `新增功能` | `[Feat] create [ModalName]`       | `[Feat] create header`             |
| `修補錯誤` | `[Fix] fix [ModalName] bug`       | `[Fix] fix carousel bug`           |
| `樣式相關` | `[Style] adjust [ModalName] gap`  | `[Style] adjust card gap`          |
| `更新檔案` | `[Update] update [ModalName] pic` | `[Update] update user pic`         |
| `重構代碼` | `[Refactor] refactor [ModalName]` | `[Refactor] refactor API function` |
| `快速更新` | `[Hotfix] fix [ModalName]`        | `[Hotfix] fix API function`        |

---

## Git Branch 命名規則

- 以類型格式為開頭並大寫，如：Feat
- 以區塊為命名提示並大寫，如：OrderStep
- 範例：`Feat/OrderStep`

---
## 技術規格

<h2 align="center">👩‍💻 設計工具</h2>
 <p>
  <img alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  <img alt="Procreate" src="https://img.shields.io/badge/Procreate-000?style=for-the-badge&logoColor=white" />
  <img alt="Illustrator" src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white" />
  <img alt="AntDesign" src="https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white" />
  <img alt="AntDesign" src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" />
  <img alt="Notion" src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" />

### 工具說明：

- [ 設計稿製作 ]：Figma

  - 用於製作線稿、精稿及 prototype。
  - 方便團隊之間協作，理解產品操作流程

- [ 繪圖工具 ]：Procreate
  - 用於繪製插圖及 loading 動畫
  - 內建筆刷庫非常豐富，且能針對每種筆刷自由調整參數
  - 支援匯出各式檔案
  </p>

<h2 align="center">💻 前端技術</h2>
 <p>
  <img alt="VS Code" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img alt="AntDesign" src="https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="NextJS" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img alt="Redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img alt="Mock Service Worker" src="https://img.shields.io/badge/Mock SERVICE WORK-E34F26?style=for-the-badge&&logoColor=white" />
  <img alt="Zeabur" width="87" height="28" style="background-color:#E0E0E0; padding:0 8px" src="https://docs.zeabur.com/logo_b.svg" />
  <img alt="GSAP" src="https://img.shields.io/badge/GSAP-4EAA25?style=for-the-badge&&logoColor=white" />
  <img alt="GItHUB" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  <img alt="GIT" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
  <img alt="Zoom" src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white" />
  <img alt="ESLINT" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
  <img alt="PRETTIER" src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />

### 技術說明：

- [ 環境 ]：Next 13

  - 使用 Next.js 來進行 SSR，讓網頁能夠快速的載入，並且透過 head 元件，使諮商師頁面能夠在 SEO 上有更好的表現。

- [ 框架 ]：React

  - 使用 React 來進行前端開發，透過 React 的生態系，能夠快速的開發出一個網頁，並且透過 React 的生命週期，能夠更好的管理網頁的狀態。

- [ 語言 ]：TypeScript

  - 語言使用 TypeScript 來進行開發，透過型別管理，減少協作間產生衝突的機會。

- [ CSS ]：Tailwind

  - 使用 Tailwind 來進行 CSS 的開發，透過 Tailwind 的原子化架構，可以增加協作時的樣式更改效率。

- [ 部署平台 ]：Vercel／Zeabur \* 使用 Vercel 及 Zeabur 來進行部署，透過 Vercel 的自動化部署，能夠快速的部署網頁；而 Zeabur 的集成式服務，則是能夠增加未來網站快速建構資料庫的可能性。
</p>

<h2 align="center">⌨️ 後端技術</h2>
 <p>
  <img alt="Visual_Studio" src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white" />
  <img alt=".NET" src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" />
  <img alt="C#" src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" />
  <img alt="SQL" src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" />
  <img alt="POSTMAN" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
  <img alt="SWAGGER" src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/SignalR-007ACC?style=for-the-badge&logoColor=white" />
  <img alt="Azure" src="https://img.shields.io/badge/microsoft%20azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" />
  <img alt="GItHUB" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  <img alt="GIT" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
  <img alt="Zoom" src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white" />
  <img alt="GMAIL" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />

### 技術說明：

- [ 環境 ]：Microsoft Visual Studio

  - 使用的是.net Freamwork 平台，網頁技術版本則是 asp.net。

- [ 框架 ]：ASP.NET Web API 2

  - 一個由 Microsoft 開發的框架，用於快速構建 Web API 的接口。裡面包含 Get、Post、Put、Delete、Patch 等。

- [ 資料庫 ]：Microsoft SQL Server

  - 微軟的關聯式資料庫，用來查詢垂直擴展的關聯表格，可以高效的查詢表跟表之間的關聯資料。

- [ 技術 ]：SignalR

  - SignalR 是一個由 Microsoft 開發的開源庫，根據情況使用 WebSocket、Server-Sent Events 或 Long Polling 等技術來實現雙向通信。能迅速地渲染使用者的畫面。

- [ 雲端平台 ]：Azure
  - Microsoft 提供一個雲端平台，讓使用者可以使用多種的服務，其中有計算、存儲、資料庫、部署和管理自己的應用程序。

</p>
