const number = Math.floor(Math.random() * 100) + 1;
let guess = 0;
let attempts = 0;
const maxAttempts = 7;

while (attempts < maxAttempts && guess !== number) {
    const input = prompt(`Attempt ${attempts + 1} of ${maxAttempts}: Guess a number between 1 and 100:`);
    
    if (input === null) {
        console.log("Game cancelled by the user.");
        break;
    }
    
    guess = parseInt(input);
    
    if (isNaN(guess)) {
        console.log("Invalid input. Please enter a valid number.");
        continue;
    }
    
    attempts++;
    
    if (guess < number) {
        console.log("Too low! Try again.");
    } else if (guess > number) {
        console.log("Too high! Try again.");
    } else {
        console.log(`Congratulations! You guessed the number ${number} in ${attempts} attempts.`);
    }
}

if (guess !== number && attempts === maxAttempts) {
    console.log(`Sorry, you've used all ${maxAttempts} attempts. The number was ${number}.`);
}
