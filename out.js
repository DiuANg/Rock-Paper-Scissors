console.log("get ready! Rock, paper or scissors?")
let message;
// ctr-/ to comment
// let variables userScore and computerScore =0
let userScore=0;
let computerScore=0;
// create variables (testing feitj)


computerChoice = "PAPER";


// get input from user store it in variable userChoice (ALL UPPERCASE)
function getUserChoice() {
let userChoice = prompt("Rock, paper or scissors?",);
return userChoice.toUpperCase();
}
// function for computer's choice, store it in computerChoice


// Win-lose logic 1 round
//    if userChoice the same as computerChoice: log "It's a tie".
//    else 
//       computerChoice is "ROCK"
//         userChoice is "PAPER": log "1 point to u", userScore add 1
//         userChoice is "SCISSORS": log "1 point to me", computerScore add 1 (...)
function roundLogic(userChoice,computerChoice){
// log computerChoice for user to see(combine to playRound later)
console.log(computerChoice+"!!")
if (userChoice===computerChoice) {
    console.log("It's a tie...");
    console.log("Your Score:"+userScore);
    console.log("My Score:"+computerScore);
} else if (computerChoice==="ROCK") {
    message= userChoice==="PAPER"?  "1 point to u" : "1 point to me";
    console.log(message);
    if (userChoice==="PAPER") {
        userScore+=1;
    } else {
        computerScore+=1;
    }
    console.log("Your Score:"+userScore);
    console.log("My Score:"+computerScore);
} else if (computerChoice==="PAPER") {
    message= userChoice==="SCISSORS"?  "1 point to u" : "1 point to me";
    console.log(message);
    if (userChoice==="SCISSORS") {
        userScore+=1;
    } else {
        computerScore+=1;
    }
    console.log("Your Score:"+userScore);
    console.log("My Score:"+computerScore);
} else if (computerChoice==="SCISSORS") {
    message= userChoice==="ROCK"?  "1 point to u" : "1 point to me";
    console.log(message);
    if (userChoice==="ROCK") {
        userScore+=1;
    } else {
        computerScore+=1;
    }
    console.log("Your Score:"+userScore);
    console.log("My Score:"+computerScore);
}
}
// combine into one round

// combine all logic into 1
function playGame() {
    userChoice=getUserChoice();
    roundLogic(userChoice,computerChoice);
    userChoice=getUserChoice();
    roundLogic(userChoice,computerChoice);
    userChoice=getUserChoice();
    roundLogic(userChoice,computerChoice);
    userChoice=getUserChoice();
    roundLogic(userChoice,computerChoice);
    userChoice=getUserChoice();
    roundLogic(userChoice,computerChoice);
    message= userScore>computerScore? "YOU WON :))" :
             userScore==computerScore? "TIE!!":
             "YOU LOST :((";
    console.log(message);
}
// run the game
playGame();