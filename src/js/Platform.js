import { canvas, c, gravity } from './Canvas';
import { createImage } from './CreateImage';
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
  platformSolid,
  platformSpikes,
  platformOneStep,
  saw,
} from './Assets';
import { keys } from './Keys';
import { player } from '../index';
import { init } from '../index';
// export class Platform {
//   constructor (posX, posY, image) {
//     this.position = {
//       x: posX,
//       y: posY
//     }
//     this.image = image;
//     this.width = image.width;
//     this.height = image.height;  
//   }
//   draw() {
//     c.drawImage(this.image, this.position.x, this.position.y)
//     // c.fillStyle = ('green');
//     // c.fillRect(this.position.x, this.position.y, this.width, this.height);
//   }
// }

class Platform {
  constructor (posX, posY, image) {
    this.position = {
      x: posX,
      y: posY
    }
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.frames = 0;
    this.sprites = {
      idle: this.image,
    }
    this.currentSprite = this.sprites.idle;
    this.type = 'solid';
  }
  getType() {
    return this.type;
  }
  draw() {
    c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height) // 48, 0, 48, 48 - player sprite crop (x, y, w, h) // 36 размер кадра в спрайте
  }
  update() {
    this.frames++;
    if (this.frames > 28) this.frames = 0;
    this.draw();
  }
  collision() {
     // Player - platform collision (player is above the platform)
     if (player.position.y + player.height <= this.position.y &&
      player.position.y + player.height + player.velocity.y >= this.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
      // Player - platform collision (player on the platform - inside of left and right platform boundaries)
      player.position.x + player.width - player.width / 4 > this.position.x  && // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
      player.position.x <= this.position.x + this.width - player.width / 4) { 
        player.velocity.y = 0; // если касается земли
  }
  // Player - platform collision (player is under the platform)
  if (player.position.y <= this.position.y + this.height &&
      player.position.y + player.height + player.velocity.y >= this.position.y &&
      player.position.x >= this.position.x - player.width / 2 && // можно сделать 1.75
      player.position.x + player.width <= this.position.x + this.width + player.width / 2) {
        player.velocity.y = 1;/* player.currentSprite = player.sprites.idle.right */
  }

  
  // Player - platform collision (player is left from the platform and moves right)
  if (keys.right.pressed &&
      player.position.y + player.height >= this.position.y && 
      player.position.y <= this.position.y + this.height &&
      player.position.x + player.width >= this.position.x) {
        player.velocity.x = 0;
        console.log('hit!');
  } // Continue: Player - platform collision (player holds right and is right from the platform - so he cans move)
    if (keys.right.pressed &&
      player.position.y + player.height >= this.position.y && 
      player.position.y <= this.position.y + this.height &&
      player.position.x + player.width >= this.position.x + this.width) {
        player.velocity.x = 2;
        console.log('free!');
    }
  // Player - platform collision (player is right from the platform and moves left)
  if (keys.left.pressed &&
    player.position.y + player.height >= this.position.y && 
    player.position.y <= this.position.y + this.height &&
    player.position.x <= this.position.x + this.width) {
      player.velocity.x = 0;
      console.log('hit!');
  } // Continue: Player - platform collision (player holds left and is left from the platform - so he cans move)
    if (keys.left.pressed &&
      player.position.y + player.height >= this.position.y && 
      player.position.y <= this.position.y + this.height &&
      player.position.x /* + player.width */ <= this.position.x) { // или "-" player.width ???
        player.velocity.x = -2;
        console.log('free!');
    }
  }
}

class PlatformSpikes extends Platform {
  constructor(posX, posY, image) {
    super(posX, posY, image);
    this.type = 'spikes';
  }
  collision() {
         // Player - platform collision (player is above the spike platform)
         if (player.position.y + player.height <= this.position.y &&
          player.position.y + player.height + player.velocity.y >= this.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
          // Player - platform collision (player on the platform - inside of left and right platform boundaries)
          player.position.x + player.width >= this.position.x + player.width / 3 && // + player.width / 3 - поправка чтобы персонаж погибал касаясь самого края платформы (без этого он еще погибал не доходя трети ширины спрайта героя)
          player.position.x <= this.position.x + this.width - player.width / 3) { 
            // player.velocity.y = 0; // если касается шипов сверху
init();
      }
      // Player - platform collision (player is under the platform)
      if (player.position.y <= this.position.y + this.height &&
          player.position.y + player.height + player.velocity.y >= this.position.y &&
          player.position.x >= this.position.x - player.width / 2 && // можно сделать 1.75
          player.position.x + player.width <= this.position.x + this.width + player.width / 2) {
init();
      }
  }
}

class Saw extends PlatformSpikes {
  constructor(posX, posY, image) {
    super(posX, posY, image);
    this.type = 'saw';
  }
  update() {
    this.frames++;
    if (this.frames > 23) this.frames = 0;
    this.draw();
  }
}


class OneStep extends Platform {
  constructor(posX, posY, image) {
    super(posX, posY, image);
    this.type = 'oneStep';
    this.temporaryPosX = posX;
    this.hits = 0;
  }
  update() {
    this.frames++;
    if (this.frames > 23) this.frames = 0;
    this.draw();
  }
  destroy() {
    setTimeout(() => this.position.x = -9999, 550);
    this.hits = 0;
  } 
  restore() {
    this.position.x = this.temporaryPosX;
  }
  collision() {
    console.log(player.velocity.y)
    console.log(this.position.y)
    console.log(this.position.y)
    console.log(player.width)
// Player - platform collision (player is above the platform)
// And moves right and leaves the platform
if ((!keys.up.pressed && player.velocity.y === 0 || !keys.up.pressed && player.velocity.y === gravity) &&
      player.position.y + player.height <= this.position.y &&
      player.position.y + player.height + player.velocity.y >= this.position.y &&
      (player.position.x + player.width * 2 >= this.position.x && player.position.x <= this.position.x + this.width)
) {
  this.destroy(); 
}
// Не нужен но надо оставить, иначе блок пропадает сразу же
     if (keys.up.pressed && player.velocity.y != 0 &&
      player.position.y + player.height <= this.position.y &&
      player.position.y + player.height + player.velocity.y >= this.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
      // Player - platform collision (player on the platform - inside of left and right platform boundaries)
      player.position.x + player.width >= this.position.x + player.width / 3 && // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
      player.position.x <= this.position.x + this.width - player.width / 3) { 
        player.velocity.y = 0; // если касается земли
console.log('player.position.y', player.position.y);
  this.destroy();
  } else if (!keys.up.pressed &&
    player.position.y + player.height <= this.position.y &&
    player.position.y + player.height + player.velocity.y >= this.position.y && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
    // Player - platform collision (player on the platform - inside of left and right platform boundaries)
    player.position.x + player.width >= this.position.x + player.width / 3 && // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
    player.position.x <= this.position.x + this.width - player.width / 3) { 
      player.velocity.y = 0; // если касается земли
console.log('keys.up.pressed');
}



  // Player - platform collision (player is under the platform)
  if (player.position.y <= this.position.y + this.height &&
      player.position.y + player.height + player.velocity.y >= this.position.y &&
      player.position.x >= this.position.x - player.width / 2 && // можно сделать 1.75
      player.position.x + player.width <= this.position.x + this.width + player.width / 2) {
        player.velocity.y = 1;
        this.destroy();
  }
  // Player - platform collision (player is left from the platform)
  if (keys.right.pressed &&
      player.position.y + player.height >= this.position.y && 
      player.position.y <= this.position.y + this.height &&
      player.position.x + player.width >= this.position.x &&
      !(player.position.x >= this.position.x)) { // player is left from the platform and moves right
        this.hits++;
        keys.right.pressed = false;
        player.currentSprite = player.sprites.fall.right;
        player.velocity.x -= 15;
        this.hits === 1 && this.destroy();
  }
  // Player - platform collision (player is right from the platform)
  if (keys.left.pressed &&
      player.position.y + player.height >= this.position.y && 
      player.position.y <= this.position.y + this.height &&
      player.position.x <= this.position.x + this.width &&
      !(player.position.x + player.width <= this.position.x)) { // player is right from the platform and moves left
        this.hits++;
        keys.left.pressed = false;
        player.currentSprite = player.sprites.fall.left;
        player.velocity.x += 15;
        this.hits === 1 && this.destroy();
  } 
  }
}

export { Platform, PlatformSpikes, Saw, OneStep }