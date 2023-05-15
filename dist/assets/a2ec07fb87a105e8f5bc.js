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
      var _js_Collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./js/Collision */"./src/js/Collision.js");
      /* harmony import */
      var _js_Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./js/Canvas */"./src/js/Canvas.js");
      /* harmony import */
      var _js_CreateImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./js/CreateImage */"./src/js/CreateImage.js");
      /* harmony import */
      var _js_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./js/Player */"./src/js/Player.js");
      /* harmony import */
      var _js_Platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./js/Platform */"./src/js/Platform.js");
      /* harmony import */
      var _js_Assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./js/Assets */"./src/js/Assets.js");
      /* harmony import */
      var _js_Keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./js/Keys */"./src/js/Keys.js");
      /* harmony import */
      var _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./js/AdditionalElements */"./src/js/AdditionalElements.js");
      /* harmony import */
      var _js_data_collisions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./js/data/collisions */"./src/js/data/collisions.js");

      // imagePlatform.onload = function getSizes () {
      //   imagePlatform.width = imagePlatform.naturalWidth;
      //   imagePlatform.height = imagePlatform.naturalHeight;
      //}

      _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width = 1024; // 1280 //window.innerWidth; // canvas.width = innerWidth;
      _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height = 576; // 720 //window.innerHeight;

      let additionalElements = [new _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_8__.AdditionalElements(0, 0, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_3__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_6__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height))];

      // export let platforms = [/* new Platform(210, 525, createImage(platformSolid, 36, 36)),
      //                 new Platform(330, 455, createImage(platformSolid, 36, 36)),
      //                 new Platform(250, 400, createImage(platformSolid, 36, 36)),
      //                 new Platform(400, 100, createImage(platformSolid, 36, 36)) */]; // создаем платформы

      console.log(_js_Collision__WEBPACK_IMPORTED_MODULE_1__.platforms);
      let player = new _js_Player__WEBPACK_IMPORTED_MODULE_4__.Player({
        platforms: _js_Collision__WEBPACK_IMPORTED_MODULE_1__.platforms
      }); //collisionBlocks: collisionBlocks

      /* -------------------- */

      //let spikes = new PlatformSpikes(420, 135, createImage(spike, 36, 36))
      // let sawTrap = new Saw(400, 415, createImage(saw, 36, 36))
      // export let sawTrap = new Saw(560, 315, createImage(saw, 36, 36))
      // export let sawTrap2 = new OneStep(400, 455, createImage(platformOneStep, 36, 36))
      // export let jump = new JumpToggle(100, 355, createImage(platformOne, 36, 36))

      function init() {
        player.velocity.y = 1;
        _js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.spaceToggleCounter = 1;
        additionalElements = [new _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_8__.AdditionalElements(0, 0, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_3__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_6__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height))];

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

        player = new _js_Player__WEBPACK_IMPORTED_MODULE_4__.Player({
          platforms: _js_Collision__WEBPACK_IMPORTED_MODULE_1__.platforms
        });
      }
      function animate() {
        requestAnimationFrame(animate);
        //c.clearRect(0, 0, canvas.width, canvas.height);
        _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.fillStyle = 'white';
        _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.c.fillRect(0, 0, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height);
        console.log('animation counter');
        additionalElements.forEach(element => element.draw());

        // !!!!!!!!!! переделать под обработку массива если у element есть element.type === 'jumpToggle'                      

        _js_Collision__WEBPACK_IMPORTED_MODULE_1__.platforms.forEach(platform => platform.draw());
        _js_Collision__WEBPACK_IMPORTED_MODULE_1__.platforms.forEach(platform => platform.update()); // рисуем платформы
        _js_Collision__WEBPACK_IMPORTED_MODULE_1__.platforms.forEach(platform => {
          platform.type === 'jumpToggle' && platform.toggle();
          if (platform.type === 'platformOne' || platform.type === 'platformTwo' || platform.type === 'platformThree') {
            platform.collision();
          }
        });
        player.update();
        if (_js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.right.pressed && player.position.x + player.width <= _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width) {
          // упор персонажа в правый край экрана
          player.velocity.x = 2;
        } else if (_js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.left.pressed && player.position.x >= 0) {
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

        if (player.velocity.y >= player.jumpHeight - player.gravity && !_js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.lastPressed === 'right') {
          // 10 - когда персонаж на земле
          player.currentSprite = player.sprites.idle.right;
        } else if (player.velocity.y >= player.jumpHeight - player.gravity && !_js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.lastPressed === 'left') {
          // 10 - когда персонаж на земле
          player.currentSprite = player.sprites.idle.left;
        }

        // Падение в пропасть (см. комментарии в player.update())
        if (player.position.y > _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height) {
          // sawTrap.restore();
          //sawTrap2.restore(); // !!!!!!!!!!!!
          _js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.jumpToggleActive = !_js_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.jumpToggleActive;
          init();
          console.log('you lose');

          // сюда вставить звук проигрыша
        }
      }

      init();
      animate();
      window.addEventListener('keydown', _js_Keys__WEBPACK_IMPORTED_MODULE_7__.keyDownHandler);
      window.addEventListener('keyup', _js_Keys__WEBPACK_IMPORTED_MODULE_7__.keyUpHandler);
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
          if (cell === 'sk') {
            console.log(index_X, index_Y);
            platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformSpikes(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_4__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.spike, 36, 36), platforms));
          }
          if (cell === 'sw') {
            console.log(index_X, index_Y);
            platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Saw(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_4__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.saw, 36, 36), platforms));
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
    () => {
      throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Projects\\Game\\src\\js\\Platform.js: Unexpected token (102:28)\n\n  100 |       player.position.x + player.width - player.width / 4 >= this.position.x  && // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)\n  101 |       player.position.x <= this.position.x + this.width - player.width / 4) { \n> 102 |         player.velocity.y = ; // если касается земли\n      |                             ^\n  103 |\n  104 |        // debugger\n  105 |     }\n    at instantiate (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:946:12)\n    at Parser.raise (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:3270:19)\n    at Parser.unexpected (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:3300:16)\n    at Parser.parseExprAtom (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:11261:16)\n    at Parser.parseExprSubscripts (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10872:23)\n    at Parser.parseUpdate (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10855:21)\n    at Parser.parseMaybeUnary (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10831:23)\n    at Parser.parseMaybeUnaryOrPrivate (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10669:61)\n    at Parser.parseExprOps (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10674:23)\n    at Parser.parseMaybeConditional (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10651:23)\n    at Parser.parseMaybeAssign (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10612:21)\n    at Parser.parseMaybeAssign (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10638:25)\n    at Parser.parseExpressionBase (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10566:23)\n    at D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10562:39\n    at Parser.allowInAnd (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12252:16)\n    at Parser.parseExpression (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:10562:17)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12683:23)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)\n    at Parser.parseStatementListItem (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12529:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13121:61)\n    at Parser.parseBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Parser.parseBlock (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13102:10)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12636:21)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)\n    at Parser.parseStatementOrSloppyAnnexBFunctionDeclaration (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12539:17)\n    at Parser.parseIfStatement (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12921:28)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12580:21)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)\n    at Parser.parseStatementListItem (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12529:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13121:61)\n    at Parser.parseBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Parser.parseBlock (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13102:10)\n    at Parser.parseFunctionBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:11924:24)\n    at Parser.parseFunctionBodyAndFinish (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:11910:10)\n    at Parser.parseMethod (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:11868:31)\n    at Parser.pushClassMethod (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13557:30)\n    at Parser.parseClassMemberWithIsStatic (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13429:12)\n    at Parser.parseClassMember (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13373:10)\n    at D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13323:14\n    at Parser.withSmartMixTopicForbiddingContext (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12234:14)\n    at Parser.parseClassBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13303:10)\n    at Parser.parseClass (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13281:22)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12578:21)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)\n    at Parser.parseModuleItem (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12526:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13121:36)\n    at Parser.parseBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Parser.parseProgram (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12437:10)\n    at Parser.parseTopLevel (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12427:25)");

      /***/
    },

    /***/"./src/js/Player.js":
    /*!**************************!*\
      !*** ./src/js/Player.js ***!
      \**************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

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
      var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../index */"./src/index.js");
      /* harmony import */
      var _Keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Keys */"./src/js/Keys.js");
      /* harmony import */
      var _js_Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../js/Assets */"./src/js/Assets.js");
      class Player {
        constructor(_ref) {
          let {
            platforms = []
          } = _ref;
          this.platforms = platforms;
          this.position = {
            x: 165,
            y: 247 //canvas.height / 2
          };

          this.velocity = {
            x: 0,
            y: 1
          };
          this.gravity = 0.25;
          this.jumpHeight = 10; // -20 is higher
          this.width = 32;
          this.height = 32;
          this.frequency = 21;
          this.frames = 0;
          this.sprites = {
            idle: {
              right: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroIdleR, 32, 32),
              left: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroIdleL, 32, 32)
            },
            run: {
              right: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroRunR, 32, 32),
              left: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroRunL, 32, 32)
            },
            jump: {
              right: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroJumpR, 32, 32),
              left: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroJumpL, 32, 32)
            },
            fall: {
              right: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroFallR, 32, 32),
              left: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroFallL, 32, 32)
            },
            death: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroDeath, 32, 32)
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
          _Canvas__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(this.currentSprite, 32 * this.frames, 0, 32, 32, this.left, this.top, this.width, this.height); // 32, 0, 32, 32 - player sprite crop (x, y, w, h)
        }

        die() {
          this.velocity.x = 0;
          this.velocity.y = -2;
          this.gravity = 0;
          this.currentSprite = this.sprites.death;
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
              case 'jumpToggle':
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

              //     case 'platformOne':
              //     case 'platformTwo':
              //     case 'platformThree':
              //       if ((keys.spaceToggleCounter === platform.setCount) &&
              //       this.left <= platform.right &&
              //         this.right >= platform.left &&
              //         this.top <= platform.bottom &&
              //         this.bottom >= platform.top) {
              //           if (this.velocity.x < 0) {// moving left       // <= -2
              //             this.left = platform.right + 0.1;
              //             break;
              //           }
              //           if (this.velocity.x > 0) {// moving right      // <= 2
              //             this.left = platform.left - this.width - 0.1;
              //             break;
              //           }
              //       platform.currentSprite = platform.sprites.idle;
              //       platform.checkSpaceToggleCounter();
              //     } else {
              //       platform.currentSprite = platform.sprites.disabled;
              //       platform.checkSpaceToggleCounter();
              //     // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)
              // // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Переделать platforms    
              //     if (this.platforms.some((block) => {
              //       return (this.bottom * 0.75 >= block.top &&
              //         this.bottom * 0.35 <= block.bottom &&
              //         this.right * 0.75 >= block.left &&
              //         this.right * 0.25 <= block.right);
              //     })) {
              //       keys.deadSignalZone = true;
              //       //debugger
              //       console.log('inside')
              //     } else {
              //       console.log('outside')   
              //       keys.deadSignalZone = false;
              //     }
              //     }
              //       break;

              // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
              //   case 'platformOne':
              //     case 'platformTwo':
              //     case 'platformThree':
              //       if ((keys.spaceToggleCounter === platform.setCount) && 
              //               this.left <= platform.right &&
              //               this.right >= platform.left &&
              //               this.top <= platform.bottom &&
              //               this.bottom >= platform.top) {
              //           console.log('QQQQQQQQQQQQQQQ')
              //           if (this.velocity.x < 0) {// moving left       // <= -2
              //             this.left = platform.right + 0.1;
              //             break;
              //           }
              //           if (this.velocity.x > 0) {// moving right      // <= 2
              //             this.left = platform.left - this.width - 0.1;
              //             break;
              //           }
              //       platform.currentSprite = platform.sprites.disable;
              //       platform.checkSpaceToggleCounter();

              //       if (this.platforms.some((cell) => {
              //         return (this.left <= platform.right &&
              //           this.right >= platform.left &&
              //           this.top <= platform.bottom &&
              //           this.bottom >= platform.top);
              //       })) {
              //         keys.deadSignalZone = true;
              //         //debugger
              //         console.log('inside')
              //       } else {
              //         console.log('outside')   
              //         keys.deadSignalZone = false;
              //       }
              //     } else if ((!keys.spaceToggleCounter === platform.setCount) && 
              //     !(this.left <= platform.right &&
              //     this.right >= platform.left &&
              //     this.top <= platform.bottom &&
              //     this.bottom >= platform.top)) {
              //       platform.currentSprite = platform.sprites.idle;
              //       platform.checkSpaceToggleCounter();
              //     // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)
              // // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Переделать platforms    
              //     }
              //       break;
              // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
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
                if (this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
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
              case 'jumpToggle':
                if (_Keys__WEBPACK_IMPORTED_MODULE_3__.keys.jumpToggleActive && this.left <= platform.right && this.right >= platform.left && this.top <= platform.bottom && this.bottom >= platform.top) {
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

              //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
              //     case 'platformOne':
              //     case 'platformTwo':
              //     case 'platformThree':
              //       if ((keys.spaceToggleCounter === platform.setCount) &&
              //         this.left <= platform.right &&
              //         this.right >= platform.left &&
              //         this.top <= platform.bottom &&
              //         this.bottom >= platform.top) {
              //           console.log('YYYYYYYYYYYYYYY')
              //           if (this.velocity.y < 0) {// moving up  // -0.25
              //             this.velocity.y = 0;
              //             this.top = platform.bottom + 0.1;
              //             break;
              //           }
              //           if (this.velocity.y > 0) {// falling down  // 0.25
              //             this.velocity.y = 0;
              //             this.top = platform.top - this.height - 0.1;
              //             break;
              //           }
              //         platform.currentSprite = platform.sprites.disabled;
              //         platform.checkSpaceToggleCounter();
              //         if (this.platforms.some((cell) => {
              //           return (this.left <= platform.right &&
              //             this.right >= platform.left &&
              //             this.top <= platform.bottom &&
              //             this.bottom >= platform.top);
              //         })) {
              //           keys.deadSignalZone = true;
              //           //debugger
              //           console.log('inside')
              //         } else {
              //           console.log('outside')   
              //           keys.deadSignalZone = false;
              //         }

              //     } else if ((!keys.spaceToggleCounter === platform.setCount) &&
              //     !(this.left <= platform.right &&
              //       this.right >= platform.left &&
              //       this.top <= platform.bottom &&
              //       this.bottom >= platform.top)) {

              //       platform.currentSprite = platform.sprites.idle;
              //       platform.checkSpaceToggleCounter();
              //     // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)
              // // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Переделать platforms    
              //     }

              //       break;
              //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//

              // case 'spikes': // Коллизия уже выполняется в методе checkCollisionsAxes_X()
              //   case 'saw':
              //     if (this.bottom >= platform.top &&
              //       this.right >= platform.left + this.width / 2 &&
              //       this.left <= platform.left - this.width / 2) {
              //         // if (this.velocity.x < 0) {// moving left       // <= -2
              //         //   this.left = platform.right + 0.1;
              //         //   break;
              //         // }
              //         // if (this.velocity.x > 0) {// moving right      // <= 2
              //         //   this.left = platform.left - this.width - 0.1;
              //         //   break;
              //         // }
              //         this.die();
              //     }
              //     if (this.top <= platform.bottom &&
              //       this.bottom + this.velocity.y >= platform.top &&
              //       this.left >= platform.left - this.width / 2 &&
              //       this.right <= platform.right + this.width / 2) {
              //         // if (this.velocity.x < 0) {// moving left       // <= -2
              //         //   this.left = platform.right + 0.1;
              //         //   break;
              //         // }
              //         // if (this.velocity.x > 0) {// moving right      // <= 2
              //         //   this.left = platform.left - this.width - 0.1;
              //         //   break;
              //         // }

              // // if (this.left <= platform.right &&
              // //   this.right >= platform.left &&
              // //   this.top <= platform.bottom &&
              // //   this.bottom >= platform.top) {
              //     // if (this.velocity.y < 0) {// moving up  // -0.25
              //     //   this.velocity.y = 0;
              //     //   this.top = platform.bottom + 0.1;
              //     //   break;
              //     // }
              //     // if (this.velocity.y > 0) {// falling down  // 0.25
              //     //   this.velocity.y = 0;
              //     //   this.top = platform.top - this.height - 0.1;
              //     //   break;
              //     // }
              //     this.die();
              // }
              // break;
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
      // sk - Spikes trap
      // ft - Flamethrower
      // dz - Dead signal zone
      // Decorations:
      // 1f - Frame block 1
      // 2f - Frame block 2
      // Empty:
      // ee - Empty block

      const collisionsLevel_1 = [['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee'], ['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee'], ['ee', 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 'ee'], ['ee', 292, 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 292, 'ee'], ['ee', 292, 'ee', 'ee', '', '', '', '', '', '', '', '', '', '', 292, 'ee'], ['ee', 292, 'ee', 'ee', 'ee', 'ee', '', '', '', '', '', '', '', '', 292, 'ee'], ['ee', 292, 'ee', 'ee', '', '', '', '', '', '', '', '', '', '', 292, 'ee'], ['ee', 292, 292, '', '', 292, '', '',, '', '', '', '', '', 292, 'ee'], ['ee', 292, 'ee', '', '', '', '', '', '', '', '', '', '', '', 292, ''], ['', 292, 'sw', 'jp', '', '', 292, '', 292, '', '', '', 'sk', '',, 292], ['', 292, '', '', '', '', '', 'ee', '', 'ee', '', 'ee', 'ee', 'ee', 292, ''], ['ee', 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 'ee', 292, 'ee'], ['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee'], ['ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee', 'ee']];

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