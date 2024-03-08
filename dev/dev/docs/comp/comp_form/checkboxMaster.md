---
outline: deep
---

# Checkbox Master <Badge type="info" text="單一元件" />

## 簡介

`Checkbox Master` 是一個控制器元件， [`Checkbox Select All`](checkboxSelectAll.md) 元件的附屬元件，不適合單獨使用；專門用來控制「全部選取」或是「全部取消」其附屬的 `Checkbox Basic` 選項。

```
圖片
```

## 元件程式碼

::: code-group

```vue [Vue]
<script>
import JCheckBoxMaster from "./UI/checkBoxMaster.vue";
</script>

<template>
  <j-checkBoxMaster
    label="選項標題"
    descMsg="選項輔助說明"
    :checkStatus="Checkbox Master 選取狀態"
    @click="針對選取項目的控制方法;"
  ></j-checkBoxMaster>
</template>
```

```cmd [VSCode Snippet]
jcheck:master
```

:::

## 元件 props

| prop name   | type     | 預設        | 說明                                                                                                                                                     | required |
| :---------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| label       | `String` | `選項標題`  | 選項標題                                                                                                                                                 | false    |
| descMsg     | `String` | `null`      | 選項輔助說明                                                                                                                                             | false    |
| block       | `String` | `null`      | 選項標題與選項說明，換行顯示                                                                                                                             | false    |
| checkStatus | `String` | `checkNone` | `Checkbox Master` 選取狀態。`checkNone`表示沒有任何選項被選取狀態，`indeterminate`表示選擇選項一個以上，未達全選狀態，`checkAll`表示全部選項被選取狀態。 | true     |
