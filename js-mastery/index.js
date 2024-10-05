//1. (reserved keyword) (variable name) = (any type of value)

// (reserved keyword) => [ var, let, const]

// declared variable : no value => undefined
// let nameIs = 'John';
// console.log(nameIs);

//2. numbers

// let numIs = 23;
// console.log(numIs);
// console.log(typeof numIs);

// arihtmetic operations

// let firstNum = 23;
// let secondNum = 34;

// console.log(firstNum + secondNum);
// console.log(firstNum - secondNum);
// console.log(secondNum - firstNum);
// console.log(firstNum * secondNum);
// console.log(firstNum / secondNum);
// console.log(secondNum / firstNum);
// console.log(firstNum % secondNum);
// console.log(secondNum % firstNum);

// console.log(firstNum ** 2);
// console.log(secondNum ** 2);

// increment and decrement operator

// console.log(++firstNum);
// console.log(--secondNum);


// 3. Boolean

// booolean => true / false
// falsy values=> [false, null, undefined, 0, -0, NaN, '', "", ``]
//other than these others have true values

// let isTrue = false;
// console.log(isTrue);

// // ASSIGNMENT
// let favNum = 43;
// let isTrue = false;
// let isPre = undefined;

// console.log(favNum + isTrue);
// console.log(favNum + isPre);


// 4. Comparison Operators => returns true / false
// Relational Operators => [ <, >, <=, >=] 
// Equality Operators
// === strict equality (type + value)
// !== strict non-equality
// == lose equality
// != lose non-equality

// console.log(10 === '10');
// console.log(10 !== 20);
// console.log(10 == '10');
// console.log(10 != 21);

// ASSIGNMENT
// let firstNum = '26', secondNum = 26;
// console.log(firstNum > secondNum);
// console.log(firstNum < secondNum);
// console.log(firstNum >= secondNum);
// console.log(firstNum <= secondNum);

// console.log(firstNum === secondNum);
// console.log(firstNum == secondNum);

// console.log(firstNum !== secondNum);
// console.log(firstNum != secondNum);


//5. Strings

// let firstName = 'Anurag ';
// let secondName = 'Mukherjee';

// 1. concatenation
// let fullName = firstName.concat(secondName);
// console.log(fullName);

// 2. Append
// firstName += 'Singh ';
// console.log(firstName);

// 3. length method
// console.log(firstName.length);

// 4. Cases
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// 5. Slice
// console.log(firstName.slice(2,5));

// 6. Split & Join
// console.log(firstName.split(''));

// 7. includes
// console.log(firstName.includes('u'));
// console.log(firstName.includes(','));

// ASSIGNMENT
// let firstName = 'Guru ';
// let lastName = 'Randhawa';

// let fullName = firstName.concat(lastName);
// console.log(fullName);
// console.log(fullName.toUpperCase());

// let message = `My fav singer is ${fullName.toUpperCase()} and his fav song is Lahore`;
// console.log(message);

// message += ' and his show is in Central Park';
// console.log(message);


// 6. Type conversion

// let money = '50';
//- Convert string to number
// money = parseInt(money)
// money = +money;
// money = Number(money);

//- Convert number to string

// let money = 50;
// console.log(typeof money);
// money = money.toString();
// money = String(money);

//- Convert string to decimal

// let money = "50.438";
// console.log(typeof money);
// money = parseFloat(money);
// console.log(typeof money);


// 7. Conditional Statement

// if (condition 1) {..} -> executes only if condition 1 is true 
// else if (condition 2) {...} -> executes only if condition 2 is true
// else {.....} -> executes when the other conditions fails

// let a = 15, b = 15;
// if(a > b) {
//     console.log(`${a} is greater than ${b}`);
// }else if (a < b) {
//     console.log(`${a} is less than ${b}`);
// }else {
//     console.log(`${a} is equal to ${b}`);
// }

// ASSIGNMENT

// let password ;
// if (password === 8) {
//     console.log('Welcome!!');
// }else if (password <= 8) {
//     console.log('Password is too short!');
// }else if (password >= 8) {
//     console.log('Too long password should be of 8 characters');
// }else {
//     console.log('Please provide a password!');
// }


// 8. Switch Statement

// switch (expression) {
//     case x:
//         print
//         break;
//     case y:
//         print
//         break;
// }

//ASSIGNMENT

// let fruit = 'Bananauu';

// switch (fruit) {
//     case 'Banana':
//         console.log(`${fruit} is good`);
//         break;
//     case 'Orange':
//         console.log(`I'm not a fan of ${fruit}`);
//         break;
//     case 'Apple':
//         console.log(`How you like them ${fruit}?`);
//         break;
//     default:
//         console.log(`I have never heard of ${fruit}`);
// }


// 9. for loop

// for ( initialExpression ; condition ; incrementExpression/decrementExpression ) {
//      code to be executed
// }

// for ( let i = 1; i <= 5; i++ ) {
//     console.log('-- outer loop -- ', i);
//     for(let j = 1; j <= 4; j++ ) {
//         console.log('-- inner loop -- ', j);
//     }
// }


// 10. While loop

// initialExpression
// while (condition) {
//     code to be executed

//     incrementExpression / decrementExpression
// }

// let i = 1;
// while (i <= 5) {
//     console.log("Hello World! ", i);
//     i++;
// }

