import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RCF Comp. Library",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: "Home", link: "/" },
      { text: "指南", link: "/guide/quick-start.md" },
      { text: "元件庫", link: "/comp/comp_utility/icon.md" },
    ],

    sidebar: {
      // 安裝及下載相關資訊
      "/guide/": [
        {
          text: "開始",
          items: [
            { text: "快速開始", link: "/guide/quick-start.md" },
            { text: "編輯器設定", link: "/guide/vscode-snippet.md" },
          ],
        },
        {
          text: "環境設定",
          items: [
            { text: "NVM 安裝方式", link: "/guide/install-nvm.md" },
            { text: "Node.js 安裝方式", link: "/guide/install-node.md" },
          ],
        },
      ],
      // 元件簡介
      "/comp/": [
        {
          text: "通用元件",
          items: [
            { text: "icon", link: "/comp/comp_utility/icon.md" },
            { text: "button", link: "/comp/comp_utility/button.md" },
          ],
        },
        {
          text: "表單元件",

          items: [
            { text: "checkAll（修改中）", link: "/comp/comp_form/checkAll.md" },
            { text: "checkbox（修改中）", link: "/comp/comp_form/checkbox.md" },
            {
              text: "checkLimit（修改中）",
              link: "/comp/comp_form/checkLimit.md",
            },
            {
              text: "輸入框",
              // collapsed: true,
              items: [
                { text: "input:wrap", link: "/comp/comp_form/InputWrap.md" },
                { text: "input:basic", link: "/comp/comp_form/InputBasic.md" },
                { text: "input:email", link: "/comp/comp_form/InputEmail.md" },
                {
                  text: "input:number",
                  link: "/comp/comp_form/InputNumber.md",
                },
              ],
            },

            {
              text: "radiobutton（修改中）",
              link: "/comp/comp_form/radiobutton.md",
            },
            {
              text: "radioCombo（修改中）",
              link: "/comp/comp_form/radioCombo.md",
            },
            { text: "radioSet（修改中）", link: "/comp/comp_form/radioSet.md" },
            { text: "select", link: "/comp/comp_form/Select.md" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
