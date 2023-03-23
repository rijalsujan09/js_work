"use strict"

let todo_list = [];
let addButton = document.getElementById("add-button");

const  addWork=()=>{
    let inputText = document.getElementById("add-goal").value;

    todo_list.push(inputText);
    console.log(todo_list );


    function addItemToList(item) {
        if (item !== null && item !== "") {
        let myList = document.getElementById("myList");
        let li = document.createElement("li");
        li.innerText = item;

        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.addEventListener("click", function() {
          myList.removeChild(li);
        });
        li.appendChild(removeButton);

        myList.appendChild(li);
    }
    else {
        alert("Enter Valid input");
    }
    }

   addItemToList(inputText);

} 


addButton.addEventListener("click",addWork);




// logic for Game Rock paper Scissior


let compNum = Math.floor(Math.random()*3)+1;
console.log(compNum);

switch (compNum) {
    case 1:{
        document.getElementById("comp-img").src="/images/image1.jpg"
         break;
    }
     case 2:{
        document.getElementById("comp-img").src="/images/image2.jpg"
         break;
    }
     case 3:{
        document.getElementById("comp-img").src="/images/image3.jpg"
         break;
    }
    default:
        break;
}


