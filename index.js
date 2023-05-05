const platformImgSrc = './assets/img/platform.png';

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
// }

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
    } else {
      this.velocity.y = 0;
    }
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
console.log(image.width)
   
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

const additionalElements = [
  new AdditionalElements(0, 0, createImage(backgroundImg, canvas.width, canvas.height))
]

const player = new Player();
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
}

const platforms = [new Platform(10, 525, createImage(platformImgSrc, 300, 54)), new Platform(350, 480, createImage(platformImgSrc, 300, 54)), new Platform(600, 400, createImage(platformImgSrc, 300, 54)), new Platform(400, 200, createImage(platformImgSrc, 300, 54))]; // создаем платформы

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

  // Player - platform collision (player above the platform)
  platforms.forEach(platform => {
    if (player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >= platform.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
        // Player - platform collision (player on the platform - inside of left and right platform boundaries)
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width
        ) { 
            player.velocity.y = 0; // если касается земли
    }
  })
        // // Player - platform collision (player under the platform)
        // if (player.position.y <= platform.position.y + platform.height &&
        //   player.position.x + player.width >= platform.position.x &&
        //   player.position.x <= platform.position.x + platform.width
        //   ) {
        //     player.velocity.y = 0;
        // }
        // platforms.forEach(platform => {
        //   if (player.position.y + player.height == platform.position.y) console.log('23')/* player.currentSprite = player.sprites.idle.right */
        // });
        
}
animate();


window.addEventListener('keydown', (event) => {
  if (event.repeat == false) {
  console.log(event.code)
    switch (event.code) {
      case 'ArrowUp':  
      if (player.velocity.y === 0 && event.code === 'ArrowRight') {
        player.velocity.y -= 10;
        player.currentSprite = player.sprites.jump.right;
      } else if (player.velocity.y === 0 && event.code === 'ArrowLeft') {
        player.velocity.y -= 10;
        player.currentSprite = player.sprites.jump.left;
      };
        if (player.velocity.y === 0) {
          player.velocity.y -= 10;
          player.currentSprite = player.sprites.jump.right;
        }; // только один прыжок при нескольких нажатиях на UP
        break;
      // case 'ArrowDown': player.velocity.y += 10;
      //   break;
      case 'ArrowRight': {
        keys.right.pressed = true;
        player.currentSprite = player.sprites.run.right;
      }
        break;
      case 'ArrowLeft': {
        keys.left.pressed = true;
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
        if (player.velocity.y !== 0) {
          player.currentSprite = player.sprites.jump.right;
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
