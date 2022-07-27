declare type FUNC = () => void;
export declare function debounce(fn: FUNC, wait: number, immediate?: boolean): (this: any, ...args: never) => void;
export {};
