const READLINE = require('readline-sync');

//let userInput = READLINE.question("Type anything and I'll repeat it back!");
//console.log(userInput);

// declare and assign a variable for pennies using readlineSync
// ask the user how many pennies he/she wants change for

let numOfPennies = READLINE.question("Please enter cents as a positive integer: ");
console.log(numOfPennies);

// declare, assign, and print how many quarters you can make out of the pennies

//let quarters = Math.trunc(pennies / 25);
//quarters = Math.trunc(quarters);
//console.log(quarters);

let numOfQuarters = Math.floor(numOfPennies / 25);
console.log(numOfQuarters, "QUARTERS");


let remainder = numOfPennies % 25;

// declare, assign, and print how many dimes you can make out of the pennies
//let dimes = Math.trunc(pennies / (pennies - (quarters * 25)));
//console.log(dimes);

let numOfDimes = Math.floor(remainder / 10);
console.log(numOfDimes, "DIMES");

remainder = remainder % 10;


// declare, assign, and print how many nickels you can make out of the pennies
//let nickels = pennies -

let numOfNickels = Math.floor(remainder / 5);
console.log(numOfNickels, "NICKELS");

remainder = remainder % 5;


// declare, assign, and print how many pennies are left over

let finalPennies = Math.floor(remainder / 1);
console.log(finalPennies, "PENNIES");



// make a change drawer using an object to
// store all of your change
// each property on the object should represent the particular coin
// use the dot operator on the object to assign how many of each coin you have
// many coins are in the drawer
// print the drawer to see that the values are correct

let changeDrawer = {
  quarters: undefined,
  dimes: undefined,
  nickels: undefined,
  pennies: undefined
};

changeDrawer.quarters = numOfQuarters;
changeDrawer.dimes = numOfDimes;
changeDrawer.nickels = numOfNickels;
changeDrawer.pennies = finalPennies;

console.log(`${changeDrawer.quarters}
${changeDrawer.dimes}
${changeDrawer.nickels}
${changeDrawer.pennies}`);
