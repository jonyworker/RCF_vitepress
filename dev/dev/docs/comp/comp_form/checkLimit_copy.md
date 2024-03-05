# Checkbox 限制勾選 <Badge type="info" text="複合元件" />

## 簡介

`Checkbox Limit`是以 [Checkbox](../basic/checkbox.md) 為基礎的限制勾選列表元件，使用者可以選擇樣式並設定最大或最少勾選數、必填星號提示。當使用者在選擇指定數量的欄位後，系統會自動鎖定其他未被選中的欄位，防止在超出指定數量的情況下進行多餘的選擇。

## VSCode Snippet

```md
j還沒設定
```

## 元件程式碼

```javascript
<script>
  import check-limit from './UI/CheckboxLimit.vue'
</script>

<check-limit 
  :data="data"  
  text="desc"  
  :max="4" :min="2"  
  label-txt="勾選列表標題"  
  error-less="選取過少提示字"  
  required  
></check-limit>
```

<div style="display: flex; margin-top: 22px;">
  <div style="flex: 1;">
    <img src="../../.vuepress/public/images/checklimit_1.png">
  </div>
  <div style="flex: 1;">
    <img src="../../.vuepress/public/images/checklimit_2.png">
  </div>
  <div style="flex: 1;">
    <img src="../../.vuepress/public/images/checklimit_3.png">
  </div>
</div>

### 樣式props

| prop name | type   | 預設    | 說明                                             |
| :-------- | :----- | :------ | :---------------------------------------------- |
| check       | `String` | `left`  | 勾選框位置 `left`表示在標題左邊，`right`表示在標題右邊 | 
| text        | `String` | `title` | 子勾選欄字體樣式。`title`表示文字只有標題，`desc`表示文字只有註解，`both`表示文字有標題也有註解 |

### 資料props
| prop name | type    | 功能                      | requried |
| :-------- | :------ |:------------------------- | :----- |
| data | `Array` | 傳入資料，需有標題`title(String)`, 註解`desc(String)`, 值`value(String)` | true |
| v-model | `Array`  | 取得已勾選的值                        |  false |
| label-txt | `String` | 列表標題 | false |
| error-less | `String` | 少於勾選數量警告 | optional |
| max | `Number` | 最多勾選數量 | optional |
| min | `Number` | 最少勾選數量 | optional |
| required | `Boolean` | 必填 | false |