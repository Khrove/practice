'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements) {
    // We use this to empty the placeholder movements (I deleted them)
    containerMovements.innerHTML = '';

    movements.forEach(function(move, index) {
        const type = move > 0 ? "deposit" : "withdrawal";
        const html = `
            <div class="movements__row">
              <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
              <div class="movements__value">${move}</div>
            </div>
        `;
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
}

const calcDisplayBalance = acc => {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

    labelBalance.textContent = `${acc.balance} EUR`;
}

const calcDisplaySummary = function(acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    const withdrawals = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(mov => mov * acc.interestRate/100)
        .filter((interest, i, arr) => {
            console.log(arr);
            return interest >= 1;
        })
        .reduce((acc, mov) => acc + mov, 0);
    labelSumInterest.textContent = `$${interest}`;
    labelSumOut.textContent = `$${Math.abs(withdrawals)}`;
    labelSumIn.textContent = `$${incomes}`;
}

const createUsernames = function(accs) {
    accs.forEach(function(acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map((name) => name[0]).join('');
    });
}
createUsernames(accounts);

const updateUI = (acc) => {
    // Display movements
    displayMovements(acc.movements);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
}

// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function(e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

    // Remember optional chaining
    if(currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function(e) {
    // Very common when dealing with forms to stop page from reloading
   e.preventDefault();

   // We need to convert the string input back to a number
   const amount = Number(inputTransferAmount.value);
   const to = accounts.find(acc => acc.username === inputTransferTo.value);
   inputTransferAmount.value = inputTransferTo.value = '';

   if (amount > 0 && to && currentAccount.balance >= amount && to?.username !== currentAccount.username) {
       currentAccount.movements.push(-amount);
       to.movements.push(amount);

       updateUI(currentAccount);
   }
});

btnLoan.addEventListener('click', e => {
    e.preventDefault();

    const loan = Number(inputLoanAmount.value);

    if(loan > 0 && currentAccount.movements.some(mov => mov >= loan * .1)) {
        // Add movement
        currentAccount.movements.push(loan);

        // update UI
        updateUI(currentAccount);
    }
});

btnClose.addEventListener('click', e => {
    e.preventDefault();

    const user = inputCloseUsername.value;
    const pin = Number(inputClosePin.value);

    if(user === currentAccount.username && pin === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        accounts.splice(index, 1);
    }

    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
})



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// forEach with Maps
// currencies.forEach(function(value, key, map) {
//     console.log(`${key}: ${value}`)
// });
//
// // forEach with Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// currenciesUnique.forEach(function(value, _, map) {
//     console.log(`${value}`);
// });

// forEach. First param = element, second = index, third = an array
// movements.forEach(function(move, index, arr) {
//   if(move > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${move}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(move)}`);
//   }
// });

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// // SLICE -- DOES NOT MUTATE ORIGINAL ARR
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2))
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);
//
// // SPLICE -- extracts elements from an array. DOES MUTATE
// // console.log(arr.splice(2));
// arr.splice(-1); // deletes e
// arr.splice(1, 2); // deletes b, c
// console.log(arr);
//
//
// // REVERSE -- DOES MUTATE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
//
// // CONCAT -- DOES NOT MUTATE
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
//
// // JOIN
// console.log(letters.join(' - '));

// The map array method

 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// const eurToUsd = 1.1;
//
// const newArr = movements.map(function(move) {
//     return move * eurToUsd;
// });
//
// console.log(newArr);
//
// const movementsDesc = movements.map((move, index, arr) => {
//     return `Movement ${index + 1}: You ${move > 0 ? 'deposited' : 'withdrew'} ${Math.abs(move)}`
// });
//
// console.log(movementsDesc);

// Filter method
// const deposits = movements.filter(function(mov) {
//     return mov > 0;
// });
//
// console.log(movements);
// console.log(deposits);
//
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
//
// console.log(depositsFor);
//
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// Reduce method
// Accumulator, current value, current index, array
// 0 is first value of the accumulator
// const balance = movements.reduce(function(acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`);
//     return acc + cur;
// }, 0);
// console.log(balance);
//
// let balance2 = 0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value of the movements array using reduce
// const max = movements.reduce((acc, mov) => {
//    if(acc > mov) {
//        return acc;
//    }  else {
//        return mov;
//    }
// }, movements[0]);
// console.log(max);

// Chaining methods
// const eurToUsd = 1.1;
// const totalDepositsInUSD = movements
//     .filter(mov => mov > 0)
//     .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd
//     }).reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsInUSD);

// Find method
// const first = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(first);
//
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === "Jessica Davis");
// console.log(account);

// SOME
// console.log(movements);
//
// // equality
// console.log(movements.includes(-130));
//
// // condition
// console.log(movements.some(mov => mov === -130));
//
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);
//
// // EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// flat and Flatmap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flat
const overallBalanceflat = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalanceflat);

// flatMap
const overallBala