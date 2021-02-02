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

// Functions returning functions
// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }
//
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
//
// greet('Hello')('Kevin');
//
// // Arrow function challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
//
// greetArr('Hi')('Jonas');

// Call and Apply methods
// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//     },
// };
//
// lufthansa.book(239, 'Joshua Johnson');
// lufthansa.book(635, 'John Doe');
// console.log(lufthansa);
//
// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };
//
// const book = lufthansa.book;
//
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);
//
// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);
//
// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: []
// };
//
// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);
//
//  // Apply method -- needs an array
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);
//
// book.call(swiss, ...flightData);
//
// // Bind method
// const bookEW = book.bind(eurowings);
// bookEW(23, 'Joshua Jimbonson');
//
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Joshua Testonson');
//
// // With Even Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }
//
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//
// // Partial Application -- preset params
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
//
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(1000));
//
// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate;
//     }
// }
//
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// Immediately invoked function expressions (IIFE)
// const runOnce = function() {
//     console.log('This will never run again!');
// }
//
// // runOnce();
//
// (function() {
//    console.log('This will never run again!');
// })();
//
// (() => console.log('This will also never run again!'))();