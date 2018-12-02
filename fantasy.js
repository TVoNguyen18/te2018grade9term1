// Author: FirstName LastName
const READLINE = require("readline-sync");

// global variables
let firstName;
let lastName;
let momMaidenName;
let cityBorn;
let dreamCar;
let street;
let fantasyName;

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName(fName, lName) {
  let lowercaseLName = lName.toLowerCase();
  return fName[0] + fName[1] + fName[2] +
    lowercaseLName[0] + lowercaseLName[1];
}

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName(momMName, cityBornIn) {
  let lCCityBornIn = cityBornIn.toLowerCase();
  return momMName[0] + momMName[1] +lCCityBornIn[0] +
    lCCityBornIn[1] + lCCityBornIn[2];
}

/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function reverseLNString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  var newLN = joinArray[0].toUpperCase() + joinArray.slice(1);
  return newLN;
}

function getTitle(lName, dCModel) {
  var newDCModel = dCModel.toLowerCase();
  var reverseName = reverseLNString(lName);
  return reverseName[0] + reverseName[1] +
    reverseName[2] + newDCModel;
}

/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific(title, streetName) {
  return title + " of " + streetName;
}

/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run(firstName, lastName, momMaidenName, cityBorn, dreamCar, street) {
  firstName = READLINE.question("First name? ");
  lastName = READLINE.question("Last name? ");
  momMaidenName = READLINE.question("Mom's maiden name? ");
  cityBorn = READLINE.question("City born in? ");
  dreamCar = READLINE.question("Dream car? ");
  street = READLINE.question("Street? ");
  let resultFN = getNewFirstName(firstName, lastName);
  let resultLN = getNewLastName(momMaidenName, cityBorn);
  let resultTitle = getTitle(lastName, dreamCar);
  let resultHonorific = getHonorific(resultTitle, street);
  console.log(resultFN + " " + resultLN + ", " + resultHonorific);
}

// Run the program!
run();
