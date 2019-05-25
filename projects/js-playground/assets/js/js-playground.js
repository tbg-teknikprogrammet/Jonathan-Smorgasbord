var btnToggle = document.querySelector(".img1");

btnToggle.addEventListener("click", function() {
    document.getElementsByTagName("body")[0].classList.toggle("toggle");
});





// varibeldeclaration
var btnPlayer1 = document.querySelector(".btnPlayer1");
var plaier1 = document.querySelector(".plaier1");
var p1Score = 0;


var btnPlayer2 = document.querySelector(".btnPlayer2");
var plaier2 = document.querySelector(".plaier2");
var p2Score = 0;
var Winner = 0;
var input = document.getElementsByTagName("input")[0]
var ScoreToWin = document.getElementsByClassName("goal")[0]
var totalScore = document.getElementsByTagName("input")[0]

var inp1 = document.getElementsByClassName("inp1")[0]
var inp2 = document.getElementsByClassName("inp2")[0]
var calcbtn = document.getElementsByClassName("calcbtn")[0]
var mult1 = 0;
var mult2 = 0;
var bigcalc = document.getElementsByClassName("bigcalc")[0]
var spinbtn = document.getElementsByClassName("spin")[0]


spinbtn.addEventListener("click", function() {
    document.getElementById("sec5").classList.toggle("rotate");
});




    input.addEventListener("click", function() {
        ScoreToWin.innerHTML = input.value;
        totalScore = Number(input.value)
    })
    // Listen for clicks from player one
   
    btnPlayer1.addEventListener("click", function(){
        
        if(p1Score < totalScore) {
            p1Score++;
            if(p1Score === totalScore) {
                Winner = 1;
                document.querySelectorAll("h1")[1].innerHTML = "PLAYER " + Winner + " HAS WON!!!!";
            }
        }

        plaier1.innerHTML = p1Score;

        

    })

    // Listen for click from player one
    btnPlayer2.addEventListener("click", function(){

        if(p2Score < totalScore) {
            p2Score++;
            if(p2Score === totalScore) {
                Winner = 2;
                document.querySelectorAll("h1")[1].innerHTML = "PLAYER " + Winner + " HAS WON!!!!";

            }
        }
                   
        plaier2.innerHTML = p2Score;
    })


if(Winner != 0)  {
    
}
var slideIndex = 1;
                    showDivs(slideIndex);
                    
                    function plusDivs(n) {
                      showDivs(slideIndex += n);
                    }
                    
                    function showDivs(n) {
                      var i;
                      var x = document.getElementsByClassName("pics");
                      if (n > x.length) {slideIndex = 1}    
                      if (n < 1) {slideIndex = x.length}
                      for (i = 0; i < x.length; i++) {
                         x[i].style.display = "none";  
                      }
                      x[slideIndex-1].style.display = "block";  
                    }

calcbtn.addEventListener("click", function() {
bigcalc.innerHTML = "It iquals to " + inp1.value * inp2.value;

});

document.getElementsByClassName("openL")[0].addEventListener("click", function() {
	document.getElementById("lightbox").className = "open";
});

document.getElementById("close").addEventListener("click", function() {
	document.getElementById("lightbox").className = "";
});

document.getElementById("lightbox").addEventListener("click", function(e) {
	if (e.target.id == "lightbox") {
		document.getElementById("lightbox").className = "";
	}
});

