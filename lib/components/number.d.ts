/**
 * 判断是否是数字
 * @param {number | string} num 数字
 * @returns {boolean} 布尔值
 */
export declare function isNumber(num: string | number): boolean;
/**
 * 数字转千分位
 * @param {number | string} num 数字
 * @returns {string} 千分位数字
 */
export declare function thousandth(num: string | number): string;
/**
 * 数字补0
 * @param { string | number } num 原数字
 * @param { number } len 总位数（总长度）
 * @returns {string} 返回补0后的字符串
 */
export declare function zeroFilling(num: string | number, len: number, check?: boolean): string;
