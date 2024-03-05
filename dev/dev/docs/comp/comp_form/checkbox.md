---
outline: deep
---

# Checkbox:basic（新編） <Badge type="info" text="單一元件" />

## 簡介

`Checkbox` 勾選框元件，通常用作複選，在表單中通常以複數的形式出現。基礎的勾選框，使用者可以設定選項標題，並且依需求決定讓勾選框位於選項標題左側或右側。

```
圖片
```

## 元件程式碼

::: code-group

```javascript [Vue]
<script>
    import check-box from "./UI/Checkbox.vue";
    const isCheck = ref(false);
</script>

<template>
    <check-box
        v-model="isCheck雙向綁定資料"
        position="勾選框位置"
        label="選項標題"
        desc-msg="選項說明"
        inline
        block
    >
    </check-box>
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
jcheck
```

:::

## 元件 props

| prop name | type     | 預設       | 說明                                                   |
| :-------- | :------- | :--------- | :----------------------------------------------------- |
| position  | `String` | `left`     | 勾選框位置 `left`表示在標題左邊，`right`表示在標題右邊 |
| label     | `String` | `選項標題` | 勾選欄選項標題                                         |
| descMsg   | `String` | `null`     | 勾選欄選項說明                                         |
| inline    | `String` | `inline`   | 選項標題與選項說明，成一列顯示                         |
| block     | `String` | `null`     | 選項標題與選項說明，換行顯示                           |
