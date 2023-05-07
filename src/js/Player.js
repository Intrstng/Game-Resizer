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
      } from '../js/Assets';

export class Player {
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