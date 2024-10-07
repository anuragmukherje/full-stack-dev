// Synchronous code => sequentially runs the code

// function myFunc () {
//     console.log('Inside Function');
// }

// console.log('Start');
// myFunc();
// console.log('End');


// Asynchronous Code

// console.log('Start');

// setTimeout(() => {
//     console.log('Inside Function');
// }, 2000);

// console.log('End');


// Callback Hell 
// function callbackHell(callback) {
//     setTimeout(() => {
//         const data = "Inside (callbackHell) function";
//         console.log(data);
//         callback(data);
//     }, 2000);
// }

// function firstFunc(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - Processed First`;
//         console.log('Inside (firstFunc) function');
//         callback(processedData);
//     }, 1000);
// }

// function secondFunc(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - Processed Second`;
//         console.log('Inside (secondFunc) function');
//         callback(processedData);
//     }, 1500);
// }

// // Callback Hell

// callbackHell((data) => {
//     firstFunc(data, (processedData1) => {
//         secondFunc(processedData1, (processedData2) => {
//             console.log(`Final result of all functions : ${processedData2}`);
//         });
//     });
// });

// Callback is not always asynchronous
// console.log('Start');

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// numbers.forEach((n) => {console.log(n);});

// console.log('End');

// ASSIGNMENT

// console.log('Start');

// function getUserDataFromDB (userName, callback) {
//     setTimeout(() => {
//         console.log("Getting User Name");
//         callback(userName);
//     }, 2000);
// }

// function getUserHobbies (userName, callback) {
//     setTimeout(() => {
//         console.log("Getting User Hobbies");
//         callback(['Football', 'Cricket', 'Coding']);
//     }, 2000);
// }

// getUserDataFromDB('Anurag', (data) => {
//     console.log(data);
//     getUserHobbies(data, (hobby) => {
//         console.log(hobby);
//     });
// });

// console.log('End');


