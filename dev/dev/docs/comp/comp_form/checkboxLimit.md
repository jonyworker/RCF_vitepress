---
outline: deep
---

# Checkbox Limit <Badge type="info" text="複合元件" />

## 簡介

`Checkbox Limit` 是以 `Checkbox Limit Control` 與 `Checkbox Basic` 組合成的複合元件元件，開發人員者可依需求，自由設定最低與最多選擇數量。當使用者在選擇到達指定數量的後，系統會自動鎖定其他未被選中的選項，避免多餘的選擇。其中的 `Checkbox Limit Control` 是一個控制元件，是 `Checkbox Limit` 的專屬附屬元件，無法單獨使用。

下方提供範例程式碼，可有效了解其運作方式。

```
圖片
```

## 元件程式碼

::: code-group

```vue [Vue 3]
<script>
import InputLabel from "./UI/Form/InputLabel.vue";
import CheckboxLimitControl from "./UI/checkboxLimitCtrl.vue";
import checkBox from "./UI/Checkbox.vue";

const limitCheckOptions = ref([
  { title: "因為價格便宜", value: "v-option01", name: "limitOptions" },
  { title: "好友極力推薦", value: "v-option02", name: "limitOptions" },
  { title: "比較同類產品後決定", value: "v-option03", name: "limitOptions" },
  { title: "功能與設計符合需求", value: "v-option04", name: "limitOptions" },
  { title: "沒有多餘的耗材", value: "v-option05", name: "limitOptions" },
]);
const limitCheckedList = ref([]); // checked 的選項 v-model
const minCheck = ref(1); //設定最少選項
const maxCheck = ref(3); //設定最多選項
const checkboxes = ref([]); //ref變數
const isDisable = ref(); //  v-model 控制disable

const disabledControl = () => {
  if (isDisable.value) {
    checkboxes.value.forEach((item) => {
      if (item.isClick == false) {
        item.disabled = true;
      }
    });
  } else {
    checkboxes.value.forEach((item) => {
      item.disabled = false;
    });
  }
};
</script>

<template>
  <InputLabel>請選擇影響您購買本產品的原因</InputLabel>
  <CheckboxLimitControl
    :minCheck="minCheck"
    :maxCheck="maxCheck"
    v-model="limitCheckedList"
    v-model:isDisable="isDisable"
    :errorMsg="`最少要選擇 ${minCheck} 個選項喔`"
    :helperMsg="`請選擇最少 ${minCheck} 個，最多 ${maxCheck} 個選項`"
  >
    <div class="flex flex-col gap-2">
      <check-box
        ref="checkboxes"
        v-for="(item, index) in limitCheckOptions"
        :key="`${index}${item}`"
        :label="item.title"
        :descMsg="item.desc"
        :value="item.value"
        :name="item.name"
        position="prepend"
        v-model="limitCheckedList"
        @change="disabledControl()"
      ></check-box>
    </div>
  </CheckboxLimitControl>
</template>
```

```cmd [VSCode Snippet]
jcheck:limit
```

:::

:::warning
[Checkbox Basic 元件詳細設定請參照此連結](checkboxBasic)
:::

## 元件 props

#### Checkbox Limit Controlc 元件

| prop name  | type      | 功能                     | requried |
| :--------- | :-------- | :----------------------- | :------- |
| minCheck   | `Number`  | 設定最少選擇數量         | true     |
| maxCheck   | `Number`  | 設定最多選擇數量         | true     |
| checkboxes | `String`  | ref??                    | true     |
| isDisable  | `Boolean` | 控制選項是否為 Disable   | true     |
| errorMsg   | `Number`  | 前端格式驗證錯誤結果提示 | false    |
| helperMsg  | `Number`  | 輔助提示                 | false    |
