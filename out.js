console.log("get ready! Rock, paper or scissors?")
let message;
// ctr-/ to comment
// let variables humanScore and computerScore =0
let humanScore=0;
let computerScore=0;
// get input from user to store it in variable humanChoice (ALL UPPERCASE)
function getHumanChoice() {
let humanChoice = prompt("Rock, paper or scissors?",);
return humanChoice.toUpperCase();
}
// function to randoming computer's choice to store it in computerChoice
function getComputerChoice() {
   random=Math.floor(Math.random()*9)+1;
   return random<=3?"ROCK":
          random<=6?"PAPER":
          "SCISSORS";
}
// Win-lose logic 1 round
//    if humanChoice the same as computerChoice: log "It's a tie".
//    else 
//       computerChoice is "ROCK"
//         humanChoice is "PAPER": log "1 point to u", humanScore add 1
//         humanChoice is "SCISSORS": log "1 point to me", computerScore add 1 (...)
function roundLogic(humanChoice,computerChoice){
if (humanChoice===computerChoice) {
    console.log("It's a tie...");
    console.log("Your Score:"+humanScore);
    console.log("My Score:"+computerScore);
} else if (computerChoice==="ROCK") {
    message= humanChoice==="PAPER"?  "1 point to u" : "1 point to me";
    console.log(message);
    if (humanChoice==="PAPER") {
        humanScore+=1;
    } else {
        computerScore+=1;
    }
    console.log("Your Score:"+humanScore);
    console.log("My Score:"+computerScore);
} else if (computerChoice==="PAPER") {
    message= humanChoice==="SCISSORS"?  "1 point to u" : "1 point to me";
    console.log(message);
    if (humanChoice==="SCISSORS") {
        humanScore+=1;
    } else {
        computerScore+=1;
    }
    console.log("Your Score:"+humanScore);
    console.log("My Score:"+computerScore);
} else if (computerChoice==="SCISSORS") {
    message= humanChoice==="ROCK"?  "1 point to u" : "1 point to me";
    console.log(message);
    if (humanChoice==="ROCK") {
        humanScore+=1;
    } else {
        computerScore+=1;
    }
    console.log("Your Score:"+humanScore);
    console.log("My Score:"+computerScore);
}
}
// combine into one round
function playRound(){
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    // log computerChoice for user to see(combine to playRound later)
    console.log(computerChoice+"!!")
    roundLogic(humanChoice,computerChoice);
}
// combine all logic into 1
function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    message= humanScore>computerScore? "YOU WON :))" :
             humanScore==computerScore? "TIE!!":
             "YOU LOST :((";
    console.log(message);
}
// run the game
playGame();