# Input Number<Badge type="info" text="複合元件" />

## 簡介

`Input Number`是以`Input Basic`為基礎搭建的元件，提供了一個輸入框，及上下按鈕，讓使用者可以直接輸入數字或是點擊按鈕度對數字增減。可設定驗證格式，由前端驗證。

## 元件程式碼

::: code-group

```vue [Vue]
<script setup>
import { ref, computed } from "vue";
import InputField from "./UI/Form/InputField.vue";
import InputNumber from "./UI/Form/InputNumber.vue";

// [數字資料及前端格式檢查]
const numberData = ref(0);
const minLength = ref(0);
const maxLength = ref(5);
const isValidNumber = computed(() => {
  return numberData.value != ""
    ? numberData.value <= maxLength.value && numberData.value >= minLength.value
    : null;
});
</script>

<template>
  <InputField
    for="number"
    label="解耦number input寫法測試 ok"
    :valid="isValidNumber"
    :errorMsg="errorMsg.number"
    :helperMsg="helperMsg.number"
    required
  >
    <InputNumber v-model.trim.number="numberData"></InputNumber>
  </InputField>
</template>
```

<!-- ```javascript [v-model格式]（暫）
const checkedList = ref([]);
``` -->

```cmd [VSCode Snippet]
jinput:number（還沒做）
```

:::

:::warning
[InputWrap 元件詳細設定請參照此連結](InputWrap)
:::

## 元件 Props

| Prop Name  | type    | 預設 | 說明               | required |
| :--------- | :------ | :--- | :----------------- | :------- |
| modelValue | `any[]` | Null | 與父層雙向綁定資料 | true     |
