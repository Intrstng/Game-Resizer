import { CollisionBlock, platforms, parsedCollisions } from './Collision';
import { canvas, c } from './Canvas';
import { createImage } from './Utils';
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
  deadSignalZone,
  deadSignalZoneHover,
  flamethrowerLeft,
  flamethrowerRight,
  flamethrowerUp,
  flamethrowerDown,
  brick_1,
  brick_2,
  finish,
      } from './Assets';

     
      

import { audio, gameSoundEffects } from './data/Audio';
import { keys } from './Keys';
import { player } from '../index';
import { leftNeighboorBlockFromHero } from '../index';


class Platform {
  constructor (posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }

    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.frames = 0;
    this.frequency = 28;
    this.sprites = {
      idle: this.image,
    }
    this.currentSprite = this.sprites.idle;
    this.type = 'solid';
    this.statusActive = true;
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

  getType() {
    return this.type;
  }
  draw() {
    c.drawImage(this.currentSprite, 36 * this.frames, 0, 36, 36, this.position.x, this.position.y, this.width, this.height) // 48, 0, 48, 48 - player sprite crop (x, y, w, h) // 36 размер кадра в спрайте
  }
  update() {
    this.frames++;
    if (this.frames > this.frequency) this.frames = 0;
    this.draw();
  }
  collisionAbove() {
  // Player - platform collision (player is above the platform)
    if (player.bottom <= this.position.y &&
      player.bottom + player.velocity.y >= this.top && // без && player.position.y + player.height + player.velocity.y >= platform.position.y персонаж перестает двигаться когда над платформой
      // Player - platform collision (player on the platform - inside of left and right platform boundaries)
      player.right - player.width / 4 >= this.left  && // + player.width / 3 - поправка чтобы персонаж падал прямо с самого края платформы (без этого он еще выступал на ширину трети спрайта героя)
      player.left <= this.right - player.width / 4) { 
      player.velocity.y = -3.5; // если касается земли // -3.5
      player.alive && gameSoundEffects(audio.jumpOnSpaceToggledPlatform);
      if (keys.up.pressed ||
      keys.up.pressed && keys.right.pressed ||
      keys.up.pressed && keys.left.pressed) {
        player.velocity.y = -player.jumpHeight;
        player.gravity = 0.25;
      } 
    }
  }
  collisionUnder() {
  // Player - platform collision (player is under the platform)
    if (player.top <= this.bottom && // player.position.y - player.velocity.y * 0.5
      player.bottom + player.velocity.y >= this.top &&
      player.left >= this.left - player.width / 1.25 && // можно сделать 1.75
      player.right <= this.right + player.width / 1.25) {
        player.velocity.y = 1;/* player.currentSprite = player.sprites.idle.right */
        player.alive && gameSoundEffects(audio.bottomHit);
      }
  }
  collisionLeftSide() {
  // Player - platform collision (player is left from the platform and moves right)
    if (keys.right.pressed &&
      player.bottom >= this.top && 
      player.top <= this.bottom &&
      player.right >= this.left) {
        player.velocity.x = 0;
        console.log('hit!');
    } // Continue: Player - platform collision (player holds right and is right from the platform - so he cans move)
    if (keys.right.pressed &&
      player.bottom >= this.top && 
      player.top <= this.bottom &&
      player.right >= this.right) {
        player.velocity.x = 2;
        console.log('free!');
    }
  }
  collisionRightSide() {
  // Player - platform collision (player is right from the platform and moves left)
    if (keys.left.pressed &&
      (leftNeighboorBlockFromHero != undefined || leftNeighboorBlockFromHero != null) &&
      player.bottom >= leftNeighboorBlockFromHero.top && 
      player.top <= leftNeighboorBlockFromHero.bottom &&
      player.left <= leftNeighboorBlockFromHero.right) {
        player.velocity.x = 0;
        console.log('hit!');
    } // Continue: Player - platform collision (player holds left and is left from the platform - so he cans move)
      if (keys.left.pressed &&
        leftNeighboorBlockFromHero != undefined &&
        (player.bottom <= leftNeighboorBlockFromHero.top || 
        player.top >= leftNeighboorBlockFromHero.bottom) &&
        player.left <= leftNeighboorBlockFromHero.left) { // или "-" player.width ???
          player.velocity.x = -2;
          console.log('free!');
      }
    }
  
  collision() { // разбито на отдельные методы, для частичного наследования
    this.collisionAbove();
    this.collisionUnder();
    this.collisionLeftSide();
    this.collisionRightSide();
  }
}

class Fan extends Platform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.type = 'fan';
    this.statusActive = true;
    this.sprites = {
      idle: createImage(fan, 36, 36),
    }
    this.currentSprite = this.sprites.idle;
    this.frequency = 23;
  }
}

class Brick_1 extends Platform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.type = 'brick_1';
    this.statusActive = true;
    this.sprites = {
      idle: createImage(brick_1, 36, 36),
    }
    this.currentSprite = this.sprites.idle;
    this.frequency = 1;
  }
}

class Brick_2 extends Platform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.type = 'brick_2';
    this.statusActive = true;
    this.sprites = {
      idle: createImage(brick_2, 36, 36),
    }
    this.currentSprite = this.sprites.idle;
    this.frequency = 1;
  }
}

class Finish extends Platform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.type = 'finish';
    this.statusActive = true;
    this.sprites = {
      idle: createImage(finish, 36, 36),
    }
    this.currentSprite = this.sprites.idle;
    this.frequency = 27;
  }
}

class JumpToggleActive extends Platform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.type = 'jumpToggleActive';
    this.statusActive = true;
    this.sprites = {
      idle: createImage(platformJump, 36, 36),
      disabled: createImage(platformJumpDisabled, 36, 36),
    }
    this.currentSprite = this.sprites.idle;
    this.frequency = 63;
  }
  toggle() {
    console.log(this.type, this.statusActive)
    if (keys.jumpToggleActive === true) {
      this.currentSprite = this.sprites.idle;
      this.statusActive = true;
    } else {
      this.currentSprite = this.sprites.disabled;
      this.statusActive = false;
    }
  }
}

class JumpToggleDisabled extends Platform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.type = 'jumpToggleDisabled';
    this.statusActive = false;
    this.sprites = {
      idle: createImage(platformJump, 36, 36),
      disabled: createImage(platformJumpDisabled, 36, 36),
    }
    this.currentSprite = this.sprites.disabled;
    this.frequency = 63;
  }
  toggle() {
    console.log(this.type, this.statusActive)
    if (keys.jumpToggleActive === false) {
      this.currentSprite = this.sprites.idle;
      this.statusActive = true;
    } else {
      this.currentSprite = this.sprites.disabled;
      this.statusActive = false;
    }
  }
}

class OneStep extends Platform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.temporaryPosX = posX + marginLeft;
    this.hits = 0;
    this.sprites = {
      idle: createImage(platformOneStep, 36, 36),
      explosion: createImage(platformOneStepExplosion, 36, 36),
    }
    this.currentSprite = this.sprites.idle;
    this.frequency = 28;
    this.type = 'oneStep';
    this.statusActive = true;
  }
  destroy() {
    player.alive && gameSoundEffects(audio.explosionBlock);
    this.currentSprite = this.sprites.explosion;
    setTimeout(() => {
      this.position.x = -9999;
      this.currentSprite = this.sprites.idle;
      this.statusActive = false;
  }, 550);
    this.hits = 0;
  } 
  restore() {
    this.position.x = this.temporaryPosX;
    this.statusActive = true;
  }
}

class SpaceToggledPlatform extends Platform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.type = 'toggledBySpacePlatform';
    this.statusActive = false;
    this.sprites = {
      idle: createImage(deadSignalZoneHover, 36, 36),
      disabled: createImage(platformOneDisabled, 36, 36),
    }
    this.currentSprite = this.sprites.idle;
    this.frequency = 63;
    this.setCount = null;
  }
  checkSpaceToggleCounter() {
   keys.spaceToggleCounter >= 4 ? keys.spaceToggleCounter =  1 : keys.spaceToggleCounter; 
  }
  collision() {
    if (keys.spaceToggleCounter === this.setCount) {
      this.statusActive = true;
      super.collisionAbove();
      super.collisionUnder();
      super.collisionLeftSide();
      if ((leftNeighboorBlockFromHero != undefined ||
        leftNeighboorBlockFromHero != null) &&
        keys.spaceToggleCounter === leftNeighboorBlockFromHero.setCount) {
          super.collisionRightSide();
      }
      this.currentSprite = this.sprites.idle;
      this.checkSpaceToggleCounter();
    } else {
      this.currentSprite = this.sprites.disabled;
      this.statusActive = false;
      this.checkSpaceToggleCounter();
    // Hero is inside or outside of Platform (for toggled by space platformes and deadSignal zone platforms)   
    if (platforms.some((block) => {
      return (player.position.y + player.height * 0.75 >= block.top &&
        player.position.y + player.height * 0.35 <= block.bottom &&
        player.position.x + player.width * 0.75 >= block.left &&
        player.position.x + player.width * 0.25 <= block.right);
    })) {
      keys.deadSignalZone = true;
      player.alive && keys.space.pressed && gameSoundEffects(audio.toggleDisabled);
      console.log('inside');
    } else {
      console.log('outside');
      player.alive && keys.space.pressed && gameSoundEffects(audio.toggle);   
      keys.deadSignalZone = false;
    }
    }
  } 
}

class PlatformOne extends SpaceToggledPlatform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.type = 'platformOne';
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.setCount = 1;
    this.sprites = {
      idle: createImage(platformOne, 36, 36),
      disabled: createImage(platformOneDisabled, 36, 36),
    }
  }
}

class PlatformTwo extends SpaceToggledPlatform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.type = 'platformTwo';
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.setCount = 2;
    this.sprites = {
      idle: createImage(platformTwo, 36, 36),
      disabled: createImage(platformTwoDisabled, 36, 36),
    }
  }
}

class PlatformThree extends SpaceToggledPlatform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.type = 'platformThree';
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.setCount = 3;
    this.sprites = {
      idle: createImage(platformThree, 36, 36),
      disabled: createImage(platformThreeDisabled, 36, 36),
    }
  }
}

class DeadSignal extends SpaceToggledPlatform {
  constructor(posX, posY, image, platforms, marginLeft = 0, marginTop = 0) {
    super(posX, posY, image, marginLeft, marginTop);
    this.type = 'deadSignalZone';
    this.position = {
      x: posX + marginLeft,
      y: posY + marginTop,
    }
    this.statusActive = false;
    this.frequency = 1;
    this.sprites = {
      idle: createImage(deadSignalZone, 36, 36),
      disabled: createImage(deadSignalZoneHover, 36, 36),
    }
  }

  hover() {
    if ((player.left <= this.right &&
      player.right >= this.left &&
      player.top <= this.bottom &&
      player.bottom >= this.top) &&
      (platforms.some((block) => {
        return (player.position.y + player.height * 0.75 >= block.top &&
          player.position.y + player.height * 0.35 <= block.bottom &&
          player.position.x + player.width * 0.75 >= block.left &&
          player.position.x + player.width * 0.25 <= block.right);
      }))
      ) { // Inside of the block
      this.checkSpaceToggleCounter();
      this.currentSprite = this.sprites.idle;
    } else if ((platforms.some((block) => { // Outside of the block
      return (player.position.y + player.height * 0.75 >= block.top &&
        player.position.y + player.height * 0.35 <= block.bottom &&
        player.position.x + player.width * 0.75 >= block.left &&
        player.position.x + player.width * 0.25 <= block.right)}))) {
          this.currentSprite = this.sprites.disabled;
      }
  }

  collision() {
    this.hover(); // Hover the block when the hero is inside of it
      // Hero is inside or outside of block (for toggled by space platformes and deadSignal zone platforms)   
      if (platforms.some((block) => {
        return (player.position.y + player.height * 0.75 >= block.top &&
          player.position.y + player.height * 0.35 <= block.bottom &&
          player.position.x + player.width * 0.75 >= block.left &&
          player.position.x + player.width * 0.25 <= block.right);
      })) {
        keys.deadSignalZone = true;
        console.log(keys.space.pressed)
        player.alive && keys.space.pressed && gameSoundEffects(audio.toggleDisabled);
        console.log('inside')
      } else {
        console.log('outside')   
        keys.deadSignalZone = false;
        player.alive && keys.space.pressed && gameSoundEffects(audio.toggle);
      }
  }
} 

export { Platform,
        OneStep,
        Fan,
        JumpToggleActive,
        JumpToggleDisabled,
        PlatformOne,
        PlatformTwo,
        PlatformThree,
        DeadSignal,
        Brick_1,
        Brick_2,
        Finish,
      }