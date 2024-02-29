# Node.js 安裝流程 (建置 ing)

## 簡介

Node.js 是能夠在伺服器上面運行 JavaScript 的應用平台環境，透過 Node.js 提供的函式庫與執行環境能完成伺服器端服務，提供各種網路應用。

## 官網下載 Node.js

:::warning
正式開始安裝前，請輸入下列指令檢查是否正確安裝 `NVM`

```
nvm --version
```

[詳細 NVM 安裝方式請參照此連結](install-nvm)
:::

前往官網提供穩定版 (LTS) 與最新版 (Current) 可選擇，選擇穩定版即可。安裝方式大多簡單快速通過即可，有幾個過程項目需注意：

目前版本預設情況下會自動幫你安裝 npm 管理與設定 PATH 所需路徑。所以不用擔心需要額外安裝或設定什麼
會提供一個 Automaticy install 的選項自動安裝工具請打勾，這能幫助你未來遇到一些 npm 模組可提供修改時呼叫 Python 與 VScode 來連動修改。若未安裝時未來會出現錯誤訊息 (ex:gyp ERR! find Python)。若有打勾將會主程式安裝完畢後呼叫 cmd 進行此項目工具安裝。
安裝完畢後執行 cmd 或 powershell，輸入 node -v 或 npm -v 能得到版本資訊代表安裝成功。

```cmd
$ cd 目標資料夾
```
