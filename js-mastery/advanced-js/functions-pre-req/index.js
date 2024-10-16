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

const personIs = {
    firstName: "Rahul",
};

personIs.lastName = "Singh";
personIs.ageIs = 23;

delete personIs.lastName;

console.log(personIs);