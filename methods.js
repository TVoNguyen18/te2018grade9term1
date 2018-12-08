const READLINE = require("readline-sync");

// **** Bank Account Object ****
// This object represents a bank account
// and includes properties of owner, withdrawalLimit, balance, and bankName
// it also has three methods that you will have to create!
let bankAccount = {
  owner: "Thanhthanh Nguyen",
  withdrawalLimit: 50,
  balance: 100,
  bankName: 'Chase Bank',
  deposit: function(moneyAdded) {
    console.log("Here is your current balance: " + this.balance + ".");
    this.balance += moneyAdded;
    console.log("Deposit is a success! Here is the amount deposited: " +
          moneyAdded + ", and here is your current balance: " +
          this.balance + ".");
  },
  withdraw: function(withdrawAmount) {
    console.log("Here's your current balance: " + this.balance + ".");
    if (withdrawAmount <= 50 && this.balance > 0) {
      this.balance -= withdrawAmount;
      console.log("Withdraw a success! Here is the amount withdrew: " +
            withdrawAmount + ", and here is your current balance: " +
            this.balance + ".");
    } else {
      console.log("Withdraw a failure! Make sure that you are not withdrawing "
            + "more than 50 dollars and that your current balance is more than 0.");
    }
  },
  createGreeting: function() {
    console.log("Welcome, " + this.owner + ", to " +
          this.bankName + "!");
  }
};

// **** Problem 1: Greet the User ****
// Update the property 'owner' to be your name
// Then fill in the createGreeting method so that it will RETURN a greeting,
// including the bank name and owner name
// Our tests will then print that returned greeting to the terminal

// **** Problem 1 Tests ****
// console.log('**** Problem 1 Tests ****');
// console.log(`${typeof bankAccount.owner}... should be string`);
// console.log(`${bankAccount.createGreeting()}... should include a greeting, ${bankAccount.owner}, and ${bankAccount.bankName}`);
bankAccount.createGreeting();

// **** Problem 2: Deposit Monies ****
// Then fill in the deposit method
// It needs to take an argument to add to the bankAccount's balance
// and print a success message including the amount deposited

// **** Problem 2 Tests ****
bankAccount.deposit(50);

// **** Problem 3: Withdraw Monies ****
// Then fill in the withdrawal method
// This one requires a bit more logic than the first two!
// This method will take an argument to withdraw from the bank Account
// If it doesn't exceed the withdrawalLimit and the balance and is above 0, remove the amount and print a success message
// Otherwise do not remove the amount and print a failure messages

// **** Problem 3 Tests ****
console.log('\n\n**** Problem 3 Tests ****');
let priorBalance = bankAccount.balance;
console.log(`Before withdrawing any money our balance was ${priorBalance}`);
bankAccount.withdraw(120);
console.log('Just ran the withdrawal but with too high an amount... did it print a failure message?');
console.log(`The balance should still be the same as before. \nPrior Balance: ${priorBalance}\nCurrent Balance: ${bankAccount.balance}`)
bankAccount.withdraw(20);
console.log('Just ran a successful withdrawal of $20. Was a success message printed?');
console.log(`The balance should have been decreased by $20. \nPrior Balance: ${priorBalance}\nCurrent Balance: ${bankAccount.balance}`)


// **** Problem 4: Object Methods ****
// Write code that represents any object you like. Your object should have at
// least four properties and four methods. At least two of your methods should
// utilize the "this" keyword to refer to properties, or call other methods,
// owned by the object.

let myiPhone = {
  iOS: 11,
  color: "Rose Gold",
  gigabytes: 32,
  owner: "Thanhthanh Nguyen",
  batteryPercentage: 100,
  displayStorage: function() {
    console.log(this.gigabytes + " gigabytes are on this iPhone.");
  },
  updateiOS: function() {
    if (this.iOS < 12) {
      let answer = READLINE.question("Would you like to update to iOS 12? " +
            "Tap 1 for yes or 2 for no: ");
      if (answer == "1") {
        this.iOS = 12;
        console.log("Your iOS is now iOS " + this.iOS + "!");
      } else if (answer == "2") {
        console.log("Your iOS remains to be iOS " + this.iOS + ".");
      } else {
        console.log("ERROR! EXITING THE PROGRAM!");
      }
    } else {
      console.log("Your iPhone is up to date. No worries!");
    }
  },
  turnOff: function(isPowerButtonPressed) {
    if (isPowerButtonPressed === true) {
      console.log("iPhone is turning off...");
      this.iPhoneState = "OFF";
    } else {
      console.log("iPhone is still on.");
      this.iPhoneState = "ON";
    }
  },
  batteryDecreasionOnInternet: function(hoursUsed) {
    if (hoursUsed > 10) {
      console.log("Not possible; your iPhone would have died already!");
    } else {
      if (this.batteryPercentage > 0) {
        this.batteryPercentage -= hoursUsed * 10;
        if (this.batteryPecentage < 0) {
          console.log("Not possible; your iPhone would have died already!");
        } else {
          console.log("Power remaining: " + this.batteryPercentage + " percent.");
        }
      } else {
        console.log("Not possible; your iPhone would have died already!");
      }
    }
  }
}


// Test all of your object's methods below.
console.log('\n\n**** Problem 4 Tests ****');
myiPhone.batteryDecreasionOnInternet(10);
