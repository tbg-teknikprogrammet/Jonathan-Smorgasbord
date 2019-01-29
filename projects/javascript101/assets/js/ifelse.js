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

    if (userInput > 0 && userInput < 4) {
        
        userInput = prompt("Väldigt nära, Gissa igen!!!");
    }
    else if (userInput > secretNumber) {
        userInput = prompt("För högt, Gissa igen!!!");
    }
    else if (userInput < secretNumber) {
        userInput = prompt("För lågt, Gissa igen!!!");
    }
}
if (userInput == secretNumber) {
    document.writeln("Rätt!")
}




// var age = Number(prompt("Din ålder: "))
// if(age < 0) {
//     // Du är inte född ännu
//     document.writeln("This makes no sense!");
// }
