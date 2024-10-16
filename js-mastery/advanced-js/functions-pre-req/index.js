// const person = {
//     firstName: "Rahul",
//     lastName: "Sharma",
//     ageOf: 21,
//     isEmp: true,
//     addressIs: ["Delhi", "Bangalore"]
// };

// console.log(person);

// // Accessing the Items from Object
// console.log(person.addressIs);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.ageOf);
// console.log(person['isEmp']);

// const personIs = {
//     firstName: "Rahul",
// };

// personIs.lastName = "Singh";
// personIs.ageIs = 23;

// delete personIs.lastName;

// console.log(personIs);


// ASSIGNMENT

// const carNewOject = {
//     type: "Mahindra",
//     model: "xl-7",
//     color: "matte black"
// }

// console.log(typeof carNewOject);
// console.log(carNewOject);

// carNewOject.type = "Toyota";
// console.log(carNewOject);

// carNewOject.wheels = "Bridgestone Offroad";
// console.log(carNewOject);



// Function is a block of code that performs a specific task
// => Functions make the code reusable. You can declare it once and use it multiple times. 
// => Function makes the program easier as each small task is divided into a function. 
// => It increases readability. 

// Syntax :: 

// function (parametersIfAny) {
//     .. code to be executed
// }

// function greet ( userName ) {
//     console.log(`Hello, ${userName}`);
// }

// greet('Harkirat');

//return -> function

// function addNums(x, y) {
//     return x + y;
// }

// let resIs = addNums(12, 17);
// console.log(resIs);


// ASSIGNMENT

// function myFunction(num1, num2) {
//     return num1 * num2;
// }

// const ansIs = myFunction(12, 11);
// console.log(ansIs);



// //function declaration

// function greet (userName) {
//     console.log(`Hello, ${userName}`);
// }

// greet("Harkirat");


// // function expression

// const greetings = function (userName) {
//     console.log(`Hello there, ${userName}`);
// }
// greetings("Anurag");



// TOPIC: Callback function

// When we provide function as an (argument) to other
// function that function is known as callback function


//ASSIGNMENT

// function showCallfunc (fn) {
//     const value = 21;
//     fn(value);
// }

// showCallfunc (function (value){
//     console.log(value);
// });


// function greetName(userName, greetFml) {
//     console.log(`Hello there, ${userName}`);
//     greetFml();
// }

// greetName("Harkirat", function(){
//     console.log(`Nice to meet you.`);
// });

// More detailed callback function

// function greet(userName, cbFunc) {
//     console.log(`Hello there, ${userName}`);
//     cbFunc();
// }

// function cbFunc(){
//     console.log("This is the callback function.");
// }

// greet("Harkirat", cbFunc);

