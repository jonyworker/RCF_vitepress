---
outline: deep
---

# Input Textarea <Badge type="info" text="複合元件" />

## 簡介

`Input Textarea` 能讓使用者輸入多行文字，例如備註、評論或其他需要長篇文字輸入的地方。本元件提供內文「字數檢查」功能，當超過開發者設定的「最多字數」時，跳出錯誤提示文字，提醒使用者修正調整。

```
圖片
```

## 元件程式碼

::: code-group

```vue [Vue]
<script>
import Textarea from "./UI/Form/Textarea.vue";

const textareaData = ref("");
const textareaMaxChar = ref("5");
const isValidTextarea = computed(() => {
  if (textareaData.value.length > textareaMaxChar.value) {
    const extraChar = textareaData.value.length - textareaMaxChar.value;
    errorMsg.textarea = `已超出限制 ${extraChar} 個字了喔`;
  }
  return textareaData.value.length <= textareaMaxChar.value ? true : false;
});
</script>

<template>
  <Textarea
    label="訂單備註"
    for="note"
    tailHint="charLimit"
    :maxLength="textareaMaxChar"
    :currentLength="textareaData.length"
    rows="5"
    placeholder="請輸入此筆訂單備註"
    :valid="isValidTextarea"
    :errorMsg="errorMsg.textarea"
    :helperMsg="helperMsg.textarea"
    v-model="textareaData"
  />
</template>
```

```cmd [VSCode Snippet]
jtextarea
```

:::

## 元件 props

| prop name     | type      | 預設   | 說明                             | required |
| :------------ | :-------- | :----- | :------------------------------- | :------- |
| label         | `String`  | `null` | 設定輸入框標題                   | false    |
| for           | `String`  | `null` | 對應輸入框 `input name`          | false    |
| tailHint      | `String`  | Null   | `charLimit` 表示字數提示         | false    |
| maxLength     | `String`  | Null   | 設定字數提示最大文字限制         | false    |
| currentLength | `Number`  | Null   | 顯示總輸入字數提示               | false    |
| row           | `Number`  | `3`    | 輸入框初始行數                   | true     |
| placeholder   | `String`  | `Null` | 設定選單提示文字                 | true     |
| valid         | `Boolean` | true   | 前端驗證結果（驗證失敗紅框顯示） | false    |
| errorMsg      | `String`  | Null   | 前端格式驗證錯誤結果提示         | false    |
| helperMsg     | `String`  | Null   | 輸入框輸入輔助提示               | false    |
| modelValue    | `any[]`   | `null` | 與父層雙向綁定資料               | false    |
