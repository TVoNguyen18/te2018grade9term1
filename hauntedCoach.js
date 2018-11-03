const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();

console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(player.name + " stands in front of a spooky haunted house.");
console.log(player.name + " hears what sounds like screaming coming from inside the house");
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
  console.log("You hear music playing somewhere in the house");
  let decisionAfter  = READLINE.question("Will you find out where the music is (1) or keep exploring the house (2)?");
  if (decisionAfter == 1) {
     console.log("You realize that the music is playing in the bedroom upstairs");
     decisionAfter  = READLINE.question("Will you go into the bedroom (1) or keep exploring the house (2)?");
     if (decisionAfter == 1) {
       console.log("The room is pitch black but there is a cell phone ringing at the doorstep");
       console.log();
       decisionAfter  = READLINE.question("Will you answer the cell phone (1) or wait until it finishes ringing (2)?");
       // more story
     } else if (decisionAfter == 2) {
       console.log("You hear footsteps in another area of the house.");
       console.log();
       decisionAfter  = READLINE.question("Will you run out of the house (1) or try to find out whose footsteps they are (2)?");
       /// more story
     }
  } else if (decisionAfter == 2) {
     console.log("You stumble across a big mirror but you see everything else but your reflection in it.");
     console.log();
     decisionAfter  = READLINE.question("Will you touch the mirror (1) or break the mirror (2)?");
     if (decisionAfter == 1) {
       console.log("You hear a TV turn on somewhere in the house");
       // more story
     } else if (decisionAfter == 2) {
       console.log("You break the mirror with your" + player.weapon + ". When the glass breaks it reveals a hallway.");
       // more story
     }
  }
} else if (enterHouse == "no" || enterHouse == "n") {
  player.intellect++;
  console.log(player.name + " decides not to open the door. However...");
  // continue the story
  console.log("You hear your dog yelling for help in the backyard.");
  decisionAfter  = READLINE.question("Will you go to the backyard (1) or go get your bike to ride home and find help (2)?");
  if (decisionAfter == 1) {
    console.log("There is nothing in the backyard but you found an axe");
    player.weapon2 = "axe";
    decisionAfter  = READLINE.question("Will you go into the house through the backdoor (1) or throw a rock at the window (2)?");
    if (decisionAfter == 1) {
      console.log("The floor cavs in when you walk through the backdoor and now you're in the basement");
      // more story
    } else if (decisionAfter == 2) {
      console.log("A werewolf emerges from the bushes and starts to chase you");
      // more story
    }
  } else if (decisionAfter == 2) {
    console.log("Your bike is broken");
    decisionAfter = READLINE.question("Will you get an Uber (1) or try to fix your bike (2).");
    if (decisionAfter == 1) {
      console.log("There are no Ubers in your area.");
      // more story
    } else if (decisionAfter == 2) {
      console.log("Now you hear your dog inside the house");
      // more story
    }
  }
}
console.log("Thanks for playing!");
