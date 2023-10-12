declare class Crypt {
    /**
     * Converts a JS string to an UTF-8 uint8array.
     *
     * @static
     * @param {String} str 16-bit unicode string.
     * @return {Uint8Array} UTF-8 Uint8Array.
     * @memberof Crypt
     */
    static stringToArrayBufferInUtf8(str: any): any;
    /**
     * Converts an UTF-8 uint8array to a JS string.
     *
     * @static
     * @param {Uint8Array} strBuffer UTF-8 Uint8Array.
     * @return {String} 16-bit unicode string.
     * @memberof Crypt
     */
    static utf8ArrayBufferToString(strBuffer: Uint8Array): any;
    /**
     * crypt a utf8 byteArray to base64 string
     *
     * @static
     * @param {Uint8Array} strBuffer UTF-8 Uint8Array.
     * @returns {String} base64 str
     * @memberof Crypt
     */
    static arrayBufferToBase64(strBuffer: Uint8Array): string;
    /**
     * crypt base64 stringa to utf8 byteArray
     *
     * @static
     * @param {String} base64 str
     * @returns {Uint8Array} strBuffer UTF-8 Uint8Array.
     * @memberof Crypt
     */
    static base64ToArrayBuffer(base64: any): Uint8Array;
}
export default Crypt;
