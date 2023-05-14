export function createImage(src, width, height) {
  const image = new Image();
  image.src = src;
  image.width = width;
  image.height = height;
  return image;
}


export class Sprite {
  constructor ({ position, imageSrc }) {
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
    }
    this.image.src = imageSrc;
    this.loaded = false;
  }
  draw() {
    if (!this.loaded) return;
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}