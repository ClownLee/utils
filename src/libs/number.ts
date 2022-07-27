export function isNumber(num: string | number): boolean {
    return (new RegExp(/^-?[0-9]+(.[0-9]+)?$/)).test(`${num}`);
} 

export function thousandth(num: string | number): string {
    num = `${num}`; // To String

    if(!(new RegExp(/^-?[0-9]+(.[0-9]+)?$/)).test(num)) {
        throw new Error('输入参数必须是数字或数字型字符串');
    }

    const numArr: Array<string> = num.split('.');
    numArr[0] = numArr[0].replace(/(?=\B(\d{3})+$)/g, ',');
    num = numArr.join('.');
    return num;
};