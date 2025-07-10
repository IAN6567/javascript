//datatypes can be categorized into two main types:primitive annd non primitive(or reference)types
//primitive simple types ainclude;string,number,boolean,null,undefined,and symbol.
//none-primitive /complex/composite types include:object,array,and function

//data types in javascript are the diffefent kinds of values that can be stored and manipilated within the language.understanding data types

let email = "ian@ian.co.ke"; //string--names,passwords,location, etc
let age = "25"; //number--,age,weight,temperature,etc
let isactive = true; //boolean--true or false values such as isactive isloggedin,isadmin,etc.
let isloading = false; //boolean--true or false values,such as isloading isprocessing,iscomplete,etc.
//operators are special symbols that perform variables and values .javascript has various types of operators including arithmetic assignment comparison, logical and more

//null-null is a special value that oresent the international basence of any object vvaalue.it is ofte used to indicate that a
let user = null; //user is intentionally set to have no value-empty cup

let username; //undefined-username is declared but not assigned a value yet-empty cup
//array -a list of items which can be of any data type.arrays are used to store muyltiple values in a single variable.they are ordered colections of value and can contain elements of different types including other arrats of numbers
let fruits = ["apple", "banana", "orange"]; //array of strings
let numbers = [1, 2, 3, 4, 5]; //
//array of numbers
let mixedArray = ["apple", 42, true, [1, 2, 3], null]; //array with mixed data
let coordinates = [[1, 2][(3, 4)][(5, 6)]]; //array of arrays(2d array)
let marks = [80, 90, 75, 85]; //arrat of numbers representing marks
//funtions- a block of code that can be called and executed .funtion can take parameters and return value.they are used to encapsulate reusable logic and perform specific tasks.
function greet(name) {
  return `hello,&{name}!`;
} //function that rakes a name as a parameter and returns a greeting message
greet("Albert"); //calling the function with "albert as na arguement"
greet("jane"); //calling the funcion wiuth "jane"as na arguement
//explore operators,truth tables, ++var var++,== ===,
//control fllow statements-conditions and loops.
