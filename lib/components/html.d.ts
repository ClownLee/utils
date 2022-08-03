import { FUNC, OBJ } from './types';
/**
 * html 标签转义
 * @param {*} html
 * @returns
 */
export declare const encode: (html: string) => string;
/**
 * html 标签反转义
 * @param {*} text
 * @returns
 */
export declare const decode: (text: string) => string;
/**
 * 懒加载（无限上拉加载）
 * @param {FUNC} fn 回调方法
 * @param {Element} signId
 * @param {Element} containId
 * @returns {OBJ}
 */
export declare const lazyLoading: (fn: FUNC, signId: Element, containId: Element) => OBJ;
