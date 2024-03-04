# Radio button <Badge type="info" text="單一元件" />

## 簡介

`Radio button` 元件為基礎的單選框。 

## VSCode Snippet

```md
j還沒設定
```

## 元件程式碼

```javascript
import radio-btn from ''
```
```javascript
<radio 
    :data="formStore.radioArray"
    name="列表名稱"
    radio="left" text="desc" 
    label-txt="三選一"
>
</radio> 
```

<div style="display: flex;">
    <div>
        圖片
    </div>
    <div>
        <ul>
            <li>
                check: left / text: title
            </li>
            <li>
                check: left / text: both
            </li>
            <li>
                check: left / text: desc
            </li>
            <li>
                check: right/ text: both
            </li>
            <li>
                check: right/ text: title
            </li>
        </ul>
    </div>
</div>

<!-- - check: left / text: title
- check: left / text: both
- check: left / text: desc
- check: right/ text: both
- check: right/ text: title -->

### 樣式props
| prop name | type   | 預設    | 說明                                             |
| :-------- | :----- | :------ | :---------------------------------------------- |
| radio     | `String` | `left`  | 單選框位置 `left`表示在標題左邊，`right`表示在標題右邊 | 
| text      | `String` | `title` | 單選框字體樣式。`title`表示文字只有標題，`desc`表示文字只有註解，`both`表示文字有標題也有註解 |
| checked   | `Boolean` | `false` | 可控制選擇狀態，`true`為選擇，`false`為未選擇 |

::: tip ❗注意
 樣式props不可隨意混用 
:::

### 資料props
| prop name | type   |  功能      | requried |
| :-------- | :----- |:---------- | :------ |
| name      | `String` |  傳遞資料用，同html屬性，指定送出去的該筆資料要用什麼名稱 | true |
| v-model     | `String` |  傳遞資料用，同html `value`屬性，指定送出去的該筆資料的值 | true |

## 複合元件
[Radio Combo](./radioCombo.md)  
[Radio Set](./radioSet.md)