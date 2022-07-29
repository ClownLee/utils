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

console.log(zeroFilling('2345.22', )); // 2,345.22
console.log(zeroFilling('2345')); // 2,345
console.log(zeroFilling(2345)); // 2,345
console.log(zeroFilling(2345.22)); // 2,345.22
```

## 2. HTML 标签转义，反转义类

### encode
### decode

## 3. 数组类

### arrayToTree
### treeToArray
### findParentTree
### findParentArr
###  deepClone

## 4. 防抖节流类

### debounce
### throttle
