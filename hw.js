"use strict"
/*
Assignement : 1
1. Create a class Employee with properties: employeeId, employeeName, position, joinedData, salary.
2. Create three employees: (1, 'John Doe', 'factory Worker', 2017, 33000)
(2, 'Emma Watson', 'General Manager', 2012, 67000')
(3, 'Mark reynolds', 'Security Guard', 2018, 33000) 
[2:55 AM]rupesh00mahat: 3. Create method in the class to get info about the employee. The method should return  a paragraph describing the employee.
*/

class  Employee{
  

        constructor(employeeId, employeeName,position,joinedData,salary) {
          this.namemployeeIde = employeeId;
          this.employeeName = employeeName;
          this.position = position;
          this.joinedDate = joinedData;
          this.salary = salary;
        }


       getEmpInfo=()=>{
        console.log("The Employee Info is ..");
        console.log(`Name = ${this.employeeName}\nemployeeId = ${this.employeeId}\nposition = ${this.position}\njoinedDate =${this.joinedDate}\nsalary = ${this.salary}`)

       } 
    
  }

  let date = new Date();
  let getYear = date.getFullYear(date);
  const em1  = new Employee(1,"sujan Rijal","java.Dev",getYear,120000);
  em1.getEmpInfo();

  const em2 = new Employee(2, 'Emma Watson', 'General Manager', 2012, 67000);
  em2.getEmpInfo();

  const em3 = new Employee(3, "Rushma Thapa" , "java.Dev",2023,130000 )
  em3.getEmpInfo();

  //---------------------Complete of the Assigmnent 1 ----------------------------


  // --------------logic for Assigmnent 3-----------------------------------------
  function checkEmpty(){
    let un = document.getElementById("userName").value;
    let ue = document.getElementById("email").value;
    let up = document.getElementById("password").value;
    let errmsg = document.getElementById("errmsg");
    errmsg.innerHTML="";
    try{
        if(un==""&&ue==""&&up=="") {
            throw "Input cannot be Empty..";
        }
        else{
            console.log("--form submitted--");
            alert("--form submitted--");
        }
   
    }catch(err)
    {
        console.log(err);
        errmsg.innerHTML= "---"+err+"---"
    }
    finally{
        console.log(un , ue, up)
    }
  }
  //----------------------end of assignment 3------------------------------------
/* 

    1.Create two textfields for staring number and ending and a generate button 
    2.Create one textfield and guess button.
    3.Hide 2 on windows load.
    4.On generate button click, if textfields are not empty and firstnumber>second number, hide 1 and show 2, else alert error.
    5. On windows 2 load, below the guess button should be chances. Give three chances . Eg: chances-3
    6. On each incorrect guess decrement chance by 1 and display message below chance, your guess is high/low.
    7. If chance == 0 , hide 2 and display message. Sorry you lost. The correct answer is ...
    8. If guessed right, alert you won.
   
 */
    let x =Math.floor(Math.random()*10)+1;
   
    const generate =()=>{
     let y = document.getElementById("g2");
     let z = parseInt(document.getElementById("g1").value);
     let msg = document.getElementById("msg");
     msg.innerHTML="Enter Your Guess..!";

   try{
    if(x>z){
        console.log("...num is bigger...");
        throw "..num is bigger.."

     }
     if(x<z){
        console.log("...num is smaller...");
        throw "..num is smaller.."
     }
     if(x==z){
        console.log("Conguratulation your guess Is Correct.!!");
        y.value = x;
        throw "Conguratulation your guess Is Correct.!!"
     }
   }catch(err){
  msg.innerHTML=err;
   }
finally{
    console.log(z,x);
}

     }


     
