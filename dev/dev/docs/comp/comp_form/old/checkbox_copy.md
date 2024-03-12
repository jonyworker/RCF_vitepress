# Checkbox <Badge type="info" text="單一元件" />

## 簡介

`Checkbox` 元件為基礎的勾選框，使用者可以選擇樣式並設定選項文字、必填星號提示及可勾選狀態。

## 元件程式碼

```javascript
<script>
    import check-box from "./UI/Checkbox.vue";

    const isCheck = ref(false);
</script>

<template>
    <check-box
        v-model="isCheck雙向綁定資料"
        position="勾選框位置"
        label="選項標題"
        desc="選項說明"
        inline
        block
    >
    </check-box>
</template>
```

<!-- - check: left / text: title
- check: left / text: both
- check: left / text: desc
- check: right/ text: both
- check: right/ text: title -->

### 樣式 props

| prop name | type      | 預設    | 說明                                                                                          |
| :-------- | :-------- | :------ | :-------------------------------------------------------------------------------------------- |
| check     | `String`  | `left`  | 勾選框位置 `left`表示在標題左邊，`right`表示在標題右邊                                        |
| text      | `String`  | `title` | 勾選欄字體樣式。`title`表示文字只有標題，`desc`表示文字只有註解，`both`表示文字有標題也有註解 |
| checkIcon | `String`  | `check` | 勾選框的顯示樣式。`check`顯示 ✓，`line`顯示－                                                 |
| disabled  | `Boolean` | `false` | 控制元件是否可以勾選，可在元件上設定`ref`控制                                                 |
| required  | `Boolean` | `false` | 顯示為必填                                                                                    |
| hasError  | `Boolean` | `false` | 必填時紅色框線提示                                                                            |

::: tip ❗ 注意
樣式 props 不可隨意混用
:::

::: tip
如要使用 required，需引用 checkbox.js 的`updateCheckbox(errorValue, checkValue)`函式  
在引用元件上加上`onChange`，可加上`hasError`改變樣式一起使用
:::

```html
//required checkbox example

<script setup>
  import check-box from "./UI/Checkbox.vue";
  import { updateCheckbox } from "./function/checkbox";
  import { ref } from "vue";

  const showError = ref(false);
  const isCheck = ref(false);
</script>

<template>
  <check-box
    check="left"
    text="both"
    v-model="isCheck"
    :required="true"
    :hasError="showError"
    @change="updateCheckbox(showError, isCheck)"
  ></check-box>
</template>
```

### 資料設定

| prop name | type      | 功能                                                     | requried |
| :-------- | :-------- | :------------------------------------------------------- | :------- |
| name      | `String`  | 傳資料用，同 html 屬性，指定送出去的該筆資料要用什麼名稱 | true     |
| value     | `String`  | 傳資料用，同 html 屬性，指定送出去的該筆資料的值         | true     |
| isClick   | `Boolean` | 勾選時為`true`，反之為`false`，可在元件上設定`ref`取值   | false    |

### Slot

| v-slot    | 功能         |
| :-------- | :----------- |
| `default` | 填入大標題   |
| `desc`    | 填入註解內容 |

**複合元件**  
[Checkbox 全選](../compo/checkAll.md)  
[Checkbox 限制勾選](../compo/checkLimit.md)
