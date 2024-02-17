import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RCF Comp. Library",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: "Home", link: "/" },
      { text: "指南", link: "/api-examples" },
      { text: "元件庫", link: "/comp/comp_utility/icon.md" },
    ],

    sidebar: {
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
            { text: "checkAll", link: "/comp/comp_form/checkAll.md" },
            { text: "checkbox", link: "/comp/comp_form/checkbox.md" },
            { text: "checkLimit", link: "/comp/comp_form/checkLimit.md" },
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

            { text: "radiobutton", link: "/comp/comp_form/radiobutton.md" },
            { text: "radioCombo", link: "/comp/comp_form/radioCombo.md" },
            { text: "radioSet", link: "/comp/comp_form/radioSet.md" },
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
