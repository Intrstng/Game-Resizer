const platformImgSrc300 = './assets/img/platform.png';

const heroIdleR = './assets/img/Idle_right.png';

const heroIdleL = './assets/img/Idle_left.png';

const heroRunR = './assets/img/Run_right.png';

const heroRunL = './assets/img/Run_left.png';

const heroJumpR = './assets/img/Jump_right.png';

const heroJumpL = './assets/img/Jump_left.png';

const heroFallR = './assets/img/Fall_right.png';

const heroFallL = './assets/img/Fall_left.png';

const backgroundImg = './assets/img/bg_2.jpg';
// imagePlatform.onload = function getSizes () {
//   imagePlatform.width = imagePlatform.naturalWidth;
//   imagePlatform.height = imagePlatform.naturalHeight;
//}

const canvas = document.getElementById('canvas');
const c = canvas.getContext("2d");

canvas.width = 1024 //window.innerWidth; // canvas.width = innerWidth;
canvas.height = 576 //window.innerHeight;
const gravity = 0.25;

function createImage(src, width, height) {
  const image = new Image();
  image.src = src;
  image.width = width;
  image.height = height;
  return image;
}

class Player {
  constructor() {
    this.position = {
      x: 200,
      y: canvas.height / 2
    }
    this.velocity = {
      x: 0,
      y: 1 
    }
    this.width = 32;
    this.height = 32;

    //this.image = createImage(heroIdleR, 32, 32);
    this.frames = 0;
    this.sprites = {
      idle: {
        right: createImage(heroIdleR, 32, 32),
        left: createImage(heroIdleL, 32, 32),
      },
      run: {
        right: createImage(heroRunR, 32, 32),
        left: createImage(heroRunL, 32, 32),
      },
      jump: {
        right: createImage(heroJumpR, 32, 32),
        left: createImage(heroJumpL, 32, 32),
      },
      fall: {
        right: createImage(heroFallR, 32, 32),
        left: createImage(heroFallL, 32, 32),
      },
    }
    this.currentSprite = this.sprites.idle.right;
  }

  draw() {
    // c.fillStyle = ('red');
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.drawImage(this.currentSprite, 32 * this.frames, 0, 32, 32, this.position.x, this.position.y, this.width, this.height) // 0, 0, 32, 32 - player sprite crop (x, y, w, h)
  }

  update() {
    this.frames++;
    if (this.frames > 21) this.frames = 0;
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } 
    // else { // если это оставить персонаж не покинет экран при касании нижней границы экрана
    //   this.velocity.y = 0;
    // }
  }
}

class Platform {
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
