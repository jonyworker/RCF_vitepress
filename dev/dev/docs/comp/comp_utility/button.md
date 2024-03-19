# Button <Badge type="info" text="單一元件" />

## 簡介

`Button` 元件相較於原始 HTML 按鈕，能夠自由在按鈕文字兩旁添加 icon 以及變更填色方式、外框和尺寸。

## VSCode Snippet

```
jbutton
```

## 元件程式碼

```javascript
<template>
  <Button
    size="按鈕大小設定"
    intent="使用目的顏色"
    btnType="按鈕填色方式"
    borderRound="邊框圓角半徑"
    btnWidth="按鈕寬度"
    prependIcon="前置icon"
    appendIcon="後置icon"
    icon="icon button使用"
  >
    按鈕文字。例："確認上傳"
  </Button>
</template>
```

## 元件 Props

| Prop Name   | type   | 預設             | 說明                                                                                                                | required |
| :---------- | :----- | :--------------- | :------------------------------------------------------------------------------------------------------------------ | :------- |
| size        | String | xl               | 按鈕大小設定。`xs` 高 32px，`sm` 高 36px，`base` 高 40px，`lg` 高 44px，`xl` 高 48px                                | true     |
| intent      | String | 'primary'        | 使用目的顏色選擇。參數： `primary` `secondary` `success` `danger`                                                   | false    |
| btnType     | String | 'filled'         | 按鈕填色方式。`filled` 表示填色按鈕，`outline` 表示外框按鈕，`text` 表示文字按鈕                                    | false    |
| borderRound | String | 'md'             | 控制邊框圓角半徑。`none` 表示為直角， `base` 圓角半徑 4px，`md` 圓角半徑 6px，`lg` 圓角半徑 8px， `pill` 膠囊型外觀 | false    |
| btnWidth    | String | 'fit'            | 按鈕寬度。`fit` 表示寬度隨文字內容多寡伸縮 ，`full` 表示寬度 100% 符合容器大小                                      | false    |
| prependIcon | String | 大小與 size 連動 | 前置 icon，有值時才會顯示。請透過[連結](https://icones.js.org/)查詢更換                                             | false    |
| appendIcon  | String | 大小與 size 連動 | 後置 icon，有值時才會顯示。請透過[連結](https://icones.js.org/)查詢更換                                             | false    |
| icon        | String | 與 size 連動     | icon button 時使用，不得與 `prependIcon` `appendIcon` 連用                                                          | false    |
