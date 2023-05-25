/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_SPA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/SPA */ "./src/js/SPA.js");
// import './sass/styles.scss';

// // imagePlatform.onload = function getSizes () {
// //   imagePlatform.width = imagePlatform.naturalWidth;
// //   imagePlatform.height = imagePlatform.naturalHeight;
// //}
// import { parseCollisitions } from './js/Collision';
// import { canvas, c } from './js/Canvas';
// import { createImage, Sprite } from './js/Utils';
// import { Player } from './js/Player';
// // import { levelMap } from './js/data/DescriptionForLevelMap';
// import { bulletController } from './js/Collision';
// import { audio, gameSoundEffects, getRandomTrack, playNextTrack, volumeEffects, volumeMusic } from './js/data/Audio';

// function setVolume(sound, volume) {
//   sound = volume;
// }

// window.addEventListener('click', fn)

// function fn() {

//   setVolume(volumeMusic, 0.3)
// }

// import { Platform,
//   OneStep,
//   Fan,
//   JumpToggleActive,
//   JumpToggleDisabled,
//   PlatformOne,
//   PlatformTwo,
//   PlatformThree,
//   DeadSignal,
// } from './js/Platform';

// import {
//   PlatformSpikes,
//   Saw,
//   FlamethrowerLeft,
//   FlamethrowerRight,
//   FlamethrowerUp,
//   FlamethrowerDown,
//   BulletController,
//   Flamethrower
// } from './js/Traps';
// import { platformImgSrc300,
//           heroIdleR,
//           heroIdleL,
//           heroRunR,
//           heroRunL,
//           heroJumpR,
//           heroJumpL,
//           heroFallR,
//           heroFallL,
//           heroDeath,
//           backgroundImg,
//           win,
//           platformSolid,
//           platformOneStep,
//           platformOneStepExplosion,
//           platformJump,
//           platformJumpDisabled,
//           platformOne,
//           platformTwo,
//           platformThree,
//           platformOneDisabled,
//           platformTwoDisabled,
//           platformThreeDisabled,
//           saw,
//           fan,
//           spike,
//           deadSignalZone,
//           deadSignalZoneHover,
//           flamethrowerLeft,
//           flamethrowerRight,
//           flamethrowerUp,
//           flamethrowerDown,
//           brick_1,
//           brick_2,
//         } from './js/Assets';
// import { keys, keyDownHandler, keyUpHandler } from './js/Keys';
// import { AdditionalElements } from './js/AdditionalElements';
// import { requestLevelMap } from './js/Levels';

// // canvas.width = document.documentElement.clientWidth;
// // canvas.height = document.documentElement.clientHeight;
// const fontSize = canvas.height / 5; // 10
//                       // window.addEventListener('resize', () => {
//                       //   canvas.width = document.documentElement.clientWidth;
//                       //   canvas.height = document.documentElement.clientHeight;
//                       // });

//                       // function onResize( element, callback ){
//                       //   var elementHeight = element.height,
//                       //       elementWidth = element.width;
//                       //   setInterval(function(){
//                       //       if( element.height !== elementHeight || element.width !== elementWidth ){
//                       //         elementHeight = element.height;
//                       //         elementWidth = element.width;
//                       //         callback();
//                       //       }
//                       //   }, 300);
//                       // }

//                       // onResize(canvas, function() { 
//                       // canvas.width = document.documentElement.clientWidth;
//                       // canvas.height = document.documentElement.clientHeight;
//                       // });


document.addEventListener('DOMContentLoaded', _js_SPA__WEBPACK_IMPORTED_MODULE_0__.mySPA.init('root', 'content'));

// canvas.width = 1024 // 1280 //window.innerWidth; // canvas.width = innerWidth;
// canvas.height = 576 // 720 //window.innerHeight;
// export let requestAnim = window.requestAnimationFrame ||
//                   window.webkitRequestAnimationFrame ||
//                   window.mozRequestAnimationFrame ||
//                   window.oRequestAnimationFrame ||
//                   window.msRequestAnimationFrame ||
//                   function(callback) { window.setTimeout(callback, 1000 / 60); }

// window.addEventListener('keydown', (e) => fullScreen(e, canvas));

// // let game = [];

// // class Game {
// //   constructor(level) {
// //     this.level = level;
// //   }
// // }

// // function createNewGame(map) {
// //   Object.values(map).forEach(level => {
// //     game.push(new Game(level.id));
// //   })
// // }
// // console.log(game)

// function fullScreen(e, element) {
//   if (e.code === 'KeyF') {
//     if(element.requestFullscreen) {
//       element.requestFullscreen();
//     } else if(element.webkitrequestFullscreen) {
//       element.webkitRequestFullscreen();
//     } else if(element.mozRequestFullscreen) {
//       element.mozRequestFullScreen();
//     }
//   }
// }

// let leftNeighboorBlockFromHeroArr = [];
// export let timerShoot_1 = null;
// export let timerShoot_2 = null;
// export let leftNeighboorBlockFromHero = null;
// export let completeLevel = false;

// export let additionalElements = [
//   new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
// ]

// // class Level {
// //   constructor(value) {
// //     this.stage =  value;
// //   }
// // }
// // export let level = new Level(1);

// export let level = 1;

// function increseLevel(obj) {
//   return level >= Object.keys(obj).length ? level : ++level;
//  }

// export let platforms = [],
//            levelMap,
//            parsedCollisions,
//            player;

// // requestLevelMap(`/src/js/json/levelMap_${level}.json`, setLevelMap, parseCollisitions, createPlayer, init, animate);

// function setLevelMap(value) {
//   levelMap = value;
//   console.log(levelMap)
//   return levelMap;
// }

// function createPlayer(levelMap, platforms) {
//   levelMap.map.forEach((row, index_Y) => {
//     row.forEach((cell, index_X) => {
//     if (cell === 'st') {
//       player = new Player({ platforms }, index_X * 36, index_Y * 36, levelMap.margin.left, levelMap.margin.top);
//     } 
//     })
//   })
//   return player;
// }

// function fireSoundInterval(delay) {
//   timerShoot_1 = setTimeout(function soundFire() {
//     timerShoot_2 = setTimeout(soundFire, delay);
//     gameSoundEffects(audio.fire);
//   }, delay); 
// }
// let initStart = true;
//  function flamethrowerShootSoundIntervalInit() {
//   if (initStart) {
//     let flamethrowerShootDelay = null;
//     platforms.forEach(platform => {
//       ( platform.type === 'flamethrowerLeft' ||
//         platform.type === 'flamethrowerRight' ||
//         platform.type === 'flamethrowerUp' ||
//         platform.type === 'flamethrowerDown') && (flamethrowerShootDelay = platform.delay);
//     })

//     if (platforms.some(platform => {
//       return (platform.type === 'flamethrowerLeft' ||
//       platform.type === 'flamethrowerRight' ||
//       platform.type === 'flamethrowerUp' ||
//       platform.type === 'flamethrowerDown')})) {
//         fireSoundInterval(flamethrowerShootDelay * 8);
//     }
//   }
//   initStart = false;
//  }

//                             let track = getRandomTrack(audio);
//                             track.pause();
//                             track = getRandomTrack(audio)
//                             //track.play();
//                             track.onended = function() {
//                               playNextTrack(track, audio);
//                             }

// function reloadGameplay() {
//   additionalElements = [new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
//   ];
//     platforms.forEach(platform => {
//       (platform.type === 'oneStep') && platform.restore();
//     });
//     levelMap.map.forEach((row, index_Y) => {
//       row.forEach((cell, index_X) => {
//        cell === 'st' && (player = new Player({ platforms }, index_X * 36, index_Y * 36, levelMap.margin.left, levelMap.margin.top));
//       })
//     })  
// }

// let levelOverlay = createImage(win);
// levelOverlay.width = canvas.width;
// levelOverlay.height = canvas.height;

// export function init() {
//   flamethrowerShootSoundIntervalInit();
//   player.velocity.y = 1;
//   player.alive = true;
//   keys.spaceToggleCounter = 1;

//   if (player.completeLevel) {
//     c.save();
//     c.fillStyle = 'rgb(247, 251, 254)';
//     c.fillRect(0, 0, canvas.width, canvas.height, canvas.width / 2, canvas.height / 2);
//     c.drawImage(levelOverlay, 0, 0, canvas.width, canvas.height);

//     c.fillStyle = 'rgb(21, 173, 188)';
//     c.font = `normal ${fontSize}px Rubik Iso`;
//     c.textBaseline = 'middle';
//     c.textAlign = 'center';
//     canvas.style.letterSpacing = `${fontSize / 20}px`;
//     c.fillText('Next level', canvas.width / 2, canvas.height / 2)
//     c.restore();
//     setTimeout(() => reloadGameplay(), 1250);
//     player.completeLevel = false;
//   } else {
//     reloadGameplay();
// } 
// return player;
// }                      

// function animate() {

//   requestAnim(animate);

//   console.log('animation counter');

//   additionalElements.forEach(element => element.draw());

//                           platforms.forEach(platform => platform.draw());
//                           platforms.forEach(platform => platform.update());
//                           platforms.forEach(platform => {
//                             (platform.type === 'jumpToggleActive' || platform.type === 'jumpToggleDisabled') && platform.toggle();

//                           if (platform.type === 'platformOne' ||
//                           platform.type === 'platformTwo' ||
//                           platform.type === 'platformThree' ||
//                           platform.type === 'deadSignalZone' ||
//                           platform.type === 'flamethrowerLeft' ||
//                           platform.type === 'flamethrowerRight' ||
//                           platform.type === 'flamethrowerUp' ||
//                           platform.type === 'flamethrowerDown'
//                           ) {
//                             platform.collision();
//                           }

//                           if (platform.type === 'flamethrowerLeft' ||
//                           platform.type === 'flamethrowerRight' ||
//                           platform.type === 'flamethrowerUp' ||
//                           platform.type === 'flamethrowerDown') {
//                             platform.shoot();                      
//                           }

//                           });

// leftNeighboorBlockFromHeroArr = platforms.filter(platform => {
//   return (platform.left <= player.left &&
//     (platform.top <= player.top &&
//     platform.bottom >= player.bottom)
//     );
// })
// leftNeighboorBlockFromHero = leftNeighboorBlockFromHeroArr[leftNeighboorBlockFromHeroArr.length - 1]

//                           player.update();

//   if (keys.right.pressed && (player.position.x + player.width) <= canvas.width) { // упор персонажа в правый край экрана
//     player.velocity.x = 2;
//   } else if (keys.left.pressed && player.position.x >= 0) { // упор персонажа в левый край экрана
//     player.velocity.x = -2;
//   } else {
//     player.velocity.x = 0;
//   }

// if (player.velocity.y >= player.jumpHeight - player.gravity && !keys.right.pressed && !keys.left.pressed && keys.lastPressed === 'right') { // 10 - когда персонаж на земле
//   player.currentSprite = player.sprites.idle.right;
// } else if (player.velocity.y >= player.jumpHeight - player.gravity && !keys.right.pressed && !keys.left.pressed && keys.lastPressed === 'left') { // 10 - когда персонаж на земле
//   player.currentSprite = player.sprites.idle.left;
// }

//     // Падение в пропасть (см. комментарии в player.update())
//       if (player.position.y > canvas.height) {
// // sawTrap.restore();
//                              //sawTrap2.restore(); // !!!!!!!!!!!!
// gameSoundEffects(audio.fallingInDepth2);
// keys.jumpToggleActive = !keys.jumpToggleActive;
//         init();
//       }

// }
// // init();
// // animate();

// window.addEventListener('keydown', keyDownHandler);
// window.addEventListener('keyup', keyUpHandler);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map