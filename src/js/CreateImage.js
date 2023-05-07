export function createImage(src, width, height) {
  const image = new Image();
  image.src = src;
  image.width = width;
  image.height = height;
  return image;
}