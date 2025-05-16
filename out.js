console.log("get ready! Rock, paper or scissors?")
let message;
// ctr-/ to comment
// create variables 


computerChoice = "ROCK";


// get input from user store it in variable userChoice (ALL UPPERCASE)
let userChoice = prompt("Rock, paper or scissors?",);
userChoice = userChoice.toUpperCase();
// function for computer's choice, store it in computerChoice
// let variables userScore and computerScore =0
let userScore=0;
let computerScore=0;
// compare userChoice and computerChoice
//    if userChoice the same as computerChoice: log "It's a tie".
//    else 
//      switch computerChoice is "ROCK"
//         userChoice is "PAPER": log "1 point to u", userScore add 1. break;
//         userChoice is "SCISSORS": log "1 point to me", computerScore add 1. break;

if (userChoice===computerChoice) {
    console.log("It's a tie.");
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