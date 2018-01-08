
function hello(word = "world", secondParam = "someone else") {
  return "hello " + word + " and " + secondParam;
}

let yolo = hello("teddy"); // hello teddy and someone else
let yolo1 = hello("imad"); // hello teddy and someone else
let yolo2 = hello("laurent", "flavi"); // hello teddy and someone else

let result = yolo + yolo1 + yolo2;

console.log( result );




