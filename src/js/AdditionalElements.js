// import { canvas, c } from './Canvas';

// export class AdditionalElements {
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


import { canvas, c } from './Canvas';
import { createImage } from './CreateImage';
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
        fireballUp,
        fireballDown,
        fireballLeft,
        fireballRight,
} from './Assets';
export class AdditionalElements {
  constructor (posX, posY, image) {
    this.position = {
      x: posX,
      y: posY,
    }
    this.sprites = {
      idle: createImage(backgroundImg, canvas.width, canvas.height),
    }
    this.currentSprite = this.sprites.idle;
    this.type = 'backgrounds';
    this.image = image;
    this.width = image.width;
    this.height = image.height;   
  }
  draw() {
    c.drawImage(this.currentSprite, this.position.x, this.position.y);
  }
}