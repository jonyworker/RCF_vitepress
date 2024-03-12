# Radio Combo

## 簡介

`Radio Combo` 元件為兩個選項的的單選組合，使用者可以設定選項標題或增加選項輔助說明。

## VSCode Snippet

::: code-group

```vue [Vue]
<script>
    import radio-combo from './UI/RadioCombo.vue'
    const comboArray = ref([])
</script>

<template>
    <radio-combo 
    label1="左側選項標題"
    label2="右側選項標題"
    value1="左側選項初始值(與資料庫對應)"
    value2="右側選項初始值(與資料庫對應)"
    name="選項名(資料庫欄位位置)"
    v-model="comboArray雙向綁定資料"
    ></radio-combo>
<template/>
```

```cmd [VSCode Snippet]
j還沒設定
```
:::

### props

| prop name | type    | 功能                    | requried |
| :-------- | :------ |  :--------------------- | :------ |
| label1 | `String` | 左側選項標題               | true |
| label2 | `String` | 右側選項標題               | true |
| value1 | `String` | 左側選項初始值，同 html 屬性，與資料庫對應 | true |
| value2 | `String` | 右側選項初始值，同 html 屬性，與資料庫對應 | true |
| name      | `String`  |  選項名，資料庫欄位值  | true |
| v-model      | `any[]`  |  與父層雙向綁定資料 | true |
