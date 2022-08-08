
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/md5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (process,global){
"use strict";
cc._RF.push(module, 'c22711sJV5Hl6M0PefWx2sK', 'md5');
// _smartfox/gui/md5.js

"use strict";

/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
if (typeof global == undefined) window.global = {};

(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};

  if (root.JS_MD5_NO_WINDOW) {
    WINDOW = false;
  }

  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;

  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }

  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
  var blocks = [],
      buffer8;

  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }

  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }
  /**
   * @method hex
   * @memberof md5
   * @description Output hash as hex string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} Hex string
   * @example
   * md5.hex('The quick brown fox jumps over the lazy dog');
   * // equal to
   * md5('The quick brown fox jumps over the lazy dog');
   */

  /**
   * @method digest
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.digest('The quick brown fox jumps over the lazy dog');
   */

  /**
   * @method array
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.array('The quick brown fox jumps over the lazy dog');
   */

  /**
   * @method arrayBuffer
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
   */

  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.buffer('The quick brown fox jumps over the lazy dog');
   */

  /**
   * @method base64
   * @memberof md5
   * @description Output hash as base64 string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} base64 string
   * @example
   * md5.base64('The quick brown fox jumps over the lazy dog');
   */


  var createOutputMethod = function createOutputMethod(outputType) {
    return function (message) {
      return new Md5(true).update(message)[outputType]();
    };
  };
  /**
   * @method create
   * @memberof md5
   * @description Create Md5 object
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.create();
   */

  /**
   * @method update
   * @memberof md5
   * @description Create and update Md5 object
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.update('The quick brown fox jumps over the lazy dog');
   * // equal to
   * var hash = md5.create();
   * hash.update('The quick brown fox jumps over the lazy dog');
   */


  var createMethod = function createMethod() {
    var method = createOutputMethod('hex');

    if (NODE_JS) {
      method = nodeWrap(method);
    }

    method.create = function () {
      return new Md5();
    };

    method.update = function (message) {
      return method.create().update(message);
    };

    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }

    return method;
  };

  var nodeWrap = function nodeWrap(method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");

    var nodeMethod = function nodeMethod(message) {
      if (typeof message === 'string') {
        return crypto.createHash('md5').update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw ERROR;
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }

      if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };

    return nodeMethod;
  };
  /**
   * Md5 class
   * @class Md5
   * @description This is internal class.
   * @see {@link md5.create}
   */


  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }

    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }
  /**
   * @method update
   * @memberof Md5
   * @instance
   * @description Update hash
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @see {@link md5.update}
   */


  Md5.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }

    var notString = typeof message != 'string';

    if (notString) {
      if (message === null || message === undefined) {
        throw ERROR;
      } else if (message.constructor === root.ArrayBuffer) {
        message = new Uint8Array(message);
      }
    }

    var length = message.length;

    if (notString) {
      if (typeof length !== 'number' || !Array.isArray(message) && !(ARRAY_BUFFER && ArrayBuffer.isView(message))) {
        throw ERROR;
      }
    }

    var code,
        index = 0,
        i,
        blocks = this.blocks;
    var buffer8 = this.buffer8;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            buffer8[i++] = message[index];
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        }
      } else {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);

            if (code < 0x80) {
              buffer8[i++] = code;
            } else if (code < 0x800) {
              buffer8[i++] = 0xc0 | code >> 6;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else if (code < 0xd800 || code >= 0xe000) {
              buffer8[i++] = 0xe0 | code >> 12;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              buffer8[i++] = 0xf0 | code >> 18;
              buffer8[i++] = 0x80 | code >> 12 & 0x3f;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            }
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);

            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            }
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;

      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }

    return this;
  };

  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }

    this.finalized = true;
    var blocks = this.blocks,
        i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];

    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }

      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }

    blocks[14] = this.bytes << 3;
    this.hash();
  };

  Md5.prototype.hash = function () {
    var a,
        b,
        c,
        d,
        bc,
        da,
        blocks = this.blocks;

    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }

    a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;

    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };
  /**
   * @method hex
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.hex();
   */


  Md5.prototype.hex = function () {
    this.finalize();
    var h0 = this.h0,
        h1 = this.h1,
        h2 = this.h2,
        h3 = this.h3;
    return HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F];
  };
  /**
   * @method toString
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.toString();
   */


  Md5.prototype.toString = Md5.prototype.hex;
  /**
   * @method digest
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.digest}
   * @example
   * hash.digest();
   */

  Md5.prototype.digest = function () {
    this.finalize();
    var h0 = this.h0,
        h1 = this.h1,
        h2 = this.h2,
        h3 = this.h3;
    return [h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >> 24 & 0xFF, h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >> 24 & 0xFF, h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >> 24 & 0xFF, h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >> 24 & 0xFF];
  };
  /**
   * @method array
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.array}
   * @example
   * hash.array();
   */


  Md5.prototype.array = Md5.prototype.digest;
  /**
   * @method arrayBuffer
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.arrayBuffer}
   * @example
   * hash.arrayBuffer();
   */

  Md5.prototype.arrayBuffer = function () {
    this.finalize();
    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };
  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.buffer}
   * @example
   * hash.buffer();
   */


  Md5.prototype.buffer = Md5.prototype.arrayBuffer;
  /**
   * @method base64
   * @memberof Md5
   * @instance
   * @description Output hash as base64 string
   * @returns {String} base64 string
   * @see {@link md5.base64}
   * @example
   * hash.base64();
   */

  Md5.prototype.base64 = function () {
    var v1,
        v2,
        v3,
        base64Str = '',
        bytes = this.array();

    for (var i = 0; i < 15;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
    }

    v1 = bytes[i];
    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + '==';
    return base64Str;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    /**
     * @method md5
     * @description Md5 hash function, export to global in browsers.
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} md5 hashes
     * @example
     * md5(''); // d41d8cd98f00b204e9800998ecf8427e
     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
     *
     * // It also supports UTF-8 encoding
     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
     *
     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
     * md5([]); // d41d8cd98f00b204e9800998ecf8427e
     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
     */
    root.md5 = exports;

    if (AMD) {
      define(function () {
        return exports;
      });
    }
  }
})();

cc._RF.pop();

}).call(this,require("../../../../../../../../../../../Applications/CocosCreator/Creator/2.4.9/CocosCreator.app/Contents/Resources/app.asar/node_modules/process/browser.js"),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHMvX3NtYXJ0Zm94L2d1aS9tZDUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLE1BQVAsSUFBaUIsU0FBckIsRUFDSSxNQUFNLENBQUMsTUFBUCxHQUFnQixFQUFoQjs7QUFDSixDQUFDLFlBQVk7QUFDVDs7QUFFQSxNQUFJLEtBQUssR0FBRyx1QkFBWjtBQUNBLE1BQUksTUFBTSxHQUFHLE9BQU8sTUFBUCxLQUFrQixRQUEvQjtBQUNBLE1BQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxNQUFILEdBQVksRUFBN0I7O0FBQ0EsTUFBSSxJQUFJLENBQUMsZ0JBQVQsRUFBMkI7QUFDdkIsSUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNIOztBQUNELE1BQUksVUFBVSxHQUFHLENBQUMsTUFBRCxJQUFXLE9BQU8sSUFBUCxLQUFnQixRQUE1QztBQUNBLE1BQUksT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFOLElBQTJCLE9BQU8sT0FBUCxLQUFtQixRQUE5QyxJQUEwRCxPQUFPLENBQUMsUUFBbEUsSUFBOEUsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsSUFBN0c7O0FBQ0EsTUFBSSxPQUFKLEVBQWE7QUFDVCxJQUFBLElBQUksR0FBRyxNQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUksVUFBSixFQUFnQjtBQUNuQixJQUFBLElBQUksR0FBRyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQU4sSUFBNkIsT0FBTyxNQUFQLEtBQWtCLFFBQS9DLElBQTJELE1BQU0sQ0FBQyxPQUFsRjtBQUNBLE1BQUksR0FBRyxHQUFHLE9BQU8sTUFBUCxLQUFrQixVQUFsQixJQUFnQyxNQUFNLENBQUMsR0FBakQ7QUFDQSxNQUFJLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBTixJQUFnQyxP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QixJQUE0QixDQUFoQztBQUNBLE1BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFNBQXZDO0FBQ0EsTUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLE1BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFVBQXZDO0FBQ0EsTUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNIOztBQUVELElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFNBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFVBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFVBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFFBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFVBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFVBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLEtBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFVBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFVBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFFBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFVBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFVBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFNBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFVBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFNBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFNBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFNBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFFBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFNBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFNBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFNBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFVBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFNBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFVBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFVBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFFBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxDQUFELENBQTVCLEdBQWtDLFVBQXZDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUixDQUFQLElBQXNCLE1BQU0sQ0FBQyxFQUFELENBQTVCLEdBQW1DLFVBQXhDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFUO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBTixJQUFXLE1BQU0sQ0FBQyxDQUFELENBQWpCLEdBQXVCLE1BQTVCO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQU4sSUFBVyxNQUFNLENBQUMsQ0FBRCxDQUFqQixHQUF1QixVQUE1QjtBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUwsR0FBVSxDQUFDLEtBQUssRUFBakIsSUFBdUIsQ0FBdkIsSUFBNEIsQ0FBaEM7QUFDQSxJQUFBLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBVDtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQU4sSUFBVyxNQUFNLENBQUMsRUFBRCxDQUFqQixHQUF3QixVQUE3QjtBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUwsR0FBVSxDQUFDLEtBQUssRUFBakIsSUFBdUIsQ0FBdkIsSUFBNEIsQ0FBaEM7QUFDQSxJQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFOLElBQVcsTUFBTSxDQUFDLEVBQUQsQ0FBakIsR0FBd0IsUUFBN0I7QUFDQSxJQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFMLEdBQVUsQ0FBQyxLQUFLLENBQWpCLElBQXNCLENBQXRCLElBQTJCLENBQS9CO0FBQ0EsSUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQVQ7QUFDQSxJQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFOLElBQVcsTUFBTSxDQUFDLENBQUQsQ0FBakIsR0FBdUIsVUFBNUI7QUFDQSxJQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFMLEdBQVMsQ0FBQyxLQUFLLEVBQWhCLElBQXNCLENBQXRCLElBQTJCLENBQS9CO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBTixJQUFXLE1BQU0sQ0FBQyxDQUFELENBQWpCLEdBQXVCLFVBQTVCO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFUO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBTixJQUFXLE1BQU0sQ0FBQyxDQUFELENBQWpCLEdBQXVCLFNBQTVCO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQU4sSUFBVyxNQUFNLENBQUMsRUFBRCxDQUFqQixHQUF3QixVQUE3QjtBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUwsR0FBVSxDQUFDLEtBQUssQ0FBakIsSUFBc0IsQ0FBdEIsSUFBMkIsQ0FBL0I7QUFDQSxJQUFBLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBVDtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQU4sSUFBVyxNQUFNLENBQUMsRUFBRCxDQUFqQixHQUF3QixTQUE3QjtBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUwsR0FBUyxDQUFDLEtBQUssRUFBaEIsSUFBc0IsQ0FBdEIsSUFBMkIsQ0FBL0I7QUFDQSxJQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFOLElBQVcsTUFBTSxDQUFDLENBQUQsQ0FBakIsR0FBdUIsU0FBNUI7QUFDQSxJQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFMLEdBQVUsQ0FBQyxLQUFLLEVBQWpCLElBQXVCLENBQXZCLElBQTRCLENBQWhDO0FBQ0EsSUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQVQ7QUFDQSxJQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFOLElBQVcsTUFBTSxDQUFDLENBQUQsQ0FBakIsR0FBdUIsU0FBNUI7QUFDQSxJQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFMLEdBQVUsQ0FBQyxLQUFLLEVBQWpCLElBQXVCLENBQXZCLElBQTRCLENBQWhDO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBTixJQUFXLE1BQU0sQ0FBQyxDQUFELENBQWpCLEdBQXVCLFFBQTVCO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxDQUFqQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFUO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBTixJQUFXLE1BQU0sQ0FBQyxDQUFELENBQWpCLEdBQXVCLFNBQTVCO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQU4sSUFBVyxNQUFNLENBQUMsRUFBRCxDQUFqQixHQUF3QixTQUE3QjtBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUwsR0FBVSxDQUFDLEtBQUssRUFBakIsSUFBdUIsQ0FBdkIsSUFBNEIsQ0FBaEM7QUFDQSxJQUFBLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBVDtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQU4sSUFBVyxNQUFNLENBQUMsRUFBRCxDQUFqQixHQUF3QixTQUE3QjtBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUwsR0FBVSxDQUFDLEtBQUssRUFBakIsSUFBdUIsQ0FBdkIsSUFBNEIsQ0FBaEM7QUFDQSxJQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFOLElBQVcsTUFBTSxDQUFDLENBQUQsQ0FBakIsR0FBdUIsU0FBNUI7QUFDQSxJQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFMLEdBQVUsQ0FBQyxLQUFLLENBQWpCLElBQXNCLENBQXRCLElBQTJCLENBQS9CO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBVCxDQUFGLElBQWlCLE1BQU0sQ0FBQyxDQUFELENBQXZCLEdBQTZCLFNBQWxDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQVQsQ0FBRixJQUFpQixNQUFNLENBQUMsQ0FBRCxDQUF2QixHQUE2QixVQUFsQztBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUwsR0FBVSxDQUFDLEtBQUssRUFBakIsSUFBdUIsQ0FBdkIsSUFBNEIsQ0FBaEM7QUFDQSxJQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFULENBQUYsSUFBaUIsTUFBTSxDQUFDLEVBQUQsQ0FBdkIsR0FBOEIsVUFBbkM7QUFDQSxJQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFMLEdBQVUsQ0FBQyxLQUFLLEVBQWpCLElBQXVCLENBQXZCLElBQTRCLENBQWhDO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBVCxDQUFGLElBQWlCLE1BQU0sQ0FBQyxDQUFELENBQXZCLEdBQTZCLFFBQWxDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQVQsQ0FBRixJQUFpQixNQUFNLENBQUMsRUFBRCxDQUF2QixHQUE4QixVQUFuQztBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUwsR0FBUyxDQUFDLEtBQUssRUFBaEIsSUFBc0IsQ0FBdEIsSUFBMkIsQ0FBL0I7QUFDQSxJQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFULENBQUYsSUFBaUIsTUFBTSxDQUFDLENBQUQsQ0FBdkIsR0FBNkIsVUFBbEM7QUFDQSxJQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFMLEdBQVUsQ0FBQyxLQUFLLEVBQWpCLElBQXVCLENBQXZCLElBQTRCLENBQWhDO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBVCxDQUFGLElBQWlCLE1BQU0sQ0FBQyxFQUFELENBQXZCLEdBQThCLE9BQW5DO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQVQsQ0FBRixJQUFpQixNQUFNLENBQUMsQ0FBRCxDQUF2QixHQUE2QixVQUFsQztBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUwsR0FBVSxDQUFDLEtBQUssRUFBakIsSUFBdUIsQ0FBdkIsSUFBNEIsQ0FBaEM7QUFDQSxJQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFULENBQUYsSUFBaUIsTUFBTSxDQUFDLENBQUQsQ0FBdkIsR0FBNkIsVUFBbEM7QUFDQSxJQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFMLEdBQVMsQ0FBQyxLQUFLLEVBQWhCLElBQXNCLENBQXRCLElBQTJCLENBQS9CO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBVCxDQUFGLElBQWlCLE1BQU0sQ0FBQyxFQUFELENBQXZCLEdBQThCLFFBQW5DO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQztBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQVQsQ0FBRixJQUFpQixNQUFNLENBQUMsQ0FBRCxDQUF2QixHQUE2QixVQUFsQztBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUwsR0FBVSxDQUFDLEtBQUssRUFBakIsSUFBdUIsQ0FBdkIsSUFBNEIsQ0FBaEM7QUFDQSxJQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFULENBQUYsSUFBaUIsTUFBTSxDQUFDLEVBQUQsQ0FBdkIsR0FBOEIsVUFBbkM7QUFDQSxJQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFMLEdBQVUsQ0FBQyxLQUFLLEVBQWpCLElBQXVCLENBQXZCLElBQTRCLENBQWhDO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBVCxDQUFGLElBQWlCLE1BQU0sQ0FBQyxDQUFELENBQXZCLEdBQTZCLFNBQWxDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBTCxHQUFTLENBQUMsS0FBSyxFQUFoQixJQUFzQixDQUF0QixJQUEyQixDQUEvQjtBQUNBLElBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQVQsQ0FBRixJQUFpQixNQUFNLENBQUMsRUFBRCxDQUF2QixHQUE4QixVQUFuQztBQUNBLElBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUwsR0FBVSxDQUFDLEtBQUssRUFBakIsSUFBdUIsQ0FBdkIsSUFBNEIsQ0FBaEM7QUFDQSxJQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFULENBQUYsSUFBaUIsTUFBTSxDQUFDLENBQUQsQ0FBdkIsR0FBNkIsU0FBbEM7QUFDQSxJQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFMLEdBQVUsQ0FBQyxLQUFLLEVBQWpCLElBQXVCLENBQXZCLElBQTRCLENBQWhDO0FBQ0EsSUFBQSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBVCxDQUFGLElBQWlCLE1BQU0sQ0FBQyxDQUFELENBQXZCLEdBQTZCLFNBQWxDO0FBQ0EsSUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBTCxHQUFVLENBQUMsS0FBSyxFQUFqQixJQUF1QixDQUF2QixJQUE0QixDQUFoQzs7QUFFQSxRQUFJLEtBQUssS0FBVCxFQUFnQjtBQUNaLFdBQUssRUFBTCxHQUFVLENBQUMsR0FBRyxVQUFKLElBQWtCLENBQTVCO0FBQ0EsV0FBSyxFQUFMLEdBQVUsQ0FBQyxHQUFHLFNBQUosSUFBaUIsQ0FBM0I7QUFDQSxXQUFLLEVBQUwsR0FBVSxDQUFDLEdBQUcsVUFBSixJQUFrQixDQUE1QjtBQUNBLFdBQUssRUFBTCxHQUFVLENBQUMsR0FBRyxTQUFKLElBQWlCLENBQTNCO0FBQ0EsV0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNILEtBTkQsTUFNTztBQUNILFdBQUssRUFBTCxHQUFVLEtBQUssRUFBTCxHQUFVLENBQVYsSUFBZSxDQUF6QjtBQUNBLFdBQUssRUFBTCxHQUFVLEtBQUssRUFBTCxHQUFVLENBQVYsSUFBZSxDQUF6QjtBQUNBLFdBQUssRUFBTCxHQUFVLEtBQUssRUFBTCxHQUFVLENBQVYsSUFBZSxDQUF6QjtBQUNBLFdBQUssRUFBTCxHQUFVLEtBQUssRUFBTCxHQUFVLENBQVYsSUFBZSxDQUF6QjtBQUNIO0FBQ0osR0F4S0Q7QUEwS0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNJLEVBQUEsR0FBRyxDQUFDLFNBQUosQ0FBYyxHQUFkLEdBQW9CLFlBQVk7QUFDNUIsU0FBSyxRQUFMO0FBRUEsUUFBSSxFQUFFLEdBQUcsS0FBSyxFQUFkO0FBQUEsUUFBa0IsRUFBRSxHQUFHLEtBQUssRUFBNUI7QUFBQSxRQUFnQyxFQUFFLEdBQUcsS0FBSyxFQUExQztBQUFBLFFBQThDLEVBQUUsR0FBRyxLQUFLLEVBQXhEO0FBRUEsV0FBTyxTQUFTLENBQUUsRUFBRSxJQUFJLENBQVAsR0FBWSxJQUFiLENBQVQsR0FBOEIsU0FBUyxDQUFDLEVBQUUsR0FBRyxJQUFOLENBQXZDLEdBQ0gsU0FBUyxDQUFFLEVBQUUsSUFBSSxFQUFQLEdBQWEsSUFBZCxDQUROLEdBQzRCLFNBQVMsQ0FBRSxFQUFFLElBQUksQ0FBUCxHQUFZLElBQWIsQ0FEckMsR0FFSCxTQUFTLENBQUUsRUFBRSxJQUFJLEVBQVAsR0FBYSxJQUFkLENBRk4sR0FFNEIsU0FBUyxDQUFFLEVBQUUsSUFBSSxFQUFQLEdBQWEsSUFBZCxDQUZyQyxHQUdILFNBQVMsQ0FBRSxFQUFFLElBQUksRUFBUCxHQUFhLElBQWQsQ0FITixHQUc0QixTQUFTLENBQUUsRUFBRSxJQUFJLEVBQVAsR0FBYSxJQUFkLENBSHJDLEdBSUgsU0FBUyxDQUFFLEVBQUUsSUFBSSxDQUFQLEdBQVksSUFBYixDQUpOLEdBSTJCLFNBQVMsQ0FBQyxFQUFFLEdBQUcsSUFBTixDQUpwQyxHQUtILFNBQVMsQ0FBRSxFQUFFLElBQUksRUFBUCxHQUFhLElBQWQsQ0FMTixHQUs0QixTQUFTLENBQUUsRUFBRSxJQUFJLENBQVAsR0FBWSxJQUFiLENBTHJDLEdBTUgsU0FBUyxDQUFFLEVBQUUsSUFBSSxFQUFQLEdBQWEsSUFBZCxDQU5OLEdBTTRCLFNBQVMsQ0FBRSxFQUFFLElBQUksRUFBUCxHQUFhLElBQWQsQ0FOckMsR0FPSCxTQUFTLENBQUUsRUFBRSxJQUFJLEVBQVAsR0FBYSxJQUFkLENBUE4sR0FPNEIsU0FBUyxDQUFFLEVBQUUsSUFBSSxFQUFQLEdBQWEsSUFBZCxDQVByQyxHQVFILFNBQVMsQ0FBRSxFQUFFLElBQUksQ0FBUCxHQUFZLElBQWIsQ0FSTixHQVEyQixTQUFTLENBQUMsRUFBRSxHQUFHLElBQU4sQ0FScEMsR0FTSCxTQUFTLENBQUUsRUFBRSxJQUFJLEVBQVAsR0FBYSxJQUFkLENBVE4sR0FTNEIsU0FBUyxDQUFFLEVBQUUsSUFBSSxDQUFQLEdBQVksSUFBYixDQVRyQyxHQVVILFNBQVMsQ0FBRSxFQUFFLElBQUksRUFBUCxHQUFhLElBQWQsQ0FWTixHQVU0QixTQUFTLENBQUUsRUFBRSxJQUFJLEVBQVAsR0FBYSxJQUFkLENBVnJDLEdBV0gsU0FBUyxDQUFFLEVBQUUsSUFBSSxFQUFQLEdBQWEsSUFBZCxDQVhOLEdBVzRCLFNBQVMsQ0FBRSxFQUFFLElBQUksRUFBUCxHQUFhLElBQWQsQ0FYckMsR0FZSCxTQUFTLENBQUUsRUFBRSxJQUFJLENBQVAsR0FBWSxJQUFiLENBWk4sR0FZMkIsU0FBUyxDQUFDLEVBQUUsR0FBRyxJQUFOLENBWnBDLEdBYUgsU0FBUyxDQUFFLEVBQUUsSUFBSSxFQUFQLEdBQWEsSUFBZCxDQWJOLEdBYTRCLFNBQVMsQ0FBRSxFQUFFLElBQUksQ0FBUCxHQUFZLElBQWIsQ0FickMsR0FjSCxTQUFTLENBQUUsRUFBRSxJQUFJLEVBQVAsR0FBYSxJQUFkLENBZE4sR0FjNEIsU0FBUyxDQUFFLEVBQUUsSUFBSSxFQUFQLEdBQWEsSUFBZCxDQWRyQyxHQWVILFNBQVMsQ0FBRSxFQUFFLElBQUksRUFBUCxHQUFhLElBQWQsQ0FmTixHQWU0QixTQUFTLENBQUUsRUFBRSxJQUFJLEVBQVAsR0FBYSxJQUFkLENBZjVDO0FBZ0JILEdBckJEO0FBdUJBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDSSxFQUFBLEdBQUcsQ0FBQyxTQUFKLENBQWMsUUFBZCxHQUF5QixHQUFHLENBQUMsU0FBSixDQUFjLEdBQXZDO0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0ksRUFBQSxHQUFHLENBQUMsU0FBSixDQUFjLE1BQWQsR0FBdUIsWUFBWTtBQUMvQixTQUFLLFFBQUw7QUFFQSxRQUFJLEVBQUUsR0FBRyxLQUFLLEVBQWQ7QUFBQSxRQUFrQixFQUFFLEdBQUcsS0FBSyxFQUE1QjtBQUFBLFFBQWdDLEVBQUUsR0FBRyxLQUFLLEVBQTFDO0FBQUEsUUFBOEMsRUFBRSxHQUFHLEtBQUssRUFBeEQ7QUFDQSxXQUFPLENBQ0gsRUFBRSxHQUFHLElBREYsRUFDUyxFQUFFLElBQUksQ0FBUCxHQUFZLElBRHBCLEVBQzJCLEVBQUUsSUFBSSxFQUFQLEdBQWEsSUFEdkMsRUFDOEMsRUFBRSxJQUFJLEVBQVAsR0FBYSxJQUQxRCxFQUVILEVBQUUsR0FBRyxJQUZGLEVBRVMsRUFBRSxJQUFJLENBQVAsR0FBWSxJQUZwQixFQUUyQixFQUFFLElBQUksRUFBUCxHQUFhLElBRnZDLEVBRThDLEVBQUUsSUFBSSxFQUFQLEdBQWEsSUFGMUQsRUFHSCxFQUFFLEdBQUcsSUFIRixFQUdTLEVBQUUsSUFBSSxDQUFQLEdBQVksSUFIcEIsRUFHMkIsRUFBRSxJQUFJLEVBQVAsR0FBYSxJQUh2QyxFQUc4QyxFQUFFLElBQUksRUFBUCxHQUFhLElBSDFELEVBSUgsRUFBRSxHQUFHLElBSkYsRUFJUyxFQUFFLElBQUksQ0FBUCxHQUFZLElBSnBCLEVBSTJCLEVBQUUsSUFBSSxFQUFQLEdBQWEsSUFKdkMsRUFJOEMsRUFBRSxJQUFJLEVBQVAsR0FBYSxJQUoxRCxDQUFQO0FBTUgsR0FWRDtBQVlBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDSSxFQUFBLEdBQUcsQ0FBQyxTQUFKLENBQWMsS0FBZCxHQUFzQixHQUFHLENBQUMsU0FBSixDQUFjLE1BQXBDO0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0ksRUFBQSxHQUFHLENBQUMsU0FBSixDQUFjLFdBQWQsR0FBNEIsWUFBWTtBQUNwQyxTQUFLLFFBQUw7QUFFQSxRQUFJLE1BQU0sR0FBRyxJQUFJLFdBQUosQ0FBZ0IsRUFBaEIsQ0FBYjtBQUNBLFFBQUksTUFBTSxHQUFHLElBQUksV0FBSixDQUFnQixNQUFoQixDQUFiO0FBQ0EsSUFBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksS0FBSyxFQUFqQjtBQUNBLElBQUEsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLEtBQUssRUFBakI7QUFDQSxJQUFBLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxLQUFLLEVBQWpCO0FBQ0EsSUFBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksS0FBSyxFQUFqQjtBQUNBLFdBQU8sTUFBUDtBQUNILEdBVkQ7QUFZQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDSSxFQUFBLEdBQUcsQ0FBQyxTQUFKLENBQWMsTUFBZCxHQUF1QixHQUFHLENBQUMsU0FBSixDQUFjLFdBQXJDO0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0ksRUFBQSxHQUFHLENBQUMsU0FBSixDQUFjLE1BQWQsR0FBdUIsWUFBWTtBQUMvQixRQUFJLEVBQUo7QUFBQSxRQUFRLEVBQVI7QUFBQSxRQUFZLEVBQVo7QUFBQSxRQUFnQixTQUFTLEdBQUcsRUFBNUI7QUFBQSxRQUFnQyxLQUFLLEdBQUcsS0FBSyxLQUFMLEVBQXhDOztBQUNBLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsRUFBcEIsR0FBeUI7QUFDckIsTUFBQSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRixDQUFWO0FBQ0EsTUFBQSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRixDQUFWO0FBQ0EsTUFBQSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRixDQUFWO0FBQ0EsTUFBQSxTQUFTLElBQUksa0JBQWtCLENBQUMsRUFBRSxLQUFLLENBQVIsQ0FBbEIsR0FDVCxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFOLEdBQVUsRUFBRSxLQUFLLENBQWxCLElBQXVCLEVBQXhCLENBRFQsR0FFVCxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFOLEdBQVUsRUFBRSxLQUFLLENBQWxCLElBQXVCLEVBQXhCLENBRlQsR0FHVCxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsRUFBTixDQUh0QjtBQUlIOztBQUNELElBQUEsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFELENBQVY7QUFDQSxJQUFBLFNBQVMsSUFBSSxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssQ0FBUixDQUFsQixHQUNULGtCQUFrQixDQUFFLEVBQUUsSUFBSSxDQUFQLEdBQVksRUFBYixDQURULEdBRVQsSUFGSjtBQUdBLFdBQU8sU0FBUDtBQUNILEdBaEJEOztBQWtCQSxNQUFJLE9BQU8sR0FBRyxZQUFZLEVBQTFCOztBQUVBLE1BQUksU0FBSixFQUFlO0FBQ1gsSUFBQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFqQjtBQUNILEdBRkQsTUFFTztBQUNIO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUSxJQUFBLElBQUksQ0FBQyxHQUFMLEdBQVcsT0FBWDs7QUFDQSxRQUFJLEdBQUosRUFBUztBQUNMLE1BQUEsTUFBTSxDQUFDLFlBQVk7QUFDZixlQUFPLE9BQVA7QUFDSCxPQUZLLENBQU47QUFHSDtBQUNKO0FBQ0osQ0FwcEJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFtqcy1tZDVde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9lbW4xNzgvanMtbWQ1fVxuICpcbiAqIEBuYW1lc3BhY2UgbWQ1XG4gKiBAdmVyc2lvbiAwLjYuMFxuICogQGF1dGhvciBDaGVuLCBZaS1DeXVhbiBbZW1uMTc4QGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgQ2hlbiwgWWktQ3l1YW4gMjAxNC0yMDE3XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaWYgKHR5cGVvZiBnbG9iYWwgPT0gdW5kZWZpbmVkKVxuICAgIHdpbmRvdy5nbG9iYWwgPSB7fTtcbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIEVSUk9SID0gJ2lucHV0IGlzIGludmFsaWQgdHlwZSc7XG4gICAgdmFyIFdJTkRPVyA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnO1xuICAgIHZhciByb290ID0gV0lORE9XID8gd2luZG93IDoge307XG4gICAgaWYgKHJvb3QuSlNfTUQ1X05PX1dJTkRPVykge1xuICAgICAgICBXSU5ET1cgPSBmYWxzZTtcbiAgICB9XG4gICAgdmFyIFdFQl9XT1JLRVIgPSAhV0lORE9XICYmIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JztcbiAgICB2YXIgTk9ERV9KUyA9ICFyb290LkpTX01ENV9OT19OT0RFX0pTICYmIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJiBwcm9jZXNzLnZlcnNpb25zICYmIHByb2Nlc3MudmVyc2lvbnMubm9kZTtcbiAgICBpZiAoTk9ERV9KUykge1xuICAgICAgICByb290ID0gZ2xvYmFsO1xuICAgIH0gZWxzZSBpZiAoV0VCX1dPUktFUikge1xuICAgICAgICByb290ID0gc2VsZjtcbiAgICB9XG4gICAgdmFyIENPTU1PTl9KUyA9ICFyb290LkpTX01ENV9OT19DT01NT05fSlMgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHM7XG4gICAgdmFyIEFNRCA9IHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZDtcbiAgICB2YXIgQVJSQVlfQlVGRkVSID0gIXJvb3QuSlNfTUQ1X05PX0FSUkFZX0JVRkZFUiAmJiB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnO1xuICAgIHZhciBIRVhfQ0hBUlMgPSAnMDEyMzQ1Njc4OWFiY2RlZicuc3BsaXQoJycpO1xuICAgIHZhciBFWFRSQSA9IFsxMjgsIDMyNzY4LCA4Mzg4NjA4LCAtMjE0NzQ4MzY0OF07XG4gICAgdmFyIFNISUZUID0gWzAsIDgsIDE2LCAyNF07XG4gICAgdmFyIE9VVFBVVF9UWVBFUyA9IFsnaGV4JywgJ2FycmF5JywgJ2RpZ2VzdCcsICdidWZmZXInLCAnYXJyYXlCdWZmZXInLCAnYmFzZTY0J107XG4gICAgdmFyIEJBU0U2NF9FTkNPREVfQ0hBUiA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJy5zcGxpdCgnJyk7XG5cbiAgICB2YXIgYmxvY2tzID0gW10sIGJ1ZmZlcjg7XG4gICAgaWYgKEFSUkFZX0JVRkZFUikge1xuICAgICAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDY4KTtcbiAgICAgICAgYnVmZmVyOCA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGJsb2NrcyA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuICAgIH1cblxuICAgIGlmIChyb290LkpTX01ENV9OT19OT0RFX0pTIHx8ICFBcnJheS5pc0FycmF5KSB7XG4gICAgICAgIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBoZXhcbiAgICAgKiBAbWVtYmVyb2YgbWQ1XG4gICAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGhleCBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IEhleCBzdHJpbmdcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG1kNS5oZXgoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnKTtcbiAgICAgKiAvLyBlcXVhbCB0b1xuICAgICAqIG1kNSgnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZycpO1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBtZXRob2QgZGlnZXN0XG4gICAgICogQG1lbWJlcm9mIG1kNVxuICAgICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBieXRlcyBhcnJheVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ9IG1lc3NhZ2UgbWVzc2FnZSB0byBoYXNoXG4gICAgICogQHJldHVybnMge0FycmF5fSBCeXRlcyBhcnJheVxuICAgICAqIEBleGFtcGxlXG4gICAgICogbWQ1LmRpZ2VzdCgnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZycpO1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBtZXRob2QgYXJyYXlcbiAgICAgKiBAbWVtYmVyb2YgbWQ1XG4gICAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGJ5dGVzIGFycmF5XG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl8VWludDhBcnJheXxBcnJheUJ1ZmZlcn0gbWVzc2FnZSBtZXNzYWdlIHRvIGhhc2hcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IEJ5dGVzIGFycmF5XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBtZDUuYXJyYXkoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnKTtcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGFycmF5QnVmZmVyXG4gICAgICogQG1lbWJlcm9mIG1kNVxuICAgICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBBcnJheUJ1ZmZlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ9IG1lc3NhZ2UgbWVzc2FnZSB0byBoYXNoXG4gICAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBBcnJheUJ1ZmZlclxuICAgICAqIEBleGFtcGxlXG4gICAgICogbWQ1LmFycmF5QnVmZmVyKCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyk7XG4gICAgICovXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBidWZmZXJcbiAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIG1heWJlIGNvbmZ1c2Ugd2l0aCBCdWZmZXIgaW4gbm9kZS5qcy4gUGxlYXNlIHVzZSBhcnJheUJ1ZmZlciBpbnN0ZWFkLlxuICAgICAqIEBtZW1iZXJvZiBtZDVcbiAgICAgKiBAZGVzY3JpcHRpb24gT3V0cHV0IGhhc2ggYXMgQXJyYXlCdWZmZXJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxuICAgICAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gQXJyYXlCdWZmZXJcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG1kNS5idWZmZXIoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnKTtcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGJhc2U2NFxuICAgICAqIEBtZW1iZXJvZiBtZDVcbiAgICAgKiBAZGVzY3JpcHRpb24gT3V0cHV0IGhhc2ggYXMgYmFzZTY0IHN0cmluZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ9IG1lc3NhZ2UgbWVzc2FnZSB0byBoYXNoXG4gICAgICogQHJldHVybnMge1N0cmluZ30gYmFzZTY0IHN0cmluZ1xuICAgICAqIEBleGFtcGxlXG4gICAgICogbWQ1LmJhc2U2NCgnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZycpO1xuICAgICAqL1xuICAgIHZhciBjcmVhdGVPdXRwdXRNZXRob2QgPSBmdW5jdGlvbiAob3V0cHV0VHlwZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWQ1KHRydWUpLnVwZGF0ZShtZXNzYWdlKVtvdXRwdXRUeXBlXSgpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBtZW1iZXJvZiBtZDVcbiAgICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlIE1kNSBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7TWQ1fSBNZDUgb2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogdmFyIGhhc2ggPSBtZDUuY3JlYXRlKCk7XG4gICAgICovXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAbWVtYmVyb2YgbWQ1XG4gICAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhbmQgdXBkYXRlIE1kNSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxuICAgICAqIEByZXR1cm5zIHtNZDV9IE1kNSBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgaGFzaCA9IG1kNS51cGRhdGUoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cnKTtcbiAgICAgKiAvLyBlcXVhbCB0b1xuICAgICAqIHZhciBoYXNoID0gbWQ1LmNyZWF0ZSgpO1xuICAgICAqIGhhc2gudXBkYXRlKCdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJyk7XG4gICAgICovXG4gICAgdmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IGNyZWF0ZU91dHB1dE1ldGhvZCgnaGV4Jyk7XG4gICAgICAgIGlmIChOT0RFX0pTKSB7XG4gICAgICAgICAgICBtZXRob2QgPSBub2RlV3JhcChtZXRob2QpO1xuICAgICAgICB9XG4gICAgICAgIG1ldGhvZC5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1kNSgpO1xuICAgICAgICB9O1xuICAgICAgICBtZXRob2QudXBkYXRlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuY3JlYXRlKCkudXBkYXRlKG1lc3NhZ2UpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE9VVFBVVF9UWVBFUy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBPVVRQVVRfVFlQRVNbaV07XG4gICAgICAgICAgICBtZXRob2RbdHlwZV0gPSBjcmVhdGVPdXRwdXRNZXRob2QodHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICB9O1xuXG4gICAgdmFyIG5vZGVXcmFwID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICB2YXIgY3J5cHRvID0gZXZhbChcInJlcXVpcmUoJ2NyeXB0bycpXCIpO1xuICAgICAgICB2YXIgQnVmZmVyID0gZXZhbChcInJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlclwiKTtcbiAgICAgICAgdmFyIG5vZGVNZXRob2QgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKG1lc3NhZ2UsICd1dGY4JykuZGlnZXN0KCdoZXgnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVSUk9SO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lc3NhZ2UpIHx8IEFycmF5QnVmZmVyLmlzVmlldyhtZXNzYWdlKSB8fFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuY29uc3RydWN0b3IgPT09IEJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKG5ldyBCdWZmZXIobWVzc2FnZSkpLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2QobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBub2RlTWV0aG9kO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNZDUgY2xhc3NcbiAgICAgKiBAY2xhc3MgTWQ1XG4gICAgICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgaW50ZXJuYWwgY2xhc3MuXG4gICAgICogQHNlZSB7QGxpbmsgbWQ1LmNyZWF0ZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBNZDUoc2hhcmVkTWVtb3J5KSB7XG4gICAgICAgIGlmIChzaGFyZWRNZW1vcnkpIHtcbiAgICAgICAgICAgIGJsb2Nrc1swXSA9IGJsb2Nrc1sxNl0gPSBibG9ja3NbMV0gPSBibG9ja3NbMl0gPSBibG9ja3NbM10gPVxuICAgICAgICAgICAgICAgIGJsb2Nrc1s0XSA9IGJsb2Nrc1s1XSA9IGJsb2Nrc1s2XSA9IGJsb2Nrc1s3XSA9XG4gICAgICAgICAgICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxuICAgICAgICAgICAgICAgIGJsb2Nrc1sxMl0gPSBibG9ja3NbMTNdID0gYmxvY2tzWzE0XSA9IGJsb2Nrc1sxNV0gPSAwO1xuICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSBibG9ja3M7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcjggPSBidWZmZXI4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFSUkFZX0JVRkZFUikge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNjgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyOCA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oMCA9IHRoaXMuaDEgPSB0aGlzLmgyID0gdGhpcy5oMyA9IHRoaXMuc3RhcnQgPSB0aGlzLmJ5dGVzID0gMDtcbiAgICAgICAgdGhpcy5maW5hbGl6ZWQgPSB0aGlzLmhhc2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcnN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBtZW1iZXJvZiBNZDVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZGVzY3JpcHRpb24gVXBkYXRlIGhhc2hcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxuICAgICAqIEByZXR1cm5zIHtNZDV9IE1kNSBvYmplY3QuXG4gICAgICogQHNlZSB7QGxpbmsgbWQ1LnVwZGF0ZX1cbiAgICAgKi9cbiAgICBNZDUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub3RTdHJpbmcgPSB0eXBlb2YgKG1lc3NhZ2UpICE9ICdzdHJpbmcnO1xuICAgICAgICBpZiAobm90U3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCB8fCBtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PT0gcm9vdC5BcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBuZXcgVWludDhBcnJheShtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuZ3RoID0gbWVzc2FnZS5sZW5ndGg7XG4gICAgICAgIGlmIChub3RTdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJyB8fFxuICAgICAgICAgICAgICAgICFBcnJheS5pc0FycmF5KG1lc3NhZ2UpICYmXG4gICAgICAgICAgICAgICAgIShBUlJBWV9CVUZGRVIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KG1lc3NhZ2UpKSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVSUk9SO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb2RlLCBpbmRleCA9IDAsIGksIGJsb2NrcyA9IHRoaXMuYmxvY2tzO1xuICAgICAgICB2YXIgYnVmZmVyOCA9IHRoaXMuYnVmZmVyODtcblxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYmxvY2tzWzBdID0gYmxvY2tzWzE2XTtcbiAgICAgICAgICAgICAgICBibG9ja3NbMTZdID0gYmxvY2tzWzFdID0gYmxvY2tzWzJdID0gYmxvY2tzWzNdID1cbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzWzRdID0gYmxvY2tzWzVdID0gYmxvY2tzWzZdID0gYmxvY2tzWzddID1cbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxuICAgICAgICAgICAgICAgICAgICBibG9ja3NbMTJdID0gYmxvY2tzWzEzXSA9IGJsb2Nrc1sxNF0gPSBibG9ja3NbMTVdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdFN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmIChBUlJBWV9CVUZGRVIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gdGhpcy5zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IDY0OyArK2luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI4W2krK10gPSBtZXNzYWdlW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHRoaXMuc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCA2NDsgKytpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gbWVzc2FnZVtpbmRleF0gPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChBUlJBWV9CVUZGRVIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gdGhpcy5zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IDY0OyArK2luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlID0gbWVzc2FnZS5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlIDwgMHg4MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPCAweDgwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4YzAgfCAoY29kZSA+PiA2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI4W2krK10gPSAweDgwIHwgKGNvZGUgJiAweDNmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA8IDB4ZDgwMCB8fCBjb2RlID49IDB4ZTAwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ZTAgfCAoY29kZSA+PiAxMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOFtpKytdID0gMHg4MCB8ICgoY29kZSA+PiA2KSAmIDB4M2YpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ODAgfCAoY29kZSAmIDB4M2YpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlID0gMHgxMDAwMCArICgoKGNvZGUgJiAweDNmZikgPDwgMTApIHwgKG1lc3NhZ2UuY2hhckNvZGVBdCgrK2luZGV4KSAmIDB4M2ZmKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOFtpKytdID0gMHhmMCB8IChjb2RlID4+IDE4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI4W2krK10gPSAweDgwIHwgKChjb2RlID4+IDEyKSAmIDB4M2YpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjhbaSsrXSA9IDB4ODAgfCAoKGNvZGUgPj4gNikgJiAweDNmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI4W2krK10gPSAweDgwIHwgKGNvZGUgJiAweDNmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHRoaXMuc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCA2NDsgKytpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZSA9IG1lc3NhZ2UuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA8IDB4ODApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSBjb2RlIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHg4MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhjMCB8IChjb2RlID4+IDYpKSA8PCBTSElGVFtpKysgJiAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHg4MCB8IChjb2RlICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlIDwgMHhkODAwIHx8IGNvZGUgPj0gMHhlMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ZTAgfCAoY29kZSA+PiAxMikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDYpICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKGNvZGUgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUgPSAweDEwMDAwICsgKCgoY29kZSAmIDB4M2ZmKSA8PCAxMCkgfCAobWVzc2FnZS5jaGFyQ29kZUF0KCsraW5kZXgpICYgMHgzZmYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja3NbaSA+PiAyXSB8PSAoMHhmMCB8IChjb2RlID4+IDE4KSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gKDB4ODAgfCAoKGNvZGUgPj4gMTIpICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKChjb2RlID4+IDYpICYgMHgzZikpIDw8IFNISUZUW2krKyAmIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc1tpID4+IDJdIHw9ICgweDgwIHwgKGNvZGUgJiAweDNmKSkgPDwgU0hJRlRbaSsrICYgM107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhc3RCeXRlSW5kZXggPSBpO1xuICAgICAgICAgICAgdGhpcy5ieXRlcyArPSBpIC0gdGhpcy5zdGFydDtcbiAgICAgICAgICAgIGlmIChpID49IDY0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IGkgLSA2NDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc2goKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc2hlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBNZDUucHJvdG90eXBlLmZpbmFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbmFsaXplZCA9IHRydWU7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmJsb2NrcywgaSA9IHRoaXMubGFzdEJ5dGVJbmRleDtcbiAgICAgICAgYmxvY2tzW2kgPj4gMl0gfD0gRVhUUkFbaSAmIDNdO1xuICAgICAgICBpZiAoaSA+PSA1Nikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2tzWzBdID0gYmxvY2tzWzE2XTtcbiAgICAgICAgICAgIGJsb2Nrc1sxNl0gPSBibG9ja3NbMV0gPSBibG9ja3NbMl0gPSBibG9ja3NbM10gPVxuICAgICAgICAgICAgICAgIGJsb2Nrc1s0XSA9IGJsb2Nrc1s1XSA9IGJsb2Nrc1s2XSA9IGJsb2Nrc1s3XSA9XG4gICAgICAgICAgICAgICAgYmxvY2tzWzhdID0gYmxvY2tzWzldID0gYmxvY2tzWzEwXSA9IGJsb2Nrc1sxMV0gPVxuICAgICAgICAgICAgICAgIGJsb2Nrc1sxMl0gPSBibG9ja3NbMTNdID0gYmxvY2tzWzE0XSA9IGJsb2Nrc1sxNV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGJsb2Nrc1sxNF0gPSB0aGlzLmJ5dGVzIDw8IDM7XG4gICAgICAgIHRoaXMuaGFzaCgpO1xuICAgIH07XG5cbiAgICBNZDUucHJvdG90eXBlLmhhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhLCBiLCBjLCBkLCBiYywgZGEsIGJsb2NrcyA9IHRoaXMuYmxvY2tzO1xuXG4gICAgICAgIGlmICh0aGlzLmZpcnN0KSB7XG4gICAgICAgICAgICBhID0gYmxvY2tzWzBdIC0gNjgwODc2OTM3O1xuICAgICAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgLSAyNzE3MzM4NzkgPDwgMDtcbiAgICAgICAgICAgIGQgPSAoLTE3MzI1ODQxOTQgXiBhICYgMjAwNDMxODA3MSkgKyBibG9ja3NbMV0gLSAxMTc4MzA3MDg7XG4gICAgICAgICAgICBkID0gKGQgPDwgMTIgfCBkID4+PiAyMCkgKyBhIDw8IDA7XG4gICAgICAgICAgICBjID0gKC0yNzE3MzM4NzkgXiAoZCAmIChhIF4gLTI3MTczMzg3OSkpKSArIGJsb2Nrc1syXSAtIDExMjY0NzgzNzU7XG4gICAgICAgICAgICBjID0gKGMgPDwgMTcgfCBjID4+PiAxNSkgKyBkIDw8IDA7XG4gICAgICAgICAgICBiID0gKGEgXiAoYyAmIChkIF4gYSkpKSArIGJsb2Nrc1szXSAtIDEzMTYyNTkyMDk7XG4gICAgICAgICAgICBiID0gKGIgPDwgMjIgfCBiID4+PiAxMCkgKyBjIDw8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhID0gdGhpcy5oMDtcbiAgICAgICAgICAgIGIgPSB0aGlzLmgxO1xuICAgICAgICAgICAgYyA9IHRoaXMuaDI7XG4gICAgICAgICAgICBkID0gdGhpcy5oMztcbiAgICAgICAgICAgIGEgKz0gKGQgXiAoYiAmIChjIF4gZCkpKSArIGJsb2Nrc1swXSAtIDY4MDg3NjkzNjtcbiAgICAgICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiA8PCAwO1xuICAgICAgICAgICAgZCArPSAoYyBeIChhICYgKGIgXiBjKSkpICsgYmxvY2tzWzFdIC0gMzg5NTY0NTg2O1xuICAgICAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSA8PCAwO1xuICAgICAgICAgICAgYyArPSAoYiBeIChkICYgKGEgXiBiKSkpICsgYmxvY2tzWzJdICsgNjA2MTA1ODE5O1xuICAgICAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCA8PCAwO1xuICAgICAgICAgICAgYiArPSAoYSBeIChjICYgKGQgXiBhKSkpICsgYmxvY2tzWzNdIC0gMTA0NDUyNTMzMDtcbiAgICAgICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgPDwgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEgKz0gKGQgXiAoYiAmIChjIF4gZCkpKSArIGJsb2Nrc1s0XSAtIDE3NjQxODg5NztcbiAgICAgICAgYSA9IChhIDw8IDcgfCBhID4+PiAyNSkgKyBiIDw8IDA7XG4gICAgICAgIGQgKz0gKGMgXiAoYSAmIChiIF4gYykpKSArIGJsb2Nrc1s1XSArIDEyMDAwODA0MjY7XG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgPDwgMDtcbiAgICAgICAgYyArPSAoYiBeIChkICYgKGEgXiBiKSkpICsgYmxvY2tzWzZdIC0gMTQ3MzIzMTM0MTtcbiAgICAgICAgYyA9IChjIDw8IDE3IHwgYyA+Pj4gMTUpICsgZCA8PCAwO1xuICAgICAgICBiICs9IChhIF4gKGMgJiAoZCBeIGEpKSkgKyBibG9ja3NbN10gLSA0NTcwNTk4MztcbiAgICAgICAgYiA9IChiIDw8IDIyIHwgYiA+Pj4gMTApICsgYyA8PCAwO1xuICAgICAgICBhICs9IChkIF4gKGIgJiAoYyBeIGQpKSkgKyBibG9ja3NbOF0gKyAxNzcwMDM1NDE2O1xuICAgICAgICBhID0gKGEgPDwgNyB8IGEgPj4+IDI1KSArIGIgPDwgMDtcbiAgICAgICAgZCArPSAoYyBeIChhICYgKGIgXiBjKSkpICsgYmxvY2tzWzldIC0gMTk1ODQxNDQxNztcbiAgICAgICAgZCA9IChkIDw8IDEyIHwgZCA+Pj4gMjApICsgYSA8PCAwO1xuICAgICAgICBjICs9IChiIF4gKGQgJiAoYSBeIGIpKSkgKyBibG9ja3NbMTBdIC0gNDIwNjM7XG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgPDwgMDtcbiAgICAgICAgYiArPSAoYSBeIChjICYgKGQgXiBhKSkpICsgYmxvY2tzWzExXSAtIDE5OTA0MDQxNjI7XG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgPDwgMDtcbiAgICAgICAgYSArPSAoZCBeIChiICYgKGMgXiBkKSkpICsgYmxvY2tzWzEyXSArIDE4MDQ2MDM2ODI7XG4gICAgICAgIGEgPSAoYSA8PCA3IHwgYSA+Pj4gMjUpICsgYiA8PCAwO1xuICAgICAgICBkICs9IChjIF4gKGEgJiAoYiBeIGMpKSkgKyBibG9ja3NbMTNdIC0gNDAzNDExMDE7XG4gICAgICAgIGQgPSAoZCA8PCAxMiB8IGQgPj4+IDIwKSArIGEgPDwgMDtcbiAgICAgICAgYyArPSAoYiBeIChkICYgKGEgXiBiKSkpICsgYmxvY2tzWzE0XSAtIDE1MDIwMDIyOTA7XG4gICAgICAgIGMgPSAoYyA8PCAxNyB8IGMgPj4+IDE1KSArIGQgPDwgMDtcbiAgICAgICAgYiArPSAoYSBeIChjICYgKGQgXiBhKSkpICsgYmxvY2tzWzE1XSArIDEyMzY1MzUzMjk7XG4gICAgICAgIGIgPSAoYiA8PCAyMiB8IGIgPj4+IDEwKSArIGMgPDwgMDtcbiAgICAgICAgYSArPSAoYyBeIChkICYgKGIgXiBjKSkpICsgYmxvY2tzWzFdIC0gMTY1Nzk2NTEwO1xuICAgICAgICBhID0gKGEgPDwgNSB8IGEgPj4+IDI3KSArIGIgPDwgMDtcbiAgICAgICAgZCArPSAoYiBeIChjICYgKGEgXiBiKSkpICsgYmxvY2tzWzZdIC0gMTA2OTUwMTYzMjtcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIDw8IDA7XG4gICAgICAgIGMgKz0gKGEgXiAoYiAmIChkIF4gYSkpKSArIGJsb2Nrc1sxMV0gKyA2NDM3MTc3MTM7XG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgPDwgMDtcbiAgICAgICAgYiArPSAoZCBeIChhICYgKGMgXiBkKSkpICsgYmxvY2tzWzBdIC0gMzczODk3MzAyO1xuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIDw8IDA7XG4gICAgICAgIGEgKz0gKGMgXiAoZCAmIChiIF4gYykpKSArIGJsb2Nrc1s1XSAtIDcwMTU1ODY5MTtcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIDw8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYyAmIChhIF4gYikpKSArIGJsb2Nrc1sxMF0gKyAzODAxNjA4MztcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIDw8IDA7XG4gICAgICAgIGMgKz0gKGEgXiAoYiAmIChkIF4gYSkpKSArIGJsb2Nrc1sxNV0gLSA2NjA0NzgzMzU7XG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgPDwgMDtcbiAgICAgICAgYiArPSAoZCBeIChhICYgKGMgXiBkKSkpICsgYmxvY2tzWzRdIC0gNDA1NTM3ODQ4O1xuICAgICAgICBiID0gKGIgPDwgMjAgfCBiID4+PiAxMikgKyBjIDw8IDA7XG4gICAgICAgIGEgKz0gKGMgXiAoZCAmIChiIF4gYykpKSArIGJsb2Nrc1s5XSArIDU2ODQ0NjQzODtcbiAgICAgICAgYSA9IChhIDw8IDUgfCBhID4+PiAyNykgKyBiIDw8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYyAmIChhIF4gYikpKSArIGJsb2Nrc1sxNF0gLSAxMDE5ODAzNjkwO1xuICAgICAgICBkID0gKGQgPDwgOSB8IGQgPj4+IDIzKSArIGEgPDwgMDtcbiAgICAgICAgYyArPSAoYSBeIChiICYgKGQgXiBhKSkpICsgYmxvY2tzWzNdIC0gMTg3MzYzOTYxO1xuICAgICAgICBjID0gKGMgPDwgMTQgfCBjID4+PiAxOCkgKyBkIDw8IDA7XG4gICAgICAgIGIgKz0gKGQgXiAoYSAmIChjIF4gZCkpKSArIGJsb2Nrc1s4XSArIDExNjM1MzE1MDE7XG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgPDwgMDtcbiAgICAgICAgYSArPSAoYyBeIChkICYgKGIgXiBjKSkpICsgYmxvY2tzWzEzXSAtIDE0NDQ2ODE0Njc7XG4gICAgICAgIGEgPSAoYSA8PCA1IHwgYSA+Pj4gMjcpICsgYiA8PCAwO1xuICAgICAgICBkICs9IChiIF4gKGMgJiAoYSBeIGIpKSkgKyBibG9ja3NbMl0gLSA1MTQwMzc4NDtcbiAgICAgICAgZCA9IChkIDw8IDkgfCBkID4+PiAyMykgKyBhIDw8IDA7XG4gICAgICAgIGMgKz0gKGEgXiAoYiAmIChkIF4gYSkpKSArIGJsb2Nrc1s3XSArIDE3MzUzMjg0NzM7XG4gICAgICAgIGMgPSAoYyA8PCAxNCB8IGMgPj4+IDE4KSArIGQgPDwgMDtcbiAgICAgICAgYiArPSAoZCBeIChhICYgKGMgXiBkKSkpICsgYmxvY2tzWzEyXSAtIDE5MjY2MDc3MzQ7XG4gICAgICAgIGIgPSAoYiA8PCAyMCB8IGIgPj4+IDEyKSArIGMgPDwgMDtcbiAgICAgICAgYmMgPSBiIF4gYztcbiAgICAgICAgYSArPSAoYmMgXiBkKSArIGJsb2Nrc1s1XSAtIDM3ODU1ODtcbiAgICAgICAgYSA9IChhIDw8IDQgfCBhID4+PiAyOCkgKyBiIDw8IDA7XG4gICAgICAgIGQgKz0gKGJjIF4gYSkgKyBibG9ja3NbOF0gLSAyMDIyNTc0NDYzO1xuICAgICAgICBkID0gKGQgPDwgMTEgfCBkID4+PiAyMSkgKyBhIDw8IDA7XG4gICAgICAgIGRhID0gZCBeIGE7XG4gICAgICAgIGMgKz0gKGRhIF4gYikgKyBibG9ja3NbMTFdICsgMTgzOTAzMDU2MjtcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCA8PCAwO1xuICAgICAgICBiICs9IChkYSBeIGMpICsgYmxvY2tzWzE0XSAtIDM1MzA5NTU2O1xuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgPDwgMDtcbiAgICAgICAgYmMgPSBiIF4gYztcbiAgICAgICAgYSArPSAoYmMgXiBkKSArIGJsb2Nrc1sxXSAtIDE1MzA5OTIwNjA7XG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiA8PCAwO1xuICAgICAgICBkICs9IChiYyBeIGEpICsgYmxvY2tzWzRdICsgMTI3Mjg5MzM1MztcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSA8PCAwO1xuICAgICAgICBkYSA9IGQgXiBhO1xuICAgICAgICBjICs9IChkYSBeIGIpICsgYmxvY2tzWzddIC0gMTU1NDk3NjMyO1xuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIDw8IDA7XG4gICAgICAgIGIgKz0gKGRhIF4gYykgKyBibG9ja3NbMTBdIC0gMTA5NDczMDY0MDtcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIDw8IDA7XG4gICAgICAgIGJjID0gYiBeIGM7XG4gICAgICAgIGEgKz0gKGJjIF4gZCkgKyBibG9ja3NbMTNdICsgNjgxMjc5MTc0O1xuICAgICAgICBhID0gKGEgPDwgNCB8IGEgPj4+IDI4KSArIGIgPDwgMDtcbiAgICAgICAgZCArPSAoYmMgXiBhKSArIGJsb2Nrc1swXSAtIDM1ODUzNzIyMjtcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSA8PCAwO1xuICAgICAgICBkYSA9IGQgXiBhO1xuICAgICAgICBjICs9IChkYSBeIGIpICsgYmxvY2tzWzNdIC0gNzIyNTIxOTc5O1xuICAgICAgICBjID0gKGMgPDwgMTYgfCBjID4+PiAxNikgKyBkIDw8IDA7XG4gICAgICAgIGIgKz0gKGRhIF4gYykgKyBibG9ja3NbNl0gKyA3NjAyOTE4OTtcbiAgICAgICAgYiA9IChiIDw8IDIzIHwgYiA+Pj4gOSkgKyBjIDw8IDA7XG4gICAgICAgIGJjID0gYiBeIGM7XG4gICAgICAgIGEgKz0gKGJjIF4gZCkgKyBibG9ja3NbOV0gLSA2NDAzNjQ0ODc7XG4gICAgICAgIGEgPSAoYSA8PCA0IHwgYSA+Pj4gMjgpICsgYiA8PCAwO1xuICAgICAgICBkICs9IChiYyBeIGEpICsgYmxvY2tzWzEyXSAtIDQyMTgxNTgzNTtcbiAgICAgICAgZCA9IChkIDw8IDExIHwgZCA+Pj4gMjEpICsgYSA8PCAwO1xuICAgICAgICBkYSA9IGQgXiBhO1xuICAgICAgICBjICs9IChkYSBeIGIpICsgYmxvY2tzWzE1XSArIDUzMDc0MjUyMDtcbiAgICAgICAgYyA9IChjIDw8IDE2IHwgYyA+Pj4gMTYpICsgZCA8PCAwO1xuICAgICAgICBiICs9IChkYSBeIGMpICsgYmxvY2tzWzJdIC0gOTk1MzM4NjUxO1xuICAgICAgICBiID0gKGIgPDwgMjMgfCBiID4+PiA5KSArIGMgPDwgMDtcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGJsb2Nrc1swXSAtIDE5ODYzMDg0NDtcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIDw8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBibG9ja3NbN10gKyAxMTI2ODkxNDE1O1xuICAgICAgICBkID0gKGQgPDwgMTAgfCBkID4+PiAyMikgKyBhIDw8IDA7XG4gICAgICAgIGMgKz0gKGEgXiAoZCB8IH5iKSkgKyBibG9ja3NbMTRdIC0gMTQxNjM1NDkwNTtcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCA8PCAwO1xuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsgYmxvY2tzWzVdIC0gNTc0MzQwNTU7XG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgPDwgMDtcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGJsb2Nrc1sxMl0gKyAxNzAwNDg1NTcxO1xuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgPDwgMDtcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGJsb2Nrc1szXSAtIDE4OTQ5ODY2MDY7XG4gICAgICAgIGQgPSAoZCA8PCAxMCB8IGQgPj4+IDIyKSArIGEgPDwgMDtcbiAgICAgICAgYyArPSAoYSBeIChkIHwgfmIpKSArIGJsb2Nrc1sxMF0gLSAxMDUxNTIzO1xuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIDw8IDA7XG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBibG9ja3NbMV0gLSAyMDU0OTIyNzk5O1xuICAgICAgICBiID0gKGIgPDwgMjEgfCBiID4+PiAxMSkgKyBjIDw8IDA7XG4gICAgICAgIGEgKz0gKGMgXiAoYiB8IH5kKSkgKyBibG9ja3NbOF0gKyAxODczMzEzMzU5O1xuICAgICAgICBhID0gKGEgPDwgNiB8IGEgPj4+IDI2KSArIGIgPDwgMDtcbiAgICAgICAgZCArPSAoYiBeIChhIHwgfmMpKSArIGJsb2Nrc1sxNV0gLSAzMDYxMTc0NDtcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSA8PCAwO1xuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsgYmxvY2tzWzZdIC0gMTU2MDE5ODM4MDtcbiAgICAgICAgYyA9IChjIDw8IDE1IHwgYyA+Pj4gMTcpICsgZCA8PCAwO1xuICAgICAgICBiICs9IChkIF4gKGMgfCB+YSkpICsgYmxvY2tzWzEzXSArIDEzMDkxNTE2NDk7XG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgPDwgMDtcbiAgICAgICAgYSArPSAoYyBeIChiIHwgfmQpKSArIGJsb2Nrc1s0XSAtIDE0NTUyMzA3MDtcbiAgICAgICAgYSA9IChhIDw8IDYgfCBhID4+PiAyNikgKyBiIDw8IDA7XG4gICAgICAgIGQgKz0gKGIgXiAoYSB8IH5jKSkgKyBibG9ja3NbMTFdIC0gMTEyMDIxMDM3OTtcbiAgICAgICAgZCA9IChkIDw8IDEwIHwgZCA+Pj4gMjIpICsgYSA8PCAwO1xuICAgICAgICBjICs9IChhIF4gKGQgfCB+YikpICsgYmxvY2tzWzJdICsgNzE4Nzg3MjU5O1xuICAgICAgICBjID0gKGMgPDwgMTUgfCBjID4+PiAxNykgKyBkIDw8IDA7XG4gICAgICAgIGIgKz0gKGQgXiAoYyB8IH5hKSkgKyBibG9ja3NbOV0gLSAzNDM0ODU1NTE7XG4gICAgICAgIGIgPSAoYiA8PCAyMSB8IGIgPj4+IDExKSArIGMgPDwgMDtcblxuICAgICAgICBpZiAodGhpcy5maXJzdCkge1xuICAgICAgICAgICAgdGhpcy5oMCA9IGEgKyAxNzMyNTg0MTkzIDw8IDA7XG4gICAgICAgICAgICB0aGlzLmgxID0gYiAtIDI3MTczMzg3OSA8PCAwO1xuICAgICAgICAgICAgdGhpcy5oMiA9IGMgLSAxNzMyNTg0MTk0IDw8IDA7XG4gICAgICAgICAgICB0aGlzLmgzID0gZCArIDI3MTczMzg3OCA8PCAwO1xuICAgICAgICAgICAgdGhpcy5maXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oMCA9IHRoaXMuaDAgKyBhIDw8IDA7XG4gICAgICAgICAgICB0aGlzLmgxID0gdGhpcy5oMSArIGIgPDwgMDtcbiAgICAgICAgICAgIHRoaXMuaDIgPSB0aGlzLmgyICsgYyA8PCAwO1xuICAgICAgICAgICAgdGhpcy5oMyA9IHRoaXMuaDMgKyBkIDw8IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBoZXhcbiAgICAgKiBAbWVtYmVyb2YgTWQ1XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGhleCBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBIZXggc3RyaW5nXG4gICAgICogQHNlZSB7QGxpbmsgbWQ1LmhleH1cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGhhc2guaGV4KCk7XG4gICAgICovXG4gICAgTWQ1LnByb3RvdHlwZS5oZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcblxuICAgICAgICB2YXIgaDAgPSB0aGlzLmgwLCBoMSA9IHRoaXMuaDEsIGgyID0gdGhpcy5oMiwgaDMgPSB0aGlzLmgzO1xuXG4gICAgICAgIHJldHVybiBIRVhfQ0hBUlNbKGgwID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDAgJiAweDBGXSArXG4gICAgICAgICAgICBIRVhfQ0hBUlNbKGgwID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMCA+PiA4KSAmIDB4MEZdICtcbiAgICAgICAgICAgIEhFWF9DSEFSU1soaDAgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgwID4+IDE2KSAmIDB4MEZdICtcbiAgICAgICAgICAgIEhFWF9DSEFSU1soaDAgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgwID4+IDI0KSAmIDB4MEZdICtcbiAgICAgICAgICAgIEhFWF9DSEFSU1soaDEgPj4gNCkgJiAweDBGXSArIEhFWF9DSEFSU1toMSAmIDB4MEZdICtcbiAgICAgICAgICAgIEhFWF9DSEFSU1soaDEgPj4gMTIpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgxID4+IDgpICYgMHgwRl0gK1xuICAgICAgICAgICAgSEVYX0NIQVJTWyhoMSA+PiAyMCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDEgPj4gMTYpICYgMHgwRl0gK1xuICAgICAgICAgICAgSEVYX0NIQVJTWyhoMSA+PiAyOCkgJiAweDBGXSArIEhFWF9DSEFSU1soaDEgPj4gMjQpICYgMHgwRl0gK1xuICAgICAgICAgICAgSEVYX0NIQVJTWyhoMiA+PiA0KSAmIDB4MEZdICsgSEVYX0NIQVJTW2gyICYgMHgwRl0gK1xuICAgICAgICAgICAgSEVYX0NIQVJTWyhoMiA+PiAxMikgJiAweDBGXSArIEhFWF9DSEFSU1soaDIgPj4gOCkgJiAweDBGXSArXG4gICAgICAgICAgICBIRVhfQ0hBUlNbKGgyID4+IDIwKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMiA+PiAxNikgJiAweDBGXSArXG4gICAgICAgICAgICBIRVhfQ0hBUlNbKGgyID4+IDI4KSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMiA+PiAyNCkgJiAweDBGXSArXG4gICAgICAgICAgICBIRVhfQ0hBUlNbKGgzID4+IDQpICYgMHgwRl0gKyBIRVhfQ0hBUlNbaDMgJiAweDBGXSArXG4gICAgICAgICAgICBIRVhfQ0hBUlNbKGgzID4+IDEyKSAmIDB4MEZdICsgSEVYX0NIQVJTWyhoMyA+PiA4KSAmIDB4MEZdICtcbiAgICAgICAgICAgIEhFWF9DSEFSU1soaDMgPj4gMjApICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgzID4+IDE2KSAmIDB4MEZdICtcbiAgICAgICAgICAgIEhFWF9DSEFSU1soaDMgPj4gMjgpICYgMHgwRl0gKyBIRVhfQ0hBUlNbKGgzID4+IDI0KSAmIDB4MEZdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIHRvU3RyaW5nXG4gICAgICogQG1lbWJlcm9mIE1kNVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBoZXggc3RyaW5nXG4gICAgICogQHJldHVybnMge1N0cmluZ30gSGV4IHN0cmluZ1xuICAgICAqIEBzZWUge0BsaW5rIG1kNS5oZXh9XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBoYXNoLnRvU3RyaW5nKCk7XG4gICAgICovXG4gICAgTWQ1LnByb3RvdHlwZS50b1N0cmluZyA9IE1kNS5wcm90b3R5cGUuaGV4O1xuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBkaWdlc3RcbiAgICAgKiBAbWVtYmVyb2YgTWQ1XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGJ5dGVzIGFycmF5XG4gICAgICogQHJldHVybnMge0FycmF5fSBCeXRlcyBhcnJheVxuICAgICAqIEBzZWUge0BsaW5rIG1kNS5kaWdlc3R9XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBoYXNoLmRpZ2VzdCgpO1xuICAgICAqL1xuICAgIE1kNS5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG5cbiAgICAgICAgdmFyIGgwID0gdGhpcy5oMCwgaDEgPSB0aGlzLmgxLCBoMiA9IHRoaXMuaDIsIGgzID0gdGhpcy5oMztcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGgwICYgMHhGRiwgKGgwID4+IDgpICYgMHhGRiwgKGgwID4+IDE2KSAmIDB4RkYsIChoMCA+PiAyNCkgJiAweEZGLFxuICAgICAgICAgICAgaDEgJiAweEZGLCAoaDEgPj4gOCkgJiAweEZGLCAoaDEgPj4gMTYpICYgMHhGRiwgKGgxID4+IDI0KSAmIDB4RkYsXG4gICAgICAgICAgICBoMiAmIDB4RkYsIChoMiA+PiA4KSAmIDB4RkYsIChoMiA+PiAxNikgJiAweEZGLCAoaDIgPj4gMjQpICYgMHhGRixcbiAgICAgICAgICAgIGgzICYgMHhGRiwgKGgzID4+IDgpICYgMHhGRiwgKGgzID4+IDE2KSAmIDB4RkYsIChoMyA+PiAyNCkgJiAweEZGXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgYXJyYXlcbiAgICAgKiBAbWVtYmVyb2YgTWQ1XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIGJ5dGVzIGFycmF5XG4gICAgICogQHJldHVybnMge0FycmF5fSBCeXRlcyBhcnJheVxuICAgICAqIEBzZWUge0BsaW5rIG1kNS5hcnJheX1cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGhhc2guYXJyYXkoKTtcbiAgICAgKi9cbiAgICBNZDUucHJvdG90eXBlLmFycmF5ID0gTWQ1LnByb3RvdHlwZS5kaWdlc3Q7XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGFycmF5QnVmZmVyXG4gICAgICogQG1lbWJlcm9mIE1kNVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBBcnJheUJ1ZmZlclxuICAgICAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gQXJyYXlCdWZmZXJcbiAgICAgKiBAc2VlIHtAbGluayBtZDUuYXJyYXlCdWZmZXJ9XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBoYXNoLmFycmF5QnVmZmVyKCk7XG4gICAgICovXG4gICAgTWQ1LnByb3RvdHlwZS5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuXG4gICAgICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoMTYpO1xuICAgICAgICB2YXIgYmxvY2tzID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGJsb2Nrc1swXSA9IHRoaXMuaDA7XG4gICAgICAgIGJsb2Nrc1sxXSA9IHRoaXMuaDE7XG4gICAgICAgIGJsb2Nrc1syXSA9IHRoaXMuaDI7XG4gICAgICAgIGJsb2Nrc1szXSA9IHRoaXMuaDM7XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgYnVmZmVyXG4gICAgICogQGRlcHJlY2F0ZWQgVGhpcyBtYXliZSBjb25mdXNlIHdpdGggQnVmZmVyIGluIG5vZGUuanMuIFBsZWFzZSB1c2UgYXJyYXlCdWZmZXIgaW5zdGVhZC5cbiAgICAgKiBAbWVtYmVyb2YgTWQ1XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGRlc2NyaXB0aW9uIE91dHB1dCBoYXNoIGFzIEFycmF5QnVmZmVyXG4gICAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBBcnJheUJ1ZmZlclxuICAgICAqIEBzZWUge0BsaW5rIG1kNS5idWZmZXJ9XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBoYXNoLmJ1ZmZlcigpO1xuICAgICAqL1xuICAgIE1kNS5wcm90b3R5cGUuYnVmZmVyID0gTWQ1LnByb3RvdHlwZS5hcnJheUJ1ZmZlcjtcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgYmFzZTY0XG4gICAgICogQG1lbWJlcm9mIE1kNVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBkZXNjcmlwdGlvbiBPdXRwdXQgaGFzaCBhcyBiYXNlNjQgc3RyaW5nXG4gICAgICogQHJldHVybnMge1N0cmluZ30gYmFzZTY0IHN0cmluZ1xuICAgICAqIEBzZWUge0BsaW5rIG1kNS5iYXNlNjR9XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBoYXNoLmJhc2U2NCgpO1xuICAgICAqL1xuICAgIE1kNS5wcm90b3R5cGUuYmFzZTY0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdjEsIHYyLCB2MywgYmFzZTY0U3RyID0gJycsIGJ5dGVzID0gdGhpcy5hcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1Oykge1xuICAgICAgICAgICAgdjEgPSBieXRlc1tpKytdO1xuICAgICAgICAgICAgdjIgPSBieXRlc1tpKytdO1xuICAgICAgICAgICAgdjMgPSBieXRlc1tpKytdO1xuICAgICAgICAgICAgYmFzZTY0U3RyICs9IEJBU0U2NF9FTkNPREVfQ0hBUlt2MSA+Pj4gMl0gK1xuICAgICAgICAgICAgICAgIEJBU0U2NF9FTkNPREVfQ0hBUlsodjEgPDwgNCB8IHYyID4+PiA0KSAmIDYzXSArXG4gICAgICAgICAgICAgICAgQkFTRTY0X0VOQ09ERV9DSEFSWyh2MiA8PCAyIHwgdjMgPj4+IDYpICYgNjNdICtcbiAgICAgICAgICAgICAgICBCQVNFNjRfRU5DT0RFX0NIQVJbdjMgJiA2M107XG4gICAgICAgIH1cbiAgICAgICAgdjEgPSBieXRlc1tpXTtcbiAgICAgICAgYmFzZTY0U3RyICs9IEJBU0U2NF9FTkNPREVfQ0hBUlt2MSA+Pj4gMl0gK1xuICAgICAgICAgICAgQkFTRTY0X0VOQ09ERV9DSEFSWyh2MSA8PCA0KSAmIDYzXSArXG4gICAgICAgICAgICAnPT0nO1xuICAgICAgICByZXR1cm4gYmFzZTY0U3RyO1xuICAgIH07XG5cbiAgICB2YXIgZXhwb3J0cyA9IGNyZWF0ZU1ldGhvZCgpO1xuXG4gICAgaWYgKENPTU1PTl9KUykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZXRob2QgbWQ1XGJcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIE1kNSBoYXNoIGZ1bmN0aW9uLCBleHBvcnQgdG8gZ2xvYmFsIGluIGJyb3dzZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheXxVaW50OEFycmF5fEFycmF5QnVmZmVyfSBtZXNzYWdlIG1lc3NhZ2UgdG8gaGFzaFxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBtZDUgaGFzaGVzXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIG1kNSgnJyk7IC8vIGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlXG4gICAgICAgICAqIG1kNSgnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZycpOyAvLyA5ZTEwN2Q5ZDM3MmJiNjgyNmJkODFkMzU0MmE0MTlkNlxuICAgICAgICAgKiBtZDUoJ1RoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2cuJyk7IC8vIGU0ZDkwOWMyOTBkMGZiMWNhMDY4ZmZhZGRmMjJjYmQwXG4gICAgICAgICAqXG4gICAgICAgICAqIC8vIEl0IGFsc28gc3VwcG9ydHMgVVRGLTggZW5jb2RpbmdcbiAgICAgICAgICogbWQ1KCfkuK3mlocnKTsgLy8gYTdiYWMyMjM5ZmNkY2IzYTA2NzkwM2Q4MDc3YzRhMDdcbiAgICAgICAgICpcbiAgICAgICAgICogLy8gSXQgYWxzbyBzdXBwb3J0cyBieXRlIGBBcnJheWAsIGBVaW50OEFycmF5YCwgYEFycmF5QnVmZmVyYFxuICAgICAgICAgKiBtZDUoW10pOyAvLyBkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZVxuICAgICAgICAgKiBtZDUobmV3IFVpbnQ4QXJyYXkoW10pKTsgLy8gZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2VcbiAgICAgICAgICovXG4gICAgICAgIHJvb3QubWQ1ID0gZXhwb3J0cztcbiAgICAgICAgaWYgKEFNRCkge1xuICAgICAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSkoKTsiXX0=