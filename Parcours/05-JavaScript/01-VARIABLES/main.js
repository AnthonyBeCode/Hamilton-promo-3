

let result = Math.round(1.5);
let roundUpper = Math.ceil(5.3);
let roundDown = Math.floor(1.3);



let fruits = ["apple","orange","banana"];
console.log(fruits);

for (let i = 0; i < 10; i++) {
  let rndNumber = Math.random() * fruits.length;
  //let roundedNumber = Math.round( rndNumber );
  let roundedNumber = Math.floor( rndNumber );

  console.log( fruits[roundedNumber], rndNumber, roundedNumber )
}



/*

console.log( result )
console.log( roundUpper )
console.log( roundDown )



*/
