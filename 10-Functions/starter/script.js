'use strict';
//
// const bookingArr = [];
//
// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//
//     console.log(booking);
//     bookingArr.push(booking);
// }
//
// createBooking('LH123');
// createBooking('AH234', 2, 411);
// createBooking('BH3433', 2);

// Passing objects: Value vs reference
// const flight = 'LH234';
// const jonas = {
//     name: "Joshua Johnson",
//     passport: 23456789
// };
//
// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;
//
//     if(passenger.passport === 23456789) {
//         alert('Check in');
//     } else {
//         alert('Wrong passport!');
//     }
// }
//
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// First class and Higher order functions
//
// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }
//
// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }
//
// // Higher order function because it takes in a function as a param
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//
//     console.log(`Transformed by: ${fn.name}`);
// }
//
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);
//
// const highfive = function() {
//     console.log('Hello!');
// }
//
// document.body.addEventListener('click', highfive);

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');