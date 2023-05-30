//import './sass/styles.scss';  // прописано в Webpack entry points

import { mySPA } from './js/SPA';
import { parseCollisitions } from './js/Collision';
// import { canvas, c } from './js/Canvas';
import { createImage, flamethrowerShootSoundIntervalInit, fullScreen, setLocalStorage, getLocalStorage } from './js/Utils';
import { Player } from './js/Player';
import { bulletController } from './js/Collision';
import { audio, source,  getRandomTrack, playNextTrack, volumeEffects, volumeMusic, muteSound } from './js/data/Audio';
import { Platform,
  OneStep,
  Fan,
  JumpToggleActive,
  JumpToggleDisabled,
  PlatformOne,
  PlatformTwo,
  PlatformThree,
  DeadSignal,
} from './js/Platform';

import {
  PlatformSpikes,
  Saw,
  FlamethrowerLeft,
  FlamethrowerRight,
  FlamethrowerUp,
  FlamethrowerDown,
  BulletController,
  Flamethrower
} from './js/Traps';
import { platformImgSrc300,
          heroIdleR,
          heroIdleL,
          heroRunR,
          heroRunL,
          heroJumpR,
          heroJumpL,
          heroFallR,
          heroFallL,
          heroDeath,
          backgroundImg,
          win,
          platformSolid,
          platformOneStep,
          platformOneStepExplosion,
          platformJump,
          platformJumpDisabled,
          platformOne,
          platformTwo,
          platformThree,
          platformOneDisabled,
          platformTwoDisabled,
          platformThreeDisabled,
          saw,
          fan,
          spike,
          deadSignalZone,
          deadSignalZoneHover,
          flamethrowerLeft,
          flamethrowerRight,
          flamethrowerUp,
          flamethrowerDown,
          brick_1,
          brick_2,
          backgroundImg_1,
          backgroundImg_2,
          backgroundImg_3,
          backgroundImg_4,
          backgroundImg_5,
          backgroundImg_6,
          backgroundImg_7,
          backgroundImg_8,
          backgroundImg_9,
          backgroundImg_10,
          backgroundImg_11,
          backgroundImg_12,
          backgroundImg_13,
          backgroundImg_14,
          backgroundImg_15,
          backgroundImg_16,
          backgroundImg_17
        } from './js/Assets';
import { keys, keyDownHandler, keyUpHandler } from './js/Keys';
import { AdditionalElements } from './js/AdditionalElements';
import { requestLevelMap } from './js/Levels';


import { logInApp } from './js/Login';
logInApp.init('app', 'firstStart');






export let level = 1,
           canvas,
           c,
           platforms = [],
           levelMap,
           parsedCollisions,
           player,
           initStart = true,
           completeLevel = false,
           isLeaveGame = false,
           leftNeighboorBlockFromHero = null;

let levelOverlay = createImage(win),
           leftNeighboorBlockFromHeroArr = [],
           backgroundCanvasImg = [],
           fontSize;


// Turn on sounds (not music) in game, and turn off when player leaves the game 
export function gameSoundEffects(item) {
  if (!isLeaveGame) {
    item[source].currentTime = 0;
    item[source].play();
  }   
}

export let requestAnim = window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function(callback) { window.setTimeout(callback, 1000 / 60); }

window.addEventListener('keydown', (e) => fullScreen(e, canvas));

















  function increseLevel(obj) {
    return level >= Object.keys(obj).length ? level : ++level;
  }





           
//requestLevelMap(`../src/js/json/levelMap_${level}.json`, setLevelMap, parseCollisitions, createPlayer, init, animate);

 
export function setLevelMap(value) {
  canvas = document.getElementById('canvas');
  c = canvas.getContext("2d");
  fontSize = canvas.height / 10; // 10
  canvas.width = 1024 // 1280
  canvas.height = 576 // 720
  levelOverlay.width = canvas.width;
  levelOverlay.height = canvas.height;
  backgroundCanvasImg = [ // Canvas background-image for each level
    new AdditionalElements(0, 0, createImage(backgroundImg_1, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_2, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_3, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_4, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_5, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_6, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_7, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_8, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_9, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_10, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_11, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_12, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_13, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_14, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_15, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_16, canvas.width, canvas.height)),
    new AdditionalElements(0, 0, createImage(backgroundImg_17, canvas.width, canvas.height)),
  ]
  levelMap = value;
  console.log(levelMap)
  return levelMap;
}

export function createPlayer(levelMap, platforms) {
  levelMap.map.forEach((row, index_Y) => {
    row.forEach((cell, index_X) => {
    if (cell === 'st') {
      player = new Player({ platforms }, index_X * 36, index_Y * 36, levelMap.margin.left, levelMap.margin.top);
    } 
    })
  })
  return player;
}


export function blankGameplayBetweenGames() {
  player = null;
  platforms = [];
}






function reloadGameplay() {
  // backgroundCanvasImg = [
  //   new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
  // ];
    platforms.forEach(platform => {
      (platform.type === 'oneStep') && platform.restore();
    });
    levelMap.map.forEach((row, index_Y) => {
      row.forEach((cell, index_X) => {
       cell === 'st' && (player = new Player({ platforms }, index_X * 36, index_Y * 36, levelMap.margin.left, levelMap.margin.top));
      })
    })  
}


export function setupStageNumber(value) {
  level = value;
}

export function changeIsLeaveGameState(value) {
  isLeaveGame = value;
}


let initCounter = 0;

export function init() {
  flamethrowerShootSoundIntervalInit();
  initCounter++;
  initCounter > 1 && (initStart = false);
console.log(initStart)
  player.velocity.y = 1;
  player.alive = true;
  keys.spaceToggleCounter = 1;
  
  if (player.completeLevel) {
    c.save();
    c.fillStyle = 'rgb(247, 251, 254)';
    c.fillRect(0, 0, canvas.width, canvas.height, canvas.width / 2, canvas.height / 2);
    c.drawImage(levelOverlay, 0, 0, canvas.width, canvas.height);
    
    c.fillStyle = 'rgb(21, 173, 188)';
    c.font = `normal ${fontSize}px Rubik Iso`;
    c.textBaseline = 'middle';
    c.textAlign = 'center';
    canvas.style.letterSpacing = `${fontSize / 20}px`;
    c.fillText('Next level', canvas.width / 2, canvas.height / 2)
    c.restore();
    setTimeout(() => reloadGameplay(), 1250);
    player.completeLevel = false;
  } else {
    reloadGameplay();
} 
return player;
}                      


export function animate() {
  requestAnim(animate);
  console.log('animation counter');
  backgroundCanvasImg[level - 1].draw();
             console.log(backgroundCanvasImg[level - 1])   
  platforms.forEach(platform => platform.draw());
  platforms.forEach(platform => platform.update());
  platforms.forEach(platform => {
    (platform.type === 'jumpToggleActive' || platform.type === 'jumpToggleDisabled') && platform.toggle();
  
  if (platform.type === 'platformOne' ||
      platform.type === 'platformTwo' ||
      platform.type === 'platformThree' ||
      platform.type === 'deadSignalZone' ||
      platform.type === 'flamethrowerLeft' ||
      platform.type === 'flamethrowerRight' ||
      platform.type === 'flamethrowerUp' ||
      platform.type === 'flamethrowerDown') {
        platform.collision();
  }

  if (platform.type === 'flamethrowerLeft' ||
      platform.type === 'flamethrowerRight' ||
      platform.type === 'flamethrowerUp' ||
      platform.type === 'flamethrowerDown') {
        platform.shoot();                      
  }
  });
                          
  leftNeighboorBlockFromHeroArr = platforms.filter(platform => {
    return (platform.left <= player.left &&
      (platform.top <= player.top &&
      platform.bottom >= player.bottom)
      );
  })
  leftNeighboorBlockFromHero = leftNeighboorBlockFromHeroArr[leftNeighboorBlockFromHeroArr.length - 1];
  player.update();

  if (keys.right.pressed && (player.position.x + player.width) <= canvas.width) { // упор персонажа в правый край экрана
    player.velocity.x = 2;
  } else if (keys.left.pressed && player.position.x >= 0) { // упор персонажа в левый край экрана
    player.velocity.x = -2;
  } else {
    player.velocity.x = 0;
  }
 
  if (player.velocity.y >= player.jumpHeight - player.gravity && !keys.right.pressed && !keys.left.pressed && keys.lastPressed === 'right') { // 10 - когда персонаж на земле
    player.currentSprite = player.sprites.idle.right;
  } else if (player.velocity.y >= player.jumpHeight - player.gravity && !keys.right.pressed && !keys.left.pressed && keys.lastPressed === 'left') { // 10 - когда персонаж на земле
    player.currentSprite = player.sprites.idle.left;
  }

  // Падение в пропасть (см. комментарии в player.update())
  if (player.position.y > canvas.height) {
    gameSoundEffects(audio.fallingInDepth2);
    keys.jumpToggleActive = !keys.jumpToggleActive;
    init();
  }
}
// init();
// animate();

window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

// window.onbeforeunload = function () {
//   return false;
// };