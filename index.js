const imagePlatform = new Image();
imagePlatform.src = './assets/img/platform.png';
imagePlatform.width = 300;
imagePlatform.height = 54;
// imagePlatform.onload = function getSizes () {
//   imagePlatform.width = imagePlatform.naturalWidth;
//   imagePlatform.height = imagePlatform.naturalHeight;
// }


const canvas = document.getElementById('canvas');
const c  = canvas.getContext("2d");

canvas.width = window.innerWidth; // canvas.width = innerWidth;
canvas.height = window.innerHeight;
const gravity = 0.25;
class Player {
  constructor() {
    this.position = {
      x: 200,
      y: 700
    }
    this.velocity = {
      x: 0,
      y: 1 
    }
    this.width = 30;
    this.height = 30;
  }

  draw() {
    c.fillStyle = ('red');
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
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

const player = new Player();
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
}

const platforms = [new Platform(350, 650, imagePlatform), new Platform(600, 400, imagePlatform), new Platform(400, 200, imagePlatform)]; // создаем платформы

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  console.log('animation counter');
  
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
}
animate();


window.addEventListener('keydown', (event) => {
console.log(event.code)
  switch (event.code) {
    case 'ArrowUp': player.velocity.y -= 20;
      break;
    case 'ArrowDown': player.velocity.y += 10;
      break;
    case 'ArrowRight': keys.right.pressed = true;
      break;
    case 'ArrowLeft': keys.left.pressed = true;
      break;
  }
})

window.addEventListener('keyup', (event) => {

  switch (event.code) {
    case 'ArrowUp': player.velocity.y = 0;
      break;
    // case 'ArrowDown': player.velocity.y = 0
    //   break;
    case 'ArrowRight': keys.right.pressed = false;
      break;
    case 'ArrowLeft': keys.left.pressed = false;
      break;
  }
})
