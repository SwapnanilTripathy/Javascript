"use strict" //All the JS Code are treated as Newer Version of the JS

/* 
    alert(3 + 3)
    Works in the Browser Console, but not in 'note.js'.
*/

console.log(3 + 3); 
// Code Readability should be given the first priority.

console.log("Swamp");

let name ="Swamp"
let age = 20
let UserLoggedIn = true
let state;

// Primitive datatype

    /*
        (i) 'number' variable ranges upto 2^53
        (ii)'bigint' -> Used for numbers that cannot be stored in 'number' variable
        (iii)'string' -> ""
        (iv)'boolean' -> true/false
        (v)'null' -> Standalone Value
                Let's say we asked a person to write the temp. of a day using a machine server.
                But due to malfunctioning of the server he cannot find the temp.
                So instead of using '0' which itself is a naturally occuring temperature, he uses 'null'.
                This will make us aware of the fact that due to the malfunctioning of the machine he can't find the value of the temp.
        (vi)'undefined' -> When NO value is assigned to the Variable 

        #'null' and 'undefined' are two very different types of Variables

        (vii)'symbol' -> to define the UNIQUENESS of an Individual Components 
    */

//Object

console.log(typeof "Swamp"); //String
console.log(typeof age); //Number
console.log(typeof UserLoggedIn); //Boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined


