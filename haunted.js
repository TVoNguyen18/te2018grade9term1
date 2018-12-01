const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  fanism: 0,
  rush: 0,
  item: "magic anime portal",
};

// console.log();
// console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
// player.name = READLINE.question("What is your name?: ");
// console.log(`${player.name} stands in front of a spooky haunted house.`);
// console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
// let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
// if(enterHouse == "y" || enterHouse == "yes") {
//   player.courage++;
//   console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
//   // continue the story
//
// } else {
//   player.intellect++;
//   console.log(`${player.name} decides not to open the door. However...`);
//   // continue the story
//
// }
// console.log("Thanks for playing!");

player.name = READLINE.question("What is your name? ");
console.log("A magical anime portal has appeared in your hands.");
console.log("Okay. " + player.name + ", choose which anime to teleport to!");
let playerAnswer = READLINE.question("Do you choose The Devil is a Part-Timer! (1) or Black Butler (2)? ");

if (playerAnswer == 1) {
  console.log(player.name + "chooses The Devil is a Part Timer!");
  console.log("You meet Maou Sadao!");
  playerAnswer = READLINE.question("Do you scream your head off (1), or do you challenge him to a fight? (2)? ");

  if (playerAnswer == 1) {
    player.fanism++;
    console.log("He is politely weirded out by your enthusiasm and invites you to his fast food restaurant joint");
    playerAnswer = READLINE.question("Do you get the black pepper fries (1) or just sit there (2)? ");

    if (playerAnswer == 1) {
      console.log("The fryer broke...");
      playerAnswer = READLINE.question("Do you get Maou to fix it with magic (1) or get coffee instead (2)? ");

      if (playerAnswer == 1) {
        player.rush++;
        console.log("He fixed it! But it will be your fault if he has no magic to fight his enemies...");
      } else if (playerAnswer == 2) {
        player.fanism++;
        console.log("The coffee was pretty good...");
      } else {
        console.log("You are not doing this right...");
      }
    } else if (playerAnswer == 2) {
      playerAnswer = READLINE.question("You have to order! Iced coffee (1) or apple pie (2)? ");
      if (playerAnswer == 1) {
        console.log("The coffee was pretty good...");
      } else if (playerAnswer == 2) {
        console.log("As Maou prepared it, you think to yourself, 'Why would MgRonald's have apple pie?'");
      } else {
        console.log("You are not doing this right...");
      }
    } else {
      console.log("You are not doing this right!");
    }
  } else if (playerAnswer == 2) {
    player.rush++;
    console.log("You hold the stolen sword Better Half to his face.");
    playerAnswer = READLINE.question("Do you fight (1) or chicken out (2)? ");

    if (playerAnswer == 1) {
      player.rush++;
      console.log("Darn! The Demon Generals has arrived to fight you!");
    } else if (playerAnswer == 2) {
      player.fanism++;
      console.log("You got trounced for being ridiculous...");
    } else {
      console.log("You are not doing this right!");
    }
  } else {
    console.log("You are not doing this right!");
  }
} else if (playerAnswer == 2) {
  console.log(player.name + " chooses Black Butler!");
  playerAnswer = READLINE.question("You meet Ciel Phantomhive. Do you scream (1) or be haughty (2)? ");

  if (playerAnswer == 1) {
    player.fanism++;
    console.log("You get kicked out of the house by Ciel.");
  } else if (playerAnswer == 2) {
    player.rush++;
    console.log("Ciel gets angry at you and Sebastian appears.")
    playerAnswer = READLINE.question("Do you scream (1) or stomp away (2)? ");

    if (playerAnswer == 1) {
      player.fanism++;
      console.log("Sebastian gets perplexed, and life is awkward...");
    } else if (playerAnswer == 2) {
      player.rush++;
      console.log("WHY WOULD YOU?????");
    } else {
      console.log("You are not doing this right...");
    }
  } else {
    console.log("You are not doing this right...");
  }

} else {
  console.log("You are not doing this right!");
}

console.log("The portal malfunctions and you return to real life, where a zombie apocalypse is happening all around you!");
console.log("Here is your score: ");

console.log(`Name: ${player.name}
  Fanism: ${player.fanism}
  Rush: ${player.rush}
  Item: ${player.item}`);
