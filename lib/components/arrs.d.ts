declare type OBJ = {
    [key: string | number]: any;
};
/**
 * 数组转Tree
 * @param {*} items 数组
 * @param {*} options 字段指定与配置
 * @returns 返回值
 */
export declare const arrayToTree: (items: any[], options?: OBJ) => OBJ | any[];
/**
 * Tree转数组
 * @param {*} tree 原数据
 * @param {*} options 配置数据
 * @returns 返回值
 */
export declare const treeToArray: (tree: any[], options?: OBJ) => any[];
/**
 * 数组（对象）深度克隆
 * @param {*} obj
 * @returns
 */
export declare const deepClone: (obj: OBJ | any[]) => OBJ | any[];
/**
 * 在 Tree 中获取指定子id的祖级数据
 * @param {*} tree 原数据-Tree
 * @param {*} sonId 子id
 * @param {*} options 配置数据
 * @returns
 */
export declare const findParentTree: (tree: any[], sonId: number | string, options?: OBJ) => any[];
/**
 * 在数组中获取指定子id的祖级数据
 * @param {*} arr 原数据-数组
 * @param {*} sonId 子id
 * @param {*} options 配置数据
 * @returns
 */
export declare const findParentArr: (arr: any[], sonId: number | string, options?: OBJ) => any[];
/**
 * 数字数组，返回最大元素值
 * @param {(number | string)[]} arr
 * @returns { number }
 */
export declare const arrayMax: (arr: (number | string)[]) => number;
/**
 * 数字数组，返回最小元素值
 * @param {(number | string)[]} arr
 * @returns { number }
 */
export declare const arrayMin: (arr: (number | string)[]) => number;
export {};
