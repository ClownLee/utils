"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
function debounce(fn, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timer;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer)
            clearTimeout(timer);
        if (immediate && !timer) {
            fn.apply(this, args);
        }
        timer = setTimeout(function () {
            return fn.apply(_this, args);
        }, wait);
    };
}
exports.debounce = debounce;
