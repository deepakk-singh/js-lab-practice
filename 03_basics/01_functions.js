function myName()
 {
    console.log("D")
    console.log("E")
    console.log("E")
    console.log("P")
    console.log("A")
    console.log("K")
 }

 //myName()

 function addTwoNum(num1,num2)
 {
    console.log(num1+num2)
 }
 //addTwoNum(4,8)
/*
 function calculatCartPrice(num1)
 {
    return num1                           
 }
 console.log(calculatCartPrice(200,80,10))     //Output =200 only

*/

 //if we want to print all value then......................
  function calculatCartPrice(...num1)
 {
    return num1                           
 }
 console.log(calculatCartPrice(200,80,10))     //it will stored in an array


 const user = {
    username:"HTTP",
    price: 400
 }

 function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
 }

 handleObject(user)