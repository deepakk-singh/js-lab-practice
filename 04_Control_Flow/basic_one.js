//Control flow determines the order in which statements and expressions are executed in a JavaScript program.

// Conditional Statements (Decision Making)
// Conditional statements control the flow based on conditions.

// if Statement

let age=18;
    if(age>=18)
    {
        console.log("You are eligible for vote");
    }
//if-else statement
    let number=5;
    if(number%2==0)
    {
        console.log("Number is even")
    }
    else{
        console.log("Number is odd");
    }

// if-else if else statement

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
// Ternary Operator (Shorter if-else)




let result = (marks >= 50) ? "Pass" : "Fail";
console.log(result);
