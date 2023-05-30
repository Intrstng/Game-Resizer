import { platforms, parsedCollisions } from '../index';

import {
        Platform,
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

import {
        platformSolid,
        platformOneStep,
        platformJump,
        platformOne,
        platformTwo,
        platformThree,
        saw,
        spike,
        deadSignalZone,
        flamethrowerLeft,
        flamethrowerRight,
        flamethrowerUp,
        flamethrowerDown,
        brick_1,
        brick_2,
      } from './Assets';
import { createImage } from './Utils';

export function parseCollisitions(levelMap, platforms) {
  levelMap.map.forEach((row, index_Y) => {
    row.forEach((cell, index_X) => {
      switch(cell) {
        case '1p': // Space toggled platform (One)
          platforms.push(new PlatformOne(index_X * 36, index_Y * 36, createImage(platformOne, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
            break;
        case '2p': // Space toggled platform (Two)
          platforms.push(new PlatformTwo(index_X * 36, index_Y * 36, createImage(platformTwo, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
            break;
        case '3p': // Space toggled platform (Three)
          platforms.push(new PlatformThree(index_X * 36, index_Y * 36, createImage(platformThree, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
            break;
        case '1s': // One-Step platform
          platforms.push(new OneStep(index_X * 36, index_Y * 36, createImage(platformOneStep, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
            break;
        case 'sl': // Solid platform
          platforms.push(new Platform( // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            index_X * 36, index_Y * 36, createImage(platformSolid, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
            break;
        case 'ja': // Jump-toggled platform (active)
          platforms.push(new JumpToggleActive(index_X * 36, index_Y * 36, createImage(platformJump, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
            break;
        case 'jd': // Jump-toggled platform (disabled)
          platforms.push(new JumpToggleDisabled(index_X * 36, index_Y * 36, createImage(platformJump, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
            break;
        case 'sk': // Saw trap platform
          platforms.push(new PlatformSpikes(index_X * 36, index_Y * 36, createImage(spike, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
            break;
        case 'sw': // Spikes trap platform
          platforms.push(new Saw(index_X * 36, index_Y * 36, createImage(saw, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
            break;
        case 'dz': // Dead signal zone
          platforms.push(new DeadSignal(
            index_X * 36, index_Y * 36, createImage(deadSignalZone, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
            break;
        case 'fl': // Flamethrower (left)
        platforms.push(new FlamethrowerLeft(
          index_X * 36, index_Y * 36, createImage(flamethrowerLeft, 36, 36), platforms, new BulletController(), levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fr': // Flamethrower (right)
        platforms.push(new FlamethrowerRight(
          index_X * 36, index_Y * 36, createImage(flamethrowerRight, 36, 36), platforms, new BulletController(), levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fu': // Flamethrower (up)
        platforms.push(new FlamethrowerUp(
          index_X * 36, index_Y * 36, createImage(flamethrowerUp, 36, 36), platforms, new BulletController(), levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fd': // Flamethrower (down)
        platforms.push(new FlamethrowerDown(
          index_X * 36, index_Y * 36, createImage(flamethrowerDown, 36, 36), platforms, new BulletController(), levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fn': // Fan (decoration)
        platforms.push(new Fan(
          index_X * 36, index_Y * 36, createImage(flamethrowerDown, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'b1': // Fan (decoration)
        platforms.push(new Brick_1(
          index_X * 36, index_Y * 36, createImage(brick_1, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'b2': // Fan (decoration)
        platforms.push(new Brick_2(
          index_X * 36, index_Y * 36, createImage(brick_2, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
        case 'fp': // Finish point
        platforms.push(new Finish(
          index_X * 36, index_Y * 36, createImage(brick_2, 36, 36), platforms, levelMap.margin.left, levelMap.margin.top));
          break;
      }
    })
  })
  return levelMap;
}

export { platforms, parsedCollisions }