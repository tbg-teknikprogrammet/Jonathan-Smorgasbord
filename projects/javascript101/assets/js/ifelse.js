var name = "Jonathan"; //string
var age = 18; // number
// == jämför men kollar inte datatyp
// === jämför och kollar datatyp

// if(age < 18) {
    //Är påståendet True - kör koden mellan måsvingarna
    // console.log("STOP! Du är " + age + " år. BEBIS!");
    
// } else if (age > 18 && age < 45) {
    // console.log("You´re in the prime of life!");
// }
// else {
    //Är påståendet False - kör koden här mellan måsvingarna
    // console.log("välkommen! Du är " + age + " år. Du får dricka nu!");
// }

// Single line comment
/*
***************
    --- Guessing app ---
***************
*/

var secretNumber = 2;

var userInput = prompt("Gissa ett nummer mellan 1-10");
while (userInput != secretNumber) {
    var userInput = prompt("Gissa igen!")
    if (userInput == secretNumber) {
        document.writeln("Du gissade rätt!");
    }
}

/*
if (userInput > 5 && userInput < 9) {
    document.writeln("Väldigt nära...");
    userInput = prompt("Gissa igen!!!");
}
else if (userInput > secretNumber) {
    document.writeln("För högt");
}
else {
    document.writeln(För lågt")
}
*/
/*var age = Number(prompt("Din ålder: "))
if(age < 0) {
    // Du är inte född ännu
    document.writeln("This makes no sense!");
}
*/