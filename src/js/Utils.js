function createImage(src, width, height) {
  const image = new Image();
  image.src = src;
  image.width = width;
  image.height = height;
  return image;
}


function randomNumber(min = 0, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export { createImage, randomNumber };

// export class Sprite {
//   constructor ({ position, imageSrc }) {
//     this.position = position;
//     this.image = new Image();
//     this.image.onload = () => {
//       this.loaded = true;
//     }
//     this.image.src = imageSrc;
//     this.loaded = false;
//   }
//   draw() {
//     if (!this.loaded) return;
//     c.drawImage(this.image, this.position.x, this.position.y)
//   }
// }