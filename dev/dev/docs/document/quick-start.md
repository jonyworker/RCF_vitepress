# 快速開始

## 簡介

`Jony UI`是以`Vue3`為基礎搭建的元件庫，請按照下列步驟產生一個專案吧～

## 選擇目標資料夾

```cmd
$ cd 目標資料夾
```

## 建立 Vite 應用程式

::: tip 兼容性注意
Vite 需要 [Node.js](https://nodejs.org/en/) 版本 18+，20+。
安裝前請執行下列指令檢查 node 版本

```cmd
$ node -v
```

:::

在本節中，我們將介紹如何在本機電腦上建立 Vue 單一頁面應用程式。建立的專案將使用基於 Vite 的建置設置，並讓我們使用 Vue 單一檔案元件（SFC）。

確保您安裝了版本 18+，20+ 的 Node.js，並且目前工作目錄是您打算建立專案的目錄。在命令列中執行以下命令（不帶符號`$`）：

::: code-group

```cmd [NPM]
$ npm create vite@latest
```

```cmd [Yarn]
$ yarn create vite
```

```cmd [PNPM]
$ pnpm create vite
```

```cmd [Bun]
$ bun create vite
```

:::

此命令將安裝並執行 create-vue，透過官方專案建置工具。您將看到幾個可選功能的提示，例如框架選擇與 JavaScript：

```bash
? Project name: <專案名稱>
? Select a framework: › - Use arrow-keys. Return to submit.
  Vanilla
❯ Vue
  React
  Preact
  Lit
  Svelte
  Solid
  Qwik
  Others
? Select a variant: › - Use arrow-keys. Return to submit.
  TypeScript
❯ JavaScript
  Customize with create-vue
  Nuxt
```

專案建立完畢後，依序執行下列指令進入專案資料夾，執行 `npm install` 安裝依賴，安裝完畢後，執行 `npm run dev` 開始開發：
::: code-group

```cmd [NPM]
$ cd <your-project-name>
$ npm install
$ npm run dev
```

```cmd [Yarn]
$ cd <your-project-name>
$ pnpm install
$ pnpm run dev
```

```cmd [PNPM]
$ cd <your-project-name>
$ yarn
$ yarn dev
```

```cmd [Bun]
$ cd <your-project-name>
$ bun install
$ bun run dev
```

:::

應該已經可以運行一個 Vue + Vite 專案了！

- 建議的 IDE 設定是 [Visual Studio Code](https://code.visualstudio.com/) + [Volar extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar).
- 要了解底層建制工具 Vite 的更多訊息，請查看 [Vite docs](https://vitejs.dev).

## VSCode Snippet 安裝

::: tip
此 Snippet 外掛只允許再 VSCode 上安裝執行，請確保已安裝 [Visual Studio Code](https://code.visualstudio.com/)。
:::

這裡提供了一個工具能幫忙快速生成元件程式碼請點擊連結下載，並儲存於下列文件路徑中：

### PC 儲存路徑

```cmd
C:\Users\user\AppData\Rooming\Code\User\snippets
```

### MAC 儲存路徑

```cmd
~/Library/Application Support/Code/User/snippets
```
