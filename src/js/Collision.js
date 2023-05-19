import { collisionsLevel_1 } from './data/Collisions';
import { canvas, c } from './Canvas';


import { Platform,
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
} from './Platform';



import {
  PlatformSpikes,
  Saw,
  FlamethrowerLeft,
  FlamethrowerRight,
  FlamethrowerUp,
  FlamethrowerDown,
  BulletController,
} from './Traps';

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
} from './Assets';
import { createImage, Sprite } from './CreateImage';
import { Player } from './Player';

class CollisionBlock {
  constructor ({ position }) {
    this.position = position;
    this.width = 36;
    this.height = 36;
  }
  draw() {
    c.fillStyle = 'rgba(204,11,10,0.3)';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const platforms = [];
// const parsedCollisions = collisionsLevel_1.forEach((row, index_Y) => {
//   row.forEach((cell, index_X) => {
//     if (cell === 292) {
//   
//       platforms.push(new CollisionBlock(
//         {position: {
//           x: index_X * 36,
//           y: index_Y * 36,
//         }}))
//     }
//   })
// })



const parsedCollisions = collisionsLevel_1.forEach((row, index_Y) => {
  row.forEach((cell, index_X) => {
    switch(cell) {
      case '1p': // Space toggled platform (One)
        platforms.push(new PlatformOne(index_X * 36, index_Y * 36, createImage(platformOne, 36, 36), platforms));
          break;
      case '2p': // Space toggled platform (Two)
        platforms.push(new PlatformTwo(index_X * 36, index_Y * 36, createImage(platformTwo, 36, 36), platforms));
          break;
      case '3p': // Space toggled platform (Three)
        platforms.push(new PlatformThree(index_X * 36, index_Y * 36, createImage(platformThree, 36, 36), platforms));
          break;
      case '1s': // One-Step platform
        platforms.push(new OneStep(index_X * 36, index_Y * 36, createImage(platformOneStep, 36, 36), platforms));
          break;
      case 'sl': // Solid platform
        platforms.push(new Platform( // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          index_X * 36, index_Y * 36, createImage(platformSolid, 36, 36), platforms));
          break;
      case 'ja': // Jump-toggled platform (active)
        platforms.push(new JumpToggleActive(index_X * 36, index_Y * 36, createImage(platformJump, 36, 36), platforms));
          break;
      case 'jd': // Jump-toggled platform (disabled)
        platforms.push(new JumpToggleDisabled(index_X * 36, index_Y * 36, createImage(platformJump, 36, 36), platforms));
          break;
      case 'sk': // Saw trap platform
        platforms.push(new PlatformSpikes(index_X * 36, index_Y * 36, createImage(spike, 36, 36), platforms));
          break;
      case 'sw': // Spikes trap platform
        platforms.push(new Saw(index_X * 36, index_Y * 36, createImage(saw, 36, 36), platforms));
          break;
      case 'dz': // Dead signal zone
        platforms.push(new DeadSignal(
          index_X * 36, index_Y * 36, createImage(deadSignalZone, 36, 36), platforms));
          break;
      case 'fl': // Flamethrower (left)
      platforms.push(new FlamethrowerLeft(
        index_X * 36, index_Y * 36, createImage(flamethrowerLeft, 36, 36), platforms, new BulletController()));
        break;
      case 'fr': // Flamethrower (right)
      platforms.push(new FlamethrowerRight(
        index_X * 36, index_Y * 36, createImage(flamethrowerRight, 36, 36), platforms, new BulletController()));
        break;
      case 'fu': // Flamethrower (up)
      platforms.push(new FlamethrowerUp(
        index_X * 36, index_Y * 36, createImage(flamethrowerUp, 36, 36), platforms, new BulletController()));
        break;
      case 'fd': // Flamethrower (down)
      platforms.push(new FlamethrowerDown(
        index_X * 36, index_Y * 36, createImage(flamethrowerDown, 36, 36), platforms, new BulletController()));
        break;
      case 'fn': // Fan (decoration)
      platforms.push(new Fan(
        index_X * 36, index_Y * 36, createImage(flamethrowerDown, 36, 36), platforms));
        break;
      case 'b1': // Fan (decoration)
      platforms.push(new Brick_1(
        index_X * 36, index_Y * 36, createImage(brick_1, 36, 36), platforms));
        break;
      case 'b2': // Fan (decoration)
      platforms.push(new Brick_2(
        index_X * 36, index_Y * 36, createImage(brick_2, 36, 36), platforms));
        break;
    }
  })
})
                                                        
export { CollisionBlock, platforms, parsedCollisions }