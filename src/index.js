import './sass/styles.scss';

// imagePlatform.onload = function getSizes () {
//   imagePlatform.width = imagePlatform.naturalWidth;
//   imagePlatform.height = imagePlatform.naturalHeight;
//}
import { CollisionBlock, platforms, parsedCollisions } from './js/Collision';
import { canvas, c } from './js/Canvas';
import { createImage, Sprite } from './js/CreateImage';
import { Player } from './js/Player';

import { bulletController } from './js/Collision';
import { audio, gameSoundEffects } from './js/data/Audio';

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



canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

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

                      // onResize(canvas, function(){ alert('Resized!');
                      // canvas.width = document.documentElement.clientWidth;
                      // canvas.height = document.documentElement.clientHeight;
                      // } );

canvas.width = 1024 // 1280 //window.innerWidth; // canvas.width = innerWidth;
canvas.height = 576 // 720 //window.innerHeight;
let requestAnim = window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function(callback) { window.setTimeout(callback, 1000 / 60); }



// const fullScreenBtn = document.getElementById('fullscreen');
// fullScreenBtn.addEventListener('click', () => fullScreen(canvas));

window.addEventListener('keydown', (e) => fullScreen(e, canvas));
// window.addEventListener('keydown', fullScreenCancel);

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

// function fullScreenCancel(e) {
//   if (e.code === 'KeyS') {
//     if(document.documentElement.requestFullscreen) {
//       document.documentElement.requestFullscreen();
//     } else if(document.documentElement.webkitRequestFullscreen ) {
//       document.documentElement.webkitRequestFullscreen();
//     } else if(document.documentElement.mozRequestFullscreen) {
//       document.documentElement.mozRequestFullScreen();
//     }
//   }
// }



let leftNeighboorBlockFromHeroArr = [];
export let timerShoot_1 = null;
export let timerShoot_2 = null;
export let leftNeighboorBlockFromHero = null;

export let additionalElements = [
  new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
]





import { collisionsLevel_1 } from './js/data/Collisions';



console.log(platforms)


export let player;
  collisionsLevel_1.forEach((row, index_Y) => {
    row.forEach((cell, index_X) => {
     cell === 'st' && (player = new Player({ platforms }, index_X * 36, index_Y * 36));
    })
  })


new Player({
  platforms
}); //platforms: platforms






            
                                                platforms.forEach(platform => {
                                                if (platform.type === 'flamethrowerLeft' ||
                                                platform.type === 'flamethrowerRight' ||
                                                platform.type === 'flamethrowerUp' ||
                                                platform.type === 'flamethrowerDown') {
                                                // setInterval(() => gameSoundEffects(audio.fire), 1000);
                                                timerShoot_1 = setTimeout(function soundFire() {
                                                    timerShoot_2 = setTimeout(soundFire, platform.delay * 8);
                                                    gameSoundEffects(audio.fire);
                                                  }, platform.delay * 8);                          
                                                }
                                              });

export function init() {
  player.velocity.y = 1;
  player.alive = true;
  keys.spaceToggleCounter = 1;
  additionalElements = [new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
];
   
                                         // player = new Player({ platforms });


  platforms.forEach(platform => {
    (platform.type === 'oneStep') && platform.restore();
  });

  collisionsLevel_1.forEach((row, index_Y) => {
    row.forEach((cell, index_X) => {
     cell === 'st' && (player = new Player({ platforms }, index_X * 36, index_Y * 36));
    })
  })
   
}                      


function animate() {

  requestAnim(animate);
  //c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = ('white');
  c.fillRect(0, 0, canvas.width, canvas.height);
  console.log('animation counter');

  additionalElements.forEach(element => element.draw());

 // !!!!!!!!!! переделать под обработку массива если у element есть element.type === 'jumpToggle'                      
           
                                                   
                          
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