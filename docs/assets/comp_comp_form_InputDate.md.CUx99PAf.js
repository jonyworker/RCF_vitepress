import{_ as e,E as i,c as l,m as s,a as t,J as n,V as p,o as h}from"./chunks/framework.xqHy10_r.js";const _=JSON.parse('{"title":"Input Date","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"comp/comp_form/InputDate.md","filePath":"comp/comp_form/InputDate.md"}'),d={name:"comp/comp_form/InputDate.md"},o={id:"input-date",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#input-date","aria-label":'Permalink to "Input Date <Badge type="info" text="複合元件" />"'},"​",-1),k=p(`<h2 id="簡介" tabindex="-1">簡介 <a class="header-anchor" href="#簡介" aria-label="Permalink to &quot;簡介&quot;">​</a></h2><p><code>Input Date</code> 是以為 <a href="./InputBasic.html">Input Basic</a> 基礎搭建的元件，提供使用者直接輸入或是點擊右方月曆 icon 選擇日期。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>圖片</span></span></code></pre></div><h2 id="元件程式碼" tabindex="-1">元件程式碼 <a class="header-anchor" href="#元件程式碼" aria-label="Permalink to &quot;元件程式碼&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-flLOr" id="tab-oCK_2qh" checked="checked"><label for="tab-oCK_2qh">Vue</label><input type="radio" name="group-flLOr" id="tab-ShSD1GA"><label for="tab-ShSD1GA">VSCode Snippet</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref, computed } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> InputCalender </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./UI/Form/InputCalender.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [電子郵件資料及前端格式檢查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">InputCalender</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;起始日期&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jinput:calender</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><a href="./InputWrap.html">InputWrap 元件詳細設定請參照此連結</a></p></div><h2 id="元件-props" tabindex="-1">元件 props <a class="header-anchor" href="#元件-props" aria-label="Permalink to &quot;元件 props&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">prop name</th><th style="text-align:left;">type</th><th style="text-align:left;">預設</th><th style="text-align:left;">說明</th><th style="text-align:left;">required</th></tr></thead><tbody><tr><td style="text-align:left;">label</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"><code>null</code></td><td style="text-align:left;">設定輸入框標題</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;"><code>String</code></td><td style="text-align:left;"><code>Null</code></td><td style="text-align:left;">設定選單提示文字</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">required</td><td style="text-align:left;"><code>Boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">顯示必填星號提示</td><td style="text-align:left;">false</td></tr></tbody></table>`,8);function c(g,E,u,y,f,m){const a=i("Badge");return h(),l("div",null,[s("h1",o,[t("Input Date "),n(a,{type:"info",text:"複合元件"}),t(),r]),k])}const v=e(d,[["render",c]]);export{_ as __pageData,v as default};
