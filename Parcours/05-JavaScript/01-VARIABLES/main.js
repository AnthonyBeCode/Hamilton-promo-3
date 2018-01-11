
/*
let resultMax = Math.max(-1, 3, 5, 9);
let resultMin = Math.min(-1, 3, 5, 9);



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

*/

/*

console.log( result )
console.log( roundUpper )
console.log( roundDown )



*/



let number = 20;
let strings = "Hello";
let arrays = [];
let functions = function(){};
let booleans = true;
let more = "...";

let lotOfStringValues = ["string","string","string"];
let lotOfNumberValues = [3,2,1];

let lotOfMixedValues = [3,"string",1,"numbers"];

let lotOfMixedValuesAndOthers = [
  13,
  "string",
  [74,564,"somthing"],
  function(){
    console.log("yolo");
  },
  true,
  false
];
/*
console.log(lotOfStringValues)
console.log(lotOfNumberValues)
console.log(lotOfMixedValues)
console.log(lotOfMixedValuesAndOthers)

console.log( lotOfMixedValuesAndOthers[1] );

console.log( lotOfMixedValuesAndOthers[3]() );

let something = lotOfMixedValuesAndOthers[2][2];
*/


// let arrays = [];
// let myFn function (){}
// myFn();

//let object = new Object();

/*
let object = {}; // JSON object

let lotOfMixedValuesObject = {
  "number" : 13,
  myString : "string",
  "arrays" : [74, 564, "somthing"],
  "sayYolo" : function(){
    console.log("yolo");
  },
  "myBollean" : true,
  "amISad" : false
};



console.log( lotOfMixedValuesObject )
console.log( lotOfMixedValuesObject.myString )
console.log( lotOfMixedValuesObject["myString"] )


for ( let properties in lotOfMixedValuesObject ) {
  console.log( properties ) // name of the property
  console.log( lotOfMixedValuesObject[properties] ) // get value of the property
}







let myTrueBoolean = true;
let myFalseBoolean = false;


let myVariables = 0;

if(myVariables !== true){
  console.log("TRUE TRUE")
} else {
  console.log("FALSE FALSE")
}
*/

/*
let value = prompt("What is the right price ?");

let next = prompt("It is not"+value+" it is higher");
*/

/*
class Obj {
  constructor(){
    this.a = "yolo";
    this.b = "world";
  }
}

class Objet2 extends Obj {
  constructor(){
    super();
    this.c = "Hola";
  }
  sayHello(){
    console.log("plouf");
  }
}

let instance = new Obj();
let instance2 = new Objet2();

console.log(instance)
console.log(instance2)


*/


// recursive
//
/*
let count = 0;

let increase = function(){
  count++; // +1
  console.log(count)
  if(count < 10){
    increase();
  }
}

increase();
*/


console.log( document )
//console.dir( document )


let h1s = document.getElementsByTagName("h1");
let h1First = document.getElementById("the-first");

console.log( h1s );
console.dir( h1First );

let hamilton = document.getElementsByClassName("hamilton");

console.log( hamilton )

for (var i = 0; i < hamilton.length; i++) {
  hamilton[i].innerText = "<h2>yolo</h2>";
  //hamilton[i].innerHTML = "<h2>yolo</h2>";

  hamilton[i].style.backgroundColor = "red";
  hamilton[i].style["background-color"] = "red";

  ///hamilton[i].style.background-color = "red";

  //console.log(  hamilton[i].style["background"] )
  //hamilton[i].style.backgroundColor = "#000";
}



//h1First.innerText = "Hello world tooo";


//let h1First = document.getElementById("the-first"); // old
let h1FirstLikeCss = document.querySelector("#the-first"); // new slower
//let likeCssClass = document.querySelector(".the-first");
let hamiltonLikeCss = document.querySelectorAll(".hamilton"); // new slower

let recipient = document.getElementById("recipient");

let classes = ["one","two","three"]
for (var i = 0; i <10; i++) {
  let newElements = document.createElement("div");
  newElements.innerText = "hello world";
  //newElements.className = "superClass"; // old
  newElements.classList.add(classes[i]); // new
  console.log( newElements.classList )
  recipient.appendChild( newElements )
}


console.log( newElements )























