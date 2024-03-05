# Input Label

## 簡介

`Input Label` 元件用來表示表單中輸入框或是標題

## 元件程式碼

::: code-group

```javascript [Vue]
<template>
  <InputLabel
    for="與 input name 對應 "
    tailHint="字尾提示"
    required //標題旁出現星號提示，表示必填
  >
    {{ 設定輸入框標題 }}
  </InputLabel>
</template>
```

```cmd [VSCode Snippet]
jinput:label
```

:::

## 元件 Props

| Prop Name | type      | 預設  | 說明                                      | required |
| :-------- | :-------- | :---- | :---------------------------------------- | :------- |
| for       | `String`  | Null  | 對應輸入框 `input name`                   | false    |
| required  | `Boolean` | false | 顯示必填星號提示                          | false    |
| tailHint  | `String`  | Null  | 標題尾提示。`optional` 表示本輸入框非必填 | false    |
