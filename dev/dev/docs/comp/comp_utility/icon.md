# Icon <Badge type="info" text="單一元件" />

![select component](../../.vuepress/public/select.png)

## 簡介

`Icon` 元件提供了一個簡易的 icon 顯示方式，讓使用者能從圖標圖書館取得 icon，並依需求快速自訂大小

## VSCode Snippet（無）

```
還沒做
```

## 元件程式碼

```javascript
<script setup>
  import { ref } from 'vue'
  import Icon from '../icon.vue'
</script>

<template>
  <Icon
    icon="material-symbols:visibility-off-outline-rounded"
    size="20"
  />
</template>
```

## 元件 Props

| Prop Name | type   | 預設 | 說明                                                                                                         | required |
| :-------- | :----- | :--- | :----------------------------------------------------------------------------------------------------------- | :------- |
| icon      | String | Null | icon 樣式，如需更換請透過[連結](https://icones.js.org/)查詢，`Icon`元件詳細請點 [請點](../comp_utility/icon) | true     |
| size      | String | 18   | 數字會被轉換為 icon 長與寬，單位 px                                                                          | false    |
