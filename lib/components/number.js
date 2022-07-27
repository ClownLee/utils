'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.zeroFilling = exports.thousandth = exports.isNumber = void 0;
/**
 * 判断是否是数字
 * @param {number | string} num 数字
 * @returns {boolean} 布尔值
 */
function isNumber(num) {
  return new RegExp(/^-?[0-9]+(.[0-9]+)?$/).test(''.concat(num));
}
exports.isNumber = isNumber;
/**
 * 数字转千分位
 * @param {number | string} num 数字
 * @returns {string} 千分位数字
 */
function thousandth(num) {
  if (!isNumber(num)) {
    throw new Error('输入参数必须是数字或数字型字符串');
  }
  num = ''.concat(num); // To String
  var numArr = num.split('.');
  numArr[0] = numArr[0].replace(/(?=\B(\d{3})+$)/g, ',');
  num = numArr.join('.');
  return num;
}
exports.thousandth = thousandth;
/**
 * 数字补0
 * @param { string | number } num 原数字
 * @param { number } len 总位数（总长度）
 * @returns {string} 返回补0后的字符串
 */
function zeroFilling(num, len) {
  if (!isNumber(num)) {
    throw new Error('输入参数必须是数字或数字型字符串');
  }
  num = ''.concat(num);
  var currLen = num.length;
  if (currLen < len) {
    num = '0'.concat(num);
    return zeroFilling(num, len);
  }
  return num;
}
exports.zeroFilling = zeroFilling;
