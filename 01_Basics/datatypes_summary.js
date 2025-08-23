// Datatypes can be categorized into two types based on how they are stored in the memory and how we can access the datatypes, which are Primitive and Non-Primitive Datatypes

//Primitive Datatypes : Call By Value

/*
    7 types :(i)string
             (ii)number
             (iii)boolean
             (iv)null
             (v)undefined
             (vi)symbol
             (vii)bigint
*/

//Is JS statically typed or dynamically typed ? 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false
//If the value given to the symbol datatype is same then also it will give you different values

const bigNumber = 213456789n 
//The letter 'n' at the end converts 'number' datatype into 'bigint' datatype 

//Non-Primitive/Reference Datatypes

/*
    3 types :(i)arrays
             (ii)objects
             (iii)function
*/

const friends =["Oishee","Saikat","Ankan","Monideep","Protyush"];

let myObj = 
{
    name : "Swamp",
    age : 19
}
//Objects are defined with the help of Key Value pairs inside Curly braces
//Key Value pairs can be any datatype or can be another object itself 

const myFunction = function()
{
    console.log("Hello World");
}

console.log(typeof myFunction); //function object
console.log(typeof friends); //object
console.log(typeof myObj); //object 
console.log(typeof id); //symbol
console.log(typeof null); //object
console.log(typeof undefined); //undefined


