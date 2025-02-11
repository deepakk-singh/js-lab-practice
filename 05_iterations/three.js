//high order array

/*The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, and more.
 It provides a clean and easy way to loop through values without using an index.
*/

const arr=[1,2,3,4,5];
for (const num of arr) {
   // console.log(num)
}
//output: 1, 2, 3 ,4 5
const name = "JavaScript";

for (let char of name) {
   // console.log(char);
}
// Output: J, a, v, a, S, c, r, i, p, t

//map---->> Creates a new array by applying a function to each element.

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);
console.log(doubled);
// Output: [2, 4, 6, 8]

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('UK', "United Kingdom")
map.set('IN', "India")
console.log(map)
for(const[key, value] of map){
    console.log(key,':-', value)
}


