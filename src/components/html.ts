/**
 * html 标签转义
 * @param {*} html 
 * @returns 
 */
export const encode = (html: string): string => {
  if(typeof window === 'undefined') {
    throw new Error('Window 对象不存在，此方法只能在浏览器端使用');
  }
  let temp: any;
  temp = window.document.createElement("div");
  temp.textContent ? (temp.textContent = html) : (temp.innerText = html);
  const output: string = temp.innerHTML;
  temp = null;
  return output;
};

/**
 * html 标签反转义
 * @param {*} text 
 * @returns 
 */
export const decode = (text: string): string => {
  if(typeof window === 'undefined') {
    throw new Error('Window 对象不存在，此方法只能在浏览器端使用');
  }
  let temp: any;
  temp = window.document.createElement("div");
  temp.innerHTML = text;
  const output: string = temp.innerText || temp.textContent;
  temp = null;
  return output;
};
