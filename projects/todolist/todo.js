document.getElementsByTagName("button")[0].addEventListener("click", List)

var ToDoList = []

function List() {

        var todo = 0;
     
        while(todo !== "exit" || todo !== "Exit") { // Do while the q button is not pressed

            todo = prompt("Vad vill du göra?");

            if(todo === "list" || todo === "List") {
                console.log(ToDoList)
               
             }  
             
             else if(todo === "new" || todo === "New") {
                 var addNew = prompt("Write something to add to the list")
                 ToDoList.push(addNew); // Add thing to the array
                 console.log("You added " + addNew + " to the list!")
             }
             
             else if(todo === "delete" || todo === "Delete") {
                    var removeIt = Number(prompt("Write a number to remove from the list"))
                 
                    ToDoList.splice(removeIt, 1) // Remove a chosen item from the list
                    console.log(ToDoList)
                 }
                   
             else if(todo === "exit" || todo === "Exit") // Stops the loop, basically cancel the action if you for example pressed "n"
                break;
        }
        if(todo === "exit" || todo === "Exit") // Quit the prompt
            console.log("Closing...")
}