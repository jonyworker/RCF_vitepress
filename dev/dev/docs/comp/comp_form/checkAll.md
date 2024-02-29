# Checkbox 全選 <Badge type="info" text="複合元件" />

修改中：待與凡萱確認圖片及 props 內容

## 簡介

`Check All` 是以 `Checkbox` 為基礎搭建的元件，功能像 table list 標題左側勾勾。能夠一次全部選擇或一次全部取消。**基礎樣式** [Checkbox](../basic/checkbox.md)

## VSCode Snippet（未設定）

```md
jinput:email（未設定）
```

## 元件程式碼

```javascript
<script setup>
  import { ref, computed } from 'vue';
  import CheckSet from "./UI/CheckSet.vue";
</script>

<template>
  <CheckSet
    :data="formStore.checkArray"
    check="left" master-text="both" text="title"
    label-txt="請選箱子"
  ></CheckSet>
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

| Prop Name   | type   | 預設  | 說明(jony)                                             | required |
| :---------- | :----- | :---- | :----------------------------------------------------- | :------- |
| check       | String | Left  | 勾選框位置 `left`表示在標題左邊，`right`表示在標題右邊 | false    |
| master-text | String | title | 全勾選欄字體樣式。`title`表示，`desc`表示，`both`表示  | false    |
| text        | String | title | 字體樣式。`title`表示，`desc`表示，`both`表示          | false    |

| prop name   | type   | 變數                            | 功能             |
| :---------- | :----- | :------------------------------ | :--------------- |
| check       | String | `left (default)` `right`        | 勾選框位置       |
| master-text | String | `title (default)` `desc` `both` | 全勾選欄字體樣式 |
| text        | String | `title (default)` `desc` `both` | 字體樣式         |

### 資料 props

| prop name | type    | 功能                                                                     |
| :-------- | :------ | :----------------------------------------------------------------------- |
| data      | Array   | 傳入資料，需有標題`title(String)`, `敘述desc(String)`, `值value(String)` |
| label-txt | String  | 列表標題                                                                 |
| required  | Boolean | 必填                                                                     |
| hasError  | Boolean | 提示框線                                                                 |
