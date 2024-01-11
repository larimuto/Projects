function rectangle(width, height, color) {
  x = color.split("");
  x[0] = x[0].toUpperCase();
  color = x.join("");

  let rects = {
    width,
    height,
    color,
    calcArea() {
      return this.width * this.height;
    },
  };
  return rects;
}

let rect = rectangle(20, 30, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());
