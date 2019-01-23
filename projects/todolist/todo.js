document.getElementsByTagName("button")[0].addEventListener("click", List)

var myEpicList = []

function List() {

        var input = 0;
     
        while(input !== "exit" || input !== "Exit") { // Do while the q button is not pressed

            input = prompt("Vad vill du göra?");
            if(input === "new" || input === "New") {
                 var addNew = prompt("Write something to add to the list")
                 myEpicList.push(addNew); // Add thing to the array
                 console.log("You added " + addNew + " to the list!")
                        }
            
            
             else if(input === "list" || input === "List") {
                for(var i = 0; i <= myEpicList.length-1; i++) 
                {
                    console.log(myEpicList[i])
                }
               
             }  
             
             else if(input === "delete" || input === "Delete") {
                    var indxDel = Number(prompt("Write a number to remove from the list"))
                 
                    myEpicList.splice(indxDel, 1) // Remove a chosen item from the list
                    console.log("you deleted index: " + indxDel)
                 }
                   
             else if(input === "exit" || input === "Exit") // Stops the loop, basically cancel the action if you for example pressed "n"
                break;
        }
        if(input === "exit" || input === "Exit") // Quit the prompt
            console.log("Closing...")
}