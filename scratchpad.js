// Use this script as a sandbox to test things!
const READLINE = require("READLINE-sync");

let wolf = {
  name: "Coach Wolf",
  number: "555 555 5551",
  email: "wolf@csedge.org"
}

let zakiya = {
  name: "Coach Zakiya",
  number: "555 555 5552",
  email: "zakiya@csedge.org"
}

let caryn = {
  name: "Coach Caryn",
  number: "555 555 5553",
  email: "caryn@csedge.org"
}

let chike = {
  name: "Coach Chike",
  number: "555 555 5554",
  email: "chike@csedge.org"
}

let maria = {
  name: "Coach Maria",
  number: "555 555 5555",
  email: "maria@csedge.org"
}

let contacts = [wolf, zakiya, caryn, chike, maria];

for (let i = 0; i < contacts.length; i++) {
  // console.log(contacts[i]);
  // console.log(contacts[i].name);
  // if ((i + 1) < contacts.length) {
  //   console.log(contacts[i + 1].number);
  // }
  //console.log(contacts[i].name);
  if (contacts[i].name == "Coach Zakiya" || contacts[i].name == "Coach Maria") {
    console.log(contacts[i].name);
    console.log(contacts[i].number);
    //contacts[i].number = READLINE.question("Give us a new phone number! ");
    contacts[i].number = "000 000 0000";
    console.log(contacts[i].number);
  }
}
