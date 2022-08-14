
//global variables!
let playerWins = 0;
let computerWins = 0;
let draws = 0;
let playerSelection = '';
//function for computer input! 
function getComputerChoice(){
        var choice = Math.random();
        if (choice < 0.33){
            return "ROCK";
        }
        else if (choice < 0.68)
        {
            return "PAPER";
        }
        else{
            return "SCISSORS";
        }
}
//playing a round of rps!
function playRound(playerSelection, computerSelection){
        if (playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER"||
        playerSelection == "ROCK" && computerSelection == "SCISSORS")
        {
            return ++playerWins;
        }
        else if (playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS"||
        playerSelection == "SCISSORS" && computerSelection == "ROCK")
        {  
            return ++computerWins;
        }
        else if (playerSelection == computerSelection){
            return ++draws;
        }
        else {
            return;
        }
}
//function for running game code!
function fiveRounds(){

    playRound(playerSelection,getComputerChoice());

            if(computerWins == 5){
            
                alert("You Lose");
                btnRock.disabled = true;
                btnPaper.disabled = true;
                btnScissors.disabled = true;
            }
            else if (playerWins == 5){
                alert("You Win!");
                btnRock.disabled = true;
                btnPaper.disabled = true;
                btnScissors.disabled = true;
                
            }
            else if (draws == 5){
                alert("It's a Draw!");
                btnRock.disabled = true;
                btnPaper.disabled = true;
                btnScissors.disabled = true;
        
            }
}
//calling the function!
let btnRock = document.getElementById("btnRock");
let btnPaper = document.getElementById("btnPaper");
let btnScissors = document.getElementById("btnScissors");
let divResults = document.getElementById("results");
let textHere = document.createTextNode('THE SCORE IS: ');
divResults.appendChild(textHere);
let divScore = document.getElementById('score');


btnRock.addEventListener( 'click', function (){
   playerSelection = 'ROCK';
   fiveRounds();
   let score = document.createTextNode(
    "\nPLAYER "+ playerWins +" PC "+ computerWins +" DRAWS "+ draws);
   divScore.appendChild(score);
});
btnPaper.addEventListener( 'click', function (){
    playerSelection = 'PAPER';
    fiveRounds();
    let score = document.createTextNode(
    "\nPLAYER "+ playerWins +" PC "+ computerWins +" DRAWS "+ draws);
    divScore.appendChild(score);
 });
btnScissors.addEventListener( 'click', function (){
    playerSelection = 'SCISSORS';
    fiveRounds();
    let score = document.createTextNode(
    "\nPLAYER "+ playerWins +" PC "+ computerWins +" DRAWS "+ draws);
    divScore.appendChild(score);
 });

