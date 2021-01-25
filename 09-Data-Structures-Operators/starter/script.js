'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
        close: 22,
  },
  [weekdays[4]]: {
    open: 11,
        close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
        close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Sets
// Collection of unique values; can be mixed data types; removes ALL duplicates
// There are no Indexes in a set; Looping is possible though. See for of loop below

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('risotto'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.delete('Risotto');

console.log(orderSet);

for(const order of orderSet) console.log(order);

orderSet.clear();
console.log(orderSet);

// Example of Set
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter', 'Busboy', 'Hostess'];
// To create a new unique array you use the spread operator
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('Joshua Johnson').size);

// Looping Objects

// Looping over object property names (keys)
// const properties = Object.keys(openingHours);
// // console.log(properties);
//
// let openStr = `We are open on ${properties.length} days.`;
//
// for (const day of properties) {
//   openStr += ` ${day},`
// }
// // console.log(openStr);
//
// // Property Values
// const values = Object.values(openingHours);
// // console.log(values);
//
// const entries = Object.entries(openingHours);
// // console.log(entries);
//
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Without Optional Chaining
// if(restaurant.openingHours && restaurant.openingHours.mon)  console.log(restaurant.openingHours.mon.open);
//
// // With Optional Chaining
// console.log(restaurant.openingHours?.mon?.open);
//
// // Example of optional chaining
//
// for(const day of weekdays) {
//   console.log(day);
//   // Nullish coalescing operator allows for us to show "0"
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
//
// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//
// // Arrays
// const users = [
//   {name: 'Joshua', email: 'joshualj@gmail.com'}
// ];
// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[1]?.name ?? 'User array empty');


// For of loop (lecture 110)

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//
// for(const item of menu) {
//   console.log(item);
// }
//
// // To get index of for of loop
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// Nullish Coalescing operator

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
//
// // Nullish: null and undefined (not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// Rest Pattern
// Rest syntax is on the left side of operator
// Spread is on the right side of operator
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
//
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);
//
// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
//
// // Functions
// const add = function(...numbers) {
//   let solution = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     solution += numbers[i];
//   }
//
//   return console.log(solution);
// }
//
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
//
// const x = [23, 5, 7];
// add(...x);
//
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// Spread Operator
// const arr = [7,8,9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
//
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
//
// // Spread operator use cases
//
// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu]
//
// // merge arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
//
// // Iterables: Arrays, strings, maps, sets. NOT objects
// const str = 'Josh';
// const letters = [...str, ' ', 'J.'];
// console.log(letters);
//
// // const ingredients = [prompt('Ingredient 1:'), prompt('Ingredient 2:'), prompt('Ingredient 3:')];
// // restaurant.orderPasta(...ingredients);
//
// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
//
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "5 Spring Head Court, Apt. B",
//   mainIndex: 2,
//   starterIndex: 2,
// });
//
// restaurant.orderDelivery({
//   address: "Bleep Bloop",
//   starterIndex: 1
// });

// Destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
//
// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);
//
// // Default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);
//
// // Mutating Objects
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
//
// ({a, b} = obj);
// console.log(a, b);
//
// // nested objects
// const { fri: {open: o, close: c} } = openingHours;
// console.log(o, c);

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//
// const [x,y,z] = arr;
// console.log(x,y,z);
//
// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);
//
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
//
// // Receive 2 return values from a function
// const [starter, main2] = restaurant.order(2, 0);
// console.log(starter, main2);
//
// // Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, ,[j, k]] = nested;
// console.log(i,j,k);
//
// // Default Values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);