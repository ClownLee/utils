"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazyLoading = exports.decode = exports.encode = void 0;
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
/**
 * 懒加载（无限上拉加载）
 * @param {FUNC} fn 回调方法
 * @param {Element} signId
 * @param {Element} containId
 * @returns {OBJ}
 */
var lazyLoading = function (fn, signId, containId) {
    var io = new IntersectionObserver(function (e) {
        if (e[0].isIntersecting)
            fn();
    }, {
        root: containId,
        threshold: [0.9],
    });
    var attrs = {
        /**
         * 开始观察
         */
        observe: function () {
            io.observe(signId);
        },
        /**
         * 停止观察
         */
        unobserve: function () {
            io.unobserve(signId);
        },
        /**
         * 关闭观察器
         */
        disconnect: function () {
            io.disconnect();
        },
    };
    // attrs.observe();
    return attrs;
};
exports.lazyLoading = lazyLoading;
