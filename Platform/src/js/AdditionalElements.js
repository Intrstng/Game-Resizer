import { canvas, c } from '../index';
import { createImage } from './Utils';
export class AdditionalElements {
  constructor (posX, posY, image, width, height) {
    this.position = {
      x: posX,
      y: posY,
    }
    this.sprites = {
      idle: createImage(image, width, height),
    }
    this.currentSprite = this.sprites.idle;
    this.type = 'backgrounds';
  }
  draw() {
    if (!this.currentSprite.loaded) return;
    c.drawImage(this.currentSprite, this.position.x, this.position.y, canvas.width, canvas.height);
  }
}