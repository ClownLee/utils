import { debounce, throttle } from './components/funs';
import { isNumber, thousandth, zeroFilling } from './components/number';
import { encode, decode } from './components/html';
import { arrayToTree, treeToArray, findParentTree, findParentArr, deepClone  } from './components/arrs';

const html = '<div><h1>哈哈哈哈</h1><h2>嘿嘿嘿嘿</h2></div>'
const text = encode(html)
console.log(text);

export { isNumber, thousandth, zeroFilling, debounce, throttle, encode, decode, arrayToTree, treeToArray, findParentTree, findParentArr, deepClone };
