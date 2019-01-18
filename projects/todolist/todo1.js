var todos = [];

var btnActivate = document.getElementById("activate");
btnActivate.addEventListener {"click", function() {
  var input = prompt("what to do?");
  while(input !== "quit" || input !=="Quit") {
    if(input === "new") {
      var newTodo = prompt ("what to add?");
      todos.push(newTodo);
      console.log(newTodo + "was added to list");
    }
    else if(input === "list") {
        todos.forEach(function(todo, i) {
            console.log("on index: " + i + ":" + todo);
        });
    }
    else if(input === "delete") {
        var index = prompt("What to delet?");
        todos.splice(index, 1);
        console.log("you killed number: " + index);

    }
    if(input === "quit" || input === "Quit" ) {
      console.log("Ok, you leave");
    }
  });