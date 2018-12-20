const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  item: "beans",
};

player.name = READLINE.question("What is your name? ");
let playerAnswer = READLINE.question("You are given magical beans. Do you grow them (1) or store them (2)? ");

while (playerAnswer != 1 && playerAnswer != 2) {
  playerAnswer = READLINE.question("You have to choose 1 or 2! ");
}

if (playerAnswer == 1) {
  console.log(player.name + " decides to grow a bean!");
  console.log("A beanstalk appears.");
  playerAnswer = READLINE.question("Do you climb it (1), or do you just leave it there (2)? ");
  while (playerAnswer != 1 && playerAnswer != 2) {
    playerAnswer = READLINE.question("You have to choose 1 or 2! ");
  }
  if (playerAnswer == 1) {
    console.log("A castle appears!");
    playerAnswer = READLINE.question("Do you enter the castle (1) or climb back down (2)? ");
    while (playerAnswer != 1 && playerAnswer != 2) {
      playerAnswer = READLINE.question("You have to choose 1 or 2! ");
    }

    if (playerAnswer == 1) {
      console.log("You are inside the castle.");
      playerAnswer = READLINE.question("Do you steal some gold coins (1) or steal the gold-egg-laying chicken (2)? ");
      while (playerAnswer != 1 && playerAnswer != 2) {
        playerAnswer = READLINE.question("You have to choose 1 or 2! ");
      }
      if (playerAnswer == 1) {
        console.log("You escape with the coins, because you weren't too greedy.");
      } else if (playerAnswer == 2) {
        console.log("Your greediness awoke the giant!");
        playerAnswer = READLINE.question("Do you leave the chicken and run (1) or run with the chicken (2)? ");
        while (playerAnswer != 1 && playerAnswer != 2) {
          playerAnswer = READLINE.question("You have to choose 1 or 2! ");
        }
        if (playerAnswer == 1) {
          console.log("NEVER DO THAT AGAIN.");
        } else if (playerAnswer == 2) {
          console.log("You are caught and eaten by the giant. Hopefully, you will not be so greedy in your next life!");
        } else {
          console.log("You are not doing this right...");
        }
      } else {
        console.log("You are not doing this right...");
      }
    } else if (playerAnswer == 2) {
      playerAnswer = READLINE.question("Do you leave the beanstalk alone (1) or destroy it (2)? ");
      while (playerAnswer != 1 && playerAnswer != 2) {
        playerAnswer = READLINE.question("You have to choose 1 or 2! ");
      }
      if (playerAnswer == 1) {
        console.log("It is now a constant eyesore.");
      } else if (playerAnswer == 2) {
        console.log("You created an earthquake of 6.5 on the Ritcher scale as the beanstalk topples over. Good thing that you live in complete isolation!");
      } else {
        console.log("You are not doing this right...");
      }
    } else {
      console.log("You are not doing this right!");
    }
  } else if (playerAnswer == 2) {
    console.log("The beanstalk is there, until the giant climbs down the beanstalk!");
    playerAnswer = READLINE.question("Do you hear him out (1) or instantly murder him with no warning (2)? ");
    while (playerAnswer != 1 && playerAnswer != 2) {
      playerAnswer = READLINE.question("You have to choose 1 or 2! ");
    }
    if (playerAnswer == 1) {
      console.log("Turns out that the giant is but a simple man, and the two of you formed an unlikely friendship, proving that differences should not deter friendship.");
    } else if (playerAnswer == 2) {
      console.log("Because you are a reckless person who does not care for those different from you, you murdered a gigantic yet simple man for climbing down your beanstalk.");
    } else {
      console.log("You are not doing this right!");
    }
  } else {
    console.log("You are not doing this right!");
  }
} else if (playerAnswer == 2) {
  console.log(player.name + " chooses to store the beans!");
  playerAnswer = READLINE.question("You see a young man and his cow on the road. Do you talk to him (1) or ignore him (2)? ");
  while (playerAnswer != 1 && playerAnswer != 2) {
    playerAnswer = READLINE.question("You have to choose 1 or 2! ");
  }
  if (playerAnswer == 1) {
    console.log("He is a simple boy with a desire to sell his cow.");
    playerAnswer = READLINE.question("Do you give him the beans for free so his poor mother makes a profit (1), or just trade your beans for the cow (2)? ");
    while (playerAnswer != 1 && playerAnswer != 2) {
      playerAnswer = READLINE.question("You have to choose 1 or 2! ");
    }
    if (playerAnswer == 1) {
      console.log("You are truly a great soul, and you watch as the young man and his cow heads home with the beans that can improve his fate.");
    } else if (playerAnswer == 2) {
      console.log("You are a lesser soul, but you try to make up for it by convincing yourself that you have given the boy the beans to greatness.");
    } else {
      console.log("You are not doing this right...");
    }
  } else if (playerAnswer == 2) {
    console.log("You have prevented the great story 'Jack and the Beanstalk'");
  } else {
    console.log("You are not doing this right...");
  }

} else {
  console.log("You are not doing this right!");
}

console.log("\n\nJACK AND THE BEANSTALK WAS A STORY ABOUT STEALING FROM AND MURDERING PEOPLE DIFFERENT FROM YOU, SPREAD THE MESSAGE. ");
