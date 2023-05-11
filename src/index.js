// import './sass/styles.scss';

// imagePlatform.onload = function getSizes () {
//   imagePlatform.width = imagePlatform.naturalWidth;
//   imagePlatform.height = imagePlatform.naturalHeight;
//}
import { canvas, c, gravity } from './js/Canvas';
import { createImage } from './js/CreateImage';
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
// import { init } from './js/Init';



canvas.width = 1024 // 1280 //window.innerWidth; // canvas.width = innerWidth;
canvas.height = 576 // 720 //window.innerHeight;





export let additionalElements = [
  new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
]


export let platforms = [new Platform(210, 525, createImage(platformSolid, 36, 36)),
                new Platform(330, 455, createImage(platformSolid, 36, 36)),
                new Platform(250, 400, createImage(platformSolid, 36, 36)),
                new Platform(400, 100, createImage(platformSolid, 36, 36))]; // создаем платформы

export let player = new Player();

              let spikes = new PlatformSpikes(270, 205, createImage(spike, 36, 36))
              // let sawTrap = new Saw(400, 415, createImage(saw, 36, 36))
              export let sawTrap = new Saw(360, 315, createImage(saw, 36, 36))
    export let sawTrap2 = new OneStep(400, 455, createImage(platformOneStep, 36, 36))
              export let jump = new JumpToggle(170, 355, createImage(platformOne, 36, 36))
export function init() {
  player.velocity.y = 1;
  additionalElements = [new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
];

  platforms = [new Platform(210, 455, createImage(platformSolid, 36, 36)),
          new Platform(265, 420, createImage(platformSolid, 36, 36)),
              new Platform(302, 455, createImage(platformSolid, 36, 36)),
              new Platform(210, 280, createImage(platformSolid, 36, 36)),
              new Platform(370, 200, createImage(platformSolid, 36, 36)),
              new PlatformOne(470, 200, createImage(platformSolid, 36, 36)),
              new PlatformTwo(570, 200, createImage(platformSolid, 36, 36)),
              new PlatformThree(670, 200, createImage(platformSolid, 36, 36)),
              new Platform(472, 455, createImage(platformSolid, 36, 36)),
              new Platform(436, 455, createImage(platformSolid, 36, 36)), 
    spikes, sawTrap, sawTrap2, jump      ]; // создаем платформы !!!!!!!!!!!!!
  player = new Player();
}                      


function animate() {
  requestAnimationFrame(animate);
  //c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = ('white');
  c.fillRect(0, 0, canvas.width, canvas.height);
  console.log('animation counter');

  additionalElements.forEach(element => element.draw());

 // !!!!!!!!!! переделать под обработку массива если у element есть element.type === 'jumpToggle'                      
jump.toggle()                    

  platforms.forEach(platform => platform.update()); // рисуем платформы
  player.update();


  if (keys.right.pressed && (player.position.x + player.width) <= canvas.width) { // упор персонажа в правый край экрана
    player.velocity.x = 2;
  } else if (keys.left.pressed && player.position.x >= 0) { // упор персонажа в левый край экрана
    player.velocity.x = -2;
  } else {
    player.velocity.x = 0;
  }

  
  platforms.forEach(platform => {
    platform.collision();
    // // Player - platform collision (player is above the platform)
    // if (player.position.y + player.height <= platform.position.y &&
    //     player.position.y + player.height + player.velocity.y >= platform.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
    //     // Player - platform collision (player on the platform - inside of left and right platform boundaries)
    //     player.position.x + player.width >= platform.position.x + player.width / 3 && // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
    //     player.position.x <= platform.position.x + platform.width - player.width / 3) { 
    //       player.velocity.y = 0; // если касается земли
    // }
    // // Player - platform collision (player is under the platform)
    // if (player.position.y <= platform.position.y + platform.height &&
    //     player.position.y + player.height + player.velocity.y >= platform.position.y &&
    //     player.position.x >= platform.position.x - player.width / 2 && // можно сделать 1.75
    //     player.position.x + player.width <= platform.position.x + platform.width + player.width / 2) {
    //       player.velocity.y = 1;/* player.currentSprite = player.sprites.idle.right */
    // }
    // // Player - platform collision (player is left from the platform and moves right)
    // if (keys.right.pressed &&
    //     player.position.y + player.height >= platform.position.y && 
    //     player.position.y <= platform.position.y + platform.height &&
    //     player.position.x + player.width >= platform.position.x) {
    //       player.velocity.x = 0;
    //       console.log('hit!');
    // } // Continue: Player - platform collision (player holds right and is right from the platform - so he cans move)
    //   if (keys.right.pressed &&
    //     player.position.y + player.height >= platform.position.y && 
    //     player.position.y <= platform.position.y + platform.height &&
    //     player.position.x + player.width >= platform.position.x + platform.width) {
    //       player.velocity.x = 2;
    //       console.log('free!');
    //   }
    // // Player - platform collision (player is right from the platform and moves left)
    // if (keys.left.pressed &&
    //   player.position.y + player.height >= platform.position.y && 
    //   player.position.y <= platform.position.y + platform.height &&
    //   player.position.x <= platform.position.x + platform.width) {
    //     player.velocity.x = 0;
    //     console.log('hit!');
    // } // Continue: Player - platform collision (player holds left and is left from the platform - so he cans move)
    //   if (keys.left.pressed &&
    //     player.position.y + player.height >= platform.position.y && 
    //     player.position.y <= platform.position.y + platform.height &&
    //     player.position.x + player.width <= platform.position.x) { // или "-" player.width ???
    //       player.velocity.x = -2;
    //       console.log('free!');
    //   }
  })
        
        
if (player.velocity.y === 10 && !keys.right.pressed && !keys.left.pressed && keys.lastPressed === 'right') { // 10 - когда персонаж на земле
  player.currentSprite = player.sprites.idle.right;
} else if (player.velocity.y === 10 && !keys.right.pressed && !keys.left.pressed && keys.lastPressed === 'left') { // 10 - когда персонаж на земле
  player.currentSprite = player.sprites.idle.left;
}


    // Падение в пропасть (см. комментарии в player.update())
      if (player.position.y > canvas.height) {
// sawTrap.restore();
sawTrap2.restore();
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
  //  debugger
})