let item1 = "apples";
let item2 = "oranges";
let item3 = "raspberies";

// let groceries = array(10);
let groceries = [
  "apples", // 0
  "oranges", // 1
  "rapsberies", // 1
];

groceries[3] = "brocoli";

groceries.shift();
groceries.unshift("cucumber");
groceries.pop();
groceries.push("tomatoes");

groceries.splice(1, 0,"something");

///let copyOfGroceries = groceries.slice(); // old
let copyOfGroceries = [...groceries]; // new

copyOfGroceries.unshift("hello world");

copyOfGroceries.reverse();


console.log( copyOfGroceries );



console.log(doubles )

console.log("groceries", groceries)
console.log("copyOfGroceries", copyOfGroceries );

/*
for(let i = 0; i < groceries.length; i++){
  console.log( groceries[i], i);
}
*/
/*

groceries.forEach(function(value, iterator){
  console.log(value, iterator);
});

*/

// expected output: true

//console.log();









