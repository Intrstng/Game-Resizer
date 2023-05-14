import { canvas, c } from './Canvas';
import { createImage } from './CreateImage';
import { init } from '../index';
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
      } from '../js/Assets';
import { platforms, intersection } from '../index';


export class Player {
  constructor({ platforms = [] }) {
    this.platforms = platforms;
    this.position = {
      x: 165,
      y: 247 //canvas.height / 2
    }
    this.velocity = {
      x: 0,
      y: 1 
    }
    this.gravity = 0.25;
    this.jumpHeight = 10; // -20 is higher
    this.width = 32;
    this.height = 32;
    this.frequency = 21;
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
      death: createImage(heroDeath, 32, 32),
    }
    this.currentSprite = this.sprites.idle.right;
  }
            
  get top() {
    return this.position.y;
  }
  get bottom() {
    return this.position.y + this.height;
  }
  get left() {
    return this.position.x;
  }
  get right() {
    return this.position.x + this.width;
  }


  set top(value) {
    this.position.y = value;
  }
  set bottom(value) {
    this.position.y = value;
  }
  set left(value) {
    this.position.x = value;
  }
  set right(value) {
    this.position.x = value;
  }

  draw() {
    c.drawImage(this.currentSprite, 32 * this.frames, 0, 32, 32, this.left, this.top, this.width, this.height) // 32, 0, 32, 32 - player sprite crop (x, y, w, h)
  }

  die() {
    this.velocity.x = 0;
    this.velocity.y = 0;
    this.currentSprite = this.sprites.death;
    setTimeout(init, 550);
  }

  checkCollisionsAxes_X() {
    // X-axes collision
    for (let i = 0; i < this.platforms.length; i++) {
      const platform = this.platforms[i]
      // If a collision exists
      if (this.left <= platform.position.x + platform.width &&
        this.right >= platform.position.x &&
        this.top <= platform.position.y + platform.height &&
        this.bottom >= platform.position.y) {
          if (this.velocity.x < 0) {// moving left       // <= -2
            this.left = platform.position.x + platform.width + 0.1;
            break;
          }
          if (this.velocity.x > 0) {// moving right      // <= 2
            this.left = platform.position.x - this.width - 0.1;
            break;
          }
      }
    }
  }

  checkCollisionsAxes_Y() {
    // Y-axes collision
    for (let i = 0; i < this.platforms.length; i++) {
      const platform = this.platforms[i]
      // If a collision exists
      if (this.left <= platform.position.x + platform.width &&
        this.right >= platform.position.x &&
        this.top <= platform.position.y + platform.height &&
        this.bottom >= platform.position.y) {
          if (this.velocity.y < 0) {// moving up  // -0.25
            this.velocity.y = 0;
            this.top = platform.position.y + platform.height + 0.1;
            break;
          }
          if (this.velocity.y > 0) {// falling down  // 0.25
            this.velocity.y = 0;
            this.top = platform.position.y - this.height - 0.1;
            break;
          }
      }
    }
  }

  setGravity() {
    this.velocity.y += this.gravity;
    this.top += this.velocity.y;
  }

  update() {
    this.frames++;
    if (this.frames > this.frequency) this.frames = 0;
    this.draw();
    this.left += this.velocity.x;
    this.checkCollisionsAxes_X(); // strict order
    this.setGravity();            // strict order
    this.checkCollisionsAxes_Y(); // strict order
  }
}