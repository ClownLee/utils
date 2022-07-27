declare type FUNC = (...args: any) => void;
/**
 * 防抖函数
 * @param {FUNC} fn 回调函数
 * @param {number} wait 等待时间
 * @param {boolean} immediate 第一次是否不等待立即执行
 * @returns {FUNC}
 */
export declare function debounce(fn: FUNC, wait: number, immediate?: boolean): FUNC;
/**
 * 节流函数
 * @param {FUNC} fn 回调函数
 * @param {number} wait 等待时间
 * @returns {FUNC}
 */
export declare function throttle(fn: FUNC, wait: number): FUNC;
export {};
