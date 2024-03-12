# Radio button <Badge type="info" text="單一元件" />

## 簡介

`Radio button` 為單選元件。在表單中通常以複數的形式出現。使用者可以設定選項標題或增加選項輔助說明，或依需求決定讓勾選框位於選項標題左側或右側。 

## 元件程式碼

::: code-group

```vue [Vue]
<script setup>
    import radio-btn from './UI/From/RadioBtn.vue'
<script/>

<template>
    <radio-btn
        label="選項的標題"
        desc-msg="選項的註解"
        value="選項初始值(與資料庫對應)"
        name="選項名(資料庫欄位值)"
        position="勾選框位置"
        v-model="radioValue雙向綁定資料"
    >
    </radio-btn>
<template />
```

```cmd [VSCode Snippet]
j還沒設定
```
:::

## 元件 props

| prop name  | type     | 預設       | 說明                                                       | required |
| :--------- | :------- | :--------- | :---------------------------------------------- | :------- |
| label      | `String` | `選項標題` | 選項標題                                                   | false    |
| descMsg    | `String` | `null`     | 選項輔助說明                                               | false    |
| value      | `String` | `null`     | 選項初始值，與資料庫對應的值                               | false    |
| name       | `String` | `null`     | 選項名，資料庫欄位值                                       | false    |
| position   | `String` | `prepend`  | 勾選框位置 `prepend`表示在標題左邊，`append`表示在標題右邊 | false    |
| block      | `String` | `null`     | 選項標題與選項說明，換行顯示                               | false    |
| v-model | `any[]`  | `null`     | 與父層雙向綁定資料                                         | false    |


## 複合元件

使用迴圈渲染 `Radio button` 製作的單選列表。

## 元件程式碼

::: code-group

```vue [Vue]
<script setup>
    import radio-btn from './UI/From/RadioBtn.vue'
    const radioValue = ref([])

    const data = [
        {
            label: 'T恤',
            descMsg: '舒適的棉質T恤，適合日常穿著',
            value: 'tshirt',
            name: 'tshirt'
        },
        {
            label: '牛仔褲',
            descMsg: '經典的牛仔褲，適合休閒或正式場合穿著',
            value: 'jeans',
            name: 'jeans'
        },
        {
            label: '運動鞋',
            descMsg: '時尚舒適的運動鞋，適合全天穿著',
            value: 'sneakers',
            name: 'sneakers'
        }
    ]
<script/>

<template>
    <radio-btn
        v-for="(item, index) in data"
        label="item.選項的標題"
        desc-msg="item.選項的註解"
        value="item.選項初始值(與資料庫對應)"
        name="item.選項名(資料庫欄位值)"
        position="勾選框位置"
        v-model="radioValue雙向綁定資料"
    >
    </radio-btn>
<template />
```

```cmd [VSCode Snippet]
j還沒設定
```
:::