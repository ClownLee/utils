"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thousandth = exports.isNumber = void 0;
function isNumber(num) {
    return (new RegExp(/^-?[0-9]+(.[0-9]+)?$/)).test("".concat(num));
}
exports.isNumber = isNumber;
function thousandth(num) {
    num = "".concat(num); // To String
    if (!(new RegExp(/^-?[0-9]+(.[0-9]+)?$/)).test(num)) {
        throw new Error('输入参数必须是数字或数字型字符串');
    }
    var numArr = num.split('.');
    numArr[0] = numArr[0].replace(/(?=\B(\d{3})+$)/g, ',');
    num = numArr.join('.');
    return num;
}
exports.thousandth = thousandth;
;
