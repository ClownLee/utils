declare class SM4 {
    [x: string]: any;
    /**
     * Creates an instance of SM4.
     * @param {Object} config
     * @memberof SM4
     */
    constructor(config: {
        key: any;
        iv: null | undefined;
        mode: string;
        outType: string;
    });
    /**
     * general sm4 encrypt/decrypt algorithm for a 16 bytes block using roundKey
     *
     * @param {Uint32Array} blockData
     * @param {Uint32Array} roundKeys
     * @return {Uint32Array} return a 16 bytes cipher block
     * @memberof SM4
     */
    doBlockCrypt(blockData: ArrayLike<number>, roundKeys: number[]): Uint32Array;
    /**
     * spawn round key array for encrypt. reverse this key array when decrypt.
     * every round key's length is 32 bytes.
     * there are 32 round keys.
     * @return {Uint32Array}
     * @memberof SM4
     */
    spawnEncryptRoundKeys(): void;
    /**
     * left rotate x by y bits
     *
     * @param {*} x
     * @param {Number} y
     * @returns
     * @memberof SM4
     */
    rotateLeft(x: number, y: number): number;
    /**
     * L transform function for encrypt
     *
     * @param {Uint32Number} b
     * @returns {Uint32Number}
     * @memberof SM4
     */
    linearTransform1(b: number): number;
    /**
     * L' transform function for key expand
     *
     * @param {Uint32Number} b
     * @returns {Uint32Number}
     * @memberof SM4
     */
    linearTransform2(b: number): number;
    /**
     * τ transform function
     *
     * @param {Uint32Number} a
     * @returns {Uint32Number}
     * @memberof SM4
     */
    tauTransform(a: number): number;
    /**
     * mix replacement T transform for encrypt
     *
     * @param {Uint32Number} z
     * @returns {Uint32Number}
     * @memberof SM4
     */
    tTransform1(z: number): number;
    /**
     * mix replacement T transform for key expand
     *
     * @param {Uint32Number} z
     * @returns {Uint32Number}
     * @memberof SM4
     */
    tTransform2(z: number): number;
    /**
     * padding the array length to multiple of BLOCK
     *
     * @param {ByteArray} originalBuffer
     * @returns {ByteArray}
     * @memberof SM4
     */
    padding(originalBuffer: string | any[] | ArrayLike<number> | null): Uint8Array | null;
    /**
     * depadding the byte array to its original length
     *
     * @param {ByteArray} paddedBuffer
     * @returns {ByteArray}
     * @memberof SM4
     */
    dePadding(paddedBuffer: string | any[] | Uint8Array | null): string | any[] | Uint8Array | null;
    /**
     * exctract uint32 array block from uint8 array
     *
     * @param {Uint8Array} uint8Array
     * @param {Number} baseIndex
     * @returns {Uint32Array}
     * @memberof SM4
     */
    uint8ToUint32Block(uint8Array: number[] | Uint8Array | null, baseIndex?: number): Uint32Array;
    /**
     * encrypt the string plaintext
     *
     * @param {String} plaintext
     * @memberof SM4
     * @return {String} ciphertext
     */
    encrypt(plaintext: any): any;
    /**
     * decrypt the string ciphertext
     *
     * @param {String} ciphertext
     * @memberof SM4
     */
    decrypt(ciphertext: any): any;
}
export default SM4;
