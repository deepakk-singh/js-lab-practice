// In JavaScript, this refers to the context in which a function is called.
// The value of this changes depending on how and where the function is invoked.


console.log(this);             //{}

function show() {
    //console.log(this);
}
show();

// this in an Object Method

const obj = {
     name: "Deepak",
     greet: function() {
      //  console.log(this);
     }
};
obj.greet();


function Person(name){
    this.name=name;
}
const person1 = new Person("Deepak");
console.log(person1.name)


/*
When to Use Arrow Functions?
✅ Use for short, single-expression functions
✅ Use when you need to inherit this from surrounding scope (e.g., inside setTimeout, event listeners)
❌ Avoid using in object methods (since this won’t refer to the object)
❌ Avoid using when a function needs arguments

*/