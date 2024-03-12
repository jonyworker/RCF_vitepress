---
outline: deep
---

# Checkbox Limit Control <Badge type="info" text="控制元件" />

## 簡介

`Checkbox Limit Control` 是一個控制元件，無法單獨使用，須與 `Checkbox Basic` 結合使用。專門用來設定控制「最低」與「最多」選擇數量

```
圖片
```

## 元件程式碼

::: code-group

```vue [Vue 3]
<script>
const limitCheckedList = ref([]); // checked 的選項 v-model
const minCheck = ref(1); //設定最少選項
const maxCheck = ref(3); //設定最多選項
const checkboxes = ref([]); //ref變數
const isDisable = ref(); //  v-model 控制disable
</script>

<template>
  <CheckboxLimitControl
    :minCheck="minCheck"
    :maxCheck="maxCheck"
    v-model="limitCheckedList"
    v-model:isDisable="isDisable"
    :errorMsg="`最少要選擇 ${minCheck} 個選項喔`"
    :helperMsg="`請選擇最少 ${minCheck} 個，最多 ${maxCheck} 個選項`"
  >
  </CheckboxLimitControl>
</template>
```

:::

## 元件 props

| prop name  | type      | 功能                     | requried |
| :--------- | :-------- | :----------------------- | :------- |
| minCheck   | `Number`  | 設定最少選擇數量         | true     |
| maxCheck   | `Number`  | 設定最多選擇數量         | true     |
| checkboxes | `String`  | ref??                    | true     |
| isDisable  | `Boolean` | 控制選項是否為 Disable   | true     |
| errorMsg   | `Number`  | 前端格式驗證錯誤結果提示 | false    |
| helperMsg  | `Number`  | 輔助提示                 | false    |
