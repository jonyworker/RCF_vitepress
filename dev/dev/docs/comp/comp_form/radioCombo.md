# Radio Combo

## 簡介

`Radio Combo` 元件為二選一的單選組合，使用者可以設定選項文字及必填星號提示。

## VSCode Snippet

```md
j還沒設定
```

## 元件程式碼

```javascript
<script>
    import radio-combo from './UI/RadioCombo.vue'
</script>

<radio-combo 
    :name="name"
    :value1="value1"
    :value2="value2"
    label-txt="Radio Combo標題"
></radio-combo>
```

### 樣式props
| prop name | type | 變數 | 功能 |
| :-- | :-- |:--| :--|
| 無 |  |  |  |


### 資料props
| prop name | type    | 功能                    | requried |
| :-------- | :------ |  :--------------------- | :------ |
| name      | `String`  |  傳資料用，同 html 屬性，指定送出去的該筆資料要用什麼名稱 | true |
| value1 | `String` | 左方欄位的值。傳資料用，同 html 屬性，指定送出去的該筆資料的值 | true |
| value2 | `String` | 右方欄位的值。傳資料用，同 html 屬性，指定送出去的該筆資料的值 | true |
| label-txt | `String` | 列表標題 | false |