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