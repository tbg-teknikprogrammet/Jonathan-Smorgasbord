var friend1 = "Adam";
var friend2 = "Lindholm";
var friend3 = "PV";
var friend4 = "Rickard";

var friends = ["Adam", "Lindhomlm", "PV", "Rickard"]; //strings, numbers, booleans, objects

function newName() {
    friends[2] = "Ackemo";
    friends[3] = false;
}

newName();

console.log(friends[1] + " </3 " + friends[3]);


var colors = [];
var colors = new Array();
var randomArray = ["String", 31, true, false];
console.log(randomArray.length);

/* Arrays - built i nmethods*/ 

//push() - add an item at the end of an array
colors = ["red", "green", "blue"];
console.log(colors);
colors.push("purple");

//pop() - remove last item in an array
colors.pop(colors[0]);
console.log(colors);

//unshift() - add an item at the begining of an array
colors.unshift("Yellow");
console.log(colors);

//shift() - remove item at begining of an array
colors.shift();
console.log(colors);

// indexOf() -
console.log(colors.indexOf("green")); // index of an item in the array
console.log(colors.indexOf("brown")); // -1 if the value is not found

// slice - copy parts of an array
var fruits = ["banana", "orange", "lemon", "mango", "pear"];
// copy 2nd and 3rd fruit
var citrus = fruits.slice(1, 3)
console.log(citrus);

var copyFruits = fruits.slice(fruits);
console.log(copyFruits);

// Arrays - iterations- upprepning
//            0         1        2        3         4        5         6
var cars = ["Audi" , "Volvo", "Ford", "Ferrari", "Landa", "Lambo", "Citron"]
for (var i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// Arrays - iteration - forEach
var countries = ["Sweden", "Norway", "Finland", "Denmark", "Island"];
countries.forEach(function(country) {
    console.log(country); // the argument, country, holds each value in the array and loops through every single one 
});

function countryList(country) {
    console.log("**************");
    console.log(country);
    console.log("**************");
    console.log("");
}

countries.forEach(countryList);

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var color = ["red", "green", "blue", "orange"];

number.forEach(function(color) { // color is not a good argument since we're not dealing with colors here
    if(color % 3 === 0) {
        console.log("Inside the forEach method: " + color);
    }
});

// Testa att skriva en for loop för detta istället
for(var i = 0; i < number.length; i++) {
    if(number[i] % 3 === 0) {
        console.log("Inside the for loop: " + number[i]);
    }
}

/*
***************************************
Arrays - Skriftlig övning
***************************************
*/

// Write a function printReverse() that takes an array
// as an argument and prints out the elements in the array 
// in reverse order (don't actually reverse the array itself)

function printReverse(myArr) {
    for(var i = myArr.length -1; i >= 0; i--) {
        console.log(myArr[i]);
    }
    // console.log(myArr.reverse());
}

printReverse([1,2,3,4,5,6]);

// Write a function isIdentical() which takes an array as an argument
// and returns true if all elements in the array are identical

function isIdentical(array) {
    var first = "???";
}

console.log(isIdentical([1,1,1,1,1])); // true
console.log(isIdentical([1,1,1,2,2])); // false

function sumarray(array){
    var Final = 0;
    for(var i = 0; i < array.length; i++)
        { 
            Final = Final + array[i];
        }
    return Final;
 }
console.log(sumarray([2,33,13,8,0,4]));

function sumMax () {
    
}