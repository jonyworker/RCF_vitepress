# Checkbox 全選 <Badge type="info" text="複合元件" />

修改中：待與凡萱確認圖片及 props 內容

## 簡介

`Check All` 是以 [Checkbox](../basic/checkbox.md) 為基礎搭建的勾選列表元件，功能像 table list 標題左側勾勾。可以複選也能夠一次全部選擇或一次全部取消。 

## VSCode Snippet（未設定）

```md
jinput:email（未設定）
```

## 元件程式碼

```javascript
<script setup>
  import { ref, computed } from 'vue';
  import check-set from "./UI/CheckSet.vue";
</script>

<template>
  <check-set
    :data="formStore.checkArray"
    check="left" 
    master-text="both" 
    text="title"
    label-txt="組件標題顯示文字"
    master-text-title="全選欄標題"
    master-text-desc="全選欄註解"
    v-model="取得勾選項目值"
  ></check-set>
</template>
```

## 這邊圖片壞掉

<div style="display: flex; margin-top: 22px;">
  <div style="flex: 1;">
    <img src="../../.vuepress/public/images/checkall_1.png">
  </div>
  <div style="flex: 1;">
    <img src="../../.vuepress/public/images/checkall_2.png">
  </div>
  <div style="flex: 1;">
    <img src="../../.vuepress/public/images/checkall_3.png">
  </div>
</div>

### 樣式 props

| Prop Name   | type   | 預設  | 說明(jony)                                             | 
| :---------- | :----- | :---- | :----------------------------------------------------- | 
| check       | `String` | `left`  | 勾選框位置 `left`表示在標題左邊，`right`表示在標題右邊 | 
| master-text | `String` | `title` | 全選勾選欄字體樣式。`title`表示文字只有標題，`desc`表示文字只有註解，`both`表示文字有標題也有註解  | 
| text        | `String` | `title` | 子勾選欄字體樣式。`title`表示文字只有標題，`desc`表示文字只有註解，`both`表示文字有標題也有註解 |
| required  | `Boolean` | `false` | 顯示為必填，預設為`false`             | 
| tailHint  | `String` | `false` |  `optional`顯示選填提示字            | 


### 資料 props

| prop name | type    | 功能                                                           |requried |
| :-------- | :------ | :------------------------------------------------------------- | :----- |
| data      | `Array`   | 傳入資料，需有標題`title(String)`, 敘述`desc(String)`, 值`value(String)` | true |
| v-model | `Array`  | 取得已勾選的值                                                      | false |
| label-txt | `String`  | 列表標題                                                        | optional |
|  master-text-title | `String`  | 主勾選標題                                             | optional |
|  master-text-desc | `String`  | 主勾選註解                                              | optional |

