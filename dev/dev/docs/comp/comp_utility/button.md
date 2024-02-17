# Button <Badge type="info" text="單一元件" />

![select component](../../.vuepress/public/select.png)

## 簡介

`Button` 元件可擴展 icon 與大小

## VSCode Snippet（無）

```
還沒做
```

## 元件程式碼

```javascript
<template>
  <Button
    size="base"
    intent="primary"
    btnType="filled"
    borderRound="pill"
    btnWidth="full"
    prependIcon="mdi:email-outline"
    appendIcon="mdi:email-outline"
    icon="mdi:email-outline"
  >
    按鈕文字
  </Button>
</template>
```

## 元件 Props

| Prop Name   | type   | 預設         | 說明                                                                    | required |
| :---------- | :----- | :----------- | :---------------------------------------------------------------------- | :------- |
| size        | String | xl           | 按鈕大小設定。參數： `xs` `sm` `base` `lg` `lg`                         | true     |
| intent      | String | 'primary'    | 使用目的顏色選擇。參數： `primary` `secondary` `success` `danger`       | false    |
| btnType     | String | 'filled'     | 按鈕填色方式。參數： `filled` `outline` `text`                          | false    |
| borderRound | String | 'md'         | 邊框圓角。參數： `none` `base` `md` `lg` `pill`                         | false    |
| btnWidth    | String | 'fit'        | 按鈕寬度。參數： `fit` `full`                                           | false    |
| prependIcon | String | 與 size 連動 | 前置 icon，有值時才會顯示。請透過[連結](https://icones.js.org/)查詢更換 | false    |
| appendIcon  | String | 與 size 連動 | 後置 icon，有值時才會顯示。請透過[連結](https://icones.js.org/)查詢更換 | false    |
| icon        | String | 與 size 連動 | icon button 時使用，不得與 `prependIcon` `appendIcon` 連用              | false    |
