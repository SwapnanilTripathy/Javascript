let score = "33abc" //Not a Pure Number
console.log(typeof score); //String

let ValueInNumber = Number(score)
// Conversion of String Datatype to Number Datatype

console.log(typeof ValueInNumber); //Number
console.log(ValueInNumber); //NaN -> Not A Number (Special Type)

//Conversion Of Datatypes into 'number' Datatype 
/*
    (i)"33" -> 33
    (ii)"33abc" -> NaN
    (iii)null -> 0
    (iv)undefined -> NaN
    (v)true -> 1 ; false -> 0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) 
//Conversion of Number Datatype to Booleam Datatype
console.log(booleanIsLoggedIn); //true

//Conversion Of Datatypes into 'boolean' Datatype 
/*
    (i)"" -> false
    (ii)"Any String" -> true
    (iii)null -> false
    (iv)undefined -> false
    (v)1 -> true; 0 -> false
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); //33 gets converted into "33"(string datatype)
console.log(typeof stringNumber); //String


