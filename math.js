// Variables

let num1 = 5;
let num2 = 10;
/*
// Save the sum of num1 and num2 into a variable
let sum1 = num1 + num2;
//console.log(num1);
//console.log(num2);
//console.log(sum1);

// difference between num1 and num2
let difference1 = num1 - num2;
console.log(difference1);

// Save the product of num1 and num2 into a variable
let product1 = num1 * num2;
console.log(product1);

// Save the power of num1 and num2 into a variable
let power1 = num1 ^ num2;
console.log(power1);

// Save the quotient of num1 and num2 into a variable
let quotient1 = num1 / num2;
console.log(quotient1);

// Save the remainder of num1 and num2 into a variable
let remainder1 = num1 % num2;
console.log(remainder1);
*/

// **** Problem 1 ****
// Store the sum of num1 and num2 in a variable.
// Print the sum.
let sum = num1 + num2;
console.log(sum);

// **** Problem 2 ****
// Store the difference between sum (above) and 7 in a variable.
// Print the difference.
let difference = sum - 7;
console.log(difference);

// **** Problem 3 ****
// Store the product of difference and 3 in a variable.
// Print the product.
let product = difference * 3;
console.log(product);

// **** Problem 4 ****
// Store the power of the product raised to an exponent of 2 in a variable.
// Print the power.
let power = product ** 2;
console.log(power);

// **** Problem 5 ****
// Store the quotient of the power divided by 4 in a variable.
// Print the quotient.
let quotient = power / 4;
console.log(quotient);

// **** Problem 6 ****
// Store the remainder of the quotient divided by 2 in a variable.
// Print the remainder.
let remainder = quotient % 2;
console.log(remainder);

// **** Problem 7 ****
// Print a boolean value (true/false) representing if the quotient from
// problem 5 is even or odd. If the quotient is even, print true. If the
// quotient is odd, print false.
//
// Hint: You can tell if a value is even or odd if it is divisible by 2;
// in other words, if there is no remainder after dividing the value by
// 2, then the value is even. See problem 6!

/*let bool;

if (remainder == 0) {
  bool = true;
  console.log(bool);
} else {
  bool = false;
  console.log(bool);
}*/

let bool2 = remainder == 0;
console.log(bool2);
