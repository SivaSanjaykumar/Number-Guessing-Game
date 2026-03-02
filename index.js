const readline = require("readline-sync");

console.log("Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100.");


function startGame(){
    const number = Math.floor(Math.random()*100)+1;

    console.log("\nPlease Select the Difficulty Level");
    console.log("1. Easy (10 chances)");
    console.log("2. Medium (5 chances)");
    console.log("3. Hard (3 chances)");

    const choice = readline.question("Enter Your Choice:");

    let chances;

    switch(choice){
        case "1":
            chances=10;
            console.log("\n Congratulations!! Your Choosing Easy Level.");
            break;

        case "2":
            chances=5;
            console.log("\n Congratulations!! Your Choosing Medium Level.")
            break;

        case "3":
            chances=3;
            console.log("\n Congratulations!! Your Choosing Hard Level.")
            break;
        
        default:
            console.log("Provide Valid Option and default to Medium Level");
            chances=5;


    }

    console.log("\nLet's Start the Game...");

    let attempts = 1;
    let guessed = false;

    while(attempts<=chances){
        let guess = parseInt(readline.question("Enter Your Choice:"));

        if(guess===number){
            console.log("Guessed Correctly!!!");
            guessed=true;
            break;
        }
        else if(guess>number){
            console.log(`Incorrect!!! the number is less than the ${guess}`);

        }
        else{
            console.log(`Incorrect!!! the number is greater than the ${guess}`);
        }
        console.log(`Remaining Attempts:${chances-attempts}\n`)
        attempts++;

  

    }
    if(!guessed){
        console.log(`Game Over!!!,The Correct Number was ${number}`);
        
    }
}

function playAgain(){
    while(true){
        startGame();
        
        const again = readline.question("\nDo You Want To Play Again?(Yes/No)");

        if(again.toLowerCase()!=="yes"){
            console.log("Thanks For Playing");
            break;
        }
    }
}
playAgain();