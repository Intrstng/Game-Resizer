import './sass/styles.scss';

// imagePlatform.onload = function getSizes () {
//   imagePlatform.width = imagePlatform.naturalWidth;
//   imagePlatform.height = imagePlatform.naturalHeight;
//}
import { CollisionBlock, platforms, parsedCollisions } from './js/Collision';
import { canvas, c } from './js/Canvas';
import { createImage, Sprite } from './js/Utils';
import { Player } from './js/Player';
import { collisionsLevel_1 } from './js/data/Collisions';
import { bulletController } from './js/Collision';
import { audio, gameSoundEffects, getRandomTrack, playNextTrack, volumeEffects, volumeMusic } from './js/data/Audio';

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



// canvas.width = document.documentElement.clientWidth;
// canvas.height = document.documentElement.clientHeight;
const fontSize = canvas.height / 8; // 10
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

canvas.width = 1024 // 1280 //window.innerWidth; // canvas.width = innerWidth;
canvas.height = 576 // 720 //window.innerHeight;
let requestAnim = window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function(callback) { window.setTimeout(callback, 1000 / 60); }

window.addEventListener('keydown', (e) => fullScreen(e, canvas));


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



export let player;
  collisionsLevel_1.map.forEach((row, index_Y) => {
    row.forEach((cell, index_X) => {
     cell === 'st' && (player = new Player({ platforms }, index_X * 36, index_Y * 36, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
    })
  })

  
                                              //   platforms.forEach(platform => {
                                              //   if (platform.type === 'flamethrowerLeft' ||
                                              //   platform.type === 'flamethrowerRight' ||
                                              //   platform.type === 'flamethrowerUp' ||
                                              //   platform.type === 'flamethrowerDown') {
                                              //   // setInterval(() => gameSoundEffects(audio.fire), 1000);
                                              //   timerShoot_1 = setTimeout(function soundFire() {
                                              //       timerShoot_2 = setTimeout(soundFire, platform.delay * 8);
                                              //       gameSoundEffects(audio.fire);
                                              //     }, platform.delay * 8); 
                                              //     clearTimeout(timerShoot_2)                        
                                              //   }
                                              // });
function fireSoundInterval(delay) {
  timerShoot_1 = setTimeout(function soundFire() {
    timerShoot_2 = setTimeout(soundFire, delay);
    gameSoundEffects(audio.fire);
  }, delay); 
}


let firethrowerShootDelay = null;
platforms.forEach(platform => {
  ( platform.type === 'flamethrowerLeft' ||
    platform.type === 'flamethrowerRight' ||
    platform.type === 'flamethrowerUp' ||
    platform.type === 'flamethrowerDown') && (firethrowerShootDelay = platform.delay);
})

if (platforms.some(platform => {
  return (platform.type === 'flamethrowerLeft' ||
  platform.type === 'flamethrowerRight' ||
  platform.type === 'flamethrowerUp' ||
  platform.type === 'flamethrowerDown')})) {
    fireSoundInterval(firethrowerShootDelay * 8);
}






                                        let track = getRandomTrack(audio);
                                        track.pause();
                                        track = getRandomTrack(audio)
                                        //track.play();
                                        track.onended = function() {
                                          playNextTrack(track, audio);
                                        }


function showNextLevel() {
  additionalElements = [new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
  ];
    platforms.forEach(platform => {
      (platform.type === 'oneStep') && platform.restore();
    });
    collisionsLevel_1.map.forEach((row, index_Y) => {
      row.forEach((cell, index_X) => {
       cell === 'st' && (player = new Player({ platforms }, index_X * 36, index_Y * 36, collisionsLevel_1.margin.left, collisionsLevel_1.margin.top));
      })
    })
}

let levelOverlay = createImage(win);
levelOverlay.width = canvas.width;
levelOverlay.height = canvas.height;

export function init() {
  player.velocity.y = 1;
  player.alive = true;
  keys.spaceToggleCounter = 1;
  
  if (player.completeLevel) {
    
    c.save();
    c.fillStyle = 'rgb(247, 251, 254)';
    c.fillRect(0, 0, canvas.width, canvas.height, canvas.width / 2, canvas.height / 2);
    c.drawImage(levelOverlay, 0, 0, canvas.width, canvas.height);
    
    c.fillStyle = 'rgb(21, 173, 188)'; //'rgb(62, 95, 138)'
    c.font = `normal ${fontSize}px Rubik Iso`;
    c.textBaseline = 'middle';
    c.textAlign = 'center';
    canvas.style.letterSpacing = `${fontSize / 20}px`;
    c.fillText('Next level', canvas.width / 2, canvas.height / 2)
    c.restore();
    setTimeout(() => showNextLevel(), 1250);
    player.completeLevel = false;
  } else {
    showNextLevel();
} 
}                      


function animate() {

  requestAnim(animate);
  console.log('animation counter');

  additionalElements.forEach(element => element.draw());
                              
                          
                          platforms.forEach(platform => platform.draw());
                          platforms.forEach(platform => platform.update()); // рисуем платформы
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
                          //flamethrower.shootPressed = true
                          // bulletController.draw();
                          





                          
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
        console.log('you lose')

        // сюда вставить звук проигрыша
      }


}
init();
animate();

window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);



window.addEventListener('click', (e) => {
  console.log(e.clientX, e.clientY)
   // debugger
})