---
outline: deep
---

# Checkbox SelectAll <Badge type="info" text="複合元件" />

## 簡介

`Checkbox SelectAll` 是以 `CheckBox Master` 與 `Checkbox Basic` 組合成的複合元件，常用在 `table 表格` 中。提供使用者「一次全部選取」或是「一次全部取消」功能。本元件提供了基礎的互動設定。其中的 `Checkbox Master` 是一個控制器元件， 是 `Checkbox Select All` 的專屬附屬元件，無法單獨使用。

```
示意圖片（未）
```

## 元件程式碼

::: code-group

```vue [Vue]
<script>
import JCheckBoxMaster from "./UI/checkBoxMaster.vue";
import JCheckbox from "./UI/From/CheckboxBasic.vue";

// 原始資料
const checkOptions = ref([
  { title: "Option1", value: "Option01", name: "checkOption" },
  { title: "Option2", value: "Option02", name: "checkOption" },
  { title: "Option3", value: "Option03", name: "checkOption" },
  { title: "Option4", value: "Option04", name: "checkOption" },
  { title: "Option5", value: "Option05", name: "checkOption" },
]);

// v-model 資料
const checkedList = ref([]);

const computedCheckOptions = computed(() => {
  return checkOptions.value.map((element) => {
    return element.value;
  });
});

const masterCheckboxStatus = computed(() => {
  if (
    checkedList.value.length > 0 &&
    checkedList.value.length < checkOptions.value.length
  ) {
    return "indeterminate";
  }
  if (checkedList.value.length == checkOptions.value.length) {
    return "checkAll";
  }
});

// 控制 checkedList 全選或取消全選
const changeCheckedListContent = () => {
  if (checkedList.value.length < checkOptions.value.length) {
    checkedList.value = [...computedCheckOptions.value];
  } else {
    checkedList.value = [];
  }
};
</script>

<template>
  <j-checkBoxMaster
    label="點我全選或全取消"
    :checkStatus="masterCheckboxStatus"
    @click="changeCheckedListContent()"
  ></j-checkBoxMaster>

  <j-checkbox
    v-for="(item, index) in checkOptions"
    :key="item.index"
    :label="item.title"
    :descMsg="item.desc"
    :value="item.value"
    :name="item.name"
  ></j-checkbox>
</template>
```

```cmd [VSCode Snippet]
jcheck:all
```

:::

## 元件 props

#### Checkbox Master 元件

| prop name   | type     | 預設        | 說明                                                                                                                                                     | required |
| :---------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| label       | `String` | `選項標題`  | 選項標題                                                                                                                                                 | false    |
| descMsg     | `String` | `null`      | 選項輔助說明                                                                                                                                             | false    |
| block       | `String` | `null`      | 選項標題與選項說明，換行顯示                                                                                                                             | false    |
| checkStatus | `String` | `checkNone` | `Checkbox Master` 選取狀態。`checkNone`表示沒有任何選項被選取狀態，`indeterminate`表示選擇選項一個以上，未達全選狀態，`checkAll`表示全部選項被選取狀態。 | true     |
| value       | `String` | `null`      | 選項初始值，與資料庫對應的值                                                                                                                             | false    |
| name        | `String` | `null`      | 選項名，資料庫欄位值                                                                                                                                     | false    |
| position    | `String` | `prepend`   | 勾選框位置 `prepend`表示在標題左邊，`append`表示在標題右邊                                                                                               | false    |
| modelValue  | `any[]`  | `null`      | 與父層雙向綁定資料                                                                                                                                       | false    |

#### Checkbox Basic 元件

| prop name   | type     | 預設        | 說明                                                                                                                                                     | required |
| :---------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| label       | `String` | `選項標題`  | 選項標題                                                                                                                                                 | false    |
| descMsg     | `String` | `null`      | 選項輔助說明                                                                                                                                             | false    |
| block       | `String` | `null`      | 選項標題與選項說明，換行顯示                                                                                                                             | false    |
| checkStatus | `String` | `checkNone` | `Checkbox Master` 選取狀態。`checkNone`表示沒有任何選項被選取狀態，`indeterminate`表示選擇選項一個以上，未達全選狀態，`checkAll`表示全部選項被選取狀態。 | true     |
| value       | `String` | `null`      | 選項初始值，與資料庫對應的值                                                                                                                             | false    |
| name        | `String` | `null`      | 選項名，資料庫欄位值                                                                                                                                     | false    |
| position    | `String` | `prepend`   | 勾選框位置 `prepend`表示在標題左邊，`append`表示在標題右邊                                                                                               | false    |
| modelValue  | `any[]`  | `null`      | 與父層雙向綁定資料                                                                                                                                       | false    |
