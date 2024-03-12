---
outline: deep
---

# Input Password <Badge type="info" text="複合元件" />

## 簡介

`Input Password` 是以 [Input Basic](InputBasic) 基礎搭建的密碼輸入元件，主要用於接收使用者輸入的敏感資訊。本元件提供基礎的前端驗證格式，點擊眼睛 `icon`，能夠暫時解除秘密模式，顯示敲擊過的密碼。

```
圖片
```

## 元件程式碼

::: code-group

```vue [Vue]
<script>
import { ref, reactive, computed } from "vue";
import InputField from "./UI/Form/InputField.vue";
import InputPassword from "./UI/Form/InputPassword.vue";

const passwordData = ref("");
const passwordChecklist = reactive([
  { description: "至少 8 個字元", regex: /.{8,}/, isValid: false },
  { description: "至少 1 個數字", regex: /[0-9]/, isValid: false },
  { description: "至少 1 個小寫字母", regex: /[a-z]/, isValid: false },
  { description: "至少 1 個大寫字母", regex: /[A-Z]/, isValid: false },
  { description: "至少 1 個特殊字元", regex: /[^A-Za-z0-9]/, isValid: false },
]);
const isValidPassword = computed(() => {
  let isValid;
  let trueCount = 0;

  passwordChecklist.forEach((item, i) => {
    isValid = item.regex.test(passwordData.value);
    if (isValid) {
      passwordChecklist[i].isValid = true;
      trueCount += 1;
    } else {
      passwordChecklist[i].isValid = false;
    }
  });

  if (passwordData.value !== "" && trueCount < passwordChecklist.length) {
    return false; // 還不符合驗證標準
  } else {
    return true; // 符合驗證標準
  }
});
</script>

<template>
  <InputField
    class="mb-5"
    for="password"
    label="請輸入密碼"
    :valid="isValidPassword"
    :helperMsg="helperMsg.password"
    :passwordCheckList="passwordChecklist"
    required
  >
    <InputPassword
      v-model.trim="passwordData"
      placeholder="請輸入密碼"
    ></InputPassword>
  </InputField>
</template>
```

```cmd [VSCode Snippet]
jinput:password
```

:::

:::warning
[InputWrap 元件詳細設定請參照此連結](InputWrap)
:::

## 元件 props

| prop name   | type     | 預設   | 說明             | required |
| :---------- | :------- | :----- | :--------------- | :------- |
| placeholder | `String` | `Null` | 設定選單提示文字 | true     |
