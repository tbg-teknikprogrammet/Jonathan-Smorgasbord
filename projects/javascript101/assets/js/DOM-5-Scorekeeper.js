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




// while(Winner == 0)
// {
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
// }

if(Winner != 0)  {
    
}
