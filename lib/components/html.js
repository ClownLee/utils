'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.decode = exports.encode = void 0;
/**
 * html 标签转义
 * @param {*} html
 * @returns
 */
var encode = function (html) {
  if (typeof window === 'undefined') {
    throw new Error('Window 对象不存在，此方法只能在浏览器端使用');
  }
  var temp;
  temp = window.document.createElement('div');
  temp.textContent ? (temp.textContent = html) : (temp.innerText = html);
  var output = temp.innerHTML;
  temp = null;
  return output;
};
exports.encode = encode;
/**
 * html 标签反转义
 * @param {*} text
 * @returns
 */
var decode = function (text) {
  if (typeof window === 'undefined') {
    throw new Error('Window 对象不存在，此方法只能在浏览器端使用');
  }
  var temp;
  temp = window.document.createElement('div');
  temp.innerHTML = text;
  var output = temp.innerText || temp.textContent;
  temp = null;
  return output;
};
exports.decode = decode;
