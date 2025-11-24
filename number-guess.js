/* 
A secret number between 1 & 10
We have to predict it within 4 chances
*/

const secretNumber = 8;

const totalChance = 4;

const guesses = [8, 5, 7, 2];

for(let i = 0; i < totalChance; i++) {
  let userGuess = guesses[i];
  console.log(`Your guess is ${userGuess}`);
  /* 
  If the guess is correct -> console the guess
  if guess is higher than secret -> console it
  if guess is lower than secret -> console it
  */
  if(userGuess === secretNumber) {
    console.log('Correct guess');
    return;
    // break;
  } else if(userGuess > secretNumber) {
    console.log('Your guess is higher than the number');
  } else if(userGuess < secretNumber) {
    console.log('Your guess is lower than the number');
  }

  if(i === totalChance - 1) {
    console.log('Your chance is over');
  }
}