console.log("String Work !");

let str = "I am java full stack Developer";
console.log(str.search("full")); //  returns the position of string

console.log(str.search(/Full/i)); // ignores the case sensitive

let newstr = str.replace("full","back-end");
console.log(newstr); // replace specified value wiyh new value


