/******/(() => {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/"./node_modules/@firebase/util/dist/index.esm2017.js":
    /*!***********************************************************!*\
      !*** ./node_modules/@firebase/util/dist/index.esm2017.js ***!
      \***********************************************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"CONSTANTS": () => /* binding */CONSTANTS,
        /* harmony export */"DecodeBase64StringError": () => /* binding */DecodeBase64StringError,
        /* harmony export */"Deferred": () => /* binding */Deferred,
        /* harmony export */"ErrorFactory": () => /* binding */ErrorFactory,
        /* harmony export */"FirebaseError": () => /* binding */FirebaseError,
        /* harmony export */"MAX_VALUE_MILLIS": () => /* binding */MAX_VALUE_MILLIS,
        /* harmony export */"RANDOM_FACTOR": () => /* binding */RANDOM_FACTOR,
        /* harmony export */"Sha1": () => /* binding */Sha1,
        /* harmony export */"areCookiesEnabled": () => /* binding */areCookiesEnabled,
        /* harmony export */"assert": () => /* binding */assert,
        /* harmony export */"assertionError": () => /* binding */assertionError,
        /* harmony export */"async": () => /* binding */async,
        /* harmony export */"base64": () => /* binding */base64,
        /* harmony export */"base64Decode": () => /* binding */base64Decode,
        /* harmony export */"base64Encode": () => /* binding */base64Encode,
        /* harmony export */"base64urlEncodeWithoutPadding": () => /* binding */base64urlEncodeWithoutPadding,
        /* harmony export */"calculateBackoffMillis": () => /* binding */calculateBackoffMillis,
        /* harmony export */"contains": () => /* binding */contains,
        /* harmony export */"createMockUserToken": () => /* binding */createMockUserToken,
        /* harmony export */"createSubscribe": () => /* binding */createSubscribe,
        /* harmony export */"decode": () => /* binding */decode,
        /* harmony export */"deepCopy": () => /* binding */deepCopy,
        /* harmony export */"deepEqual": () => /* binding */deepEqual,
        /* harmony export */"deepExtend": () => /* binding */deepExtend,
        /* harmony export */"errorPrefix": () => /* binding */errorPrefix,
        /* harmony export */"extractQuerystring": () => /* binding */extractQuerystring,
        /* harmony export */"getDefaultAppConfig": () => /* binding */getDefaultAppConfig,
        /* harmony export */"getDefaultEmulatorHost": () => /* binding */getDefaultEmulatorHost,
        /* harmony export */"getDefaultEmulatorHostnameAndPort": () => /* binding */getDefaultEmulatorHostnameAndPort,
        /* harmony export */"getDefaults": () => /* binding */getDefaults,
        /* harmony export */"getExperimentalSetting": () => /* binding */getExperimentalSetting,
        /* harmony export */"getGlobal": () => /* binding */getGlobal,
        /* harmony export */"getModularInstance": () => /* binding */getModularInstance,
        /* harmony export */"getUA": () => /* binding */getUA,
        /* harmony export */"isAdmin": () => /* binding */isAdmin,
        /* harmony export */"isBrowser": () => /* binding */isBrowser,
        /* harmony export */"isBrowserExtension": () => /* binding */isBrowserExtension,
        /* harmony export */"isElectron": () => /* binding */isElectron,
        /* harmony export */"isEmpty": () => /* binding */isEmpty,
        /* harmony export */"isIE": () => /* binding */isIE,
        /* harmony export */"isIndexedDBAvailable": () => /* binding */isIndexedDBAvailable,
        /* harmony export */"isMobileCordova": () => /* binding */isMobileCordova,
        /* harmony export */"isNode": () => /* binding */isNode,
        /* harmony export */"isNodeSdk": () => /* binding */isNodeSdk,
        /* harmony export */"isReactNative": () => /* binding */isReactNative,
        /* harmony export */"isSafari": () => /* binding */isSafari,
        /* harmony export */"isUWP": () => /* binding */isUWP,
        /* harmony export */"isValidFormat": () => /* binding */isValidFormat,
        /* harmony export */"isValidTimestamp": () => /* binding */isValidTimestamp,
        /* harmony export */"issuedAtTime": () => /* binding */issuedAtTime,
        /* harmony export */"jsonEval": () => /* binding */jsonEval,
        /* harmony export */"map": () => /* binding */map,
        /* harmony export */"ordinal": () => /* binding */ordinal,
        /* harmony export */"promiseWithTimeout": () => /* binding */promiseWithTimeout,
        /* harmony export */"querystring": () => /* binding */querystring,
        /* harmony export */"querystringDecode": () => /* binding */querystringDecode,
        /* harmony export */"safeGet": () => /* binding */safeGet,
        /* harmony export */"stringLength": () => /* binding */stringLength,
        /* harmony export */"stringToByteArray": () => /* binding */stringToByteArray,
        /* harmony export */"stringify": () => /* binding */stringify,
        /* harmony export */"uuidv4": () => /* binding */uuidv4,
        /* harmony export */"validateArgCount": () => /* binding */validateArgCount,
        /* harmony export */"validateCallback": () => /* binding */validateCallback,
        /* harmony export */"validateContextObject": () => /* binding */validateContextObject,
        /* harmony export */"validateIndexedDBOpenable": () => /* binding */validateIndexedDBOpenable,
        /* harmony export */"validateNamespace": () => /* binding */validateNamespace
        /* harmony export */
      });
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
       */
      const CONSTANTS = {
        /**
         * @define {boolean} Whether this is the client Node.js SDK.
         */
        NODE_CLIENT: false,
        /**
         * @define {boolean} Whether this is the Admin Node.js SDK.
         */
        NODE_ADMIN: false,
        /**
         * Firebase SDK Version
         */
        SDK_VERSION: '${JSCORE_VERSION}'
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Throws an error if the provided assertion is falsy
       */
      const assert = function (assertion, message) {
        if (!assertion) {
          throw assertionError(message);
        }
      };
      /**
       * Returns an Error object suitable for throwing.
       */
      const assertionError = function (message) {
        return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const stringToByteArray$1 = function (str) {
        // TODO(user): Use native implementations if/when available
        const out = [];
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      };
      /**
       * Turns an array of numbers into the string given by the concatenation of the
       * characters to which the numbers correspond.
       * @param bytes Array of numbers representing characters.
       * @return Stringification of the array.
       */
      const byteArrayToString = function (bytes) {
        // TODO(user): Use native implementations if/when available
        const out = [];
        let pos = 0,
          c = 0;
        while (pos < bytes.length) {
          const c1 = bytes[pos++];
          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
          } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          }
        }
        return out.join('');
      };
      // We define it as an object literal instead of a class because a class compiled down to es5 can't
      // be treeshaked. https://github.com/rollup/rollup/issues/1691
      // Static lookup maps, lazily populated by init_()
      const base64 = {
        /**
         * Maps bytes to characters.
         */
        byteToCharMap_: null,
        /**
         * Maps characters to bytes.
         */
        charToByteMap_: null,
        /**
         * Maps bytes to websafe characters.
         * @private
         */
        byteToCharMapWebSafe_: null,
        /**
         * Maps websafe characters to bytes.
         * @private
         */
        charToByteMapWebSafe_: null,
        /**
         * Our default alphabet, shared between
         * ENCODED_VALS and ENCODED_VALS_WEBSAFE
         */
        ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
        /**
         * Our default alphabet. Value 64 (=) is special; it means "nothing."
         */
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + '+/=';
        },
        /**
         * Our websafe alphabet.
         */
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + '-_.';
        },
        /**
         * Whether this browser supports the atob and btoa functions. This extension
         * started at Mozilla but is now implemented by many browsers. We use the
         * ASSUME_* variables to avoid pulling in the full useragent detection library
         * but still allowing the standard per-browser compilations.
         *
         */
        HAS_NATIVE_SUPPORT: typeof atob === 'function',
        /**
         * Base64-encode an array of bytes.
         *
         * @param input An array of bytes (numbers with
         *     value in [0, 255]) to encode.
         * @param webSafe Boolean indicating we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeByteArray(input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
          }
          this.init_();
          const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          const output = [];
          for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
              outByte4 = 64;
              if (!haveByte2) {
                outByte3 = 64;
              }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }
          return output.join('');
        },
        /**
         * Base64-encode a string.
         *
         * @param input A string to encode.
         * @param webSafe If true, we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeString(input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }
          return this.encodeByteArray(stringToByteArray$1(input), webSafe);
        },
        /**
         * Base64-decode a string.
         *
         * @param input to decode.
         * @param webSafe True if we should use the
         *     alternative alphabet.
         * @return string representing the decoded value.
         */
        decodeString(input, webSafe) {
          // Shortcut for Mozilla browsers that implement
          // a native base64 encoder in the form of "btoa/atob"
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }
          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },
        /**
         * Base64-decode a string.
         *
         * In base-64 decoding, groups of four characters are converted into three
         * bytes.  If the encoder did not apply padding, the input length may not
         * be a multiple of 4.
         *
         * In this case, the last group will have fewer than 4 characters, and
         * padding will be inferred.  If the group has one or two characters, it decodes
         * to one byte.  If the group has three characters, it decodes to two bytes.
         *
         * @param input Input to decode.
         * @param webSafe True if we should use the web-safe alphabet.
         * @return bytes representing the decoded value.
         */
        decodeStringToByteArray(input, webSafe) {
          this.init_();
          const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          const output = [];
          for (let i = 0; i < input.length;) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
              throw new DecodeBase64StringError();
            }
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
              const outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
              output.push(outByte2);
              if (byte4 !== 64) {
                const outByte3 = byte3 << 6 & 0xc0 | byte4;
                output.push(outByte3);
              }
            }
          }
          return output;
        },
        /**
         * Lazy static initialization function. Called before
         * accessing any of the static map variables.
         * @private
         */
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
              // Be forgiving when decoding and correctly decode both encodings.
              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        }
      };
      /**
       * An error encountered while decoding base64 string.
       */
      class DecodeBase64StringError extends Error {
        constructor() {
          super(...arguments);
          this.name = 'DecodeBase64StringError';
        }
      }
      /**
       * URL-safe base64 encoding
       */
      const base64Encode = function (str) {
        const utf8Bytes = stringToByteArray$1(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      /**
       * URL-safe base64 encoding (without "." padding in the end).
       * e.g. Used in JSON Web Token (JWT) parts.
       */
      const base64urlEncodeWithoutPadding = function (str) {
        // Use base64url encoding and remove padding in the end (dot characters).
        return base64Encode(str).replace(/\./g, '');
      };
      /**
       * URL-safe base64 decoding
       *
       * NOTE: DO NOT use the global atob() function - it does NOT support the
       * base64Url variant encoding.
       *
       * @param str To be decoded
       * @return Decoded result, if possible
       */
      const base64Decode = function (str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error('base64Decode failed: ', e);
        }
        return null;
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Do a deep-copy of basic JavaScript Objects or Arrays.
       */
      function deepCopy(value) {
        return deepExtend(undefined, value);
      }
      /**
       * Copy properties from source to target (recursively allows extension
       * of Objects and Arrays).  Scalar values in the target are over-written.
       * If target is undefined, an object of the appropriate type will be created
       * (and returned).
       *
       * We recursively copy all child properties of plain Objects in the source- so
       * that namespace- like dictionaries are merged.
       *
       * Note that the target can be a function, in which case the properties in
       * the source Object are copied onto it as static properties of the Function.
       *
       * Note: we don't merge __proto__ to prevent prototype pollution
       */
      function deepExtend(target, source) {
        if (!(source instanceof Object)) {
          return source;
        }
        switch (source.constructor) {
          case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
          case Object:
            if (target === undefined) {
              target = {};
            }
            break;
          case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
          default:
            // Not a plain Object - treat it as a scalar.
            return source;
        }
        for (const prop in source) {
          // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
          if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
          }
          target[prop] = deepExtend(target[prop], source[prop]);
        }
        return target;
      }
      function isValidKey(key) {
        return key !== '__proto__';
      }

      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Polyfill for `globalThis` object.
       * @returns the `globalThis` object for the given environment.
       * @public
       */
      function getGlobal() {
        if (typeof self !== 'undefined') {
          return self;
        }
        if (typeof window !== 'undefined') {
          return window;
        }
        if (typeof __webpack_require__.g !== 'undefined') {
          return __webpack_require__.g;
        }
        throw new Error('Unable to locate global object.');
      }

      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
      /**
       * Attempt to read defaults from a JSON string provided to
       * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
       * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
       * The dots are in parens because certain compilers (Vite?) cannot
       * handle seeing that variable in comments.
       * See https://github.com/firebase/firebase-js-sdk/issues/6838
       */
      const getDefaultsFromEnvVariable = () => {
        if (typeof process === 'undefined' || typeof process.env === 'undefined') {
          return;
        }
        const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
        if (defaultsJsonString) {
          return JSON.parse(defaultsJsonString);
        }
      };
      const getDefaultsFromCookie = () => {
        if (typeof document === 'undefined') {
          return;
        }
        let match;
        try {
          match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
        } catch (e) {
          // Some environments such as Angular Universal SSR have a
          // `document` object but error on accessing `document.cookie`.
          return;
        }
        const decoded = match && base64Decode(match[1]);
        return decoded && JSON.parse(decoded);
      };
      /**
       * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
       * (1) if such an object exists as a property of `globalThis`
       * (2) if such an object was provided on a shell environment variable
       * (3) if such an object exists in a cookie
       * @public
       */
      const getDefaults = () => {
        try {
          return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
        } catch (e) {
          /**
           * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
           * to any environment case we have not accounted for. Log to
           * info instead of swallowing so we can find these unknown cases
           * and add paths for them if needed.
           */
          console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
          return;
        }
      };
      /**
       * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
       * for the given product.
       * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
       * @public
       */
      const getDefaultEmulatorHost = productName => {
        var _a, _b;
        return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
      };
      /**
       * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
       * for the given product.
       * @returns a pair of hostname and port like `["::1", 4000]` if available
       * @public
       */
      const getDefaultEmulatorHostnameAndPort = productName => {
        const host = getDefaultEmulatorHost(productName);
        if (!host) {
          return undefined;
        }
        const separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
        if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
          throw new Error(`Invalid host ${host} with no separate hostname and port!`);
        }
        // eslint-disable-next-line no-restricted-globals
        const port = parseInt(host.substring(separatorIndex + 1), 10);
        if (host[0] === '[') {
          // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
          return [host.substring(1, separatorIndex - 1), port];
        } else {
          return [host.substring(0, separatorIndex), port];
        }
      };
      /**
       * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
       * @public
       */
      const getDefaultAppConfig = () => {
        var _a;
        return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
      };
      /**
       * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
       * prefixed by "_")
       * @public
       */
      const getExperimentalSetting = name => {
        var _a;
        return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name}`];
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      class Deferred {
        constructor() {
          this.reject = () => {};
          this.resolve = () => {};
          this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
          });
        }
        /**
         * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */
        wrapCallback(callback) {
          return (error, value) => {
            if (error) {
              this.reject(error);
            } else {
              this.resolve(value);
            }
            if (typeof callback === 'function') {
              // Attaching noop handler just in case developer wasn't expecting
              // promises
              this.promise.catch(() => {});
              // Some of our callbacks don't expect a value and our own tests
              // assert that the parameter length is 1
              if (callback.length === 1) {
                callback(error);
              } else {
                callback(error, value);
              }
            }
          };
        }
      }

      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function createMockUserToken(token, projectId) {
        if (token.uid) {
          throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
        }
        // Unsecured JWTs use "none" as the algorithm.
        const header = {
          alg: 'none',
          type: 'JWT'
        };
        const project = projectId || 'demo-project';
        const iat = token.iat || 0;
        const sub = token.sub || token.user_id;
        if (!sub) {
          throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
        }
        const payload = Object.assign({
          // Set all required fields to decent defaults
          iss: `https://securetoken.google.com/${project}`,
          aud: project,
          iat,
          exp: iat + 3600,
          auth_time: iat,
          sub,
          user_id: sub,
          firebase: {
            sign_in_provider: 'custom',
            identities: {}
          }
        }, token);
        // Unsecured JWTs use the empty string as a signature.
        const signature = '';
        return [base64urlEncodeWithoutPadding(JSON.stringify(header)), base64urlEncodeWithoutPadding(JSON.stringify(payload)), signature].join('.');
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Returns navigator.userAgent string or '' if it's not defined.
       * @return user agent string
       */
      function getUA() {
        if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
          return navigator['userAgent'];
        } else {
          return '';
        }
      }
      /**
       * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
       *
       * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
       * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
       * wait for a callback.
       */
      function isMobileCordova() {
        return typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
      }
      /**
       * Detect Node.js.
       *
       * @return true if Node.js environment is detected or specified.
       */
      // Node detection logic from: https://github.com/iliakan/detect-node/
      function isNode() {
        var _a;
        const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
        if (forceEnvironment === 'node') {
          return true;
        } else if (forceEnvironment === 'browser') {
          return false;
        }
        try {
          return Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]';
        } catch (e) {
          return false;
        }
      }
      /**
       * Detect Browser Environment
       */
      function isBrowser() {
        return typeof self === 'object' && self.self === self;
      }
      function isBrowserExtension() {
        const runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
        return typeof runtime === 'object' && runtime.id !== undefined;
      }
      /**
       * Detect React Native.
       *
       * @return true if ReactNative environment is detected.
       */
      function isReactNative() {
        return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
      }
      /** Detects Electron apps. */
      function isElectron() {
        return getUA().indexOf('Electron/') >= 0;
      }
      /** Detects Internet Explorer. */
      function isIE() {
        const ua = getUA();
        return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
      }
      /** Detects Universal Windows Platform apps. */
      function isUWP() {
        return getUA().indexOf('MSAppHost/') >= 0;
      }
      /**
       * Detect whether the current SDK build is the Node version.
       *
       * @return true if it's the Node SDK build.
       */
      function isNodeSdk() {
        return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
      }
      /** Returns true if we are running in Safari. */
      function isSafari() {
        return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
      }
      /**
       * This method checks if indexedDB is supported by current browser/service worker context
       * @return true if indexedDB is supported by current browser/service worker context
       */
      function isIndexedDBAvailable() {
        try {
          return typeof indexedDB === 'object';
        } catch (e) {
          return false;
        }
      }
      /**
       * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
       * if errors occur during the database open operation.
       *
       * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
       * private browsing)
       */
      function validateIndexedDBOpenable() {
        return new Promise((resolve, reject) => {
          try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
              request.result.close();
              // delete database only when it doesn't pre-exist
              if (!preExist) {
                self.indexedDB.deleteDatabase(DB_CHECK_NAME);
              }
              resolve(true);
            };
            request.onupgradeneeded = () => {
              preExist = false;
            };
            request.onerror = () => {
              var _a;
              reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
          } catch (error) {
            reject(error);
          }
        });
      }
      /**
       *
       * This method checks whether cookie is enabled within current browser
       * @return true if cookie is enabled within current browser
       */
      function areCookiesEnabled() {
        if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
          return false;
        }
        return true;
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @fileoverview Standardized Firebase Error.
       *
       * Usage:
       *
       *   // Typescript string literals for type-safe codes
       *   type Err =
       *     'unknown' |
       *     'object-not-found'
       *     ;
       *
       *   // Closure enum for type-safe error codes
       *   // at-enum {string}
       *   var Err = {
       *     UNKNOWN: 'unknown',
       *     OBJECT_NOT_FOUND: 'object-not-found',
       *   }
       *
       *   let errors: Map<Err, string> = {
       *     'generic-error': "Unknown error",
       *     'file-not-found': "Could not find file: {$file}",
       *   };
       *
       *   // Type-safe function - must pass a valid error code as param.
       *   let error = new ErrorFactory<Err>('service', 'Service', errors);
       *
       *   ...
       *   throw error.create(Err.GENERIC);
       *   ...
       *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
       *   ...
       *   // Service: Could not file file: foo.txt (service/file-not-found).
       *
       *   catch (e) {
       *     assert(e.message === "Could not find file: foo.txt.");
       *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
       *       console.log("Could not read file: " + e['file']);
       *     }
       *   }
       */
      const ERROR_NAME = 'FirebaseError';
      // Based on code from:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
      class FirebaseError extends Error {
        constructor( /** The error code for this error. */
        code, message, /** Custom data for this error. */
        customData) {
          super(message);
          this.code = code;
          this.customData = customData;
          /** The custom name for all FirebaseErrors. */
          this.name = ERROR_NAME;
          // Fix For ES5
          // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
          Object.setPrototypeOf(this, FirebaseError.prototype);
          // Maintains proper stack trace for where our error was thrown.
          // Only available on V8.
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
          }
        }
      }
      class ErrorFactory {
        constructor(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }
        create(code) {
          const customData = (arguments.length <= 1 ? undefined : arguments[1]) || {};
          const fullCode = `${this.service}/${code}`;
          const template = this.errors[code];
          const message = template ? replaceTemplate(template, customData) : 'Error';
          // Service Name: Error message (service/code).
          const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
          const error = new FirebaseError(fullCode, fullMessage, customData);
          return error;
        }
      }
      function replaceTemplate(template, data) {
        return template.replace(PATTERN, (_, key) => {
          const value = data[key];
          return value != null ? String(value) : `<${key}?>`;
        });
      }
      const PATTERN = /\{\$([^}]+)}/g;

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Evaluates a JSON string into a javascript object.
       *
       * @param {string} str A string containing JSON.
       * @return {*} The javascript object representing the specified JSON.
       */
      function jsonEval(str) {
        return JSON.parse(str);
      }
      /**
       * Returns JSON representing a javascript object.
       * @param {*} data Javascript object to be stringified.
       * @return {string} The JSON contents of the object.
       */
      function stringify(data) {
        return JSON.stringify(data);
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Decodes a Firebase auth. token into constituent parts.
       *
       * Notes:
       * - May return with invalid / incomplete claims if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */
      const decode = function (token) {
        let header = {},
          claims = {},
          data = {},
          signature = '';
        try {
          const parts = token.split('.');
          header = jsonEval(base64Decode(parts[0]) || '');
          claims = jsonEval(base64Decode(parts[1]) || '');
          signature = parts[2];
          data = claims['d'] || {};
          delete claims['d'];
        } catch (e) {}
        return {
          header,
          claims,
          data,
          signature
        };
      };
      /**
       * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
       * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */
      const isValidTimestamp = function (token) {
        const claims = decode(token).claims;
        const now = Math.floor(new Date().getTime() / 1000);
        let validSince = 0,
          validUntil = 0;
        if (typeof claims === 'object') {
          if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
          } else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
          }
          if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
          } else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
          }
        }
        return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
      };
      /**
       * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
       *
       * Notes:
       * - May return null if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */
      const issuedAtTime = function (token) {
        const claims = decode(token).claims;
        if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
          return claims['iat'];
        }
        return null;
      };
      /**
       * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */
      const isValidFormat = function (token) {
        const decoded = decode(token),
          claims = decoded.claims;
        return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
      };
      /**
       * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
       *
       * Notes:
       * - May return a false negative if there's no native base64 decoding support.
       * - Doesn't check if the token is actually valid.
       */
      const isAdmin = function (token) {
        const claims = decode(token).claims;
        return typeof claims === 'object' && claims['admin'] === true;
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function contains(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      function safeGet(obj, key) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return obj[key];
        } else {
          return undefined;
        }
      }
      function isEmpty(obj) {
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
          }
        }
        return true;
      }
      function map(obj, fn, contextObj) {
        const res = {};
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
          }
        }
        return res;
      }
      /**
       * Deep equal two objects. Support Arrays and Objects.
       */
      function deepEqual(a, b) {
        if (a === b) {
          return true;
        }
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        for (const k of aKeys) {
          if (!bKeys.includes(k)) {
            return false;
          }
          const aProp = a[k];
          const bProp = b[k];
          if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
              return false;
            }
          } else if (aProp !== bProp) {
            return false;
          }
        }
        for (const k of bKeys) {
          if (!aKeys.includes(k)) {
            return false;
          }
        }
        return true;
      }
      function isObject(thing) {
        return thing !== null && typeof thing === 'object';
      }

      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
       * @internal
       */
      function promiseWithTimeout(promise) {
        let timeInMS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
        const deferredPromise = new Deferred();
        setTimeout(() => deferredPromise.reject('timeout!'), timeInMS);
        promise.then(deferredPromise.resolve, deferredPromise.reject);
        return deferredPromise.promise;
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
       * params object (e.g. {arg: 'val', arg2: 'val2'})
       * Note: You must prepend it with ? when adding it to a URL.
       */
      function querystring(querystringParams) {
        const params = [];
        for (const [key, value] of Object.entries(querystringParams)) {
          if (Array.isArray(value)) {
            value.forEach(arrayVal => {
              params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
          } else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
        }
        return params.length ? '&' + params.join('&') : '';
      }
      /**
       * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
       * (e.g. {arg: 'val', arg2: 'val2'})
       */
      function querystringDecode(querystring) {
        const obj = {};
        const tokens = querystring.replace(/^\?/, '').split('&');
        tokens.forEach(token => {
          if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
          }
        });
        return obj;
      }
      /**
       * Extract the query string part of a URL, including the leading question mark (if present).
       */
      function extractQuerystring(url) {
        const queryStart = url.indexOf('?');
        if (!queryStart) {
          return '';
        }
        const fragmentStart = url.indexOf('#', queryStart);
        return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @fileoverview SHA-1 cryptographic hash.
       * Variable names follow the notation in FIPS PUB 180-3:
       * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
       *
       * Usage:
       *   var sha1 = new sha1();
       *   sha1.update(bytes);
       *   var hash = sha1.digest();
       *
       * Performance:
       *   Chrome 23:   ~400 Mbit/s
       *   Firefox 16:  ~250 Mbit/s
       *
       */
      /**
       * SHA-1 cryptographic hash constructor.
       *
       * The properties declared here are discussed in the above algorithm document.
       * @constructor
       * @final
       * @struct
       */
      class Sha1 {
        constructor() {
          /**
           * Holds the previous values of accumulated variables a-e in the compress_
           * function.
           * @private
           */
          this.chain_ = [];
          /**
           * A buffer holding the partially computed hash result.
           * @private
           */
          this.buf_ = [];
          /**
           * An array of 80 bytes, each a part of the message to be hashed.  Referred to
           * as the message schedule in the docs.
           * @private
           */
          this.W_ = [];
          /**
           * Contains data needed to pad messages less than 64 bytes.
           * @private
           */
          this.pad_ = [];
          /**
           * @private {number}
           */
          this.inbuf_ = 0;
          /**
           * @private {number}
           */
          this.total_ = 0;
          this.blockSize = 512 / 8;
          this.pad_[0] = 128;
          for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
          }
          this.reset();
        }
        reset() {
          this.chain_[0] = 0x67452301;
          this.chain_[1] = 0xefcdab89;
          this.chain_[2] = 0x98badcfe;
          this.chain_[3] = 0x10325476;
          this.chain_[4] = 0xc3d2e1f0;
          this.inbuf_ = 0;
          this.total_ = 0;
        }
        /**
         * Internal compress helper function.
         * @param buf Block to compress.
         * @param offset Offset of the block in the buffer.
         * @private
         */
        compress_(buf, offset) {
          if (!offset) {
            offset = 0;
          }
          const W = this.W_;
          // get 16 big endian words
          if (typeof buf === 'string') {
            for (let i = 0; i < 16; i++) {
              // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
              // have a bug that turns the post-increment ++ operator into pre-increment
              // during JIT compilation.  We have code that depends heavily on SHA-1 for
              // correctness and which is affected by this bug, so I've removed all uses
              // of post-increment ++ in which the result value is used.  We can revert
              // this change once the Safari bug
              // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
              // most clients have been updated.
              W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
              offset += 4;
            }
          } else {
            for (let i = 0; i < 16; i++) {
              W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
              offset += 4;
            }
          }
          // expand to 80 words
          for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 0xffffffff;
          }
          let a = this.chain_[0];
          let b = this.chain_[1];
          let c = this.chain_[2];
          let d = this.chain_[3];
          let e = this.chain_[4];
          let f, k;
          // TODO(user): Try to unroll this loop to speed up the computation.
          for (let i = 0; i < 80; i++) {
            if (i < 40) {
              if (i < 20) {
                f = d ^ b & (c ^ d);
                k = 0x5a827999;
              } else {
                f = b ^ c ^ d;
                k = 0x6ed9eba1;
              }
            } else {
              if (i < 60) {
                f = b & c | d & (b | c);
                k = 0x8f1bbcdc;
              } else {
                f = b ^ c ^ d;
                k = 0xca62c1d6;
              }
            }
            const t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 0xffffffff;
            b = a;
            a = t;
          }
          this.chain_[0] = this.chain_[0] + a & 0xffffffff;
          this.chain_[1] = this.chain_[1] + b & 0xffffffff;
          this.chain_[2] = this.chain_[2] + c & 0xffffffff;
          this.chain_[3] = this.chain_[3] + d & 0xffffffff;
          this.chain_[4] = this.chain_[4] + e & 0xffffffff;
        }
        update(bytes, length) {
          // TODO(johnlenz): tighten the function signature and remove this check
          if (bytes == null) {
            return;
          }
          if (length === undefined) {
            length = bytes.length;
          }
          const lengthMinusBlock = length - this.blockSize;
          let n = 0;
          // Using local instead of member variables gives ~5% speedup on Firefox 16.
          const buf = this.buf_;
          let inbuf = this.inbuf_;
          // The outer while loop should execute at most twice.
          while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
              while (n <= lengthMinusBlock) {
                this.compress_(bytes, n);
                n += this.blockSize;
              }
            }
            if (typeof bytes === 'string') {
              while (n < length) {
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  // Jump to the outer loop so we use the full-block optimization.
                  break;
                }
              }
            } else {
              while (n < length) {
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  // Jump to the outer loop so we use the full-block optimization.
                  break;
                }
              }
            }
          }
          this.inbuf_ = inbuf;
          this.total_ += length;
        }
        /** @override */
        digest() {
          const digest = [];
          let totalBits = this.total_ * 8;
          // Add pad 0x80 0x00*.
          if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
          } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          }
          // Add # bits.
          for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
          }

          this.compress_(this.buf_);
          let n = 0;
          for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
              digest[n] = this.chain_[i] >> j & 255;
              ++n;
            }
          }
          return digest;
        }
      }

      /**
       * Helper to make a Subscribe function (just like Promise helps make a
       * Thenable).
       *
       * @param executor Function which can make calls to a single Observer
       *     as a proxy.
       * @param onNoObservers Callback when count of Observers goes to zero.
       */
      function createSubscribe(executor, onNoObservers) {
        const proxy = new ObserverProxy(executor, onNoObservers);
        return proxy.subscribe.bind(proxy);
      }
      /**
       * Implement fan-out for any number of Observers attached via a subscribe
       * function.
       */
      class ObserverProxy {
        /**
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */
        constructor(executor, onNoObservers) {
          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0;
          // Micro-task scheduling by calling task.then().
          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers;
          // Call the executor asynchronously so subscribers that are called
          // synchronously after the creation of the subscribe function
          // can still receive the very first value generated in the executor.
          this.task.then(() => {
            executor(this);
          }).catch(e => {
            this.error(e);
          });
        }
        next(value) {
          this.forEachObserver(observer => {
            observer.next(value);
          });
        }
        error(error) {
          this.forEachObserver(observer => {
            observer.error(error);
          });
          this.close(error);
        }
        complete() {
          this.forEachObserver(observer => {
            observer.complete();
          });
          this.close();
        }
        /**
         * Subscribe function that can be used to add an Observer to the fan-out list.
         *
         * - We require that no event is sent to a subscriber sychronously to their
         *   call to subscribe().
         */
        subscribe(nextOrObserver, error, complete) {
          let observer;
          if (nextOrObserver === undefined && error === undefined && complete === undefined) {
            throw new Error('Missing Observer.');
          }
          // Assemble an Observer object when passed as callback functions.
          if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
            observer = nextOrObserver;
          } else {
            observer = {
              next: nextOrObserver,
              error,
              complete
            };
          }
          if (observer.next === undefined) {
            observer.next = noop;
          }
          if (observer.error === undefined) {
            observer.error = noop;
          }
          if (observer.complete === undefined) {
            observer.complete = noop;
          }
          const unsub = this.unsubscribeOne.bind(this, this.observers.length);
          // Attempt to subscribe to a terminated Observable - we
          // just respond to the Observer with the final error or complete
          // event.
          if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
              try {
                if (this.finalError) {
                  observer.error(this.finalError);
                } else {
                  observer.complete();
                }
              } catch (e) {
                // nothing
              }
              return;
            });
          }
          this.observers.push(observer);
          return unsub;
        }
        // Unsubscribe is synchronous - we guarantee that no events are sent to
        // any unsubscribed Observer.
        unsubscribeOne(i) {
          if (this.observers === undefined || this.observers[i] === undefined) {
            return;
          }
          delete this.observers[i];
          this.observerCount -= 1;
          if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
          }
        }
        forEachObserver(fn) {
          if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
          }
          // Since sendOne calls asynchronously - there is no chance that
          // this.observers will become undefined.
          for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
          }
        }
        // Call the Observer via one of it's callback function. We are careful to
        // confirm that the observe has not been unsubscribed since this asynchronous
        // function had been queued.
        sendOne(i, fn) {
          // Execute the callback asynchronously
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.task.then(() => {
            if (this.observers !== undefined && this.observers[i] !== undefined) {
              try {
                fn(this.observers[i]);
              } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== 'undefined' && console.error) {
                  console.error(e);
                }
              }
            }
          });
        }
        close(err) {
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          if (err !== undefined) {
            this.finalError = err;
          }
          // Proxy is no longer needed - garbage collect references
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.task.then(() => {
            this.observers = undefined;
            this.onNoObservers = undefined;
          });
        }
      }
      /** Turn synchronous function into one called asynchronously. */
      // eslint-disable-next-line @typescript-eslint/ban-types
      function async(fn, onError) {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          Promise.resolve(true).then(() => {
            fn(...args);
          }).catch(error => {
            if (onError) {
              onError(error);
            }
          });
        };
      }
      /**
       * Return true if the object passed in implements any of the named methods.
       */
      function implementsAnyMethods(obj, methods) {
        if (typeof obj !== 'object' || obj === null) {
          return false;
        }
        for (const method of methods) {
          if (method in obj && typeof obj[method] === 'function') {
            return true;
          }
        }
        return false;
      }
      function noop() {
        // do nothing
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Check to make sure the appropriate number of arguments are provided for a public function.
       * Throws an error if it fails.
       *
       * @param fnName The function name
       * @param minCount The minimum number of arguments to allow for the function call
       * @param maxCount The maximum number of argument to allow for the function call
       * @param argCount The actual number of arguments provided.
       */
      const validateArgCount = function (fnName, minCount, maxCount, argCount) {
        let argError;
        if (argCount < minCount) {
          argError = 'at least ' + minCount;
        } else if (argCount > maxCount) {
          argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
        }
        if (argError) {
          const error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
          throw new Error(error);
        }
      };
      /**
       * Generates a string to prefix an error message about failed argument validation
       *
       * @param fnName The function name
       * @param argName The name of the argument
       * @return The prefix to add to the error thrown for validation.
       */
      function errorPrefix(fnName, argName) {
        return `${fnName} failed: ${argName} argument `;
      }
      /**
       * @param fnName
       * @param argumentNumber
       * @param namespace
       * @param optional
       */
      function validateNamespace(fnName, namespace, optional) {
        if (optional && !namespace) {
          return;
        }
        if (typeof namespace !== 'string') {
          //TODO: I should do more validation here. We only allow certain chars in namespaces.
          throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
        }
      }
      function validateCallback(fnName, argumentName,
      // eslint-disable-next-line @typescript-eslint/ban-types
      callback, optional) {
        if (optional && !callback) {
          return;
        }
        if (typeof callback !== 'function') {
          throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
        }
      }
      function validateContextObject(fnName, argumentName, context, optional) {
        if (optional && !context) {
          return;
        }
        if (typeof context !== 'object' || context === null) {
          throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
        }
      }

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
      // automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
      // so it's been modified.
      // Note that not all Unicode characters appear as single characters in JavaScript strings.
      // fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
      // use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
      // character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
      // pair).
      // See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
      /**
       * @param {string} str
       * @return {Array}
       */
      const stringToByteArray = function (str) {
        const out = [];
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          // Is this the lead surrogate in a surrogate pair?
          if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
          }
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      };
      /**
       * Calculate length without actually converting; useful for doing cheaper validation.
       * @param {string} str
       * @return {number}
       */
      const stringLength = function (str) {
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          const c = str.charCodeAt(i);
          if (c < 128) {
            p++;
          } else if (c < 2048) {
            p += 2;
          } else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
          } else {
            p += 3;
          }
        }
        return p;
      };

      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Copied from https://stackoverflow.com/a/2117523
       * Generates a new uuid.
       * @public
       */
      const uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      };

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * The amount of milliseconds to exponentially increase.
       */
      const DEFAULT_INTERVAL_MILLIS = 1000;
      /**
       * The factor to backoff by.
       * Should be a number greater than 1.
       */
      const DEFAULT_BACKOFF_FACTOR = 2;
      /**
       * The maximum milliseconds to increase to.
       *
       * <p>Visible for testing
       */
      const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
      /**
       * The percentage of backoff time to randomize by.
       * See
       * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
       * for context.
       *
       * <p>Visible for testing
       */
      const RANDOM_FACTOR = 0.5;
      /**
       * Based on the backoff method from
       * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
       * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
       */
      function calculateBackoffMillis(backoffCount) {
        let intervalMillis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_INTERVAL_MILLIS;
        let backoffFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_BACKOFF_FACTOR;
        // Calculates an exponentially increasing value.
        // Deviation: calculates value from count and a constant interval, so we only need to save value
        // and count to restore state.
        const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
        // A random "fuzz" to avoid waves of retries.
        // Deviation: randomFactor is required.
        const randomWait = Math.round(
        // A fraction of the backoff value to add/subtract.
        // Deviation: changes multiplication order to improve readability.
        RANDOM_FACTOR * currBaseValue * (
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        Math.random() - 0.5) * 2);
        // Limits backoff to max to avoid effectively permanent backoff.
        return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
      }

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Provide English ordinal letters after a number
       */
      function ordinal(i) {
        if (!Number.isFinite(i)) {
          return `${i}`;
        }
        return i + indicator(i);
      }
      function indicator(i) {
        i = Math.abs(i);
        const cent = i % 100;
        if (cent >= 10 && cent <= 20) {
          return 'th';
        }
        const dec = i % 10;
        if (dec === 1) {
          return 'st';
        }
        if (dec === 2) {
          return 'nd';
        }
        if (dec === 3) {
          return 'rd';
        }
        return 'th';
      }

      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function getModularInstance(service) {
        if (service && service._delegate) {
          return service._delegate;
        } else {
          return service;
        }
      }

      /***/
    },

    /***/"./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"additionalElements": () => /* binding */additionalElements,
            /* harmony export */"completeLevel": () => /* binding */completeLevel,
            /* harmony export */"init": () => /* binding */init,
            /* harmony export */"initStart": () => /* binding */initStart,
            /* harmony export */"leftNeighboorBlockFromHero": () => /* binding */leftNeighboorBlockFromHero,
            /* harmony export */"level": () => /* binding */level,
            /* harmony export */"levelMap": () => /* binding */levelMap,
            /* harmony export */"parsedCollisions": () => /* binding */parsedCollisions,
            /* harmony export */"platforms": () => /* binding */platforms,
            /* harmony export */"player": () => /* binding */player,
            /* harmony export */"requestAnim": () => /* binding */requestAnim,
            /* harmony export */"setVolumeRangeHandlers": () => /* binding */setVolumeRangeHandlers,
            /* harmony export */"timerShoot_1": () => /* binding */timerShoot_1,
            /* harmony export */"timerShoot_2": () => /* binding */timerShoot_2
            /* harmony export */
          });
          /* harmony import */
          var _js_SPA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./js/SPA */"./src/js/SPA.js");
          /* harmony import */
          var _js_Collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./js/Collision */"./src/js/Collision.js");
          /* harmony import */
          var _js_Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./js/Canvas */"./src/js/Canvas.js");
          /* harmony import */
          var _js_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./js/Utils */"./src/js/Utils.js");
          /* harmony import */
          var _js_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./js/Player */"./src/js/Player.js");
          /* harmony import */
          var _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./js/data/Audio */"./src/js/data/Audio.js");
          /* harmony import */
          var _js_Platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./js/Platform */"./src/js/Platform.js");
          /* harmony import */
          var _js_Traps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./js/Traps */"./src/js/Traps.js");
          /* harmony import */
          var _js_Assets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./js/Assets */"./src/js/Assets.js");
          /* harmony import */
          var _js_Keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./js/Keys */"./src/js/Keys.js");
          /* harmony import */
          var _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./js/AdditionalElements */"./src/js/AdditionalElements.js");
          /* harmony import */
          var _js_Levels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./js/Levels */"./src/js/Levels.js");
          /* harmony import */
          var firebase_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! firebase/app */"./node_modules/firebase/app/dist/esm/index.esm.js");
          /* harmony import */
          var firebase_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! firebase/analytics */"./node_modules/firebase/analytics/dist/esm/index.esm.js");
          /* harmony import */
          var https_www_gstatic_com_firebasejs_9_10_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js */"https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_js_SPA__WEBPACK_IMPORTED_MODULE_0__, _js_Collision__WEBPACK_IMPORTED_MODULE_1__, _js_Utils__WEBPACK_IMPORTED_MODULE_3__, _js_Player__WEBPACK_IMPORTED_MODULE_4__, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__, _js_Platform__WEBPACK_IMPORTED_MODULE_6__, _js_Traps__WEBPACK_IMPORTED_MODULE_7__, _js_Keys__WEBPACK_IMPORTED_MODULE_9__, _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_10__, _js_Levels__WEBPACK_IMPORTED_MODULE_11__, https_www_gstatic_com_firebasejs_9_10_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_14__]);
          [_js_SPA__WEBPACK_IMPORTED_MODULE_0__, _js_Collision__WEBPACK_IMPORTED_MODULE_1__, _js_Utils__WEBPACK_IMPORTED_MODULE_3__, _js_Player__WEBPACK_IMPORTED_MODULE_4__, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__, _js_Platform__WEBPACK_IMPORTED_MODULE_6__, _js_Traps__WEBPACK_IMPORTED_MODULE_7__, _js_Keys__WEBPACK_IMPORTED_MODULE_9__, _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_10__, _js_Levels__WEBPACK_IMPORTED_MODULE_11__, https_www_gstatic_com_firebasejs_9_10_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          //import './sass/styles.scss';  // прописано в Webpack entry points

          //document.addEventListener('DOMContentLoaded', mySPA.init('root', 'content'));

          const fontSize = _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height / 5; // 10
          _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width = 1024; // 1280
          _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height = 576; // 720
          let requestAnim = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
          window.addEventListener('keydown', e => (0, _js_Utils__WEBPACK_IMPORTED_MODULE_3__.fullScreen)(e, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas));
          let leftNeighboorBlockFromHeroArr = [];
          let timerShoot_1 = null;
          let timerShoot_2 = null;
          let leftNeighboorBlockFromHero = null;
          let completeLevel = false;

          ///////////////////////////////////////////////////////////

          // import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
          // import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

          // const firebaseConfig = { //const firebaseConfig
          //   apiKey: "AIzaSyC3ZZZjESvmu67rAvgSLfy9pmGXRayFI_M",
          //   authDomain: "game-a0716.firebaseapp.com",
          //   projectId: "game-a0716",
          //   storageBucket: "game-a0716.appspot.com",
          //   messagingSenderId: "456118074936",
          //   appId: "1:456118074936:web:8b8abbf033f2c7080230cd"
          // };
          // // Initialize Firebase
          // const auth = getAuth(firebaseConfig);
          //                                 const app = initializeApp(firebaseConfig);

          // // Detect auth state
          // onAuthStateChanged(auth, user => {
          //   if (user !== null) {
          //     console.log('logged in!');
          //   } else {
          //     console.log('No user');
          //   }
          // });

          // import { initializeApp } from 'firebase/app';
          // import { getAuth, connectAuthEmulator, signInWithEmailAndPassword/* , onAuthStateChanged, createUserWithEmailAndPassword */ } from 'firebase/auth';
          // import {  } from 'firebase/firestore';

          // const firebaseApp = initializeApp({
          //   apiKey: "AIzaSyC3ZZZjESvmu67rAvgSLfy9pmGXRayFI_M",
          //   authDomain: "game-a0716.firebaseapp.com",
          //   projectId: "game-a0716",
          //   storageBucket: "game-a0716.appspot.com",
          //   messagingSenderId: "456118074936",
          //   appId: "1:456118074936:web:8b8abbf033f2c7080230cd"
          // });
          // const auth = getAuth(firebaseApp);

          // Import the functions you need from the SDKs you need

          // TODO: Add SDKs for Firebase products that you want to use
          // https://firebase.google.com/docs/web/setup#available-libraries

          // Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          const firebaseConfig = {
            apiKey: "AIzaSyB4Z71YW8OGtcsh-tiazaqYC7BS05pTxi4",
            authDomain: "shinerweb-auth.firebaseapp.com",
            projectId: "shinerweb-auth",
            storageBucket: "shinerweb-auth.appspot.com",
            messagingSenderId: "487776642853",
            appId: "1:487776642853:web:25b4821e77c6de7e90dccc",
            measurementId: "G-00FGRRF868"
          };

          // Initialize Firebase
          const app = (0, firebase_app__WEBPACK_IMPORTED_MODULE_12__.initializeApp)(firebaseConfig);
          const analytics = (0, firebase_analytics__WEBPACK_IMPORTED_MODULE_13__.getAnalytics)(app);
          const auth = (0, https_www_gstatic_com_firebasejs_9_10_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_14__.getAuth)();
          console.log(app);

          //----- New Registration code start	  
          document.getElementById("btnRegister").addEventListener("click", function () {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            //For new registration
            (0, https_www_gstatic_com_firebasejs_9_10_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_14__.createUserWithEmailAndPassword)(auth, email, password).then(userCredential => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              alert("Registration successfully!!");
              // ...
            }).catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              console.log(errorMessage);
              alert(error);
            });
          });
          //----- End

          //----- Login code start	  
          document.getElementById("btnLogin").addEventListener("click", function () {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            (0, https_www_gstatic_com_firebasejs_9_10_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_14__.signInWithEmailAndPassword)(auth, email, password).then(userCredential => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              alert(user.email + " Login successfully!!!");
              document.getElementById('btnLogout').style.display = 'block';
              // ...
            }).catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
              alert(errorMessage);
            });
          });
          //----- End

          //----- Logout code start	  
          document.getElementById("btnLogout").addEventListener("click", function () {
            (0, https_www_gstatic_com_firebasejs_9_10_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_14__.signOut)(auth).then(() => {
              // Sign-out successful.
              console.log('Sign-out successful.');
              alert('Sign-out successful.');
              document.getElementById('btnLogout').style.display = 'none';
            }).catch(error => {
              // An error happened.
              console.log('An error happened.');
            });
          });
          //----- End

          ////////////////////////////////////////////////////////////

          let additionalElements = [new _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_10__.AdditionalElements(0, 0, (0, _js_Utils__WEBPACK_IMPORTED_MODULE_3__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_8__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height))];
          let level = 1;
          function increseLevel(obj) {
            return level >= Object.keys(obj).length ? level : ++level;
          }
          let platforms = [],
            levelMap,
            parsedCollisions,
            player;

          //requestLevelMap(`../src/js/json/levelMap_${level}.json`, setLevelMap, parseCollisitions, createPlayer, init, animate);

          function setLevelMap(value) {
            levelMap = value;
            console.log(levelMap);
            return levelMap;
          }
          function createPlayer(levelMap, platforms) {
            levelMap.map.forEach((row, index_Y) => {
              row.forEach((cell, index_X) => {
                if (cell === 'st') {
                  player = new _js_Player__WEBPACK_IMPORTED_MODULE_4__.Player({
                    platforms
                  }, index_X * 36, index_Y * 36, levelMap.margin.left, levelMap.margin.top);
                }
              });
            });
            return player;
          }
          let initStart = true;

          // Получение значений с input type='range' volume
          const main = document.getElementById('content');
          function setVolumeRangeHandlers() {
            const volumeRangeSound = main.querySelector('#volume-snd');
            const volumeRangeMusic = main.querySelector('#volume-msc');
            if (volumeRangeSound || volumeRangeMusic) {
              volumeRangeSound.addEventListener('change', () => {
                for (let sound in _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio) {
                  if (_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio?.[sound]?.[_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.source] && sound != 'track_1' && sound != 'track_2' && sound != 'track_3' && sound != 'track_4') {
                    _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio[sound][_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.source].volume = volumeRangeSound.value;
                  }
                }
                (0, _js_Utils__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)(volumeRangeSound.value, volumeRangeMusic.value);
              });
              volumeRangeMusic.addEventListener('change', () => {
                for (let sound in _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio) {
                  if (_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio?.[sound]?.[_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.source] && (sound === 'track_1' || sound === 'track_2' || sound === 'track_3' || sound === 'track_4')) {
                    _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio[sound][_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.source].volume = volumeRangeMusic.value;
                  }
                }
                (0, _js_Utils__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)(volumeRangeSound.value, volumeRangeMusic.value);
              });
            }
          }
          main && window.addEventListener('load', setVolumeRangeHandlers);
          main && window.addEventListener('hashchange', setVolumeRangeHandlers);

          //document.getElementById('mute-btn').addEventListener('click', muteSound);

          let track = (0, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.getRandomTrack)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio);
          track.pause();
          track = (0, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.getRandomTrack)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio);
          let isInitMusicPlay = false;
          function playMusic(e) {
            if (e.target.closest('#select-lvl')) {
              if (!isInitMusicPlay) {
                track.play();
              }
              isInitMusicPlay = true;
            }
          }
          window.addEventListener('click', playMusic);
          track.onended = function () {
            (0, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.playNextTrack)(track, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio);
          };
          function reloadGameplay() {
            additionalElements = [new _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_10__.AdditionalElements(0, 0, (0, _js_Utils__WEBPACK_IMPORTED_MODULE_3__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_8__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height))];
            platforms.forEach(platform => {
              platform.type === 'oneStep' && platform.restore();
            });
            levelMap.map.forEach((row, index_Y) => {
              row.forEach((cell, index_X) => {
                cell === 'st' && (player = new _js_Player__WEBPACK_IMPORTED_MODULE_4__.Player({
                  platforms
                }, index_X * 36, index_Y * 36, levelMap.margin.left, levelMap.margin.top));
              });
            });
          }
          let levelOverlay = (0, _js_Utils__WEBPACK_IMPORTED_MODULE_3__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_8__.win);
          levelOverlay.width = _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width;
          levelOverlay.height = _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height;
          function init() {
            (0, _js_Utils__WEBPACK_IMPORTED_MODULE_3__.flamethrowerShootSoundIntervalInit)();
            initStart = false;
            player.velocity.y = 1;
            player.alive = true;
            _js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.spaceToggleCounter = 1;
            if (player.completeLevel) {
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.save();
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.fillStyle = 'rgb(247, 251, 254)';
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.fillRect(0, 0, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width / 2, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height / 2);
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.drawImage(levelOverlay, 0, 0, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height);
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.fillStyle = 'rgb(21, 173, 188)';
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.font = `normal ${fontSize}px Rubik Iso`;
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.textBaseline = 'middle';
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.textAlign = 'center';
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.style.letterSpacing = `${fontSize / 20}px`;
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.fillText('Next level', _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width / 2, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height / 2);
              _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.restore();
              setTimeout(() => reloadGameplay(), 1250);
              player.completeLevel = false;
            } else {
              reloadGameplay();
            }
            return player;
          }
          function animate() {
            requestAnim(animate);
            console.log('animation counter');
            additionalElements.forEach(element => element.draw());
            platforms.forEach(platform => platform.draw());
            platforms.forEach(platform => platform.update());
            platforms.forEach(platform => {
              (platform.type === 'jumpToggleActive' || platform.type === 'jumpToggleDisabled') && platform.toggle();
              if (platform.type === 'platformOne' || platform.type === 'platformTwo' || platform.type === 'platformThree' || platform.type === 'deadSignalZone' || platform.type === 'flamethrowerLeft' || platform.type === 'flamethrowerRight' || platform.type === 'flamethrowerUp' || platform.type === 'flamethrowerDown') {
                platform.collision();
              }
              if (platform.type === 'flamethrowerLeft' || platform.type === 'flamethrowerRight' || platform.type === 'flamethrowerUp' || platform.type === 'flamethrowerDown') {
                platform.shoot();
              }
            });
            leftNeighboorBlockFromHeroArr = platforms.filter(platform => {
              return platform.left <= player.left && platform.top <= player.top && platform.bottom >= player.bottom;
            });
            leftNeighboorBlockFromHero = leftNeighboorBlockFromHeroArr[leftNeighboorBlockFromHeroArr.length - 1];
            player.update();
            if (_js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.right.pressed && player.position.x + player.width <= _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width) {
              // упор персонажа в правый край экрана
              player.velocity.x = 2;
            } else if (_js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.left.pressed && player.position.x >= 0) {
              // упор персонажа в левый край экрана
              player.velocity.x = -2;
            } else {
              player.velocity.x = 0;
            }
            if (player.velocity.y >= player.jumpHeight - player.gravity && !_js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.lastPressed === 'right') {
              // 10 - когда персонаж на земле
              player.currentSprite = player.sprites.idle.right;
            } else if (player.velocity.y >= player.jumpHeight - player.gravity && !_js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.lastPressed === 'left') {
              // 10 - когда персонаж на земле
              player.currentSprite = player.sprites.idle.left;
            }

            // Падение в пропасть (см. комментарии в player.update())
            if (player.position.y > _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height) {
              (0, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.fallingInDepth2);
              _js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.jumpToggleActive = !_js_Keys__WEBPACK_IMPORTED_MODULE_9__.keys.jumpToggleActive;
              init();
            }
          }
          // init();
          // animate();

          window.addEventListener('keydown', _js_Keys__WEBPACK_IMPORTED_MODULE_9__.keyDownHandler);
          window.addEventListener('keyup', _js_Keys__WEBPACK_IMPORTED_MODULE_9__.keyUpHandler);
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/js/AdditionalElements.js":
    /*!**************************************!*\
      !*** ./src/js/AdditionalElements.js ***!
      \**************************************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"AdditionalElements": () => /* binding */AdditionalElements
            /* harmony export */
          });
          /* harmony import */
          var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Canvas */"./src/js/Canvas.js");
          /* harmony import */
          var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Utils */"./src/js/Utils.js");
          /* harmony import */
          var _Assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./Assets */"./src/js/Assets.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Utils__WEBPACK_IMPORTED_MODULE_1__]);
          _Utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          class AdditionalElements {
            constructor(posX, posY, image) {
              this.position = {
                x: posX,
                y: posY
              };
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.backgroundImg, _Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height)
              };
              this.currentSprite = this.sprites.idle;
              this.type = 'backgrounds';
              this.image = image;
              this.width = image.width;
              this.height = image.height;
            }
            draw() {
              if (!this.currentSprite.loaded) return;
              _Canvas__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.currentSprite, this.position.x, this.position.y, _Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height);
            }
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/js/Assets.js":
    /*!**************************!*\
      !*** ./src/js/Assets.js ***!
      \**************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"arrows": () => /* reexport default export from named module */_assets_img_SPA_arrows_png__WEBPACK_IMPORTED_MODULE_39__,
        /* harmony export */"backgroundImg": () => /* reexport default export from named module */_assets_img_Background_images_bg_1_jpg__WEBPACK_IMPORTED_MODULE_10__,
        /* harmony export */"birdFlyingImg": () => /* reexport default export from named module */_assets_img_SPA_flying_gif__WEBPACK_IMPORTED_MODULE_48__,
        /* harmony export */"brick_1": () => /* reexport default export from named module */_assets_img_Platforms_brick_1_png__WEBPACK_IMPORTED_MODULE_24__,
        /* harmony export */"brick_2": () => /* reexport default export from named module */_assets_img_Platforms_brick_2_png__WEBPACK_IMPORTED_MODULE_25__,
        /* harmony export */"cloud_1": () => /* reexport default export from named module */_assets_img_SPA_cloud_1_png__WEBPACK_IMPORTED_MODULE_41__,
        /* harmony export */"cloud_2": () => /* reexport default export from named module */_assets_img_SPA_cloud_2_png__WEBPACK_IMPORTED_MODULE_42__,
        /* harmony export */"cloud_3": () => /* reexport default export from named module */_assets_img_SPA_cloud_3_png__WEBPACK_IMPORTED_MODULE_43__,
        /* harmony export */"cloud_4": () => /* reexport default export from named module */_assets_img_SPA_cloud_4_png__WEBPACK_IMPORTED_MODULE_44__,
        /* harmony export */"deadSignalZone": () => /* reexport default export from named module */_assets_img_Traps_Dead_signal_zone_png__WEBPACK_IMPORTED_MODULE_29__,
        /* harmony export */"deadSignalZoneHover": () => /* reexport default export from named module */_assets_img_Traps_Dead_signal_zone_hover_png__WEBPACK_IMPORTED_MODULE_30__,
        /* harmony export */"errorImg": () => /* reexport default export from named module */_assets_img_SPA_404_png__WEBPACK_IMPORTED_MODULE_47__,
        /* harmony export */"fKeyImg": () => /* reexport default export from named module */_assets_img_SPA_f_png__WEBPACK_IMPORTED_MODULE_45__,
        /* harmony export */"fan": () => /* reexport default export from named module */_assets_img_Traps_Fan_png__WEBPACK_IMPORTED_MODULE_27__,
        /* harmony export */"finish": () => /* reexport default export from named module */_assets_img_Platforms_Finish_T_L_png__WEBPACK_IMPORTED_MODULE_23__,
        /* harmony export */"fireballDown": () => /* reexport default export from named module */_assets_img_Traps_Fireball_down_png__WEBPACK_IMPORTED_MODULE_36__,
        /* harmony export */"fireballLeft": () => /* reexport default export from named module */_assets_img_Traps_Fireball_left_png__WEBPACK_IMPORTED_MODULE_37__,
        /* harmony export */"fireballRight": () => /* reexport default export from named module */_assets_img_Traps_Fireball_right_png__WEBPACK_IMPORTED_MODULE_38__,
        /* harmony export */"fireballUp": () => /* reexport default export from named module */_assets_img_Traps_Fireball_up_png__WEBPACK_IMPORTED_MODULE_35__,
        /* harmony export */"flamethrowerDown": () => /* reexport default export from named module */_assets_img_Traps_Flamethrower_down_png__WEBPACK_IMPORTED_MODULE_34__,
        /* harmony export */"flamethrowerLeft": () => /* reexport default export from named module */_assets_img_Traps_Flamethrower_left_png__WEBPACK_IMPORTED_MODULE_31__,
        /* harmony export */"flamethrowerRight": () => /* reexport default export from named module */_assets_img_Traps_Flamethrower_right_png__WEBPACK_IMPORTED_MODULE_32__,
        /* harmony export */"flamethrowerUp": () => /* reexport default export from named module */_assets_img_Traps_Flamethrower_up_png__WEBPACK_IMPORTED_MODULE_33__,
        /* harmony export */"heroDeath": () => /* reexport default export from named module */_assets_img_Hero_Player_death_png__WEBPACK_IMPORTED_MODULE_9__,
        /* harmony export */"heroFallL": () => /* reexport default export from named module */_assets_img_Hero_Fall_left_png__WEBPACK_IMPORTED_MODULE_8__,
        /* harmony export */"heroFallR": () => /* reexport default export from named module */_assets_img_Hero_Fall_right_png__WEBPACK_IMPORTED_MODULE_7__,
        /* harmony export */"heroIdleL": () => /* reexport default export from named module */_assets_img_Hero_Idle_left_png__WEBPACK_IMPORTED_MODULE_2__,
        /* harmony export */"heroIdleR": () => /* reexport default export from named module */_assets_img_Hero_Idle_right_png__WEBPACK_IMPORTED_MODULE_1__,
        /* harmony export */"heroJumpL": () => /* reexport default export from named module */_assets_img_Hero_Jump_left_png__WEBPACK_IMPORTED_MODULE_6__,
        /* harmony export */"heroJumpR": () => /* reexport default export from named module */_assets_img_Hero_Jump_right_png__WEBPACK_IMPORTED_MODULE_5__,
        /* harmony export */"heroRunL": () => /* reexport default export from named module */_assets_img_Hero_Run_left_png__WEBPACK_IMPORTED_MODULE_4__,
        /* harmony export */"heroRunR": () => /* reexport default export from named module */_assets_img_Hero_Run_right_png__WEBPACK_IMPORTED_MODULE_3__,
        /* harmony export */"logoImg_1": () => /* reexport default export from named module */_assets_img_SPA_logo_png__WEBPACK_IMPORTED_MODULE_49__,
        /* harmony export */"logoImg_2": () => /* reexport default export from named module */_assets_img_SPA_logo_2_png__WEBPACK_IMPORTED_MODULE_50__,
        /* harmony export */"mKeyImg": () => /* reexport default export from named module */_assets_img_SPA_m_png__WEBPACK_IMPORTED_MODULE_46__,
        /* harmony export */"muteOff": () => /* reexport default export from named module */_assets_img_SPA_mute_off_png__WEBPACK_IMPORTED_MODULE_51__,
        /* harmony export */"muteOn": () => /* reexport default export from named module */_assets_img_SPA_mute_on_png__WEBPACK_IMPORTED_MODULE_52__,
        /* harmony export */"platformImgSrc300": () => /* reexport default export from named module */_assets_img_Platforms_platform_png__WEBPACK_IMPORTED_MODULE_0__,
        /* harmony export */"platformJump": () => /* reexport default export from named module */_assets_img_Platforms_Platform_jump_png__WEBPACK_IMPORTED_MODULE_15__,
        /* harmony export */"platformJumpDisabled": () => /* reexport default export from named module */_assets_img_Platforms_Platform_jump_disabled_png__WEBPACK_IMPORTED_MODULE_16__,
        /* harmony export */"platformOne": () => /* reexport default export from named module */_assets_img_Platforms_Platform_one_png__WEBPACK_IMPORTED_MODULE_17__,
        /* harmony export */"platformOneDisabled": () => /* reexport default export from named module */_assets_img_Platforms_Platform_one_disabled_png__WEBPACK_IMPORTED_MODULE_20__,
        /* harmony export */"platformOneStep": () => /* reexport default export from named module */_assets_img_Platforms_Platform_oneStep_png__WEBPACK_IMPORTED_MODULE_13__,
        /* harmony export */"platformOneStepExplosion": () => /* reexport default export from named module */_assets_img_Platforms_Platform_oneStep_Explosion_png__WEBPACK_IMPORTED_MODULE_14__,
        /* harmony export */"platformSolid": () => /* reexport default export from named module */_assets_img_Platforms_Platform_solid_png__WEBPACK_IMPORTED_MODULE_12__,
        /* harmony export */"platformThree": () => /* reexport default export from named module */_assets_img_Platforms_Platform_three_png__WEBPACK_IMPORTED_MODULE_19__,
        /* harmony export */"platformThreeDisabled": () => /* reexport default export from named module */_assets_img_Platforms_Platform_three_disabled_png__WEBPACK_IMPORTED_MODULE_22__,
        /* harmony export */"platformTwo": () => /* reexport default export from named module */_assets_img_Platforms_Platform_two_png__WEBPACK_IMPORTED_MODULE_18__,
        /* harmony export */"platformTwoDisabled": () => /* reexport default export from named module */_assets_img_Platforms_Platform_two_disabled_png__WEBPACK_IMPORTED_MODULE_21__,
        /* harmony export */"saw": () => /* reexport default export from named module */_assets_img_Traps_Saw_png__WEBPACK_IMPORTED_MODULE_26__,
        /* harmony export */"spaceImg": () => /* reexport default export from named module */_assets_img_SPA_space_png__WEBPACK_IMPORTED_MODULE_40__,
        /* harmony export */"spike": () => /* reexport default export from named module */_assets_img_Traps_Platform_spikes_png__WEBPACK_IMPORTED_MODULE_28__,
        /* harmony export */"win": () => /* reexport default export from named module */_assets_img_Background_images_Win_4_jpg__WEBPACK_IMPORTED_MODULE_11__
        /* harmony export */
      });
      /* harmony import */
      var _assets_img_Platforms_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../../assets/img/Platforms/platform.png */"./assets/img/Platforms/platform.png");
      /* harmony import */
      var _assets_img_Hero_Idle_right_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../../assets/img/Hero/Idle_right.png */"./assets/img/Hero/Idle_right.png");
      /* harmony import */
      var _assets_img_Hero_Idle_left_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../assets/img/Hero/Idle_left.png */"./assets/img/Hero/Idle_left.png");
      /* harmony import */
      var _assets_img_Hero_Run_right_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../../assets/img/Hero/Run_right.png */"./assets/img/Hero/Run_right.png");
      /* harmony import */
      var _assets_img_Hero_Run_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../../assets/img/Hero/Run_left.png */"./assets/img/Hero/Run_left.png");
      /* harmony import */
      var _assets_img_Hero_Jump_right_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../../../assets/img/Hero/Jump_right.png */"./assets/img/Hero/Jump_right.png");
      /* harmony import */
      var _assets_img_Hero_Jump_left_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../../../assets/img/Hero/Jump_left.png */"./assets/img/Hero/Jump_left.png");
      /* harmony import */
      var _assets_img_Hero_Fall_right_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../../../assets/img/Hero/Fall_right.png */"./assets/img/Hero/Fall_right.png");
      /* harmony import */
      var _assets_img_Hero_Fall_left_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../../../assets/img/Hero/Fall_left.png */"./assets/img/Hero/Fall_left.png");
      /* harmony import */
      var _assets_img_Hero_Player_death_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../../../assets/img/Hero/Player_death.png */"./assets/img/Hero/Player_death.png");
      /* harmony import */
      var _assets_img_Background_images_bg_1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../../../../assets/img/Background_images/bg_1.jpg */"./assets/img/Background_images/bg_1.jpg");
      /* harmony import */
      var _assets_img_Background_images_Win_4_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../../../../assets/img/Background_images/Win_4.jpg */"./assets/img/Background_images/Win_4.jpg");
      /* harmony import */
      var _assets_img_Platforms_Platform_solid_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_solid.png */"./assets/img/Platforms/Platform_solid.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_oneStep_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_oneStep.png */"./assets/img/Platforms/Platform_oneStep.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_oneStep_Explosion_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_oneStep_Explosion.png */"./assets/img/Platforms/Platform_oneStep_Explosion.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_jump_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_jump.png */"./assets/img/Platforms/Platform_jump.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_jump_disabled_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_jump_disabled.png */"./assets/img/Platforms/Platform_jump_disabled.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_one_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_one.png */"./assets/img/Platforms/Platform_one.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_two_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_two.png */"./assets/img/Platforms/Platform_two.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_three_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_three.png */"./assets/img/Platforms/Platform_three.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_one_disabled_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_one_disabled.png */"./assets/img/Platforms/Platform_one_disabled.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_two_disabled_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_two_disabled.png */"./assets/img/Platforms/Platform_two_disabled.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_three_disabled_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Platform_three_disabled.png */"./assets/img/Platforms/Platform_three_disabled.png");
      /* harmony import */
      var _assets_img_Platforms_Finish_T_L_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ../../../../assets/img/Platforms/Finish_T_L.png */"./assets/img/Platforms/Finish_T_L.png");
      /* harmony import */
      var _assets_img_Platforms_brick_1_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ../../../../assets/img/Platforms/brick_1.png */"./assets/img/Platforms/brick_1.png");
      /* harmony import */
      var _assets_img_Platforms_brick_2_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ../../../../assets/img/Platforms/brick_2.png */"./assets/img/Platforms/brick_2.png");
      /* harmony import */
      var _assets_img_Traps_Saw_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ../../../../assets/img/Traps/Saw.png */"./assets/img/Traps/Saw.png");
      /* harmony import */
      var _assets_img_Traps_Fan_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! ../../../../assets/img/Traps/Fan.png */"./assets/img/Traps/Fan.png");
      /* harmony import */
      var _assets_img_Traps_Platform_spikes_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! ../../../../assets/img/Traps/Platform_spikes.png */"./assets/img/Traps/Platform_spikes.png");
      /* harmony import */
      var _assets_img_Traps_Dead_signal_zone_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! ../../../../assets/img/Traps/Dead_signal_zone.png */"./assets/img/Traps/Dead_signal_zone.png");
      /* harmony import */
      var _assets_img_Traps_Dead_signal_zone_hover_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__( /*! ../../../../assets/img/Traps/Dead_signal_zone_hover.png */"./assets/img/Traps/Dead_signal_zone_hover.png");
      /* harmony import */
      var _assets_img_Traps_Flamethrower_left_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__( /*! ../../../../assets/img/Traps/Flamethrower_left.png */"./assets/img/Traps/Flamethrower_left.png");
      /* harmony import */
      var _assets_img_Traps_Flamethrower_right_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__( /*! ../../../../assets/img/Traps/Flamethrower_right.png */"./assets/img/Traps/Flamethrower_right.png");
      /* harmony import */
      var _assets_img_Traps_Flamethrower_up_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__( /*! ../../../../assets/img/Traps/Flamethrower_up.png */"./assets/img/Traps/Flamethrower_up.png");
      /* harmony import */
      var _assets_img_Traps_Flamethrower_down_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__( /*! ../../../../assets/img/Traps/Flamethrower_down.png */"./assets/img/Traps/Flamethrower_down.png");
      /* harmony import */
      var _assets_img_Traps_Fireball_up_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__( /*! ../../../../assets/img/Traps/Fireball_up.png */"./assets/img/Traps/Fireball_up.png");
      /* harmony import */
      var _assets_img_Traps_Fireball_down_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__( /*! ../../../../assets/img/Traps/Fireball_down.png */"./assets/img/Traps/Fireball_down.png");
      /* harmony import */
      var _assets_img_Traps_Fireball_left_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__( /*! ../../../../assets/img/Traps/Fireball_left.png */"./assets/img/Traps/Fireball_left.png");
      /* harmony import */
      var _assets_img_Traps_Fireball_right_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__( /*! ../../../../assets/img/Traps/Fireball_right.png */"./assets/img/Traps/Fireball_right.png");
      /* harmony import */
      var _assets_img_SPA_arrows_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__( /*! ../../../../assets/img/SPA/arrows.png */"./assets/img/SPA/arrows.png");
      /* harmony import */
      var _assets_img_SPA_space_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__( /*! ../../../../assets/img/SPA/space.png */"./assets/img/SPA/space.png");
      /* harmony import */
      var _assets_img_SPA_cloud_1_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__( /*! ../../../../assets/img/SPA/cloud_1.png */"./assets/img/SPA/cloud_1.png");
      /* harmony import */
      var _assets_img_SPA_cloud_2_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__( /*! ../../../../assets/img/SPA/cloud_2.png */"./assets/img/SPA/cloud_2.png");
      /* harmony import */
      var _assets_img_SPA_cloud_3_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__( /*! ../../../../assets/img/SPA/cloud_3.png */"./assets/img/SPA/cloud_3.png");
      /* harmony import */
      var _assets_img_SPA_cloud_4_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__( /*! ../../../../assets/img/SPA/cloud_4.png */"./assets/img/SPA/cloud_4.png");
      /* harmony import */
      var _assets_img_SPA_f_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__( /*! ../../../../assets/img/SPA/f.png */"./assets/img/SPA/f.png");
      /* harmony import */
      var _assets_img_SPA_m_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__( /*! ../../../../assets/img/SPA/m.png */"./assets/img/SPA/m.png");
      /* harmony import */
      var _assets_img_SPA_404_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__( /*! ../../../../assets/img/SPA/404.png */"./assets/img/SPA/404.png");
      /* harmony import */
      var _assets_img_SPA_flying_gif__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__( /*! ../../../../assets/img/SPA/flying.gif */"./assets/img/SPA/flying.gif");
      /* harmony import */
      var _assets_img_SPA_logo_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__( /*! ../../../../assets/img/SPA/logo.png */"./assets/img/SPA/logo.png");
      /* harmony import */
      var _assets_img_SPA_logo_2_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__( /*! ../../../../assets/img/SPA/logo_2.png */"./assets/img/SPA/logo_2.png");
      /* harmony import */
      var _assets_img_SPA_mute_off_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__( /*! ../../../../assets/img/SPA/mute_off.png */"./assets/img/SPA/mute_off.png");
      /* harmony import */
      var _assets_img_SPA_mute_on_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__( /*! ../../../../assets/img/SPA/mute_on.png */"./assets/img/SPA/mute_on.png");

      /***/
    },

    /***/"./src/js/Canvas.js":
    /*!**************************!*\
      !*** ./src/js/Canvas.js ***!
      \**************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"c": () => /* binding */c,
        /* harmony export */"canvas": () => /* binding */canvas
        /* harmony export */
      });
      const canvas = document.getElementById('canvas');
      const c = canvas.getContext("2d");

      /***/
    },

    /***/"./src/js/Collision.js":
    /*!*****************************!*\
      !*** ./src/js/Collision.js ***!
      \*****************************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"parseCollisitions": () => /* binding */parseCollisitions,
            /* harmony export */"parsedCollisions": () => /* reexport safe */_index__WEBPACK_IMPORTED_MODULE_1__.parsedCollisions,
            /* harmony export */"platforms": () => /* reexport safe */_index__WEBPACK_IMPORTED_MODULE_1__.platforms
            /* harmony export */
          });
          /* harmony import */
          var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Canvas */"./src/js/Canvas.js");
          /* harmony import */
          var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../index */"./src/index.js");
          /* harmony import */
          var _Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./Platform */"./src/js/Platform.js");
          /* harmony import */
          var _Traps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Traps */"./src/js/Traps.js");
          /* harmony import */
          var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./Assets */"./src/js/Assets.js");
          /* harmony import */
          var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./Utils */"./src/js/Utils.js");
          /* harmony import */
          var _Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./Player */"./src/js/Player.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_1__, _Platform__WEBPACK_IMPORTED_MODULE_2__, _Traps__WEBPACK_IMPORTED_MODULE_3__, _Utils__WEBPACK_IMPORTED_MODULE_5__, _Player__WEBPACK_IMPORTED_MODULE_6__]);
          [_index__WEBPACK_IMPORTED_MODULE_1__, _Platform__WEBPACK_IMPORTED_MODULE_2__, _Traps__WEBPACK_IMPORTED_MODULE_3__, _Utils__WEBPACK_IMPORTED_MODULE_5__, _Player__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          function parseCollisitions(levelMap, platforms) {
            levelMap.map.forEach((row, index_Y) => {
              row.forEach((cell, index_X) => {
                switch (cell) {
                  case '1p':
                    // Space toggled platform (One)
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformOne(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformOne, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case '2p':
                    // Space toggled platform (Two)
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformTwo(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformTwo, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case '3p':
                    // Space toggled platform (Three)
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformThree(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformThree, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case '1s':
                    // One-Step platform
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.OneStep(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformOneStep, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'sl':
                    // Solid platform
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Platform(
                    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformSolid, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'ja':
                    // Jump-toggled platform (active)
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.JumpToggleActive(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformJump, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'jd':
                    // Jump-toggled platform (disabled)
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.JumpToggleDisabled(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformJump, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'sk':
                    // Saw trap platform
                    platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.PlatformSpikes(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.spike, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'sw':
                    // Spikes trap platform
                    platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.Saw(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.saw, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'dz':
                    // Dead signal zone
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.DeadSignal(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.deadSignalZone, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'fl':
                    // Flamethrower (left)
                    platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.FlamethrowerLeft(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.flamethrowerLeft, 36, 36), platforms, new _Traps__WEBPACK_IMPORTED_MODULE_3__.BulletController(), levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'fr':
                    // Flamethrower (right)
                    platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.FlamethrowerRight(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.flamethrowerRight, 36, 36), platforms, new _Traps__WEBPACK_IMPORTED_MODULE_3__.BulletController(), levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'fu':
                    // Flamethrower (up)
                    platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.FlamethrowerUp(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.flamethrowerUp, 36, 36), platforms, new _Traps__WEBPACK_IMPORTED_MODULE_3__.BulletController(), levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'fd':
                    // Flamethrower (down)
                    platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.FlamethrowerDown(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.flamethrowerDown, 36, 36), platforms, new _Traps__WEBPACK_IMPORTED_MODULE_3__.BulletController(), levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'fn':
                    // Fan (decoration)
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Fan(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.flamethrowerDown, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'b1':
                    // Fan (decoration)
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Brick_1(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.brick_1, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'b2':
                    // Fan (decoration)
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Brick_2(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.brick_2, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                  case 'fp':
                    // Finish point
                    platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Finish(index_X * 36, index_Y * 36, (0, _Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.brick_2, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
                    break;
                }
              });
            });
            return levelMap;
          }

          // const parsedCollisions = collisionsLevel_1.map.forEach((row, index_Y) => {
          //   row.forEach((cell, index_X) => {
          //     switch(cell) {
          //       case '1p': // Space toggled platform (One)
          //         platforms.push(new PlatformOne(index_X * 36, index_Y * 36, createImage(platformOne, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //           break;
          //       case '2p': // Space toggled platform (Two)
          //         platforms.push(new PlatformTwo(index_X * 36, index_Y * 36, createImage(platformTwo, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //           break;
          //       case '3p': // Space toggled platform (Three)
          //         platforms.push(new PlatformThree(index_X * 36, index_Y * 36, createImage(platformThree, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //           break;
          //       case '1s': // One-Step platform
          //         platforms.push(new OneStep(index_X * 36, index_Y * 36, createImage(platformOneStep, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //           break;
          //       case 'sl': // Solid platform
          //         platforms.push(new Platform( // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          //           index_X * 36, index_Y * 36, createImage(platformSolid, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //           break;
          //       case 'ja': // Jump-toggled platform (active)
          //         platforms.push(new JumpToggleActive(index_X * 36, index_Y * 36, createImage(platformJump, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //           break;
          //       case 'jd': // Jump-toggled platform (disabled)
          //         platforms.push(new JumpToggleDisabled(index_X * 36, index_Y * 36, createImage(platformJump, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //           break;
          //       case 'sk': // Saw trap platform
          //         platforms.push(new PlatformSpikes(index_X * 36, index_Y * 36, createImage(spike, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //           break;
          //       case 'sw': // Spikes trap platform
          //         platforms.push(new Saw(index_X * 36, index_Y * 36, createImage(saw, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //           break;
          //       case 'dz': // Dead signal zone
          //         platforms.push(new DeadSignal(
          //           index_X * 36, index_Y * 36, createImage(deadSignalZone, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //           break;
          //       case 'fl': // Flamethrower (left)
          //       platforms.push(new FlamethrowerLeft(
          //         index_X * 36, index_Y * 36, createImage(flamethrowerLeft, 36, 36), platforms, new BulletController(), collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //         break;
          //       case 'fr': // Flamethrower (right)
          //       platforms.push(new FlamethrowerRight(
          //         index_X * 36, index_Y * 36, createImage(flamethrowerRight, 36, 36), platforms, new BulletController(), collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //         break;
          //       case 'fu': // Flamethrower (up)
          //       platforms.push(new FlamethrowerUp(
          //         index_X * 36, index_Y * 36, createImage(flamethrowerUp, 36, 36), platforms, new BulletController(), collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //         break;
          //       case 'fd': // Flamethrower (down)
          //       platforms.push(new FlamethrowerDown(
          //         index_X * 36, index_Y * 36, createImage(flamethrowerDown, 36, 36), platforms, new BulletController(), collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //         break;
          //       case 'fn': // Fan (decoration)
          //       platforms.push(new Fan(
          //         index_X * 36, index_Y * 36, createImage(flamethrowerDown, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //         break;
          //       case 'b1': // Fan (decoration)
          //       platforms.push(new Brick_1(
          //         index_X * 36, index_Y * 36, createImage(brick_1, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //         break;
          //       case 'b2': // Fan (decoration)
          //       platforms.push(new Brick_2(
          //         index_X * 36, index_Y * 36, createImage(brick_2, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //         break;
          //       case 'fp': // Finish point
          //       platforms.push(new Finish(
          //         index_X * 36, index_Y * 36, createImage(brick_2, 36, 36), platforms, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
          //         break;
          //     }
          //   })
          // })

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/js/Keys.js":
    /*!************************!*\
      !*** ./src/js/Keys.js ***!
      \************************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"keyDownHandler": () => /* binding */keyDownHandler,
            /* harmony export */"keyUpHandler": () => /* binding */keyUpHandler,
            /* harmony export */"keys": () => /* binding */keys
            /* harmony export */
          });
          /* harmony import */
          var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../index */"./src/index.js");
          /* harmony import */
          var _data_Audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./data/Audio */"./src/js/data/Audio.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__, _data_Audio__WEBPACK_IMPORTED_MODULE_1__]);
          [_index__WEBPACK_IMPORTED_MODULE_0__, _data_Audio__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          const keys = {
            right: {
              pressed: false
            },
            left: {
              pressed: false
            },
            up: {
              pressed: false
            },
            space: {
              pressed: false
            },
            lastPressed: 'right',
            jumpToggleActive: true,
            isJumped: false,
            spaceToggleCounter: 1,
            // Platform One type is active
            deadSignalZone: false
          };
          // let hiddenPlatformsArr = []

          const keyDownHandler = e => {
            console.log(e.code);
            if (e.repeat == false) {
              switch (e.code) {
                case 'ArrowUp':
                  keys.up.pressed = true;
                  if (_index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y <= 0 && _index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y >= -3.5) {
                    //(player.velocity.y === 0) или (player.velocity.y <= 0 && player.velocity.y >= -3.5)
                    keys.jumpToggleActive ? keys.jumpToggleActive = false : keys.jumpToggleActive = true;
                    (0, _data_Audio__WEBPACK_IMPORTED_MODULE_1__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_1__.audio.jump);
                  }
                  if (_index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y === 0 && keys.lastPressed === 'right') {
                    // player.velocity.y === 0 - только один прыжок при нескольких нажатиях на UP
                    _index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y -= _index__WEBPACK_IMPORTED_MODULE_0__.player.jumpHeight; // -20 is higher
                    _index__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _index__WEBPACK_IMPORTED_MODULE_0__.player.sprites.jump.right;
                  } else if (_index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y === 0 && keys.lastPressed === 'left') {
                    // player.velocity.y === 0 - только один прыжок при нескольких нажатиях на UP
                    _index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y -= _index__WEBPACK_IMPORTED_MODULE_0__.player.jumpHeight; // -20 is higher
                    _index__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _index__WEBPACK_IMPORTED_MODULE_0__.player.sprites.jump.left;
                  }
                  break;
                case 'Space':
                  {
                    keys.space.pressed = true;
                    !keys.deadSignalZone && keys.spaceToggleCounter++;
                  }
                  break;
                case 'ArrowRight':
                  {
                    keys.right.pressed = true;
                    keys.lastPressed = 'right';
                    _index__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _index__WEBPACK_IMPORTED_MODULE_0__.player.sprites.run.right;
                  }
                  break;
                case 'ArrowLeft':
                  {
                    keys.left.pressed = true;
                    keys.lastPressed = 'left';
                    _index__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _index__WEBPACK_IMPORTED_MODULE_0__.player.sprites.run.left;
                  }
                  break;
              }
            }
          };
          const keyUpHandler = e => {
            if (e.repeat == false) {
              switch (e.code) {
                case 'ArrowUp':
                  // player.velocity.y = 0;
                  keys.up.pressed = false;
                  // keys.up.pressed = true;
                  if (_index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y !== 0 && keys.lastPressed === 'right') {
                    _index__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _index__WEBPACK_IMPORTED_MODULE_0__.player.sprites.fall.right;
                  } else if (_index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y !== 0 && keys.lastPressed === 'left') {
                    _index__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _index__WEBPACK_IMPORTED_MODULE_0__.player.sprites.fall.left;
                  }
                  break;
                // case 'ArrowDown': player.velocity.y = 0
                //   break;
                case 'ArrowRight':
                  {
                    keys.right.pressed = false;
                    _index__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _index__WEBPACK_IMPORTED_MODULE_0__.player.sprites.idle.right;
                  }
                  break;
                case 'ArrowLeft':
                  {
                    keys.left.pressed = false;
                    _index__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _index__WEBPACK_IMPORTED_MODULE_0__.player.sprites.idle.left;
                  }
                  break;
                case 'Space':
                  {
                    keys.space.pressed = false;
                  }
                  break;
              }
            }
          };
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/js/Levels.js":
    /*!**************************!*\
      !*** ./src/js/Levels.js ***!
      \**************************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"requestLevelMap": () => /* binding */requestLevelMap
            /* harmony export */
          });
          /* harmony import */
          var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../index */"./src/index.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
          _index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          function requestLevelMap(url, callback_1, callback_2, callback_3, callback_4, callback_5) {
            fetch(url).then(response => {
              if (response.status !== 200) {
                console.log(`Возникла проблема. Код ошибки: ${response.status}`);
                return;
              }
              response.json().then(map => callback_1(map, _index__WEBPACK_IMPORTED_MODULE_0__.platforms)).then(data => callback_2(data, _index__WEBPACK_IMPORTED_MODULE_0__.platforms)).then(player => callback_3(player, _index__WEBPACK_IMPORTED_MODULE_0__.platforms)).then(init => callback_4(init, _index__WEBPACK_IMPORTED_MODULE_0__.platforms)).then(animate => callback_5(animate, _index__WEBPACK_IMPORTED_MODULE_0__.platforms)).catch(err => console.error('Fetch Error - levels map load failed', err));
            });
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/js/Platform.js":
    /*!****************************!*\
      !*** ./src/js/Platform.js ***!
      \****************************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"Brick_1": () => /* binding */Brick_1,
            /* harmony export */"Brick_2": () => /* binding */Brick_2,
            /* harmony export */"DeadSignal": () => /* binding */DeadSignal,
            /* harmony export */"Fan": () => /* binding */Fan,
            /* harmony export */"Finish": () => /* binding */Finish,
            /* harmony export */"JumpToggleActive": () => /* binding */JumpToggleActive,
            /* harmony export */"JumpToggleDisabled": () => /* binding */JumpToggleDisabled,
            /* harmony export */"OneStep": () => /* binding */OneStep,
            /* harmony export */"Platform": () => /* binding */Platform,
            /* harmony export */"PlatformOne": () => /* binding */PlatformOne,
            /* harmony export */"PlatformThree": () => /* binding */PlatformThree,
            /* harmony export */"PlatformTwo": () => /* binding */PlatformTwo
            /* harmony export */
          });
          /* harmony import */
          var _Collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Collision */"./src/js/Collision.js");
          /* harmony import */
          var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Canvas */"./src/js/Canvas.js");
          /* harmony import */
          var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./Utils */"./src/js/Utils.js");
          /* harmony import */
          var _Assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Assets */"./src/js/Assets.js");
          /* harmony import */
          var _data_Audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./data/Audio */"./src/js/data/Audio.js");
          /* harmony import */
          var _Keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./Keys */"./src/js/Keys.js");
          /* harmony import */
          var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../index */"./src/index.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Collision__WEBPACK_IMPORTED_MODULE_0__, _Utils__WEBPACK_IMPORTED_MODULE_2__, _data_Audio__WEBPACK_IMPORTED_MODULE_4__, _Keys__WEBPACK_IMPORTED_MODULE_5__, _index__WEBPACK_IMPORTED_MODULE_6__]);
          [_Collision__WEBPACK_IMPORTED_MODULE_0__, _Utils__WEBPACK_IMPORTED_MODULE_2__, _data_Audio__WEBPACK_IMPORTED_MODULE_4__, _Keys__WEBPACK_IMPORTED_MODULE_5__, _index__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          class Platform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.image = image;
              this.width = image.width;
              this.height = image.height;
              this.frames = 0;
              this.frequency = 28;
              this.sprites = {
                idle: this.image
              };
              this.currentSprite = this.sprites.idle;
              this.type = 'solid';
              this.statusActive = true;
            }
            get top() {
              return this.position.y;
            }
            get bottom() {
              return this.position.y + this.height;
            }
            get left() {
              return this.position.x;
            }
            get right() {
              return this.position.x + this.width;
            }
            set top(value) {
              this.position.y = value;
            }
            set bottom(value) {
              this.position.y = value;
            }
            set left(value) {
              this.position.x = value;
            }
            set right(value) {
              this.position.x = value;
            }
            getType() {
              return this.type;
            }
            draw() {
              if (!this.currentSprite.loaded) return;
              _Canvas__WEBPACK_IMPORTED_MODULE_1__.c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height); // 48, 0, 48, 48 - player sprite crop (x, y, w, h) // 36 размер кадра в спрайте
            }

            update() {
              this.frames++;
              if (this.frames > this.frequency) this.frames = 0;
              this.draw();
            }
            collisionAbove() {
              // Player - platform collision (player is above the platform)
              if (_index__WEBPACK_IMPORTED_MODULE_6__.player.bottom <= this.position.y && _index__WEBPACK_IMPORTED_MODULE_6__.player.bottom + _index__WEBPACK_IMPORTED_MODULE_6__.player.velocity.y >= this.top &&
              // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
              // Player - platform collision (player on the platform - inside of left and right platform boundaries)
              _index__WEBPACK_IMPORTED_MODULE_6__.player.right - _index__WEBPACK_IMPORTED_MODULE_6__.player.width / 4 >= this.left &&
              // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
              _index__WEBPACK_IMPORTED_MODULE_6__.player.left <= this.right - _index__WEBPACK_IMPORTED_MODULE_6__.player.width / 4) {
                _index__WEBPACK_IMPORTED_MODULE_6__.player.velocity.y = -3.5; // если касается земли // -3.5
                _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && (0, _data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.jumpOnSpaceToggledPlatform);
                if (_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.up.pressed || _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.up.pressed && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.right.pressed || _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.up.pressed && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.left.pressed) {
                  _index__WEBPACK_IMPORTED_MODULE_6__.player.velocity.y = -_index__WEBPACK_IMPORTED_MODULE_6__.player.jumpHeight;
                  _index__WEBPACK_IMPORTED_MODULE_6__.player.gravity = 0.25;
                }
              }
            }
            collisionUnder() {
              // Player - platform collision (player is under the platform)
              if (_index__WEBPACK_IMPORTED_MODULE_6__.player.top <= this.bottom &&
              // player.position.y - player.velocity.y * 0.5
              _index__WEBPACK_IMPORTED_MODULE_6__.player.bottom + _index__WEBPACK_IMPORTED_MODULE_6__.player.velocity.y >= this.top && _index__WEBPACK_IMPORTED_MODULE_6__.player.left >= this.left - _index__WEBPACK_IMPORTED_MODULE_6__.player.width / 1.25 &&
              // можно сделать 1.75
              _index__WEBPACK_IMPORTED_MODULE_6__.player.right <= this.right + _index__WEBPACK_IMPORTED_MODULE_6__.player.width / 1.25) {
                _index__WEBPACK_IMPORTED_MODULE_6__.player.velocity.y = 1; /* player.currentSprite = player.sprites.idle.right */
                _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && (0, _data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.bottomHit);
              }
            }
            collisionLeftSide() {
              // Player - platform collision (player is left from the platform and moves right)
              if (_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.right.pressed && _index__WEBPACK_IMPORTED_MODULE_6__.player.bottom >= this.top && _index__WEBPACK_IMPORTED_MODULE_6__.player.top <= this.bottom && _index__WEBPACK_IMPORTED_MODULE_6__.player.right >= this.left) {
                _index__WEBPACK_IMPORTED_MODULE_6__.player.velocity.x = 0;
                console.log('hit!');
              } // Continue: Player - platform collision (player holds right and is right from the platform - so he cans move)
              if (_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.right.pressed && _index__WEBPACK_IMPORTED_MODULE_6__.player.bottom >= this.top && _index__WEBPACK_IMPORTED_MODULE_6__.player.top <= this.bottom && _index__WEBPACK_IMPORTED_MODULE_6__.player.right >= this.right) {
                _index__WEBPACK_IMPORTED_MODULE_6__.player.velocity.x = 2;
                console.log('free!');
              }
            }
            collisionRightSide() {
              // Player - platform collision (player is right from the platform and moves left)
              if (_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.left.pressed && (_index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero != undefined || _index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero != null) && _index__WEBPACK_IMPORTED_MODULE_6__.player.bottom >= _index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero.top && _index__WEBPACK_IMPORTED_MODULE_6__.player.top <= _index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero.bottom && _index__WEBPACK_IMPORTED_MODULE_6__.player.left <= _index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero.right) {
                _index__WEBPACK_IMPORTED_MODULE_6__.player.velocity.x = 0;
                console.log('hit!');
              } // Continue: Player - platform collision (player holds left and is left from the platform - so he cans move)
              if (_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.left.pressed && _index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero != undefined && (_index__WEBPACK_IMPORTED_MODULE_6__.player.bottom <= _index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero.top || _index__WEBPACK_IMPORTED_MODULE_6__.player.top >= _index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero.bottom) && _index__WEBPACK_IMPORTED_MODULE_6__.player.left <= _index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero.left) {
                // или "-" player.width ???
                _index__WEBPACK_IMPORTED_MODULE_6__.player.velocity.x = -2;
                console.log('free!');
              }
            }
            collision() {
              // разбито на отдельные методы, для частичного наследования
              this.collisionAbove();
              this.collisionUnder();
              this.collisionLeftSide();
              this.collisionRightSide();
            }
          }
          class Fan extends Platform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.type = 'fan';
              this.statusActive = true;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.fan, 36, 36)
              };
              this.currentSprite = this.sprites.idle;
              this.frequency = 23;
            }
          }
          class Brick_1 extends Platform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.type = 'brick_1';
              this.statusActive = true;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.brick_1, 36, 36)
              };
              this.currentSprite = this.sprites.idle;
              this.frequency = 1;
            }
          }
          class Brick_2 extends Platform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.type = 'brick_2';
              this.statusActive = true;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.brick_2, 36, 36)
              };
              this.currentSprite = this.sprites.idle;
              this.frequency = 1;
            }
          }
          class Finish extends Platform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.type = 'finish';
              this.statusActive = true;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.finish, 36, 36)
              };
              this.currentSprite = this.sprites.idle;
              this.frequency = 27;
            }
          }
          class JumpToggleActive extends Platform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.type = 'jumpToggleActive';
              this.statusActive = true;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJump, 36, 36),
                disabled: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJumpDisabled, 36, 36)
              };
              this.currentSprite = this.sprites.idle;
              this.frequency = 63;
            }
            toggle() {
              console.log(this.type, this.statusActive);
              if (_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.jumpToggleActive === true) {
                this.currentSprite = this.sprites.idle;
                this.statusActive = true;
              } else {
                this.currentSprite = this.sprites.disabled;
                this.statusActive = false;
              }
            }
          }
          class JumpToggleDisabled extends Platform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.type = 'jumpToggleDisabled';
              this.statusActive = false;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJump, 36, 36),
                disabled: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJumpDisabled, 36, 36)
              };
              this.currentSprite = this.sprites.disabled;
              this.frequency = 63;
            }
            toggle() {
              console.log(this.type, this.statusActive);
              if (_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.jumpToggleActive === false) {
                this.currentSprite = this.sprites.idle;
                this.statusActive = true;
              } else {
                this.currentSprite = this.sprites.disabled;
                this.statusActive = false;
              }
            }
          }
          class OneStep extends Platform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.temporaryPosX = posX + marginLeft;
              this.hits = 0;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneStep, 36, 36),
                explosion: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneStepExplosion, 36, 36)
              };
              this.currentSprite = this.sprites.idle;
              this.frequency = 28;
              this.type = 'oneStep';
              this.statusActive = true;
            }
            destroy() {
              _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && (0, _data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.explosionBlock);
              this.currentSprite = this.sprites.explosion;
              setTimeout(() => {
                this.position.x = -9999;
                this.currentSprite = this.sprites.idle;
                this.statusActive = false;
              }, 550);
              this.hits = 0;
            }
            restore() {
              this.position.x = this.temporaryPosX;
              this.statusActive = true;
            }
          }
          class SpaceToggledPlatform extends Platform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.type = 'toggledBySpacePlatform';
              this.statusActive = false;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.deadSignalZoneHover, 36, 36),
                disabled: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneDisabled, 36, 36)
              };
              this.currentSprite = this.sprites.idle;
              this.frequency = 63;
              this.setCount = null;
            }
            checkSpaceToggleCounter() {
              _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.spaceToggleCounter >= 4 ? _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.spaceToggleCounter = 1 : _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.spaceToggleCounter;
            }
            collision() {
              if (_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.spaceToggleCounter === this.setCount) {
                this.statusActive = true;
                super.collisionAbove();
                super.collisionUnder();
                super.collisionLeftSide();
                if ((_index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero != undefined || _index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero != null) && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.spaceToggleCounter === _index__WEBPACK_IMPORTED_MODULE_6__.leftNeighboorBlockFromHero.setCount) {
                  super.collisionRightSide();
                }
                this.currentSprite = this.sprites.idle;
                this.checkSpaceToggleCounter();
              } else {
                this.currentSprite = this.sprites.disabled;
                this.statusActive = false;
                this.checkSpaceToggleCounter();
                // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)   
                if (_Collision__WEBPACK_IMPORTED_MODULE_0__.platforms.some(block => {
                  return _index__WEBPACK_IMPORTED_MODULE_6__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_6__.player.height * 0.75 >= block.top && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_6__.player.height * 0.35 <= block.bottom && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_6__.player.width * 0.75 >= block.left && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_6__.player.width * 0.25 <= block.right;
                })) {
                  _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.deadSignalZone = true;
                  _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.space.pressed && (0, _data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.toggleDisabled);
                  console.log('inside');
                } else {
                  console.log('outside');
                  _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.space.pressed && (0, _data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.toggle);
                  _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.deadSignalZone = false;
                }
              }
            }
          }
          class PlatformOne extends SpaceToggledPlatform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.type = 'platformOne';
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.setCount = 1;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOne, 36, 36),
                disabled: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneDisabled, 36, 36)
              };
            }
          }
          class PlatformTwo extends SpaceToggledPlatform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.type = 'platformTwo';
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.setCount = 2;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformTwo, 36, 36),
                disabled: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformTwoDisabled, 36, 36)
              };
            }
          }
          class PlatformThree extends SpaceToggledPlatform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.type = 'platformThree';
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.setCount = 3;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformThree, 36, 36),
                disabled: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformThreeDisabled, 36, 36)
              };
            }
          }
          class DeadSignal extends SpaceToggledPlatform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.type = 'deadSignalZone';
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.statusActive = false;
              this.frequency = 1;
              this.sprites = {
                idle: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.deadSignalZone, 36, 36),
                disabled: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.deadSignalZoneHover, 36, 36)
              };
            }
            hover() {
              if (_index__WEBPACK_IMPORTED_MODULE_6__.player.left <= this.right && _index__WEBPACK_IMPORTED_MODULE_6__.player.right >= this.left && _index__WEBPACK_IMPORTED_MODULE_6__.player.top <= this.bottom && _index__WEBPACK_IMPORTED_MODULE_6__.player.bottom >= this.top && _Collision__WEBPACK_IMPORTED_MODULE_0__.platforms.some(block => {
                return _index__WEBPACK_IMPORTED_MODULE_6__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_6__.player.height * 0.75 >= block.top && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_6__.player.height * 0.35 <= block.bottom && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_6__.player.width * 0.75 >= block.left && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_6__.player.width * 0.25 <= block.right;
              })) {
                // Inside of the block
                this.checkSpaceToggleCounter();
                this.currentSprite = this.sprites.idle;
              } else if (_Collision__WEBPACK_IMPORTED_MODULE_0__.platforms.some(block => {
                // Outside of the block
                return _index__WEBPACK_IMPORTED_MODULE_6__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_6__.player.height * 0.75 >= block.top && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_6__.player.height * 0.35 <= block.bottom && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_6__.player.width * 0.75 >= block.left && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_6__.player.width * 0.25 <= block.right;
              })) {
                this.currentSprite = this.sprites.disabled;
              }
            }
            collision() {
              this.hover(); // Hover the block when the hero is inside of it
              // Hero is inside or outside of block (for toggled by space platformes and deadSignal zone platforms)   
              if (_Collision__WEBPACK_IMPORTED_MODULE_0__.platforms.some(block => {
                return _index__WEBPACK_IMPORTED_MODULE_6__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_6__.player.height * 0.75 >= block.top && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_6__.player.height * 0.35 <= block.bottom && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_6__.player.width * 0.75 >= block.left && _index__WEBPACK_IMPORTED_MODULE_6__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_6__.player.width * 0.25 <= block.right;
              })) {
                _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.deadSignalZone = true;
                console.log(_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.space.pressed);
                _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.space.pressed && (0, _data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.toggleDisabled);
                console.log('inside');
              } else {
                console.log('outside');
                _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.deadSignalZone = false;
                _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.space.pressed && (0, _data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.toggle);
              }
            }
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/js/Player.js":
    /*!**************************!*\
      !*** ./src/js/Player.js ***!
      \**************************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"Player": () => /* binding */Player
            /* harmony export */
          });
          /* harmony import */
          var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Canvas */"./src/js/Canvas.js");
          /* harmony import */
          var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Utils */"./src/js/Utils.js");
          /* harmony import */
          var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../index */"./src/index.js");
          /* harmony import */
          var _Keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Keys */"./src/js/Keys.js");
          /* harmony import */
          var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./Assets */"./src/js/Assets.js");
          /* harmony import */
          var _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../js/data/Audio */"./src/js/data/Audio.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Utils__WEBPACK_IMPORTED_MODULE_1__, _index__WEBPACK_IMPORTED_MODULE_2__, _Keys__WEBPACK_IMPORTED_MODULE_3__, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__]);
          [_Utils__WEBPACK_IMPORTED_MODULE_1__, _index__WEBPACK_IMPORTED_MODULE_2__, _Keys__WEBPACK_IMPORTED_MODULE_3__, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          class Player {
            constructor(_ref, posX, posY) {
              let {
                platforms = []
              } = _ref;
              let marginLeft = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
              let marginTop = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              this.platforms = platforms;
              // this.margin = {
              //   left: ,
              //   right: ,
              // }
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.velocity = {
                x: 0,
                y: 1
              };
              this.type = 'player';
              this.gravity = 0.25;
              this.jumpHeight = 9; // 20 is higher
              this.width = 32;
              this.height = 32;
              this.frequency = 21;
              this.frames = 0;
              this.alive = true;
              this.completeLevel = false;
              this.sprites = {
                idle: {
                  right: (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.heroIdleR, 32, 32),
                  left: (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.heroIdleL, 32, 32)
                },
                run: {
                  right: (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.heroRunR, 32, 32),
                  left: (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.heroRunL, 32, 32)
                },
                jump: {
                  right: (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.heroJumpR, 32, 32),
                  left: (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.heroJumpL, 32, 32)
                },
                fall: {
                  right: (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.heroFallR, 32, 32),
                  left: (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.heroFallL, 32, 32)
                },
                death: (0, _Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.heroDeath, 32, 32)
              };
              this.currentSprite = this.sprites.idle.right;
            }
            get top() {
              return this.position.y;
            }
            get bottom() {
              return this.position.y + this.height;
            }
            get left() {
              return this.position.x;
            }
            get right() {
              return this.position.x + this.width;
            }
            set top(value) {
              this.position.y = value;
            }
            set bottom(value) {
              this.position.y = value;
            }
            set left(value) {
              this.position.x = value;
            }
            set right(value) {
              this.position.x = value;
            }
            draw() {
              if (!this.currentSprite.loaded) return;
              _Canvas__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.currentSprite, 32 * this.frames, 0, 32, 32, this.left, this.top, this.width, this.height); // 32, 0, 32, 32 - player sprite crop (x, y, w, h)
            }

            die() {
              this.velocity.x = 0;
              this.velocity.y = -2;
              this.gravity = 0;
              this.currentSprite = this.sprites.death;
              this.alive && (0, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.heroDeath);
              this.alive = false;
              setTimeout(_index__WEBPACK_IMPORTED_MODULE_2__.init, 550);
            }
            checkCollisionsAxes_X() {
              // X-axes collision
              for (let i = 0; i < this.platforms.length; i++) {
                const platform = this.platforms[i];
                // If a collision exists
                switch (platform.type) {
                  case 'fan':
                  case 'solid':
                  case 'brick_1':
                  case 'brick_2':
                    if (this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
                      if (this.velocity.x < 0) {
                        // moving left       // <= -2
                        this.left = platform.right + 0.1;
                        break;
                      }
                      if (this.velocity.x > 0) {
                        // moving right      // <= 2
                        this.left = platform.left - this.width - 0.1;
                        break;
                      }
                    }
                    break;
                  case 'jumpToggleActive':
                    if (_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.jumpToggleActive && this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
                      if (this.velocity.x < 0) {
                        // moving left       // <= -2
                        this.left = platform.right + 0.1;
                        break;
                      }
                      if (this.velocity.x > 0) {
                        // moving right      // <= 2
                        this.left = platform.left - this.width - 0.1;
                        break;
                      }
                    }
                    break;
                  case 'jumpToggleDisabled':
                    if (!_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.jumpToggleActive && this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
                      if (this.velocity.x < 0) {
                        // moving left       // <= -2
                        this.left = platform.right + 0.1;
                        break;
                      }
                      if (this.velocity.x > 0) {
                        // moving right      // <= 2
                        this.left = platform.left - this.width - 0.1;
                        break;
                      }
                    }
                    break;
                  case 'spikes':
                  case 'saw':
                    // Hero - platform collision (player is above the spike platform)
                    if (this.bottom <= platform.top + this.height / 3 && this.bottom + this.velocity.y >= platform.top + this.height / 3 && this.right >= platform.left + this.width / 3 && this.left <= platform.right - this.width / 3) {
                      //debugger
                      this.die();
                    }
                    // Hero - platform collision (player is under the platform)
                    if (this.top <= platform.bottom - Math.abs(this.velocity.y) && this.bottom + this.velocity.y >= platform.top + this.height / 3 &&
                    // + this.velocity.y // оставить!!
                    this.left >= platform.left - this.width / 1.5 && this.right <= platform.right + this.width / 1.5) {
                      //debugger
                      this.die();
                    }
                    break;
                  case 'oneStep':
                    if (platform.hits === 0 && this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
                      if (this.velocity.x < 0) {
                        // moves left       // <= -2
                        this.left = platform.right + 0.1;
                        _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.left.pressed = false;
                        platform.hits++;
                        platform.destroy();
                        break;
                      }
                      if (this.velocity.x > 0) {
                        // moves right      // <= 2
                        this.left = platform.left - this.width - 0.1;
                        _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.right.pressed = false;
                        platform.hits++;
                        platform.destroy();
                        break;
                      }
                    }
                    break;
                  case 'finish':
                    if (this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
                      // if (this.velocity.x < 0) {// moving left       // <= -2
                      //   this.left = platform.right + 0.1;
                      //   this.alive && gameSoundEffects(audio.nextLevel);
                      //   break;
                      // }
                      // if (this.velocity.x > 0) {// moving right      // <= 2
                      //   this.left = platform.left - this.width - 0.1;
                      //   this.alive && gameSoundEffects(audio.nextLevel);
                      //   break;
                      // }
                      this.alive && (0, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.nextLevel);
                      this.completeLevel = true;
                      (0, _index__WEBPACK_IMPORTED_MODULE_2__.init)();
                    }
                    break;
                }
              }
            }
            checkCollisionsAxes_Y() {
              // Y-axes collision
              for (let i = 0; i < this.platforms.length; i++) {
                const platform = this.platforms[i];
                // If a collision exists
                switch (platform.type) {
                  case 'fan':
                  case 'solid':
                  case 'brick_1':
                  case 'brick_2':
                    if (this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
                      if (this.velocity.y < 0) {
                        // moving up  // -0.25
                        this.velocity.y = 0;
                        this.top = platform.bottom + 0.1;
                        this.alive && (0, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.bottomHit);
                        break;
                      }
                      if (this.velocity.y > 0) {
                        // falling down  // 0.25
                        this.velocity.y = 0;
                        this.top = platform.top - this.height - 0.1;
                        break;
                      }
                    }
                    break;
                  case 'jumpToggleActive':
                    if (_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.jumpToggleActive && this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom - this.height / 4 &&
                    // - this.height / 4 (поправка на прозрачность спрайта героя)
                    this.bottom >= platform.top) {
                      if (this.velocity.y < 0) {
                        // moving up  // -0.25
                        this.velocity.y = 0;
                        this.top = platform.bottom + 0.1;
                        this.alive && (0, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.bottomHit);
                        break;
                      }
                      if (this.velocity.y > 0) {
                        // falling down  // 0.25
                        this.velocity.y = 0;
                        this.top = platform.top - this.height - 0.1;
                        this.alive && (0, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.bottomHit);
                        break;
                      }
                    }
                    break;
                  case 'jumpToggleDisabled':
                    if (!_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.jumpToggleActive && this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
                      if (this.velocity.y < 0) {
                        // moving up  // -0.25
                        this.velocity.y = 0;
                        this.top = platform.bottom + 0.1;
                        break;
                      }
                      if (this.velocity.y > 0) {
                        // falling down  // 0.25
                        this.velocity.y = 0;
                        this.top = platform.top - this.height - 0.1;
                        break;
                      }
                    }
                    break;
                  case 'oneStep':
                    if (platform.hits === 0 && this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
                      if (this.velocity.y < 0) {
                        // moving up  // -0.25
                        this.velocity.y = 0;
                        this.top = platform.bottom + 0.1;
                        _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.up.pressed = false;
                        platform.hits++;
                        platform.destroy();
                        break;
                      }
                      if (this.velocity.y > 0) {
                        // falling down  // 0.25
                        this.velocity.y = -this.jumpHeight; // 0
                        _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.up.pressed = false;
                        platform.hits++;
                        platform.destroy();
                        this.top = platform.top - this.height - 0.1;
                        break;
                      }
                    }
                    break;
                  case 'finish':
                    if (this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
                      // if (this.velocity.y < 0) {// moving up  // -0.25
                      //   this.velocity.y = 0;
                      //   this.top = platform.bottom + 0.1;
                      //   this.alive && gameSoundEffects(audio.nextLevel);
                      //   break;
                      // }
                      // if (this.velocity.y > 0) {// falling down  // 0.25
                      //   this.velocity.y = 0;
                      //   this.top = platform.top - this.height - 0.1;
                      //   this.alive && gameSoundEffects(audio.nextLevel);
                      //   break;
                      // }

                      this.alive && (0, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.nextLevel);
                      this.completeLevel = true;
                      (0, _index__WEBPACK_IMPORTED_MODULE_2__.init)();
                    }
                    break;
                }
              }
            }
            setGravity() {
              this.velocity.y += this.gravity;
              this.top += this.velocity.y;
            }
            update() {
              this.frames++;
              if (this.frames > this.frequency) this.frames = 0;
              this.draw();
              this.left += this.velocity.x;
              this.checkCollisionsAxes_X(); // strict order
              this.setGravity(); // strict order
              this.checkCollisionsAxes_Y(); // strict order
            }
          }

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/js/SPA.js":
    /*!***********************!*\
      !*** ./src/js/SPA.js ***!
      \***********************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"mySPA": () => /* binding */mySPA
            /* harmony export */
          });
          /* harmony import */
          var _Assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Assets */"./src/js/Assets.js");
          /* harmony import */
          var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Utils */"./src/js/Utils.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Utils__WEBPACK_IMPORTED_MODULE_1__]);
          _Utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          const mySPA = function () {
            function View() {
              let myContainerBtns = null;
              let myContainerShow = null;
              const HomeComponent = {
                id: 'main',
                title: 'Greeting',
                render: function () {
                  let className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'content__text';
                  return `
        <section class="${className} greeting">
          <h2 class="greeting__text">
          Welcome to the wonderful world of Platform world! The young adventurer Virtual Boy sets off on a journey, help him overcome all the dangers and obstacles on his way...</p>
        </section>`;
                }
              };
              const HowToPlayComponent = {
                id: 'howtoplay',
                title: 'How to play',
                render: function () {
                  let className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'container';
                  return `
          <section class="${className} controls">
            <h2 class="controls__title">Controls:</h2>
            <div class="controls__container">
              <img class="controls__img-key" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.arrows}" alt="control arrows">
                <p class="controls__text">Press Left and Right arrows to control character movement.<br>Press press Up arrow to jump.</p>
                  <img class="controls__img-key" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.spaceImg}" alt="space key">
                    <p class="controls__text">Press Space to toggle the active and inactive state of the platform <span>One / Two / Three</span></p>
                      <img class="controls__img-letter" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.mKeyImg}" alt="m key">
                        <p class="controls__text">Press <span>M</span> to return to the menu</p>
                          <img class="controls__img-letter" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.fKeyImg}" alt="m key">
                            <p class="controls__text">Press <span>F</span> to open the game in full screen</p>      
            </div>
          </section>
        `;
                }
              };
              const SettingsComponent = {
                id: 'settings',
                title: 'Settings',
                render: function () {
                  let className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'container';
                  return `
          <section class="${className} settings">
            <h2 class="settings__title">Audio settings:</h2>
              <div class="settings__slider-box">
                <label for="volume-sounds">Sound effects</label>
                <input type="range" id="volume-snd" class="settings__slider settings__slider_hover" name="volume-sounds"
                  min="0" max="1" value="${(0, _Utils__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)('settings', 'soundEffects')}" step="0.1">   
                    <label for="volume-music">Music</label>
                    <input type="range" id="volume-msc" class="settings__slider settings__slider_hover" name="volume-music" 
                      min="0" max="1" value="${(0, _Utils__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)('settings', 'musicEffects')}" step="0.1">
              </div>
          </section>
        `;
                }
              };
              const DescriptionComponent = {
                id: 'description',
                title: 'Description',
                render: function () {
                  let className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'container';
                  return `
          <section class="${className} description">
            <h2 class="description__title">Tutorial:</h2>
              <div class="description__content">
                <p>Jump on platforms avoiding spikes and circular saws as you gradually move towards the finish line.</p>
                <p><span>Platforms One / Two / Three</span> can be active or inactive (switch their state with the <span>Space</span> key).</p>
                <p>The <span>Jump-Toggle-Switch</span> platform also changes its state every time the character jumps. Being on platforms <span>One / Two / Three</span>, be careful, you need to catch the right moment of switching during the jump.</p>
                <p><span>One-Step platform</span> - allows only a single presence of a character. After leaving this platform by the character or his collision with it, it is destroyed.<p/>
                <p>When encountering <span>dragons</span>, be careful, their fireballs are deadly.</p>
                <p>You can also encounter <span>Signal-Suppressor-Zones</span> in which the character cannot control the switching of states of <span>One / Two / Three</span> platforms.<p/>
                <p>Are you ready to take on the challenge?</p>
              </div>
          </section>
        `;
                }
              };
              const StartComponent = {
                id: 'game',
                title: 'Start game',
                render: function () {
                  let className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "container";
                  return `
          <section class="${className} level">
            <h2 class="level__title">Select level:</h2>
            <div class="level__list">
              <button class="level__item level__item_hover level__item_active level__item_disabled">1</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>2</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>3</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>4</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>5</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>6</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>7</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>8</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>9</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>10</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>11</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>12</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>13</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>14</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>15</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>16</button>
              <button class="level__item level__item_hover level__item_active level__item_disabled" disabled>17</button>
            </div>
          </section>
        `;
                }
              };
              const ErrorComponent = {
                id: 'error',
                title: '404',
                render: function () {
                  let className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'container';
                  return `
          <section class="${className} error">
            <img class="error__img" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.errorImg}" alt="error 404">
            <p class="error__msg">Page not found (<span>404</span> error), please try to return to the <a href="#main">main page</a>.</p>
          </section>
        `;
                }
              };
              const router = {
                main: HomeComponent,
                howtoplay: HowToPlayComponent,
                settings: SettingsComponent,
                description: DescriptionComponent,
                game: StartComponent,
                default: HomeComponent,
                error: ErrorComponent
              };
              this.init = function (container_btns, container_show) {
                myContainerBtns = container_btns;
                myContainerShow = container_show;
              };
              this.updateButtons = function (currentPage) {
                const menuLinks = myContainerBtns.querySelectorAll('.nav__link');
                const state = `#${currentPage}`;
                for (let link of menuLinks) {
                  state === link.getAttribute('href') ? link.classList.add('active') : link.classList.remove('active');
                }
              };
              this.renderContent = function (hashPageName) {
                let routeName = 'default';
                if (hashPageName.length > 0) {
                  routeName = hashPageName in router ? hashPageName : 'error';
                }
                window.document.title = router[routeName].title;
                myContainerShow.innerHTML = router[routeName].render(`${routeName}-page`);
                this.updateButtons(router[routeName].id);
              };
            }
            ;
            function Model() {
              let myView = null;
              this.init = function (view) {
                myView = view;
              };
              this.updateState = function (hashPageName) {
                myView.renderContent(hashPageName);
              };
            }
            function Controller() {
              let myContainer = null;
              let myModel = null;
              this.init = function (container, model) {
                myContainer = container;
                myModel = model;
                window.addEventListener('hashchange', this.updateState);
                this.updateState();
              };
              this.updateState = function () {
                const hashPageName = location.hash.slice(1).toLowerCase();
                myModel.updateState(hashPageName);
              };
            }
            ;

            /* Init */
            return {
              init: function (container_btns, container_show) {
                this.initBuildHtml();
                this.main();
                const view = new View();
                const model = new Model();
                const controller = new Controller();
                view.init(document.getElementById(container_btns), document.getElementById(container_show));
                model.init(view);
                controller.init(document.getElementById(container_btns), model); // можно передавать только model
              },

              main: function () {},
              initBuildHtml: function () {
                const app = document.getElementById('app');
                app.className = 'app';
                app.innerHTML = `
        <header class="header">
          <img class="cloud-1" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.cloud_1}" alt="cloud first">
          <img class="cloud-2" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.cloud_2}" alt="cloud second">
          <img class="cloud-3" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.cloud_3}" alt="cloud third">
          <img class="cloud-4" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.cloud_4}" alt="cloud fourth">
          <div id="mute-btn" class="mute mute_off mute_hover"></div>
            <div class="header__wrapper">
              <img class="header__logo" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.logoImg_1}" alt="logo">
                <div class="header__logo-box">
                  <img class="header__logo-2" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.logoImg_2}" alt="logo small">
                    <p class="header__title">Platform traveller</p>
                </div>
                  <div class="bird-container">
                    <img class="bird" src="${_Assets__WEBPACK_IMPORTED_MODULE_0__.birdFlyingImg}" alt="bird">
                  </div>
                      <nav id="root" class="header__nav nav">
                        <ul class="nav__list">
                          <li class="nav__item">
                            <a href="#howtoplay" class="nav__link">How to play</a>
                          </li>
                            <li class="nav__item">
                              <a href="#settings" id="settings-btn" class="nav__link">Settings</a>
                            </li>
                              <li class="nav__item">
                                <a href="#description" class="nav__link">Description</a>
                              </li>
                                <li class="nav__item">
                                  <a href="#game" id="select-lvl" class="nav__btn nav__btn_hover nav__link">Select level</a>
                                </li>
                          </ul>
                      </nav>
            </div>
        </header>
          <main id="content" class="content">
          </main>`;
              }
            };
          }();
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/js/Traps.js":
    /*!*************************!*\
      !*** ./src/js/Traps.js ***!
      \*************************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"BulletController": () => /* binding */BulletController,
            /* harmony export */"FlamethrowerDown": () => /* binding */FlamethrowerDown,
            /* harmony export */"FlamethrowerLeft": () => /* binding */FlamethrowerLeft,
            /* harmony export */"FlamethrowerRight": () => /* binding */FlamethrowerRight,
            /* harmony export */"FlamethrowerUp": () => /* binding */FlamethrowerUp,
            /* harmony export */"PlatformSpikes": () => /* binding */PlatformSpikes,
            /* harmony export */"Saw": () => /* binding */Saw
            /* harmony export */
          });
          /* harmony import */
          var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Canvas */"./src/js/Canvas.js");
          /* harmony import */
          var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../index */"./src/index.js");
          /* harmony import */
          var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./Utils */"./src/js/Utils.js");
          /* harmony import */
          var _Platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Platform */"./src/js/Platform.js");
          /* harmony import */
          var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./Assets */"./src/js/Assets.js");
          /* harmony import */
          var _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../js/data/Audio */"./src/js/data/Audio.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_1__, _Utils__WEBPACK_IMPORTED_MODULE_2__, _Platform__WEBPACK_IMPORTED_MODULE_3__, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__]);
          [_index__WEBPACK_IMPORTED_MODULE_1__, _Utils__WEBPACK_IMPORTED_MODULE_2__, _Platform__WEBPACK_IMPORTED_MODULE_3__, _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          class PlatformSpikes extends _Platform__WEBPACK_IMPORTED_MODULE_3__.Platform {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.type = 'spikes';
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.statusActive = true;
            }
            collision() {
              // Player - platform collision (player is above the spike platform)
              if (_index__WEBPACK_IMPORTED_MODULE_1__.player.bottom <= this.position.y && _index__WEBPACK_IMPORTED_MODULE_1__.player.bottom + _index__WEBPACK_IMPORTED_MODULE_1__.player.velocity.y >= this.position.y &&
              // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
              // Player - platform collision (player on the platform - inside of left and right platform boundaries)
              _index__WEBPACK_IMPORTED_MODULE_1__.player.right >= this.position.x + _index__WEBPACK_IMPORTED_MODULE_1__.player.width / 3 &&
              // + player.width / 3 - поправка чтобы персонаж погибал касаясь самого края платформы (без этого он еще погибал не доходя трети ширины спрайта героя)
              _index__WEBPACK_IMPORTED_MODULE_1__.player.left <= this.position.x + this.width - _index__WEBPACK_IMPORTED_MODULE_1__.player.width / 3) {
                _index__WEBPACK_IMPORTED_MODULE_1__.player.die();
              }
              // Player - platform collision (player is under the platform)
              if (_index__WEBPACK_IMPORTED_MODULE_1__.player.top <= this.position.y + this.height && _index__WEBPACK_IMPORTED_MODULE_1__.player.bottom + _index__WEBPACK_IMPORTED_MODULE_1__.player.velocity.y >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_1__.player.left >= this.position.x - _index__WEBPACK_IMPORTED_MODULE_1__.player.width / 2 &&
              // можно сделать 1.75
              _index__WEBPACK_IMPORTED_MODULE_1__.player.right <= this.position.x + this.width + _index__WEBPACK_IMPORTED_MODULE_1__.player.width / 2) {
                _index__WEBPACK_IMPORTED_MODULE_1__.player.die();
              }
            }
          }
          class Saw extends PlatformSpikes {
            constructor(posX, posY, image, platforms) {
              let marginLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
              let marginTop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              super(posX, posY, image, marginLeft, marginTop);
              this.type = 'saw';
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.frequency = 23;
            }
          }
          class Flamethrower {
            constructor(posX, posY, image, platforms, bulletController) {
              let marginLeft = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              let marginTop = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
              this.type = 'flamethrower';
              this.statusActive = true;
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
              this.bulletFlight = {
                // speed and direction
                x: 0 + marginLeft,
                y: 0 + marginTop
              };
              this.width = 36;
              this.height = 36;
              this.bulletSpeed = 2; //2
              this.caliber = 36; // Bullet size
              this.delay = 200;
              this.bulletController = bulletController;
              this.platforms = platforms;
              this.frames = 1;
              this.frequency = 79;
              this.sprites = {
                idle: image
              };
              this.currentSprite = this.sprites.idle;
            }
            draw() {
              if (!this.currentSprite.loaded) return;
              this.frames++;
              if (this.frames > this.frequency) this.frames = 0;
              _Canvas__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height);
              this.shoot();
              this.bulletController.draw();
            }
            shoot() {
              const delay = this.delay;
              let bullet_X, bullet_Y;
              // Bullet position x/y axes
              switch (this.type) {
                case 'flamethrowerLeft':
                  bullet_X = this.position.x - this.caliber / 3; // bullet_X = this.position.x - this.caliber;
                  break;
                case 'flamethrowerRight':
                  bullet_X = this.position.x + this.width - this.caliber * 0.7; // bullet_X = this.position.x + this.width;
                  break;
                case 'flamethrowerUp':
                case 'flamethrowerDown':
                  bullet_X = this.position.x + this.width / 2 - this.caliber / 2;
                  break;
              }
              switch (this.type) {
                case 'flamethrowerLeft':
                case 'flamethrowerRight':
                  bullet_Y = this.position.y + this.height / 2 - this.caliber / 3.5; // bullet_Y = this.position.y + this.height / 2 - this.caliber / 2;
                  break;
                case 'flamethrowerUp':
                  bullet_Y = this.position.y - this.caliber / 3; // bullet_Y = this.position.y - this.caliber;
                  break;
                case 'flamethrowerDown':
                  bullet_Y = this.position.y + this.height - this.caliber * 0.75; // bullet_Y = this.position.y + this.height;
                  break;
              }
              // Bullet velocity x/y axes
              switch (this.type) {
                case 'flamethrowerLeft':
                  this.bulletFlight.x = this.bulletSpeed;
                  break;
                case 'flamethrowerRight':
                  this.bulletFlight.x = -this.bulletSpeed;
                  break;
                case 'flamethrowerUp':
                case 'flamethrowerDown':
                  this.bulletFlight.x = 0;
                  break;
              }
              switch (this.type) {
                case 'flamethrowerLeft':
                case 'flamethrowerRight':
                  this.bulletFlight.y = 0;
                  break;
                case 'flamethrowerUp':
                  this.bulletFlight.y = this.bulletSpeed;
                  break;
                case 'flamethrowerDown':
                  this.bulletFlight.y = -this.bulletSpeed;
                  break;
              }
              this.bulletController.shoot(bullet_X, bullet_Y, delay, this.bulletFlight.x, this.bulletFlight.y, this.caliber, this.type, this.platforms);
            }
            collision() {
              // Player - platform collision (player is above the spike platform)
              if (_index__WEBPACK_IMPORTED_MODULE_1__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_1__.player.height <= this.position.y && _index__WEBPACK_IMPORTED_MODULE_1__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_1__.player.height + _index__WEBPACK_IMPORTED_MODULE_1__.player.velocity.y >= this.position.y &&
              // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
              // Player - platform collision (player on the platform - inside of left and right platform boundaries)
              _index__WEBPACK_IMPORTED_MODULE_1__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_1__.player.width >= this.position.x + _index__WEBPACK_IMPORTED_MODULE_1__.player.width / 3 &&
              // + player.width / 3 - поправка чтобы персонаж погибал касаясь самого края платформы (без этого он еще погибал не доходя трети ширины спрайта героя)
              _index__WEBPACK_IMPORTED_MODULE_1__.player.position.x <= this.position.x + this.width - _index__WEBPACK_IMPORTED_MODULE_1__.player.width / 3) {
                _index__WEBPACK_IMPORTED_MODULE_1__.player.die();
              }
              // Player - platform collision (player is under the platform)
              if (_index__WEBPACK_IMPORTED_MODULE_1__.player.position.y <= this.position.y + this.height && _index__WEBPACK_IMPORTED_MODULE_1__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_1__.player.height + _index__WEBPACK_IMPORTED_MODULE_1__.player.velocity.y >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_1__.player.position.x >= this.position.x - _index__WEBPACK_IMPORTED_MODULE_1__.player.width / 2 &&
              // можно сделать 1.75
              _index__WEBPACK_IMPORTED_MODULE_1__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_1__.player.width <= this.position.x + this.width + _index__WEBPACK_IMPORTED_MODULE_1__.player.width / 2) {
                _index__WEBPACK_IMPORTED_MODULE_1__.player.die();
              }
            }
            update() {
              console.log('Fire!');
            }
          }
          class FlamethrowerLeft extends Flamethrower {
            constructor(posX, posY, image, platforms, bulletController) {
              let marginLeft = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              let marginTop = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
              super(posX, posY, image, platforms, bulletController, marginLeft, marginTop);
              this.type = 'flamethrowerLeft';
              this.position = {
                x: posX + marginLeft,
                y: posY + marginTop
              };
            }
          }
          class FlamethrowerRight extends Flamethrower {
            constructor(posX, posY, image, platforms, bulletController) {
              let marginLeft = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              let marginTop = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
              super(posX, posY, image, platforms, bulletController, marginLeft, marginTop);
              this.type = 'flamethrowerRight';
            }
          }
          class FlamethrowerUp extends Flamethrower {
            constructor(posX, posY, image, platforms, bulletController) {
              let marginLeft = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              let marginTop = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
              super(posX, posY, image, platforms, bulletController, marginLeft, marginTop);
              this.type = 'flamethrowerUp';
            }
          }
          class FlamethrowerDown extends Flamethrower {
            constructor(posX, posY, image, platforms, bulletController) {
              let marginLeft = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
              let marginTop = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
              super(posX, posY, image, platforms, bulletController, marginLeft, marginTop);
              this.type = 'flamethrowerDown';
            }
          }
          class BulletController {
            constructor() {
              this.platforms = null;
              this.caliber = null;
            }
            bullets = [];
            timerTillNextBullet = 0;
            shoot(posX, posY, delay, flight_X, flight_Y, caliber, directionFlametrowerType, platforms) {
              this.platforms = platforms;
              this.caliber = caliber;
              if (this.timerTillNextBullet <= 0) {
                this.bullets.push(new Bullet(posX, posY, flight_X, flight_Y, caliber, directionFlametrowerType, platforms));
                this.timerTillNextBullet = delay;
              }
              this.timerTillNextBullet--;
            }
            draw() {
              this.bullets.forEach(bullet => {
                if (this.isBulletOffScreen(bullet)) {
                  const index = this.bullets.indexOf(bullet);
                  this.bullets.splice(index, 1);
                }
                bullet.draw();
                bullet.collision();
                this.collisionWithBlocks(bullet);
              });
            }
            collisionWithBlocks(bullet) {
              this.platforms.forEach(block => {
                block.statusActive && bullet.position.x + bullet.width * 0.1 <= block.right && bullet.position.x >= block.left && bullet.position.y <= block.bottom && bullet.position.y >= block.top && this.destroy(bullet);
              });
            }
            destroy(bullet) {
              const index = this.bullets.indexOf(bullet);
              this.bullets.splice(index, 1);
            }
            collideWith(sprite) {
              return this.bullets.some(bullet => {
                if (bullet.collideWith(sprite)) {
                  this.bullets.splice(this.bullets.indexOf(bullet), 1);
                  return true;
                }
                return false;
              });
            }
            isBulletOffScreen(bullet) {
              return bullet.position.y <= 0 || bullet.position.y >= _Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height || bullet.position.x <= 0 || bullet.position.x >= _Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width;
            }
          }
          class Bullet {
            constructor(posX, posY, flight_X, flight_Y, caliber, directionFlametrowerType, platforms) {
              let marginLeft = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
              let marginTop = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
              this.position = {
                x: posX,
                y: posY
              };
              this.type = directionFlametrowerType;
              this.flight_X = flight_X;
              this.flight_Y = flight_Y;
              this.width = caliber;
              this.height = caliber;
              this.frames = 1;
              this.frequency = 23;
              this.platforms = platforms;
              this.sprites = {
                left: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.fireballLeft, 36, 36),
                right: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.fireballRight, 36, 36),
                up: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.fireballUp, 36, 36),
                down: (0, _Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.fireballDown, 36, 36)
              };
              switch (this.type) {
                case 'flamethrowerLeft':
                  this.currentSprite = this.sprites.left;
                  break;
                case 'flamethrowerRight':
                  this.currentSprite = this.sprites.right;
                  break;
                case 'flamethrowerUp':
                  this.currentSprite = this.sprites.up;
                  break;
                case 'flamethrowerDown':
                  this.currentSprite = this.sprites.down;
                  break;
              }
            }
            draw() {
              if (!this.currentSprite.loaded) return;
              this.position.x -= this.flight_X;
              this.position.y -= this.flight_Y;
              this.frames++;
              if (this.frames > this.frequency) this.frames = 0;
              _Canvas__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height);
            }
            collision() {
              if (_index__WEBPACK_IMPORTED_MODULE_1__.player.top + _index__WEBPACK_IMPORTED_MODULE_1__.player.height * 0.3 >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_1__.player.top + _index__WEBPACK_IMPORTED_MODULE_1__.player.height * 0.3 <= this.position.y + this.height && _index__WEBPACK_IMPORTED_MODULE_1__.player.left + _index__WEBPACK_IMPORTED_MODULE_1__.player.width * 0.3 >= this.position.x && _index__WEBPACK_IMPORTED_MODULE_1__.player.left + _index__WEBPACK_IMPORTED_MODULE_1__.player.width * 0.3 <= this.position.x + this.width) {
                _index__WEBPACK_IMPORTED_MODULE_1__.player.die();
              }
            }
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/js/Utils.js":
    /*!*************************!*\
      !*** ./src/js/Utils.js ***!
      \*************************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"changeMuteIcon": () => /* binding */changeMuteIcon,
            /* harmony export */"createImage": () => /* binding */createImage,
            /* harmony export */"flamethrowerShootSoundIntervalInit": () => /* binding */flamethrowerShootSoundIntervalInit,
            /* harmony export */"fullScreen": () => /* binding */fullScreen,
            /* harmony export */"getLocalStorage": () => /* binding */getLocalStorage,
            /* harmony export */"randomNumber": () => /* binding */randomNumber,
            /* harmony export */"setLocalStorage": () => /* binding */setLocalStorage
            /* harmony export */
          });
          /* harmony import */
          var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../index */"./src/index.js");
          /* harmony import */
          var _data_Audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./data/Audio */"./src/js/data/Audio.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__, _data_Audio__WEBPACK_IMPORTED_MODULE_1__]);
          [_index__WEBPACK_IMPORTED_MODULE_0__, _data_Audio__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          function createImage(src, width, height) {
            const image = new Image();
            image.onload = () => {
              image.loaded = true;
            };
            image.loaded = false;
            image.src = src;
            image.width = width;
            image.height = height;
            return image;
          }
          function randomNumber() {
            let min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            let max = arguments.length > 1 ? arguments[1] : undefined;
            return Math.floor(min + Math.random() * (max + 1 - min));
          }
          function fireSoundInterval(delay) {
            timerShoot_1 = setTimeout(function soundFire() {
              timerShoot_2 = setTimeout(soundFire, delay);
              (0, _data_Audio__WEBPACK_IMPORTED_MODULE_1__.gameSoundEffects)(audio.fire);
            }, delay);
          }
          function flamethrowerShootSoundIntervalInit() {
            if (_index__WEBPACK_IMPORTED_MODULE_0__.initStart) {
              let flamethrowerShootDelay = null;
              _index__WEBPACK_IMPORTED_MODULE_0__.platforms.forEach(platform => {
                (platform.type === 'flamethrowerLeft' || platform.type === 'flamethrowerRight' || platform.type === 'flamethrowerUp' || platform.type === 'flamethrowerDown') && (flamethrowerShootDelay = platform.delay);
              });
              if (_index__WEBPACK_IMPORTED_MODULE_0__.platforms.some(platform => {
                return platform.type === 'flamethrowerLeft' || platform.type === 'flamethrowerRight' || platform.type === 'flamethrowerUp' || platform.type === 'flamethrowerDown';
              })) {
                fireSoundInterval(flamethrowerShootDelay * 8);
              }
            }
          }
          function fullScreen(e, element) {
            if (e.code === 'KeyF') {
              if (element.requestFullscreen) {
                element.requestFullscreen();
              } else if (element.webkitrequestFullscreen) {
                element.webkitRequestFullscreen();
              } else if (element.mozRequestFullscreen) {
                element.mozRequestFullScreen();
              }
            }
          }
          function setLocalStorage(item_1, item_2) {
            if ('localStorage' in window && window.localStorage !== null) {
              let soundSettings = {
                soundEffects: item_1,
                musicEffects: item_2
              };
              localStorage.setItem('settings', JSON.stringify(soundSettings));
            }
          }
          function getLocalStorage(key, value) {
            return localStorage.length !== 0 ? JSON.parse(localStorage.getItem(key))[value] : 0.8;
          }
          function changeMuteIcon() {
            const muteIcon = document.getElementById('mute-btn');
            muteIcon.classList.toggle('mute_off');
            muteIcon.classList.toggle('mute_on');
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/js/data/Audio.js":
    /*!******************************!*\
      !*** ./src/js/data/Audio.js ***!
      \******************************/
    /***/
    (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */
          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */"audio": () => /* binding */audio,
            /* harmony export */"gameSoundEffects": () => /* binding */gameSoundEffects,
            /* harmony export */"getRandomTrack": () => /* binding */getRandomTrack,
            /* harmony export */"muteSound": () => /* binding */muteSound,
            /* harmony export */"playNextTrack": () => /* binding */playNextTrack,
            /* harmony export */"source": () => /* binding */source,
            /* harmony export */"volumeEffects": () => /* binding */volumeEffects,
            /* harmony export */"volumeMusic": () => /* binding */volumeMusic
            /* harmony export */
          });
          /* harmony import */
          var _assets_sounds_effects_mp3_block_hit_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/block_hit.mp3 */"./assets/sounds/effects/mp3/block_hit.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_block_hit_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/block_hit.ogg */"./assets/sounds/effects/ogg/block_hit.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_bottom_hit_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/bottom_hit.mp3 */"./assets/sounds/effects/mp3/bottom_hit.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_bottom_hit_ogg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/bottom_hit.ogg */"./assets/sounds/effects/ogg/bottom_hit.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_choose_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/choose.mp3 */"./assets/sounds/effects/mp3/choose.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_choose_ogg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/choose.ogg */"./assets/sounds/effects/ogg/choose.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_explosion_block_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/explosion_block.mp3 */"./assets/sounds/effects/mp3/explosion_block.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_explosion_block_ogg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/explosion_block.ogg */"./assets/sounds/effects/ogg/explosion_block.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_falling_in_depth_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/falling_in_depth.mp3 */"./assets/sounds/effects/mp3/falling_in_depth.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_falling_in_depth_ogg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/falling_in_depth.ogg */"./assets/sounds/effects/ogg/falling_in_depth.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_falling_in_depth_2_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/falling_in_depth_2.mp3 */"./assets/sounds/effects/mp3/falling_in_depth_2.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_falling_in_depth_2_ogg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/falling_in_depth_2.ogg */"./assets/sounds/effects/ogg/falling_in_depth_2.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_fire_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/fire.mp3 */"./assets/sounds/effects/mp3/fire.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_fire_ogg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/fire.ogg */"./assets/sounds/effects/ogg/fire.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_hero_death_mp3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/hero_death.mp3 */"./assets/sounds/effects/mp3/hero_death.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_hero_death_ogg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/hero_death.ogg */"./assets/sounds/effects/ogg/hero_death.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_jump_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/jump.mp3 */"./assets/sounds/effects/mp3/jump.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_jump_ogg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/jump.ogg */"./assets/sounds/effects/ogg/jump.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_jump_on_space_toggled_platform_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/jump_on_space_toggled_platform.mp3 */"./assets/sounds/effects/mp3/jump_on_space_toggled_platform.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_jump_on_space_toggled_platform_ogg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/jump_on_space_toggled_platform.ogg */"./assets/sounds/effects/ogg/jump_on_space_toggled_platform.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_next_level_mp3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/next_level.mp3 */"./assets/sounds/effects/mp3/next_level.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_next_level_ogg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/next_level.ogg */"./assets/sounds/effects/ogg/next_level.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_ok_mp3__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/ok.mp3 */"./assets/sounds/effects/mp3/ok.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_ok_ogg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/ok.ogg */"./assets/sounds/effects/ogg/ok.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_select_mp3__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/select.mp3 */"./assets/sounds/effects/mp3/select.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_select_ogg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/select.ogg */"./assets/sounds/effects/ogg/select.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_teleport_mp3__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/teleport.mp3 */"./assets/sounds/effects/mp3/teleport.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_teleport_ogg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/teleport.ogg */"./assets/sounds/effects/ogg/teleport.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_toggle_mp3__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/toggle.mp3 */"./assets/sounds/effects/mp3/toggle.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_toggle_ogg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/toggle.ogg */"./assets/sounds/effects/ogg/toggle.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_toggle_disabled_mp3__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/toggle_disabled.mp3 */"./assets/sounds/effects/mp3/toggle_disabled.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_toggle_disabled_ogg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/toggle_disabled.ogg */"./assets/sounds/effects/ogg/toggle_disabled.ogg");
          /* harmony import */
          var _assets_sounds_effects_mp3_error_mp3__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__( /*! ../../../assets/sounds/effects/mp3/error.mp3 */"./assets/sounds/effects/mp3/error.mp3");
          /* harmony import */
          var _assets_sounds_effects_ogg_error_ogg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__( /*! ../../../assets/sounds/effects/ogg/error.ogg */"./assets/sounds/effects/ogg/error.ogg");
          /* harmony import */
          var _assets_sounds_music_mp3_track_1_mp3__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__( /*! ../../../assets/sounds/music/mp3/track_1.mp3 */"./assets/sounds/music/mp3/track_1.mp3");
          /* harmony import */
          var _assets_sounds_music_ogg_track_1_ogg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__( /*! ../../../assets/sounds/music/ogg/track_1.ogg */"./assets/sounds/music/ogg/track_1.ogg");
          /* harmony import */
          var _assets_sounds_music_mp3_track_2_mp3__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__( /*! ../../../assets/sounds/music/mp3/track_2.mp3 */"./assets/sounds/music/mp3/track_2.mp3");
          /* harmony import */
          var _assets_sounds_music_ogg_track_2_ogg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__( /*! ../../../assets/sounds/music/ogg/track_2.ogg */"./assets/sounds/music/ogg/track_2.ogg");
          /* harmony import */
          var _assets_sounds_music_mp3_track_3_mp3__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__( /*! ../../../assets/sounds/music/mp3/track_3.mp3 */"./assets/sounds/music/mp3/track_3.mp3");
          /* harmony import */
          var _assets_sounds_music_ogg_track_3_ogg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__( /*! ../../../assets/sounds/music/ogg/track_3.ogg */"./assets/sounds/music/ogg/track_3.ogg");
          /* harmony import */
          var _assets_sounds_music_mp3_track_4_mp3__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__( /*! ../../../assets/sounds/music/mp3/track_4.mp3 */"./assets/sounds/music/mp3/track_4.mp3");
          /* harmony import */
          var _assets_sounds_music_ogg_track_4_ogg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__( /*! ../../../assets/sounds/music/ogg/track_4.ogg */"./assets/sounds/music/ogg/track_4.ogg");
          /* harmony import */
          var _Utils__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__( /*! ../Utils */"./src/js/Utils.js");
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Utils__WEBPACK_IMPORTED_MODULE_42__]);
          _Utils__WEBPACK_IMPORTED_MODULE_42__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          let volumeEffects = (0, _Utils__WEBPACK_IMPORTED_MODULE_42__.getLocalStorage)('settings', 'soundEffects');
          let volumeMusic = (0, _Utils__WEBPACK_IMPORTED_MODULE_42__.getLocalStorage)('settings', 'musicEffects');
          const audio = {
            isCanPlay: new Audio(),
            blockHit: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_block_hit_mp3__WEBPACK_IMPORTED_MODULE_0__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_block_hit_ogg__WEBPACK_IMPORTED_MODULE_1__),
              volume: volumeEffects
            },
            bottomHit: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_bottom_hit_mp3__WEBPACK_IMPORTED_MODULE_2__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_bottom_hit_ogg__WEBPACK_IMPORTED_MODULE_3__),
              volume: volumeEffects
            },
            choose: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_choose_mp3__WEBPACK_IMPORTED_MODULE_4__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_choose_ogg__WEBPACK_IMPORTED_MODULE_5__),
              volume: volumeEffects
            },
            explosionBlock: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_explosion_block_mp3__WEBPACK_IMPORTED_MODULE_6__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_explosion_block_ogg__WEBPACK_IMPORTED_MODULE_7__),
              volume: volumeEffects
            },
            fallingInDepth: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_falling_in_depth_mp3__WEBPACK_IMPORTED_MODULE_8__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_falling_in_depth_ogg__WEBPACK_IMPORTED_MODULE_9__),
              volume: volumeEffects
            },
            fallingInDepth2: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_falling_in_depth_2_mp3__WEBPACK_IMPORTED_MODULE_10__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_falling_in_depth_2_ogg__WEBPACK_IMPORTED_MODULE_11__),
              volume: volumeEffects
            },
            fire: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_fire_mp3__WEBPACK_IMPORTED_MODULE_12__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_fire_ogg__WEBPACK_IMPORTED_MODULE_13__),
              volume: volumeEffects
            },
            heroDeath: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_hero_death_mp3__WEBPACK_IMPORTED_MODULE_14__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_hero_death_ogg__WEBPACK_IMPORTED_MODULE_15__),
              volume: volumeEffects
            },
            jump: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_jump_mp3__WEBPACK_IMPORTED_MODULE_16__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_jump_ogg__WEBPACK_IMPORTED_MODULE_17__),
              volume: volumeEffects
            },
            jumpOnSpaceToggledPlatform: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_jump_on_space_toggled_platform_mp3__WEBPACK_IMPORTED_MODULE_18__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_jump_on_space_toggled_platform_ogg__WEBPACK_IMPORTED_MODULE_19__),
              volume: volumeEffects / 2
            },
            nextLevel: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_next_level_mp3__WEBPACK_IMPORTED_MODULE_20__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_next_level_ogg__WEBPACK_IMPORTED_MODULE_21__),
              volume: volumeEffects
            },
            ok: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_ok_mp3__WEBPACK_IMPORTED_MODULE_22__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_ok_ogg__WEBPACK_IMPORTED_MODULE_23__),
              volume: volumeEffects
            },
            select: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_select_mp3__WEBPACK_IMPORTED_MODULE_24__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_select_ogg__WEBPACK_IMPORTED_MODULE_25__),
              volume: volumeEffects
            },
            teleport: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_teleport_mp3__WEBPACK_IMPORTED_MODULE_26__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_teleport_ogg__WEBPACK_IMPORTED_MODULE_27__),
              volume: volumeEffects
            },
            toggle: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_toggle_mp3__WEBPACK_IMPORTED_MODULE_28__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_toggle_ogg__WEBPACK_IMPORTED_MODULE_29__),
              volume: volumeEffects
            },
            toggleDisabled: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_toggle_disabled_mp3__WEBPACK_IMPORTED_MODULE_30__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_toggle_disabled_ogg__WEBPACK_IMPORTED_MODULE_31__),
              volume: volumeEffects
            },
            error: {
              src_MP3: new Audio(_assets_sounds_effects_mp3_error_mp3__WEBPACK_IMPORTED_MODULE_32__),
              src_OGG: new Audio(_assets_sounds_effects_ogg_error_ogg__WEBPACK_IMPORTED_MODULE_33__),
              volume: volumeEffects
            },
            track_1: {
              src_MP3: new Audio(_assets_sounds_music_mp3_track_1_mp3__WEBPACK_IMPORTED_MODULE_34__),
              src_OGG: new Audio(_assets_sounds_music_ogg_track_1_ogg__WEBPACK_IMPORTED_MODULE_35__),
              volume: volumeMusic
            },
            track_2: {
              src_MP3: new Audio(_assets_sounds_music_mp3_track_2_mp3__WEBPACK_IMPORTED_MODULE_36__),
              src_OGG: new Audio(_assets_sounds_music_ogg_track_2_ogg__WEBPACK_IMPORTED_MODULE_37__),
              volume: volumeMusic
            },
            track_3: {
              src_MP3: new Audio(_assets_sounds_music_mp3_track_3_mp3__WEBPACK_IMPORTED_MODULE_38__),
              src_OGG: new Audio(_assets_sounds_music_ogg_track_3_ogg__WEBPACK_IMPORTED_MODULE_39__),
              volume: volumeMusic
            },
            track_4: {
              src_MP3: new Audio(_assets_sounds_music_mp3_track_4_mp3__WEBPACK_IMPORTED_MODULE_40__),
              src_OGG: new Audio(_assets_sounds_music_ogg_track_4_ogg__WEBPACK_IMPORTED_MODULE_41__),
              volume: volumeMusic
            }
          };
          let source = null;
          // Choose supported source and preload
          ;
          (function () {
            if (audio.isCanPlay.canPlayType('audio/mpeg') === 'probably') {
              source = 'src_MP3';
            } else {
              source = 'src_OGG';
            }
            for (let sound in audio) {
              if (audio?.[sound]?.[source]) {
                let {
                  src_MP3: mp3,
                  src_OGG: ogg
                } = audio[sound];
                mp3.play();
                mp3.pause();
                ogg.play();
                ogg.pause();
              }
            }
          })();
          function gameSoundEffects(item) {
            item[source].currentTime = 0;
            item[source].play();
          }
          function getRandomTrack(playlist) {
            let tracksList = [];
            let track;
            for (let sound in playlist) {
              sound.includes('track') && tracksList.push(playlist[sound]);
            }
            track = tracksList[(0, _Utils__WEBPACK_IMPORTED_MODULE_42__.randomNumber)(0, tracksList.length - 1)][source];
            track.currentTime = 0;
            track.volume = volumeMusic;
            return track;
          }
          const playNextTrack = (currentTrack, playlist) => {
            let tracksList = [];
            let currentTrackNumber = null;
            for (let sound in playlist) {
              sound.includes('track') && tracksList.push(playlist[sound]);
            }
            tracksList.forEach((track, index) => {
              track[source] === currentTrack && (currentTrackNumber = index);
            });
            currentTrackNumber < tracksList.length - 1 ? currentTrackNumber++ : currentTrackNumber = 0;
            tracksList[currentTrackNumber][source].currentTime = 0;
            tracksList[currentTrackNumber][source].volume = volumeMusic;
            tracksList[currentTrackNumber][source].play();
            tracksList[currentTrackNumber][source].onended = function () {
              playNextTrack(tracksList[currentTrackNumber][source], audio);
            };
          };
          function muteSound(e) {
            if (e.target.closest('#mute-btn')) {
              for (let sound in audio) {
                if (audio?.[sound]?.[source]) {
                  audio[sound][source].muted === false ? audio[sound][source].muted = true : audio[sound][source].muted = false;
                }
              }
              (0, _Utils__WEBPACK_IMPORTED_MODULE_42__.changeMuteIcon)();
            }
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      });

      /***/
    },

    /***/"./src/sass/styles.scss":
    /*!******************************!*\
      !*** ./src/sass/styles.scss ***!
      \******************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      // extracted by mini-css-extract-plugin

      /***/
    },

    /***/"./assets/img/Background_images/Win_4.jpg":
    /*!************************************************!*\
      !*** ./assets/img/Background_images/Win_4.jpg ***!
      \************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "41902777fb77a1d57149.jpg";

      /***/
    },

    /***/"./assets/img/Background_images/bg_1.jpg":
    /*!***********************************************!*\
      !*** ./assets/img/Background_images/bg_1.jpg ***!
      \***********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "8c8433101090cd8bc0bb.jpg";

      /***/
    },

    /***/"./assets/img/Hero/Fall_left.png":
    /*!***************************************!*\
      !*** ./assets/img/Hero/Fall_left.png ***!
      \***************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "caa8591cb3f3a1855c29.png";

      /***/
    },

    /***/"./assets/img/Hero/Fall_right.png":
    /*!****************************************!*\
      !*** ./assets/img/Hero/Fall_right.png ***!
      \****************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "61cdd2e0f3c3604e7b1f.png";

      /***/
    },

    /***/"./assets/img/Hero/Idle_left.png":
    /*!***************************************!*\
      !*** ./assets/img/Hero/Idle_left.png ***!
      \***************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "47bb81cb0aaa2c499d5c.png";

      /***/
    },

    /***/"./assets/img/Hero/Idle_right.png":
    /*!****************************************!*\
      !*** ./assets/img/Hero/Idle_right.png ***!
      \****************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "8a499ad60f919b1f6cad.png";

      /***/
    },

    /***/"./assets/img/Hero/Jump_left.png":
    /*!***************************************!*\
      !*** ./assets/img/Hero/Jump_left.png ***!
      \***************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "02bc1678beb112beb4a1.png";

      /***/
    },

    /***/"./assets/img/Hero/Jump_right.png":
    /*!****************************************!*\
      !*** ./assets/img/Hero/Jump_right.png ***!
      \****************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "4e23b39a2281ee54125f.png";

      /***/
    },

    /***/"./assets/img/Hero/Player_death.png":
    /*!******************************************!*\
      !*** ./assets/img/Hero/Player_death.png ***!
      \******************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "c53e7b3ac960db1762a9.png";

      /***/
    },

    /***/"./assets/img/Hero/Run_left.png":
    /*!**************************************!*\
      !*** ./assets/img/Hero/Run_left.png ***!
      \**************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "542a853a490865e4177b.png";

      /***/
    },

    /***/"./assets/img/Hero/Run_right.png":
    /*!***************************************!*\
      !*** ./assets/img/Hero/Run_right.png ***!
      \***************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "e361987edb2dc29e1508.png";

      /***/
    },

    /***/"./assets/img/Platforms/Finish_T_L.png":
    /*!*********************************************!*\
      !*** ./assets/img/Platforms/Finish_T_L.png ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "38915aefe86632a9ac20.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_jump.png":
    /*!************************************************!*\
      !*** ./assets/img/Platforms/Platform_jump.png ***!
      \************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "befd1a46da1a01267d9e.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_jump_disabled.png":
    /*!*********************************************************!*\
      !*** ./assets/img/Platforms/Platform_jump_disabled.png ***!
      \*********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "73ffdfeda1c0c3fa260e.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_one.png":
    /*!***********************************************!*\
      !*** ./assets/img/Platforms/Platform_one.png ***!
      \***********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "893ecde318d7755323b7.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_oneStep.png":
    /*!***************************************************!*\
      !*** ./assets/img/Platforms/Platform_oneStep.png ***!
      \***************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "c2b486028ea06a42538d.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_oneStep_Explosion.png":
    /*!*************************************************************!*\
      !*** ./assets/img/Platforms/Platform_oneStep_Explosion.png ***!
      \*************************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "a27c1909728c39bb81d1.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_one_disabled.png":
    /*!********************************************************!*\
      !*** ./assets/img/Platforms/Platform_one_disabled.png ***!
      \********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "15a754e2c1925bdc527f.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_solid.png":
    /*!*************************************************!*\
      !*** ./assets/img/Platforms/Platform_solid.png ***!
      \*************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "dd246bde66e7e6e5e3fc.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_three.png":
    /*!*************************************************!*\
      !*** ./assets/img/Platforms/Platform_three.png ***!
      \*************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "8227e458d9e6b45666dc.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_three_disabled.png":
    /*!**********************************************************!*\
      !*** ./assets/img/Platforms/Platform_three_disabled.png ***!
      \**********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "171091192763139674e9.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_two.png":
    /*!***********************************************!*\
      !*** ./assets/img/Platforms/Platform_two.png ***!
      \***********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "4550e1c7d8d19a7959ef.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_two_disabled.png":
    /*!********************************************************!*\
      !*** ./assets/img/Platforms/Platform_two_disabled.png ***!
      \********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "14db406580d82c54850b.png";

      /***/
    },

    /***/"./assets/img/Platforms/brick_1.png":
    /*!******************************************!*\
      !*** ./assets/img/Platforms/brick_1.png ***!
      \******************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "cf7f7083ae6b5338384a.png";

      /***/
    },

    /***/"./assets/img/Platforms/brick_2.png":
    /*!******************************************!*\
      !*** ./assets/img/Platforms/brick_2.png ***!
      \******************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "ee2cf136916afa6626fe.png";

      /***/
    },

    /***/"./assets/img/Platforms/platform.png":
    /*!*******************************************!*\
      !*** ./assets/img/Platforms/platform.png ***!
      \*******************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "7eac2d1901ea34422f0e.png";

      /***/
    },

    /***/"./assets/img/SPA/404.png":
    /*!********************************!*\
      !*** ./assets/img/SPA/404.png ***!
      \********************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "d6ae460aef8c7a5e09aa.png";

      /***/
    },

    /***/"./assets/img/SPA/arrows.png":
    /*!***********************************!*\
      !*** ./assets/img/SPA/arrows.png ***!
      \***********************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "585f4dd8a44c4c6ef29f.png";

      /***/
    },

    /***/"./assets/img/SPA/cloud_1.png":
    /*!************************************!*\
      !*** ./assets/img/SPA/cloud_1.png ***!
      \************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "b8c2cb7fc7c5ccc4c2c8.png";

      /***/
    },

    /***/"./assets/img/SPA/cloud_2.png":
    /*!************************************!*\
      !*** ./assets/img/SPA/cloud_2.png ***!
      \************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "038295bf2462c5284db2.png";

      /***/
    },

    /***/"./assets/img/SPA/cloud_3.png":
    /*!************************************!*\
      !*** ./assets/img/SPA/cloud_3.png ***!
      \************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "6c0cfb1374a4eb5e33a3.png";

      /***/
    },

    /***/"./assets/img/SPA/cloud_4.png":
    /*!************************************!*\
      !*** ./assets/img/SPA/cloud_4.png ***!
      \************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "0a68175f43cec8b1a194.png";

      /***/
    },

    /***/"./assets/img/SPA/f.png":
    /*!******************************!*\
      !*** ./assets/img/SPA/f.png ***!
      \******************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "dafb6d4501e1437d44c2.png";

      /***/
    },

    /***/"./assets/img/SPA/flying.gif":
    /*!***********************************!*\
      !*** ./assets/img/SPA/flying.gif ***!
      \***********************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "19a24757711822d420cd.gif";

      /***/
    },

    /***/"./assets/img/SPA/logo.png":
    /*!*********************************!*\
      !*** ./assets/img/SPA/logo.png ***!
      \*********************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "9ded7098db0de0ee5f14.png";

      /***/
    },

    /***/"./assets/img/SPA/logo_2.png":
    /*!***********************************!*\
      !*** ./assets/img/SPA/logo_2.png ***!
      \***********************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "101bca4fe3b9730ef925.png";

      /***/
    },

    /***/"./assets/img/SPA/m.png":
    /*!******************************!*\
      !*** ./assets/img/SPA/m.png ***!
      \******************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "5b88f8c92d3dbe18357c.png";

      /***/
    },

    /***/"./assets/img/SPA/mute_off.png":
    /*!*************************************!*\
      !*** ./assets/img/SPA/mute_off.png ***!
      \*************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "84acc7ea18786d322299.png";

      /***/
    },

    /***/"./assets/img/SPA/mute_on.png":
    /*!************************************!*\
      !*** ./assets/img/SPA/mute_on.png ***!
      \************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "cf701a267920e02b7a95.png";

      /***/
    },

    /***/"./assets/img/SPA/space.png":
    /*!**********************************!*\
      !*** ./assets/img/SPA/space.png ***!
      \**********************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "750a10492757e1a067d8.png";

      /***/
    },

    /***/"./assets/img/Traps/Dead_signal_zone.png":
    /*!***********************************************!*\
      !*** ./assets/img/Traps/Dead_signal_zone.png ***!
      \***********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "03857753acbdef4e6e04.png";

      /***/
    },

    /***/"./assets/img/Traps/Dead_signal_zone_hover.png":
    /*!*****************************************************!*\
      !*** ./assets/img/Traps/Dead_signal_zone_hover.png ***!
      \*****************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "62e7d0778000c13e26fd.png";

      /***/
    },

    /***/"./assets/img/Traps/Fan.png":
    /*!**********************************!*\
      !*** ./assets/img/Traps/Fan.png ***!
      \**********************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "c8662b60253954dfab65.png";

      /***/
    },

    /***/"./assets/img/Traps/Fireball_down.png":
    /*!********************************************!*\
      !*** ./assets/img/Traps/Fireball_down.png ***!
      \********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "ac9f21f4de237fa1c10a.png";

      /***/
    },

    /***/"./assets/img/Traps/Fireball_left.png":
    /*!********************************************!*\
      !*** ./assets/img/Traps/Fireball_left.png ***!
      \********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "f65321ba63f1ed1febd1.png";

      /***/
    },

    /***/"./assets/img/Traps/Fireball_right.png":
    /*!*********************************************!*\
      !*** ./assets/img/Traps/Fireball_right.png ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "946da67f09f017070631.png";

      /***/
    },

    /***/"./assets/img/Traps/Fireball_up.png":
    /*!******************************************!*\
      !*** ./assets/img/Traps/Fireball_up.png ***!
      \******************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "7532e8843b6f08c4c736.png";

      /***/
    },

    /***/"./assets/img/Traps/Flamethrower_down.png":
    /*!************************************************!*\
      !*** ./assets/img/Traps/Flamethrower_down.png ***!
      \************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "a81ec16a567429e11f71.png";

      /***/
    },

    /***/"./assets/img/Traps/Flamethrower_left.png":
    /*!************************************************!*\
      !*** ./assets/img/Traps/Flamethrower_left.png ***!
      \************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "1319f38494e5186d7f18.png";

      /***/
    },

    /***/"./assets/img/Traps/Flamethrower_right.png":
    /*!*************************************************!*\
      !*** ./assets/img/Traps/Flamethrower_right.png ***!
      \*************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "9bd291d54f54e255e917.png";

      /***/
    },

    /***/"./assets/img/Traps/Flamethrower_up.png":
    /*!**********************************************!*\
      !*** ./assets/img/Traps/Flamethrower_up.png ***!
      \**********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "4dafaeaded625dad6da0.png";

      /***/
    },

    /***/"./assets/img/Traps/Platform_spikes.png":
    /*!**********************************************!*\
      !*** ./assets/img/Traps/Platform_spikes.png ***!
      \**********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "2d04ce6e355f376a0e0e.png";

      /***/
    },

    /***/"./assets/img/Traps/Saw.png":
    /*!**********************************!*\
      !*** ./assets/img/Traps/Saw.png ***!
      \**********************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "d8d99ee1b1eb3891ba28.png";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/block_hit.mp3":
    /*!*************************************************!*\
      !*** ./assets/sounds/effects/mp3/block_hit.mp3 ***!
      \*************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "868328e1d62559dea3d3.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/bottom_hit.mp3":
    /*!**************************************************!*\
      !*** ./assets/sounds/effects/mp3/bottom_hit.mp3 ***!
      \**************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "315ce5bb8774f67f6a53.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/choose.mp3":
    /*!**********************************************!*\
      !*** ./assets/sounds/effects/mp3/choose.mp3 ***!
      \**********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "b070217cc3ec9826fd89.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/error.mp3":
    /*!*********************************************!*\
      !*** ./assets/sounds/effects/mp3/error.mp3 ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "07b873397bd181f0fe5b.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/explosion_block.mp3":
    /*!*******************************************************!*\
      !*** ./assets/sounds/effects/mp3/explosion_block.mp3 ***!
      \*******************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "173e28202170f19073b8.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/falling_in_depth.mp3":
    /*!********************************************************!*\
      !*** ./assets/sounds/effects/mp3/falling_in_depth.mp3 ***!
      \********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "1dec2f6bcf25b798920b.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/falling_in_depth_2.mp3":
    /*!**********************************************************!*\
      !*** ./assets/sounds/effects/mp3/falling_in_depth_2.mp3 ***!
      \**********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "5c0e7724e5723b97e9be.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/fire.mp3":
    /*!********************************************!*\
      !*** ./assets/sounds/effects/mp3/fire.mp3 ***!
      \********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "2517213c91f01c976f92.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/hero_death.mp3":
    /*!**************************************************!*\
      !*** ./assets/sounds/effects/mp3/hero_death.mp3 ***!
      \**************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "a2a93b9461f413734ad7.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/jump.mp3":
    /*!********************************************!*\
      !*** ./assets/sounds/effects/mp3/jump.mp3 ***!
      \********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "a2774fd0d75bdfeed2da.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/jump_on_space_toggled_platform.mp3":
    /*!**********************************************************************!*\
      !*** ./assets/sounds/effects/mp3/jump_on_space_toggled_platform.mp3 ***!
      \**********************************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "037494008090ce9e60f2.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/next_level.mp3":
    /*!**************************************************!*\
      !*** ./assets/sounds/effects/mp3/next_level.mp3 ***!
      \**************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "87197dcb8811e09b73e1.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/ok.mp3":
    /*!******************************************!*\
      !*** ./assets/sounds/effects/mp3/ok.mp3 ***!
      \******************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "75e0f3d8b173961534ec.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/select.mp3":
    /*!**********************************************!*\
      !*** ./assets/sounds/effects/mp3/select.mp3 ***!
      \**********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "b6ba29659cf55d571cc0.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/teleport.mp3":
    /*!************************************************!*\
      !*** ./assets/sounds/effects/mp3/teleport.mp3 ***!
      \************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "97462a60fa4b16083f2e.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/toggle.mp3":
    /*!**********************************************!*\
      !*** ./assets/sounds/effects/mp3/toggle.mp3 ***!
      \**********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "76d8a9edad64667bb800.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/mp3/toggle_disabled.mp3":
    /*!*******************************************************!*\
      !*** ./assets/sounds/effects/mp3/toggle_disabled.mp3 ***!
      \*******************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "a2a5e45d00f4a784b94b.mp3";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/block_hit.ogg":
    /*!*************************************************!*\
      !*** ./assets/sounds/effects/ogg/block_hit.ogg ***!
      \*************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "409a03408bb32d1202d2.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/bottom_hit.ogg":
    /*!**************************************************!*\
      !*** ./assets/sounds/effects/ogg/bottom_hit.ogg ***!
      \**************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "9771e96a1d6912ab23c6.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/choose.ogg":
    /*!**********************************************!*\
      !*** ./assets/sounds/effects/ogg/choose.ogg ***!
      \**********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "55972719deb5d18b267e.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/error.ogg":
    /*!*********************************************!*\
      !*** ./assets/sounds/effects/ogg/error.ogg ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "2dc046f6177bea7f2950.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/explosion_block.ogg":
    /*!*******************************************************!*\
      !*** ./assets/sounds/effects/ogg/explosion_block.ogg ***!
      \*******************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "9ea75121a93a42b1411e.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/falling_in_depth.ogg":
    /*!********************************************************!*\
      !*** ./assets/sounds/effects/ogg/falling_in_depth.ogg ***!
      \********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "b0867563ae4e9e18a2e8.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/falling_in_depth_2.ogg":
    /*!**********************************************************!*\
      !*** ./assets/sounds/effects/ogg/falling_in_depth_2.ogg ***!
      \**********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "e6ae7ad1b65788f9dae5.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/fire.ogg":
    /*!********************************************!*\
      !*** ./assets/sounds/effects/ogg/fire.ogg ***!
      \********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "957cddacb1deaac79e00.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/hero_death.ogg":
    /*!**************************************************!*\
      !*** ./assets/sounds/effects/ogg/hero_death.ogg ***!
      \**************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "70068ae31959fab95e81.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/jump.ogg":
    /*!********************************************!*\
      !*** ./assets/sounds/effects/ogg/jump.ogg ***!
      \********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "9efb836c3a9ba68ca120.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/jump_on_space_toggled_platform.ogg":
    /*!**********************************************************************!*\
      !*** ./assets/sounds/effects/ogg/jump_on_space_toggled_platform.ogg ***!
      \**********************************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "d1e681bf5a15caf9026f.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/next_level.ogg":
    /*!**************************************************!*\
      !*** ./assets/sounds/effects/ogg/next_level.ogg ***!
      \**************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "523646943918c59d2b3d.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/ok.ogg":
    /*!******************************************!*\
      !*** ./assets/sounds/effects/ogg/ok.ogg ***!
      \******************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "de74680fa0d4fb3d8e14.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/select.ogg":
    /*!**********************************************!*\
      !*** ./assets/sounds/effects/ogg/select.ogg ***!
      \**********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "c46e5b7d17520ff6935f.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/teleport.ogg":
    /*!************************************************!*\
      !*** ./assets/sounds/effects/ogg/teleport.ogg ***!
      \************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "4f6c0dc57802e6e026c6.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/toggle.ogg":
    /*!**********************************************!*\
      !*** ./assets/sounds/effects/ogg/toggle.ogg ***!
      \**********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "aaf531751543bc351744.ogg";

      /***/
    },

    /***/"./assets/sounds/effects/ogg/toggle_disabled.ogg":
    /*!*******************************************************!*\
      !*** ./assets/sounds/effects/ogg/toggle_disabled.ogg ***!
      \*******************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "8d6e93c66366655257dd.ogg";

      /***/
    },

    /***/"./assets/sounds/music/mp3/track_1.mp3":
    /*!*********************************************!*\
      !*** ./assets/sounds/music/mp3/track_1.mp3 ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "60db4a6c1bb2742d1f9c.mp3";

      /***/
    },

    /***/"./assets/sounds/music/mp3/track_2.mp3":
    /*!*********************************************!*\
      !*** ./assets/sounds/music/mp3/track_2.mp3 ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "4e1718e91aa4e1cca135.mp3";

      /***/
    },

    /***/"./assets/sounds/music/mp3/track_3.mp3":
    /*!*********************************************!*\
      !*** ./assets/sounds/music/mp3/track_3.mp3 ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "1afb1b0a35b44cdf1ff1.mp3";

      /***/
    },

    /***/"./assets/sounds/music/mp3/track_4.mp3":
    /*!*********************************************!*\
      !*** ./assets/sounds/music/mp3/track_4.mp3 ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "4dcabd1247bcf8d7ebcf.mp3";

      /***/
    },

    /***/"./assets/sounds/music/ogg/track_1.ogg":
    /*!*********************************************!*\
      !*** ./assets/sounds/music/ogg/track_1.ogg ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "2c26659bbe1eda6e9e5d.ogg";

      /***/
    },

    /***/"./assets/sounds/music/ogg/track_2.ogg":
    /*!*********************************************!*\
      !*** ./assets/sounds/music/ogg/track_2.ogg ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "d97f6fbd97ff9dc44f3f.ogg";

      /***/
    },

    /***/"./assets/sounds/music/ogg/track_3.ogg":
    /*!*********************************************!*\
      !*** ./assets/sounds/music/ogg/track_3.ogg ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "91a16270795862ed0a69.ogg";

      /***/
    },

    /***/"./assets/sounds/music/ogg/track_4.ogg":
    /*!*********************************************!*\
      !*** ./assets/sounds/music/ogg/track_4.ogg ***!
      \*********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "c516101ffeada79f1199.ogg";

      /***/
    },

    /***/"https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js": false,
    /***/"./node_modules/@firebase/analytics/dist/esm/index.esm2017.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@firebase/analytics/dist/esm/index.esm2017.js ***!
      \********************************************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"getAnalytics": () => /* binding */getAnalytics,
        /* harmony export */"getGoogleAnalyticsClientId": () => /* binding */getGoogleAnalyticsClientId,
        /* harmony export */"initializeAnalytics": () => /* binding */initializeAnalytics,
        /* harmony export */"isSupported": () => /* binding */isSupported,
        /* harmony export */"logEvent": () => /* binding */logEvent,
        /* harmony export */"setAnalyticsCollectionEnabled": () => /* binding */setAnalyticsCollectionEnabled,
        /* harmony export */"setConsent": () => /* binding */setConsent,
        /* harmony export */"setCurrentScreen": () => /* binding */setCurrentScreen,
        /* harmony export */"setDefaultEventParameters": () => /* binding */setDefaultEventParameters,
        /* harmony export */"setUserId": () => /* binding */setUserId,
        /* harmony export */"setUserProperties": () => /* binding */setUserProperties,
        /* harmony export */"settings": () => /* binding */settings
        /* harmony export */
      });
      /* harmony import */
      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @firebase/app */"./node_modules/@firebase/app/dist/esm/index.esm2017.js");
      /* harmony import */
      var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @firebase/logger */"./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
      /* harmony import */
      var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @firebase/util */"./node_modules/@firebase/util/dist/index.esm2017.js");
      /* harmony import */
      var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @firebase/component */"./node_modules/@firebase/component/dist/esm/index.esm2017.js");
      /* harmony import */
      var _firebase_installations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @firebase/installations */"./node_modules/@firebase/installations/dist/esm/index.esm2017.js");

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Type constant for Firebase Analytics.
       */
      const ANALYTICS_TYPE = 'analytics';
      // Key to attach FID to in gtag params.
      const GA_FID_KEY = 'firebase_id';
      const ORIGIN_KEY = 'origin';
      const FETCH_TIMEOUT_MILLIS = 60 * 1000;
      const DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
      const GTAG_URL = 'https://www.googletagmanager.com/gtag/js';

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/analytics');

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const ERRORS = {
        ["already-exists" /* AnalyticsError.ALREADY_EXISTS */]: 'A Firebase Analytics instance with the appId {$id} ' + ' already exists. ' + 'Only one Firebase Analytics instance can be created for each appId.',
        ["already-initialized" /* AnalyticsError.ALREADY_INITIALIZED */]: 'initializeAnalytics() cannot be called again with different options than those ' + 'it was initially called with. It can be called again with the same options to ' + 'return the existing instance, or getAnalytics() can be used ' + 'to get a reference to the already-intialized instance.',
        ["already-initialized-settings" /* AnalyticsError.ALREADY_INITIALIZED_SETTINGS */]: 'Firebase Analytics has already been initialized.' + 'settings() must be called before initializing any Analytics instance' + 'or it will have no effect.',
        ["interop-component-reg-failed" /* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */]: 'Firebase Analytics Interop Component failed to instantiate: {$reason}',
        ["invalid-analytics-context" /* AnalyticsError.INVALID_ANALYTICS_CONTEXT */]: 'Firebase Analytics is not supported in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}',
        ["indexeddb-unavailable" /* AnalyticsError.INDEXEDDB_UNAVAILABLE */]: 'IndexedDB unavailable or restricted in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}',
        ["fetch-throttle" /* AnalyticsError.FETCH_THROTTLE */]: 'The config fetch request timed out while in an exponential backoff state.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
        ["config-fetch-failed" /* AnalyticsError.CONFIG_FETCH_FAILED */]: 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}',
        ["no-api-key" /* AnalyticsError.NO_API_KEY */]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid API key.',
        ["no-app-id" /* AnalyticsError.NO_APP_ID */]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid app ID.',
        ["no-client-id" /* AnalyticsError.NO_CLIENT_ID */]: 'The "client_id" field is empty.',
        ["invalid-gtag-resource" /* AnalyticsError.INVALID_GTAG_RESOURCE */]: 'Trusted Types detected an invalid gtag resource: {$gtagURL}.'
      };
      const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('analytics', 'Analytics', ERRORS);

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Verifies and creates a TrustedScriptURL.
       */
      function createGtagTrustedTypesScriptURL(url) {
        if (!url.startsWith(GTAG_URL)) {
          const err = ERROR_FACTORY.create("invalid-gtag-resource" /* AnalyticsError.INVALID_GTAG_RESOURCE */, {
            gtagURL: url
          });
          logger.warn(err.message);
          return '';
        }
        return url;
      }
      /**
       * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
       * have either resolved or rejected.
       *
       * @param promises Array of promises to wait for.
       */
      function promiseAllSettled(promises) {
        return Promise.all(promises.map(promise => promise.catch(e => e)));
      }
      /**
       * Creates a TrustedTypePolicy object that implements the rules passed as policyOptions.
       *
       * @param policyName A string containing the name of the policy
       * @param policyOptions Object containing implementations of instance methods for TrustedTypesPolicy, see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy#instance_methods
       * | the TrustedTypePolicy reference documentation}.
       */
      function createTrustedTypesPolicy(policyName, policyOptions) {
        // Create a TrustedTypes policy that we can use for updating src
        // properties
        let trustedTypesPolicy;
        if (window.trustedTypes) {
          trustedTypesPolicy = window.trustedTypes.createPolicy(policyName, policyOptions);
        }
        return trustedTypesPolicy;
      }
      /**
       * Inserts gtag script tag into the page to asynchronously download gtag.
       * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
       */
      function insertScriptTag(dataLayerName, measurementId) {
        const trustedTypesPolicy = createTrustedTypesPolicy('firebase-js-sdk-policy', {
          createScriptURL: createGtagTrustedTypesScriptURL
        });
        const script = document.createElement('script');
        // We are not providing an analyticsId in the URL because it would trigger a `page_view`
        // without fid. We will initialize ga-id using gtag (config) command together with fid.
        const gtagScriptURL = `${GTAG_URL}?l=${dataLayerName}&id=${measurementId}`;
        script.src = trustedTypesPolicy ? trustedTypesPolicy === null || trustedTypesPolicy === void 0 ? void 0 : trustedTypesPolicy.createScriptURL(gtagScriptURL) : gtagScriptURL;
        script.async = true;
        document.head.appendChild(script);
      }
      /**
       * Get reference to, or create, global datalayer.
       * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
       */
      function getOrCreateDataLayer(dataLayerName) {
        // Check for existing dataLayer and create if needed.
        let dataLayer = [];
        if (Array.isArray(window[dataLayerName])) {
          dataLayer = window[dataLayerName];
        } else {
          window[dataLayerName] = dataLayer;
        }
        return dataLayer;
      }
      /**
       * Wrapped gtag logic when gtag is called with 'config' command.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       * @param measurementId GA Measurement ID to set config for.
       * @param gtagParams Gtag config params to set.
       */
      async function gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
        // If config is already fetched, we know the appId and can use it to look up what FID promise we
        /// are waiting for, and wait only on that one.
        const correspondingAppId = measurementIdToAppId[measurementId];
        try {
          if (correspondingAppId) {
            await initializationPromisesMap[correspondingAppId];
          } else {
            // If config is not fetched yet, wait for all configs (we don't know which one we need) and
            // find the appId (if any) corresponding to this measurementId. If there is one, wait on
            // that appId's initialization promise. If there is none, promise resolves and gtag
            // call goes through.
            const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList);
            const foundConfig = dynamicConfigResults.find(config => config.measurementId === measurementId);
            if (foundConfig) {
              await initializationPromisesMap[foundConfig.appId];
            }
          }
        } catch (e) {
          logger.error(e);
        }
        gtagCore("config" /* GtagCommand.CONFIG */, measurementId, gtagParams);
      }
      /**
       * Wrapped gtag logic when gtag is called with 'event' command.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementId GA Measurement ID to log event to.
       * @param gtagParams Params to log with this event.
       */
      async function gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
        try {
          let initializationPromisesToWaitFor = [];
          // If there's a 'send_to' param, check if any ID specified matches
          // an initializeIds() promise we are waiting for.
          if (gtagParams && gtagParams['send_to']) {
            let gaSendToList = gtagParams['send_to'];
            // Make it an array if is isn't, so it can be dealt with the same way.
            if (!Array.isArray(gaSendToList)) {
              gaSendToList = [gaSendToList];
            }
            // Checking 'send_to' fields requires having all measurement ID results back from
            // the dynamic config fetch.
            const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList);
            for (const sendToId of gaSendToList) {
              // Any fetched dynamic measurement ID that matches this 'send_to' ID
              const foundConfig = dynamicConfigResults.find(config => config.measurementId === sendToId);
              const initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];
              if (initializationPromise) {
                initializationPromisesToWaitFor.push(initializationPromise);
              } else {
                // Found an item in 'send_to' that is not associated
                // directly with an FID, possibly a group.  Empty this array,
                // exit the loop early, and let it get populated below.
                initializationPromisesToWaitFor = [];
                break;
              }
            }
          }
          // This will be unpopulated if there was no 'send_to' field , or
          // if not all entries in the 'send_to' field could be mapped to
          // a FID. In these cases, wait on all pending initialization promises.
          if (initializationPromisesToWaitFor.length === 0) {
            initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
          }
          // Run core gtag function with args after all relevant initialization
          // promises have been resolved.
          await Promise.all(initializationPromisesToWaitFor);
          // Workaround for http://b/141370449 - third argument cannot be undefined.
          gtagCore("event" /* GtagCommand.EVENT */, measurementId, gtagParams || {});
        } catch (e) {
          logger.error(e);
        }
      }
      /**
       * Wraps a standard gtag function with extra code to wait for completion of
       * relevant initialization promises before sending requests.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       */
      function wrapGtag(gtagCore,
      /**
       * Allows wrapped gtag calls to wait on whichever intialization promises are required,
       * depending on the contents of the gtag params' `send_to` field, if any.
       */
      initializationPromisesMap,
      /**
       * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
       * before determining what initialization promises (which include FIDs) to wait for.
       */
      dynamicConfigPromisesList,
      /**
       * Wrapped gtag config calls can narrow down which initialization promise (with FID)
       * to wait for if the measurementId is already fetched, by getting the corresponding appId,
       * which is the key for the initialization promises map.
       */
      measurementIdToAppId) {
        /**
         * Wrapper around gtag that ensures FID is sent with gtag calls.
         * @param command Gtag command type.
         * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
         * @param gtagParams Params if event is EVENT/CONFIG.
         */
        async function gtagWrapper(command) {
          try {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            // If event, check that relevant initialization promises have completed.
            if (command === "event" /* GtagCommand.EVENT */) {
              const [measurementId, gtagParams] = args;
              // If EVENT, second arg must be measurementId.
              await gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams);
            } else if (command === "config" /* GtagCommand.CONFIG */) {
              const [measurementId, gtagParams] = args;
              // If CONFIG, second arg must be measurementId.
              await gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams);
            } else if (command === "consent" /* GtagCommand.CONSENT */) {
              const [gtagParams] = args;
              gtagCore("consent" /* GtagCommand.CONSENT */, 'update', gtagParams);
            } else if (command === "get" /* GtagCommand.GET */) {
              const [measurementId, fieldName, callback] = args;
              gtagCore("get" /* GtagCommand.GET */, measurementId, fieldName, callback);
            } else if (command === "set" /* GtagCommand.SET */) {
              const [customParams] = args;
              // If SET, second arg must be params.
              gtagCore("set" /* GtagCommand.SET */, customParams);
            } else {
              gtagCore(command, ...args);
            }
          } catch (e) {
            logger.error(e);
          }
        }
        return gtagWrapper;
      }
      /**
       * Creates global gtag function or wraps existing one if found.
       * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
       * 'event' calls that belong to the GAID associated with this Firebase instance.
       *
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       * @param dataLayerName Name of global GA datalayer array.
       * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
       */
      function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
        // Create a basic core gtag function
        let gtagCore = function () {
          for (var _len3 = arguments.length, _args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            _args[_key3] = arguments[_key3];
          }
          // Must push IArguments object, not an array.
          window[dataLayerName].push(arguments);
        };
        // Replace it with existing one if found
        if (window[gtagFunctionName] && typeof window[gtagFunctionName] === 'function') {
          // @ts-ignore
          gtagCore = window[gtagFunctionName];
        }
        window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
        return {
          gtagCore,
          wrappedGtag: window[gtagFunctionName]
        };
      }
      /**
       * Returns the script tag in the DOM matching both the gtag url pattern
       * and the provided data layer name.
       */
      function findGtagScriptOnPage(dataLayerName) {
        const scriptTags = window.document.getElementsByTagName('script');
        for (const tag of Object.values(scriptTags)) {
          if (tag.src && tag.src.includes(GTAG_URL) && tag.src.includes(dataLayerName)) {
            return tag;
          }
        }
        return null;
      }

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Backoff factor for 503 errors, which we want to be conservative about
       * to avoid overloading servers. Each retry interval will be
       * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
       * will be ~30 seconds (with fuzzing).
       */
      const LONG_RETRY_FACTOR = 30;
      /**
       * Base wait interval to multiplied by backoffFactor^backoffCount.
       */
      const BASE_INTERVAL_MILLIS = 1000;
      /**
       * Stubbable retry data storage class.
       */
      class RetryData {
        constructor() {
          let throttleMetadata = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          let intervalMillis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BASE_INTERVAL_MILLIS;
          this.throttleMetadata = throttleMetadata;
          this.intervalMillis = intervalMillis;
        }
        getThrottleMetadata(appId) {
          return this.throttleMetadata[appId];
        }
        setThrottleMetadata(appId, metadata) {
          this.throttleMetadata[appId] = metadata;
        }
        deleteThrottleMetadata(appId) {
          delete this.throttleMetadata[appId];
        }
      }
      const defaultRetryData = new RetryData();
      /**
       * Set GET request headers.
       * @param apiKey App API key.
       */
      function getHeaders(apiKey) {
        return new Headers({
          Accept: 'application/json',
          'x-goog-api-key': apiKey
        });
      }
      /**
       * Fetches dynamic config from backend.
       * @param app Firebase app to fetch config for.
       */
      async function fetchDynamicConfig(appFields) {
        var _a;
        const {
          appId,
          apiKey
        } = appFields;
        const request = {
          method: 'GET',
          headers: getHeaders(apiKey)
        };
        const appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
        const response = await fetch(appUrl, request);
        if (response.status !== 200 && response.status !== 304) {
          let errorMessage = '';
          try {
            // Try to get any error message text from server response.
            const jsonResponse = await response.json();
            if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
              errorMessage = jsonResponse.error.message;
            }
          } catch (_ignored) {}
          throw ERROR_FACTORY.create("config-fetch-failed" /* AnalyticsError.CONFIG_FETCH_FAILED */, {
            httpStatus: response.status,
            responseMessage: errorMessage
          });
        }
        return response.json();
      }
      /**
       * Fetches dynamic config from backend, retrying if failed.
       * @param app Firebase app to fetch config for.
       */
      async function fetchDynamicConfigWithRetry(app) {
        let retryData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRetryData;
        let timeoutMillis = arguments.length > 2 ? arguments[2] : undefined;
        const {
          appId,
          apiKey,
          measurementId
        } = app.options;
        if (!appId) {
          throw ERROR_FACTORY.create("no-app-id" /* AnalyticsError.NO_APP_ID */);
        }

        if (!apiKey) {
          if (measurementId) {
            return {
              measurementId,
              appId
            };
          }
          throw ERROR_FACTORY.create("no-api-key" /* AnalyticsError.NO_API_KEY */);
        }

        const throttleMetadata = retryData.getThrottleMetadata(appId) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        };
        const signal = new AnalyticsAbortSignal();
        setTimeout(async () => {
          // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
          signal.abort();
        }, timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
        return attemptFetchDynamicConfigWithRetry({
          appId,
          apiKey,
          measurementId
        }, throttleMetadata, signal, retryData);
      }
      /**
       * Runs one retry attempt.
       * @param appFields Necessary app config fields.
       * @param throttleMetadata Ongoing metadata to determine throttling times.
       * @param signal Abort signal.
       */
      async function attemptFetchDynamicConfigWithRetry(appFields, _ref2, signal) {
        let {
          throttleEndTimeMillis,
          backoffCount
        } = _ref2;
        let retryData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultRetryData;
        var _a;
        const {
          appId,
          measurementId
        } = appFields;
        // Starts with a (potentially zero) timeout to support resumption from stored state.
        // Ensures the throttle end time is honored if the last attempt timed out.
        // Note the SDK will never make a request if the fetch timeout expires at this point.
        try {
          await setAbortableTimeout(signal, throttleEndTimeMillis);
        } catch (e) {
          if (measurementId) {
            logger.warn(`Timed out fetching this Firebase app's measurement ID from the server.` + ` Falling back to the measurement ID ${measurementId}` + ` provided in the "measurementId" field in the local Firebase config. [${e === null || e === void 0 ? void 0 : e.message}]`);
            return {
              appId,
              measurementId
            };
          }
          throw e;
        }
        try {
          const response = await fetchDynamicConfig(appFields);
          // Note the SDK only clears throttle state if response is success or non-retriable.
          retryData.deleteThrottleMetadata(appId);
          return response;
        } catch (e) {
          const error = e;
          if (!isRetriableError(error)) {
            retryData.deleteThrottleMetadata(appId);
            if (measurementId) {
              logger.warn(`Failed to fetch this Firebase app's measurement ID from the server.` + ` Falling back to the measurement ID ${measurementId}` + ` provided in the "measurementId" field in the local Firebase config. [${error === null || error === void 0 ? void 0 : error.message}]`);
              return {
                appId,
                measurementId
              };
            } else {
              throw e;
            }
          }
          const backoffMillis = Number((_a = error === null || error === void 0 ? void 0 : error.customData) === null || _a === void 0 ? void 0 : _a.httpStatus) === 503 ? (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.calculateBackoffMillis)(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.calculateBackoffMillis)(backoffCount, retryData.intervalMillis);
          // Increments backoff state.
          const throttleMetadata = {
            throttleEndTimeMillis: Date.now() + backoffMillis,
            backoffCount: backoffCount + 1
          };
          // Persists state.
          retryData.setThrottleMetadata(appId, throttleMetadata);
          logger.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
          return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
        }
      }
      /**
       * Supports waiting on a backoff by:
       *
       * <ul>
       *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
       *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
       *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
       *       request appear the same.</li>
       * </ul>
       *
       * <p>Visible for testing.
       */
      function setAbortableTimeout(signal, throttleEndTimeMillis) {
        return new Promise((resolve, reject) => {
          // Derives backoff from given end time, normalizing negative numbers to zero.
          const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
          const timeout = setTimeout(resolve, backoffMillis);
          // Adds listener, rather than sets onabort, because signal is a shared object.
          signal.addEventListener(() => {
            clearTimeout(timeout);
            // If the request completes before this timeout, the rejection has no effect.
            reject(ERROR_FACTORY.create("fetch-throttle" /* AnalyticsError.FETCH_THROTTLE */, {
              throttleEndTimeMillis
            }));
          });
        });
      }
      /**
       * Returns true if the {@link Error} indicates a fetch request may succeed later.
       */
      function isRetriableError(e) {
        if (!(e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) || !e.customData) {
          return false;
        }
        // Uses string index defined by ErrorData, which FirebaseError implements.
        const httpStatus = Number(e.customData['httpStatus']);
        return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
      }
      /**
       * Shims a minimal AbortSignal (copied from Remote Config).
       *
       * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
       * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
       * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
       * swapped out if/when we do.
       */
      class AnalyticsAbortSignal {
        constructor() {
          this.listeners = [];
        }
        addEventListener(listener) {
          this.listeners.push(listener);
        }
        abort() {
          this.listeners.forEach(listener => listener());
        }
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Event parameters to set on 'gtag' during initialization.
       */
      let defaultEventParametersForInit;
      /**
       * Logs an analytics event through the Firebase SDK.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param eventName Google Analytics event name, choose from standard list or use a custom string.
       * @param eventParams Analytics event parameters.
       */
      async function logEvent$1(gtagFunction, initializationPromise, eventName, eventParams, options) {
        if (options && options.global) {
          gtagFunction("event" /* GtagCommand.EVENT */, eventName, eventParams);
          return;
        } else {
          const measurementId = await initializationPromise;
          const params = Object.assign(Object.assign({}, eventParams), {
            'send_to': measurementId
          });
          gtagFunction("event" /* GtagCommand.EVENT */, eventName, params);
        }
      }
      /**
       * Set screen_name parameter for this Google Analytics ID.
       *
       * @deprecated Use {@link logEvent} with `eventName` as 'screen_view' and add relevant `eventParams`.
       * See {@link https://firebase.google.com/docs/analytics/screenviews | Track Screenviews}.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param screenName Screen name string to set.
       */
      async function setCurrentScreen$1(gtagFunction, initializationPromise, screenName, options) {
        if (options && options.global) {
          gtagFunction("set" /* GtagCommand.SET */, {
            'screen_name': screenName
          });
          return Promise.resolve();
        } else {
          const measurementId = await initializationPromise;
          gtagFunction("config" /* GtagCommand.CONFIG */, measurementId, {
            update: true,
            'screen_name': screenName
          });
        }
      }
      /**
       * Set user_id parameter for this Google Analytics ID.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param id User ID string to set
       */
      async function setUserId$1(gtagFunction, initializationPromise, id, options) {
        if (options && options.global) {
          gtagFunction("set" /* GtagCommand.SET */, {
            'user_id': id
          });
          return Promise.resolve();
        } else {
          const measurementId = await initializationPromise;
          gtagFunction("config" /* GtagCommand.CONFIG */, measurementId, {
            update: true,
            'user_id': id
          });
        }
      }
      /**
       * Set all other user properties other than user_id and screen_name.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param properties Map of user properties to set
       */
      async function setUserProperties$1(gtagFunction, initializationPromise, properties, options) {
        if (options && options.global) {
          const flatProperties = {};
          for (const key of Object.keys(properties)) {
            // use dot notation for merge behavior in gtag.js
            flatProperties[`user_properties.${key}`] = properties[key];
          }
          gtagFunction("set" /* GtagCommand.SET */, flatProperties);
          return Promise.resolve();
        } else {
          const measurementId = await initializationPromise;
          gtagFunction("config" /* GtagCommand.CONFIG */, measurementId, {
            update: true,
            'user_properties': properties
          });
        }
      }
      /**
       * Retrieves a unique Google Analytics identifier for the web client.
       * See {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#client_id | client_id}.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       */
      async function internalGetGoogleAnalyticsClientId(gtagFunction, initializationPromise) {
        const measurementId = await initializationPromise;
        return new Promise((resolve, reject) => {
          gtagFunction("get" /* GtagCommand.GET */, measurementId, 'client_id', clientId => {
            if (!clientId) {
              reject(ERROR_FACTORY.create("no-client-id" /* AnalyticsError.NO_CLIENT_ID */));
            }

            resolve(clientId);
          });
        });
      }
      /**
       * Set whether collection is enabled for this ID.
       *
       * @param enabled If true, collection is enabled for this ID.
       */
      async function setAnalyticsCollectionEnabled$1(initializationPromise, enabled) {
        const measurementId = await initializationPromise;
        window[`ga-disable-${measurementId}`] = !enabled;
      }
      /**
       * Consent parameters to default to during 'gtag' initialization.
       */
      let defaultConsentSettingsForInit;
      /**
       * Sets the variable {@link defaultConsentSettingsForInit} for use in the initialization of
       * analytics.
       *
       * @param consentSettings Maps the applicable end user consent state for gtag.js.
       */
      function _setConsentDefaultForInit(consentSettings) {
        defaultConsentSettingsForInit = consentSettings;
      }
      /**
       * Sets the variable `defaultEventParametersForInit` for use in the initialization of
       * analytics.
       *
       * @param customParams Any custom params the user may pass to gtag.js.
       */
      function _setDefaultEventParametersForInit(customParams) {
        defaultEventParametersForInit = customParams;
      }

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      async function validateIndexedDB() {
        if (!(0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
          logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* AnalyticsError.INDEXEDDB_UNAVAILABLE */, {
            errorInfo: 'IndexedDB is not available in this environment.'
          }).message);
          return false;
        } else {
          try {
            await (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)();
          } catch (e) {
            logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* AnalyticsError.INDEXEDDB_UNAVAILABLE */, {
              errorInfo: e === null || e === void 0 ? void 0 : e.toString()
            }).message);
            return false;
          }
        }
        return true;
      }
      /**
       * Initialize the analytics instance in gtag.js by calling config command with fid.
       *
       * NOTE: We combine analytics initialization and setting fid together because we want fid to be
       * part of the `page_view` event that's sent during the initialization
       * @param app Firebase app
       * @param gtagCore The gtag function that's not wrapped.
       * @param dynamicConfigPromisesList Array of all dynamic config promises.
       * @param measurementIdToAppId Maps measurementID to appID.
       * @param installations _FirebaseInstallationsInternal instance.
       *
       * @returns Measurement ID.
       */
      async function _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore, dataLayerName, options) {
        var _a;
        const dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
        // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
        dynamicConfigPromise.then(config => {
          measurementIdToAppId[config.measurementId] = config.appId;
          if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
            logger.warn(`The measurement ID in the local Firebase config (${app.options.measurementId})` + ` does not match the measurement ID fetched from the server (${config.measurementId}).` + ` To ensure analytics events are always sent to the correct Analytics property,` + ` update the` + ` measurement ID field in the local config or remove it from the local config.`);
          }
        }).catch(e => logger.error(e));
        // Add to list to track state of all dynamic config promises.
        dynamicConfigPromisesList.push(dynamicConfigPromise);
        const fidPromise = validateIndexedDB().then(envIsValid => {
          if (envIsValid) {
            return installations.getId();
          } else {
            return undefined;
          }
        });
        const [dynamicConfig, fid] = await Promise.all([dynamicConfigPromise, fidPromise]);
        // Detect if user has already put the gtag <script> tag on this page with the passed in
        // data layer name.
        if (!findGtagScriptOnPage(dataLayerName)) {
          insertScriptTag(dataLayerName, dynamicConfig.measurementId);
        }
        // Detects if there are consent settings that need to be configured.
        if (defaultConsentSettingsForInit) {
          gtagCore("consent" /* GtagCommand.CONSENT */, 'default', defaultConsentSettingsForInit);
          _setConsentDefaultForInit(undefined);
        }
        // This command initializes gtag.js and only needs to be called once for the entire web app,
        // but since it is idempotent, we can call it multiple times.
        // We keep it together with other initialization logic for better code structure.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gtagCore('js', new Date());
        // User config added first. We don't want users to accidentally overwrite
        // base Firebase config properties.
        const configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {};
        // guard against developers accidentally setting properties with prefix `firebase_`
        configProperties[ORIGIN_KEY] = 'firebase';
        configProperties.update = true;
        if (fid != null) {
          configProperties[GA_FID_KEY] = fid;
        }
        // It should be the first config command called on this GA-ID
        // Initialize this GA-ID and set FID on it using the gtag config API.
        // Note: This will trigger a page_view event unless 'send_page_view' is set to false in
        // `configProperties`.
        gtagCore("config" /* GtagCommand.CONFIG */, dynamicConfig.measurementId, configProperties);
        // Detects if there is data that will be set on every event logged from the SDK.
        if (defaultEventParametersForInit) {
          gtagCore("set" /* GtagCommand.SET */, defaultEventParametersForInit);
          _setDefaultEventParametersForInit(undefined);
        }
        return dynamicConfig.measurementId;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Analytics Service class.
       */
      class AnalyticsService {
        constructor(app) {
          this.app = app;
        }
        _delete() {
          delete initializationPromisesMap[this.app.options.appId];
          return Promise.resolve();
        }
      }
      /**
       * Maps appId to full initialization promise. Wrapped gtag calls must wait on
       * all or some of these, depending on the call's `send_to` param and the status
       * of the dynamic config fetches (see below).
       */
      let initializationPromisesMap = {};
      /**
       * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
       * wait on all these to be complete in order to determine if it can selectively
       * wait for only certain initialization (FID) promises or if it must wait for all.
       */
      let dynamicConfigPromisesList = [];
      /**
       * Maps fetched measurementIds to appId. Populated when the app's dynamic config
       * fetch completes. If already populated, gtag config calls can use this to
       * selectively wait for only this app's initialization promise (FID) instead of all
       * initialization promises.
       */
      const measurementIdToAppId = {};
      /**
       * Name for window global data layer array used by GA: defaults to 'dataLayer'.
       */
      let dataLayerName = 'dataLayer';
      /**
       * Name for window global gtag function used by GA: defaults to 'gtag'.
       */
      let gtagName = 'gtag';
      /**
       * Reproduction of standard gtag function or reference to existing
       * gtag function on window object.
       */
      let gtagCoreFunction;
      /**
       * Wrapper around gtag function that ensures FID is sent with all
       * relevant event and config calls.
       */
      let wrappedGtagFunction;
      /**
       * Flag to ensure page initialization steps (creation or wrapping of
       * dataLayer and gtag script) are only run once per page load.
       */
      let globalInitDone = false;
      /**
       * Configures Firebase Analytics to use custom `gtag` or `dataLayer` names.
       * Intended to be used if `gtag.js` script has been installed on
       * this page independently of Firebase Analytics, and is using non-default
       * names for either the `gtag` function or for `dataLayer`.
       * Must be called before calling `getAnalytics()` or it won't
       * have any effect.
       *
       * @public
       *
       * @param options - Custom gtag and dataLayer names.
       */
      function settings(options) {
        if (globalInitDone) {
          throw ERROR_FACTORY.create("already-initialized" /* AnalyticsError.ALREADY_INITIALIZED */);
        }

        if (options.dataLayerName) {
          dataLayerName = options.dataLayerName;
        }
        if (options.gtagName) {
          gtagName = options.gtagName;
        }
      }
      /**
       * Returns true if no environment mismatch is found.
       * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
       * error that also lists details for each mismatch found.
       */
      function warnOnBrowserContextMismatch() {
        const mismatchedEnvMessages = [];
        if ((0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.isBrowserExtension)()) {
          mismatchedEnvMessages.push('This is a browser extension environment.');
        }
        if (!(0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.areCookiesEnabled)()) {
          mismatchedEnvMessages.push('Cookies are not available.');
        }
        if (mismatchedEnvMessages.length > 0) {
          const details = mismatchedEnvMessages.map((message, index) => `(${index + 1}) ${message}`).join(' ');
          const err = ERROR_FACTORY.create("invalid-analytics-context" /* AnalyticsError.INVALID_ANALYTICS_CONTEXT */, {
            errorInfo: details
          });
          logger.warn(err.message);
        }
      }
      /**
       * Analytics instance factory.
       * @internal
       */
      function factory(app, installations, options) {
        warnOnBrowserContextMismatch();
        const appId = app.options.appId;
        if (!appId) {
          throw ERROR_FACTORY.create("no-app-id" /* AnalyticsError.NO_APP_ID */);
        }

        if (!app.options.apiKey) {
          if (app.options.measurementId) {
            logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest` + ` measurement ID for this Firebase app. Falling back to the measurement ID ${app.options.measurementId}` + ` provided in the "measurementId" field in the local Firebase config.`);
          } else {
            throw ERROR_FACTORY.create("no-api-key" /* AnalyticsError.NO_API_KEY */);
          }
        }

        if (initializationPromisesMap[appId] != null) {
          throw ERROR_FACTORY.create("already-exists" /* AnalyticsError.ALREADY_EXISTS */, {
            id: appId
          });
        }
        if (!globalInitDone) {
          // Steps here should only be done once per page: creation or wrapping
          // of dataLayer and global gtag function.
          getOrCreateDataLayer(dataLayerName);
          const {
            wrappedGtag,
            gtagCore
          } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
          wrappedGtagFunction = wrappedGtag;
          gtagCoreFunction = gtagCore;
          globalInitDone = true;
        }
        // Async but non-blocking.
        // This map reflects the completion state of all promises for each appId.
        initializationPromisesMap[appId] = _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
        const analyticsInstance = new AnalyticsService(app);
        return analyticsInstance;
      }

      /* eslint-disable @typescript-eslint/no-explicit-any */
      /**
       * Returns an {@link Analytics} instance for the given app.
       *
       * @public
       *
       * @param app - The {@link @firebase/app#FirebaseApp} to use.
       */
      function getAnalytics() {
        let app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
        app = (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(app);
        // Dependencies
        const analyticsProvider = (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, ANALYTICS_TYPE);
        if (analyticsProvider.isInitialized()) {
          return analyticsProvider.getImmediate();
        }
        return initializeAnalytics(app);
      }
      /**
       * Returns an {@link Analytics} instance for the given app.
       *
       * @public
       *
       * @param app - The {@link @firebase/app#FirebaseApp} to use.
       */
      function initializeAnalytics(app) {
        let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // Dependencies
        const analyticsProvider = (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, ANALYTICS_TYPE);
        if (analyticsProvider.isInitialized()) {
          const existingInstance = analyticsProvider.getImmediate();
          if ((0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, analyticsProvider.getOptions())) {
            return existingInstance;
          } else {
            throw ERROR_FACTORY.create("already-initialized" /* AnalyticsError.ALREADY_INITIALIZED */);
          }
        }

        const analyticsInstance = analyticsProvider.initialize({
          options
        });
        return analyticsInstance;
      }
      /**
       * This is a public static method provided to users that wraps four different checks:
       *
       * 1. Check if it's not a browser extension environment.
       * 2. Check if cookies are enabled in current browser.
       * 3. Check if IndexedDB is supported by the browser environment.
       * 4. Check if the current browser context is valid for using `IndexedDB.open()`.
       *
       * @public
       *
       */
      async function isSupported() {
        if ((0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.isBrowserExtension)()) {
          return false;
        }
        if (!(0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.areCookiesEnabled)()) {
          return false;
        }
        if (!(0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
          return false;
        }
        try {
          const isDBOpenable = await (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)();
          return isDBOpenable;
        } catch (error) {
          return false;
        }
      }
      /**
       * Use gtag `config` command to set `screen_name`.
       *
       * @public
       *
       * @deprecated Use {@link logEvent} with `eventName` as 'screen_view' and add relevant `eventParams`.
       * See {@link https://firebase.google.com/docs/analytics/screenviews | Track Screenviews}.
       *
       * @param analyticsInstance - The {@link Analytics} instance.
       * @param screenName - Screen name to set.
       */
      function setCurrentScreen(analyticsInstance, screenName, options) {
        analyticsInstance = (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
        setCurrentScreen$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], screenName, options).catch(e => logger.error(e));
      }
      /**
       * Retrieves a unique Google Analytics identifier for the web client.
       * See {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#client_id | client_id}.
       *
       * @public
       *
       * @param app - The {@link @firebase/app#FirebaseApp} to use.
       */
      async function getGoogleAnalyticsClientId(analyticsInstance) {
        analyticsInstance = (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
        return internalGetGoogleAnalyticsClientId(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId]);
      }
      /**
       * Use gtag `config` command to set `user_id`.
       *
       * @public
       *
       * @param analyticsInstance - The {@link Analytics} instance.
       * @param id - User ID to set.
       */
      function setUserId(analyticsInstance, id, options) {
        analyticsInstance = (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
        setUserId$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], id, options).catch(e => logger.error(e));
      }
      /**
       * Use gtag `config` command to set all params specified.
       *
       * @public
       */
      function setUserProperties(analyticsInstance, properties, options) {
        analyticsInstance = (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
        setUserProperties$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], properties, options).catch(e => logger.error(e));
      }
      /**
       * Sets whether Google Analytics collection is enabled for this app on this device.
       * Sets global `window['ga-disable-analyticsId'] = true;`
       *
       * @public
       *
       * @param analyticsInstance - The {@link Analytics} instance.
       * @param enabled - If true, enables collection, if false, disables it.
       */
      function setAnalyticsCollectionEnabled(analyticsInstance, enabled) {
        analyticsInstance = (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
        setAnalyticsCollectionEnabled$1(initializationPromisesMap[analyticsInstance.app.options.appId], enabled).catch(e => logger.error(e));
      }
      /**
       * Adds data that will be set on every event logged from the SDK, including automatic ones.
       * With gtag's "set" command, the values passed persist on the current page and are passed with
       * all subsequent events.
       * @public
       * @param customParams - Any custom params the user may pass to gtag.js.
       */
      function setDefaultEventParameters(customParams) {
        // Check if reference to existing gtag function on window object exists
        if (wrappedGtagFunction) {
          wrappedGtagFunction("set" /* GtagCommand.SET */, customParams);
        } else {
          _setDefaultEventParametersForInit(customParams);
        }
      }
      /**
       * Sends a Google Analytics event with given `eventParams`. This method
       * automatically associates this logged event with this Firebase web
       * app instance on this device.
       * List of official event parameters can be found in the gtag.js
       * reference documentation:
       * {@link https://developers.google.com/gtagjs/reference/ga4-events
       * | the GA4 reference documentation}.
       *
       * @public
       */
      function logEvent(analyticsInstance, eventName, eventParams, options) {
        analyticsInstance = (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
        logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options).catch(e => logger.error(e));
      }
      /**
       * Sets the applicable end user consent state for this web app across all gtag references once
       * Firebase Analytics is initialized.
       *
       * Use the {@link ConsentSettings} to specify individual consent type values. By default consent
       * types are set to "granted".
       * @public
       * @param consentSettings - Maps the applicable end user consent state for gtag.js.
       */
      function setConsent(consentSettings) {
        // Check if reference to existing gtag function on window object exists
        if (wrappedGtagFunction) {
          wrappedGtagFunction("consent" /* GtagCommand.CONSENT */, 'update', consentSettings);
        } else {
          _setConsentDefaultForInit(consentSettings);
        }
      }
      const name = "@firebase/analytics";
      const version = "0.10.0";

      /**
       * Firebase Analytics
       *
       * @packageDocumentation
       */
      function registerAnalytics() {
        (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.Component(ANALYTICS_TYPE, (container, _ref3) => {
          let {
            options: analyticsOptions
          } = _ref3;
          // getImmediate for FirebaseApp will always succeed
          const app = container.getProvider('app').getImmediate();
          const installations = container.getProvider('installations-internal').getImmediate();
          return factory(app, installations, analyticsOptions);
        }, "PUBLIC" /* ComponentType.PUBLIC */));
        (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.Component('analytics-internal', internalFactory, "PRIVATE" /* ComponentType.PRIVATE */));
        (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version);
        // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
        (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'esm2017');
        function internalFactory(container) {
          try {
            const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
            return {
              logEvent: (eventName, eventParams, options) => logEvent(analytics, eventName, eventParams, options)
            };
          } catch (e) {
            throw ERROR_FACTORY.create("interop-component-reg-failed" /* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */, {
              reason: e
            });
          }
        }
      }
      registerAnalytics();

      /***/
    },

    /***/"./node_modules/@firebase/app/dist/esm/index.esm2017.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@firebase/app/dist/esm/index.esm2017.js ***!
      \**************************************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"FirebaseError": () => /* reexport safe */_firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError,
        /* harmony export */"SDK_VERSION": () => /* binding */SDK_VERSION,
        /* harmony export */"_DEFAULT_ENTRY_NAME": () => /* binding */DEFAULT_ENTRY_NAME,
        /* harmony export */"_addComponent": () => /* binding */_addComponent,
        /* harmony export */"_addOrOverwriteComponent": () => /* binding */_addOrOverwriteComponent,
        /* harmony export */"_apps": () => /* binding */_apps,
        /* harmony export */"_clearComponents": () => /* binding */_clearComponents,
        /* harmony export */"_components": () => /* binding */_components,
        /* harmony export */"_getProvider": () => /* binding */_getProvider,
        /* harmony export */"_registerComponent": () => /* binding */_registerComponent,
        /* harmony export */"_removeServiceInstance": () => /* binding */_removeServiceInstance,
        /* harmony export */"deleteApp": () => /* binding */deleteApp,
        /* harmony export */"getApp": () => /* binding */getApp,
        /* harmony export */"getApps": () => /* binding */getApps,
        /* harmony export */"initializeApp": () => /* binding */initializeApp,
        /* harmony export */"onLog": () => /* binding */onLog,
        /* harmony export */"registerVersion": () => /* binding */registerVersion,
        /* harmony export */"setLogLevel": () => /* binding */setLogLevel
        /* harmony export */
      });
      /* harmony import */
      var _firebase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @firebase/component */"./node_modules/@firebase/component/dist/esm/index.esm2017.js");
      /* harmony import */
      var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @firebase/logger */"./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
      /* harmony import */
      var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @firebase/util */"./node_modules/@firebase/util/dist/index.esm2017.js");
      /* harmony import */
      var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! idb */"./node_modules/idb/build/index.js");

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      class PlatformLoggerServiceImpl {
        constructor(container) {
          this.container = container;
        }
        // In initial implementation, this will be called by installations on
        // auth token refresh, and installations will send this string.
        getPlatformInfoString() {
          const providers = this.container.getProviders();
          // Loop through providers and get library/version pairs from any that are
          // version components.
          return providers.map(provider => {
            if (isVersionServiceProvider(provider)) {
              const service = provider.getImmediate();
              return `${service.library}/${service.version}`;
            } else {
              return null;
            }
          }).filter(logString => logString).join(' ');
        }
      }
      /**
       *
       * @param provider check if this provider provides a VersionService
       *
       * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
       * provides VersionService. The provider is not necessarily a 'app-version'
       * provider.
       */
      function isVersionServiceProvider(provider) {
        const component = provider.getComponent();
        return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */;
      }

      const name$o = "@firebase/app";
      const version$1 = "0.9.11";

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/app');
      const name$n = "@firebase/app-compat";
      const name$m = "@firebase/analytics-compat";
      const name$l = "@firebase/analytics";
      const name$k = "@firebase/app-check-compat";
      const name$j = "@firebase/app-check";
      const name$i = "@firebase/auth";
      const name$h = "@firebase/auth-compat";
      const name$g = "@firebase/database";
      const name$f = "@firebase/database-compat";
      const name$e = "@firebase/functions";
      const name$d = "@firebase/functions-compat";
      const name$c = "@firebase/installations";
      const name$b = "@firebase/installations-compat";
      const name$a = "@firebase/messaging";
      const name$9 = "@firebase/messaging-compat";
      const name$8 = "@firebase/performance";
      const name$7 = "@firebase/performance-compat";
      const name$6 = "@firebase/remote-config";
      const name$5 = "@firebase/remote-config-compat";
      const name$4 = "@firebase/storage";
      const name$3 = "@firebase/storage-compat";
      const name$2 = "@firebase/firestore";
      const name$1 = "@firebase/firestore-compat";
      const name = "firebase";
      const version = "9.22.1";

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * The default app name
       *
       * @internal
       */
      const DEFAULT_ENTRY_NAME = '[DEFAULT]';
      const PLATFORM_LOG_STRING = {
        [name$o]: 'fire-core',
        [name$n]: 'fire-core-compat',
        [name$l]: 'fire-analytics',
        [name$m]: 'fire-analytics-compat',
        [name$j]: 'fire-app-check',
        [name$k]: 'fire-app-check-compat',
        [name$i]: 'fire-auth',
        [name$h]: 'fire-auth-compat',
        [name$g]: 'fire-rtdb',
        [name$f]: 'fire-rtdb-compat',
        [name$e]: 'fire-fn',
        [name$d]: 'fire-fn-compat',
        [name$c]: 'fire-iid',
        [name$b]: 'fire-iid-compat',
        [name$a]: 'fire-fcm',
        [name$9]: 'fire-fcm-compat',
        [name$8]: 'fire-perf',
        [name$7]: 'fire-perf-compat',
        [name$6]: 'fire-rc',
        [name$5]: 'fire-rc-compat',
        [name$4]: 'fire-gcs',
        [name$3]: 'fire-gcs-compat',
        [name$2]: 'fire-fst',
        [name$1]: 'fire-fst-compat',
        'fire-js': 'fire-js',
        [name]: 'fire-js-all'
      };

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @internal
       */
      const _apps = new Map();
      /**
       * Registered components.
       *
       * @internal
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const _components = new Map();
      /**
       * @param component - the component being added to this app's container
       *
       * @internal
       */
      function _addComponent(app, component) {
        try {
          app.container.addComponent(component);
        } catch (e) {
          logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
        }
      }
      /**
       *
       * @internal
       */
      function _addOrOverwriteComponent(app, component) {
        app.container.addOrOverwriteComponent(component);
      }
      /**
       *
       * @param component - the component to register
       * @returns whether or not the component is registered successfully
       *
       * @internal
       */
      function _registerComponent(component) {
        const componentName = component.name;
        if (_components.has(componentName)) {
          logger.debug(`There were multiple attempts to register component ${componentName}.`);
          return false;
        }
        _components.set(componentName, component);
        // add the component to existing app instances
        for (const app of _apps.values()) {
          _addComponent(app, component);
        }
        return true;
      }
      /**
       *
       * @param app - FirebaseApp instance
       * @param name - service name
       *
       * @returns the provider for the service with the matching name
       *
       * @internal
       */
      function _getProvider(app, name) {
        const heartbeatController = app.container.getProvider('heartbeat').getImmediate({
          optional: true
        });
        if (heartbeatController) {
          void heartbeatController.triggerHeartbeat();
        }
        return app.container.getProvider(name);
      }
      /**
       *
       * @param app - FirebaseApp instance
       * @param name - service name
       * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
       *
       * @internal
       */
      function _removeServiceInstance(app, name) {
        let instanceIdentifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_ENTRY_NAME;
        _getProvider(app, name).clearInstance(instanceIdentifier);
      }
      /**
       * Test only
       *
       * @internal
       */
      function _clearComponents() {
        _components.clear();
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const ERRORS = {
        ["no-app" /* AppError.NO_APP */]: "No Firebase App '{$appName}' has been created - " + 'call initializeApp() first',
        ["bad-app-name" /* AppError.BAD_APP_NAME */]: "Illegal App name: '{$appName}",
        ["duplicate-app" /* AppError.DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
        ["app-deleted" /* AppError.APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
        ["no-options" /* AppError.NO_OPTIONS */]: 'Need to provide options, when not being deployed to hosting via source.',
        ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.',
        ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.',
        ["idb-open" /* AppError.IDB_OPEN */]: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
        ["idb-get" /* AppError.IDB_GET */]: 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
        ["idb-set" /* AppError.IDB_WRITE */]: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
        ["idb-delete" /* AppError.IDB_DELETE */]: 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.'
      };
      const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('app', 'Firebase', ERRORS);

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      class FirebaseAppImpl {
        constructor(options, config, container) {
          this._isDeleted = false;
          this._options = Object.assign({}, options);
          this._config = Object.assign({}, config);
          this._name = config.name;
          this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
          this._container = container;
          this.container.addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('app', () => this, "PUBLIC" /* ComponentType.PUBLIC */));
        }

        get automaticDataCollectionEnabled() {
          this.checkDestroyed();
          return this._automaticDataCollectionEnabled;
        }
        set automaticDataCollectionEnabled(val) {
          this.checkDestroyed();
          this._automaticDataCollectionEnabled = val;
        }
        get name() {
          this.checkDestroyed();
          return this._name;
        }
        get options() {
          this.checkDestroyed();
          return this._options;
        }
        get config() {
          this.checkDestroyed();
          return this._config;
        }
        get container() {
          return this._container;
        }
        get isDeleted() {
          return this._isDeleted;
        }
        set isDeleted(val) {
          this._isDeleted = val;
        }
        /**
         * This function will throw an Error if the App has already been deleted -
         * use before performing API actions on the App.
         */
        checkDestroyed() {
          if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */, {
              appName: this._name
            });
          }
        }
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * The current SDK version.
       *
       * @public
       */
      const SDK_VERSION = version;
      function initializeApp(_options) {
        let rawConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let options = _options;
        if (typeof rawConfig !== 'object') {
          const name = rawConfig;
          rawConfig = {
            name
          };
        }
        const config = Object.assign({
          name: DEFAULT_ENTRY_NAME,
          automaticDataCollectionEnabled: false
        }, rawConfig);
        const name = config.name;
        if (typeof name !== 'string' || !name) {
          throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
            appName: String(name)
          });
        }
        options || (options = (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultAppConfig)());
        if (!options) {
          throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
        }

        const existingApp = _apps.get(name);
        if (existingApp) {
          // return the existing app if options and config deep equal the ones in the existing app.
          if ((0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, existingApp.options) && (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(config, existingApp.config)) {
            return existingApp;
          } else {
            throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */, {
              appName: name
            });
          }
        }
        const container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(name);
        for (const component of _components.values()) {
          container.addComponent(component);
        }
        const newApp = new FirebaseAppImpl(options, config, container);
        _apps.set(name, newApp);
        return newApp;
      }
      /**
       * Retrieves a {@link @firebase/app#FirebaseApp} instance.
       *
       * When called with no arguments, the default app is returned. When an app name
       * is provided, the app corresponding to that name is returned.
       *
       * An exception is thrown if the app being retrieved has not yet been
       * initialized.
       *
       * @example
       * ```javascript
       * // Return the default app
       * const app = getApp();
       * ```
       *
       * @example
       * ```javascript
       * // Return a named app
       * const otherApp = getApp("otherApp");
       * ```
       *
       * @param name - Optional name of the app to return. If no name is
       *   provided, the default is `"[DEFAULT]"`.
       *
       * @returns The app corresponding to the provided app name.
       *   If no app name is provided, the default app is returned.
       *
       * @public
       */
      function getApp() {
        let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
        const app = _apps.get(name);
        if (!app && name === DEFAULT_ENTRY_NAME && (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultAppConfig)()) {
          return initializeApp();
        }
        if (!app) {
          throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, {
            appName: name
          });
        }
        return app;
      }
      /**
       * A (read-only) array of all initialized apps.
       * @public
       */
      function getApps() {
        return Array.from(_apps.values());
      }
      /**
       * Renders this app unusable and frees the resources of all associated
       * services.
       *
       * @example
       * ```javascript
       * deleteApp(app)
       *   .then(function() {
       *     console.log("App deleted successfully");
       *   })
       *   .catch(function(error) {
       *     console.log("Error deleting app:", error);
       *   });
       * ```
       *
       * @public
       */
      async function deleteApp(app) {
        const name = app.name;
        if (_apps.has(name)) {
          _apps.delete(name);
          await Promise.all(app.container.getProviders().map(provider => provider.delete()));
          app.isDeleted = true;
        }
      }
      /**
       * Registers a library's name and version for platform logging purposes.
       * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
       * @param version - Current version of that library.
       * @param variant - Bundle variant, e.g., node, rn, etc.
       *
       * @public
       */
      function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
          library += `-${variant}`;
        }
        const libraryMismatch = library.match(/\s|\//);
        const versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
          const warning = [`Unable to register library "${library}" with version "${version}":`];
          if (libraryMismatch) {
            warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
          }
          if (libraryMismatch && versionMismatch) {
            warning.push('and');
          }
          if (versionMismatch) {
            warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
          }
          logger.warn(warning.join(' '));
          return;
        }
        _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(`${library}-version`, () => ({
          library,
          version
        }), "VERSION" /* ComponentType.VERSION */));
      }
      /**
       * Sets log handler for all Firebase SDKs.
       * @param logCallback - An optional custom log handler that executes user code whenever
       * the Firebase SDK makes a logging call.
       *
       * @public
       */
      function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
          throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */);
        }

        (0, _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setUserLogHandler)(logCallback, options);
      }
      /**
       * Sets log level for all Firebase SDKs.
       *
       * All of the log types above the current log level are captured (i.e. if
       * you set the log level to `info`, errors are logged, but `debug` and
       * `verbose` logs are not).
       *
       * @public
       */
      function setLogLevel(logLevel) {
        (0, _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setLogLevel)(logLevel);
      }

      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const DB_NAME = 'firebase-heartbeat-database';
      const DB_VERSION = 1;
      const STORE_NAME = 'firebase-heartbeat-store';
      let dbPromise = null;
      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = (0, idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DB_NAME, DB_VERSION, {
            upgrade: (db, oldVersion) => {
              // We don't use 'break' in this switch statement, the fall-through
              // behavior is what we want, because if there are multiple versions between
              // the old version and the current version, we want ALL the migrations
              // that correspond to those versions to run, not only the last one.
              // eslint-disable-next-line default-case
              switch (oldVersion) {
                case 0:
                  db.createObjectStore(STORE_NAME);
              }
            }
          }).catch(e => {
            throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
              originalErrorMessage: e.message
            });
          });
        }
        return dbPromise;
      }
      async function readHeartbeatsFromIndexedDB(app) {
        try {
          const db = await getDbPromise();
          const result = await db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app));
          return result;
        } catch (e) {
          if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) {
            logger.warn(e.message);
          } else {
            const idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */, {
              originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
          }
        }
      }
      async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
        try {
          const db = await getDbPromise();
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const objectStore = tx.objectStore(STORE_NAME);
          await objectStore.put(heartbeatObject, computeKey(app));
          await tx.done;
        } catch (e) {
          if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) {
            logger.warn(e.message);
          } else {
            const idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */, {
              originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
          }
        }
      }
      function computeKey(app) {
        return `${app.name}!${app.options.appId}`;
      }

      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const MAX_HEADER_BYTES = 1024;
      // 30 days
      const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
      class HeartbeatServiceImpl {
        constructor(container) {
          this.container = container;
          /**
           * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
           * the header string.
           * Stores one record per date. This will be consolidated into the standard
           * format of one record per user agent string before being sent as a header.
           * Populated from indexedDB when the controller is instantiated and should
           * be kept in sync with indexedDB.
           * Leave public for easier testing.
           */
          this._heartbeatsCache = null;
          const app = this.container.getProvider('app').getImmediate();
          this._storage = new HeartbeatStorageImpl(app);
          this._heartbeatsCachePromise = this._storage.read().then(result => {
            this._heartbeatsCache = result;
            return result;
          });
        }
        /**
         * Called to report a heartbeat. The function will generate
         * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
         * to IndexedDB.
         * Note that we only store one heartbeat per day. So if a heartbeat for today is
         * already logged, subsequent calls to this function in the same day will be ignored.
         */
        async triggerHeartbeat() {
          const platformLogger = this.container.getProvider('platform-logger').getImmediate();
          // This is the "Firebase user agent" string from the platform logger
          // service, not the browser user agent.
          const agent = platformLogger.getPlatformInfoString();
          const date = getUTCDateString();
          if (this._heartbeatsCache === null) {
            this._heartbeatsCache = await this._heartbeatsCachePromise;
          }
          // Do not store a heartbeat if one is already stored for this day
          // or if a header has already been sent today.
          if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some(singleDateHeartbeat => singleDateHeartbeat.date === date)) {
            return;
          } else {
            // There is no entry for this date. Create one.
            this._heartbeatsCache.heartbeats.push({
              date,
              agent
            });
          }
          // Remove entries older than 30 days.
          this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(singleDateHeartbeat => {
            const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
            const now = Date.now();
            return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
          });
          return this._storage.overwrite(this._heartbeatsCache);
        }
        /**
         * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
         * It also clears all heartbeats from memory as well as in IndexedDB.
         *
         * NOTE: Consuming product SDKs should not send the header if this method
         * returns an empty string.
         */
        async getHeartbeatsHeader() {
          if (this._heartbeatsCache === null) {
            await this._heartbeatsCachePromise;
          }
          // If it's still null or the array is empty, there is no data to send.
          if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) {
            return '';
          }
          const date = getUTCDateString();
          // Extract as many heartbeats from the cache as will fit under the size limit.
          const {
            heartbeatsToSend,
            unsentEntries
          } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
          const headerString = (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(JSON.stringify({
            version: 2,
            heartbeats: heartbeatsToSend
          }));
          // Store last sent date to prevent another being logged/sent for the same day.
          this._heartbeatsCache.lastSentHeartbeatDate = date;
          if (unsentEntries.length > 0) {
            // Store any unsent entries if they exist.
            this._heartbeatsCache.heartbeats = unsentEntries;
            // This seems more likely than emptying the array (below) to lead to some odd state
            // since the cache isn't empty and this will be called again on the next request,
            // and is probably safest if we await it.
            await this._storage.overwrite(this._heartbeatsCache);
          } else {
            this._heartbeatsCache.heartbeats = [];
            // Do not wait for this, to reduce latency.
            void this._storage.overwrite(this._heartbeatsCache);
          }
          return headerString;
        }
      }
      function getUTCDateString() {
        const today = new Date();
        // Returns date format 'YYYY-MM-DD'
        return today.toISOString().substring(0, 10);
      }
      function extractHeartbeatsForHeader(heartbeatsCache) {
        let maxSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_HEADER_BYTES;
        // Heartbeats grouped by user agent in the standard format to be sent in
        // the header.
        const heartbeatsToSend = [];
        // Single date format heartbeats that are not sent.
        let unsentEntries = heartbeatsCache.slice();
        for (const singleDateHeartbeat of heartbeatsCache) {
          // Look for an existing entry with the same user agent.
          const heartbeatEntry = heartbeatsToSend.find(hb => hb.agent === singleDateHeartbeat.agent);
          if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
              agent: singleDateHeartbeat.agent,
              dates: [singleDateHeartbeat.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
              // If the header would exceed max size, remove the added heartbeat
              // entry and stop adding to the header.
              heartbeatsToSend.pop();
              break;
            }
          } else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
              heartbeatEntry.dates.pop();
              break;
            }
          }
          // Pop unsent entry from queue. (Skipped if adding the entry exceeded
          // quota and the loop breaks early.)
          unsentEntries = unsentEntries.slice(1);
        }
        return {
          heartbeatsToSend,
          unsentEntries
        };
      }
      class HeartbeatStorageImpl {
        constructor(app) {
          this.app = app;
          this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
        }
        async runIndexedDBEnvironmentCheck() {
          if (!(0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
            return false;
          } else {
            return (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)().then(() => true).catch(() => false);
          }
        }
        /**
         * Read all heartbeats.
         */
        async read() {
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return {
              heartbeats: []
            };
          } else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            return idbHeartbeatObject || {
              heartbeats: []
            };
          }
        }
        // overwrite the storage with the provided heartbeats
        async overwrite(heartbeatsObject) {
          var _a;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return;
          } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
              heartbeats: heartbeatsObject.heartbeats
            });
          }
        }
        // add heartbeats
        async add(heartbeatsObject) {
          var _a;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return;
          } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
              heartbeats: [...existingHeartbeatsObject.heartbeats, ...heartbeatsObject.heartbeats]
            });
          }
        }
      }
      /**
       * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
       * in a platform logging header JSON object, stringified, and converted
       * to base 64.
       */
      function countBytes(heartbeatsCache) {
        // base64 has a restricted set of characters, all of which should be 1 byte.
        return (0, _firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(
        // heartbeatsCache wrapper properties
        JSON.stringify({
          version: 2,
          heartbeats: heartbeatsCache
        })).length;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function registerCoreComponents(variant) {
        _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
        _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('heartbeat', container => new HeartbeatServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
        // Register `app` package.
        registerVersion(name$o, version$1, variant);
        // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
        registerVersion(name$o, version$1, 'esm2017');
        // Register platform SDK identifier (no version).
        registerVersion('fire-js', '');
      }

      /**
       * Firebase App
       *
       * @remarks This package coordinates the communication between the different Firebase components
       * @packageDocumentation
       */
      registerCoreComponents('');

      /***/
    },

    /***/"./node_modules/@firebase/component/dist/esm/index.esm2017.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@firebase/component/dist/esm/index.esm2017.js ***!
      \********************************************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"Component": () => /* binding */Component,
        /* harmony export */"ComponentContainer": () => /* binding */ComponentContainer,
        /* harmony export */"Provider": () => /* binding */Provider
        /* harmony export */
      });
      /* harmony import */
      var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @firebase/util */"./node_modules/@firebase/util/dist/index.esm2017.js");

      /**
       * Component for service name T, e.g. `auth`, `auth-internal`
       */
      class Component {
        /**
         *
         * @param name The public service name, e.g. app, auth, firestore, database
         * @param instanceFactory Service factory responsible for creating the public interface
         * @param type whether the service provided by the component is public or private
         */
        constructor(name, instanceFactory, type) {
          this.name = name;
          this.instanceFactory = instanceFactory;
          this.type = type;
          this.multipleInstances = false;
          /**
           * Properties to be added to the service namespace
           */
          this.serviceProps = {};
          this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
          this.onInstanceCreated = null;
        }
        setInstantiationMode(mode) {
          this.instantiationMode = mode;
          return this;
        }
        setMultipleInstances(multipleInstances) {
          this.multipleInstances = multipleInstances;
          return this;
        }
        setServiceProps(props) {
          this.serviceProps = props;
          return this;
        }
        setInstanceCreatedCallback(callback) {
          this.onInstanceCreated = callback;
          return this;
        }
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const DEFAULT_ENTRY_NAME = '[DEFAULT]';

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
       * NameServiceMapping[T] is an alias for the type of the instance
       */
      class Provider {
        constructor(name, container) {
          this.name = name;
          this.container = container;
          this.component = null;
          this.instances = new Map();
          this.instancesDeferred = new Map();
          this.instancesOptions = new Map();
          this.onInitCallbacks = new Map();
        }
        /**
         * @param identifier A provider can provide mulitple instances of a service
         * if this.component.multipleInstances is true.
         */
        get(identifier) {
          // if multipleInstances is not supported, use the default name
          const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
              // initialize the service if it can be auto-initialized
              try {
                const instance = this.getOrInitializeService({
                  instanceIdentifier: normalizedIdentifier
                });
                if (instance) {
                  deferred.resolve(instance);
                }
              } catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
              }
            }
          }
          return this.instancesDeferred.get(normalizedIdentifier).promise;
        }
        getImmediate(options) {
          var _a;
          // if multipleInstances is not supported, use the default name
          const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
          const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
          if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
            try {
              return this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
              });
            } catch (e) {
              if (optional) {
                return null;
              } else {
                throw e;
              }
            }
          } else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
              return null;
            } else {
              throw Error(`Service ${this.name} is not available`);
            }
          }
        }
        getComponent() {
          return this.component;
        }
        setComponent(component) {
          if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
          }
          if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
          }
          this.component = component;
          // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
          if (!this.shouldAutoInitialize()) {
            return;
          }
          // if the service is eager, initialize the default instance
          if (isComponentEager(component)) {
            try {
              this.getOrInitializeService({
                instanceIdentifier: DEFAULT_ENTRY_NAME
              });
            } catch (e) {
              // when the instance factory for an eager Component throws an exception during the eager
              // initialization, it should not cause a fatal error.
              // TODO: Investigate if we need to make it configurable, because some component may want to cause
              // a fatal error in this case?
            }
          }
          // Create service instances for the pending promises and resolve them
          // NOTE: if this.multipleInstances is false, only the default instance will be created
          // and all promises with resolve with it regardless of the identifier.
          for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
              // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
              const instance = this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
              });
              instanceDeferred.resolve(instance);
            } catch (e) {
              // when the instance factory throws an exception, it should not cause
              // a fatal error. We just leave the promise unresolved.
            }
          }
        }
        clearInstance() {
          let identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
          this.instancesDeferred.delete(identifier);
          this.instancesOptions.delete(identifier);
          this.instances.delete(identifier);
        }
        // app.delete() will call this method on every provider to delete the services
        // TODO: should we mark the provider as deleted?
        async delete() {
          const services = Array.from(this.instances.values());
          await Promise.all([...services.filter(service => 'INTERNAL' in service) // legacy services
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map(service => service.INTERNAL.delete()), ...services.filter(service => '_delete' in service) // modularized services
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map(service => service._delete())]);
        }
        isComponentSet() {
          return this.component != null;
        }
        isInitialized() {
          let identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
          return this.instances.has(identifier);
        }
        getOptions() {
          let identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
          return this.instancesOptions.get(identifier) || {};
        }
        initialize() {
          let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          const {
            options = {}
          } = opts;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
          if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
          }
          if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
          }
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
          });
          // resolve any pending promise waiting for the service instance
          for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
              instanceDeferred.resolve(instance);
            }
          }
          return instance;
        }
        /**
         *
         * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
         * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
         *
         * @param identifier An optional instance identifier
         * @returns a function to unregister the callback
         */
        onInit(callback, identifier) {
          var _a;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
          existingCallbacks.add(callback);
          this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
          const existingInstance = this.instances.get(normalizedIdentifier);
          if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
          }
          return () => {
            existingCallbacks.delete(callback);
          };
        }
        /**
         * Invoke onInit callbacks synchronously
         * @param instance the service instance`
         */
        invokeOnInitCallbacks(instance, identifier) {
          const callbacks = this.onInitCallbacks.get(identifier);
          if (!callbacks) {
            return;
          }
          for (const callback of callbacks) {
            try {
              callback(instance, identifier);
            } catch (_a) {
              // ignore errors in the onInit callback
            }
          }
        }
        getOrInitializeService(_ref4) {
          let {
            instanceIdentifier,
            options = {}
          } = _ref4;
          let instance = this.instances.get(instanceIdentifier);
          if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
              instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
              options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
              try {
                this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
              } catch (_a) {
                // ignore errors in the onInstanceCreatedCallback
              }
            }
          }
          return instance || null;
        }
        normalizeInstanceIdentifier() {
          let identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
          if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
          } else {
            return identifier; // assume multiple instances are supported before the component is provided.
          }
        }

        shouldAutoInitialize() {
          return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */;
        }
      }
      // undefined should be passed to the service factory for the default instance
      function normalizeIdentifierForFactory(identifier) {
        return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
      }
      function isComponentEager(component) {
        return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
       */
      class ComponentContainer {
        constructor(name) {
          this.name = name;
          this.providers = new Map();
        }
        /**
         *
         * @param component Component being added
         * @param overwrite When a component with the same name has already been registered,
         * if overwrite is true: overwrite the existing component with the new component and create a new
         * provider with the new component. It can be useful in tests where you want to use different mocks
         * for different tests.
         * if overwrite is false: throw an exception
         */
        addComponent(component) {
          const provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
          }
          provider.setComponent(component);
        }
        addOrOverwriteComponent(component) {
          const provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
          }
          this.addComponent(component);
        }
        /**
         * getProvider provides a type safe interface where it can only be called with a field name
         * present in NameServiceMapping interface.
         *
         * Firebase SDKs providing services should extend NameServiceMapping interface to register
         * themselves.
         */
        getProvider(name) {
          if (this.providers.has(name)) {
            return this.providers.get(name);
          }
          // create a Provider for a service that hasn't registered with Firebase
          const provider = new Provider(name, this);
          this.providers.set(name, provider);
          return provider;
        }
        getProviders() {
          return Array.from(this.providers.values());
        }
      }

      /***/
    },

    /***/"./node_modules/@firebase/installations/dist/esm/index.esm2017.js":
    /*!************************************************************************!*\
      !*** ./node_modules/@firebase/installations/dist/esm/index.esm2017.js ***!
      \************************************************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"deleteInstallations": () => /* binding */deleteInstallations,
        /* harmony export */"getId": () => /* binding */getId,
        /* harmony export */"getInstallations": () => /* binding */getInstallations,
        /* harmony export */"getToken": () => /* binding */getToken,
        /* harmony export */"onIdChange": () => /* binding */onIdChange
        /* harmony export */
      });
      /* harmony import */
      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @firebase/app */"./node_modules/@firebase/app/dist/esm/index.esm2017.js");
      /* harmony import */
      var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @firebase/component */"./node_modules/@firebase/component/dist/esm/index.esm2017.js");
      /* harmony import */
      var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @firebase/util */"./node_modules/@firebase/util/dist/index.esm2017.js");
      /* harmony import */
      var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! idb */"./node_modules/@firebase/installations/node_modules/idb/build/index.js");
      const name = "@firebase/installations";
      const version = "0.6.4";

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const PENDING_TIMEOUT_MS = 10000;
      const PACKAGE_VERSION = `w:${version}`;
      const INTERNAL_AUTH_VERSION = 'FIS_v2';
      const INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
      const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
      const SERVICE = 'installations';
      const SERVICE_NAME = 'Installations';

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const ERROR_DESCRIPTION_MAP = {
        ["missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */]: 'Missing App configuration value: "{$valueName}"',
        ["not-registered" /* ErrorCode.NOT_REGISTERED */]: 'Firebase Installation is not registered.',
        ["installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */]: 'Firebase Installation not found.',
        ["request-failed" /* ErrorCode.REQUEST_FAILED */]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        ["app-offline" /* ErrorCode.APP_OFFLINE */]: 'Could not process request. Application offline.',
        ["delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */]: "Can't delete installation while there is a pending registration request."
      };
      const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
      /** Returns true if error is a FirebaseError that is based on an error from the server. */
      function isServerError(error) {
        return error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError && error.code.includes("request-failed" /* ErrorCode.REQUEST_FAILED */);
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function getInstallationsEndpoint(_ref5) {
        let {
          projectId
        } = _ref5;
        return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
      }
      function extractAuthTokenInfoFromResponse(response) {
        return {
          token: response.token,
          requestStatus: 2 /* RequestStatus.COMPLETED */,
          expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
          creationTime: Date.now()
        };
      }
      async function getErrorFromResponse(requestName, response) {
        const responseJson = await response.json();
        const errorData = responseJson.error;
        return ERROR_FACTORY.create("request-failed" /* ErrorCode.REQUEST_FAILED */, {
          requestName,
          serverCode: errorData.code,
          serverMessage: errorData.message,
          serverStatus: errorData.status
        });
      }
      function getHeaders(_ref6) {
        let {
          apiKey
        } = _ref6;
        return new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-goog-api-key': apiKey
        });
      }
      function getHeadersWithAuth(appConfig, _ref7) {
        let {
          refreshToken
        } = _ref7;
        const headers = getHeaders(appConfig);
        headers.append('Authorization', getAuthorizationHeader(refreshToken));
        return headers;
      }
      /**
       * Calls the passed in fetch wrapper and returns the response.
       * If the returned response has a status of 5xx, re-runs the function once and
       * returns the response.
       */
      async function retryIfServerError(fn) {
        const result = await fn();
        if (result.status >= 500 && result.status < 600) {
          // Internal Server Error. Retry request.
          return fn();
        }
        return result;
      }
      function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
        // This works because the server will never respond with fractions of a second.
        return Number(responseExpiresIn.replace('s', '000'));
      }
      function getAuthorizationHeader(refreshToken) {
        return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      async function createInstallationRequest(_ref8, _ref9) {
        let {
          appConfig,
          heartbeatServiceProvider
        } = _ref8;
        let {
          fid
        } = _ref9;
        const endpoint = getInstallationsEndpoint(appConfig);
        const headers = getHeaders(appConfig);
        // If heartbeat service exists, add the heartbeat string to the header.
        const heartbeatService = heartbeatServiceProvider.getImmediate({
          optional: true
        });
        if (heartbeatService) {
          const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
          if (heartbeatsHeader) {
            headers.append('x-firebase-client', heartbeatsHeader);
          }
        }
        const body = {
          fid,
          authVersion: INTERNAL_AUTH_VERSION,
          appId: appConfig.appId,
          sdkVersion: PACKAGE_VERSION
        };
        const request = {
          method: 'POST',
          headers,
          body: JSON.stringify(body)
        };
        const response = await retryIfServerError(() => fetch(endpoint, request));
        if (response.ok) {
          const responseValue = await response.json();
          const registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2 /* RequestStatus.COMPLETED */,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
          };
          return registeredInstallationEntry;
        } else {
          throw await getErrorFromResponse('Create Installation', response);
        }
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /** Returns a promise that resolves after given time passes. */
      function sleep(ms) {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function bufferToBase64UrlSafe(array) {
        const b64 = btoa(String.fromCharCode(...array));
        return b64.replace(/\+/g, '-').replace(/\//g, '_');
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
      const INVALID_FID = '';
      /**
       * Generates a new FID using random values from Web Crypto API.
       * Returns an empty string if FID generation fails for any reason.
       */
      function generateFid() {
        try {
          // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
          // bytes. our implementation generates a 17 byte array instead.
          const fidByteArray = new Uint8Array(17);
          const crypto = self.crypto || self.msCrypto;
          crypto.getRandomValues(fidByteArray);
          // Replace the first 4 random bits with the constant FID header of 0b0111.
          fidByteArray[0] = 0b01110000 + fidByteArray[0] % 0b00010000;
          const fid = encode(fidByteArray);
          return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
        } catch (_a) {
          // FID generation errored
          return INVALID_FID;
        }
      }
      /** Converts a FID Uint8Array to a base64 string representation. */
      function encode(fidByteArray) {
        const b64String = bufferToBase64UrlSafe(fidByteArray);
        // Remove the 23rd character that was added because of the extra 4 bits at the
        // end of our 17 byte array, and the '=' padding.
        return b64String.substr(0, 22);
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /** Returns a string key that can be used to identify the app. */
      function getKey(appConfig) {
        return `${appConfig.appName}!${appConfig.appId}`;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const fidChangeCallbacks = new Map();
      /**
       * Calls the onIdChange callbacks with the new FID value, and broadcasts the
       * change to other tabs.
       */
      function fidChanged(appConfig, fid) {
        const key = getKey(appConfig);
        callFidChangeCallbacks(key, fid);
        broadcastFidChange(key, fid);
      }
      function addCallback(appConfig, callback) {
        // Open the broadcast channel if it's not already open,
        // to be able to listen to change events from other tabs.
        getBroadcastChannel();
        const key = getKey(appConfig);
        let callbackSet = fidChangeCallbacks.get(key);
        if (!callbackSet) {
          callbackSet = new Set();
          fidChangeCallbacks.set(key, callbackSet);
        }
        callbackSet.add(callback);
      }
      function removeCallback(appConfig, callback) {
        const key = getKey(appConfig);
        const callbackSet = fidChangeCallbacks.get(key);
        if (!callbackSet) {
          return;
        }
        callbackSet.delete(callback);
        if (callbackSet.size === 0) {
          fidChangeCallbacks.delete(key);
        }
        // Close broadcast channel if there are no more callbacks.
        closeBroadcastChannel();
      }
      function callFidChangeCallbacks(key, fid) {
        const callbacks = fidChangeCallbacks.get(key);
        if (!callbacks) {
          return;
        }
        for (const callback of callbacks) {
          callback(fid);
        }
      }
      function broadcastFidChange(key, fid) {
        const channel = getBroadcastChannel();
        if (channel) {
          channel.postMessage({
            key,
            fid
          });
        }
        closeBroadcastChannel();
      }
      let broadcastChannel = null;
      /** Opens and returns a BroadcastChannel if it is supported by the browser. */
      function getBroadcastChannel() {
        if (!broadcastChannel && 'BroadcastChannel' in self) {
          broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
          broadcastChannel.onmessage = e => {
            callFidChangeCallbacks(e.data.key, e.data.fid);
          };
        }
        return broadcastChannel;
      }
      function closeBroadcastChannel() {
        if (fidChangeCallbacks.size === 0 && broadcastChannel) {
          broadcastChannel.close();
          broadcastChannel = null;
        }
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const DATABASE_NAME = 'firebase-installations-database';
      const DATABASE_VERSION = 1;
      const OBJECT_STORE_NAME = 'firebase-installations-store';
      let dbPromise = null;
      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = (0, idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
            upgrade: (db, oldVersion) => {
              // We don't use 'break' in this switch statement, the fall-through
              // behavior is what we want, because if there are multiple versions between
              // the old version and the current version, we want ALL the migrations
              // that correspond to those versions to run, not only the last one.
              // eslint-disable-next-line default-case
              switch (oldVersion) {
                case 0:
                  db.createObjectStore(OBJECT_STORE_NAME);
              }
            }
          });
        }
        return dbPromise;
      }
      /** Assigns or overwrites the record for the given key with the given value. */
      async function set(appConfig, value) {
        const key = getKey(appConfig);
        const db = await getDbPromise();
        const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        const objectStore = tx.objectStore(OBJECT_STORE_NAME);
        const oldValue = await objectStore.get(key);
        await objectStore.put(value, key);
        await tx.done;
        if (!oldValue || oldValue.fid !== value.fid) {
          fidChanged(appConfig, value.fid);
        }
        return value;
      }
      /** Removes record(s) from the objectStore that match the given key. */
      async function remove(appConfig) {
        const key = getKey(appConfig);
        const db = await getDbPromise();
        const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        await tx.objectStore(OBJECT_STORE_NAME).delete(key);
        await tx.done;
      }
      /**
       * Atomically updates a record with the result of updateFn, which gets
       * called with the current value. If newValue is undefined, the record is
       * deleted instead.
       * @return Updated value
       */
      async function update(appConfig, updateFn) {
        const key = getKey(appConfig);
        const db = await getDbPromise();
        const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
        const store = tx.objectStore(OBJECT_STORE_NAME);
        const oldValue = await store.get(key);
        const newValue = updateFn(oldValue);
        if (newValue === undefined) {
          await store.delete(key);
        } else {
          await store.put(newValue, key);
        }
        await tx.done;
        if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
          fidChanged(appConfig, newValue.fid);
        }
        return newValue;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Updates and returns the InstallationEntry from the database.
       * Also triggers a registration request if it is necessary and possible.
       */
      async function getInstallationEntry(installations) {
        let registrationPromise;
        const installationEntry = await update(installations.appConfig, oldEntry => {
          const installationEntry = updateOrCreateInstallationEntry(oldEntry);
          const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry);
          registrationPromise = entryWithPromise.registrationPromise;
          return entryWithPromise.installationEntry;
        });
        if (installationEntry.fid === INVALID_FID) {
          // FID generation failed. Waiting for the FID from the server.
          return {
            installationEntry: await registrationPromise
          };
        }
        return {
          installationEntry,
          registrationPromise
        };
      }
      /**
       * Creates a new Installation Entry if one does not exist.
       * Also clears timed out pending requests.
       */
      function updateOrCreateInstallationEntry(oldEntry) {
        const entry = oldEntry || {
          fid: generateFid(),
          registrationStatus: 0 /* RequestStatus.NOT_STARTED */
        };

        return clearTimedOutRequest(entry);
      }
      /**
       * If the Firebase Installation is not registered yet, this will trigger the
       * registration and return an InProgressInstallationEntry.
       *
       * If registrationPromise does not exist, the installationEntry is guaranteed
       * to be registered.
       */
      function triggerRegistrationIfNecessary(installations, installationEntry) {
        if (installationEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
          if (!navigator.onLine) {
            // Registration required but app is offline.
            const registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */));
            return {
              installationEntry,
              registrationPromise: registrationPromiseWithError
            };
          }
          // Try registering. Change status to IN_PROGRESS.
          const inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* RequestStatus.IN_PROGRESS */,
            registrationTime: Date.now()
          };
          const registrationPromise = registerInstallation(installations, inProgressEntry);
          return {
            installationEntry: inProgressEntry,
            registrationPromise
          };
        } else if (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
          return {
            installationEntry,
            registrationPromise: waitUntilFidRegistration(installations)
          };
        } else {
          return {
            installationEntry
          };
        }
      }
      /** This will be executed only once for each new Firebase Installation. */
      async function registerInstallation(installations, installationEntry) {
        try {
          const registeredInstallationEntry = await createInstallationRequest(installations, installationEntry);
          return set(installations.appConfig, registeredInstallationEntry);
        } catch (e) {
          if (isServerError(e) && e.customData.serverCode === 409) {
            // Server returned a "FID can not be used" error.
            // Generate a new ID next time.
            await remove(installations.appConfig);
          } else {
            // Registration failed. Set FID as not registered.
            await set(installations.appConfig, {
              fid: installationEntry.fid,
              registrationStatus: 0 /* RequestStatus.NOT_STARTED */
            });
          }

          throw e;
        }
      }
      /** Call if FID registration is pending in another request. */
      async function waitUntilFidRegistration(installations) {
        // Unfortunately, there is no way of reliably observing when a value in
        // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
        // so we need to poll.
        let entry = await updateInstallationRequest(installations.appConfig);
        while (entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
          // createInstallation request still in progress.
          await sleep(100);
          entry = await updateInstallationRequest(installations.appConfig);
        }
        if (entry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
          // The request timed out or failed in a different call. Try again.
          const {
            installationEntry,
            registrationPromise
          } = await getInstallationEntry(installations);
          if (registrationPromise) {
            return registrationPromise;
          } else {
            // if there is no registrationPromise, entry is registered.
            return installationEntry;
          }
        }
        return entry;
      }
      /**
       * Called only if there is a CreateInstallation request in progress.
       *
       * Updates the InstallationEntry in the DB based on the status of the
       * CreateInstallation request.
       *
       * Returns the updated InstallationEntry.
       */
      function updateInstallationRequest(appConfig) {
        return update(appConfig, oldEntry => {
          if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */);
          }

          return clearTimedOutRequest(oldEntry);
        });
      }
      function clearTimedOutRequest(entry) {
        if (hasInstallationRequestTimedOut(entry)) {
          return {
            fid: entry.fid,
            registrationStatus: 0 /* RequestStatus.NOT_STARTED */
          };
        }

        return entry;
      }
      function hasInstallationRequestTimedOut(installationEntry) {
        return installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */ && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      async function generateAuthTokenRequest(_ref10, installationEntry) {
        let {
          appConfig,
          heartbeatServiceProvider
        } = _ref10;
        const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
        const headers = getHeadersWithAuth(appConfig, installationEntry);
        // If heartbeat service exists, add the heartbeat string to the header.
        const heartbeatService = heartbeatServiceProvider.getImmediate({
          optional: true
        });
        if (heartbeatService) {
          const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
          if (heartbeatsHeader) {
            headers.append('x-firebase-client', heartbeatsHeader);
          }
        }
        const body = {
          installation: {
            sdkVersion: PACKAGE_VERSION,
            appId: appConfig.appId
          }
        };
        const request = {
          method: 'POST',
          headers,
          body: JSON.stringify(body)
        };
        const response = await retryIfServerError(() => fetch(endpoint, request));
        if (response.ok) {
          const responseValue = await response.json();
          const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
          return completedAuthToken;
        } else {
          throw await getErrorFromResponse('Generate Auth Token', response);
        }
      }
      function getGenerateAuthTokenEndpoint(appConfig, _ref11) {
        let {
          fid
        } = _ref11;
        return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Returns a valid authentication token for the installation. Generates a new
       * token if one doesn't exist, is expired or about to expire.
       *
       * Should only be called if the Firebase Installation is registered.
       */
      async function refreshAuthToken(installations) {
        let forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        let tokenPromise;
        const entry = await update(installations.appConfig, oldEntry => {
          if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
          }

          const oldAuthToken = oldEntry.authToken;
          if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
            // There is a valid token in the DB.
            return oldEntry;
          } else if (oldAuthToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */) {
            // There already is a token request in progress.
            tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
            return oldEntry;
          } else {
            // No token or token expired.
            if (!navigator.onLine) {
              throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
            }

            const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
            tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
            return inProgressEntry;
          }
        });
        const authToken = tokenPromise ? await tokenPromise : entry.authToken;
        return authToken;
      }
      /**
       * Call only if FID is registered and Auth Token request is in progress.
       *
       * Waits until the current pending request finishes. If the request times out,
       * tries once in this thread as well.
       */
      async function waitUntilAuthTokenRequest(installations, forceRefresh) {
        // Unfortunately, there is no way of reliably observing when a value in
        // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
        // so we need to poll.
        let entry = await updateAuthTokenRequest(installations.appConfig);
        while (entry.authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */) {
          // generateAuthToken still in progress.
          await sleep(100);
          entry = await updateAuthTokenRequest(installations.appConfig);
        }
        const authToken = entry.authToken;
        if (authToken.requestStatus === 0 /* RequestStatus.NOT_STARTED */) {
          // The request timed out or failed in a different call. Try again.
          return refreshAuthToken(installations, forceRefresh);
        } else {
          return authToken;
        }
      }
      /**
       * Called only if there is a GenerateAuthToken request in progress.
       *
       * Updates the InstallationEntry in the DB based on the status of the
       * GenerateAuthToken request.
       *
       * Returns the updated InstallationEntry.
       */
      function updateAuthTokenRequest(appConfig) {
        return update(appConfig, oldEntry => {
          if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
          }

          const oldAuthToken = oldEntry.authToken;
          if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object.assign(Object.assign({}, oldEntry), {
              authToken: {
                requestStatus: 0 /* RequestStatus.NOT_STARTED */
              }
            });
          }

          return oldEntry;
        });
      }
      async function fetchAuthTokenFromServer(installations, installationEntry) {
        try {
          const authToken = await generateAuthTokenRequest(installations, installationEntry);
          const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
            authToken
          });
          await set(installations.appConfig, updatedInstallationEntry);
          return authToken;
        } catch (e) {
          if (isServerError(e) && (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
            // Server returned a "FID not found" or a "Invalid authentication" error.
            // Generate a new ID next time.
            await remove(installations.appConfig);
          } else {
            const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
              authToken: {
                requestStatus: 0 /* RequestStatus.NOT_STARTED */
              }
            });
            await set(installations.appConfig, updatedInstallationEntry);
          }
          throw e;
        }
      }
      function isEntryRegistered(installationEntry) {
        return installationEntry !== undefined && installationEntry.registrationStatus === 2 /* RequestStatus.COMPLETED */;
      }

      function isAuthTokenValid(authToken) {
        return authToken.requestStatus === 2 /* RequestStatus.COMPLETED */ && !isAuthTokenExpired(authToken);
      }
      function isAuthTokenExpired(authToken) {
        const now = Date.now();
        return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
      }
      /** Returns an updated InstallationEntry with an InProgressAuthToken. */
      function makeAuthTokenRequestInProgressEntry(oldEntry) {
        const inProgressAuthToken = {
          requestStatus: 1 /* RequestStatus.IN_PROGRESS */,
          requestTime: Date.now()
        };
        return Object.assign(Object.assign({}, oldEntry), {
          authToken: inProgressAuthToken
        });
      }
      function hasAuthTokenRequestTimedOut(authToken) {
        return authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */ && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Creates a Firebase Installation if there isn't one for the app and
       * returns the Installation ID.
       * @param installations - The `Installations` instance.
       *
       * @public
       */
      async function getId(installations) {
        const installationsImpl = installations;
        const {
          installationEntry,
          registrationPromise
        } = await getInstallationEntry(installationsImpl);
        if (registrationPromise) {
          registrationPromise.catch(console.error);
        } else {
          // If the installation is already registered, update the authentication
          // token if needed.
          refreshAuthToken(installationsImpl).catch(console.error);
        }
        return installationEntry.fid;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Returns a Firebase Installations auth token, identifying the current
       * Firebase Installation.
       * @param installations - The `Installations` instance.
       * @param forceRefresh - Force refresh regardless of token expiration.
       *
       * @public
       */
      async function getToken(installations) {
        let forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const installationsImpl = installations;
        await completeInstallationRegistration(installationsImpl);
        // At this point we either have a Registered Installation in the DB, or we've
        // already thrown an error.
        const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
        return authToken.token;
      }
      async function completeInstallationRegistration(installations) {
        const {
          registrationPromise
        } = await getInstallationEntry(installations);
        if (registrationPromise) {
          // A createInstallation request is in progress. Wait until it finishes.
          await registrationPromise;
        }
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      async function deleteInstallationRequest(appConfig, installationEntry) {
        const endpoint = getDeleteEndpoint(appConfig, installationEntry);
        const headers = getHeadersWithAuth(appConfig, installationEntry);
        const request = {
          method: 'DELETE',
          headers
        };
        const response = await retryIfServerError(() => fetch(endpoint, request));
        if (!response.ok) {
          throw await getErrorFromResponse('Delete Installation', response);
        }
      }
      function getDeleteEndpoint(appConfig, _ref12) {
        let {
          fid
        } = _ref12;
        return `${getInstallationsEndpoint(appConfig)}/${fid}`;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Deletes the Firebase Installation and all associated data.
       * @param installations - The `Installations` instance.
       *
       * @public
       */
      async function deleteInstallations(installations) {
        const {
          appConfig
        } = installations;
        const entry = await update(appConfig, oldEntry => {
          if (oldEntry && oldEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
            // Delete the unregistered entry without sending a deleteInstallation request.
            return undefined;
          }
          return oldEntry;
        });
        if (entry) {
          if (entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
            // Can't delete while trying to register.
            throw ERROR_FACTORY.create("delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */);
          } else if (entry.registrationStatus === 2 /* RequestStatus.COMPLETED */) {
            if (!navigator.onLine) {
              throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
            } else {
              await deleteInstallationRequest(appConfig, entry);
              await remove(appConfig);
            }
          }
        }
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Sets a new callback that will get called when Installation ID changes.
       * Returns an unsubscribe function that will remove the callback when called.
       * @param installations - The `Installations` instance.
       * @param callback - The callback function that is invoked when FID changes.
       * @returns A function that can be called to unsubscribe.
       *
       * @public
       */
      function onIdChange(installations, callback) {
        const {
          appConfig
        } = installations;
        addCallback(appConfig, callback);
        return () => {
          removeCallback(appConfig, callback);
        };
      }

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * Returns an instance of {@link Installations} associated with the given
       * {@link @firebase/app#FirebaseApp} instance.
       * @param app - The {@link @firebase/app#FirebaseApp} instance.
       *
       * @public
       */
      function getInstallations() {
        let app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
        const installationsImpl = (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'installations').getImmediate();
        return installationsImpl;
      }

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function extractAppConfig(app) {
        if (!app || !app.options) {
          throw getMissingValueError('App Configuration');
        }
        if (!app.name) {
          throw getMissingValueError('App Name');
        }
        // Required app config keys
        const configKeys = ['projectId', 'apiKey', 'appId'];
        for (const keyName of configKeys) {
          if (!app.options[keyName]) {
            throw getMissingValueError(keyName);
          }
        }
        return {
          appName: app.name,
          projectId: app.options.projectId,
          apiKey: app.options.apiKey,
          appId: app.options.appId
        };
      }
      function getMissingValueError(valueName) {
        return ERROR_FACTORY.create("missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */, {
          valueName
        });
      }

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const INSTALLATIONS_NAME = 'installations';
      const INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
      const publicFactory = container => {
        const app = container.getProvider('app').getImmediate();
        // Throws if app isn't configured properly.
        const appConfig = extractAppConfig(app);
        const heartbeatServiceProvider = (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'heartbeat');
        const installationsImpl = {
          app,
          appConfig,
          heartbeatServiceProvider,
          _delete: () => Promise.resolve()
        };
        return installationsImpl;
      };
      const internalFactory = container => {
        const app = container.getProvider('app').getImmediate();
        // Internal FIS instance relies on public FIS instance.
        const installations = (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, INSTALLATIONS_NAME).getImmediate();
        const installationsInternal = {
          getId: () => getId(installations),
          getToken: forceRefresh => getToken(installations, forceRefresh)
        };
        return installationsInternal;
      };
      function registerInstallations() {
        (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* ComponentType.PUBLIC */));
        (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* ComponentType.PRIVATE */));
      }

      /**
       * Firebase Installations
       *
       * @packageDocumentation
       */
      registerInstallations();
      (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version);
      // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
      (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'esm2017');

      /***/
    },

    /***/"./node_modules/@firebase/installations/node_modules/idb/build/index.js":
    /*!******************************************************************************!*\
      !*** ./node_modules/@firebase/installations/node_modules/idb/build/index.js ***!
      \******************************************************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"deleteDB": () => /* binding */deleteDB,
        /* harmony export */"openDB": () => /* binding */openDB,
        /* harmony export */"unwrap": () => /* reexport safe */_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u,
        /* harmony export */"wrap": () => /* reexport safe */_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w
        /* harmony export */
      });
      /* harmony import */
      var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./wrap-idb-value.js */"./node_modules/@firebase/installations/node_modules/idb/build/wrap-idb-value.js");

      /**
       * Open a database.
       *
       * @param name Name of the database.
       * @param version Schema version.
       * @param callbacks Additional callbacks.
       */
      function openDB(name, version) {
        let {
          blocked,
          upgrade,
          blocking,
          terminated
        } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        const request = indexedDB.open(name, version);
        const openPromise = (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
        if (upgrade) {
          request.addEventListener('upgradeneeded', event => {
            upgrade((0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction));
          });
        }
        if (blocked) request.addEventListener('blocked', () => blocked());
        openPromise.then(db => {
          if (terminated) db.addEventListener('close', () => terminated());
          if (blocking) db.addEventListener('versionchange', () => blocking());
        }).catch(() => {});
        return openPromise;
      }
      /**
       * Delete a database.
       *
       * @param name Name of the database.
       */
      function deleteDB(name) {
        let {
          blocked
        } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const request = indexedDB.deleteDatabase(name);
        if (blocked) request.addEventListener('blocked', () => blocked());
        return (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
      }
      const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
      const writeMethods = ['put', 'add', 'delete', 'clear'];
      const cachedMethods = new Map();
      function getMethod(target, prop) {
        if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
          return;
        }
        if (cachedMethods.get(prop)) return cachedMethods.get(prop);
        const targetFuncName = prop.replace(/FromIndex$/, '');
        const useIndex = prop !== targetFuncName;
        const isWrite = writeMethods.includes(targetFuncName);
        if (
        // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
        !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
          return;
        }
        const method = async function (storeName) {
          // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
          const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
          let target = tx.store;
          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }
          if (useIndex) target = target.index(args.shift());
          // Must reject if op rejects.
          // If it's a write operation, must reject if tx.done rejects.
          // Must reject with op rejection first.
          // Must resolve with op value.
          // Must handle both promises (no unhandled rejections)
          return (await Promise.all([target[targetFuncName](...args), isWrite && tx.done]))[0];
        };
        cachedMethods.set(prop, method);
        return method;
      }
      (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)(oldTraps => ({
        ...oldTraps,
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
      }));

      /***/
    },

    /***/"./node_modules/@firebase/installations/node_modules/idb/build/wrap-idb-value.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@firebase/installations/node_modules/idb/build/wrap-idb-value.js ***!
      \***************************************************************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"a": () => /* binding */reverseTransformCache,
        /* harmony export */"i": () => /* binding */instanceOfAny,
        /* harmony export */"r": () => /* binding */replaceTraps,
        /* harmony export */"u": () => /* binding */unwrap,
        /* harmony export */"w": () => /* binding */wrap
        /* harmony export */
      });
      const instanceOfAny = (object, constructors) => constructors.some(c => object instanceof c);
      let idbProxyableTypes;
      let cursorAdvanceMethods;
      // This is a function to prevent it throwing up in node environments.
      function getIdbProxyableTypes() {
        return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
      }
      // This is a function to prevent it throwing up in node environments.
      function getCursorAdvanceMethods() {
        return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]);
      }
      const cursorRequestMap = new WeakMap();
      const transactionDoneMap = new WeakMap();
      const transactionStoreNamesMap = new WeakMap();
      const transformCache = new WeakMap();
      const reverseTransformCache = new WeakMap();
      function promisifyRequest(request) {
        const promise = new Promise((resolve, reject) => {
          const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
          };
          const success = () => {
            resolve(wrap(request.result));
            unlisten();
          };
          const error = () => {
            reject(request.error);
            unlisten();
          };
          request.addEventListener('success', success);
          request.addEventListener('error', error);
        });
        promise.then(value => {
          // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
          // (see wrapFunction).
          if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
          }
          // Catching to avoid "Uncaught Promise exceptions"
        }).catch(() => {});
        // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
        // is because we create many promises from a single IDBRequest.
        reverseTransformCache.set(promise, request);
        return promise;
      }
      function cacheDonePromiseForTransaction(tx) {
        // Early bail if we've already created a done promise for this transaction.
        if (transactionDoneMap.has(tx)) return;
        const done = new Promise((resolve, reject) => {
          const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
          };
          const complete = () => {
            resolve();
            unlisten();
          };
          const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
          };
          tx.addEventListener('complete', complete);
          tx.addEventListener('error', error);
          tx.addEventListener('abort', error);
        });
        // Cache it for later retrieval.
        transactionDoneMap.set(tx, done);
      }
      let idbProxyTraps = {
        get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done') return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
              return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
              return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
            }
          }
          // Else transform whatever we get back.
          return wrap(target[prop]);
        },
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        has(target, prop) {
          if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
            return true;
          }
          return prop in target;
        }
      };
      function replaceTraps(callback) {
        idbProxyTraps = callback(idbProxyTraps);
      }
      function wrapFunction(func) {
        // Due to expected object equality (which is enforced by the caching in `wrap`), we
        // only create one new func per func.
        // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
        if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
          return function (storeNames) {
            for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              args[_key5 - 1] = arguments[_key5];
            }
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
          };
        }
        // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
        // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
        // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
        // with real promises, so each advance methods returns a new promise for the cursor object, or
        // undefined if the end of the cursor has been reached.
        if (getCursorAdvanceMethods().includes(func)) {
          return function () {
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
          };
        }
        return function () {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }
          // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
          // the original object.
          return wrap(func.apply(unwrap(this), args));
        };
      }
      function transformCachableValue(value) {
        if (typeof value === 'function') return wrapFunction(value);
        // This doesn't return, it just creates a 'done' promise for the transaction,
        // which is later returned for transaction.done (see idbObjectHandler).
        if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
        if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
        // Return the same value back if we're not going to transform it.
        return value;
      }
      function wrap(value) {
        // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
        // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
        if (value instanceof IDBRequest) return promisifyRequest(value);
        // If we've already transformed this value before, reuse the transformed value.
        // This is faster, but it also provides object equality.
        if (transformCache.has(value)) return transformCache.get(value);
        const newValue = transformCachableValue(value);
        // Not all types are transformed.
        // These may be primitive types, so they can't be WeakMap keys.
        if (newValue !== value) {
          transformCache.set(value, newValue);
          reverseTransformCache.set(newValue, value);
        }
        return newValue;
      }
      const unwrap = value => reverseTransformCache.get(value);

      /***/
    },

    /***/"./node_modules/@firebase/logger/dist/esm/index.esm2017.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/@firebase/logger/dist/esm/index.esm2017.js ***!
      \*****************************************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"LogLevel": () => /* binding */LogLevel,
        /* harmony export */"Logger": () => /* binding */Logger,
        /* harmony export */"setLogLevel": () => /* binding */setLogLevel,
        /* harmony export */"setUserLogHandler": () => /* binding */setUserLogHandler
        /* harmony export */
      });
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * A container for all of the Logger instances
       */
      const instances = [];
      /**
       * The JS SDK supports 5 log levels and also allows a user the ability to
       * silence the logs altogether.
       *
       * The order is a follows:
       * DEBUG < VERBOSE < INFO < WARN < ERROR
       *
       * All of the log types above the current log level will be captured (i.e. if
       * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
       * `VERBOSE` logs will not)
       */
      var LogLevel;
      (function (LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["WARN"] = 3] = "WARN";
        LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
        LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
      })(LogLevel || (LogLevel = {}));
      const levelStringToEnum = {
        'debug': LogLevel.DEBUG,
        'verbose': LogLevel.VERBOSE,
        'info': LogLevel.INFO,
        'warn': LogLevel.WARN,
        'error': LogLevel.ERROR,
        'silent': LogLevel.SILENT
      };
      /**
       * The default log level
       */
      const defaultLogLevel = LogLevel.INFO;
      /**
       * By default, `console.debug` is not displayed in the developer console (in
       * chrome). To avoid forcing users to have to opt-in to these logs twice
       * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
       * logs to the `console.log` function.
       */
      const ConsoleMethod = {
        [LogLevel.DEBUG]: 'log',
        [LogLevel.VERBOSE]: 'log',
        [LogLevel.INFO]: 'info',
        [LogLevel.WARN]: 'warn',
        [LogLevel.ERROR]: 'error'
      };
      /**
       * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
       * messages on to their corresponding console counterparts (if the log method
       * is supported by the current log level)
       */
      const defaultLogHandler = function (instance, logType) {
        if (logType < instance.logLevel) {
          return;
        }
        const now = new Date().toISOString();
        const method = ConsoleMethod[logType];
        if (method) {
          for (var _len8 = arguments.length, args = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
            args[_key8 - 2] = arguments[_key8];
          }
          console[method](`[${now}]  ${instance.name}:`, ...args);
        } else {
          throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
        }
      };
      class Logger {
        /**
         * Gives you an instance of a Logger to capture messages according to
         * Firebase's logging scheme.
         *
         * @param name The name that the logs will be associated with
         */
        constructor(name) {
          this.name = name;
          /**
           * The log level of the given Logger instance.
           */
          this._logLevel = defaultLogLevel;
          /**
           * The main (internal) log handler for the Logger instance.
           * Can be set to a new function in internal package code but not by user.
           */
          this._logHandler = defaultLogHandler;
          /**
           * The optional, additional, user-defined log handler for the Logger instance.
           */
          this._userLogHandler = null;
          /**
           * Capture the current instance for later use
           */
          instances.push(this);
        }
        get logLevel() {
          return this._logLevel;
        }
        set logLevel(val) {
          if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
          }
          this._logLevel = val;
        }
        // Workaround for setter/getter having to be the same type.
        setLogLevel(val) {
          this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
        }
        get logHandler() {
          return this._logHandler;
        }
        set logHandler(val) {
          if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
          }
          this._logHandler = val;
        }
        get userLogHandler() {
          return this._userLogHandler;
        }
        set userLogHandler(val) {
          this._userLogHandler = val;
        }
        /**
         * The functions below are all based on the `console` interface
         */
        debug() {
          for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }
          this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
          this._logHandler(this, LogLevel.DEBUG, ...args);
        }
        log() {
          for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
          }
          this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
          this._logHandler(this, LogLevel.VERBOSE, ...args);
        }
        info() {
          for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
          }
          this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
          this._logHandler(this, LogLevel.INFO, ...args);
        }
        warn() {
          for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            args[_key12] = arguments[_key12];
          }
          this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
          this._logHandler(this, LogLevel.WARN, ...args);
        }
        error() {
          for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
            args[_key13] = arguments[_key13];
          }
          this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
          this._logHandler(this, LogLevel.ERROR, ...args);
        }
      }
      function setLogLevel(level) {
        instances.forEach(inst => {
          inst.setLogLevel(level);
        });
      }
      function setUserLogHandler(logCallback, options) {
        for (const instance of instances) {
          let customLogLevel = null;
          if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
          }
          if (logCallback === null) {
            instance.userLogHandler = null;
          } else {
            instance.userLogHandler = function (instance, level) {
              for (var _len14 = arguments.length, args = new Array(_len14 > 2 ? _len14 - 2 : 0), _key14 = 2; _key14 < _len14; _key14++) {
                args[_key14 - 2] = arguments[_key14];
              }
              const message = args.map(arg => {
                if (arg == null) {
                  return null;
                } else if (typeof arg === 'string') {
                  return arg;
                } else if (typeof arg === 'number' || typeof arg === 'boolean') {
                  return arg.toString();
                } else if (arg instanceof Error) {
                  return arg.message;
                } else {
                  try {
                    return JSON.stringify(arg);
                  } catch (ignored) {
                    return null;
                  }
                }
              }).filter(arg => arg).join(' ');
              if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                logCallback({
                  level: LogLevel[level].toLowerCase(),
                  message,
                  args,
                  type: instance.name
                });
              }
            };
          }
        }
      }

      /***/
    },

    /***/"./node_modules/firebase/analytics/dist/esm/index.esm.js":
    /*!***************************************************************!*\
      !*** ./node_modules/firebase/analytics/dist/esm/index.esm.js ***!
      \***************************************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"getAnalytics": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.getAnalytics,
        /* harmony export */"getGoogleAnalyticsClientId": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.getGoogleAnalyticsClientId,
        /* harmony export */"initializeAnalytics": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.initializeAnalytics,
        /* harmony export */"isSupported": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.isSupported,
        /* harmony export */"logEvent": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.logEvent,
        /* harmony export */"setAnalyticsCollectionEnabled": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setAnalyticsCollectionEnabled,
        /* harmony export */"setConsent": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setConsent,
        /* harmony export */"setCurrentScreen": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setCurrentScreen,
        /* harmony export */"setDefaultEventParameters": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setDefaultEventParameters,
        /* harmony export */"setUserId": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setUserId,
        /* harmony export */"setUserProperties": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setUserProperties,
        /* harmony export */"settings": () => /* reexport safe */_firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.settings
        /* harmony export */
      });
      /* harmony import */
      var _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @firebase/analytics */"./node_modules/@firebase/analytics/dist/esm/index.esm2017.js");

      /***/
    },

    /***/"./node_modules/firebase/app/dist/esm/index.esm.js":
    /*!*********************************************************!*\
      !*** ./node_modules/firebase/app/dist/esm/index.esm.js ***!
      \*********************************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"FirebaseError": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError,
        /* harmony export */"SDK_VERSION": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION,
        /* harmony export */"_DEFAULT_ENTRY_NAME": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME,
        /* harmony export */"_addComponent": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent,
        /* harmony export */"_addOrOverwriteComponent": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent,
        /* harmony export */"_apps": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps,
        /* harmony export */"_clearComponents": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents,
        /* harmony export */"_components": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__._components,
        /* harmony export */"_getProvider": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider,
        /* harmony export */"_registerComponent": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent,
        /* harmony export */"_removeServiceInstance": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance,
        /* harmony export */"deleteApp": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp,
        /* harmony export */"getApp": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp,
        /* harmony export */"getApps": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps,
        /* harmony export */"initializeApp": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp,
        /* harmony export */"onLog": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog,
        /* harmony export */"registerVersion": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion,
        /* harmony export */"setLogLevel": () => /* reexport safe */_firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel
        /* harmony export */
      });
      /* harmony import */
      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @firebase/app */"./node_modules/@firebase/app/dist/esm/index.esm2017.js");
      var name = "firebase";
      var version = "9.22.1";

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      (0, _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');

      /***/
    },

    /***/"./node_modules/idb/build/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/idb/build/index.js ***!
      \*****************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"deleteDB": () => /* binding */deleteDB,
        /* harmony export */"openDB": () => /* binding */openDB,
        /* harmony export */"unwrap": () => /* reexport safe */_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u,
        /* harmony export */"wrap": () => /* reexport safe */_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w
        /* harmony export */
      });
      /* harmony import */
      var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./wrap-idb-value.js */"./node_modules/idb/build/wrap-idb-value.js");

      /**
       * Open a database.
       *
       * @param name Name of the database.
       * @param version Schema version.
       * @param callbacks Additional callbacks.
       */
      function openDB(name, version) {
        let {
          blocked,
          upgrade,
          blocking,
          terminated
        } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        const request = indexedDB.open(name, version);
        const openPromise = (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
        if (upgrade) {
          request.addEventListener('upgradeneeded', event => {
            upgrade((0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);
          });
        }
        if (blocked) {
          request.addEventListener('blocked', event => blocked(
          // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
          event.oldVersion, event.newVersion, event));
        }
        openPromise.then(db => {
          if (terminated) db.addEventListener('close', () => terminated());
          if (blocking) {
            db.addEventListener('versionchange', event => blocking(event.oldVersion, event.newVersion, event));
          }
        }).catch(() => {});
        return openPromise;
      }
      /**
       * Delete a database.
       *
       * @param name Name of the database.
       */
      function deleteDB(name) {
        let {
          blocked
        } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const request = indexedDB.deleteDatabase(name);
        if (blocked) {
          request.addEventListener('blocked', event => blocked(
          // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
          event.oldVersion, event));
        }
        return (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
      }
      const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
      const writeMethods = ['put', 'add', 'delete', 'clear'];
      const cachedMethods = new Map();
      function getMethod(target, prop) {
        if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
          return;
        }
        if (cachedMethods.get(prop)) return cachedMethods.get(prop);
        const targetFuncName = prop.replace(/FromIndex$/, '');
        const useIndex = prop !== targetFuncName;
        const isWrite = writeMethods.includes(targetFuncName);
        if (
        // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
        !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
          return;
        }
        const method = async function (storeName) {
          // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
          const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
          let target = tx.store;
          for (var _len15 = arguments.length, args = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
            args[_key15 - 1] = arguments[_key15];
          }
          if (useIndex) target = target.index(args.shift());
          // Must reject if op rejects.
          // If it's a write operation, must reject if tx.done rejects.
          // Must reject with op rejection first.
          // Must resolve with op value.
          // Must handle both promises (no unhandled rejections)
          return (await Promise.all([target[targetFuncName](...args), isWrite && tx.done]))[0];
        };
        cachedMethods.set(prop, method);
        return method;
      }
      (0, _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)(oldTraps => ({
        ...oldTraps,
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
      }));

      /***/
    },

    /***/"./node_modules/idb/build/wrap-idb-value.js":
    /*!**************************************************!*\
      !*** ./node_modules/idb/build/wrap-idb-value.js ***!
      \**************************************************/
    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"a": () => /* binding */reverseTransformCache,
        /* harmony export */"i": () => /* binding */instanceOfAny,
        /* harmony export */"r": () => /* binding */replaceTraps,
        /* harmony export */"u": () => /* binding */unwrap,
        /* harmony export */"w": () => /* binding */wrap
        /* harmony export */
      });
      const instanceOfAny = (object, constructors) => constructors.some(c => object instanceof c);
      let idbProxyableTypes;
      let cursorAdvanceMethods;
      // This is a function to prevent it throwing up in node environments.
      function getIdbProxyableTypes() {
        return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
      }
      // This is a function to prevent it throwing up in node environments.
      function getCursorAdvanceMethods() {
        return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]);
      }
      const cursorRequestMap = new WeakMap();
      const transactionDoneMap = new WeakMap();
      const transactionStoreNamesMap = new WeakMap();
      const transformCache = new WeakMap();
      const reverseTransformCache = new WeakMap();
      function promisifyRequest(request) {
        const promise = new Promise((resolve, reject) => {
          const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
          };
          const success = () => {
            resolve(wrap(request.result));
            unlisten();
          };
          const error = () => {
            reject(request.error);
            unlisten();
          };
          request.addEventListener('success', success);
          request.addEventListener('error', error);
        });
        promise.then(value => {
          // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
          // (see wrapFunction).
          if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
          }
          // Catching to avoid "Uncaught Promise exceptions"
        }).catch(() => {});
        // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
        // is because we create many promises from a single IDBRequest.
        reverseTransformCache.set(promise, request);
        return promise;
      }
      function cacheDonePromiseForTransaction(tx) {
        // Early bail if we've already created a done promise for this transaction.
        if (transactionDoneMap.has(tx)) return;
        const done = new Promise((resolve, reject) => {
          const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
          };
          const complete = () => {
            resolve();
            unlisten();
          };
          const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
          };
          tx.addEventListener('complete', complete);
          tx.addEventListener('error', error);
          tx.addEventListener('abort', error);
        });
        // Cache it for later retrieval.
        transactionDoneMap.set(tx, done);
      }
      let idbProxyTraps = {
        get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done') return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
              return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
              return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
            }
          }
          // Else transform whatever we get back.
          return wrap(target[prop]);
        },
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        has(target, prop) {
          if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
            return true;
          }
          return prop in target;
        }
      };
      function replaceTraps(callback) {
        idbProxyTraps = callback(idbProxyTraps);
      }
      function wrapFunction(func) {
        // Due to expected object equality (which is enforced by the caching in `wrap`), we
        // only create one new func per func.
        // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
        if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
          return function (storeNames) {
            for (var _len16 = arguments.length, args = new Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
              args[_key16 - 1] = arguments[_key16];
            }
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
          };
        }
        // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
        // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
        // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
        // with real promises, so each advance methods returns a new promise for the cursor object, or
        // undefined if the end of the cursor has been reached.
        if (getCursorAdvanceMethods().includes(func)) {
          return function () {
            for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
              args[_key17] = arguments[_key17];
            }
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
          };
        }
        return function () {
          for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
            args[_key18] = arguments[_key18];
          }
          // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
          // the original object.
          return wrap(func.apply(unwrap(this), args));
        };
      }
      function transformCachableValue(value) {
        if (typeof value === 'function') return wrapFunction(value);
        // This doesn't return, it just creates a 'done' promise for the transaction,
        // which is later returned for transaction.done (see idbObjectHandler).
        if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
        if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
        // Return the same value back if we're not going to transform it.
        return value;
      }
      function wrap(value) {
        // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
        // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
        if (value instanceof IDBRequest) return promisifyRequest(value);
        // If we've already transformed this value before, reuse the transformed value.
        // This is faster, but it also provides object equality.
        if (transformCache.has(value)) return transformCache.get(value);
        const newValue = transformCachableValue(value);
        // Not all types are transformed.
        // These may be primitive types, so they can't be WeakMap keys.
        if (newValue !== value) {
          transformCache.set(value, newValue);
          reverseTransformCache.set(newValue, value);
        }
        return newValue;
      }
      const unwrap = value => reverseTransformCache.get(value);

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/async module */
  /******/
  (() => {
    /******/var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
    /******/
    var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
    /******/
    var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
    /******/
    var resolveQueue = queue => {
      /******/if (queue && !queue.d) {
        /******/queue.d = 1;
        /******/
        queue.forEach(fn => fn.r--);
        /******/
        queue.forEach(fn => fn.r-- ? fn.r++ : fn());
        /******/
      }
      /******/
    };
    /******/
    var wrapDeps = deps => deps.map(dep => {
      /******/if (dep !== null && typeof dep === "object") {
        /******/if (dep[webpackQueues]) return dep;
        /******/
        if (dep.then) {
          /******/var queue = [];
          /******/
          queue.d = 0;
          /******/
          dep.then(r => {
            /******/obj[webpackExports] = r;
            /******/
            resolveQueue(queue);
            /******/
          }, e => {
            /******/obj[webpackError] = e;
            /******/
            resolveQueue(queue);
            /******/
          });
          /******/
          var obj = {};
          /******/
          obj[webpackQueues] = fn => fn(queue);
          /******/
          return obj;
          /******/
        }
        /******/
      }
      /******/
      var ret = {};
      /******/
      ret[webpackQueues] = x => {};
      /******/
      ret[webpackExports] = dep;
      /******/
      return ret;
      /******/
    });
    /******/
    __webpack_require__.a = (module, body, hasAwait) => {
      /******/var queue;
      /******/
      hasAwait && ((queue = []).d = 1);
      /******/
      var depQueues = new Set();
      /******/
      var exports = module.exports;
      /******/
      var currentDeps;
      /******/
      var outerResolve;
      /******/
      var reject;
      /******/
      var promise = new Promise((resolve, rej) => {
        /******/reject = rej;
        /******/
        outerResolve = resolve;
        /******/
      });
      /******/
      promise[webpackExports] = exports;
      /******/
      promise[webpackQueues] = fn => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
      /******/
      module.exports = promise;
      /******/
      body(deps => {
        /******/currentDeps = wrapDeps(deps);
        /******/
        var fn;
        /******/
        var getResult = () => currentDeps.map(d => {
          /******/if (d[webpackError]) throw d[webpackError];
          /******/
          return d[webpackExports];
          /******/
        });
        /******/
        var promise = new Promise(resolve => {
          /******/fn = () => resolve(getResult);
          /******/
          fn.r = 0;
          /******/
          var fnQueue = q => q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn)));
          /******/
          currentDeps.map(dep => dep[webpackQueues](fnQueue));
          /******/
        });
        /******/
        return fn.r ? promise : getResult();
        /******/
      }, err => (err ? reject(promise[webpackError] = err) : outerResolve(exports), resolveQueue(queue)));
      /******/
      queue && (queue.d = 0);
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/
  (() => {
    /******/ // define getter functions for harmony exports
    /******/__webpack_require__.d = (exports, definition) => {
      /******/for (var key in definition) {
        /******/if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/
  (() => {
    /******/__webpack_require__.g = function () {
      /******/if (typeof globalThis === 'object') return globalThis;
      /******/
      try {
        /******/return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/if (typeof window === 'object') return window;
        /******/
      }
      /******/
    }();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (() => {
    /******/__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  (() => {
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = exports => {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/
  (() => {
    /******/var scriptUrl;
    /******/
    if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    /******/
    var document = __webpack_require__.g.document;
    /******/
    if (!scriptUrl && document) {
      /******/if (document.currentScript) /******/scriptUrl = document.currentScript.src;
      /******/
      if (!scriptUrl) {
        /******/var scripts = document.getElementsByTagName("script");
        /******/
        if (scripts.length) {
          /******/var i = scripts.length - 1;
          /******/
          while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/
    if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    /******/
    scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    /******/
    __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/
  __webpack_require__("./src/index.js");
  /******/
  var __webpack_exports__ = __webpack_require__("./src/sass/styles.scss");
  /******/
  /******/
})();