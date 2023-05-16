import { canvas, c } from './Canvas';
import { createImage } from './CreateImage';
import { init } from '../index';
import { keys } from './Keys';
import { 
  platformImgSrc300,
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
      } from '../js/Assets';
import { platforms, intersection } from '../index';


export class Player {
  constructor({ platforms = [] }) {
    this.platforms = platforms;
    this.position = {
      x: 180,
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
    this.velocity.y = -2;
    this.gravity = 0
    this.currentSprite = this.sprites.death;
    setTimeout(init, 550);
  }

  checkCollisionsAxes_X() {
    // X-axes collision
    for (let i = 0; i < this.platforms.length; i++) {
      const platform = this.platforms[i];
      // If a collision exists
      switch(platform.type) {
        case 'fan':
        case 'solid':
          if (this.left <= platform.right &&
            this.right >= platform.left &&
            this.top <= platform.bottom &&
            this.bottom >= platform.top) {
              if (this.velocity.x < 0) {// moving left       // <= -2
                this.left = platform.right + 0.1;
                break;
              }
              if (this.velocity.x > 0) {// moving right      // <= 2
                this.left = platform.left - this.width - 0.1;
                break;
              }
          }
          break;

        case 'jumpToggleActive':
        if (keys.jumpToggleActive &&
          this.left <= platform.right &&
          this.right >= platform.left &&
          this.top <= platform.bottom &&
          this.bottom >= platform.top) {
            if (this.velocity.x < 0) {// moving left       // <= -2
              this.left = platform.right + 0.1;
              break;
            }
            if (this.velocity.x > 0) {// moving right      // <= 2
              this.left = platform.left - this.width - 0.1;
              break;
            }
          }
          break;

        case 'jumpToggleDisabled':
          if (!keys.jumpToggleActive &&
            this.left <= platform.right &&
            this.right >= platform.left &&
            this.top <= platform.bottom &&
            this.bottom >= platform.top) {
              if (this.velocity.x < 0) {// moving left       // <= -2
                this.left = platform.right + 0.1;
                break;
              }
              if (this.velocity.x > 0) {// moving right      // <= 2
                this.left = platform.left - this.width - 0.1;
                break;
              }
            }
          break;

        case 'spikes':
        case 'saw':
          // Hero - platform collision (player is above the spike platform)
          if (this.bottom <= platform.top + this.height / 3 &&
            this.bottom + this.velocity.y >= platform.top + this.height / 3 &&   
            this.right >= platform.left + this.width / 3 && 
            this.left <= platform.right - this.width / 3
            ) {
              //debugger
              this.die();
          }
          // Hero - platform collision (player is under the platform)
          if (this.top <= platform.bottom - Math.abs(this.velocity.y) &&
            this.bottom + this.velocity.y >= platform.top + this.height / 3 && // + this.velocity.y // оставить!!
            this.left >= platform.left - this.width / 1.5 &&
            this.right <= platform.right + this.width / 1.5) {
              //debugger
              this.die();
          }
          break;

        case 'oneStep':
          if (platform.hits === 0 &&
            this.left <= platform.right &&
            this.right >= platform.left &&
            this.top <= platform.bottom &&
            this.bottom >= platform.top) {
              if (this.velocity.x < 0) {// moves left       // <= -2
                this.left = platform.right + 0.1;
                keys.left.pressed = false;        
                platform.hits++;
                platform.destroy();
                break;
              }
              if (this.velocity.x > 0) {// moves right      // <= 2
                this.left = platform.left - this.width - 0.1;
                keys.right.pressed = false;      
                platform.hits++;
                platform.destroy();
                break;
              }
          }
          break;
      }
    }
  }

  checkCollisionsAxes_Y() {
    // Y-axes collision
    for (let i = 0; i < this.platforms.length; i++) {
      const platform = this.platforms[i];
      // If a collision exists
      switch(platform.type) {
        case 'fan':
        case 'solid':
          if (this.left <= platform.right &&
            this.right >= platform.left &&
            this.top <= platform.bottom &&
            this.bottom >= platform.top) {
              if (this.velocity.y < 0) {// moving up  // -0.25
                this.velocity.y = 0;
                this.top = platform.bottom + 0.1;
                break;
              }
              if (this.velocity.y > 0) {// falling down  // 0.25
                this.velocity.y = 0;
                this.top = platform.top - this.height - 0.1;
                break;
              }
          }
          break;
          
        case 'jumpToggleActive':
          if (keys.jumpToggleActive &&
            this.left <= platform.right &&
            this.right >= platform.left &&
            this.top <= platform.bottom &&
            this.bottom >= platform.top) {
              if (this.velocity.y < 0) {// moving up  // -0.25
                this.velocity.y = 0;
                this.top = platform.bottom + 0.1;
                break;
              }
              if (this.velocity.y > 0) {// falling down  // 0.25
                this.velocity.y = 0;
                this.top = platform.top - this.height - 0.1;
                break;
              }
          }
          break;

        case 'jumpToggleDisabled':
          if (!keys.jumpToggleActive &&
            this.left <= platform.right &&
            this.right >= platform.left &&
            this.top <= platform.bottom &&
            this.bottom >= platform.top) {
              if (this.velocity.y < 0) {// moving up  // -0.25
                this.velocity.y = 0;
                this.top = platform.bottom + 0.1;
                break;
              }
              if (this.velocity.y > 0) {// falling down  // 0.25
                this.velocity.y = 0;
                this.top = platform.top - this.height - 0.1;
                break;
              }
          }
          break;


        case 'oneStep':
          if (platform.hits === 0 &&
            this.left <= platform.right &&
            this.right >= platform.left &&
            this.top <= platform.bottom &&
            this.bottom >= platform.top) {
              if (this.velocity.y < 0) {// moving up  // -0.25
                this.velocity.y = 0;
                this.top = platform.bottom + 0.1;
                keys.up.pressed = false;      
                platform.hits++;
                platform.destroy();
                break;
              }
              if (this.velocity.y > 0) {// falling down  // 0.25
                this.velocity.y = 0;
                keys.up.pressed = false;      
                platform.hits++;
                platform.destroy();
                this.top = platform.top - this.height - 0.1;
                break;
              }
          }
          break;
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