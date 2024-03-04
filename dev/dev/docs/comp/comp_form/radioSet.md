# Radio Set

## 簡介

`Radio Combo` 是以[Radio button](../basic/radiobutton.md) 為基礎搭建的單選列表元件，使用者可以直接取用元件並帶入資料就能渲染出選項。

## VSCode Snippet（未設定）

```md
jinput:email（未設定）
```

## 元件程式碼

```javascript
<script>
  import radio-set from './UI/RadioSet.vue'
</script>

<radioSet 
    :data="data"
    name="name"
    radio="left" 
    text="desc" 
    label-txt="列表標題"
></radioSet>
```

<!-- 圖片 -->
<!-- <div style="display: flex; margin-top: 22px;">
  <div style="flex: 1;">
    <img src="../../.vuepress/public/images/checkall_1.png">
  </div>
  <div style="flex: 1;">
    <img src="../../.vuepress/public/images/checkall_2.png">
  </div>
  <div style="flex: 1;">
    <img src="../../.vuepress/public/images/checkall_3.png">
  </div>
</div> -->

### 樣式props
| prop name | type   | 預設    | 說明                                             |
| :-------- | :----- | :------ | :---------------------------------------------- |
| radio     | `String` | `left`  | 單選框位置 `left`表示在標題左邊，`right`表示在標題右邊 | 
| text      | `String` | `title` | 單選框字體樣式。`title`表示文字只有標題，`desc`表示文字只有註解，`both`表示文字有標題也有註解 |

### 資料props
| prop name | type | 功能         | requried |
| :-------- | :--- |:-------------| :------ |
| data | Array | 傳入資料，需有標題`title(String)`, 敘述`desc(String)`, 值`value(String)` | true |
| label-txt | String | 列表標題 | false |
| required | Boolean | 必填 | optional |
| tatilHint | String | 提示字 `optional` | optional |