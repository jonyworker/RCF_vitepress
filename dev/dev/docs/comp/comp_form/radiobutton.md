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
| prop name | type | 變數 | 功能 |
| :-- | :-- |:--| :--|
| radio | String | `left (default)` `right` | 單選鈕位置 |
| text | String | `title (default)` `desc` `both` | 字體樣式 |

::: tip ❗注意
 樣式props不可隨意混用 
:::

### 資料props
| prop name | type | 變數 | 功能 |
| :-- | :-- |:--| :--|
| name | String | 自行設定 | 傳遞資料用，同html屬性 |
| value | String | 自行設定 | 傳遞資料用，同html屬性 |
| checked | Boolean | `true` `false (default)` | 是否勾選 |

## 複合元件
[Radio Combo](../compo/radioCombo.md)  
[Radio Set](../compo/radioSet.md)