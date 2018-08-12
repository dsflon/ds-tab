# ds-tab ( Don't Need jQuery )


ds-tab.js は、jQueryを必要としないタブ機能のライブラリです。
- Target browser : IE9+
- IE9の場合は transition 無しでタブが表示されます。

___

# Install

```
npm i ds-tab -S
```

___

# Import

```
import DsTab from 'ds-tab';
```

___

# Constructor

```
new DsTab(element [, option]);
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|対象要素を指定します。<br>ex) ".tab"|
|option|Object|-|ex)<br> option = {<br> fadeSpeed: 100,<br> btnElm: "ul li a",<br> detailElm: "div"<br>}|


|Option|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|fadeSpeed|Number|0|表示スピードを調節できます。|
|btnElm|String|".tab_btn"<br>(“.tab”の場合)|ボタンとなる要素を指定できます。|
|detailElm|String|".tab_detail"<br>(“.tab”の場合)|内容となる要素を指定できます。|
___

# Method

|Method|Argument|Descroption|
|:-------|:--------|:------|
|Open( element )|String|element で指定したタブを開きます。|
|OpenEnd = function(){};|-|タブが開いた後に実行されます。|

___

# Demo

[https://dsflon.github.io/ds-tab/](https://dsflon.github.io/ds-tab/)

```
import DsTab from 'ds-tab';

let dsTab = new DsTab('.tab');

//

let dsTab2 = new DsTab(
    '.tab2',
    {
        fadeSpeed: 600
    }
);

dsTab2.Open( ".open" );

dsTab2.OpenEnd = function(){
    console.log("OpenEnd");
};
```
