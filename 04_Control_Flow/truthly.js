//Falsy Values (Values that Evaluate to false)

console.log(Boolean(false));       // false
console.log(Boolean(0));           // false
console.log(Boolean(-0));          // false
console.log(Boolean(""));          // false (empty string)
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));         // false


//Truthy Values (Everything Else)
console.log(Boolean(true));        // true
console.log(Boolean(1));           // true
console.log(Boolean(-1));          // true
console.log(Boolean("hello"));     // true (non-empty string)
console.log(Boolean([]));          // true (empty array)
console.log(Boolean({}));          // true (empty object)
console.log(Boolean(function(){}));// true (any function)

//Truthy/Falsy in Conditional Statements
let name = "John";
if (name) {
    console.log("Name exists!"); // ✅ This runs because "John" is truthy
}

let emptyStr = "";
if (!emptyStr) {
    console.log("String is empty!"); // ✅ This runs because "" is falsy
}
