'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.throttle =
  exports.debounce =
  exports.zeroFilling =
  exports.thousandth =
  exports.isNumber =
    void 0;
var funs_1 = require('./components/funs');
Object.defineProperty(exports, 'debounce', {
  enumerable: true,
  get: function () {
    return funs_1.debounce;
  },
});
Object.defineProperty(exports, 'throttle', {
  enumerable: true,
  get: function () {
    return funs_1.throttle;
  },
});
var number_1 = require('./components/number');
Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function () {
    return number_1.isNumber;
  },
});
Object.defineProperty(exports, 'thousandth', {
  enumerable: true,
  get: function () {
    return number_1.thousandth;
  },
});
Object.defineProperty(exports, 'zeroFilling', {
  enumerable: true,
  get: function () {
    return number_1.zeroFilling;
  },
});
