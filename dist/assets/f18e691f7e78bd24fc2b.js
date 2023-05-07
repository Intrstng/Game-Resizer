/******/(() => {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/"./src/js/Assets.js":
    /*!**************************!*\
      !*** ./src/js/Assets.js ***!
      \**************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"backgroundImg": () => /* binding */backgroundImg,
        /* harmony export */"heroFallL": () => /* binding */heroFallL,
        /* harmony export */"heroFallR": () => /* binding */heroFallR,
        /* harmony export */"heroIdleL": () => /* binding */heroIdleL,
        /* harmony export */"heroIdleR": () => /* binding */heroIdleR,
        /* harmony export */"heroJumpL": () => /* binding */heroJumpL,
        /* harmony export */"heroJumpR": () => /* binding */heroJumpR,
        /* harmony export */"heroRunL": () => /* binding */heroRunL,
        /* harmony export */"heroRunR": () => /* binding */heroRunR,
        /* harmony export */"platformImgSrc300": () => /* binding */platformImgSrc300
        /* harmony export */
      });
      const platformImgSrc300 = '../assets/img/platform.png';
      const heroIdleR = '../assets/img/Idle_right.png';
      const heroIdleL = '../assets/img/Idle_left.png';
      const heroRunR = '../assets/img/Run_right.png';
      const heroRunL = '../assets/img/Run_left.png';
      const heroJumpR = '../assets/img/Jump_right.png';
      const heroJumpL = '../assets/img/Jump_left.png';
      const heroFallR = '../assets/img/Fall_right.png';
      const heroFallL = '../assets/img/Fall_left.png';
      const backgroundImg = '../assets/img/bg_2.jpg';

      // import platformImgSrc300 from '/assets/img/platform.png';
      // import heroIdleR from '/assets/img/Idle_right.png';
      // import heroIdleL from '/assets/img/Idle_left.png';
      // import heroRunR from '/assets/img/Run_right.png';
      // import heroRunL from '/assets/img/Run_left.png';
      // import heroJumpR from '/assets/img/Jump_right.png';
      // import heroJumpL from '/assets/img/Jump_left.png';
      // import heroFallR from '/assets/img/Fall_right.png';
      // import heroFallL from '/assets/img/Fall_left.png';
      // import backgroundImg from '/assets/img/bg_2.jpg';

      /***/
    },

    /***/"./src/js/Canvas.js":
    /*!**************************!*\
      !*** ./src/js/Canvas.js ***!
      \**************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"c": () => /* binding */c,
        /* harmony export */"canvas": () => /* binding */canvas,
        /* harmony export */"gravity": () => /* binding */gravity
        /* harmony export */
      });
      const canvas = document.getElementById('canvas');
      const c = canvas.getContext("2d");
      const gravity = 0.25;

      /***/
    },

    /***/"./src/js/CreateImage.js":
    /*!*******************************!*\
      !*** ./src/js/CreateImage.js ***!
      \*******************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"createImage": () => /* binding */createImage
        /* harmony export */
      });
      function createImage(src, width, height) {
        const image = new Image();
        image.src = src;
        image.width = width;
        image.height = height;
        return image;
      }

      /***/
    },

    /***/"./src/js/Keys.js":
    /*!************************!*\
      !*** ./src/js/Keys.js ***!
      \************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"keyDownHandler": () => /* binding */keyDownHandler,
        /* harmony export */"keyUpHandler": () => /* binding */keyUpHandler,
        /* harmony export */"keys": () => /* binding */keys
        /* harmony export */
      });
      /* harmony import */
      var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Player */"./src/js/Player.js");
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
        lastPressed: 'right'
      };
      const keyDownHandler = e => {
        if (e.repeat == false) {
          switch (e.code) {
            case 'ArrowUp':
              if (_Player__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y === 0 && keys.lastPressed === 'right') {
                // player.velocity.y === 0 - только один прыжок при нескольких нажатиях на UP
                _Player__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y -= 10;
                _Player__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _Player__WEBPACK_IMPORTED_MODULE_0__.player.sprites.jump.right;
              } else if (_Player__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y === 0 && keys.lastPressed === 'left') {
                // player.velocity.y === 0 - только один прыжок при нескольких нажатиях на UP
                _Player__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y -= 10;
                _Player__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _Player__WEBPACK_IMPORTED_MODULE_0__.player.sprites.jump.left;
              }
              break;

              // case 'Space': {
              //   console.log('dd')
              //   platforms.splice(1,1);
              // }
              break;
            case 'ArrowRight':
              {
                keys.right.pressed = true;
                keys.lastPressed = 'right';
                _Player__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _Player__WEBPACK_IMPORTED_MODULE_0__.player.sprites.run.right;
              }
              break;
            case 'ArrowLeft':
              {
                keys.left.pressed = true;
                keys.lastPressed = 'left';
                _Player__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _Player__WEBPACK_IMPORTED_MODULE_0__.player.sprites.run.left;
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
              keys.up.pressed = true;
              if (_Player__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y !== 0 && keys.lastPressed === 'right') {
                _Player__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _Player__WEBPACK_IMPORTED_MODULE_0__.player.sprites.fall.right;
              } else if (_Player__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y !== 0 && keys.lastPressed === 'left') {
                _Player__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _Player__WEBPACK_IMPORTED_MODULE_0__.player.sprites.fall.left;
              }
              break;
            // case 'ArrowDown': player.velocity.y = 0
            //   break;
            case 'ArrowRight':
              {
                keys.right.pressed = false;
                _Player__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _Player__WEBPACK_IMPORTED_MODULE_0__.player.sprites.idle.right;
              }
              break;
            case 'ArrowLeft':
              {
                keys.left.pressed = false;
                _Player__WEBPACK_IMPORTED_MODULE_0__.player.currentSprite = _Player__WEBPACK_IMPORTED_MODULE_0__.player.sprites.idle.left;
              }
              break;
          }
        }
      };

      /***/
    },

    /***/"./src/js/Platform.js":
    /*!****************************!*\
      !*** ./src/js/Platform.js ***!
      \****************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"Platform": () => /* binding */Platform
        /* harmony export */
      });
      /* harmony import */
      var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Canvas */"./src/js/Canvas.js");
      class Platform {
        constructor(posX, posY, image) {
          this.position = {
            x: posX,
            y: posY
          };
          this.image = image;
          this.width = image.width;
          this.height = image.height;
        }
        draw() {
          _Canvas__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.image, this.position.x, this.position.y);
          // c.fillStyle = ('green');
          // c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
      }

      /***/
    },

    /***/"./src/js/Player.js":
    /*!**************************!*\
      !*** ./src/js/Player.js ***!
      \**************************/
    /***/
    () => {
      throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Projects\\Game\\src\\js\\Player.js: `player` has already been exported. Exported identifiers must be unique. (75:17)\n\n\u001b[0m \u001b[90m 73 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mlet\u001b[39m player \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mPlayer\u001b[39m()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 74 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 75 |\u001b[39m \u001b[36mexport\u001b[39m { \u001b[33mPlayer\u001b[39m\u001b[33m,\u001b[39m player }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at instantiate (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:946:12)\n    at Parser.raise (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:3270:19)\n    at Parser.checkDuplicateExports (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13908:14)\n    at Parser.checkExport (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13850:16)\n    at Parser.parseExport (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13651:12)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12661:27)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)\n    at Parser.parseModuleItem (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12526:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13121:36)\n    at Parser.parseBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Parser.parseProgram (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12437:10)\n    at Parser.parseTopLevel (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12427:25)\n    at Parser.parse (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:14245:10)\n    at parse (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:14286:38)\n    at parser (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\parser\\index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\transformation\\index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (D:\\Projects\\Game\\node_modules\\gensync\\index.js:261:32)\n    at D:\\Projects\\Game\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (D:\\Projects\\Game\\node_modules\\gensync\\index.js:223:11)");

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
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";

    var __webpack_exports__ = {};
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _js_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./js/Canvas */"./src/js/Canvas.js");
    /* harmony import */
    var _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./js/CreateImage */"./src/js/CreateImage.js");
    /* harmony import */
    var _js_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./js/Player */"./src/js/Player.js");
    /* harmony import */
    var _js_Platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./js/Platform */"./src/js/Platform.js");
    /* harmony import */
    var _js_Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./js/Assets */"./src/js/Assets.js");
    /* harmony import */
    var _js_Keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./js/Keys */"./src/js/Keys.js");
    // import './sass/styles.scss';

    // imagePlatform.onload = function getSizes () {
    //   imagePlatform.width = imagePlatform.naturalWidth;
    //   imagePlatform.height = imagePlatform.naturalHeight;
    //}

    _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width = 1024; //window.innerWidth; // canvas.width = innerWidth;
    _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height = 576; //window.innerHeight;

    class AdditionalElements {
      constructor(posX, posY, image) {
        this.position = {
          x: posX,
          y: posY
        };
        this.image = image;
        this.width = image.width;
        this.height = image.height;
      }
      draw() {
        _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.image, this.position.x, this.position.y);
        // c.fillStyle = ('green');
        // c.fillRect(this.position.x, this.position.y, this.width, this.height);
      }
    }

    let additionalElements = [new AdditionalElements(0, 0, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height))];
    let platforms = [new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(10, 525, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54)), new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(300, 455, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54)), new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(250, 400, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54)), new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(400, 200, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54))]; // создаем платформы

    // let player = new Player();

    function init() {
      additionalElements = [new AdditionalElements(0, 0, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height))];
      platforms = [new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(10, 525, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54)), new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(300, 455, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54)), new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(250, 400, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54)), new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(400, 200, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54))]; // создаем платформы
      _js_Player__WEBPACK_IMPORTED_MODULE_2__.player = new _js_Player__WEBPACK_IMPORTED_MODULE_2__.Player();
    }
    function animate() {
      requestAnimationFrame(animate);
      //c.clearRect(0, 0, canvas.width, canvas.height);
      _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.c.fillStyle = 'white';
      _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.c.fillRect(0, 0, _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height);
      console.log('animation counter');
      additionalElements.forEach(element => element.draw());
      platforms.forEach(platform => platform.draw()); // рисуем платформы
      _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.update();
      if (_js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.right.pressed && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.x + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.width <= _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width) {
        // упор персонажа в правый край экрана
        _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.x = 2;
      } else if (_js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.left.pressed && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.x >= 0) {
        // упор персонажа в левый край экрана
        _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.x = -2;
      } else {
        _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.x = 0;
      }
      platforms.forEach(platform => {
        // Player - platform collision (player is above the platform)
        if (_js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.height <= platform.position.y && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.height + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.y >= platform.position.y &&
        // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
        // Player - platform collision (player on the platform - inside of left and right platform boundaries)
        _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.x + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.width >= platform.position.x + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.width / 3 &&
        // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
        _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.x <= platform.position.x + platform.width - _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.width / 3) {
          _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.y = 0; // если касается земли
        }
        // Player - platform collision (player is under the platform)
        if (_js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y <= platform.position.y + platform.height && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.height + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.y >= platform.position.y && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.x >= platform.position.x - _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.width / 2 &&
        // можно сделать 1.75
        _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.x + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.width <= platform.position.x + platform.width + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.width / 2) {
          _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.y = 1; /* player.currentSprite = player.sprites.idle.right */
        }
        // Player - platform collision (player is left from the platform and moves right)
        if (_js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.right.pressed && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.height >= platform.position.y && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y <= platform.position.y + platform.height && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.x + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.width >= platform.position.x) {
          _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.x = 0;
          console.log('hit!');
        } // Continue: Player - platform collision (player holds right and is right from the platform - so he cans move)
        if (_js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.right.pressed && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.height >= platform.position.y && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y <= platform.position.y + platform.height && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.x + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.width >= platform.position.x + platform.width) {
          _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.x = 2;
          console.log('free!');
        }
        // Player - platform collision (player is right from the platform and moves left)
        if (_js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.left.pressed && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.height >= platform.position.y && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y <= platform.position.y + platform.height && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.x <= platform.position.x + platform.width) {
          _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.x = 0;
          console.log('hit!');
        } // Continue: Player - platform collision (player holds left and is left from the platform - so he cans move)
        if (_js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.left.pressed && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.height >= platform.position.y && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y <= platform.position.y + platform.height && _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.x + _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.width <= platform.position.x) {
          // или "-" player.width ???
          _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.x = -2;
          console.log('free!');
        }
      });
      if (_js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.y === 10 && !_js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.lastPressed === 'right') {
        // 10 - когда персонаж на земле
        _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.currentSprite = _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.sprites.idle.right;
      } else if (_js_Player__WEBPACK_IMPORTED_MODULE_2__.player.velocity.y === 10 && !_js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_5__.keys.lastPressed === 'left') {
        // 10 - когда персонаж на земле
        _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.currentSprite = _js_Player__WEBPACK_IMPORTED_MODULE_2__.player.sprites.idle.left;
      }

      // Падение в пропасть (см. комментарии в player.update())
      if (_js_Player__WEBPACK_IMPORTED_MODULE_2__.player.position.y > _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height) {
        init();
        console.log('you lose');
        // сюда вставить звук проигрыша
      }
    }

    init();
    animate();
    window.addEventListener('keydown', _js_Keys__WEBPACK_IMPORTED_MODULE_5__.keyDownHandler);
    window.addEventListener('keyup', _js_Keys__WEBPACK_IMPORTED_MODULE_5__.keyUpHandler);
  })();

  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";

    /*!******************************!*\
      !*** ./src/sass/styles.scss ***!
      \******************************/
    __webpack_require__.r(__webpack_exports__);
    // extracted by mini-css-extract-plugin
  })();

  /******/
})();