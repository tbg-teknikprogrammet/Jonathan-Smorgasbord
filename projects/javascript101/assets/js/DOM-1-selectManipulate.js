//The process goes as follows:
//SELECT an element and the MANIPULATE it

//select
var h1 = document.querySelector("h1");

//manipulate
h1.style.color = "blue";

var bg = document.getElementsByTagName("body")[0];
var isGreen = false;

var interval = setInterval(function() {
    if(isGreen) {
        bg.style.backgroundColor = "white";
    }
    else {
        bg.style.backgroundColor = "green";
    }
    isGreen = ! isGreen;
}, 1000);

bg.addEventListener("click", function)