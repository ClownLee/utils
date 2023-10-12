'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var base64_js_1 = require('base64-js');
var Crypt = /** @class */ (function () {
  function Crypt() {}
  /**
   * Converts a JS string to an UTF-8 uint8array.
   *
   * @static
   * @param {String} str 16-bit unicode string.
   * @return {Uint8Array} UTF-8 Uint8Array.
   * @memberof Crypt
   */
  Crypt.stringToArrayBufferInUtf8 = function (str) {
    // if not browser env, then require node.js's util. otherwise just use window's
    var TextEncoder =
      typeof window === 'undefined'
        ? require('util').TextEncoder
        : window.TextEncoder;
    // always utf-8
    var encoder = new TextEncoder();
    return encoder.encode(str);
  };
  /**
   * Converts an UTF-8 uint8array to a JS string.
   *
   * @static
   * @param {Uint8Array} strBuffer UTF-8 Uint8Array.
   * @return {String} 16-bit unicode string.
   * @memberof Crypt
   */
  Crypt.utf8ArrayBufferToString = function (strBuffer) {
    // if not browser env, then require node.js's util. otherwise just use window's
    var TextDecoder =
      typeof window === 'undefined'
        ? require('util').TextDecoder
        : window.TextDecoder;
    var decoder = new TextDecoder('utf-8');
    return decoder.decode(strBuffer);
  };
  /**
   * crypt a utf8 byteArray to base64 string
   *
   * @static
   * @param {Uint8Array} strBuffer UTF-8 Uint8Array.
   * @returns {String} base64 str
   * @memberof Crypt
   */
  Crypt.arrayBufferToBase64 = function (strBuffer) {
    return (0, base64_js_1.fromByteArray)(strBuffer);
  };
  /**
   * crypt base64 stringa to utf8 byteArray
   *
   * @static
   * @param {String} base64 str
   * @returns {Uint8Array} strBuffer UTF-8 Uint8Array.
   * @memberof Crypt
   */
  Crypt.base64ToArrayBuffer = function (base64) {
    return (0, base64_js_1.toByteArray)(base64);
  };
  return Crypt;
})();
exports.default = Crypt;
