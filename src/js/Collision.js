import { collisionsLevel_1 } from './data/collisions';
import { canvas, c } from './Canvas';
import { Platform,
  PlatformSpikes,
  Saw,
  OneStep,
  Fan,
  JumpToggle,
  PlatformOne,
  PlatformTwo,
  PlatformThree,
} from './Platform';

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
} from './Assets';
import { createImage, Sprite } from './CreateImage';







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
//       console.log(index_X, index_Y)
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
    if (cell === '1p') {
      console.log(index_X, index_Y)
      platforms.push(new PlatformOne(
        index_X * 36, index_Y * 36, createImage(platformOne, 36, 36), platforms))
    }
    if (cell === '2p') {
      console.log(index_X, index_Y)
      platforms.push(new PlatformTwo(
        index_X * 36, index_Y * 36, createImage(platformTwo, 36, 36), platforms))
    }
    if (cell === '3p') {
      console.log(index_X, index_Y)
      platforms.push(new PlatformThree(
        index_X * 36, index_Y * 36, createImage(platformThree, 36, 36), platforms))
    }
    if (cell === 'ee') {
      console.log(index_X, index_Y)
      platforms.push(new Platform(
        index_X * 36, index_Y * 36, createImage(platformSolid, 36, 36), platforms))
    }
    if (cell === 'jp') {
      console.log(index_X, index_Y)
      platforms.push(new JumpToggle(
        index_X * 36, index_Y * 36, createImage(platformJump, 36, 36), platforms))
    }
    if (cell === 'sk') {
      console.log(index_X, index_Y);
      platforms.push(new PlatformSpikes(
        index_X * 36, index_Y * 36, createImage(spike, 36, 36), platforms))
    }
    if (cell === 'sw') {
      console.log(index_X, index_Y)
      platforms.push(new Saw(
        index_X * 36, index_Y * 36, createImage(saw, 36, 36), platforms))
    }
  })
})


export { CollisionBlock, platforms, parsedCollisions }