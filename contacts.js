// Author: FirstName lastName

/******************************************************************************
                                constant variables

  These are global variables that should stay the same throughout the run of the
  program. After being initialized, JavaScript won't let you change them ever
  again. Great for when you want to "protect" certain variables from accidental
  tampering!
*******************************************************************************/

const READLINE = require("READLINE-sync");

/******************************************************************************
                                global variables

  contacts
  Object Array. Each object represents a contact. Contacts have four properties,
  and all property values are strings:
    -name: The contact's name. Can consist of any characters, spaces, etc.
    -number: The contact's 10-digit phone number (as a string).
    -email: The contact's email address.
    -notes: Any additional text relevant to the contact (e.g., "mobile number")

  quit
  Boolean. Represents if the program should continue running (true) or
  not (false).
*******************************************************************************/

let contacts;
let quit;

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/

function printGreeting() {
  console.log("Hi, I'm Thanhthanh Nguyen! I am not a creative person!\n" +
        "LET'S GET THIS BREAD!!!");
}

/******************************************************************************
                                  setupApp()

  Initialize global variables as follows:
  -contacts initialized as an empty array
  -quit initialized as false
*******************************************************************************/

function setup() {
  contacts = new Array();
  quit = false;
}

setup();

/******************************************************************************
                                getNameInput()

  Continuously ask user to enter a name until a valid name is entered, then
  return that name.

  Valid names must be at least one character.
*******************************************************************************/

function getNameInput() {
  let validName = READLINE.question("Name of your contact? ");

  while (validName.length == 0) {
    validName = READLINE.question("Name must be at least one character long! Reenter: ");
  }

  return validName;
}

//console.log(getNameInput());

/******************************************************************************
                                checkNumber()

  Check if a phone number is valid, according to the following criteria:
  -Phone numbers must be exactly 10 digits (no special characters, spaces, etc).
  -Phone numbers must have a value greater than 0.

  Return true if a phone number is valid, and false otherwise.

  Numbers will be passed in as strings, so use parseInt() to change them into
  number data types. From there you can perform all checks above.
*******************************************************************************/

function checkNumber(number) {
  let newNum = number;
  let actualNum = parseInt(number);
  let tmp = actualNum;
  let count = 0;
  let catcher = 0;
  let i;

  for (i = 0; i < (number.length); i++) {
    if (isNaN(newNum[i]) == true) {
      catcher = 0;
      i = newNum.length;
    } else {
      catcher++;
    }
  }

  if (catcher) {
    do {
      count++;
      tmp = parseInt(tmp / 10);
    } while (tmp != 0);

    if (count === 10 && actualNum > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//console.log(checkNumber("2263300000"));

/******************************************************************************
                                getNumberInput()

  Continuously ask user to enter a phone number until a valid one is entered,
  then return it. Use checkNumber() to validate phone numbers.
*******************************************************************************/
function getNumberInput() {
  let pH = READLINE.question("Enter in a phone number! ");

  while (checkNumber(pH) == false) {
    pH = READLINE.question("Enter in a VALID phone number! ");
  }
  return pH;
}

//console.log(getNumberInput());

/******************************************************************************
                                checkEmail()

  Check if an email address is valid, according to the following criteria:
  -Email addresses are optional, so they can be length 0. However, if the
   length of an email address is greater than 0, it needs to be validated,
   so the criteria below apply.
  -Email addresses must contain just one "@" symbol, but not as the first
   character.
  -Email addresses must end in ".com", ".org", ".net", or ".edu".

  Return true if an email address is valid, and false otherwise.
*******************************************************************************/

function checkEmail(email) {
  let i;
  let catcher = 0;
  let catcher2 = 0;
  if (email.length > 0) {
    for (i = 0; i < (email.length); i++) {
      if (email[0] == '@') {
        catcher = 0;
        i = email.length;
      } else {
        if (email[i] == '@') {
          catcher++;
        }
      }
    }
    if (catcher > 1) {
      catcher = 0;
    }
    for (i = (email.length - 4); i < email.length; i++) {
      if (i === (email.length - 4) && email[i] == '.') {
        catcher2++;
      } else if (i === email.length - 3 &&
        (email[i] == 'c' || email[i] == 'o' || email[i] == 'n' || email[i] == 'e')) {
          catcher2++;
      } else if (i === email.length - 2 &&
        (email[i] == 'o' || email[i] == 'r' || email[i] == 'e' || email[i] == 'd')) {
          catcher2++;
      } else if (i == email.length - 1 &&
        (email[i] == 'm' || email[i] == 'g' || email[i])) {
          catcher2++;
      } else {
        catcher2 = 0;
        i = email.length;
      }
    }
  }
  if (email.length < 0) {
    return true;
  } else {
    if (catcher && catcher2) {
      return true;
    } else {
      return false;
    }
  }
}

//console.log(checkEmail("animefanlovely@askaway.com"));

/******************************************************************************
                                getEmailInput()

  Continuously ask user to enter an email address until a valid one is entered,
  then return it. Use checkEmail() to validate email addresses.
*******************************************************************************/

function getEmailInput() {
  let email = READLINE.question("Dear user, kindly enter an email address: ");
  while (checkEmail(email) == false) {
    email = READLINE.question("Dear user, kindly enter a VALID email address: ");
  }

  return email;
}

//console.log(getEmailInput());

/******************************************************************************
                                compareContacts()

  Compares the names of two contacts, a and b, to determine their alphabetical
  order. If a's name comes before b's, return -1. If a's name comes after b's,
  return 1. If a's name does not come before or after b's, then they must share
  the same name, in which case you should return 0.

  To compare strings alphabetically, you can use comparison operators, just as
  you would with numbers. For example, "c" < "d" is true, while "c" > "d" is
  false.

  Note that a and b are passed in as objects, so you should access their name
  properties before comparing. Also before comparing, you should convert both
  names to lowercase or uppercase. This will make the comparison ignore
  capitalization, which is important for comparing strings alphabetically.
*******************************************************************************/

function compareContacts(a, b) {
  let lowercaseA = a.toLowerCase();
  let lowercaseB = b.toLowerCase();
  let compareLength;
  let catcher = 0;
  let i;
  let returnVar;

  lowercaseA = lowercaseA.replace(/\s/g, '');
  lowercaseB = lowercaseB.replace(/\s/g, '');
  console.log(lowercaseA);
  console.log(lowercaseB);

  if (a.length > b.length) {
    compareLength = b.length;
  } else {
    compareLength = a.length;
  }

  if (lowercaseA[0] < lowercaseB[0]) {
    returnVar = 1;
  } else if (lowercaseA[0] > lowercaseB[0]) {
    returnVar = -1;
  } else {
    returnVar = 0;
  }

  if (returnVar == 0) {
    
  }
}


compareContacts("Hi Guys", "Dab On It");

/******************************************************************************
                                addContact()

  Ask user to enter values for a new contact. Then create a contact object
  with those values, add the object to the global contacts array, and sort
  the array according to the compareContacts() function. Finally, let the user
  know that the contact was added successfully.

  You should get the user's input for name, number, and email by calling the
  getNameInput(), getNumberInput(), and getEmailInput() functions, respectively.
  However, notes are optional and don't need to be validated.

  Sort the contacts array alphabetically by contact name using this code:
    contacts.sort(compareContacts)
*******************************************************************************/

function addContact() {

}

/******************************************************************************
                                getContactIndex()

  Seach the global contacts array for the first instance of a contact whose
  name matches contactName. Return the index of the first matching contact.
  If no match is found, return -1.

  Be sure to convert both comparison strings to lowercase or uppercase before
  comparing, to account for possible capitalization inconsistencies.
*******************************************************************************/

function getContactIndex(contactName) {

}

/******************************************************************************
                                removeContact()

  Attempt to remove a contact from the global contacts array.

  Ask the user to enter the contact's name, and search the contacts array for
  that contact by name (you have functions for both of these actions).

  If the contact isn't in the contact array, let the user know that you couldn't
  find it. Otherwise, remove the contact, and let the user know that this was
  done successfully.
*******************************************************************************/

function removeContact() {

}

/******************************************************************************
                                displayUpdateMenu()

  Display the contact update menu, with the following choices:
   1) Name
   2) Phone Number
   3) Email Address
   4) Notes
   0) Return to Main Menu

  Based on what the user chooses, update the appropriate value for the contact
  located at contactIndex. Call the necessary functions to get input for
  name, number, and email, while notes do not need any special validation. Also
  be sure to allow the user to quit this menu and return to the main menu
  by entering "0" (or anything else you want).

  Don't forget to re-sort the contacts array if the user updates any contact's
  name!
*******************************************************************************/

function displayUpdateMenu(contactIndex) {

}

/******************************************************************************
                                updateContact()

  Ask the user to enter the contact's name, and search the contacts array for
  that contact by name (you have functions for both of these actions).

  If the contact isn't in the contact array, let the user know that you couldn't
  find it. Otherwise, call displayContactMenu() with the contact's index passed
  to it as an argument.
*******************************************************************************/

function updateContact() {

}

/******************************************************************************
                                printContactInfo()

  Print current values for all four properties of a given contact. You'll first
  need to get the index of the contact based on contactName, which is passed in
  as input.
*******************************************************************************/

function printContactInfo(contactName) {

}

/******************************************************************************
                                searchContact()

  Print the info of all contacts whose names start with what the user types in.

  Ask the user to enter a name, and search the contacts list for any names that
  start with whatever string user typed in. If there are any matches, print them
  all. Otherwise let the user know that no matches were found.

  For example, let's say there is a contact named "Barack" and another named
  "Barry". If the user searches for "ba", both contacts' info should be printed.
*******************************************************************************/

function searchContact() {

}

/******************************************************************************
                                printAllContacts()

  Print the info of every contact in the contacts array. You already have a
  function that prints the info for one contact, so this should be very
  straightforward.
*******************************************************************************/

function printAllContacts() {

}

/******************************************************************************
                                displayMainMenu()

  Display the main menu, with the following choices:
   1) Add Contact
   2) Remove Contact
   3) Update Contact
   4) Search Contact
   5) Print All Contacts
   0) Quit

  Based on what the user chooses, call the appropriate function. However, if
  the user chooses options 2 through 5 and they don't have any contacts, let
  them know and do nothing else (no point in wasting their time).

  If the user enters "0" (or anything else you want), set quit to true, which
  will prevent this function from running again in the run() loop.
*******************************************************************************/

function displayMainMenu() {

}

/******************************************************************************
                                run()

  This is the "main" function that runs the entire program. Here's what it needs
  to do, in order:
    1) Print a greeting.
    2) Setup global variables.
    3) While the global variable quit is set to false, display the main menu in
       an endless loop.
    4) Outside of the loop, print a goodbye message.
*******************************************************************************/

function run() {

}

// Run the program!
run();
