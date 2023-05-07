/******/(() => {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/"./src/js/Assets.js":
    /*!**************************!*\
      !*** ./src/js/Assets.js ***!
      \**************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* empty/unused harmony star reexport */
      /* empty/unused harmony star reexport */
      /* empty/unused harmony star reexport */
      /* empty/unused harmony star reexport */
      /* empty/unused harmony star reexport */
      /* empty/unused harmony star reexport */
      /* empty/unused harmony star reexport */
      /* empty/unused harmony star reexport */
      /* empty/unused harmony star reexport */
      /* empty/unused harmony star reexport */
      Object(function webpackMissingModule() {
        var e = new Error("Cannot find module '../assets/img/platform.png'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }());
      Object(function webpackMissingModule() {
        var e = new Error("Cannot find module '../assets/img/Idle_right.png'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }());
      Object(function webpackMissingModule() {
        var e = new Error("Cannot find module '../assets/img/Idle_left.png'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }());
      Object(function webpackMissingModule() {
        var e = new Error("Cannot find module '../assets/img/Run_right.png'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }());
      Object(function webpackMissingModule() {
        var e = new Error("Cannot find module '../assets/img/Run_left.png'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }());
      Object(function webpackMissingModule() {
        var e = new Error("Cannot find module '../assets/img/Jump_right.png'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }());
      Object(function webpackMissingModule() {
        var e = new Error("Cannot find module '../assets/img/Jump_left.png'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }());
      Object(function webpackMissingModule() {
        var e = new Error("Cannot find module '../assets/img/Fall_right.png'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }());
      Object(function webpackMissingModule() {
        var e = new Error("Cannot find module '../assets/img/Fall_left.png'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }());
      Object(function webpackMissingModule() {
        var e = new Error("Cannot find module '../assets/img/bg_2.jpg'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }());
      // const platformImgSrc300 = '../assets/img/platform.png';
      // const heroIdleR = '../assets/img/Idle_right.png';
      // const heroIdleL = '../assets/img/Idle_left.png';
      // const heroRunR = '../assets/img/Run_right.png';
      // const heroRunL = '../assets/img/Run_left.png';
      // const heroJumpR = '../assets/img/Jump_right.png';
      // const heroJumpL = '../assets/img/Jump_left.png';
      // const heroFallR = '../assets/img/Fall_right.png';
      // const heroFallL = '../assets/img/Fall_left.png';
      // const backgroundImg = '../assets/img/bg_2.jpg';

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

    /***/"./src/js/Platform.js":
    /*!****************************!*\
      !*** ./src/js/Platform.js ***!
      \****************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"Player": () => /* binding */Player
        /* harmony export */
      });
      /* harmony import */
      var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Canvas */"./src/js/Canvas.js");
      /* harmony import */
      var _CreateImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./CreateImage */"./src/js/CreateImage.js");
      /* harmony import */
      var _js_Assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../js/Assets */"./src/js/Assets.js");
      class Player {
        constructor() {
          this.position = {
            x: 200,
            y: _Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height / 2
          };
          this.velocity = {
            x: 0,
            y: 1
          };
          this.width = 32;
          this.height = 32;

          //this.image = createImage(heroIdleR, 32, 32);
          this.frames = 0;
          this.sprites = {
            idle: {
              right: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_2__.heroIdleR, 32, 32),
              left: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_2__.heroIdleL, 32, 32)
            },
            run: {
              right: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_2__.heroRunR, 32, 32),
              left: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_2__.heroRunL, 32, 32)
            },
            jump: {
              right: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_2__.heroJumpR, 32, 32),
              left: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_2__.heroJumpL, 32, 32)
            },
            fall: {
              right: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_2__.heroFallR, 32, 32),
              left: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_2__.heroFallL, 32, 32)
            }
          };
          this.currentSprite = this.sprites.idle.right;
        }
        draw() {
          // c.fillStyle = ('red');
          // c.fillRect(this.position.x, this.position.y, this.width, this.height);
          _Canvas__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.currentSprite, 32 * this.frames, 0, 32, 32, this.position.x, this.position.y, this.width, this.height); // 0, 0, 32, 32 - player sprite crop (x, y, w, h)
        }

        update() {
          this.frames++;
          if (this.frames > 21) this.frames = 0;
          this.draw();
          this.position.y += this.velocity.y;
          this.position.x += this.velocity.x;
          if (this.position.y + this.height + this.velocity.y <= _Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height) {
            this.velocity.y += _Canvas__WEBPACK_IMPORTED_MODULE_0__.gravity;
          }
          // else { // если это оставить персонаж не покинет экран при касании нижней границы экрана
          //   this.velocity.y = 0;
          // }
        }
      }

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
  // This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
  (() => {
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
    // import './sass/styles.scss';

    // imagePlatform.onload = function getSizes () {
    //   imagePlatform.width = imagePlatform.naturalWidth;
    //   imagePlatform.height = imagePlatform.naturalHeight;
    //}

    // import backgroundImg from '../assets/img/bg_2.jpg'

    // const Player = require('./js/Player');
    // const Platform = require('./js/Platform');

    console.log(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.backgroundImg);
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

    let player = new _js_Player__WEBPACK_IMPORTED_MODULE_2__.Player();
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
    function init() {
      additionalElements = [new AdditionalElements(0, 0, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height))];
      platforms = [new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(10, 525, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54)), new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(300, 455, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54)), new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(250, 400, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54)), new _js_Platform__WEBPACK_IMPORTED_MODULE_3__.Platform(400, 200, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.platformImgSrc300, 300, 54))]; // создаем платформы
      player = new _js_Player__WEBPACK_IMPORTED_MODULE_2__.Player();
    }
    function animate() {
      requestAnimationFrame(animate);
      //c.clearRect(0, 0, canvas.width, canvas.height);
      _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.c.fillStyle = 'white';
      _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.c.fillRect(0, 0, _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height);
      console.log('animation counter');
      additionalElements.forEach(element => element.draw());
      platforms.forEach(platform => platform.draw()); // рисуем платформы
      player.update();
      if (keys.right.pressed && player.position.x + player.width <= _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width) {
        // упор персонажа в правый край экрана
        player.velocity.x = 2;
      } else if (keys.left.pressed && player.position.x >= 0) {
        // упор персонажа в левый край экрана
        player.velocity.x = -2;
      } else {
        player.velocity.x = 0;
      }
      platforms.forEach(platform => {
        // Player - platform collision (player is above the platform)
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y &&
        // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
        // Player - platform collision (player on the platform - inside of left and right platform boundaries)
        player.position.x + player.width >= platform.position.x + player.width / 3 &&
        // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
        player.position.x <= platform.position.x + platform.width - player.width / 3) {
          player.velocity.y = 0; // если касается земли
        }
        // Player - platform collision (player is under the platform)
        if (player.position.y <= platform.position.y + platform.height && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x >= platform.position.x - player.width / 2 &&
        // можно сделать 1.75
        player.position.x + player.width <= platform.position.x + platform.width + player.width / 2) {
          player.velocity.y = 1; /* player.currentSprite = player.sprites.idle.right */
        }
        // Player - platform collision (player is left from the platform and moves right)
        if (keys.right.pressed && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x) {
          player.velocity.x = 0;
          console.log('hit!');
        } // Continue: Player - platform collision (player holds right and is right from the platform - so he cans move)
        if (keys.right.pressed && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x + platform.width) {
          player.velocity.x = 2;
          console.log('free!');
        }
        // Player - platform collision (player is right from the platform and moves left)
        if (keys.left.pressed && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height && player.position.x <= platform.position.x + platform.width) {
          player.velocity.x = 0;
          console.log('hit!');
        } // Continue: Player - platform collision (player holds left and is left from the platform - so he cans move)
        if (keys.left.pressed && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height && player.position.x + player.width <= platform.position.x) {
          // или "-" player.width ???
          player.velocity.x = -2;
          console.log('free!');
        }
      });
      if (player.velocity.y === 10 && !keys.right.pressed && !keys.left.pressed && keys.lastPressed === 'right') {
        // 10 - когда персонаж на земле
        player.currentSprite = player.sprites.idle.right;
      } else if (player.velocity.y === 10 && !keys.right.pressed && !keys.left.pressed && keys.lastPressed === 'left') {
        // 10 - когда персонаж на земле
        player.currentSprite = player.sprites.idle.left;
      }

      // Падение в пропасть (см. комментарии в player.update())
      if (player.position.y > _js_Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height) {
        init();
        console.log('you lose');
        // сюда вставить звук проигрыша
      }
    }

    init();
    animate();
    window.addEventListener('keydown', event => {
      if (event.repeat == false) {
        switch (event.code) {
          case 'ArrowUp':
            if (player.velocity.y === 0 && keys.lastPressed === 'right') {
              // player.velocity.y === 0 - только один прыжок при нескольких нажатиях на UP
              player.velocity.y -= 10;
              player.currentSprite = player.sprites.jump.right;
            } else if (player.velocity.y === 0 && keys.lastPressed === 'left') {
              // player.velocity.y === 0 - только один прыжок при нескольких нажатиях на UP
              player.velocity.y -= 10;
              player.currentSprite = player.sprites.jump.left;
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
              player.currentSprite = player.sprites.run.right;
            }
            break;
          case 'ArrowLeft':
            {
              keys.left.pressed = true;
              keys.lastPressed = 'left';
              player.currentSprite = player.sprites.run.left;
            }
            break;
        }
      }
    });
    window.addEventListener('keyup', event => {
      if (event.repeat == false) {
        switch (event.code) {
          case 'ArrowUp':
            // player.velocity.y = 0;
            keys.up.pressed = true;
            if (player.velocity.y !== 0 && keys.lastPressed === 'right') {
              player.currentSprite = player.sprites.fall.right;
            } else if (player.velocity.y !== 0 && keys.lastPressed === 'left') {
              player.currentSprite = player.sprites.fall.left;
            }
            break;
          // case 'ArrowDown': player.velocity.y = 0
          //   break;
          case 'ArrowRight':
            {
              keys.right.pressed = false;
              player.currentSprite = player.sprites.idle.right;
            }
            break;
          case 'ArrowLeft':
            {
              keys.left.pressed = false;
              player.currentSprite = player.sprites.idle.left;
            }
            break;
        }
      }
    });
  })();

  // This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
  (() => {
    /*!******************************!*\
      !*** ./src/sass/styles.scss ***!
      \******************************/
    __webpack_require__.r(__webpack_exports__);
    // extracted by mini-css-extract-plugin
  })();

  /******/
})();