import './sass/styles.scss';

// imagePlatform.onload = function getSizes () {
//   imagePlatform.width = imagePlatform.naturalWidth;
//   imagePlatform.height = imagePlatform.naturalHeight;
//}
import { parseCollisitions } from './js/Collision';
import { canvas, c } from './js/Canvas';
import { createImage, Sprite } from './js/Utils';
import { Player } from './js/Player';
// import { levelMap } from './js/data/DescriptionForLevelMap';
import { bulletController } from './js/Collision';
import { audio, gameSoundEffects, getRandomTrack, playNextTrack, volumeEffects, volumeMusic } from './js/data/Audio';



function setVolume(sound, volume) {
  sound = volume;
}



window.addEventListener('click', fn)

function fn() {

  setVolume(volumeMusic, 0.3)
}




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
        } from './js/Assets';
import { keys, keyDownHandler, keyUpHandler } from './js/Keys';
import { AdditionalElements } from './js/AdditionalElements';
import { requestLevelMap } from './js/Levels';


// canvas.width = document.documentElement.clientWidth;
// canvas.height = document.documentElement.clientHeight;
const fontSize = canvas.height / 5; // 10
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


import { mySPA } from './js/SPA';
document.addEventListener('DOMContentLoaded', mySPA.init('root', 'content'));



canvas.width = 1024 // 1280 //window.innerWidth; // canvas.width = innerWidth;
canvas.height = 576 // 720 //window.innerHeight;
export let requestAnim = window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function(callback) { window.setTimeout(callback, 1000 / 60); }

window.addEventListener('keydown', (e) => fullScreen(e, canvas));








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
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
    }
  }
}

let leftNeighboorBlockFromHeroArr = [];
export let timerShoot_1 = null;
export let timerShoot_2 = null;
export let leftNeighboorBlockFromHero = null;
export let completeLevel = false;





export let additionalElements = [
  new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
]


// class Level {
//   constructor(value) {
//     this.stage =  value;
//   }
// }
// export let level = new Level(1);



export let level = 3;
function increseLevel(obj) {
  return level >= Object.keys(obj).length ? level : ++level;
 }









export let platforms = [],
           levelMap,
           parsedCollisions,
           player;




// requestLevelMap(`/src/js/json/levelMap_${level}.json`, setLevelMap, parseCollisitions, createPlayer, init, animate);





function setLevelMap(value) {
  levelMap = value;
  console.log(levelMap)
  return levelMap;
}

function createPlayer(levelMap, platforms) {
  levelMap.map.forEach((row, index_Y) => {
    row.forEach((cell, index_X) => {
    if (cell === 'st') {
      player = new Player({ platforms }, index_X * 36, index_Y * 36, levelMap.margin.left, levelMap.margin.top);
    } 
    })
  })
  return player;
}


function fireSoundInterval(delay) {
  timerShoot_1 = setTimeout(function soundFire() {
    timerShoot_2 = setTimeout(soundFire, delay);
    gameSoundEffects(audio.fire);
  }, delay); 
}
let initStart = true;
 function flamethrowerShootSoundIntervalInit() {
  if (initStart) {
    let flamethrowerShootDelay = null;
    platforms.forEach(platform => {
      ( platform.type === 'flamethrowerLeft' ||
        platform.type === 'flamethrowerRight' ||
        platform.type === 'flamethrowerUp' ||
        platform.type === 'flamethrowerDown') && (flamethrowerShootDelay = platform.delay);
    })
    
    if (platforms.some(platform => {
      return (platform.type === 'flamethrowerLeft' ||
      platform.type === 'flamethrowerRight' ||
      platform.type === 'flamethrowerUp' ||
      platform.type === 'flamethrowerDown')})) {
        fireSoundInterval(flamethrowerShootDelay * 8);
    }
  }
  initStart = false;
 }




                            let track = getRandomTrack(audio);
                            track.pause();
                            track = getRandomTrack(audio)
                            // track.play();
                            track.onended = function() {
                              playNextTrack(track, audio);
                            }


function reloadGameplay() {
  additionalElements = [new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
  ];
    platforms.forEach(platform => {
      (platform.type === 'oneStep') && platform.restore();
    });
    levelMap.map.forEach((row, index_Y) => {
      row.forEach((cell, index_X) => {
       cell === 'st' && (player = new Player({ platforms }, index_X * 36, index_Y * 36, levelMap.margin.left, levelMap.margin.top));
      })
    })  
}




let levelOverlay = createImage(win);
levelOverlay.width = canvas.width;
levelOverlay.height = canvas.height;

export function init() {
  flamethrowerShootSoundIntervalInit();
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


function animate() {

  requestAnim(animate);
  
  console.log('animation counter');

  additionalElements.forEach(element => element.draw());
                              
                          
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
                          platform.type === 'flamethrowerDown'
                          ) {
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
leftNeighboorBlockFromHero = leftNeighboorBlockFromHeroArr[leftNeighboorBlockFromHeroArr.length - 1]


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
// sawTrap.restore();
                             //sawTrap2.restore(); // !!!!!!!!!!!!
gameSoundEffects(audio.fallingInDepth2);
keys.jumpToggleActive = !keys.jumpToggleActive;
        init();
      }


}
// init();
// animate();

window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);