// ******************************************************************************
// Problem 1: print greeting ****
// 1. Write a function that prints a greeting message to the user. Then call the function to see if it works.

function printGreeting() {
  console.log("Ayo ladies and gentlemen! If you're ready then I'll start, yeah!");
}

printGreeting();

//******************************************************************************
// Problem 2: print a goodbye message ****
// 2. Write a function that prints a goodbye message to the user. Then call the function to see if it works.

function printGoodbye() {
  console.log("When will I see you again, oh oh oh oh?");
}

printGoodbye();

//******************************************************************************
// **** Problem 3: ****
// Write a function that runs both programs by calling functions in this
// order:
// 1) printGreeting()
// 3) printClosing()

function printGreetsAndByes() {
  printGreeting();
  printGoodbye();
}

printGreetsAndByes();

// **** Problem 4:
/******************************************************************************
                                   makes10(a, b)
Instructions:
Given 2 numbers, a and b, return true if one if them is 10 or if their sum is 10.
Examples:
makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true
*******************************************************************************/


function makes10(a, b) {
  if (a == 10) {
    return true;
  } else if (b == 10) {
    return true;
  } else if (a + b == 10) {
    return true;
  } else {
    return false;
  }
}


// Remove comment below to test this function.
testMakes10();









// ******************************************************************************
// Problem 5: sumDouble()
//                                    sumDouble(a, b)
// Instructions:
// Given two number values, return their sum. Unless the two values are the same,
// then return double their sum.
// Examples:
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

function sumDouble(a, b) {
  if (a == b) {
    return 2 * (a + b);
  } else {
    return a + b;
  }
}

// Remove comment below to test this function.
testSumDouble();
//******************************************************************************
// Problem 6: caughtSpeeding(speed, isBirthday)
// Instructions:
// You are driving a little too fast, and a police officer stops you. Write code
// to compute the result, encoded as a number value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all
// cases.
// Examples:
// caughtSpeeding(60, false) → 0
// caughtSpeeding(65, false) → 1
// caughtSpeeding(65, true) → 0

function caughtSpeeding(speed, isBirthday) {
  if (isBirthday == true) {
    speed -= 5;
  }

  if (speed <= 60) {
    return 0;
  } else if (speed >= 61 && speed <= 80) {
    return 1;
  } else {
    return 2;
  }
}

// Remove comment below to test this function.
testCaughtSpeeding();
//*******************************************************************************/



/****************************************************************************
                                    Tests
*****************************************************************************/

function testMakes10() {
  console.log();
  console.log("makes10(9, 10) → true " + makes10(9, 10));
  console.log("makes10(9, 9) → false " + makes10(9, 9));
  console.log("makes10(1, 9) → true " + makes10(1, 9));
  console.log("makes10(10, 1) → true " + makes10(10, 1));
  console.log("makes10(10, 10) → true " + makes10(10, 10));
  console.log("makes10(8, 2) → true " +	makes10(8, 2));
  console.log("makes10(8, 3) → false " + makes10(8, 3));
  console.log("makes10(10, 42) → true	" + makes10(10, 42));
  console.log("makes10(12, -2) → true	" + makes10(12, -2));
}

function testSumDouble() {
  console.log();
  console.log("sumDouble(1, 2) → 3 "	+ sumDouble(1, 2));
  console.log("sumDouble(3, 2) → 5 " + sumDouble(3, 2));
  console.log("sumDouble(2, 2) → 8 " + sumDouble(2, 2));
  console.log("sumDouble(-1, 0) → -1 " + sumDouble(-1, 0));
  console.log("sumDouble(3, 3) → 12 " + sumDouble(3, 3));
  console.log("sumDouble(0, 0) → 0 " + sumDouble(0, 0));
  console.log("sumDouble(0, 1) → 1 " + sumDouble(0, 1));
  console.log("sumDouble(3, 4) → 7 " + sumDouble(3, 4));
}

function testCaughtSpeeding() {
  console.log();
  console.log("caughtSpeeding(60, false) → 0 " + caughtSpeeding(60, false));
  console.log("caughtSpeeding(65, false) → 1 " + caughtSpeeding(65, false));
  console.log("caughtSpeeding(65, true) → 0 " + caughtSpeeding(65, true));
  console.log("caughtSpeeding(80, false) → 1 " + caughtSpeeding(80, false));
  console.log("caughtSpeeding(85, false) → 2 " + caughtSpeeding(85, false));
  console.log("caughtSpeeding(85, true) → 1 " + caughtSpeeding(85, true));
  console.log("caughtSpeeding(70, false) → 1 " + caughtSpeeding(70, false));
  console.log("caughtSpeeding(75, false) → 1 " + caughtSpeeding(75, false));
  console.log("caughtSpeeding(75, true) → 1 " + caughtSpeeding(75, true));
  console.log("caughtSpeeding(40, false) → 0 " + caughtSpeeding(40, false));
  console.log("caughtSpeeding(40, true) → 0 " +	caughtSpeeding(40, true));
  console.log("caughtSpeeding(90, false) → 2 " + caughtSpeeding(90, false));
}
