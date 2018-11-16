var text = "";
var i = 300;

// Skriv ut udda tal mellan 300 - 333
while(i <= 333) {
    text += "numret är:" + i + "<br>";
    i++;

    if(i % 2 ==0) {
        i++;
    }
}

document.getElementById("output").innerHTML = text;

function greet(person1, person2, person3, person4) {
    console.log("Hej, " + person1 + "!")
    console.log("Hej, " + person2 + "!")
    console.log("Hej, " + person3 + "!")
    console.log("Hej, " + person4 + "!")
}

greet("adam","arthur","alexis","jonsson" )

function isEven(x) {
    if(x % 2 ==0) { 
    return true;
    }
    else {
    return false;
    }
}

console.log(isEven(10))

function kebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return myString;
}

function localScope() {
    var showScore = 31;
    console.log(showScope);

}

localScope();
console.log(showScope);

var showScopeY = 99;
function localScopeY() {
   var showScopeY = 100;
console.log(showScopeY);
}

console.log(showScopeY);
localScopeY();
console.log(showScopeY);