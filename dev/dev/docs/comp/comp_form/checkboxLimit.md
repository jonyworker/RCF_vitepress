---
outline: deep
---

# Checkbox:limit（新編） <Badge type="info" text="單一元件" />

## 簡介

以`Checkbox` 元件為基礎組合成的 `Checkbox:limit`，使用者可以自由增加 `勾選框` 數量，並設定最少選擇數量和最多選擇數量。當使用者在選擇指定數量的欄位後，系統會自動鎖定其他未被選中的欄位，防止在超出指定數量的情況下進行多餘的選擇。

```
圖片
```

## 元件程式碼

::: code-group

```javascript [Vue 3]
<script>

</script>

<template>
    外props:
    v-model
    label
    max
    min
        內props:


</template>
```

```javascript [v-model格式]
const checkboxOptions = ref([
  {
    label: "選項標題",
    value: 選項值,
  },
  //...等
]);
```

```cmd [VSCode Snippet]
jcheck:limit
```

:::

## 元件 props

| prop name | type | 預設 | 說明 |
| :-------- | :--- | :--- | :--- |

### 樣式 props（舊）

| prop name | type     | 預設    | 說明                                                                                            |
| :-------- | :------- | :------ | :---------------------------------------------------------------------------------------------- |
| check     | `String` | `left`  | 勾選框位置 `left`表示在標題左邊，`right`表示在標題右邊                                          |
| text      | `String` | `title` | 子勾選欄字體樣式。`title`表示文字只有標題，`desc`表示文字只有註解，`both`表示文字有標題也有註解 |

### 資料 props（舊）

| prop name  | type      | 功能                                                                     | requried |
| :--------- | :-------- | :----------------------------------------------------------------------- | :------- |
| data       | `Array`   | 傳入資料，需有標題`title(String)`, 註解`desc(String)`, 值`value(String)` | true     |
| v-model    | `Array`   | 取得已勾選的值                                                           | false    |
| label-txt  | `String`  | 列表標題                                                                 | false    |
| error-less | `String`  | 少於勾選數量警告                                                         | optional |
| max        | `Number`  | 最多勾選數量                                                             | optional |
| min        | `Number`  | 最少勾選數量                                                             | optional |
| required   | `Boolean` | 必填                                                                     | false    |
