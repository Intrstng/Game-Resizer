/******/(() => {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/"./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/
    () => {
      throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Projects\\Game\\src\\index.js: Identifier 'audio' has already been declared. (72:9)\n\n  70 | import { keys, keyDownHandler, keyUpHandler } from './js/Keys';\n  71 | import { AdditionalElements } from './js/AdditionalElements';\n> 72 | import { audio } from './js/data/Audio';\n     |          ^\n  73 |\n  74 |\n  75 | canvas.width = 1024 // 1280 //window.innerWidth; // canvas.width = innerWidth;\n    at instantiate (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:946:12)\n    at Parser.raise (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:3270:19)\n    at ScopeHandler.checkRedeclarationInScope (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:1556:19)\n    at ScopeHandler.declareName (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:1527:12)\n    at Parser.declareNameFromIdentifier (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:7544:16)\n    at Parser.checkIdentifier (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:7540:12)\n    at Parser.checkLVal (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:7479:12)\n    at Parser.finishImportSpecifier (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:14073:10)\n    at Parser.parseImportSpecifier (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:14221:17)\n    at Parser.parseNamedImportSpecifiers (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:14199:36)\n    at Parser.parseImport (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:14043:39)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12656:27)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)\n    at Parser.parseModuleItem (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12526:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13121:36)\n    at Parser.parseBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Parser.parseProgram (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12437:10)\n    at Parser.parseTopLevel (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12427:25)\n    at Parser.parse (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:14245:10)\n    at parse (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:14286:38)\n    at parser (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\parser\\index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\transformation\\index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (D:\\Projects\\Game\\node_modules\\gensync\\index.js:261:32)\n    at D:\\Projects\\Game\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (D:\\Projects\\Game\\node_modules\\gensync\\index.js:223:11)");

      /***/
    },

    /***/"./src/sass/styles.scss":
    /*!******************************!*\
      !*** ./src/sass/styles.scss ***!
      \******************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      // extracted by mini-css-extract-plugin

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The require scope
  /******/
  var __webpack_require__ = {};
  /******/
  /************************************************************************/
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
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module doesn't tell about it's top-level declarations so it can't be inlined
  /******/
  __webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
  /******/
  var __webpack_exports__ = {};
  /******/
  __webpack_modules__["./src/sass/styles.scss"](0, __webpack_exports__, __webpack_require__);
  /******/
  /******/
})();