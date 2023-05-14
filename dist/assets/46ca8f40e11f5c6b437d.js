/******/(() => {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/"./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"additionalElements": () => /* binding */additionalElements,
        /* harmony export */"init": () => /* binding */init,
        /* harmony export */"player": () => /* binding */player
        /* harmony export */
      });
      /* harmony import */
      var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./sass/styles.scss */"./src/sass/styles.scss");
      /* harmony import */
      var _js_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./js/Canvas */"./src/js/Canvas.js");
      /* harmony import */
      var _js_CreateImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./js/CreateImage */"./src/js/CreateImage.js");
      /* harmony import */
      var _js_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./js/Player */"./src/js/Player.js");
      /* harmony import */
      var _js_Platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./js/Platform */"./src/js/Platform.js");
      /* harmony import */
      var _js_Assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./js/Assets */"./src/js/Assets.js");
      /* harmony import */
      var _js_Keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./js/Keys */"./src/js/Keys.js");
      /* harmony import */
      var _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./js/AdditionalElements */"./src/js/AdditionalElements.js");
      /* harmony import */
      var _js_data_collisions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./js/data/collisions */"./src/js/data/collisions.js");
      /* harmony import */
      var _js_Collision__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./js/Collision */"./src/js/Collision.js");

      // imagePlatform.onload = function getSizes () {
      //   imagePlatform.width = imagePlatform.naturalWidth;
      //   imagePlatform.height = imagePlatform.naturalHeight;
      //}

      _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.canvas.width = 1024; // 1280 //window.innerWidth; // canvas.width = innerWidth;
      _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.canvas.height = 576; // 720 //window.innerHeight;

      let additionalElements = [new _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_7__.AdditionalElements(0, 0, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_5__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.canvas.height))];

      // export let platforms = [/* new Platform(210, 525, createImage(platformSolid, 36, 36)),
      //                 new Platform(330, 455, createImage(platformSolid, 36, 36)),
      //                 new Platform(250, 400, createImage(platformSolid, 36, 36)),
      //                 new Platform(400, 100, createImage(platformSolid, 36, 36)) */]; // создаем платформы

      console.log(_js_Collision__WEBPACK_IMPORTED_MODULE_9__.platforms);
      let player = new _js_Player__WEBPACK_IMPORTED_MODULE_3__.Player({
        platforms: _js_Collision__WEBPACK_IMPORTED_MODULE_9__.platforms
      }); //collisionBlocks: collisionBlocks

      /* -------------------- */

      //let spikes = new PlatformSpikes(420, 135, createImage(spike, 36, 36))
      // let sawTrap = new Saw(400, 415, createImage(saw, 36, 36))
      // export let sawTrap = new Saw(560, 315, createImage(saw, 36, 36))
      // export let sawTrap2 = new OneStep(400, 455, createImage(platformOneStep, 36, 36))
      // export let jump = new JumpToggle(100, 355, createImage(platformOne, 36, 36))

      function init() {
        player.velocity.y = 1;
        _js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.spaceToggleCounter = 1;
        additionalElements = [new _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_7__.AdditionalElements(0, 0, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_5__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.canvas.height))];

        //   platforms = [/* new Platform(210, 455, createImage(platformSolid, 36, 36)),
        //           new Platform(230, 419, createImage(platformSolid, 36, 36)),
        // //new Platform(25, 420, createImage(platformSolid, 36, 36)),
        // new Platform(65, 420, createImage(platformSolid, 36, 36)),
        //               new Platform(315, 455, createImage(platformSolid, 36, 36)),
        //               new Platform(170, 455, createImage(platformSolid, 36, 36)),
        //               new Platform(130, 419, createImage(platformSolid, 36, 36)),
        // //new PlatformTwo(10, 419, createImage(platformSolid, 36, 36)),             
        // new Platform(160, 280, createImage(platformSolid, 36, 36)),
        // new Platform(196, 316, createImage(platformSolid, 36, 36)),
        //               new Platform(370, 200, createImage(platformSolid, 36, 36)),
        //               new Platform(345, 244, createImage(platformSolid, 36, 36)),
        //               new Platform(310, 278, createImage(platformSolid, 36, 36)),
        // new Platform(230, 278, createImage(platformSolid, 36, 36)),
        //               //265 204
        // // new PlatformTwo(120, 245, createImage(platformSolid, 36, 36)),
        // // new PlatformTwo(125, 281, createImage(platformSolid, 36, 36)),
        // //           new PlatformTwo(266, 349, createImage(platformSolid, 36, 36)),
        // //           new PlatformTwo(266, 312, createImage(platformSolid, 36, 36)),
        // //          new PlatformTwo(266, 276, createImage(platformSolid, 36, 36)),
        // //          new PlatformTwo(266, 240, createImage(platformSolid, 36, 36)),
        // //          new PlatformTwo(266, 204, createImage(platformSolid, 36, 36)),
        // //           new PlatformTwo(266, 384, createImage(platformSolid, 36, 36)),
        //               new PlatformOne(570, 200, createImage(platformSolid, 36, 36)),
        //               new PlatformThree(670, 200, createImage(platformSolid, 36, 36)),
        //               new Platform(280, 455, createImage(platformSolid, 36, 36)),
        //               new Platform(436, 455, createImage(platformSolid, 36, 36)),

        // // Right wall
        //               new Platform(830, 312, createImage(platformSolid, 36, 36)),
        //               new Platform(830, 348, createImage(platformSolid, 36, 36)),
        //               new Platform(830, 384, createImage(platformSolid, 36, 36)),
        //               new Platform(830, 419, createImage(platformSolid, 36, 36)),
        //               new Platform(830, 455, createImage(platformSolid, 36, 36)),
        //     spikes, sawTrap, sawTrap2, jump   */    ]; // создаем платформы !!!!!!!!!!!!!

        player = new _js_Player__WEBPACK_IMPORTED_MODULE_3__.Player({
          platforms: _js_Collision__WEBPACK_IMPORTED_MODULE_9__.platforms
        });
      }
      function animate() {
        requestAnimationFrame(animate);
        //c.clearRect(0, 0, canvas.width, canvas.height);
        _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.c.fillStyle = 'white';
        _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.c.fillRect(0, 0, _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.canvas.height);
        console.log('animation counter');
        additionalElements.forEach(element => element.draw());

        // !!!!!!!!!! переделать под обработку массива если у element есть element.type === 'jumpToggle'                      

        _js_Collision__WEBPACK_IMPORTED_MODULE_9__.platforms.forEach(platform => platform.draw());
        _js_Collision__WEBPACK_IMPORTED_MODULE_9__.platforms.forEach(platform => platform.update()); // рисуем платформы
        _js_Collision__WEBPACK_IMPORTED_MODULE_9__.platforms.forEach(platform => platform.type === 'jumpToggle' && platform.toggle());
        player.update();
        if (_js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.right.pressed && player.position.x + player.width <= _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.canvas.width) {
          // упор персонажа в правый край экрана
          player.velocity.x = 2;
        } else if (_js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.left.pressed && player.position.x >= 0) {
          // упор персонажа в левый край экрана
          player.velocity.x = -2;
        } else {
          player.velocity.x = 0;
        }

        // platforms.forEach(platform => {
        //   platform.collision();
        //   // // Player - platform collision (player is above the platform)
        //   // if (player.position.y + player.height <= platform.position.y &&
        //   //     player.position.y + player.height + player.velocity.y >= platform.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
        //   //     // Player - platform collision (player on the platform - inside of left and right platform boundaries)
        //   //     player.position.x + player.width >= platform.position.x + player.width / 3 && // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
        //   //     player.position.x <= platform.position.x + platform.width - player.width / 3) { 
        //   //       player.velocity.y = 0; // если касается земли
        //   // }
        //   // // Player - platform collision (player is under the platform)
        //   // if (player.position.y <= platform.position.y + platform.height &&
        //   //     player.position.y + player.height + player.velocity.y >= platform.position.y &&
        //   //     player.position.x >= platform.position.x - player.width / 2 && // можно сделать 1.75
        //   //     player.position.x + player.width <= platform.position.x + platform.width + player.width / 2) {
        //   //       player.velocity.y = 1;/* player.currentSprite = player.sprites.idle.right */
        //   // }
        //   // // Player - platform collision (player is left from the platform and moves right)
        //   // if (keys.right.pressed &&
        //   //     player.position.y + player.height >= platform.position.y && 
        //   //     player.position.y <= platform.position.y + platform.height &&
        //   //     player.position.x + player.width >= platform.position.x) {
        //   //       player.velocity.x = 0;
        //   //       console.log('hit!');
        //   // } // Continue: Player - platform collision (player holds right and is right from the platform - so he cans move)
        //   //   if (keys.right.pressed &&
        //   //     player.position.y + player.height >= platform.position.y && 
        //   //     player.position.y <= platform.position.y + platform.height &&
        //   //     player.position.x + player.width >= platform.position.x + platform.width) {
        //   //       player.velocity.x = 2;
        //   //       console.log('free!');
        //   //   }
        //   // // Player - platform collision (player is right from the platform and moves left)
        //   // if (keys.left.pressed &&
        //   //   player.position.y + player.height >= platform.position.y && 
        //   //   player.position.y <= platform.position.y + platform.height &&
        //   //   player.position.x <= platform.position.x + platform.width) {
        //   //     player.velocity.x = 0;
        //   //     console.log('hit!');
        //   // } // Continue: Player - platform collision (player holds left and is left from the platform - so he cans move)
        //   //   if (keys.left.pressed &&
        //   //     player.position.y + player.height >= platform.position.y && 
        //   //     player.position.y <= platform.position.y + platform.height &&
        //   //     player.position.x + player.width <= platform.position.x) { // или "-" player.width ???
        //   //       player.velocity.x = -2;
        //   //       console.log('free!');
        //   //   }
        // })

        if (player.velocity.y >= player.jumpHeight - player.gravity && !_js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.lastPressed === 'right') {
          // 10 - когда персонаж на земле
          player.currentSprite = player.sprites.idle.right;
        } else if (player.velocity.y >= player.jumpHeight - player.gravity && !_js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.lastPressed === 'left') {
          // 10 - когда персонаж на земле
          player.currentSprite = player.sprites.idle.left;
        }

        // Падение в пропасть (см. комментарии в player.update())
        if (player.position.y > _js_Canvas__WEBPACK_IMPORTED_MODULE_1__.canvas.height) {
          // sawTrap.restore();
          //sawTrap2.restore(); // !!!!!!!!!!!!
          _js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.jumpToggleActive = !_js_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.jumpToggleActive;
          init();
          console.log('you lose');

          // сюда вставить звук проигрыша
        }
      }

      init();
      animate();
      window.addEventListener('keydown', _js_Keys__WEBPACK_IMPORTED_MODULE_6__.keyDownHandler);
      window.addEventListener('keyup', _js_Keys__WEBPACK_IMPORTED_MODULE_6__.keyUpHandler);
      window.addEventListener('click', e => {
        console.log(e.clientX, e.clientY);
        //  debugger
      });

      /***/
    },

    /***/"./src/js/AdditionalElements.js":
    /*!**************************************!*\
      !*** ./src/js/AdditionalElements.js ***!
      \**************************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"AdditionalElements": () => /* binding */AdditionalElements
        /* harmony export */
      });
      /* harmony import */
      var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Canvas */"./src/js/Canvas.js");
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
          _Canvas__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.image, this.position.x, this.position.y);
          // c.fillStyle = ('green');
          // c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
      }

      /***/
    },

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
        /* harmony export */"fan": () => /* binding */fan,
        /* harmony export */"heroDeath": () => /* binding */heroDeath,
        /* harmony export */"heroFallL": () => /* binding */heroFallL,
        /* harmony export */"heroFallR": () => /* binding */heroFallR,
        /* harmony export */"heroIdleL": () => /* binding */heroIdleL,
        /* harmony export */"heroIdleR": () => /* binding */heroIdleR,
        /* harmony export */"heroJumpL": () => /* binding */heroJumpL,
        /* harmony export */"heroJumpR": () => /* binding */heroJumpR,
        /* harmony export */"heroRunL": () => /* binding */heroRunL,
        /* harmony export */"heroRunR": () => /* binding */heroRunR,
        /* harmony export */"platformImgSrc300": () => /* binding */platformImgSrc300,
        /* harmony export */"platformJump": () => /* binding */platformJump,
        /* harmony export */"platformJumpDisabled": () => /* binding */platformJumpDisabled,
        /* harmony export */"platformOne": () => /* binding */platformOne,
        /* harmony export */"platformOneDisabled": () => /* binding */platformOneDisabled,
        /* harmony export */"platformOneStep": () => /* binding */platformOneStep,
        /* harmony export */"platformOneStepExplosion": () => /* binding */platformOneStepExplosion,
        /* harmony export */"platformSolid": () => /* binding */platformSolid,
        /* harmony export */"platformThree": () => /* binding */platformThree,
        /* harmony export */"platformThreeDisabled": () => /* binding */platformThreeDisabled,
        /* harmony export */"platformTwo": () => /* binding */platformTwo,
        /* harmony export */"platformTwoDisabled": () => /* binding */platformTwoDisabled,
        /* harmony export */"saw": () => /* binding */saw,
        /* harmony export */"spike": () => /* binding */spike
        /* harmony export */
      });
      const platformImgSrc300 = '../assets/img/Platforms/platform.png';
      const heroIdleR = '../assets/img/Hero/Idle_right.png';
      const heroIdleL = '../assets/img/Hero/Idle_left.png';
      const heroRunR = '../assets/img/Hero/Run_right.png';
      const heroRunL = '../assets/img/Hero/Run_left.png';
      const heroJumpR = '../assets/img/Hero/Jump_right.png';
      const heroJumpL = '../assets/img/Hero/Jump_left.png';
      const heroFallR = '../assets/img/Hero/Fall_right.png';
      const heroFallL = '../assets/img/Hero/Fall_left.png';
      const heroDeath = '../assets/img/Hero/Player_death.png';
      const backgroundImg = '../assets/img/Background_images/bg_2.jpg';
      const platformSolid = '../assets/img/Platforms/Platform_solid.png';
      const platformOneStep = '../assets/img/Platforms/Platform_oneStep.png';
      const platformOneStepExplosion = '../assets/img/Platforms/Platform_oneStep_Explosion.png';
      const platformJump = '../assets/img/Platforms/Platform_jump.png';
      const platformJumpDisabled = '../assets/img/Platforms/Platform_jump_disabled.png';
      const platformOne = '../assets/img/Platforms/Platform_one.png';
      const platformTwo = '../assets/img/Platforms/Platform_two.png';
      const platformThree = '../assets/img/Platforms/Platform_three.png';
      const platformOneDisabled = '../assets/img/Platforms/Platform_one_disabled.png';
      const platformTwoDisabled = '../assets/img/Platforms/Platform_two_disabled.png';
      const platformThreeDisabled = '../assets/img/Platforms/Platform_three_disabled.png';
      const saw = '../assets/img/Traps/Saw.png';
      const fan = '../assets/img/Traps/Fan.png';
      const spike = '../assets/img/Traps/Platform_spikes.png';

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
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"CollisionBlock": () => /* binding */CollisionBlock,
        /* harmony export */"parsedCollisions": () => /* binding */parsedCollisions,
        /* harmony export */"platforms": () => /* binding */platforms
        /* harmony export */
      });
      /* harmony import */
      var _data_collisions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./data/collisions */"./src/js/data/collisions.js");
      /* harmony import */
      var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Canvas */"./src/js/Canvas.js");
      /* harmony import */
      var _Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./Platform */"./src/js/Platform.js");
      /* harmony import */
      var _Assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Assets */"./src/js/Assets.js");
      /* harmony import */
      var _CreateImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./CreateImage */"./src/js/CreateImage.js");
      class CollisionBlock {
        constructor(_ref) {
          let {
            position
          } = _ref;
          this.position = position;
          this.width = 36;
          this.height = 36;
        }
        draw() {
          _Canvas__WEBPACK_IMPORTED_MODULE_1__.c.fillStyle = 'rgba(204,11,10,0.3)';
          _Canvas__WEBPACK_IMPORTED_MODULE_1__.c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
      }
      const platforms = [];
      // const parsedCollisions = collisionsLevel_1.forEach((row, index_Y) => {
      //   row.forEach((cell, index_X) => {
      //     if (cell === 292) {
      //       console.log(index_X, index_Y)
      //       platforms.push(new CollisionBlock(
      //         {position: {
      //           x: index_X * 36,
      //           y: index_Y * 36,
      //         }}))
      //     }
      //   })
      // })
      const parsedCollisions = _data_collisions__WEBPACK_IMPORTED_MODULE_0__.collisionsLevel_1.forEach((row, index_Y) => {
        row.forEach((cell, index_X) => {
          if (cell === 292) {
            console.log(index_X, index_Y);
            platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformOne(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_4__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOne, 36, 36), platforms));
          }
          if (cell === 'ee') {
            console.log(index_X, index_Y);
            platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Platform(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_4__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformSolid, 36, 36), platforms));
          }
          if (cell === 'jp') {
            console.log(index_X, index_Y);
            platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.JumpToggle(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_4__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJump, 36, 36), platforms));
          }
        });
      });

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
        /* harmony export */"Sprite": () => /* binding */Sprite,
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
      class Sprite {
        constructor(_ref) {
          let {
            position,
            imageSrc
          } = _ref;
          this.position = position;
          this.image = new Image();
          this.image.onload = () => {
            this.loaded = true;
          };
          this.image.src = imageSrc;
          this.loaded = false;
        }
        draw() {
          if (!this.loaded) return;
          c.drawImage(this.image, this.position.x, this.position.y);
        }
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
      var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../index */"./src/index.js");
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
        lastPressed: 'right',
        jumpToggleActive: true,
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
              if (_index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y === 0) {
                keys.jumpToggleActive ? keys.jumpToggleActive = false : keys.jumpToggleActive = true;
              }
              keys.up.pressed = true;
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
                !keys.deadSignalZone && keys.spaceToggleCounter++;
                // arr = [...arr, ...platforms.splice(1,1)];
                // console.log(arr)
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
        /* harmony export */"Fan": () => /* binding */Fan,
        /* harmony export */"JumpToggle": () => /* binding */JumpToggle,
        /* harmony export */"OneStep": () => /* binding */OneStep,
        /* harmony export */"Platform": () => /* binding */Platform,
        /* harmony export */"PlatformOne": () => /* binding */PlatformOne,
        /* harmony export */"PlatformSpikes": () => /* binding */PlatformSpikes,
        /* harmony export */"PlatformThree": () => /* binding */PlatformThree,
        /* harmony export */"PlatformTwo": () => /* binding */PlatformTwo,
        /* harmony export */"Saw": () => /* binding */Saw
        /* harmony export */
      });
      /* harmony import */
      var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Canvas */"./src/js/Canvas.js");
      /* harmony import */
      var _CreateImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./CreateImage */"./src/js/CreateImage.js");
      /* harmony import */
      var _Assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./Assets */"./src/js/Assets.js");
      /* harmony import */
      var _Keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Keys */"./src/js/Keys.js");
      /* harmony import */
      var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../index */"./src/index.js");
      class Platform {
        constructor(posX, posY, image) {
          this.position = {
            x: posX,
            y: posY
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
          _Canvas__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height); // 48, 0, 48, 48 - player sprite crop (x, y, w, h) // 36 размер кадра в спрайте
        }

        update() {
          this.frames++;
          if (this.frames > this.frequency) this.frames = 0;
          this.draw();
        }
        collision() {
          // разбито на отдельные методы, для частичного наследования (если понадобится)
          collisionAbove();
          collisionUnder();
          collisionLeftSide();
          collisionRightSide();
        }
      }
      class PlatformSpikes extends Platform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'spikes';
        }
        collision() {
          // Player - platform collision (player is above the spike platform)
          if (_index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height <= this.position.y && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height + _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y >= this.position.y &&
          // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
          // Player - platform collision (player on the platform - inside of left and right platform boundaries)
          _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width >= this.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width / 3 &&
          // + player.width / 3 - поправка чтобы персонаж погибал касаясь самого края платформы (без этого он еще погибал не доходя трети ширины спрайта героя)
          _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x <= this.position.x + this.width - _index__WEBPACK_IMPORTED_MODULE_4__.player.width / 3) {
            _index__WEBPACK_IMPORTED_MODULE_4__.player.die();
          }
          // Player - platform collision (player is under the platform)
          if (_index__WEBPACK_IMPORTED_MODULE_4__.player.position.y <= this.position.y + this.height && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height + _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x >= this.position.x - _index__WEBPACK_IMPORTED_MODULE_4__.player.width / 2 &&
          // можно сделать 1.75
          _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width <= this.position.x + this.width + _index__WEBPACK_IMPORTED_MODULE_4__.player.width / 2) {
            _index__WEBPACK_IMPORTED_MODULE_4__.player.die();
          }
        }
      }
      class Saw extends PlatformSpikes {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'saw';
          this.frequency = 23;
        }
      }
      class Fan extends Platform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'fan';
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.fan, 36, 36)
          };
          this.currentSprite = this.sprites.idle;
          this.frequency = 23;
        }
      }
      class JumpToggle extends Platform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'jumpToggle';
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformJump, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformJumpDisabled, 36, 36)
          };
          this.currentSprite = this.sprites.idle;
          this.frequency = 63;
        }
        toggle() {
          _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.jumpToggleActive === true ? this.currentSprite = this.sprites.idle : this.currentSprite = this.sprites.disabled;
        }
        collision() {
          if (_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.jumpToggleActive) {
            super.collision();
          }
        }
      }
      class OneStep extends Platform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.temporaryPosX = posX;
          this.hits = 0;
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformOneStep, 36, 36),
            explosion: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformOneStepExplosion, 36, 36)
          };
          this.currentSprite = this.sprites.idle;
          this.frequency = 28;
          this.type = 'oneStep';
        }
        destroy() {
          this.currentSprite = this.sprites.explosion;
          setTimeout(() => {
            this.position.x = -9999;
            this.currentSprite = this.sprites.idle;
          }, 550);
          this.hits = 0;
        }
        restore() {
          this.position.x = this.temporaryPosX;
        }
        collision() {
          // Player - platform collision (player is above the platform)
          // And moves right and leaves the platform
          if ((!_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.up.pressed && _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y === 0 || !_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.up.pressed && _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y === _index__WEBPACK_IMPORTED_MODULE_4__.player.gravity) && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height <= this.position.y && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height + _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width * 2 >= this.position.x && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x <= this.position.x + this.width) {
            this.destroy();
          }
          // Не нужен но надо оставить, иначе блок пропадает сразу же
          if (_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.up.pressed && _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y != 0 && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height <= this.position.y && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height + _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y >= this.position.y &&
          // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
          // Player - platform collision (player on the platform - inside of left and right platform boundaries)
          _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width >= this.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width / 3 &&
          // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
          _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x <= this.position.x + this.width - _index__WEBPACK_IMPORTED_MODULE_4__.player.width / 3) {
            _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y = 0; // если касается земли
            this.destroy();
          } else if (!_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.up.pressed && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height <= this.position.y && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height + _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y >= this.position.y &&
          // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
          // Player - platform collision (player on the platform - inside of left and right platform boundaries)
          _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width >= this.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width / 3 &&
          // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
          _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x <= this.position.x + this.width - _index__WEBPACK_IMPORTED_MODULE_4__.player.width / 3) {
            _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y = 0; // если касается земли
          }
          // Player - platform collision (player is under the platform)
          if (_index__WEBPACK_IMPORTED_MODULE_4__.player.position.y <= this.position.y + this.height && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height + _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x >= this.position.x - _index__WEBPACK_IMPORTED_MODULE_4__.player.width / 2 &&
          // можно сделать 1.75
          _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width <= this.position.x + this.width + _index__WEBPACK_IMPORTED_MODULE_4__.player.width / 2) {
            _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.y = 1;
            this.destroy();
          }
          // Player - platform collision (player is left from the platform)
          if (_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.right.pressed && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y <= this.position.y + this.height && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width >= this.position.x && !(_index__WEBPACK_IMPORTED_MODULE_4__.player.position.x >= this.position.x)) {
            // player is left from the platform and moves right
            this.hits++;
            _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.right.pressed = false;
            _index__WEBPACK_IMPORTED_MODULE_4__.player.currentSprite = _index__WEBPACK_IMPORTED_MODULE_4__.player.sprites.fall.right;
            _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.x -= 15;
            this.hits === 1 && this.destroy();
          }
          // Player - platform collision (player is right from the platform)
          if (_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.left.pressed && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y <= this.position.y + this.height && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x <= this.position.x + this.width && !(_index__WEBPACK_IMPORTED_MODULE_4__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width <= this.position.x)) {
            // player is right from the platform and moves left
            this.hits++;
            _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.left.pressed = false;
            _index__WEBPACK_IMPORTED_MODULE_4__.player.currentSprite = _index__WEBPACK_IMPORTED_MODULE_4__.player.sprites.fall.left;
            _index__WEBPACK_IMPORTED_MODULE_4__.player.velocity.x += 15;
            this.hits === 1 && this.destroy();
          }
        }
      }
      class SpaceToggledPlatform extends Platform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'toggledBySpacePlatform';
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformOne, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformOneDisabled, 36, 36)
          };
          this.currentSprite = this.sprites.idle;
          this.frequency = 63;
          this.setCount = 1;
        }
        checkSpaceToggleCounter() {
          _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.spaceToggleCounter >= 4 ? _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.spaceToggleCounter = 1 : _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.spaceToggleCounter;
        }
        collision() {
          if (_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.spaceToggleCounter === this.setCount) {
            this.currentSprite = this.sprites.idle;
            super.collision();
            this.checkSpaceToggleCounter();
          } else {
            this.currentSprite = this.sprites.disabled;
            this.checkSpaceToggleCounter();
            // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)
            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Переделать platforms    
            if (platforms.some(elem => {
              return _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height * 0.75 >= elem.position.y && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_4__.player.height * 0.35 <= elem.position.y + elem.height && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width * 0.75 >= elem.position.x && _index__WEBPACK_IMPORTED_MODULE_4__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_4__.player.width * 0.25 <= elem.position.x + elem.width;
            })) {
              _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.deadSignalZone = true;
              //debugger
              console.log('inside');
            } else {
              console.log('outside');
              _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.deadSignalZone = false;
            }
          }
        }
      }
      class PlatformOne extends SpaceToggledPlatform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'platformOne';
          this.setCount = 1;
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformOne, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformOneDisabled, 36, 36)
          };
        }
      }
      class PlatformTwo extends SpaceToggledPlatform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'platformTwo';
          this.setCount = 2;
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformTwo, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformTwoDisabled, 36, 36)
          };
        }
      }
      class PlatformThree extends SpaceToggledPlatform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'platformThree';
          this.setCount = 3;
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformThree, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.platformThreeDisabled, 36, 36)
          };
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
      throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Projects\\Game\\src\\js\\Player.js: Unexpected token (262:10)\n\n  260 |           platform.currentSprite = platform.sprites.idle;\n  261 |           platform.checkSpaceToggleCounter();\n> 262 |         } else {\n      |           ^\n  263 |           platform.currentSprite = platform.sprites.disabled;\n  264 |           platform.checkSpaceToggleCounter();\n  265 |         // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)\n    at instantiate (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:946:12)\n    at Parser.raise (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:3270:19)\n    at Parser.unexpected (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:3300:16)\n    at Parser.parseExprAtom (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:11261:16)\n    at Parser.parseExprSubscripts (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10872:23)\n    at Parser.parseUpdate (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10855:21)\n    at Parser.parseMaybeUnary (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10831:23)\n    at Parser.parseMaybeUnaryOrPrivate (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10669:61)\n    at Parser.parseExprOps (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10674:23)\n    at Parser.parseMaybeConditional (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10651:23)\n    at Parser.parseMaybeAssign (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10612:21)\n    at Parser.parseExpressionBase (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10566:23)\n    at D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10562:39\n    at Parser.allowInAnd (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12252:16)\n    at Parser.parseExpression (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10562:17)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12683:23)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)\n    at Parser.parseStatementListItem (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12529:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13121:61)\n    at Parser.parseBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Parser.parseBlock (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13102:10)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12636:21)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)\n    at Parser.parseStatement (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12542:17)\n    at D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13152:68\n    at Parser.withSmartMixTopicForbiddingContext (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12234:14)\n    at Parser.parseFor (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13152:22)\n    at Parser.parseForStatement (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12878:19)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12567:21)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)\n    at Parser.parseStatementListItem (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12529:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13121:61)\n    at Parser.parseBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Parser.parseBlock (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13102:10)\n    at Parser.parseFunctionBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:11924:24)\n    at Parser.parseFunctionBodyAndFinish (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:11910:10)\n    at Parser.parseMethod (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:11868:31)\n    at Parser.pushClassMethod (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13557:30)\n    at Parser.parseClassMemberWithIsStatic (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13429:12)\n    at Parser.parseClassMember (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13373:10)\n    at D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13323:14\n    at Parser.withSmartMixTopicForbiddingContext (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12234:14)\n    at Parser.parseClassBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13303:10)\n    at Parser.parseClass (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13281:22)\n    at Parser.parseExportDeclaration (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13764:25)\n    at Parser.maybeParseExportDeclaration (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13722:31)\n    at Parser.parseExport (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13646:29)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12661:27)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)");

      /***/
    },

    /***/"./src/js/data/collisions.js":
    /*!***********************************!*\
      !*** ./src/js/data/collisions.js ***!
      \***********************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"collisionsLevel_1": () => /* binding */collisionsLevel_1
        /* harmony export */
      });
      // Platforms:
      // sl - platform Solid
      // 1p - platform One
      // 2p - platform Two
      // 3p - platform Three
      // jp - platform Jump-Toggle
      // 1s - platform One-Step
      // Traps:
      // sw - Saw trap
      // st - Spikes trap
      // ft - Flamethrower
      // dz - Dead signal zone
      // Decorations:
      // 1f - Frame block 1
      // 2f - Frame block 2
      // Empty:
      // ee - Empty block

      const collisionsLevel_1 = [['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee'], ['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee'], ['ee', 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 'ee'], ['ee', 292, 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', 'ee', '', '', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', 'ee', 'e', '', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', 'ee', '', '', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 292, '', '', 292, 'ee', 'ee', 292, 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', '', '', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', 'jp', '', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', '', '', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 'ee', 292, 'ee'], ['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee'], ['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee']];

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