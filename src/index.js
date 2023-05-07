
// imagePlatform.onload = function getSizes () {
//   imagePlatform.width = imagePlatform.naturalWidth;
//   imagePlatform.height = imagePlatform.naturalHeight;
//}
import { canvas, c, gravity } from './js/Canvas';
import { createImage } from './js/CreateImage';
import { Player } from './js/Player';
import { Platform } from './js/Platform';
import { platformImgSrc300,
  heroIdleR,
  heroIdleL,
  heroRunR,
  heroRunL,
  heroJumpR,
  heroJumpL,
  heroFallR,
  heroFallL,
  backgroundImg,
} from './js/Assets';

// const Player = require('./js/Player');
// const Platform = require('./js/Platform');





canvas.width = 1024 //window.innerWidth; // canvas.width = innerWidth;
canvas.height = 576 //window.innerHeight;



class AdditionalElements {
  constructor (posX, posY, image) {
    this.position = {
      x: posX,
      y: posY
    }
    this.image = image;
    this.width = image.width;
    this.height = image.height;   
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
    // c.fillStyle = ('green');
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}


let additionalElements = [
  new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
]
let platforms = [new Platform(10, 525, createImage(platformImgSrc300, 300, 54)),
                new Platform(300, 455, createImage(platformImgSrc300, 300, 54)),
                new Platform(250, 400, createImage(platformImgSrc300, 300, 54)),
                new Platform(400, 200, createImage(platformImgSrc300, 300, 54))]; // создаем платформы

let player = new Player();
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
  lastPressed: 'right'
}

function init() {
  additionalElements = [new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
];

  platforms = [new Platform(10, 525, createImage(platformImgSrc300, 300, 54)),
              new Platform(300, 455, createImage(platformImgSrc300, 300, 54)),
              new Platform(250, 400, createImage(platformImgSrc300, 300, 54)),
              new Platform(400, 200, createImage(platformImgSrc300, 300, 54))]; // создаем платформы
  player = new Player();
}

function animate() {
  requestAnimationFrame(animate);
  //c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = ('white');
  c.fillRect(0, 0, canvas.width, canvas.height);
  console.log('animation counter');

  additionalElements.forEach(element => element.draw());

  
  platforms.forEach(platform => platform.draw()); // рисуем платформы
  player.update();


  if (keys.right.pressed && (player.position.x + player.width) <= canvas.width) { // упор персонажа в правый край экрана
    player.velocity.x = 2;
  } else if (keys.left.pressed && player.position.x >= 0) { // упор персонажа в левый край экрана
    player.velocity.x = -2;
  } else {
    player.velocity.x = 0;
  }

  
  platforms.forEach(platform => {
    // Player - platform collision (player is above the platform)
    if (player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >= platform.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
        // Player - platform collision (player on the platform - inside of left and right platform boundaries)
        player.position.x + player.width >= platform.position.x + player.width / 3 && // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
        player.position.x <= platform.position.x + platform.width - player.width / 3) { 
          player.velocity.y = 0; // если касается земли
    }
    // Player - platform collision (player is under the platform)
    if (player.position.y <= platform.position.y + platform.height &&
        player.position.y + player.height + player.velocity.y >= platform.position.y &&
        player.position.x >= platform.position.x - player.width / 2 && // можно сделать 1.75
        player.position.x + player.width <= platform.position.x + platform.width + player.width / 2) {
          player.velocity.y = 1;/* player.currentSprite = player.sprites.idle.right */
    }
    // Player - platform collision (player is left from the platform and moves right)
    if (keys.right.pressed &&
        player.position.y + player.height >= platform.position.y && 
        player.position.y <= platform.position.y + platform.height &&
        player.position.x + player.width >= platform.position.x) {
          player.velocity.x = 0;
          console.log('hit!');
    } // Continue: Player - platform collision (player holds right and is right from the platform - so he cans move)
      if (keys.right.pressed &&
        player.position.y + player.height >= platform.position.y && 
        player.position.y <= platform.position.y + platform.height &&
        player.position.x + player.width >= platform.position.x + platform.width) {
          player.velocity.x = 2;
          console.log('free!');
      }
    // Player - platform collision (player is right from the platform and moves left)
    if (keys.left.pressed &&
      player.position.y + player.height >= platform.position.y && 
      player.position.y <= platform.position.y + platform.height &&
      player.position.x <= platform.position.x + platform.width) {
        player.velocity.x = 0;
        console.log('hit!');
    } // Continue: Player - platform collision (player holds left and is left from the platform - so he cans move)
      if (keys.left.pressed &&
        player.position.y + player.height >= platform.position.y && 
        player.position.y <= platform.position.y + platform.height &&
        player.position.x + player.width <= platform.position.x) { // или "-" player.width ???
          player.velocity.x = -2;
          console.log('free!');
      }
  })
        
        
if (player.velocity.y === 10 && !keys.right.pressed && !keys.left.pressed && keys.lastPressed === 'right') { // 10 - когда персонаж на земле
  player.currentSprite = player.sprites.idle.right;
} else if (player.velocity.y === 10 && !keys.right.pressed && !keys.left.pressed && keys.lastPressed === 'left') { // 10 - когда персонаж на земле
  player.currentSprite = player.sprites.idle.left;
}


    // Падение в пропасть (см. комментарии в player.update())
      if (player.position.y > canvas.height) {
        init();
        console.log('you lose')
        // сюда вставить звук проигрыша
      }

}
init();
animate();

window.addEventListener('keydown', (event) => {
  if (event.repeat == false) {
    switch (event.code) {
      case 'ArrowUp':  
        if (player.velocity.y === 0 && keys.lastPressed === 'right') { // player.velocity.y === 0 - только один прыжок при нескольких нажатиях на UP
          player.velocity.y -= 10;
          player.currentSprite = player.sprites.jump.right;
        } else if (player.velocity.y === 0 && keys.lastPressed === 'left') { // player.velocity.y === 0 - только один прыжок при нескольких нажатиях на UP
          player.velocity.y -= 10;
          player.currentSprite = player.sprites.jump.left;
        }
        break;

      // case 'Space': {
      //   console.log('dd')
      //   platforms.splice(1,1);
      // }
        break;

      case 'ArrowRight': {
        keys.right.pressed = true;
        keys.lastPressed = 'right';
        player.currentSprite = player.sprites.run.right;
      }
        break;
      case 'ArrowLeft': {
        keys.left.pressed = true;
        keys.lastPressed = 'left';
        player.currentSprite = player.sprites.run.left;
      }
        break;
    }
  }
})


window.addEventListener('keyup', (event) => {
  if (event.repeat == false) {
    switch (event.code) {
      case 'ArrowUp': 
        // player.velocity.y = 0;
        keys.up.pressed = true;
        if (player.velocity.y !== 0 && keys.lastPressed === 'right') {
          player.currentSprite = player.sprites.fall.right;
        } else if (player.velocity.y !== 0 && keys.lastPressed === 'left') {
          player.currentSprite = player.sprites.fall.left;
        }
      
        break;
      // case 'ArrowDown': player.velocity.y = 0
      //   break;
      case 'ArrowRight': {
        keys.right.pressed = false;
        player.currentSprite = player.sprites.idle.right;
      }
        break;
      case 'ArrowLeft': {
        keys.left.pressed = false;
        player.currentSprite = player.sprites.idle.left;
      }
        break;
    }
  }
})
