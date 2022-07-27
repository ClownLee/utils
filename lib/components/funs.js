'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.throttle = exports.debounce = void 0;
/**
 * 防抖函数
 * @param {FUNC} fn 回调函数
 * @param {number} wait 等待时间
 * @param {boolean} immediate 第一次是否不等待立即执行
 * @returns {FUNC}
 */
function debounce(fn, wait, immediate) {
  if (immediate === void 0) {
    immediate = false;
  }
  var timer;
  return function () {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (timer) clearTimeout(timer);
    if (immediate && !timer) {
      fn.apply(this, args);
    }
    timer = setTimeout(function () {
      return fn.apply(_this, args);
    }, wait);
  };
}
exports.debounce = debounce;
/**
 * 节流函数
 * @param {FUNC} fn 回调函数
 * @param {number} wait 等待时间
 * @returns {FUNC}
 */
function throttle(fn, wait) {
  var timer;
  return function () {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (!timer) {
      timer = setTimeout(function () {
        if (timer) clearTimeout(timer);
        fn.apply(_this, args);
      }, wait);
    }
  };
}
exports.throttle = throttle;
