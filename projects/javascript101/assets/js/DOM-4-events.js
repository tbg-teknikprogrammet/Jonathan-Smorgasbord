var btn = document.querySelector("button");

btn.addEventListener("click", function() {
    setTimeout(function() {
        document.querySelector("p").innerHTML = "Yay! BIG CLICC";
    }, 500);
    });



    var lis = document.querySelectorAll("li");

    // lis[0].addEventListener("click", function() {
    //     lis[0].style.textDecoration = "line-through";
    // });

    for(var i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click", function() {
            this.style.textDecoration = "line-through";
        });
    } 
 

var btnToggle = document.querySelector("#btnToggleBg");
var isPurple = false;

btnToggle.addEventListener("click", function() {
    document.getElementsByTagName("body")[0].classList.toggle("toggle");
});