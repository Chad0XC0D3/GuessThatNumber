
let restartGame = true;
const enterNumber = `Please enter a number greater then 0`;
// for restarting game
let rangeNum;
// For starting num that users will guess
let randomNum;
// the storge of user attemps
let attempts;
// For the user guess
let guess;
// For playing again
let playAgain;
// Starting alert
restartGame = true;
alert(`Welcome please start game!`);

while (restartGame) {
    rangeNum = parseInt(prompt(`please enter a max number`));
    
    ;

    while (!rangeNum || rangeNum < 1) {
        randomNum = parseInt(prompt('enter num '));

        
    }

    randomNum = Math.floor(Math.random() * rangeNum) + 1;
    
    attempts = parseInt(prompt(`Please enter max attempts`));

    while (!attempts || attempts < 1 || attempts > randomNum) {
        attempts = parseInt(prompt(`Please enter a number 1 to ${rangeNum}`))
    }

    guess = prompt(`enter a guess from 1 to ${randomNum}. You have ${attempts} attempts`);

    while (true) {
        if(guess === "Mellon"){
            alert(`The number is ${randomNum}`);
            guess = prompt(`Please Enter a guess from 1 to ${randomNum} you have ${attempts} attempts`);
        }
        guess = parseInt(guess);

        while (!guess || guess < 1 || guess > rangeNum) {
            guess = parseInt(prompt(`please enter a number from 1 to ${randomNum}`));

        }
        attempts--;

        if (guess === randomNum){
            alert(`GUESS THE RIGHT NUMBER ${randomNum}`);

            break;
        } else if(attempts === 0){
            alert(`Sorry, but you have run out of attempts(The number was ${randomNum})`);
            break;
        } else if(guess < randomNum){
            guess = prompt(`Too low. You have ${attempts}`);

        } else{
            guess = prompt(`Too high. You have ${attempts} attempts`);
        }
    }
    playAgain = prompt(`Would you like to lay again? Y for Yes, n for No`);

    while (true) {
        if (playAgain.toUpperCase() === 'N') {
            alert(`Thanks for playing`);
            restartGame = false;
            break;
        } else if(playAgain.toUpperCase() === 'Y'){
            restartGame = false;
            break;
        } else {
            playAgain = prompt(`Please enter Y or N`);
        }
    }

}