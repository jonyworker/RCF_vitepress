# Radio button

單選按鈕

## 基礎樣式

### Import

```jsx
import RadioButton from ''
```
```html
<radio 
    :data="formStore.radioArray"
    name="boxes"
    radio="left" text="desc" label-txt="三選一"
>
</radio> 
```



<!-- ![checkbox.png](Radio%20button%20e4e6a46ccd024801aa725229cf1dd270/checkbox.png)

![Frame 7.png](Radio%20button%20e4e6a46ccd024801aa725229cf1dd270/Frame_7.png)

![Frame 8.png](Radio%20button%20e4e6a46ccd024801aa725229cf1dd270/Frame_8.png)

![Frame 9.png](Radio%20button%20e4e6a46ccd024801aa725229cf1dd270/Frame_9.png)

![Frame 10.png](Radio%20button%20e4e6a46ccd024801aa725229cf1dd270/Frame_10.png)

![Frame 11.png](Radio%20button%20e4e6a46ccd024801aa725229cf1dd270/Frame_11.png) -->

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