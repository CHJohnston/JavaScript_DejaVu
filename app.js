// Exercise Deja Vu:

// Basic Logic without a function -- Three gusses allowed
const guessNum = 32;
let wrongNum = true;

for (var i = 1; i <= 3 && wrongNum; i++) {
  let user_Input = window.prompt(
    "Guess another number between 1 and 100: You have a total of three attempts!"
  );
  if (user_Input < guessNum) {
    alert("Too low!");
  } else if (user_Input > guessNum) {
    alert("Too high!");
  } else if (user_Input == guessNum) {
    alert("Congratulations. You guessed correctly!");
    wrongNum = false;
  }
}
if (wrongNum) {
  alert("Sorry -- No more attempts available!");
}

// Rewrite logic using a function
// Allow the user to decide to play - if so they can enter the number of attempts

function guessGame(attempts) {
  //const guessNum2 = 65;  // Using my number
  let guessNum2 = Math.floor(Math.random() * 100) + 1; // Using a random number
  console.log("The guessNum2 is", guessNum2);

  wrongNum = true;
  for (var i = 1; i <= attempts && wrongNum; i++) {
    let user_Input = window.prompt(
      `Guess a number between 1 and 100: Afterwards You will have ${
        attempts - i
      } attempts remaining!`
    );
    if (user_Input < guessNum2) {
      alert("Too Low!");
    } else if (user_Input > guessNum2) {
      alert("Too High!");
    } else if (user_Input == guessNum2) {
      alert("Congratulations. You guessed correctly!");
      wrongNum = false;
      return;
    }
  }
  if (wrongNum) {
    alert("Sorry -- No more attempts available!");
    return;
  }
}

let playGame = window.prompt(
  `Would you like to play a game to guess my favorite number?(Y/N)`
);

if (playGame.toUpperCase() == "Y") {
  let user_attempts = window.prompt("How many attempts do you want?");
  guessGame(user_attempts);
  alert("Thank you for playing!");
}
alert("Have a Great Day!");
