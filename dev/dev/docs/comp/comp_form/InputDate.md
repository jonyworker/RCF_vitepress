---
outline: deep
---

# Input Date <Badge type="info" text="複合元件" />

## 簡介

`Input Date` 是以為 [Input Basic](InputBasic) 基礎搭建的元件，提供使用者直接輸入或是點擊右方月曆 icon 選擇日期。

```
圖片
```

## 元件程式碼

::: code-group

```vue [Vue]
<script setup>
import { ref, computed } from "vue";
import InputCalender from "./UI/Form/InputCalender.vue";
// [電子郵件資料及前端格式檢查]
</script>

<template>
  <InputCalender label="起始日期" placeholder="" required />
</template>
```

```cmd [VSCode Snippet]
jinput:calender
```

:::

:::warning
[InputWrap 元件詳細設定請參照此連結](InputWrap)
:::

## 元件 props

| prop name   | type      | 預設    | 說明             | required |
| :---------- | :-------- | :------ | :--------------- | :------- |
| label       | `String`  | `null`  | 設定輸入框標題   | false    |
| placeholder | `String`  | `Null`  | 設定選單提示文字 | false    |
| required    | `Boolean` | `false` | 顯示必填星號提示 | false    |
