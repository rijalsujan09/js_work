console.log("Maps & Sets");
/*  
Essential Map Methods
new Map()
set()
get()
delete()
has()
forEach()
entries()
size;
*/

// creating map
const fruits = new Map(
    [
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ] 
);
console.log(fruits.get("apples")); // get() method
console.log(fruits);

fruits.set("mango", 400); // set() method
fruits.set("apples", 600); // duplicate is not allowed and it changes the value
console.log(fruits); 

console.log(fruits.size); // size;

fruits.delete("oranges"); // delete() method
console.log(fruits); 

let c = fruits.has("bananas"); // returns boolean
console.log(c);
console.log("\n")
fruits.forEach((fruit,y)=>{ // for each method()
    console.log(fruit,y);
});

for(const l of fruits.entries()){ // for entries()
    console.log(l);
}

// JavaScript typeOf()

/* 
In javaScript there are 5 different  data types that contain values:

String
Number
Boolean
Object
Function
 */

/*
There are 6 types of Objects:
Object
Date
Array
String
Number
Boolean
 */

/* two data types  cannot contain any Values
null
undefined 
*/

let num = [1,2,3,4];

function isArray(num){
    return num.constructor.toString().indexOf("Array") > -1;
}

console.log(isArray(num));