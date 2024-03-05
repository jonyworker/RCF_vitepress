# Input Wrap

## 簡介

`Input Wrap` 元件提供了一個輸入框的外框樣式集合，包含輸入框標題、必填星號提示、字數提示、輸入框外框樣式、錯誤訊息提示、幫助訊息提示。

## VSCode Snippet

```md
jinput:wrap
```

## 元件程式碼

```javascript
<script setup>
  import InputField from './UI/Form/InputField.vue'
</script>

<InputField
  for="對應input name"
  label="輸入框標題"
  required
  tailHint="optional"
  tailHint="charLimit"
  maxLength="最大字數限制"
  currentLength="總輸入字數提示"
  :valid="前端驗證結果(Boolean)"
  :errorMsg="前端格式驗證錯誤結果提示"
  :helperMsg="輸入框輸入輔助提示"
>

  <!-- 表單類型元件放置區塊 -->

</InputField>
```

## 元件 Props

| Prop Name     | type      | 預設  | 說明                                                        | required |
| :------------ | :-------- | :---- | :---------------------------------------------------------- | :------- |
| for           | `String`  | Null  | 對應輸入框 `input name`                                     | false    |
| label         | `String`  | Null  | 設定輸入框標題                                              | false    |
| required      | `Boolean` | false | 顯示必填星號提示                                            | false    |
| tailHint      | `String`  | Null  | 標題尾提示。`charLimit` 表示字數提示，`optional` 表示非必填 | false    |
| maxLength     | `String`  | Null  | 設定字數提示最大文字限制                                    | false    |
| currentLength | `Number`  | Null  | 顯示總輸入字數提示                                          | false    |
| valid         | `Boolean` | true  | 前端驗證結果（驗證失敗紅框顯示）                            | false    |
| errorMsg      | `String`  | Null  | 前端格式驗證錯誤結果提示                                    | false    |
| helperMsg     | `String`  | Null  | 輸入框輸入輔助提示                                          | false    |
