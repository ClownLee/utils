/**
 * 判断是否是数字
 * @param {number | string} num 数字
 * @returns {boolean} 布尔值
 */
export function isNumber(num: string | number): boolean {
  return new RegExp(/^-?[0-9]+(.[0-9]+)?$/).test(`${num}`);
}

/**
 * 数字转千分位
 * @param {number | string} num 数字
 * @returns {string} 千分位数字
 */
export function thousandth(num: string | number): string {
  num = `${num}`; // To String

  if (!isNumber(num)) {
    throw new Error('输入参数必须是数字或数字型字符串');
  }

  const numArr: string[] = num.split('.');
  numArr[0] = numArr[0].replace(/(?=\B(\d{3})+$)/g, ',');
  num = numArr.join('.');
  return num;
}
