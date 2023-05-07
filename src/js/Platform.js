import { canvas, c, gravity } from './Canvas';

export class Platform {
  constructor (posX, posY, image) {
    this.position = {
      x: posX,
      y: posY
    }
    this.image = image;
    this.width = image.width;
    this.height = image.height;  
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
    // c.fillStyle = ('green');
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}