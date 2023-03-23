
"use strict"

//-------- 1. for loop demo----------------------------------
const cars = ["BMW","volvo","Saab", "Ford"];
let text =""; 
console.log("\n for  loop");
for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
    text += cars[i]+"<br/>" ; 
}
console.log(text)

document.getElementById("forDemo").innerHTML= text;

/*
for(expression 1: expression 2: expression 3){
    // code to be executed
}
*/
//------------------------------------------------------------

//-------- 2.for In loop demo---------------------------------

/*
for(key in Object){
    // code to be executed
}
*/
console.log("\n for In loop");
let text2 = "";
const person ={fName:"Sujan",lName:"Rijal",age:24}; // Object

for(let x in person ){
    console.log(person[x]);
    text2 += person[x]+"<br>";
}
console.log(text2);
document.getElementById("forInDemo").innerHTML = text2;

/*
for(key in Array){
    // code to be executed
}
*/
const nums = [33,45,23,17,90]; //Array
let txt = "";
for(let i in nums){
    console.log(nums[i]);
    txt += nums[i] +"</br>"
}
console.log(txt)
document.getElementById("forInDemo2").innerHTML = txt;

// // also
// nums.forEach(myFunc);
// function myFunc(nums){
//     console.log(nums);
// }

//  //and 
//  nums.forEach(
//     (num) =>{
//         console.log(num)
//     }
//  );

//------------------------------------------------------------

//----------------for of loop---------------------------------

/*
for(variable of iterable){
// code to be executed
}
*/
console.log("\n for of loop");
{
const movie  = ["Iron Man 2", "Bat Man", "Spider Man"]
let tx= "";

for(let z of movie){
tx += z +"<br/>";
console.log(z)
}
console.log(tx)
document.getElementById("forOfDemo").innerHTML= tx;

//  lets try it on object now
const employee = {
empName:"Sujan Rijal",
role:"Jave Dev",
salary: 120000
}

// let use it for String 

let statement = "I am Java Full-Stack Dev.";
let str = "";

for(let g of  statement){
    //console.log(g);
    str += g 
}
console.log(str);
document.getElementById("forOfDemo2").innerText = str;
}

//------------------------------------------------------------

//----------------While loop----------------------------------

{
    /*
    while( condition){
        code to be executed.
    }
    */ 

    let xt = "";
    let i=0;

    while( i <=5){
        i++;
        xt += " The number is "+i+"<br>";
        console.log()
    }
    document.getElementById("whileDemo").innerHTML = xt;


//------------------------------------------------------------

//----------------While loop----------------------------------

/* 
do{
    code to be  executed
}while()
 */
let x = 0;
let tx ="";
do{
tx += "num is " + x +"<br/>"; 
x++;
}while(x < 6);

document.getElementById("whileDemo2").innerHTML = tx;
}

//--------------comparing For and While loop----------------
{
    const carWork = ["BMW", "Volvo", "Saab", "Ford"];
    // using for
    let j=0;
    for(;carWork[j];){
        console.log(carWork[j]);
        j++;
    }
    // using while
    let q = 0;
    while(carWork[q]){
        console.log(carWork[q]);
        q++;
    }
}
//------------------------------------------------------------

//----------------break and Continue -------------------------

for(let t =0; t<=5; t++){
    if(t==3)
    break; //break;
    console.log(t);
}
for(let v =0; v<=5; v++){
    if(v==3)
    continue; //continue;
    console.log(v);
}
//------------------------------------------------------------

//----------------iterating over a Set -----------------------

const letters = new Set(['A','B','C','D','E']);
console.log("\n iterating over Set")
for(const x of letters){
    console.log(x);
}

console.log("\n iterating over Map")
const falful = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

for(const y of falful){
    console.log(y);
}