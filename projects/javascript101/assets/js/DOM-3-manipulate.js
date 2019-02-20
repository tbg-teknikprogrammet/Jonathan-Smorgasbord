var element = document.getElementById("Highlight");

element.style.color = "red";

var ele = document.querySelector("h1");
ele.classList.add("some-class");

var tag = document.getElementsByClassName("special")[0];
tag.classList.add("plusOne");
tag.classList.remove("plusOne");
tag.classList.toggle("plusOne");


var pEle = document.getElementsByClassName("test")
pEle.textContent="this is apex <strong>awesome</strong> paragraph"