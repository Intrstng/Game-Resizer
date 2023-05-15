import './sass/styles.scss';

// imagePlatform.onload = function getSizes () {
//   imagePlatform.width = imagePlatform.naturalWidth;
//   imagePlatform.height = imagePlatform.naturalHeight;
//}
import { CollisionBlock, platforms, parsedCollisions } from './js/Collision';
import { canvas, c } from './js/Canvas';
import { createImage, Sprite } from './js/CreateImage';
import { Player } from './js/Player';

import { Platform,
          PlatformSpikes,
          Saw,
          OneStep,
          Fan,
          JumpToggle,
          PlatformOne,
          PlatformTwo,
          PlatformThree,
        } from './js/Platform';
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
        } from './js/Assets';
import { keys, keyDownHandler, keyUpHandler } from './js/Keys';
import { AdditionalElements } from './js/AdditionalElements';



canvas.width = 1024 // 1280 //window.innerWidth; // canvas.width = innerWidth;
canvas.height = 576 // 720 //window.innerHeight;

let leftNeighboorBlockFromHeroArr = [];
export let leftNeighboorBlockFromHero = null;

export let additionalElements = [
  new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
]


// export let platforms = [/* new Platform(210, 525, createImage(platformSolid, 36, 36)),
//                 new Platform(330, 455, createImage(platformSolid, 36, 36)),
//                 new Platform(250, 400, createImage(platformSolid, 36, 36)),
//                 new Platform(400, 100, createImage(platformSolid, 36, 36)) */]; // создаем платформы









import { collisionsLevel_1 } from './js/data/collisions';



console.log(platforms)


export let player = new Player({
  platforms
}); //collisionBlocks: collisionBlocks



/* -------------------- */




              //let spikes = new PlatformSpikes(420, 135, createImage(spike, 36, 36))
              // let sawTrap = new Saw(400, 415, createImage(saw, 36, 36))
             // export let sawTrap = new Saw(560, 315, createImage(saw, 36, 36))
   // export let sawTrap2 = new OneStep(400, 455, createImage(platformOneStep, 36, 36))
             // export let jump = new JumpToggle(100, 355, createImage(platformOne, 36, 36))


export function init() {
  player.velocity.y = 1; 
  keys.spaceToggleCounter = 1;
  additionalElements = [new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
];

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





    
                                          player = new Player({
                                            platforms
                                          });
}                      


function animate() {
  requestAnimationFrame(animate);
  //c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = ('white');
  c.fillRect(0, 0, canvas.width, canvas.height);
  console.log('animation counter');

  additionalElements.forEach(element => element.draw());

 // !!!!!!!!!! переделать под обработку массива если у element есть element.type === 'jumpToggle'                      
           
                                                   
                          
                          platforms.forEach(platform => platform.draw());
                          platforms.forEach(platform => platform.update()); // рисуем платформы
                          platforms.forEach(platform => {
                            (platform.type === 'jumpToggle') && platform.toggle()
                          
                          
                          if (platform.type === 'platformOne' ||
                          platform.type === 'platformTwo' ||
                          platform.type === 'platformThree'
                          ) {
                            platform.collision();
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