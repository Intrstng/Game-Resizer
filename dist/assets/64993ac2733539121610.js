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
        /* harmony export */"leftNeighboorBlockFromHero": () => /* binding */leftNeighboorBlockFromHero,
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
      var _js_Traps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./js/Traps */"./src/js/Traps.js");
      /* harmony import */
      var _js_Assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./js/Assets */"./src/js/Assets.js");
      /* harmony import */
      var _js_Keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./js/Keys */"./src/js/Keys.js");
      /* harmony import */
      var _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./js/AdditionalElements */"./src/js/AdditionalElements.js");
      /* harmony import */
      var _js_data_collisions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./js/data/collisions */"./src/js/data/collisions.js");

      // imagePlatform.onload = function getSizes () {
      //   imagePlatform.width = imagePlatform.naturalWidth;
      //   imagePlatform.height = imagePlatform.naturalHeight;
      //}

      _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width = 1024; // 1280 //window.innerWidth; // canvas.width = innerWidth;
      _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height = 576; // 720 //window.innerHeight;

      let leftNeighboorBlockFromHeroArr = [];
      let leftNeighboorBlockFromHero = null;
      let additionalElements = [new _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_9__.AdditionalElements(0, 0, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_3__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_7__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height))];

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
        _js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.spaceToggleCounter = 1;
        additionalElements = [new _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_9__.AdditionalElements(0, 0, (0, _js_CreateImage__WEBPACK_IMPORTED_MODULE_3__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_7__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height))];

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
        _js_Collision__WEBPACK_IMPORTED_MODULE_1__.platforms.forEach(platform => {
          platform.type === 'oneStep' && platform.restore();
        });
      }
      const bulletController = new _js_Traps__WEBPACK_IMPORTED_MODULE_6__.BulletController(_js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas);
      const flamethrower = new _js_Traps__WEBPACK_IMPORTED_MODULE_6__.Flamethrower(_js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width / 2.2, _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height / 1.3, bulletController); // перенести в animate forEach

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
          (platform.type === 'jumpToggleActive' || platform.type === 'jumpToggleDisabled') && platform.toggle();
          if (platform.type === 'platformOne' || platform.type === 'platformTwo' || platform.type === 'platformThree' || platform.type === 'deadSignalZone') {
            platform.collision();
          }
          if (platform.type === 'flamethrowerLeft' || platform.type === 'flamethrowerRight' || platform.type === 'flamethrowerUp' || platform.type === 'flamethrowerDown') {
            platform.shoot();
          }
        });
        //flamethrower.shootPressed = true
        bulletController.draw();
        flamethrower.draw();
        leftNeighboorBlockFromHeroArr = _js_Collision__WEBPACK_IMPORTED_MODULE_1__.platforms.filter(platform => {
          return platform.left <= player.left && platform.top <= player.top && platform.bottom >= player.bottom;
        });
        leftNeighboorBlockFromHero = leftNeighboorBlockFromHeroArr[leftNeighboorBlockFromHeroArr.length - 1];
        player.update();
        if (_js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.right.pressed && player.position.x + player.width <= _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.width) {
          // упор персонажа в правый край экрана
          player.velocity.x = 2;
        } else if (_js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.left.pressed && player.position.x >= 0) {
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

        if (player.velocity.y >= player.jumpHeight - player.gravity && !_js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.lastPressed === 'right') {
          // 10 - когда персонаж на земле
          player.currentSprite = player.sprites.idle.right;
        } else if (player.velocity.y >= player.jumpHeight - player.gravity && !_js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.lastPressed === 'left') {
          // 10 - когда персонаж на земле
          player.currentSprite = player.sprites.idle.left;
        }

        // Падение в пропасть (см. комментарии в player.update())
        if (player.position.y > _js_Canvas__WEBPACK_IMPORTED_MODULE_2__.canvas.height) {
          // sawTrap.restore();
          //sawTrap2.restore(); // !!!!!!!!!!!!
          _js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.jumpToggleActive = !_js_Keys__WEBPACK_IMPORTED_MODULE_8__.keys.jumpToggleActive;
          init();
          console.log('you lose');

          // сюда вставить звук проигрыша
        }
      }

      init();
      animate();
      window.addEventListener('keydown', _js_Keys__WEBPACK_IMPORTED_MODULE_8__.keyDownHandler);
      window.addEventListener('keyup', _js_Keys__WEBPACK_IMPORTED_MODULE_8__.keyUpHandler);
      window.addEventListener('click', e => {
        console.log(e.clientX, e.clientY);
        // debugger
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
        /* harmony export */"backgroundImg": () => /* reexport default export from named module */_assets_img_Background_images_bg_2_jpg__WEBPACK_IMPORTED_MODULE_10__,
        /* harmony export */"deadSignalZone": () => /* reexport default export from named module */_assets_img_Traps_Dead_signal_zone_png__WEBPACK_IMPORTED_MODULE_25__,
        /* harmony export */"deadSignalZoneHover": () => /* reexport default export from named module */_assets_img_Traps_Dead_signal_zone_hover_png__WEBPACK_IMPORTED_MODULE_26__,
        /* harmony export */"fan": () => /* reexport default export from named module */_assets_img_Traps_Fan_png__WEBPACK_IMPORTED_MODULE_23__,
        /* harmony export */"flamethrowerLeft": () => /* reexport default export from named module */_assets_img_Traps_Flamethrower_left_png__WEBPACK_IMPORTED_MODULE_27__,
        /* harmony export */"flamethrowerRight": () => /* reexport default export from named module */_assets_img_Traps_Flamethrower_right_png__WEBPACK_IMPORTED_MODULE_28__,
        /* harmony export */"flamethrowerVertical": () => /* reexport default export from named module */_assets_img_Traps_Flamethrower_left_png__WEBPACK_IMPORTED_MODULE_27__,
        /* harmony export */"heroDeath": () => /* reexport default export from named module */_assets_img_Hero_Player_death_png__WEBPACK_IMPORTED_MODULE_9__,
        /* harmony export */"heroFallL": () => /* reexport default export from named module */_assets_img_Hero_Fall_left_png__WEBPACK_IMPORTED_MODULE_8__,
        /* harmony export */"heroFallR": () => /* reexport default export from named module */_assets_img_Hero_Fall_right_png__WEBPACK_IMPORTED_MODULE_7__,
        /* harmony export */"heroIdleL": () => /* reexport default export from named module */_assets_img_Hero_Idle_left_png__WEBPACK_IMPORTED_MODULE_2__,
        /* harmony export */"heroIdleR": () => /* reexport default export from named module */_assets_img_Hero_Idle_right_png__WEBPACK_IMPORTED_MODULE_1__,
        /* harmony export */"heroJumpL": () => /* reexport default export from named module */_assets_img_Hero_Jump_left_png__WEBPACK_IMPORTED_MODULE_6__,
        /* harmony export */"heroJumpR": () => /* reexport default export from named module */_assets_img_Hero_Jump_right_png__WEBPACK_IMPORTED_MODULE_5__,
        /* harmony export */"heroRunL": () => /* reexport default export from named module */_assets_img_Hero_Run_left_png__WEBPACK_IMPORTED_MODULE_4__,
        /* harmony export */"heroRunR": () => /* reexport default export from named module */_assets_img_Hero_Run_right_png__WEBPACK_IMPORTED_MODULE_3__,
        /* harmony export */"platformImgSrc300": () => /* reexport default export from named module */_assets_img_Platforms_platform_png__WEBPACK_IMPORTED_MODULE_0__,
        /* harmony export */"platformJump": () => /* reexport default export from named module */_assets_img_Platforms_Platform_jump_png__WEBPACK_IMPORTED_MODULE_14__,
        /* harmony export */"platformJumpDisabled": () => /* reexport default export from named module */_assets_img_Platforms_Platform_jump_disabled_png__WEBPACK_IMPORTED_MODULE_15__,
        /* harmony export */"platformOne": () => /* reexport default export from named module */_assets_img_Platforms_Platform_one_png__WEBPACK_IMPORTED_MODULE_16__,
        /* harmony export */"platformOneDisabled": () => /* reexport default export from named module */_assets_img_Platforms_Platform_one_disabled_png__WEBPACK_IMPORTED_MODULE_19__,
        /* harmony export */"platformOneStep": () => /* reexport default export from named module */_assets_img_Platforms_Platform_oneStep_png__WEBPACK_IMPORTED_MODULE_12__,
        /* harmony export */"platformOneStepExplosion": () => /* reexport default export from named module */_assets_img_Platforms_Platform_oneStep_Explosion_png__WEBPACK_IMPORTED_MODULE_13__,
        /* harmony export */"platformSolid": () => /* reexport default export from named module */_assets_img_Platforms_Platform_solid_png__WEBPACK_IMPORTED_MODULE_11__,
        /* harmony export */"platformThree": () => /* reexport default export from named module */_assets_img_Platforms_Platform_three_png__WEBPACK_IMPORTED_MODULE_18__,
        /* harmony export */"platformThreeDisabled": () => /* reexport default export from named module */_assets_img_Platforms_Platform_three_disabled_png__WEBPACK_IMPORTED_MODULE_21__,
        /* harmony export */"platformTwo": () => /* reexport default export from named module */_assets_img_Platforms_Platform_two_png__WEBPACK_IMPORTED_MODULE_17__,
        /* harmony export */"platformTwoDisabled": () => /* reexport default export from named module */_assets_img_Platforms_Platform_two_disabled_png__WEBPACK_IMPORTED_MODULE_20__,
        /* harmony export */"saw": () => /* reexport default export from named module */_assets_img_Traps_Saw_png__WEBPACK_IMPORTED_MODULE_22__,
        /* harmony export */"spike": () => /* reexport default export from named module */_assets_img_Traps_Platform_spikes_png__WEBPACK_IMPORTED_MODULE_24__
        /* harmony export */
      });
      /* harmony import */
      var _assets_img_Platforms_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../assets/img/Platforms/platform.png */"./assets/img/Platforms/platform.png");
      /* harmony import */
      var _assets_img_Hero_Idle_right_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../assets/img/Hero/Idle_right.png */"./assets/img/Hero/Idle_right.png");
      /* harmony import */
      var _assets_img_Hero_Idle_left_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../assets/img/Hero/Idle_left.png */"./assets/img/Hero/Idle_left.png");
      /* harmony import */
      var _assets_img_Hero_Run_right_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../assets/img/Hero/Run_right.png */"./assets/img/Hero/Run_right.png");
      /* harmony import */
      var _assets_img_Hero_Run_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../assets/img/Hero/Run_left.png */"./assets/img/Hero/Run_left.png");
      /* harmony import */
      var _assets_img_Hero_Jump_right_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../../assets/img/Hero/Jump_right.png */"./assets/img/Hero/Jump_right.png");
      /* harmony import */
      var _assets_img_Hero_Jump_left_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../../assets/img/Hero/Jump_left.png */"./assets/img/Hero/Jump_left.png");
      /* harmony import */
      var _assets_img_Hero_Fall_right_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../../assets/img/Hero/Fall_right.png */"./assets/img/Hero/Fall_right.png");
      /* harmony import */
      var _assets_img_Hero_Fall_left_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../../assets/img/Hero/Fall_left.png */"./assets/img/Hero/Fall_left.png");
      /* harmony import */
      var _assets_img_Hero_Player_death_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../../assets/img/Hero/Player_death.png */"./assets/img/Hero/Player_death.png");
      /* harmony import */
      var _assets_img_Background_images_bg_2_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../../../assets/img/Background_images/bg_2.jpg */"./assets/img/Background_images/bg_2.jpg");
      /* harmony import */
      var _assets_img_Platforms_Platform_solid_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_solid.png */"./assets/img/Platforms/Platform_solid.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_oneStep_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_oneStep.png */"./assets/img/Platforms/Platform_oneStep.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_oneStep_Explosion_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_oneStep_Explosion.png */"./assets/img/Platforms/Platform_oneStep_Explosion.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_jump_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_jump.png */"./assets/img/Platforms/Platform_jump.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_jump_disabled_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_jump_disabled.png */"./assets/img/Platforms/Platform_jump_disabled.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_one_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_one.png */"./assets/img/Platforms/Platform_one.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_two_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_two.png */"./assets/img/Platforms/Platform_two.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_three_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_three.png */"./assets/img/Platforms/Platform_three.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_one_disabled_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_one_disabled.png */"./assets/img/Platforms/Platform_one_disabled.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_two_disabled_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_two_disabled.png */"./assets/img/Platforms/Platform_two_disabled.png");
      /* harmony import */
      var _assets_img_Platforms_Platform_three_disabled_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ../../../assets/img/Platforms/Platform_three_disabled.png */"./assets/img/Platforms/Platform_three_disabled.png");
      /* harmony import */
      var _assets_img_Traps_Saw_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ../../../assets/img/Traps/Saw.png */"./assets/img/Traps/Saw.png");
      /* harmony import */
      var _assets_img_Traps_Fan_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ../../../assets/img/Traps/Fan.png */"./assets/img/Traps/Fan.png");
      /* harmony import */
      var _assets_img_Traps_Platform_spikes_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ../../../assets/img/Traps/Platform_spikes.png */"./assets/img/Traps/Platform_spikes.png");
      /* harmony import */
      var _assets_img_Traps_Dead_signal_zone_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ../../../assets/img/Traps/Dead_signal_zone.png */"./assets/img/Traps/Dead_signal_zone.png");
      /* harmony import */
      var _assets_img_Traps_Dead_signal_zone_hover_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ../../../assets/img/Traps/Dead_signal_zone_hover.png */"./assets/img/Traps/Dead_signal_zone_hover.png");
      /* harmony import */
      var _assets_img_Traps_Flamethrower_left_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! ../../../assets/img/Traps/Flamethrower_left.png */"./assets/img/Traps/Flamethrower_left.png");
      /* harmony import */
      var _assets_img_Traps_Flamethrower_right_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! ../../../assets/img/Traps/Flamethrower_right.png */"./assets/img/Traps/Flamethrower_right.png");
      // const platformImgSrc300 = '../assets/img/Platforms/platform.png';
      // const heroIdleR = '../assets/img/Hero/Idle_right.png';
      // const heroIdleL = '../assets/img/Hero/Idle_left.png';
      // const heroRunR = '../assets/img/Hero/Run_right.png';
      // const heroRunL = '../assets/img/Hero/Run_left.png';
      // const heroJumpR = '../assets/img/Hero/Jump_right.png';
      // const heroJumpL = '../assets/img/Hero/Jump_left.png';
      // const heroFallR = '../assets/img/Hero/Fall_right.png';
      // const heroFallL = '../assets/img/Hero/Fall_left.png';
      // const heroDeath = '../assets/img/Hero/Player_death.png';
      // const backgroundImg = '../assets/img/Background_images/bg_2.jpg';
      // const platformSolid = '../assets/img/Platforms/Platform_solid.png';
      // const platformOneStep = '../assets/img/Platforms/Platform_oneStep.png';
      // const platformOneStepExplosion = '../assets/img/Platforms/Platform_oneStep_Explosion.png';
      // const platformJump = '../assets/img/Platforms/Platform_jump.png';
      // const platformJumpDisabled = '../assets/img/Platforms/Platform_jump_disabled.png';
      // const platformOne = '../assets/img/Platforms/Platform_one.png';
      // const platformTwo = '../assets/img/Platforms/Platform_two.png';
      // const platformThree = '../assets/img/Platforms/Platform_three.png';
      // const platformOneDisabled = '../assets/img/Platforms/Platform_one_disabled.png';
      // const platformTwoDisabled = '../assets/img/Platforms/Platform_two_disabled.png';
      // const platformThreeDisabled = '../assets/img/Platforms/Platform_three_disabled.png';
      // const saw = '../assets/img/Traps/Saw.png';
      // const fan = '../assets/img/Traps/Fan.png';
      // const spike = '../assets/img/Traps/Platform_spikes.png';
      // const deadSignalZone = '../assets/img/Traps/Dead_signal_zone.png';
      // const deadSignalZoneHover = '../assets/img/Traps/Dead_signal_zone_hover.png';
      // const flamethrowerLeft = '../assets/img/Traps/Flamethrower_left.png';
      // const flamethrowerRight = '../assets/img/Traps/Flamethrower_right.png';
      // const flamethrowerUp = '../assets/img/Traps/Flamethrower_left.png';
      // const flamethrowerDown = '../assets/img/Traps/Flamethrower_left.png';

      // import flamethrowerUp from '/assets/img/Traps/Flamethrower_left.png';
      // import flamethrowerDown from '/assets/img/Traps/Flamethrower_left.png';

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
      var _Traps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Traps */"./src/js/Traps.js");
      /* harmony import */
      var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./Assets */"./src/js/Assets.js");
      /* harmony import */
      var _CreateImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./CreateImage */"./src/js/CreateImage.js");
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
      //   
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
          switch (cell) {
            case '1p':
              // Space toggled platform (One)
              platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformOne(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformOne, 36, 36), platforms));
              break;
            case '2p':
              // Space toggled platform (Two)
              platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformTwo(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformTwo, 36, 36), platforms));
              break;
            case '3p':
              // Space toggled platform (Three)
              platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformThree(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformThree, 36, 36), platforms));
              break;
            case '1s':
              // One-Step platform
              platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.OneStep(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformOneStep, 36, 36), platforms));
              break;
            case 'sl':
              // Solid platform
              platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Platform(
              // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformSolid, 36, 36), platforms));
              break;
            case 'ja':
              // Jump-toggled platform (active)
              platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.JumpToggleActive(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformJump, 36, 36), platforms));
              break;
            case 'jd':
              // Jump-toggled platform (disabled)
              platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.JumpToggleDisabled(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformJump, 36, 36), platforms));
              break;
            case 'sk':
              // Saw trap platform
              platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.PlatformSpikes(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.spike, 36, 36), platforms));
              break;
            case 'sw':
              // Spikes trap platform
              platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.Saw(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.saw, 36, 36), platforms));
              break;
            case 'dz':
              // Dead signal zone
              platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.DeadSignal(index_X * 36, index_Y * 36, (0, _CreateImage__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.deadSignalZone, 36, 36), platforms));
              break;
            // case 'fl': // Flamethrower (left)
            // platforms.push(new FlamethrowerLeft(
            //   index_X * 36, index_Y * 36, createImage(flamethrowerLeft, 36, 36), platforms))
            //   break;
            // case 'fr': // Flamethrower (right)
            // platforms.push(new FlamethrowerRight(
            //   index_X * 36, index_Y * 36, createImage(flamethrowerRight, 36, 36), platforms))
            //   break;
            // case 'fv': // Flamethrower (vertical)
            // platforms.push(new FlamethrowerVertical(
            //   index_X * 36, index_Y * 36, createImage(flamethrowerVertical, 36, 36), platforms))
            //   break;
          }
        });
      });

      // case 'fu': // Flamethrower (up)
      // platforms.push(new FlamethrowerUp(
      //   index_X * 36, index_Y * 36, createImage(flamethrowerUp, 36, 36), platforms))
      //   break;
      // case 'fd': // Flamethrower (down)
      // platforms.push(new FlamethrowerDown(
      //   index_X * 36, index_Y * 36, createImage(flamethrowerDown, 36, 36), platforms))
      //   break;

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
              keys.up.pressed = true;
              if (_index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y <= 0 && _index__WEBPACK_IMPORTED_MODULE_0__.player.velocity.y >= -3.5) {
                //(player.velocity.y === 0) или (player.velocity.y <= 0 && player.velocity.y >= -3.5)
                keys.jumpToggleActive ? keys.jumpToggleActive = false : keys.jumpToggleActive = true;
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
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"DeadSignal": () => /* binding */DeadSignal,
        /* harmony export */"Fan": () => /* binding */Fan,
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
      var _CreateImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./CreateImage */"./src/js/CreateImage.js");
      /* harmony import */
      var _Assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./Assets */"./src/js/Assets.js");
      /* harmony import */
      var _Keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./Keys */"./src/js/Keys.js");
      /* harmony import */
      var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../index */"./src/index.js");
      // import { CollisionBlock, platforms, parsedCollisions } from './Collision';
      // import { canvas, c } from './Canvas';
      // import { createImage } from './CreateImage';
      // import { platformImgSrc300,
      //   heroIdleR,
      //   heroIdleL,
      //   heroRunR,
      //   heroRunL,
      //   heroJumpR,
      //   heroJumpL,
      //   heroFallR,
      //   heroFallL,
      //   heroDeath,
      //   backgroundImg,
      //   platformSolid,
      //   platformOneStep,
      //   platformOneStepExplosion,
      //   platformJump,
      //   platformJumpDisabled,
      //   platformOne,
      //   platformTwo,
      //   platformThree,
      //   platformOneDisabled,
      //   platformTwoDisabled,
      //   platformThreeDisabled,
      //   saw,
      //   fan,
      //   spike,
      //   deadSignalZone,
      //   deadSignalZoneHover,
      //       } from './Assets';

      // import { keys } from './Keys';
      // import { player } from '../index';
      // import { leftNeighboorBlockFromHero } from '../index';
      // class Platform {
      //   constructor (posX, posY, image) {
      //     this.position = {
      //       x: posX,
      //       y: posY
      //     }
      //     this.image = image;
      //     this.width = image.width;
      //     this.height = image.height;
      //     this.frames = 0;
      //     this.frequency = 28;
      //     this.sprites = {
      //       idle: this.image,
      //     }
      //     this.currentSprite = this.sprites.idle;
      //     this.type = 'solid';
      //     this.statusActive = true;
      //   }

      //   get top() {
      //     return this.position.y;
      //   }
      //   get bottom() {
      //     return this.position.y + this.height;
      //   }
      //   get left() {
      //     return this.position.x;
      //   }
      //   get right() {
      //     return this.position.x + this.width;
      //   }

      //   set top(value) {
      //     this.position.y = value;
      //   }
      //   set bottom(value) {
      //     this.position.y = value;
      //   }
      //   set left(value) {
      //     this.position.x = value;
      //   }
      //   set right(value) {
      //     this.position.x = value;
      //   }

      //   getType() {
      //     return this.type;
      //   }
      //   draw() {
      //     c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.left, this.top, this.width, this.height) // 48, 0, 48, 48 - player sprite crop (x, y, w, h) // 36 размер кадра в спрайте
      //   }
      //   update() {
      //     this.frames++;
      //     if (this.frames > this.frequency) this.frames = 0;
      //     this.draw();
      //   }
      //   collisionAbove() {
      //   // Player - platform collision (player is above the platform)
      //     if (player.bottom <= this.top &&
      //       player.bottom + player.velocity.y >= this.top && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
      //       // Player - platform collision (player on the platform - inside of left and right platform boundaries)
      //       player.right - player.width / 4 >= this.left  && // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
      //       player.left <= this.right - player.width / 4) { 
      //       player.velocity.y = -3.5; // если касается земли // -3.5

      //       if (keys.up.pressed ||
      //       keys.up.pressed && keys.right.pressed ||
      //       keys.up.pressed && keys.left.pressed) {
      //         player.velocity.y = -player.jumpHeight;
      //         player.gravity = 0.25;
      //       } 
      //     }
      //   }
      //   collisionUnder() {
      //   // Player - platform collision (player is under the platform)
      //     if (player.top - player.velocity.y * 0.5 <= this.bottom &&
      //       player.bottom + player.velocity.y >= this.top &&
      //       player.left >= this.right / 1.25 && // можно сделать 1.75
      //       player.right <= this.right + player.width / 1.25) {
      //         player.velocity.y = 1;/* player.currentSprite = player.sprites.idle.right */
      //       }
      //   }
      //   collisionLeftSide() {
      //   // Player - platform collision (player is left from the platform and moves right)
      //     if (keys.right.pressed &&
      //       player.bottom >= this.top && 
      //       player.top <= this.bottom &&
      //       player.right >= this.left) {
      //         player.velocity.x = 0;
      //         console.log('hit!');
      //     } // Continue: Player - platform collision (player holds right and is right from the platform - so he cans move)
      //     if (keys.right.pressed &&
      //       player.bottom >= this.top && 
      //       player.top <= this.bottom &&
      //       player.right >= this.right) {
      //         player.velocity.x = 2;
      //         console.log('free!');
      //     }
      //   }
      //   collisionRightSide() {
      //   // Player - platform collision (player is right from the platform and moves left)
      //     if (keys.left.pressed &&
      //       (leftNeighboorBlockFromHero != undefined || leftNeighboorBlockFromHero != null) &&
      //       player.bottom >= leftNeighboorBlockFromHero.top && 
      //       player.top <= leftNeighboorBlockFromHero.bottom &&
      //       player.left <= leftNeighboorBlockFromHero.right) {
      //         player.velocity.x = 0;
      //         console.log('hit!');
      //     } // Continue: Player - platform collision (player holds left and is left from the platform - so he cans move)
      //       if (keys.left.pressed &&
      //         leftNeighboorBlockFromHero != undefined &&
      //         (player.bottom <= leftNeighboorBlockFromHero.top || 
      //         player.top >= leftNeighboorBlockFromHero.bottom) &&
      //         player.left <= leftNeighboorBlockFromHero.left) { // или "-" player.width ???
      //           player.velocity.x = -2;
      //           console.log('free!');
      //       }
      //     }

      //   collision() { // разбито на отдельные методы, для частичного наследования
      //     this.collisionAbove();
      //     this.collisionUnder();
      //     this.collisionLeftSide();
      //     this.collisionRightSide();
      //   }
      // }

      //   class PlatformSpikes extends Platform {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.type = 'spikes';
      //   }
      //   collision() {
      //   // Player - platform collision (player is above the spike platform)
      //     if (player.bottom <= this.top &&
      //       player.bottom + player.velocity.y >= this.top && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
      //       // Player - platform collision (player on the platform - inside of left and right platform boundaries)
      //       player.right >= this.right / 3 && // + player.width / 3 - поправка чтобы персонаж погибал касаясь самого края платформы (без этого он еще погибал не доходя трети ширины спрайта героя)
      //       player.left <= this.right - player.width / 3) { 
      //       player.die();
      //     }
      //     // Player - platform collision (player is under the platform)
      //     if (player.top <= this.bottom &&
      //       player.bottom + player.velocity.y >= this.top &&
      //       player.left >= this.left - player.width / 2 && // можно сделать 1.75
      //       player.right <= this.right + player.width / 2) {
      //         player.die();
      //     }
      //   }
      // }

      // class Saw extends PlatformSpikes {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.type = 'saw';
      //     this.frequency = 23;
      //   }
      // }

      // class Fan extends Platform {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.type = 'fan';
      //     this.sprites = {
      //       idle: createImage(fan, 36, 36),
      //     }
      //     this.currentSprite = this.sprites.idle;
      //     this.frequency = 23;
      //   }
      // }

      // class JumpToggleActive extends Platform {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.type = 'jumpToggleActive';
      //     this.sprites = {
      //       idle: createImage(platformJump, 36, 36),
      //       disabled: createImage(platformJumpDisabled, 36, 36),
      //     }
      //     this.currentSprite = this.sprites.idle;
      //     this.frequency = 63;
      //     // this.statusActive = status;
      //   }
      //   toggle() {
      //     if (keys.jumpToggleActive === true) {
      //       this.currentSprite = this.sprites.idle;
      //     } else {
      //       this.currentSprite = this.sprites.disabled;
      //     }
      //   }
      //   collision() { // Убрать
      //     // if (keys.jumpToggleActive) {
      //     //   super.collision();
      //     // }
      //   }
      // }

      // class JumpToggleDisabled extends Platform {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.type = 'jumpToggleDisabled';
      //     this.sprites = {
      //       idle: createImage(platformJump, 36, 36),
      //       disabled: createImage(platformJumpDisabled, 36, 36),
      //     }
      //     this.currentSprite = this.sprites.disabled;
      //     this.frequency = 63;
      //   }
      //   toggle() {
      //     if (keys.jumpToggleActive === false) {
      //       this.currentSprite = this.sprites.idle;
      //     } else {
      //       this.currentSprite = this.sprites.disabled;
      //     }
      //   }
      //   collision() { // Убрать
      //     // if (keys.jumpToggleActive) {
      //     //   super.collision();
      //     // }
      //   }
      // }

      // class OneStep extends Platform {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.temporaryPosX = posX;
      //     this.hits = 0;
      //     this.sprites = {
      //       idle: createImage(platformOneStep, 36, 36),
      //       explosion: createImage(platformOneStepExplosion, 36, 36),
      //     }
      //     this.currentSprite = this.sprites.idle;
      //     this.frequency = 28;
      //     this.type = 'oneStep';
      //   }
      //   destroy() {
      //     this.currentSprite = this.sprites.explosion;
      //     setTimeout(() => {
      //       this.position.x = -9999;
      //       this.currentSprite = this.sprites.idle;
      //   }, 550);
      //     this.hits = 0;
      //   } 
      //   restore() {
      //     this.position.x = this.temporaryPosX;
      //   }
      // }

      // class SpaceToggledPlatform extends Platform {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.type = 'toggledBySpacePlatform';
      //     this.sprites = {
      //       idle: createImage(deadSignalZoneHover, 36, 36),
      //       disabled: createImage(platformOneDisabled, 36, 36),
      //     }
      //     this.currentSprite = this.sprites.idle;
      //     this.frequency = 63;
      //     this.setCount = null;
      //     this.activeStatus = true;
      //   }
      //   checkSpaceToggleCounter() {
      //    keys.spaceToggleCounter >= 4 ? keys.spaceToggleCounter =  1 : keys.spaceToggleCounter; 
      //   }
      //   collision() {
      //     if (keys.spaceToggleCounter === this.setCount) {
      //       super.collisionAbove();
      //       super.collisionUnder();
      //       super.collisionLeftSide();
      //       if ((leftNeighboorBlockFromHero != undefined ||
      //         leftNeighboorBlockFromHero != null) &&
      //         keys.spaceToggleCounter === leftNeighboorBlockFromHero.setCount) {
      //           super.collisionRightSide();
      //       }

      //       this.currentSprite = this.sprites.idle;
      //       this.checkSpaceToggleCounter();
      //     } else {
      //       this.currentSprite = this.sprites.disabled;
      //       this.checkSpaceToggleCounter();
      //     // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)   
      //     if (platforms.some((block) => {
      //       return (player.bottom * 0.75 >= block.top &&
      //         player.bottom * 0.35 <= block.bottom &&
      //         player.right * 0.75 >= block.left &&
      //         player.right * 0.25 <= block.right);
      //     })) {
      //       keys.deadSignalZone = true;
      //       console.log('inside')
      //     } else {
      //       console.log('outside')   
      //       keys.deadSignalZone = false;
      //     }
      //     }
      //   } 
      // }

      // class PlatformOne extends SpaceToggledPlatform {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.type = 'platformOne';
      //     this.setCount = 1;
      //     this.sprites = {
      //       idle: createImage(platformOne, 36, 36),
      //       disabled: createImage(platformOneDisabled, 36, 36),
      //     }
      //   }
      // }

      // class PlatformTwo extends SpaceToggledPlatform {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.type = 'platformTwo';
      //     this.setCount = 2;
      //     this.sprites = {
      //       idle: createImage(platformTwo, 36, 36),
      //       disabled: createImage(platformTwoDisabled, 36, 36),
      //     }
      //   }
      // }

      // class PlatformThree extends SpaceToggledPlatform {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.type = 'platformThree';
      //     this.setCount = 3;
      //     this.sprites = {
      //       idle: createImage(platformThree, 36, 36),
      //       disabled: createImage(platformThreeDisabled, 36, 36),
      //     }
      //   }
      // }

      // class DeadSignal extends SpaceToggledPlatform {
      //   constructor(posX, posY, image) {
      //     super(posX, posY, image);
      //     this.type = 'deadSignalZone';
      //     this.frequency = 1;
      //     this.sprites = {
      //       idle: createImage(deadSignalZone, 36, 36),
      //       disabled: createImage(deadSignalZoneHover, 36, 36),
      //     }
      //   }

      //   // collision() {
      //   //   if ((player.left <= this.right &&
      //   //     player.right >= this.left &&
      //   //     player.top <= this.bottom &&
      //   //     player.bottom >= this.top) &&
      //   //     (platforms.some((block) => {
      //   //       return (player.position.y + player.height * 0.75 >= block.position.y &&
      //   //         player.position.y + player.height * 0.35 <= block.position.y + block.height &&
      //   //         player.position.x + player.width * 0.75 >= block.position.x &&
      //   //         player.position.x + player.width * 0.25 <= block.position.x + block.width);
      //   //     }))
      //   //     ) {
      //   //     this.checkSpaceToggleCounter();
      //   //   // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)   

      //   //     keys.deadSignalZone = true;
      //   //     this.currentSprite = this.sprites.idle;
      //   //     console.log('inside')
      //   //   } else if ((platforms.some((block) => {
      //   //     return (player.position.y + player.height <= block.position.y &&
      //   //       player.position.y + player.height <= block.position.y + block.height &&
      //   //       player.position.x + player.width >= block.position.x &&
      //   //       player.position.x + player.width <= block.position.x + block.width);
      //   //   }))
      //   //     ) {

      //   //     console.log('outside')   
      //   //     keys.deadSignalZone = false;
      //   //     this.currentSprite = this.sprites.disabled;
      //   //       }
      //   //   }

      //   hover() {
      //     if ((player.left <= this.right &&
      //       player.right >= this.left &&
      //       player.top <= this.bottom &&
      //       player.bottom >= this.top) &&
      //       (platforms.some((block) => {
      //         return (player.bottom * 0.75 >= block.top &&
      //           player.bottom * 0.35 <= block.bottom &&
      //           player.right * 0.75 >= block.left &&
      //           player.right * 0.25 <= block.right);
      //       }))
      //       ) { // Inside of the block
      //       this.checkSpaceToggleCounter();
      //       this.currentSprite = this.sprites.idle;
      //     } else if ((platforms.some((block) => { // Outside of the block
      //       return (player.bottom * 0.75 >= block.top &&
      //         player.bottom * 0.35 <= block.bottom &&
      //         player.right * 0.75 >= block.left &&
      //         player.right * 0.25 <= block.right)}))) {
      //           this.currentSprite = this.sprites.disabled;
      //       }
      //   }

      //   collision() {
      //     this.hover(); // Hover the block when the hero is inside of it
      //       // Hero is inside or outside of block (for toggled by space platformes and deadSignal zone platforms)   
      //       if (platforms.some((block) => {
      //         return (player.bottom * 0.75 >= block.top &&
      //           player.bottom * 0.35 <= block.bottom &&
      //           player.right * 0.75 >= block.left &&
      //           player.right * 0.25 <= block.right);
      //       })) {
      //         keys.deadSignalZone = true;
      //         console.log('inside')
      //       } else {
      //         console.log('outside')   
      //         keys.deadSignalZone = false;
      //       }
      //   }
      // } 

      // export { Platform,
      //         PlatformSpikes,
      //         Saw,
      //         OneStep,
      //         Fan,
      //         JumpToggleActive,
      //         JumpToggleDisabled,
      //         PlatformOne,
      //         PlatformTwo,
      //         PlatformThree,
      //         DeadSignal,
      //       }

      // Рабочее - до исправления top left bottom right

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
          _Canvas__WEBPACK_IMPORTED_MODULE_1__.c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height); // 48, 0, 48, 48 - player sprite crop (x, y, w, h) // 36 размер кадра в спрайте
        }

        update() {
          this.frames++;
          if (this.frames > this.frequency) this.frames = 0;
          this.draw();
        }
        collisionAbove() {
          // Player - platform collision (player is above the platform)
          if (_index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height <= this.position.y && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height + _index__WEBPACK_IMPORTED_MODULE_5__.player.velocity.y >= this.position.y &&
          // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
          // Player - platform collision (player on the platform - inside of left and right platform boundaries)
          _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width - _index__WEBPACK_IMPORTED_MODULE_5__.player.width / 4 >= this.position.x &&
          // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
          _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x <= this.position.x + this.width - _index__WEBPACK_IMPORTED_MODULE_5__.player.width / 4) {
            _index__WEBPACK_IMPORTED_MODULE_5__.player.velocity.y = -3.5; // если касается земли // -3.5

            if (_Keys__WEBPACK_IMPORTED_MODULE_4__.keys.up.pressed || _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.up.pressed && _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.right.pressed || _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.up.pressed && _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.left.pressed) {
              _index__WEBPACK_IMPORTED_MODULE_5__.player.velocity.y = -_index__WEBPACK_IMPORTED_MODULE_5__.player.jumpHeight;
              _index__WEBPACK_IMPORTED_MODULE_5__.player.gravity = 0.25;
            }
          }
        }
        collisionUnder() {
          // Player - platform collision (player is under the platform)
          if (_index__WEBPACK_IMPORTED_MODULE_5__.player.position.y - _index__WEBPACK_IMPORTED_MODULE_5__.player.velocity.y * 0.5 <= this.position.y + this.height && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height + _index__WEBPACK_IMPORTED_MODULE_5__.player.velocity.y >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x >= this.position.x - _index__WEBPACK_IMPORTED_MODULE_5__.player.width / 1.25 &&
          // можно сделать 1.75
          _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width <= this.position.x + this.width + _index__WEBPACK_IMPORTED_MODULE_5__.player.width / 1.25) {
            _index__WEBPACK_IMPORTED_MODULE_5__.player.velocity.y = 1; /* player.currentSprite = player.sprites.idle.right */
          }
        }

        collisionLeftSide() {
          // Player - platform collision (player is left from the platform and moves right)
          if (_Keys__WEBPACK_IMPORTED_MODULE_4__.keys.right.pressed && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y <= this.position.y + this.height && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width >= this.position.x) {
            _index__WEBPACK_IMPORTED_MODULE_5__.player.velocity.x = 0;
            console.log('hit!');
          } // Continue: Player - platform collision (player holds right and is right from the platform - so he cans move)
          if (_Keys__WEBPACK_IMPORTED_MODULE_4__.keys.right.pressed && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height >= this.position.y && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y <= this.position.y + this.height && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width >= this.position.x + this.width) {
            _index__WEBPACK_IMPORTED_MODULE_5__.player.velocity.x = 2;
            console.log('free!');
          }
        }
        collisionRightSide() {
          // Player - platform collision (player is right from the platform and moves left)
          if (_Keys__WEBPACK_IMPORTED_MODULE_4__.keys.left.pressed && (_index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero != undefined || _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero != null) && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height >= _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero.position.y && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y <= _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero.height && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x <= _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero.width) {
            _index__WEBPACK_IMPORTED_MODULE_5__.player.velocity.x = 0;
            console.log('hit!');
          } // Continue: Player - platform collision (player holds left and is left from the platform - so he cans move)
          if (_Keys__WEBPACK_IMPORTED_MODULE_4__.keys.left.pressed && _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero != undefined && (_index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height <= _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero.position.y || _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y >= _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero.height) && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x <= _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero.position.x) {
            // или "-" player.width ???
            _index__WEBPACK_IMPORTED_MODULE_5__.player.velocity.x = -2;
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
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'fan';
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.fan, 36, 36)
          };
          this.currentSprite = this.sprites.idle;
          this.frequency = 23;
        }
      }
      class JumpToggleActive extends Platform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'jumpToggleActive';
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJump, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJumpDisabled, 36, 36)
          };
          this.currentSprite = this.sprites.idle;
          this.frequency = 63;
          // this.statusActive = status;
        }

        toggle() {
          if (_Keys__WEBPACK_IMPORTED_MODULE_4__.keys.jumpToggleActive === true) {
            this.currentSprite = this.sprites.idle;
          } else {
            this.currentSprite = this.sprites.disabled;
          }
        }
        collision() {// Убрать
          // if (keys.jumpToggleActive) {
          //   super.collision();
          // }
        }
      }
      class JumpToggleDisabled extends Platform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'jumpToggleDisabled';
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJump, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJumpDisabled, 36, 36)
          };
          this.currentSprite = this.sprites.disabled;
          this.frequency = 63;
        }
        toggle() {
          if (_Keys__WEBPACK_IMPORTED_MODULE_4__.keys.jumpToggleActive === false) {
            this.currentSprite = this.sprites.idle;
          } else {
            this.currentSprite = this.sprites.disabled;
          }
        }
        collision() {// Убрать
          // if (keys.jumpToggleActive) {
          //   super.collision();
          // }
        }
      }
      class OneStep extends Platform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.temporaryPosX = posX;
          this.hits = 0;
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneStep, 36, 36),
            explosion: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneStepExplosion, 36, 36)
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
      }
      class SpaceToggledPlatform extends Platform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'toggledBySpacePlatform';
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.deadSignalZoneHover, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneDisabled, 36, 36)
          };
          this.currentSprite = this.sprites.idle;
          this.frequency = 63;
          this.setCount = null;
          this.activeStatus = true;
        }
        checkSpaceToggleCounter() {
          _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.spaceToggleCounter >= 4 ? _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.spaceToggleCounter = 1 : _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.spaceToggleCounter;
        }
        collision() {
          if (_Keys__WEBPACK_IMPORTED_MODULE_4__.keys.spaceToggleCounter === this.setCount) {
            super.collisionAbove();
            super.collisionUnder();
            super.collisionLeftSide();
            if ((_index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero != undefined || _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero != null) && _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.spaceToggleCounter === _index__WEBPACK_IMPORTED_MODULE_5__.leftNeighboorBlockFromHero.setCount) {
              super.collisionRightSide();
            }
            this.currentSprite = this.sprites.idle;
            this.checkSpaceToggleCounter();
          } else {
            this.currentSprite = this.sprites.disabled;
            this.checkSpaceToggleCounter();
            // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)   
            if (_Collision__WEBPACK_IMPORTED_MODULE_0__.platforms.some(block => {
              return _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height * 0.75 >= block.position.y && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height * 0.35 <= block.position.y + block.height && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width * 0.75 >= block.position.x && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width * 0.25 <= block.position.x + block.width;
            })) {
              _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.deadSignalZone = true;
              console.log('inside');
            } else {
              console.log('outside');
              _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.deadSignalZone = false;
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
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOne, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneDisabled, 36, 36)
          };
        }
      }
      class PlatformTwo extends SpaceToggledPlatform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'platformTwo';
          this.setCount = 2;
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformTwo, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformTwoDisabled, 36, 36)
          };
        }
      }
      class PlatformThree extends SpaceToggledPlatform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'platformThree';
          this.setCount = 3;
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformThree, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformThreeDisabled, 36, 36)
          };
        }
      }
      class DeadSignal extends SpaceToggledPlatform {
        constructor(posX, posY, image) {
          super(posX, posY, image);
          this.type = 'deadSignalZone';
          this.frequency = 1;
          this.sprites = {
            idle: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.deadSignalZone, 36, 36),
            disabled: (0, _CreateImage__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.deadSignalZoneHover, 36, 36)
          };
        }

        // collision() {
        //   if ((player.left <= this.right &&
        //     player.right >= this.left &&
        //     player.top <= this.bottom &&
        //     player.bottom >= this.top) &&
        //     (platforms.some((block) => {
        //       return (player.position.y + player.height * 0.75 >= block.position.y &&
        //         player.position.y + player.height * 0.35 <= block.position.y + block.height &&
        //         player.position.x + player.width * 0.75 >= block.position.x &&
        //         player.position.x + player.width * 0.25 <= block.position.x + block.width);
        //     }))
        //     ) {
        //     this.checkSpaceToggleCounter();
        //   // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)   

        //     keys.deadSignalZone = true;
        //     this.currentSprite = this.sprites.idle;
        //     console.log('inside')
        //   } else if ((platforms.some((block) => {
        //     return (player.position.y + player.height <= block.position.y &&
        //       player.position.y + player.height <= block.position.y + block.height &&
        //       player.position.x + player.width >= block.position.x &&
        //       player.position.x + player.width <= block.position.x + block.width);
        //   }))
        //     ) {

        //     console.log('outside')   
        //     keys.deadSignalZone = false;
        //     this.currentSprite = this.sprites.disabled;
        //       }
        //   }

        hover() {
          if (_index__WEBPACK_IMPORTED_MODULE_5__.player.left <= this.right && _index__WEBPACK_IMPORTED_MODULE_5__.player.right >= this.left && _index__WEBPACK_IMPORTED_MODULE_5__.player.top <= this.bottom && _index__WEBPACK_IMPORTED_MODULE_5__.player.bottom >= this.top && _Collision__WEBPACK_IMPORTED_MODULE_0__.platforms.some(block => {
            return _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height * 0.75 >= block.top && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height * 0.35 <= block.bottom && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width * 0.75 >= block.left && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width * 0.25 <= block.right;
          })) {
            // Inside of the block
            this.checkSpaceToggleCounter();
            this.currentSprite = this.sprites.idle;
          } else if (_Collision__WEBPACK_IMPORTED_MODULE_0__.platforms.some(block => {
            // Outside of the block
            return _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height * 0.75 >= block.top && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height * 0.35 <= block.bottom && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width * 0.75 >= block.left && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width * 0.25 <= block.right;
          })) {
            this.currentSprite = this.sprites.disabled;
          }
        }
        collision() {
          this.hover(); // Hover the block when the hero is inside of it
          // Hero is inside or outside of block (for toggled by space platformes and deadSignal zone platforms)   
          if (_Collision__WEBPACK_IMPORTED_MODULE_0__.platforms.some(block => {
            return _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height * 0.75 >= block.top && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.y + _index__WEBPACK_IMPORTED_MODULE_5__.player.height * 0.35 <= block.bottom && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width * 0.75 >= block.left && _index__WEBPACK_IMPORTED_MODULE_5__.player.position.x + _index__WEBPACK_IMPORTED_MODULE_5__.player.width * 0.25 <= block.right;
          })) {
            _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.deadSignalZone = true;
            console.log('inside');
          } else {
            console.log('outside');
            _Keys__WEBPACK_IMPORTED_MODULE_4__.keys.deadSignalZone = false;
          }
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
            x: 180,
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
              case 'jumpToggleActive':
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
                    this.velocity.y = 0;
                    _Keys__WEBPACK_IMPORTED_MODULE_3__.keys.up.pressed = false;
                    platform.hits++;
                    platform.destroy();
                    this.top = platform.top - this.height - 0.1;
                    break;
                  }
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

      /***/
    },

    /***/"./src/js/Traps.js":
    /*!*************************!*\
      !*** ./src/js/Traps.js ***!
      \*************************/
    /***/
    () => {
      throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Projects\\Game\\src\\js\\Traps.js: Identifier 'Flamethrower' has already been declared. (201:6)\n\n\u001b[0m \u001b[90m 199 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 200 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 201 |\u001b[39m \u001b[36mclass\u001b[39m \u001b[33mFlamethrower\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mPlatformSpikes\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 202 |\u001b[39m   \u001b[0m\n\u001b[0m \u001b[90m 203 |\u001b[39m   constructor(posX\u001b[33m,\u001b[39m posY\u001b[33m,\u001b[39m image) {\u001b[0m\n\u001b[0m \u001b[90m 204 |\u001b[39m     \u001b[36msuper\u001b[39m(posX\u001b[33m,\u001b[39m posY\u001b[33m,\u001b[39m image)\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:946:12)\n    at Parser.raise (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:3270:19)\n    at ScopeHandler.checkRedeclarationInScope (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:1556:19)\n    at ScopeHandler.declareName (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:1527:12)\n    at Parser.declareNameFromIdentifier (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:7544:16)\n    at Parser.parseClassId (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13597:14)\n    at Parser.parseClass (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13279:10)\n    at Parser.parseStatementContent (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12578:21)\n    at Parser.parseStatementLike (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12549:17)\n    at Parser.parseModuleItem (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12526:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13121:36)\n    at Parser.parseBlockBody (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Parser.parseProgram (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12437:10)\n    at Parser.parseTopLevel (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:12427:25)\n    at Parser.parse (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:14245:10)\n    at parse (D:\\Projects\\Game\\node_modules\\@babel\\parser\\lib\\index.js:14286:38)\n    at parser (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\parser\\index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\transformation\\index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (D:\\Projects\\Game\\node_modules\\@babel\\core\\lib\\transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (D:\\Projects\\Game\\node_modules\\gensync\\index.js:261:32)\n    at D:\\Projects\\Game\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (D:\\Projects\\Game\\node_modules\\gensync\\index.js:223:11)");

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
      // dz - platform One
      // 2p - platform Two
      // 3p - platform Three
      // ja - platform Jump-Toggle (active)
      // jd - platform Jump-Toggle (disabled)
      // 1s - platform One-Step
      // Traps:
      // sw - Saw trap
      // sk - Spikes trap
      // fl - Flamethrower (left)
      // fr - Flamethrower (right)
      // fu - Flamethrower (up)
      // fd - Flamethrower (down)
      // dz - Dead signal zone
      // Decorations:
      // 1b - Frame brick 1
      // 2b - Frame block 2
      // Empty:
      // ee - Empty block

      const collisionsLevel_1 = [['dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz'], ['dz', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl'], ['sl', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'sl'], ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'dz', 'sl'], ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', '', '', '', '', '', '', '', 'sl', 'dz', 'sl'], ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', '', 'jd', '', 'ja', '', 'sl', 'sl', 'sl', 'dz', 'sl'], ['sl', 'dz', 'sl', 'sl', '2p', '', '', '', '', '', '', '', 'jp', 'sw', 'dz', 'sl'], ['sl', 'dz', 'sl', 'sl', 'sl', 'sl', '', '', '', '', '', '', '', '', 'dz', 'sl'], ['sl',, 'sl', 'sl', '', '', '', 'fl', '', '', '', '', '1s', '', 'dz', 'sl'], ['sl', 'dz', 'dz', '', '',, '', 'fr',, '1s', '1s', '', '', '', 'dz', 'sl'], ['sl', 'dz', 'sl', '', '', 'dz', '', 'sl', '', 'sl', '', '', '', '', '', ''], ['', 'sl',, 'dz', '', 'dz', '', '', '3p', '', '2p', '', 'sk', '',, ''], ['', 'dz', '', 'sl', 'sl', '', 'sl', 'sl', 'dz', 'dz', 'dz', 'sl', 'sl', 'sl', 'dz', ''], ['sl', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'dz', 'sl', 'dz', 'sl'], ['sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl'], ['sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl', 'sl']];

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
    },

    /***/"./assets/img/Background_images/bg_2.jpg":
    /*!***********************************************!*\
      !*** ./assets/img/Background_images/bg_2.jpg ***!
      \***********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/7c68bde787cbb30d2409.jpg";

      /***/
    },

    /***/"./assets/img/Hero/Fall_left.png":
    /*!***************************************!*\
      !*** ./assets/img/Hero/Fall_left.png ***!
      \***************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/caa8591cb3f3a1855c29.png";

      /***/
    },

    /***/"./assets/img/Hero/Fall_right.png":
    /*!****************************************!*\
      !*** ./assets/img/Hero/Fall_right.png ***!
      \****************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/61cdd2e0f3c3604e7b1f.png";

      /***/
    },

    /***/"./assets/img/Hero/Idle_left.png":
    /*!***************************************!*\
      !*** ./assets/img/Hero/Idle_left.png ***!
      \***************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/47bb81cb0aaa2c499d5c.png";

      /***/
    },

    /***/"./assets/img/Hero/Idle_right.png":
    /*!****************************************!*\
      !*** ./assets/img/Hero/Idle_right.png ***!
      \****************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/8a499ad60f919b1f6cad.png";

      /***/
    },

    /***/"./assets/img/Hero/Jump_left.png":
    /*!***************************************!*\
      !*** ./assets/img/Hero/Jump_left.png ***!
      \***************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/02bc1678beb112beb4a1.png";

      /***/
    },

    /***/"./assets/img/Hero/Jump_right.png":
    /*!****************************************!*\
      !*** ./assets/img/Hero/Jump_right.png ***!
      \****************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/4e23b39a2281ee54125f.png";

      /***/
    },

    /***/"./assets/img/Hero/Player_death.png":
    /*!******************************************!*\
      !*** ./assets/img/Hero/Player_death.png ***!
      \******************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/c53e7b3ac960db1762a9.png";

      /***/
    },

    /***/"./assets/img/Hero/Run_left.png":
    /*!**************************************!*\
      !*** ./assets/img/Hero/Run_left.png ***!
      \**************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/542a853a490865e4177b.png";

      /***/
    },

    /***/"./assets/img/Hero/Run_right.png":
    /*!***************************************!*\
      !*** ./assets/img/Hero/Run_right.png ***!
      \***************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/e361987edb2dc29e1508.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_jump.png":
    /*!************************************************!*\
      !*** ./assets/img/Platforms/Platform_jump.png ***!
      \************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/befd1a46da1a01267d9e.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_jump_disabled.png":
    /*!*********************************************************!*\
      !*** ./assets/img/Platforms/Platform_jump_disabled.png ***!
      \*********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/73ffdfeda1c0c3fa260e.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_one.png":
    /*!***********************************************!*\
      !*** ./assets/img/Platforms/Platform_one.png ***!
      \***********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/acab1e8646b2b2daa06e.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_oneStep.png":
    /*!***************************************************!*\
      !*** ./assets/img/Platforms/Platform_oneStep.png ***!
      \***************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/c2b486028ea06a42538d.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_oneStep_Explosion.png":
    /*!*************************************************************!*\
      !*** ./assets/img/Platforms/Platform_oneStep_Explosion.png ***!
      \*************************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/a27c1909728c39bb81d1.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_one_disabled.png":
    /*!********************************************************!*\
      !*** ./assets/img/Platforms/Platform_one_disabled.png ***!
      \********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/15a754e2c1925bdc527f.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_solid.png":
    /*!*************************************************!*\
      !*** ./assets/img/Platforms/Platform_solid.png ***!
      \*************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/dd246bde66e7e6e5e3fc.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_three.png":
    /*!*************************************************!*\
      !*** ./assets/img/Platforms/Platform_three.png ***!
      \*************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/a593fa5442153625de5d.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_three_disabled.png":
    /*!**********************************************************!*\
      !*** ./assets/img/Platforms/Platform_three_disabled.png ***!
      \**********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/171091192763139674e9.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_two.png":
    /*!***********************************************!*\
      !*** ./assets/img/Platforms/Platform_two.png ***!
      \***********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/d80232957d7216f6c18f.png";

      /***/
    },

    /***/"./assets/img/Platforms/Platform_two_disabled.png":
    /*!********************************************************!*\
      !*** ./assets/img/Platforms/Platform_two_disabled.png ***!
      \********************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/14db406580d82c54850b.png";

      /***/
    },

    /***/"./assets/img/Platforms/platform.png":
    /*!*******************************************!*\
      !*** ./assets/img/Platforms/platform.png ***!
      \*******************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/7eac2d1901ea34422f0e.png";

      /***/
    },

    /***/"./assets/img/Traps/Dead_signal_zone.png":
    /*!***********************************************!*\
      !*** ./assets/img/Traps/Dead_signal_zone.png ***!
      \***********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/03857753acbdef4e6e04.png";

      /***/
    },

    /***/"./assets/img/Traps/Dead_signal_zone_hover.png":
    /*!*****************************************************!*\
      !*** ./assets/img/Traps/Dead_signal_zone_hover.png ***!
      \*****************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/62e7d0778000c13e26fd.png";

      /***/
    },

    /***/"./assets/img/Traps/Fan.png":
    /*!**********************************!*\
      !*** ./assets/img/Traps/Fan.png ***!
      \**********************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/c8662b60253954dfab65.png";

      /***/
    },

    /***/"./assets/img/Traps/Flamethrower_left.png":
    /*!************************************************!*\
      !*** ./assets/img/Traps/Flamethrower_left.png ***!
      \************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/1319f38494e5186d7f18.png";

      /***/
    },

    /***/"./assets/img/Traps/Flamethrower_right.png":
    /*!*************************************************!*\
      !*** ./assets/img/Traps/Flamethrower_right.png ***!
      \*************************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/9bd291d54f54e255e917.png";

      /***/
    },

    /***/"./assets/img/Traps/Platform_spikes.png":
    /*!**********************************************!*\
      !*** ./assets/img/Traps/Platform_spikes.png ***!
      \**********************************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/2d04ce6e355f376a0e0e.png";

      /***/
    },

    /***/"./assets/img/Traps/Saw.png":
    /*!**********************************!*\
      !*** ./assets/img/Traps/Saw.png ***!
      \**********************************/
    /***/
    (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";

      module.exports = __webpack_require__.p + "assets/d8d99ee1b1eb3891ba28.png";

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