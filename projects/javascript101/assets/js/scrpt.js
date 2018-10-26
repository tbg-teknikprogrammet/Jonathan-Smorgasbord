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
AudioWorklet
