const READLINE = require("readline-sync");
//
// // **** Problem 1: R-rated ****
// // You cannot see an R-rated movie unless you are at least 18, or you are with
// // an adult. Write code that prints whether or not someone can see an
// // R-rated movie.
// console.log("*** Problem 1: R-rated ***");
// let age = READLINE.question("Enter your age: ");
//
// if (age < 18) {
//   console.log ("You are under 18. You cannot watch this movie without an adult.");
//   let withAdult = READLINE.question("Are you with an adult? (yes or no): ");
//   if (withAdult === "no") {
//     console.log("You are under 18 without an adult. You cannot watch this movie.");
//   } else {
//     console.log("Why did your adult let you watch this...?");
//   }
// } else {
//   console.log("Have fun at the movies! Heh heh heh...");
// }
//
// // **** Problem 2: Umbrella ****
// // You should bring an umbrella when you travel, but only if it is raining.
// // However, if it is thunderstorming, you should not bring an umbrella since
// // that's bad luck. Write code that prints if someone should bring an umbrella
// // with them.
// console.log("*** Problem 2: Umbrella ***");
// let raining = READLINE.question("Is it raining? (yes or no): ");
// if (raining === "yes") {
//   console.log("You should bring an umbrella.");
//   let thunderstorming = READLINE.question("Is it thunderstorming? (yes or no): ");
//   if (thunderstorming === "yes") {
//     console.log("You should not bring an umbrella, because that's bad luck.");
//   } else {
//     console.log("Don't forget the umbrella!");
//   }
// } else {
//   console.log("Lucky!");
// }
//
// // **** Problem 3: Monkey Trouble ****
// // There are two monkeys: Bubbles and Spankey. You are in trouble if both of
// // them are smiling, or if neither are smiling. Write code that prints if we
// // are in trouble.
// console.log("*** Problem 3: Monkey Trouble ***");
// let bubbles = READLINE.question("Is Bubbles smiling? (yes or no): ");
// let spankey = READLINE.question("Is Spankey smiling? (yes or no): ");
//
// if ((bubbles === "yes" && spankey === "yes") ||
//   (bubbles === "no" && spankey === "no")) {
//   console.log("We are in trouble. Why, exactly?");
// } else {
//   console.log("Whew!");
// }


// **** Problem 4: First Place ****
// Write code that prints the largest of three scores. If there is a tie for
// first place, simply print one of the tie winners.
// console.log("*** Problem 4: First Place ***");
// let score1 = READLINE.question("Enter the first score: ");
// let score2 = READLINE.question("Enter the second score: ");
// let score3 = READLINE.question("Enter the third score: ");
//
// if (score1 >= score2 && score1 >= score3) {
//   console.log(score1, '^^^^^');
//   console.log(score2, '*****');
//   console.log(score3, '&&&&&');
//   // console.log("++++++++");
// } else if (score2 >= score1 && score2 >= score3) {
//   console.log(score2);
//   // console.log("*****");
// } else if (score3 >= score1 && score3 >= score2) {
//   console.log(score3);
// } else {
//   console.log("I do not know what I am doing...");
// }


// **** Problem 5: Phone Shopping ****
// At a phone store, you can afford various "tiers" of phones based on how
// much money you have.
//    If you have at least $30 you can buy a prepaid phone.
//    If you have at least $100 you can buy a bottom-tier phone.
//    If you have at least $300 you can buy a middle-tier phone.
//    If you have at least $600 you can buy a top-tier phone.
// Write code that prints all the phone tiers someone can buy based on how much
// money they have.
console.log("*** Problem 5: Phone Shopping ***");
let money = READLINE.question("How much money do you have?: ");

if (money >= 30) {
  console.log ("You can buy a prepaid phone.");
  if (money >= 100) {
    console.log("You can buy a bottom-tier phone.");
    if (money >= 300) {
      console.log("You can buy a middle-tier phone.");
      if (money >= 600) {
        console.log("You can buy a top-tier phone.");
      }
    }
  }
} else {
  console.log("Come back when you have enough money.");
}


// **** Problem 6: Guess My Number ****
// Write code that plays a simple number guessing game with a user. You can
// use any number you like as myNum. If the user guesses the number, print
// a congratulations message. If they guess too low or too high, tell them this.
// If their guess is myNum +/- 3, tell them they are "warm"; otherwise tell
// them they are cold.
console.log("*** Problem 6: Guess My Number ***");
let myNum = 5;
let guess = READLINE.question("I'm thinking of a number. Guess it: ");
if (guess == myNum) {
  console.log("Congratulations!");
} else if (myNum - guess <= 3 && myNum - guess >= 0) {
  console.log("Warm!");
} else if (guess - myNum <= 3 && guess - myNum >= 0) {
  console.log("Warm!");
} else {
  console.log("Cold!");
}
