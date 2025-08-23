// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); //true
console.log("02" > 1); //true
//Automatically Converted the String to Number

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//'null' gets converted into 0

/*
    The reason is that an equality check '==' and comparisons '>,<,>=,<=' work differently.
    Comparisons convert 'null' to a number; treating it as 0.
    That's why,in the 3rd Case null >= o is TRUE and in 1st Case null > 0 is FALSE.
*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//Try to Always avoid this type of Conversions

/*
    /'===' -> Strict Check
    It not only checks the value but also checks the type of datatype used.
*/

console.log("2" === 2);