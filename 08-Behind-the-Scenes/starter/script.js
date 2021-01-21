'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstname} are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, and you're a millenial, ${firstname}`;

            function add(a, b) {
                return a+b;
            }
        }
    }
    printAge();

    return age;
}

const firstname = 'Josh'

calcAge(1995);