//var variable
var favoriteNumber = 23;
console.log(favoriteNumber);

//const variable

if (true) {
}

//Variables
//1. let variable  - block-level scope
let firstName = "John";
firstName = "Jane";
console.log("Hello!", firstName);

//2. var variable - global level scope
var favoriteNumber = 23;
console.log(favoriteNumber);

//var vs let
if (true) {
  // let - block-level scope
  let lastName = "Smith";
  console.log(lastName);
  // var - global level scope
  var age = "25";
}
//console.log(lastName) will theorw an error
console.log(age);

//3. const variable - fixed or cannot be changed
const birthday = "06/23/2000";
//birthday = 0623200 will throw an error
console.log(birthday);
