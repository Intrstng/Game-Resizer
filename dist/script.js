/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "additionalElements": () => (/* binding */ additionalElements),
/* harmony export */   "completeLevel": () => (/* binding */ completeLevel),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "leftNeighboorBlockFromHero": () => (/* binding */ leftNeighboorBlockFromHero),
/* harmony export */   "level": () => (/* binding */ level),
/* harmony export */   "levelMap": () => (/* binding */ levelMap),
/* harmony export */   "parsedCollisions": () => (/* binding */ parsedCollisions),
/* harmony export */   "platforms": () => (/* binding */ platforms),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "requestAnim": () => (/* binding */ requestAnim),
/* harmony export */   "timerShoot_1": () => (/* binding */ timerShoot_1),
/* harmony export */   "timerShoot_2": () => (/* binding */ timerShoot_2)
/* harmony export */ });
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.scss */ "./src/sass/styles.scss");
/* harmony import */ var _js_SPA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/SPA */ "./src/js/SPA.js");
/* harmony import */ var _js_Collision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Collision */ "./src/js/Collision.js");
/* harmony import */ var _js_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Canvas */ "./src/js/Canvas.js");
/* harmony import */ var _js_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/Utils */ "./src/js/Utils.js");
/* harmony import */ var _js_Player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/Player */ "./src/js/Player.js");
/* harmony import */ var _js_data_Audio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/data/Audio */ "./src/js/data/Audio.js");
/* harmony import */ var _js_Platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/Platform */ "./src/js/Platform.js");
/* harmony import */ var _js_Traps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/Traps */ "./src/js/Traps.js");
/* harmony import */ var _js_Assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/Assets */ "./src/js/Assets.js");
/* harmony import */ var _js_Keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/Keys */ "./src/js/Keys.js");
/* harmony import */ var _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/AdditionalElements */ "./src/js/AdditionalElements.js");
/* harmony import */ var _js_Levels__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/Levels */ "./src/js/Levels.js");


// imagePlatform.onload = function getSizes () {
//   imagePlatform.width = imagePlatform.naturalWidth;
//   imagePlatform.height = imagePlatform.naturalHeight;
//}




// import { levelMap } from './js/data/DescriptionForLevelMap';








document.addEventListener('DOMContentLoaded', _js_SPA__WEBPACK_IMPORTED_MODULE_1__.mySPA.init('root', 'content'));

// canvas.width = document.documentElement.clientWidth;
// canvas.height = document.documentElement.clientHeight;
const fontSize = _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.height / 5; // 10
// window.addEventListener('resize', () => {
//   canvas.width = document.documentElement.clientWidth;
//   canvas.height = document.documentElement.clientHeight;
// });

// function onResize( element, callback ){
//   var elementHeight = element.height,
//       elementWidth = element.width;
//   setInterval(function(){
//       if( element.height !== elementHeight || element.width !== elementWidth ){
//         elementHeight = element.height;
//         elementWidth = element.width;
//         callback();
//       }
//   }, 300);
// }

// onResize(canvas, function() { 
// canvas.width = document.documentElement.clientWidth;
// canvas.height = document.documentElement.clientHeight;
// });

_js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.width = 1024; // 1280 //window.innerWidth; // canvas.width = innerWidth;
_js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.height = 576; // 720 //window.innerHeight;
let requestAnim = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
  window.setTimeout(callback, 1000 / 60);
};
window.addEventListener('keydown', e => fullScreen(e, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas));

// let game = [];

// class Game {
//   constructor(level) {
//     this.level = level;
//   }
// }

// function createNewGame(map) {
//   Object.values(map).forEach(level => {
//     game.push(new Game(level.id));
//   })
// }
// console.log(game)

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
let leftNeighboorBlockFromHeroArr = [];
let timerShoot_1 = null;
let timerShoot_2 = null;
let leftNeighboorBlockFromHero = null;
let completeLevel = false;
let additionalElements = [new _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_11__.AdditionalElements(0, 0, (0,_js_Utils__WEBPACK_IMPORTED_MODULE_4__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_9__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.height))];

// class Level {
//   constructor(value) {
//     this.stage =  value;
//   }
// }
// export let level = new Level(1);

let level = 1;
function increseLevel(obj) {
  return level >= Object.keys(obj).length ? level : ++level;
}
let platforms = [],
  levelMap,
  parsedCollisions,
  player;

// requestLevelMap(`../src/js/json/levelMap_${level}.json`, setLevelMap, parseCollisitions, createPlayer, init, animate);

function setLevelMap(value) {
  levelMap = value;
  console.log(levelMap);
  return levelMap;
}
function createPlayer(levelMap, platforms) {
  levelMap.map.forEach((row, index_Y) => {
    row.forEach((cell, index_X) => {
      if (cell === 'st') {
        player = new _js_Player__WEBPACK_IMPORTED_MODULE_5__.Player({
          platforms
        }, index_X * 36, index_Y * 36, levelMap.margin.left, levelMap.margin.top);
      }
    });
  });
  return player;
}
function fireSoundInterval(delay) {
  timerShoot_1 = setTimeout(function soundFire() {
    timerShoot_2 = setTimeout(soundFire, delay);
    (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_6__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_6__.audio.fire);
  }, delay);
}
let initStart = true;
function flamethrowerShootSoundIntervalInit() {
  if (initStart) {
    let flamethrowerShootDelay = null;
    platforms.forEach(platform => {
      (platform.type === 'flamethrowerLeft' || platform.type === 'flamethrowerRight' || platform.type === 'flamethrowerUp' || platform.type === 'flamethrowerDown') && (flamethrowerShootDelay = platform.delay);
    });
    if (platforms.some(platform => {
      return platform.type === 'flamethrowerLeft' || platform.type === 'flamethrowerRight' || platform.type === 'flamethrowerUp' || platform.type === 'flamethrowerDown';
    })) {
      fireSoundInterval(flamethrowerShootDelay * 8);
    }
  }
  initStart = false;
}
let track = (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_6__.getRandomTrack)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_6__.audio);
track.pause();
track = (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_6__.getRandomTrack)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_6__.audio);
///track.play();
track.onended = function () {
  (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_6__.playNextTrack)(track, _js_data_Audio__WEBPACK_IMPORTED_MODULE_6__.audio);
};
function reloadGameplay() {
  additionalElements = [new _js_AdditionalElements__WEBPACK_IMPORTED_MODULE_11__.AdditionalElements(0, 0, (0,_js_Utils__WEBPACK_IMPORTED_MODULE_4__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_9__.backgroundImg, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.height))];
  platforms.forEach(platform => {
    platform.type === 'oneStep' && platform.restore();
  });
  levelMap.map.forEach((row, index_Y) => {
    row.forEach((cell, index_X) => {
      cell === 'st' && (player = new _js_Player__WEBPACK_IMPORTED_MODULE_5__.Player({
        platforms
      }, index_X * 36, index_Y * 36, levelMap.margin.left, levelMap.margin.top));
    });
  });
}
let levelOverlay = (0,_js_Utils__WEBPACK_IMPORTED_MODULE_4__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_9__.win);
levelOverlay.width = _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.width;
levelOverlay.height = _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.height;
function init() {
  flamethrowerShootSoundIntervalInit();
  player.velocity.y = 1;
  player.alive = true;
  _js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.spaceToggleCounter = 1;
  if (player.completeLevel) {
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.c.save();
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.c.fillStyle = 'rgb(247, 251, 254)';
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.c.fillRect(0, 0, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.height, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.width / 2, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.height / 2);
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.c.drawImage(levelOverlay, 0, 0, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.width, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.height);
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.c.fillStyle = 'rgb(21, 173, 188)';
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.c.font = `normal ${fontSize}px Rubik Iso`;
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.c.textBaseline = 'middle';
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.c.textAlign = 'center';
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.style.letterSpacing = `${fontSize / 20}px`;
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.c.fillText('Next level', _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.width / 2, _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.height / 2);
    _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.c.restore();
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
  if (_js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.right.pressed && player.position.x + player.width <= _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.width) {
    // упор персонажа в правый край экрана
    player.velocity.x = 2;
  } else if (_js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.left.pressed && player.position.x >= 0) {
    // упор персонажа в левый край экрана
    player.velocity.x = -2;
  } else {
    player.velocity.x = 0;
  }
  if (player.velocity.y >= player.jumpHeight - player.gravity && !_js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.lastPressed === 'right') {
    // 10 - когда персонаж на земле
    player.currentSprite = player.sprites.idle.right;
  } else if (player.velocity.y >= player.jumpHeight - player.gravity && !_js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.right.pressed && !_js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.left.pressed && _js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.lastPressed === 'left') {
    // 10 - когда персонаж на земле
    player.currentSprite = player.sprites.idle.left;
  }

  // Падение в пропасть (см. комментарии в player.update())
  if (player.position.y > _js_Canvas__WEBPACK_IMPORTED_MODULE_3__.canvas.height) {
    // sawTrap.restore();
    //sawTrap2.restore(); // !!!!!!!!!!!!
    (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_6__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_6__.audio.fallingInDepth2);
    _js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.jumpToggleActive = !_js_Keys__WEBPACK_IMPORTED_MODULE_10__.keys.jumpToggleActive;
    init();
  }
}
// init();
// animate();

window.addEventListener('keydown', _js_Keys__WEBPACK_IMPORTED_MODULE_10__.keyDownHandler);
window.addEventListener('keyup', _js_Keys__WEBPACK_IMPORTED_MODULE_10__.keyUpHandler);

/***/ }),

/***/ "./src/js/AdditionalElements.js":
/*!**************************************!*\
  !*** ./src/js/AdditionalElements.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalElements": () => (/* binding */ AdditionalElements)
/* harmony export */ });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/js/Canvas.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/js/Utils.js");
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets */ "./src/js/Assets.js");
// import { canvas, c } from './Canvas';

// export class AdditionalElements {
//   constructor (posX, posY, image) {
//     this.position = {
//       x: posX,
//       y: posY
//     }
//     this.image = image;
//     this.width = image.width;
//     this.height = image.height;   
//   }
//   draw() {
//     c.drawImage(this.image, this.position.x, this.position.y)
//     // c.fillStyle = ('green');
//     // c.fillRect(this.position.x, this.position.y, this.width, this.height);
//   }
// }




class AdditionalElements {
  constructor(posX, posY, image) {
    this.position = {
      x: posX,
      y: posY
    };
    this.sprites = {
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_2__.backgroundImg, _Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.width, _Canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.height)
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

/***/ }),

/***/ "./src/js/Assets.js":
/*!**************************!*\
  !*** ./src/js/Assets.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backgroundImg": () => (/* reexport default export from named module */ _assets_img_Background_images_bg_1_jpg__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   "brick_1": () => (/* reexport default export from named module */ _assets_img_Platforms_brick_1_png__WEBPACK_IMPORTED_MODULE_24__),
/* harmony export */   "brick_2": () => (/* reexport default export from named module */ _assets_img_Platforms_brick_2_png__WEBPACK_IMPORTED_MODULE_25__),
/* harmony export */   "deadSignalZone": () => (/* reexport default export from named module */ _assets_img_Traps_Dead_signal_zone_png__WEBPACK_IMPORTED_MODULE_29__),
/* harmony export */   "deadSignalZoneHover": () => (/* reexport default export from named module */ _assets_img_Traps_Dead_signal_zone_hover_png__WEBPACK_IMPORTED_MODULE_30__),
/* harmony export */   "fan": () => (/* reexport default export from named module */ _assets_img_Traps_Fan_png__WEBPACK_IMPORTED_MODULE_27__),
/* harmony export */   "finish": () => (/* reexport default export from named module */ _assets_img_Platforms_Finish_T_L_png__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   "fireballDown": () => (/* reexport default export from named module */ _assets_img_Traps_Fireball_down_png__WEBPACK_IMPORTED_MODULE_36__),
/* harmony export */   "fireballLeft": () => (/* reexport default export from named module */ _assets_img_Traps_Fireball_left_png__WEBPACK_IMPORTED_MODULE_37__),
/* harmony export */   "fireballRight": () => (/* reexport default export from named module */ _assets_img_Traps_Fireball_right_png__WEBPACK_IMPORTED_MODULE_38__),
/* harmony export */   "fireballUp": () => (/* reexport default export from named module */ _assets_img_Traps_Fireball_up_png__WEBPACK_IMPORTED_MODULE_35__),
/* harmony export */   "flamethrowerDown": () => (/* reexport default export from named module */ _assets_img_Traps_Flamethrower_down_png__WEBPACK_IMPORTED_MODULE_34__),
/* harmony export */   "flamethrowerLeft": () => (/* reexport default export from named module */ _assets_img_Traps_Flamethrower_left_png__WEBPACK_IMPORTED_MODULE_31__),
/* harmony export */   "flamethrowerRight": () => (/* reexport default export from named module */ _assets_img_Traps_Flamethrower_right_png__WEBPACK_IMPORTED_MODULE_32__),
/* harmony export */   "flamethrowerUp": () => (/* reexport default export from named module */ _assets_img_Traps_Flamethrower_up_png__WEBPACK_IMPORTED_MODULE_33__),
/* harmony export */   "heroDeath": () => (/* reexport default export from named module */ _assets_img_Hero_Player_death_png__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   "heroFallL": () => (/* reexport default export from named module */ _assets_img_Hero_Fall_left_png__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   "heroFallR": () => (/* reexport default export from named module */ _assets_img_Hero_Fall_right_png__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "heroIdleL": () => (/* reexport default export from named module */ _assets_img_Hero_Idle_left_png__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "heroIdleR": () => (/* reexport default export from named module */ _assets_img_Hero_Idle_right_png__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "heroJumpL": () => (/* reexport default export from named module */ _assets_img_Hero_Jump_left_png__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "heroJumpR": () => (/* reexport default export from named module */ _assets_img_Hero_Jump_right_png__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "heroRunL": () => (/* reexport default export from named module */ _assets_img_Hero_Run_left_png__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "heroRunR": () => (/* reexport default export from named module */ _assets_img_Hero_Run_right_png__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "platformImgSrc300": () => (/* reexport default export from named module */ _assets_img_Platforms_platform_png__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "platformJump": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_jump_png__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   "platformJumpDisabled": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_jump_disabled_png__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   "platformOne": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_one_png__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   "platformOneDisabled": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_one_disabled_png__WEBPACK_IMPORTED_MODULE_20__),
/* harmony export */   "platformOneStep": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_oneStep_png__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   "platformOneStepExplosion": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_oneStep_Explosion_png__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   "platformSolid": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_solid_png__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   "platformThree": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_three_png__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   "platformThreeDisabled": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_three_disabled_png__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   "platformTwo": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_two_png__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   "platformTwoDisabled": () => (/* reexport default export from named module */ _assets_img_Platforms_Platform_two_disabled_png__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   "saw": () => (/* reexport default export from named module */ _assets_img_Traps_Saw_png__WEBPACK_IMPORTED_MODULE_26__),
/* harmony export */   "spike": () => (/* reexport default export from named module */ _assets_img_Traps_Platform_spikes_png__WEBPACK_IMPORTED_MODULE_28__),
/* harmony export */   "win": () => (/* reexport default export from named module */ _assets_img_Background_images_Win_4_jpg__WEBPACK_IMPORTED_MODULE_11__)
/* harmony export */ });
/* harmony import */ var _assets_img_Platforms_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/img/Platforms/platform.png */ "./assets/img/Platforms/platform.png");
/* harmony import */ var _assets_img_Hero_Idle_right_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/img/Hero/Idle_right.png */ "./assets/img/Hero/Idle_right.png");
/* harmony import */ var _assets_img_Hero_Idle_left_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/img/Hero/Idle_left.png */ "./assets/img/Hero/Idle_left.png");
/* harmony import */ var _assets_img_Hero_Run_right_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/img/Hero/Run_right.png */ "./assets/img/Hero/Run_right.png");
/* harmony import */ var _assets_img_Hero_Run_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/img/Hero/Run_left.png */ "./assets/img/Hero/Run_left.png");
/* harmony import */ var _assets_img_Hero_Jump_right_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/img/Hero/Jump_right.png */ "./assets/img/Hero/Jump_right.png");
/* harmony import */ var _assets_img_Hero_Jump_left_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/img/Hero/Jump_left.png */ "./assets/img/Hero/Jump_left.png");
/* harmony import */ var _assets_img_Hero_Fall_right_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/img/Hero/Fall_right.png */ "./assets/img/Hero/Fall_right.png");
/* harmony import */ var _assets_img_Hero_Fall_left_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/img/Hero/Fall_left.png */ "./assets/img/Hero/Fall_left.png");
/* harmony import */ var _assets_img_Hero_Player_death_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/img/Hero/Player_death.png */ "./assets/img/Hero/Player_death.png");
/* harmony import */ var _assets_img_Background_images_bg_1_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/img/Background_images/bg_1.jpg */ "./assets/img/Background_images/bg_1.jpg");
/* harmony import */ var _assets_img_Background_images_Win_4_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../assets/img/Background_images/Win_4.jpg */ "./assets/img/Background_images/Win_4.jpg");
/* harmony import */ var _assets_img_Platforms_Platform_solid_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_solid.png */ "./assets/img/Platforms/Platform_solid.png");
/* harmony import */ var _assets_img_Platforms_Platform_oneStep_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_oneStep.png */ "./assets/img/Platforms/Platform_oneStep.png");
/* harmony import */ var _assets_img_Platforms_Platform_oneStep_Explosion_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_oneStep_Explosion.png */ "./assets/img/Platforms/Platform_oneStep_Explosion.png");
/* harmony import */ var _assets_img_Platforms_Platform_jump_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_jump.png */ "./assets/img/Platforms/Platform_jump.png");
/* harmony import */ var _assets_img_Platforms_Platform_jump_disabled_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_jump_disabled.png */ "./assets/img/Platforms/Platform_jump_disabled.png");
/* harmony import */ var _assets_img_Platforms_Platform_one_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_one.png */ "./assets/img/Platforms/Platform_one.png");
/* harmony import */ var _assets_img_Platforms_Platform_two_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_two.png */ "./assets/img/Platforms/Platform_two.png");
/* harmony import */ var _assets_img_Platforms_Platform_three_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_three.png */ "./assets/img/Platforms/Platform_three.png");
/* harmony import */ var _assets_img_Platforms_Platform_one_disabled_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_one_disabled.png */ "./assets/img/Platforms/Platform_one_disabled.png");
/* harmony import */ var _assets_img_Platforms_Platform_two_disabled_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_two_disabled.png */ "./assets/img/Platforms/Platform_two_disabled.png");
/* harmony import */ var _assets_img_Platforms_Platform_three_disabled_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Platform_three_disabled.png */ "./assets/img/Platforms/Platform_three_disabled.png");
/* harmony import */ var _assets_img_Platforms_Finish_T_L_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../assets/img/Platforms/Finish_T_L.png */ "./assets/img/Platforms/Finish_T_L.png");
/* harmony import */ var _assets_img_Platforms_brick_1_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../assets/img/Platforms/brick_1.png */ "./assets/img/Platforms/brick_1.png");
/* harmony import */ var _assets_img_Platforms_brick_2_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../assets/img/Platforms/brick_2.png */ "./assets/img/Platforms/brick_2.png");
/* harmony import */ var _assets_img_Traps_Saw_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../assets/img/Traps/Saw.png */ "./assets/img/Traps/Saw.png");
/* harmony import */ var _assets_img_Traps_Fan_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../assets/img/Traps/Fan.png */ "./assets/img/Traps/Fan.png");
/* harmony import */ var _assets_img_Traps_Platform_spikes_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../assets/img/Traps/Platform_spikes.png */ "./assets/img/Traps/Platform_spikes.png");
/* harmony import */ var _assets_img_Traps_Dead_signal_zone_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../assets/img/Traps/Dead_signal_zone.png */ "./assets/img/Traps/Dead_signal_zone.png");
/* harmony import */ var _assets_img_Traps_Dead_signal_zone_hover_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../assets/img/Traps/Dead_signal_zone_hover.png */ "./assets/img/Traps/Dead_signal_zone_hover.png");
/* harmony import */ var _assets_img_Traps_Flamethrower_left_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../assets/img/Traps/Flamethrower_left.png */ "./assets/img/Traps/Flamethrower_left.png");
/* harmony import */ var _assets_img_Traps_Flamethrower_right_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../assets/img/Traps/Flamethrower_right.png */ "./assets/img/Traps/Flamethrower_right.png");
/* harmony import */ var _assets_img_Traps_Flamethrower_up_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../assets/img/Traps/Flamethrower_up.png */ "./assets/img/Traps/Flamethrower_up.png");
/* harmony import */ var _assets_img_Traps_Flamethrower_down_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../assets/img/Traps/Flamethrower_down.png */ "./assets/img/Traps/Flamethrower_down.png");
/* harmony import */ var _assets_img_Traps_Fireball_up_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../assets/img/Traps/Fireball_up.png */ "./assets/img/Traps/Fireball_up.png");
/* harmony import */ var _assets_img_Traps_Fireball_down_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../assets/img/Traps/Fireball_down.png */ "./assets/img/Traps/Fireball_down.png");
/* harmony import */ var _assets_img_Traps_Fireball_left_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../assets/img/Traps/Fireball_left.png */ "./assets/img/Traps/Fireball_left.png");
/* harmony import */ var _assets_img_Traps_Fireball_right_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../assets/img/Traps/Fireball_right.png */ "./assets/img/Traps/Fireball_right.png");
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
// const flamethrowerUp = '../assets/img/Traps/Flamethrower_left.png';
// const flamethrowerDown = '../assets/img/Traps/Flamethrower_left.png';










































/***/ }),

/***/ "./src/js/Canvas.js":
/*!**************************!*\
  !*** ./src/js/Canvas.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ c),
/* harmony export */   "canvas": () => (/* binding */ canvas)
/* harmony export */ });
const canvas = document.getElementById('canvas');
const c = canvas.getContext("2d");


/***/ }),

/***/ "./src/js/Collision.js":
/*!*****************************!*\
  !*** ./src/js/Collision.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseCollisitions": () => (/* binding */ parseCollisitions),
/* harmony export */   "parsedCollisions": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_1__.parsedCollisions),
/* harmony export */   "platforms": () => (/* reexport safe */ _index__WEBPACK_IMPORTED_MODULE_1__.platforms)
/* harmony export */ });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/js/Canvas.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platform */ "./src/js/Platform.js");
/* harmony import */ var _Traps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Traps */ "./src/js/Traps.js");
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Assets */ "./src/js/Assets.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils */ "./src/js/Utils.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");







function parseCollisitions(levelMap, platforms) {
  levelMap.map.forEach((row, index_Y) => {
    row.forEach((cell, index_X) => {
      switch (cell) {
        case '1p':
          // Space toggled platform (One)
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformOne(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformOne, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case '2p':
          // Space toggled platform (Two)
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformTwo(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformTwo, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case '3p':
          // Space toggled platform (Three)
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.PlatformThree(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformThree, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case '1s':
          // One-Step platform
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.OneStep(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformOneStep, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'sl':
          // Solid platform
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Platform(
          // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformSolid, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'ja':
          // Jump-toggled platform (active)
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.JumpToggleActive(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformJump, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'jd':
          // Jump-toggled platform (disabled)
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.JumpToggleDisabled(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.platformJump, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'sk':
          // Saw trap platform
          platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.PlatformSpikes(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.spike, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'sw':
          // Spikes trap platform
          platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.Saw(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.saw, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'dz':
          // Dead signal zone
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.DeadSignal(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.deadSignalZone, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fl':
          // Flamethrower (left)
          platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.FlamethrowerLeft(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.flamethrowerLeft, 36, 36), platforms, new _Traps__WEBPACK_IMPORTED_MODULE_3__.BulletController(), levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fr':
          // Flamethrower (right)
          platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.FlamethrowerRight(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.flamethrowerRight, 36, 36), platforms, new _Traps__WEBPACK_IMPORTED_MODULE_3__.BulletController(), levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fu':
          // Flamethrower (up)
          platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.FlamethrowerUp(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.flamethrowerUp, 36, 36), platforms, new _Traps__WEBPACK_IMPORTED_MODULE_3__.BulletController(), levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fd':
          // Flamethrower (down)
          platforms.push(new _Traps__WEBPACK_IMPORTED_MODULE_3__.FlamethrowerDown(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.flamethrowerDown, 36, 36), platforms, new _Traps__WEBPACK_IMPORTED_MODULE_3__.BulletController(), levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fn':
          // Fan (decoration)
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Fan(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.flamethrowerDown, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'b1':
          // Fan (decoration)
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Brick_1(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.brick_1, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'b2':
          // Fan (decoration)
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Brick_2(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.brick_2, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fp':
          // Finish point
          platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_2__.Finish(index_X * 36, index_Y * 36, (0,_Utils__WEBPACK_IMPORTED_MODULE_5__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.brick_2, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
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



/***/ }),

/***/ "./src/js/Keys.js":
/*!************************!*\
  !*** ./src/js/Keys.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyDownHandler": () => (/* binding */ keyDownHandler),
/* harmony export */   "keyUpHandler": () => (/* binding */ keyUpHandler),
/* harmony export */   "keys": () => (/* binding */ keys)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _data_Audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/Audio */ "./src/js/data/Audio.js");





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
          (0,_data_Audio__WEBPACK_IMPORTED_MODULE_1__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_1__.audio.jump);
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


/***/ }),

/***/ "./src/js/Levels.js":
/*!**************************!*\
  !*** ./src/js/Levels.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestLevelMap": () => (/* binding */ requestLevelMap)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");

function requestLevelMap(url, callback_1, callback_2, callback_3, callback_4, callback_5) {
  fetch(url).then(response => {
    if (response.status !== 200) {
      console.log(`Возникла проблема. Код ошибки: ${response.status}`);
      return;
    }
    response.json().then(map => callback_1(map, _index__WEBPACK_IMPORTED_MODULE_0__.platforms)).then(data => callback_2(data, _index__WEBPACK_IMPORTED_MODULE_0__.platforms)).then(player => callback_3(player, _index__WEBPACK_IMPORTED_MODULE_0__.platforms)).then(init => callback_4(init, _index__WEBPACK_IMPORTED_MODULE_0__.platforms)).then(animate => callback_5(animate, _index__WEBPACK_IMPORTED_MODULE_0__.platforms)).catch(err => console.error('Fetch Error - levels map load failed', err));
  });
}

/***/ }),

/***/ "./src/js/Platform.js":
/*!****************************!*\
  !*** ./src/js/Platform.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Brick_1": () => (/* binding */ Brick_1),
/* harmony export */   "Brick_2": () => (/* binding */ Brick_2),
/* harmony export */   "DeadSignal": () => (/* binding */ DeadSignal),
/* harmony export */   "Fan": () => (/* binding */ Fan),
/* harmony export */   "Finish": () => (/* binding */ Finish),
/* harmony export */   "JumpToggleActive": () => (/* binding */ JumpToggleActive),
/* harmony export */   "JumpToggleDisabled": () => (/* binding */ JumpToggleDisabled),
/* harmony export */   "OneStep": () => (/* binding */ OneStep),
/* harmony export */   "Platform": () => (/* binding */ Platform),
/* harmony export */   "PlatformOne": () => (/* binding */ PlatformOne),
/* harmony export */   "PlatformThree": () => (/* binding */ PlatformThree),
/* harmony export */   "PlatformTwo": () => (/* binding */ PlatformTwo)
/* harmony export */ });
/* harmony import */ var _Collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collision */ "./src/js/Collision.js");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ "./src/js/Canvas.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./src/js/Utils.js");
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Assets */ "./src/js/Assets.js");
/* harmony import */ var _data_Audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/Audio */ "./src/js/data/Audio.js");
/* harmony import */ var _Keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Keys */ "./src/js/Keys.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index */ "./src/index.js");








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
      _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && (0,_data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.jumpOnSpaceToggledPlatform);
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
      _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && (0,_data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.bottomHit);
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.fan, 36, 36)
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.brick_1, 36, 36)
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.brick_2, 36, 36)
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.finish, 36, 36)
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJump, 36, 36),
      disabled: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJumpDisabled, 36, 36)
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJump, 36, 36),
      disabled: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformJumpDisabled, 36, 36)
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneStep, 36, 36),
      explosion: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneStepExplosion, 36, 36)
    };
    this.currentSprite = this.sprites.idle;
    this.frequency = 28;
    this.type = 'oneStep';
    this.statusActive = true;
  }
  destroy() {
    _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && (0,_data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.explosionBlock);
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.deadSignalZoneHover, 36, 36),
      disabled: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneDisabled, 36, 36)
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
        _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.space.pressed && (0,_data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.toggleDisabled);
        console.log('inside');
      } else {
        console.log('outside');
        _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.space.pressed && (0,_data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.toggle);
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOne, 36, 36),
      disabled: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformOneDisabled, 36, 36)
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformTwo, 36, 36),
      disabled: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformTwoDisabled, 36, 36)
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformThree, 36, 36),
      disabled: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.platformThreeDisabled, 36, 36)
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
      idle: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.deadSignalZone, 36, 36),
      disabled: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_3__.deadSignalZoneHover, 36, 36)
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
      _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.space.pressed && (0,_data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.toggleDisabled);
      console.log('inside');
    } else {
      console.log('outside');
      _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.deadSignalZone = false;
      _index__WEBPACK_IMPORTED_MODULE_6__.player.alive && _Keys__WEBPACK_IMPORTED_MODULE_5__.keys.space.pressed && (0,_data_Audio__WEBPACK_IMPORTED_MODULE_4__.gameSoundEffects)(_data_Audio__WEBPACK_IMPORTED_MODULE_4__.audio.toggle);
    }
  }
}


/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/js/Canvas.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/js/Utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _Keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Keys */ "./src/js/Keys.js");
/* harmony import */ var _js_Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/Assets */ "./src/js/Assets.js");
/* harmony import */ var _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/data/Audio */ "./src/js/data/Audio.js");







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
        right: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroIdleR, 32, 32),
        left: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroIdleL, 32, 32)
      },
      run: {
        right: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroRunR, 32, 32),
        left: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroRunL, 32, 32)
      },
      jump: {
        right: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroJumpR, 32, 32),
        left: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroJumpL, 32, 32)
      },
      fall: {
        right: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroFallR, 32, 32),
        left: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroFallL, 32, 32)
      },
      death: (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.createImage)(_js_Assets__WEBPACK_IMPORTED_MODULE_4__.heroDeath, 32, 32)
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
    this.alive && (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.heroDeath);
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
            this.alive && (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.nextLevel);
            this.completeLevel = true;
            (0,_index__WEBPACK_IMPORTED_MODULE_2__.init)();
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
              this.alive && (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.bottomHit);
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
              this.alive && (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.bottomHit);
              break;
            }
            if (this.velocity.y > 0) {
              // falling down  // 0.25
              this.velocity.y = 0;
              this.top = platform.top - this.height - 0.1;
              this.alive && (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.bottomHit);
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

            this.alive && (0,_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.gameSoundEffects)(_js_data_Audio__WEBPACK_IMPORTED_MODULE_5__.audio.nextLevel);
            this.completeLevel = true;
            (0,_index__WEBPACK_IMPORTED_MODULE_2__.init)();
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

/***/ }),

/***/ "./src/js/SPA.js":
/*!***********************!*\
  !*** ./src/js/SPA.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mySPA": () => (/* binding */ mySPA)
/* harmony export */ });
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
              <img class="controls__img-key" src="/assets/img/SPA/arrows.png" alt="control arrows">
                <p class="controls__text">Press Left and Right arrows to control character movement.<br>Press press Up arrow to jump.</p>
                  <img class="controls__img-key" src="/assets/img/SPA/space.png" alt="space key">
                    <p class="controls__text">Press Space to toggle the active and inactive state of the platform <span>One / Two / Three</span></p>
                      <img class="controls__img-letter" src="/assets/img/SPA/m.png" alt="m key">
                        <p class="controls__text">Press <span>M</span> to return to the menu</p>
                          <img class="controls__img-letter" src="/assets/img/SPA/f.png" alt="m key">
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
                  min="0.1" max="1" value="0.8" step="0.1">   
                    <label for="volume-music">Music</label>
                    <input type="range" id="volume-msc" class="settings__slider settings__slider_hover" name="volume-music" 
                      min="0.1" max="1" value="0.7" step="0.1">
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
            <img class="error__img" src="/assets/img/SPA/404.png" alt="error 404">
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
      const app = document.createElement('div');
      app.id = 'game-app';
      app.className = 'game-app';
      app.innerHTML = `
        <header class="header">
          <img class="cloud-1" src="/assets/img/SPA/cloud_1.png"  alt="cloud first">
          <img class="cloud-2" src="/assets/img/SPA/cloud_2.png"  alt="cloud second">
          <img class="cloud-3" src="/assets/img/SPA/cloud_3.png"  alt="cloud third">
          <img class="cloud-4" src="/assets/img/SPA/cloud_4.png"  alt="cloud fourth">
            <div class="header__wrapper">
              <img class="header__logo" src="/assets/img/SPA/logo.png" alt="logo">
                <div class="header__logo-box">
                  <img class="header__logo-2" src="/assets/img/SPA/logo_2.png" alt="logo small">
                    <p class="header__title">Platform traveller</p>
                </div>
                  <div class="bird-container">
                    <img class="bird" src="/assets/img/SPA/flying.gif" alt="bird">
                  </div>
                      <nav id="root" class="header__nav nav">
                        <ul class="nav__list">
                          <li class="nav__item">
                            <a href="#howtoplay" class="nav__link">How to play</a>
                          </li>
                            <li class="nav__item">
                              <a href="#settings" class="nav__link">Settings</a>
                            </li>
                              <li class="nav__item">
                                <a href="#description" class="nav__link">Description</a>
                              </li>
                                <li class="nav__item">
                                  <a href="#game" class="nav__btn nav__btn_hover nav__link">Select level</a>
                                </li>
                          </ul>
                      </nav>
            </div>
        </header>
          <main id="content" class="content">
          </main>`;
      document.body.prepend(app);
    }
  };
}();

/***/ }),

/***/ "./src/js/Traps.js":
/*!*************************!*\
  !*** ./src/js/Traps.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulletController": () => (/* binding */ BulletController),
/* harmony export */   "FlamethrowerDown": () => (/* binding */ FlamethrowerDown),
/* harmony export */   "FlamethrowerLeft": () => (/* binding */ FlamethrowerLeft),
/* harmony export */   "FlamethrowerRight": () => (/* binding */ FlamethrowerRight),
/* harmony export */   "FlamethrowerUp": () => (/* binding */ FlamethrowerUp),
/* harmony export */   "PlatformSpikes": () => (/* binding */ PlatformSpikes),
/* harmony export */   "Saw": () => (/* binding */ Saw)
/* harmony export */ });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/js/Canvas.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./src/js/Utils.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Platform */ "./src/js/Platform.js");
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Assets */ "./src/js/Assets.js");
/* harmony import */ var _js_data_Audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/data/Audio */ "./src/js/data/Audio.js");







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
    // c.strokeStyle = "yellow";
    // c.strokeRect(this.position.x, this.position.y, this.width, this.height);
    // c.fillStyle = "black";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
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
    //Bullet position x/y axes
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
    // if (!this.currentSprite.loaded) return;
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
      left: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.fireballLeft, 36, 36),
      right: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.fireballRight, 36, 36),
      up: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.fireballUp, 36, 36),
      down: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.createImage)(_Assets__WEBPACK_IMPORTED_MODULE_4__.fireballDown, 36, 36)
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
  // collisionWithBlocks() {
  //   this.platforms.forEach((block) => {
  //     if (this.position.x <= block.right &&
  //       this.position.x + this.width >= block.left &&
  //       this.position.y <= block.bottom &&
  //       this.position.y + this.height > block.top) {
  //     }
  //   })

  // }
  // destroy() {
  //   console.log('Ouch!')
  // }

  // collideWith(sprite) {
  //   if (
  //     this.x < sprite.x + sprite.width &&
  //     this.x + this.width > sprite.x &&
  //     this.y < sprite.y + sprite.height &&
  //     this.y + this.height > sprite.y
  //   ) {
  //     sprite.takeDamage();
  //     return true;
  //   }
  //   return false;
  // }
}



// import { canvas, c } from './Canvas';

// import { Platform,
//   OneStep,
//   Fan,
//   JumpToggleActive,
//   JumpToggleDisabled,
//   PlatformOne,
//   PlatformTwo,
//   PlatformThree,
//   DeadSignal,
// } from './Platform';
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
//   flamethrowerLeft,
//   flamethrowerRight,
//   // flamethrowerUp,
//   // flamethrowerDown,
//    flamethrowerVertical,

//       } from './Assets';

// class PlatformSpikes extends Platform {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'spikes';
//   }
//   collision() {
//   // Player - platform collision (player is above the spike platform)
//     if (player.position.y + player.height <= this.position.y &&
//       player.position.y + player.height + player.velocity.y >= this.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
//       // Player - platform collision (player on the platform - inside of left and right platform boundaries)
//       player.position.x + player.width >= this.position.x + player.width / 3 && // + player.width / 3 - поправка чтобы персонаж погибал касаясь самого края платформы (без этого он еще погибал не доходя трети ширины спрайта героя)
//       player.position.x <= this.position.x + this.width - player.width / 3) { 
//       player.die();
//     }
//     // Player - platform collision (player is under the platform)
//     if (player.position.y <= this.position.y + this.height &&
//       player.position.y + player.height + player.velocity.y >= this.position.y &&
//       player.position.x >= this.position.x - player.width / 2 && // можно сделать 1.75
//       player.position.x + player.width <= this.position.x + this.width + player.width / 2) {
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

// class Bullet {
//   constructor(flamethrowerPos_X, flamethrowerPos_Y, flamethrowerWidth, flamethrowerHeight, flamethrowerType, image) {
//     this.position = {
//       x: null,
//       y: null //canvas.height / 2
//     }
//     this.velocity = {
//       x: null,  // 0
//       y: null   // 1
//     }
//     this.width = 15 //image.width;
//     this.height = 15 //image.height;
//     this.bulletSpeed = 1;
//     // Bullet position x/y axes
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft': this.position.x = flamethrowerPos_X;
//         break;
//       case 'flamethrowerRight': this.position.x = flamethrowerPos_X + flamethrowerWidth;
//         break;
//       case 'flamethrowerUp':
//       case 'flamethrowerDown': this.position.x = flamethrowerPos_X + flamethrowerWidth / 2;
//         break;
//     }
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft':
//       case 'flamethrowerRight': this.position.y = flamethrowerPos_Y + flamethrowerHeight / 2;
//         break;
//       case 'flamethrowerUp': this.position.y = flamethrowerPos_Y;
//         break;
//       case 'flamethrowerDown': this.position.y = flamethrowerPos_X + flamethrowerHeight;
//         break;
//     }
//     // Bullet velocity x/y axes
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft': this.velocity.x = -this.bulletSpeed;
//         break;
//       case 'flamethrowerRight': this.velocity.x = this.bulletSpeed;
//         break;
//       case 'flamethrowerUp':
//       case 'flamethrowerDown': this.velocity.x = 0;
//         break;
//     }
//     switch(flamethrowerType) {
//       case 'flamethrowerLeft':
//       case 'flamethrowerRight': this.velocity.y = 0;
//         break;
//       case 'flamethrowerUp': this.velocity.y = -this.bulletSpeed;
//         break;
//       case 'flamethrowerDown': this.velocity.y = this.bulletSpeed;
//         break;
//     }
//     this.frames = 0;
//     this.frequency = 28;
//     this.sprites = {
//       idle: this.image,
//     }
//     this.currentSprite = this.sprites.idle;
//     this.type = 'bullet';
//   }

// draw() {
//   // c.clearRect(this.position.x, this.position.y, this.width, this.height);
//   console.log('Shoot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//   c.fillStyle = 'black';
//   c.fillRect(this.position.x, this.position.y, this.width, this.height);
//   //c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height) // 48, 0, 48, 48 - player sprite crop (x, y, w, h) // 36 размер кадра в спрайте
// }
// update() {
//   this.frames++;
//   if (this.frames > this.frequency) this.frames = 0;
//   this.position.x += this.velocity.x;
//   console.log(this.position.x)
//   //this.draw();
// }
// }

// let bullet;

// class Flamethrower extends PlatformSpikes {

//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrower';
//     this.frequency = 79;
//     this.bullets = [];
//   }
//   shoot() {
//     //this.update();
//     setInterval(() => this.bullets.push(new Bullet(this.left, this.right, this.width, this.height, this.type, saw)), 1000);
//     //this.bullets.forEach((bullet) => bullet.update());
//   }
// }

// class FlamethrowerLeft extends Flamethrower {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrowerLeft';
//   }
// }

// class FlamethrowerRight extends Flamethrower {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrowerRight';
//   }
// }

// class FlamethrowerVertical extends Flamethrower {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrowerVertical';
//   }
// }

// class FlamethrowerUp extends Flamethrower {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrowerUp';
//   }
// }

// class FlamethrowerDown extends Flamethrower {
//   constructor(posX, posY, image) {
//     super(posX, posY, image);
//     this.type = 'flamethrowerDown';
//   }
// }

// export {
//   PlatformSpikes,
//   Saw,
//   FlamethrowerLeft,
//   FlamethrowerRight,
//   FlamethrowerVertical,
// }

/***/ }),

/***/ "./src/js/Utils.js":
/*!*************************!*\
  !*** ./src/js/Utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "randomNumber": () => (/* binding */ randomNumber)
/* harmony export */ });
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
class VolumeController {
  constructor() {
    this.volumeEffects = 1;
    this.volumeMusic = 0.8;
  }
  changeVolumeEffectsLevel(value) {
    this.volumeEffects = value;
  }
  changeVolumevolumeMusicLevel(value) {
    this.volumeMusic = value;
  }
}


// export class Sprite {
//   constructor ({ position, imageSrc }) {
//     this.position = position;
//     this.image = new Image();
//     this.image.onload = () => {
//       this.loaded = true;
//     }
//     this.image.src = imageSrc;
//     this.loaded = false;
//   }
//   draw() {
//                                 if (!this.loaded) return; // if (!this.currentSprite) return;
//     c.drawImage(this.image, this.position.x, this.position.y)
//   }
// }

/***/ }),

/***/ "./src/js/data/Audio.js":
/*!******************************!*\
  !*** ./src/js/data/Audio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audio": () => (/* binding */ audio),
/* harmony export */   "gameSoundEffects": () => (/* binding */ gameSoundEffects),
/* harmony export */   "getRandomTrack": () => (/* binding */ getRandomTrack),
/* harmony export */   "playNextTrack": () => (/* binding */ playNextTrack)
/* harmony export */ });
/* harmony import */ var _assets_sounds_effects_mp3_block_hit_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/block_hit.mp3 */ "./assets/sounds/effects/mp3/block_hit.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_block_hit_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/block_hit.ogg */ "./assets/sounds/effects/ogg/block_hit.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_bottom_hit_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/bottom_hit.mp3 */ "./assets/sounds/effects/mp3/bottom_hit.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_bottom_hit_ogg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/bottom_hit.ogg */ "./assets/sounds/effects/ogg/bottom_hit.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_choose_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/choose.mp3 */ "./assets/sounds/effects/mp3/choose.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_choose_ogg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/choose.ogg */ "./assets/sounds/effects/ogg/choose.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_explosion_block_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/explosion_block.mp3 */ "./assets/sounds/effects/mp3/explosion_block.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_explosion_block_ogg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/explosion_block.ogg */ "./assets/sounds/effects/ogg/explosion_block.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_falling_in_depth_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/falling_in_depth.mp3 */ "./assets/sounds/effects/mp3/falling_in_depth.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_falling_in_depth_ogg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/falling_in_depth.ogg */ "./assets/sounds/effects/ogg/falling_in_depth.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_falling_in_depth_2_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/falling_in_depth_2.mp3 */ "./assets/sounds/effects/mp3/falling_in_depth_2.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_falling_in_depth_2_ogg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/falling_in_depth_2.ogg */ "./assets/sounds/effects/ogg/falling_in_depth_2.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_fire_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/fire.mp3 */ "./assets/sounds/effects/mp3/fire.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_fire_ogg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/fire.ogg */ "./assets/sounds/effects/ogg/fire.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_hero_death_mp3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/hero_death.mp3 */ "./assets/sounds/effects/mp3/hero_death.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_hero_death_ogg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/hero_death.ogg */ "./assets/sounds/effects/ogg/hero_death.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_jump_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/jump.mp3 */ "./assets/sounds/effects/mp3/jump.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_jump_ogg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/jump.ogg */ "./assets/sounds/effects/ogg/jump.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_jump_on_space_toggled_platform_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/jump_on_space_toggled_platform.mp3 */ "./assets/sounds/effects/mp3/jump_on_space_toggled_platform.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_jump_on_space_toggled_platform_ogg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/jump_on_space_toggled_platform.ogg */ "./assets/sounds/effects/ogg/jump_on_space_toggled_platform.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_next_level_mp3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/next_level.mp3 */ "./assets/sounds/effects/mp3/next_level.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_next_level_ogg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/next_level.ogg */ "./assets/sounds/effects/ogg/next_level.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_ok_mp3__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/ok.mp3 */ "./assets/sounds/effects/mp3/ok.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_ok_ogg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/ok.ogg */ "./assets/sounds/effects/ogg/ok.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_select_mp3__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/select.mp3 */ "./assets/sounds/effects/mp3/select.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_select_ogg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/select.ogg */ "./assets/sounds/effects/ogg/select.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_teleport_mp3__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/teleport.mp3 */ "./assets/sounds/effects/mp3/teleport.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_teleport_ogg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/teleport.ogg */ "./assets/sounds/effects/ogg/teleport.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_toggle_mp3__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/toggle.mp3 */ "./assets/sounds/effects/mp3/toggle.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_toggle_ogg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/toggle.ogg */ "./assets/sounds/effects/ogg/toggle.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_toggle_disabled_mp3__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/toggle_disabled.mp3 */ "./assets/sounds/effects/mp3/toggle_disabled.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_toggle_disabled_ogg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/toggle_disabled.ogg */ "./assets/sounds/effects/ogg/toggle_disabled.ogg");
/* harmony import */ var _assets_sounds_effects_mp3_error_mp3__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../assets/sounds/effects/mp3/error.mp3 */ "./assets/sounds/effects/mp3/error.mp3");
/* harmony import */ var _assets_sounds_effects_ogg_error_ogg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../assets/sounds/effects/ogg/error.ogg */ "./assets/sounds/effects/ogg/error.ogg");
/* harmony import */ var _assets_sounds_music_mp3_track_1_mp3__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../assets/sounds/music/mp3/track_1.mp3 */ "./assets/sounds/music/mp3/track_1.mp3");
/* harmony import */ var _assets_sounds_music_ogg_track_1_ogg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../assets/sounds/music/ogg/track_1.ogg */ "./assets/sounds/music/ogg/track_1.ogg");
/* harmony import */ var _assets_sounds_music_mp3_track_2_mp3__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../assets/sounds/music/mp3/track_2.mp3 */ "./assets/sounds/music/mp3/track_2.mp3");
/* harmony import */ var _assets_sounds_music_ogg_track_2_ogg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../assets/sounds/music/ogg/track_2.ogg */ "./assets/sounds/music/ogg/track_2.ogg");
/* harmony import */ var _assets_sounds_music_mp3_track_3_mp3__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../assets/sounds/music/mp3/track_3.mp3 */ "./assets/sounds/music/mp3/track_3.mp3");
/* harmony import */ var _assets_sounds_music_ogg_track_3_ogg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../assets/sounds/music/ogg/track_3.ogg */ "./assets/sounds/music/ogg/track_3.ogg");
/* harmony import */ var _assets_sounds_music_mp3_track_4_mp3__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../assets/sounds/music/mp3/track_4.mp3 */ "./assets/sounds/music/mp3/track_4.mp3");
/* harmony import */ var _assets_sounds_music_ogg_track_4_ogg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../assets/sounds/music/ogg/track_4.ogg */ "./assets/sounds/music/ogg/track_4.ogg");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../Utils */ "./src/js/Utils.js");
// import blockHit_MP3 from '/assets/sounds/effects/mp3/block_hit.mp3';
// import blockHit_OGG from '/assets/sounds/effects/ogg/block_hit.ogg';











































let volumeEffects = 1;
let volumeMusic = 0.8;
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
    if (sound != 'isCanPlay') {
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
  item[source].volume = item.volume;
  item[source].play();
}
function getRandomTrack(playlist) {
  let tracksList = [];
  let track;
  for (let sound in playlist) {
    sound.includes('track') && tracksList.push(playlist[sound]);
  }
  track = tracksList[(0,_Utils__WEBPACK_IMPORTED_MODULE_42__.randomNumber)(0, tracksList.length - 1)][source];
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

// item[source].currentTime = 0;
// item[source].volume = item.volume;

// function gameSoundEffects(item) {
//   if (audio.isCanPlay.canPlayType('audio/ogg') === 'probably') {
//     item.src_OGG.currentTime = 0;
//     item.src_OGG.play();
//   } else {
//     item.src_MP3.currentTime = 0;
//     item.src_MP3.play();
//   }
// }

// function gameSoundEffects(item) {
//   if (audio.sound.canPlayType("audio/mpeg")=="probably") {
//     audio.sound.src= item.src_MP3;
//   } else {
//     audio.sound.src= item.src_OGG;
//   }
//   audio.sound.currentTime = 0;
//   audio.sound.play();
// }

// function gameSoundEffects(item) {
//   item.currentTime = 0;
//   item.play();
// }

// For music
// let isPlayed = false;
// function gameSoundEffects(item) {
//   if(!isPlayed)
//   item.currentTime = 0;
//   item.play();
//   isPlayed = true;
// }



/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/img/Background_images/Win_4.jpg":
/*!************************************************!*\
  !*** ./assets/img/Background_images/Win_4.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41902777fb77a1d57149.jpg";

/***/ }),

/***/ "./assets/img/Background_images/bg_1.jpg":
/*!***********************************************!*\
  !*** ./assets/img/Background_images/bg_1.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c8433101090cd8bc0bb.jpg";

/***/ }),

/***/ "./assets/img/Hero/Fall_left.png":
/*!***************************************!*\
  !*** ./assets/img/Hero/Fall_left.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "caa8591cb3f3a1855c29.png";

/***/ }),

/***/ "./assets/img/Hero/Fall_right.png":
/*!****************************************!*\
  !*** ./assets/img/Hero/Fall_right.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61cdd2e0f3c3604e7b1f.png";

/***/ }),

/***/ "./assets/img/Hero/Idle_left.png":
/*!***************************************!*\
  !*** ./assets/img/Hero/Idle_left.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47bb81cb0aaa2c499d5c.png";

/***/ }),

/***/ "./assets/img/Hero/Idle_right.png":
/*!****************************************!*\
  !*** ./assets/img/Hero/Idle_right.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a499ad60f919b1f6cad.png";

/***/ }),

/***/ "./assets/img/Hero/Jump_left.png":
/*!***************************************!*\
  !*** ./assets/img/Hero/Jump_left.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02bc1678beb112beb4a1.png";

/***/ }),

/***/ "./assets/img/Hero/Jump_right.png":
/*!****************************************!*\
  !*** ./assets/img/Hero/Jump_right.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e23b39a2281ee54125f.png";

/***/ }),

/***/ "./assets/img/Hero/Player_death.png":
/*!******************************************!*\
  !*** ./assets/img/Hero/Player_death.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c53e7b3ac960db1762a9.png";

/***/ }),

/***/ "./assets/img/Hero/Run_left.png":
/*!**************************************!*\
  !*** ./assets/img/Hero/Run_left.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "542a853a490865e4177b.png";

/***/ }),

/***/ "./assets/img/Hero/Run_right.png":
/*!***************************************!*\
  !*** ./assets/img/Hero/Run_right.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e361987edb2dc29e1508.png";

/***/ }),

/***/ "./assets/img/Platforms/Finish_T_L.png":
/*!*********************************************!*\
  !*** ./assets/img/Platforms/Finish_T_L.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38915aefe86632a9ac20.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_jump.png":
/*!************************************************!*\
  !*** ./assets/img/Platforms/Platform_jump.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "befd1a46da1a01267d9e.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_jump_disabled.png":
/*!*********************************************************!*\
  !*** ./assets/img/Platforms/Platform_jump_disabled.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73ffdfeda1c0c3fa260e.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_one.png":
/*!***********************************************!*\
  !*** ./assets/img/Platforms/Platform_one.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "893ecde318d7755323b7.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_oneStep.png":
/*!***************************************************!*\
  !*** ./assets/img/Platforms/Platform_oneStep.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2b486028ea06a42538d.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_oneStep_Explosion.png":
/*!*************************************************************!*\
  !*** ./assets/img/Platforms/Platform_oneStep_Explosion.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a27c1909728c39bb81d1.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_one_disabled.png":
/*!********************************************************!*\
  !*** ./assets/img/Platforms/Platform_one_disabled.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15a754e2c1925bdc527f.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_solid.png":
/*!*************************************************!*\
  !*** ./assets/img/Platforms/Platform_solid.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd246bde66e7e6e5e3fc.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_three.png":
/*!*************************************************!*\
  !*** ./assets/img/Platforms/Platform_three.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8227e458d9e6b45666dc.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_three_disabled.png":
/*!**********************************************************!*\
  !*** ./assets/img/Platforms/Platform_three_disabled.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "171091192763139674e9.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_two.png":
/*!***********************************************!*\
  !*** ./assets/img/Platforms/Platform_two.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4550e1c7d8d19a7959ef.png";

/***/ }),

/***/ "./assets/img/Platforms/Platform_two_disabled.png":
/*!********************************************************!*\
  !*** ./assets/img/Platforms/Platform_two_disabled.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14db406580d82c54850b.png";

/***/ }),

/***/ "./assets/img/Platforms/brick_1.png":
/*!******************************************!*\
  !*** ./assets/img/Platforms/brick_1.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf7f7083ae6b5338384a.png";

/***/ }),

/***/ "./assets/img/Platforms/brick_2.png":
/*!******************************************!*\
  !*** ./assets/img/Platforms/brick_2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee2cf136916afa6626fe.png";

/***/ }),

/***/ "./assets/img/Platforms/platform.png":
/*!*******************************************!*\
  !*** ./assets/img/Platforms/platform.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7eac2d1901ea34422f0e.png";

/***/ }),

/***/ "./assets/img/Traps/Dead_signal_zone.png":
/*!***********************************************!*\
  !*** ./assets/img/Traps/Dead_signal_zone.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03857753acbdef4e6e04.png";

/***/ }),

/***/ "./assets/img/Traps/Dead_signal_zone_hover.png":
/*!*****************************************************!*\
  !*** ./assets/img/Traps/Dead_signal_zone_hover.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62e7d0778000c13e26fd.png";

/***/ }),

/***/ "./assets/img/Traps/Fan.png":
/*!**********************************!*\
  !*** ./assets/img/Traps/Fan.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8662b60253954dfab65.png";

/***/ }),

/***/ "./assets/img/Traps/Fireball_down.png":
/*!********************************************!*\
  !*** ./assets/img/Traps/Fireball_down.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac9f21f4de237fa1c10a.png";

/***/ }),

/***/ "./assets/img/Traps/Fireball_left.png":
/*!********************************************!*\
  !*** ./assets/img/Traps/Fireball_left.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f65321ba63f1ed1febd1.png";

/***/ }),

/***/ "./assets/img/Traps/Fireball_right.png":
/*!*********************************************!*\
  !*** ./assets/img/Traps/Fireball_right.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "946da67f09f017070631.png";

/***/ }),

/***/ "./assets/img/Traps/Fireball_up.png":
/*!******************************************!*\
  !*** ./assets/img/Traps/Fireball_up.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7532e8843b6f08c4c736.png";

/***/ }),

/***/ "./assets/img/Traps/Flamethrower_down.png":
/*!************************************************!*\
  !*** ./assets/img/Traps/Flamethrower_down.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a81ec16a567429e11f71.png";

/***/ }),

/***/ "./assets/img/Traps/Flamethrower_left.png":
/*!************************************************!*\
  !*** ./assets/img/Traps/Flamethrower_left.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1319f38494e5186d7f18.png";

/***/ }),

/***/ "./assets/img/Traps/Flamethrower_right.png":
/*!*************************************************!*\
  !*** ./assets/img/Traps/Flamethrower_right.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bd291d54f54e255e917.png";

/***/ }),

/***/ "./assets/img/Traps/Flamethrower_up.png":
/*!**********************************************!*\
  !*** ./assets/img/Traps/Flamethrower_up.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4dafaeaded625dad6da0.png";

/***/ }),

/***/ "./assets/img/Traps/Platform_spikes.png":
/*!**********************************************!*\
  !*** ./assets/img/Traps/Platform_spikes.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d04ce6e355f376a0e0e.png";

/***/ }),

/***/ "./assets/img/Traps/Saw.png":
/*!**********************************!*\
  !*** ./assets/img/Traps/Saw.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8d99ee1b1eb3891ba28.png";

/***/ }),

/***/ "./assets/sounds/effects/mp3/block_hit.mp3":
/*!*************************************************!*\
  !*** ./assets/sounds/effects/mp3/block_hit.mp3 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "868328e1d62559dea3d3.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/bottom_hit.mp3":
/*!**************************************************!*\
  !*** ./assets/sounds/effects/mp3/bottom_hit.mp3 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "315ce5bb8774f67f6a53.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/choose.mp3":
/*!**********************************************!*\
  !*** ./assets/sounds/effects/mp3/choose.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b070217cc3ec9826fd89.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/error.mp3":
/*!*********************************************!*\
  !*** ./assets/sounds/effects/mp3/error.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07b873397bd181f0fe5b.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/explosion_block.mp3":
/*!*******************************************************!*\
  !*** ./assets/sounds/effects/mp3/explosion_block.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "173e28202170f19073b8.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/falling_in_depth.mp3":
/*!********************************************************!*\
  !*** ./assets/sounds/effects/mp3/falling_in_depth.mp3 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1dec2f6bcf25b798920b.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/falling_in_depth_2.mp3":
/*!**********************************************************!*\
  !*** ./assets/sounds/effects/mp3/falling_in_depth_2.mp3 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c0e7724e5723b97e9be.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/fire.mp3":
/*!********************************************!*\
  !*** ./assets/sounds/effects/mp3/fire.mp3 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2517213c91f01c976f92.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/hero_death.mp3":
/*!**************************************************!*\
  !*** ./assets/sounds/effects/mp3/hero_death.mp3 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2a93b9461f413734ad7.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/jump.mp3":
/*!********************************************!*\
  !*** ./assets/sounds/effects/mp3/jump.mp3 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2774fd0d75bdfeed2da.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/jump_on_space_toggled_platform.mp3":
/*!**********************************************************************!*\
  !*** ./assets/sounds/effects/mp3/jump_on_space_toggled_platform.mp3 ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "037494008090ce9e60f2.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/next_level.mp3":
/*!**************************************************!*\
  !*** ./assets/sounds/effects/mp3/next_level.mp3 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87197dcb8811e09b73e1.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/ok.mp3":
/*!******************************************!*\
  !*** ./assets/sounds/effects/mp3/ok.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75e0f3d8b173961534ec.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/select.mp3":
/*!**********************************************!*\
  !*** ./assets/sounds/effects/mp3/select.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6ba29659cf55d571cc0.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/teleport.mp3":
/*!************************************************!*\
  !*** ./assets/sounds/effects/mp3/teleport.mp3 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97462a60fa4b16083f2e.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/toggle.mp3":
/*!**********************************************!*\
  !*** ./assets/sounds/effects/mp3/toggle.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76d8a9edad64667bb800.mp3";

/***/ }),

/***/ "./assets/sounds/effects/mp3/toggle_disabled.mp3":
/*!*******************************************************!*\
  !*** ./assets/sounds/effects/mp3/toggle_disabled.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2a5e45d00f4a784b94b.mp3";

/***/ }),

/***/ "./assets/sounds/effects/ogg/block_hit.ogg":
/*!*************************************************!*\
  !*** ./assets/sounds/effects/ogg/block_hit.ogg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "409a03408bb32d1202d2.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/bottom_hit.ogg":
/*!**************************************************!*\
  !*** ./assets/sounds/effects/ogg/bottom_hit.ogg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9771e96a1d6912ab23c6.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/choose.ogg":
/*!**********************************************!*\
  !*** ./assets/sounds/effects/ogg/choose.ogg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55972719deb5d18b267e.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/error.ogg":
/*!*********************************************!*\
  !*** ./assets/sounds/effects/ogg/error.ogg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dc046f6177bea7f2950.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/explosion_block.ogg":
/*!*******************************************************!*\
  !*** ./assets/sounds/effects/ogg/explosion_block.ogg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ea75121a93a42b1411e.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/falling_in_depth.ogg":
/*!********************************************************!*\
  !*** ./assets/sounds/effects/ogg/falling_in_depth.ogg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0867563ae4e9e18a2e8.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/falling_in_depth_2.ogg":
/*!**********************************************************!*\
  !*** ./assets/sounds/effects/ogg/falling_in_depth_2.ogg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6ae7ad1b65788f9dae5.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/fire.ogg":
/*!********************************************!*\
  !*** ./assets/sounds/effects/ogg/fire.ogg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "957cddacb1deaac79e00.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/hero_death.ogg":
/*!**************************************************!*\
  !*** ./assets/sounds/effects/ogg/hero_death.ogg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70068ae31959fab95e81.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/jump.ogg":
/*!********************************************!*\
  !*** ./assets/sounds/effects/ogg/jump.ogg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9efb836c3a9ba68ca120.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/jump_on_space_toggled_platform.ogg":
/*!**********************************************************************!*\
  !*** ./assets/sounds/effects/ogg/jump_on_space_toggled_platform.ogg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1e681bf5a15caf9026f.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/next_level.ogg":
/*!**************************************************!*\
  !*** ./assets/sounds/effects/ogg/next_level.ogg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "523646943918c59d2b3d.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/ok.ogg":
/*!******************************************!*\
  !*** ./assets/sounds/effects/ogg/ok.ogg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de74680fa0d4fb3d8e14.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/select.ogg":
/*!**********************************************!*\
  !*** ./assets/sounds/effects/ogg/select.ogg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c46e5b7d17520ff6935f.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/teleport.ogg":
/*!************************************************!*\
  !*** ./assets/sounds/effects/ogg/teleport.ogg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f6c0dc57802e6e026c6.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/toggle.ogg":
/*!**********************************************!*\
  !*** ./assets/sounds/effects/ogg/toggle.ogg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aaf531751543bc351744.ogg";

/***/ }),

/***/ "./assets/sounds/effects/ogg/toggle_disabled.ogg":
/*!*******************************************************!*\
  !*** ./assets/sounds/effects/ogg/toggle_disabled.ogg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d6e93c66366655257dd.ogg";

/***/ }),

/***/ "./assets/sounds/music/mp3/track_1.mp3":
/*!*********************************************!*\
  !*** ./assets/sounds/music/mp3/track_1.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60db4a6c1bb2742d1f9c.mp3";

/***/ }),

/***/ "./assets/sounds/music/mp3/track_2.mp3":
/*!*********************************************!*\
  !*** ./assets/sounds/music/mp3/track_2.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e1718e91aa4e1cca135.mp3";

/***/ }),

/***/ "./assets/sounds/music/mp3/track_3.mp3":
/*!*********************************************!*\
  !*** ./assets/sounds/music/mp3/track_3.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1afb1b0a35b44cdf1ff1.mp3";

/***/ }),

/***/ "./assets/sounds/music/mp3/track_4.mp3":
/*!*********************************************!*\
  !*** ./assets/sounds/music/mp3/track_4.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4dcabd1247bcf8d7ebcf.mp3";

/***/ }),

/***/ "./assets/sounds/music/ogg/track_1.ogg":
/*!*********************************************!*\
  !*** ./assets/sounds/music/ogg/track_1.ogg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c26659bbe1eda6e9e5d.ogg";

/***/ }),

/***/ "./assets/sounds/music/ogg/track_2.ogg":
/*!*********************************************!*\
  !*** ./assets/sounds/music/ogg/track_2.ogg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d97f6fbd97ff9dc44f3f.ogg";

/***/ }),

/***/ "./assets/sounds/music/ogg/track_3.ogg":
/*!*********************************************!*\
  !*** ./assets/sounds/music/ogg/track_3.ogg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91a16270795862ed0a69.ogg";

/***/ }),

/***/ "./assets/sounds/music/ogg/track_4.ogg":
/*!*********************************************!*\
  !*** ./assets/sounds/music/ogg/track_4.ogg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c516101ffeada79f1199.ogg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/styles.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=script.js.map