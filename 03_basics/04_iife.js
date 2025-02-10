// An Immediately Invoked Function Expression (IIFE) is a JavaScript function
//  that runs immediately after being defined. It helps in creating a private scope to avoid polluting the global namespace.
/*
function chai() {
    console.log(`DB CONNECTED`);
}
chai()


(function chai() {
    console.log(`DB CONNECTED`);
}()
)

Why Use an IIFE?
✅ Avoid polluting the global scope
✅ Create private variables (Encapsulation)
✅ Execute code immediately
✅ Useful for modularity (Before ES6 Modules)

*/
//Types of IIFE
// 1. IIFE with Anonymous Function
(function() {
    console.log("Anonymous IIFE");
})();

// IIFE with Named Function
(function myIIFE() {
    console.log("Named IIFE");
})(); 

// 3. IIFE with Parameters

(function(name) {
    console.log("Hello, " + name);
})("John");
// Output: Hello, John

// Arrow Function IIFE

(() => {
    console.log("Arrow function IIFE");
})();

// IIFE Returning a Value
const result = (function(a, b) {
    return a + b;
})(5, 3);

console.log(result); // Output: 8

