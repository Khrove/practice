'use strict';

const bookingArr = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookingArr.push(booking);
}

createBooking('LH123');
createBooking('AH234', 2, 411);
createBooking('BH3433', 2);