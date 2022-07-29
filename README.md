# JS 工具函数库

## 1. 数字类

### 1.1. isNumber 判断变量是否是数字型

``` javascript
import { isNumber } from '@clownlee/utils';

console.log(isNumber('asd2345.fasd22')); // false
console.log(isNumber('2345.22')); // true
console.log(isNumber('2345')); // true
console.log(isNumber(2345)); // true
console.log(isNumber(2345.22)); // true
```

### 1.2. thousandth 数字型转千分位格式的字符串

``` javascript
import { thousandth } from '@clownlee/utils';

console.log(thousandth('2345.22')); // 2,345.22
console.log(thousandth('2345')); // 2,345
console.log(thousandth(2345)); // 2,345
console.log(thousandth(2345.22)); // 2,345.22
```

### 1.3. zeroFilling 数字型前补零

``` javascript
import { zeroFilling } from '@clownlee/utils';

console.log(zeroFilling('22', 5)); // 00022
console.log(zeroFilling(33, 6)); // 000033
```

## 2. HTML 标签转义，反转义类

### encode html元素转义

``` javascript
import { encode } from '@clownlee/utils';

const html = '<div><h1>哈哈哈哈</h1><h2>嘿嘿嘿嘿</h2></div>'
const text = encode(html)

// text = &lt;div&gt;&lt;h1&gt;哈哈哈哈&lt;/h1&gt;&lt;h2&gt;嘿嘿嘿嘿&lt;/h2&gt;&lt;/div&gt;
```

### decode html元素反转义

``` javascript
import { decode } from '@clownlee/utils';

const text = '&lt;div&gt;&lt;h1&gt;哈哈哈哈&lt;/h1&gt;&lt;h2&gt;嘿嘿嘿嘿&lt;/h2&gt;&lt;/div&gt;'
const html = decode(text)

// html = <div><h1>哈哈哈哈</h1><h2>嘿嘿嘿嘿</h2></div>
```

## 3. 数组类

### arrayToTree 数组转tree

``` javascript
import { arrayToTree } from '@clownlee/utils';

const arr = [
    { value: 1, label: 1, parant_id: undefined },
    { value: 2, label: 2, parant_id: 1 },        
    { value: 3, label: 3, parant_id: 1 },        
    { value: 4, label: 4, parant_id: 1 },        
    { value: 5, label: 5, parant_id: 1 },        
    { value: 6, label: 6, parant_id: 5 },        
    { value: 7, label: 7, parant_id: 5 },        
    { value: 8, label: 8, parant_id: undefined },
    { value: 9, label: 9, parant_id: undefined },
    { value: 10, label: 10, parant_id: 9 },      
    { value: 11, label: 11, parant_id: 9 }       
]

const tree = arrayToTree(arr, {
    idField: 'value',
    pidField: 'parant_id',
    childrenField: 'children'
})
```

### treeToArray tree转数组

``` javascript

import { treeToArray } from '@clownlee/utils';

const tree = [
    {value: 1, label: 1, children: [
        {value: 2, label: 2},
        {value: 3, label: 3},
        {value: 4, label: 4},
        {value: 5, label: 5, children: [
            {value: 6, label: 6},
            {value: 7, label: 7}
        ]},
    ]},
    {value: 8, label: 8},
    {value: 9, label: 9, children: [
        {value: 10, label: 10},
        {value: 11, label: 11}
    ]}
]

const arr = treeToArray(tree, {
    idField: 'value',
    pidField: 'parant_id',
    childrenField: 'children'
})

```

### findParentTree  在tree数组中找到指定值的父级元素
``` javascript

import { treeToArray } from '@clownlee/utils';

let tree = [
    {id: 1, label: 1, children: [
        {id: 2, label: 2},
        {id: 3, label: 3},
        {id: 4, label: 4},
        {id: 5, label: 5, children: [
        {id: 6, label: 6},
        {id: 7, label: 7, children: [
            {id: 12, label: 12, children: [
            {id: 13, label: 13},
            {id: 14, label: 14},
            {id: 15, label: 15, children: [
                {id: 17, label: 17},
            ]},
            {id: 16, label: 16},
            ]}
        ]}
        ]},
    ]},
    {id: 8, label: 8},
    {id: 9, label: 9, children: [
        {id: 10, label: 10},
        {id: 11, label: 11}
    ]}
]

const demo = findParentTree(tree, 17, {
    idField: 'id',
    childrenField: 'children'
})

console.log(demo)
/*
[
    { id: 1, label: 1, pid: undefined },
    { id: 5, label: 5, pid: 1 },
    { id: 7, label: 7, pid: 5 },
    { id: 12, label: 12, pid: 7 },
    { id: 15, label: 15, pid: 12 },
    { id: 17, label: 17, pid: 15 }
]
*/
```
### findParentArr 在pid数组中找到指定值的父级元素

``` javascript

import { findParentArr } from '@clownlee/utils';

let arr = [
    { value: 1, label: 1, parant_id: undefined },
    { value: 2, label: 2, parant_id: 1 },
    { value: 3, label: 3, parant_id: 1 },
    { value: 4, label: 4, parant_id: 1 },
    { value: 5, label: 5, parant_id: 1 },
    { value: 6, label: 6, parant_id: 5 },
    { value: 7, label: 7, parant_id: 5 },
    { value: 8, label: 8, parant_id: undefined },
    { value: 9, label: 9, parant_id: undefined },
    { value: 10, label: 10, parant_id: 9 },
    { value: 11, label: 11, parant_id: 9 }
]

const demo = findParentArr(arr, 11, {
    idField: 'value',
    pidField: 'parant_id'
})
console.log(demo)
/*
    [
    { value: 9, label: 9, parant_id: undefined },
    { value: 11, label: 11, parant_id: 9 }
    ]
*/
```

###  deepClone 数组对象深拷贝

``` javascript
import { deepClone } from '@clownlee/utils';
const newArr = deepClone(arr)
```

## 4. 防抖节流类

### debounce
### throttle
