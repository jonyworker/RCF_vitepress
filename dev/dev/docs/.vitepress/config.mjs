import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RCF Comp. Library",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: "local",
    },
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
            {
              text: "Checkbox",
              // collapsed: true,
              items: [
                {
                  text: "Checkbox Basic",
                  link: "/comp/comp_form/checkboxBasic.md",
                },
                {
                  text: "Checkbox Master",
                  link: "/comp/comp_form/checkboxMaster.md",
                },
                {
                  text: "Checkbox Select All",
                  link: "/comp/comp_form/checkboxSelectAll.md",
                },
                {
                  text: "checkbox Limit Control",
                  link: "/comp/comp_form/checkboxLimitCtrl.md",
                },
                {
                  text: "checkbox Limit Select",
                  link: "/comp/comp_form/checkboxLimit.md",
                },

                {
                  text: "待刪(舊)",
                  collapsed: true,
                  items: [
                    {
                      text: "checkbox（舊）",
                      link: "/comp/comp_form/checkbox_copy.md",
                    },
                    {
                      text: "checkAll（舊）",
                      link: "/comp/comp_form/checkAll.md",
                    },
                    {
                      text: "checkLimit（舊）",
                      link: "/comp/comp_form/checkLimit_copy.md",
                    },
                    {
                      text: "checkLimit（舊）",
                      link: "/comp/comp_form/checkLimit_copy.md",
                    },
                  ],
                },
              ],
            },
            {
              text: "Input",
              // collapsed: true,
              items: [
                { text: "input Label", link: "/comp/comp_form/InputLabel.md" },
                { text: "input Wrap", link: "/comp/comp_form/InputWrap.md" },
                { text: "Input Basic", link: "/comp/comp_form/InputBasic.md" },
                { text: "Input Email", link: "/comp/comp_form/InputEmail.md" },
                {
                  text: "input Number",
                  link: "/comp/comp_form/InputNumber.md",
                },
                { text: "Input Date", link: "/comp/comp_form/InputDate.md" },
                {
                  text: "Input Textarea",
                  link: "/comp/comp_form/InputTextarea.md",
                },
                {
                  text: "Input Password",
                  link: "/comp/comp_form/InputPassword.md",
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
