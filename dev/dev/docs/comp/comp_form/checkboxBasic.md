---
outline: deep
---

# Checkbox Basic <Badge type="info" text="單一元件" />

## 簡介

`Checkbox Basic` 勾選框元件，在表單中通常以複數的形式出現。基礎的勾選框，使用者可以設定選項標題或增加選項輔助說明，或依需求決定讓勾選框位於選項標題左側或右側。

```
圖片
```

## 元件程式碼

::: code-group

```vue [Vue]
<script>
  import JCheckbox from "./UI/From/CheckboxBasic.vue";
  const isChecked = ref([])
</script>

<template>
  <j-checkbox
    label="選項標題"
    descMsg="選項輔助說明"
    value="選項初始值(與資料庫對應)"
    name="選項名(資料庫欄位值)"
    position="勾選框位置"
    v-model="isChecked雙向綁定資料"
    block //選項標題和選項說明換行顯示
  ></j-checkbox>
</template>
```

<!-- ```javascript [v-model格式]（暫）
const checkedList = ref([]);
``` -->

```cmd [VSCode Snippet]
jcheck:basic
```

:::

## 元件 props

| prop name  | type     | 預設       | 說明                                                       | required |
| :--------- | :------- | :--------- | :--------------------------------------------------------- | :------- |
| label      | `String` | `選項標題` | 選項標題                                                   | false    |
| descMsg    | `String` | `null`     | 選項輔助說明                                               | false    |
| value      | `String` | `null`     | 選項初始值，與資料庫對應的值                               | false    |
| name       | `String` | `null`     | 選項名，資料庫欄位值                                       | false    |
| position   | `String` | `prepend`  | 勾選框位置 `prepend`表示在標題左邊，`append`表示在標題右邊 | false    |
| block      | `String` | `null`     | 選項標題與選項說明，換行顯示                               | false    |
| modelValue | `any[]`  | `null`     | 與父層雙向綁定資料                                         | false    |
