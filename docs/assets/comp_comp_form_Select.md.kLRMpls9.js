import{_ as a,E as e,c as l,m as t,a as s,J as n,V as p,o as h}from"./chunks/framework.xqHy10_r.js";const x=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"comp/comp_form/Select.md","filePath":"comp/comp_form/Select.md"}'),k={name:"comp/comp_form/Select.md"},d={id:"select",tabindex:"-1"},o=t("a",{class:"header-anchor",href:"#select","aria-label":'Permalink to "Select <Badge type="info" text="複合元件" />"'},"​",-1),r=p(`<h2 id="簡介" tabindex="-1">簡介 <a class="header-anchor" href="#簡介" aria-label="Permalink to &quot;簡介&quot;">​</a></h2><p><code>Select</code> 元件提供了一個下拉選單，讓使用者可以在多個選項中選擇一個。常常被使用在表單中。</p><h2 id="vscode-snippet" tabindex="-1">VSCode Snippet <a class="header-anchor" href="#vscode-snippet" aria-label="Permalink to &quot;VSCode Snippet&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>jinput:select</span></span></code></pre></div><h2 id="元件程式碼" tabindex="-1">元件程式碼 <a class="header-anchor" href="#元件程式碼" aria-label="Permalink to &quot;元件程式碼&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  import Select from &#39;./UI/Form/Select.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  import Select from &#39;./UI/Form/Select.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  const selectData = ref(null)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  const selectOptions = ref([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;選項標題&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      value: 選項值,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    //...等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">InputField</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  for</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;select&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;輸入框標題&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  :valid=&quot;前端驗證結果(Boolean)&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  :errorMsg=&quot;前端格式驗證錯誤結果提示&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  :helperMsg=&quot;輸入輔助提示&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  required</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Select</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    :options=&quot;selectOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    :optionLabel=&quot;selectData?.label&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    v-model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;selectData&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    placeholder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;輸入框提醒文字&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">InputField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="元件-props" tabindex="-1">元件 Props <a class="header-anchor" href="#元件-props" aria-label="Permalink to &quot;元件 Props&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Prop Name</th><th style="text-align:left;">type</th><th style="text-align:left;">預設</th><th style="text-align:left;">說明</th><th style="text-align:left;">required</th></tr></thead><tbody><tr><td style="text-align:left;">options</td><td style="text-align:left;"><code>any[]</code></td><td style="text-align:left;">Null</td><td style="text-align:left;">下拉選單資料，物件陣列，資料設定規則如下 [ {label: ‘選項標題’,value: 選項值},…]</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">option label</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;">Null</td><td style="text-align:left;">取得當前選項標題</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">modelValue</td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">Null</td><td style="text-align:left;">v-model 連動資料</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;">&quot;請下拉選擇&quot;</td><td style="text-align:left;">設定選單提示文字</td><td style="text-align:left;">false</td></tr></tbody></table>`,8);function c(E,g,y,u,f,F){const i=e("Badge");return h(),l("div",null,[t("h1",d,[s("Select "),n(i,{type:"info",text:"複合元件"}),s(),o]),r])}const _=a(k,[["render",c]]);export{x as __pageData,_ as default};