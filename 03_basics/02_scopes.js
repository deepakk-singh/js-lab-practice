/*
Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:

-->>Block scope
-->>Function scope
-->>Global scope

*/
//Those variables which are declared outside the function or blocks or you can say curly braces({}) are having a global scope.
//In a JavaScript program, global variables can be accessed from anywhere.

var a="Ramu"
let b="Rani";
const c="Ganesh"

function d(){
       console.log(a);
       console.log(b);
       console.log(c);
}
d()