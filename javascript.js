//global variables!
let playerWins = 0;
let computerWins = 0;
let draws = 0;

//functions for user and computer input! 
function getPlayerChoice(){
        let playerInput = prompt("Type: Rock, Paper or Scissors:",'')
        let capsPlayerInput = playerInput.toUpperCase();
        return capsPlayerInput;
}
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
            return playerWins++;
        }
        else if (playerSelection == "ROCK" && computerSelection == "PAPER" ||
        playerSelection == "PAPER" && computerSelection == "SCISSORS"||
        playerSelection == "SCISSORS" && computerSelection == "ROCK")
        {   
            return computerWins++;
        }
        else if (playerSelection == computerSelection){
            return draws++;
        }
        else {
            return;
        }
}
//function for running game code!
function game(){
    
        for(let i=0; i<=20; i++){
        
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
        console.log("W: "+playerWins+" L: "+computerWins+" N: "+draws);
            if(computerWins == 5){
            
                alert("You Lose");
                break;
            }
            else if (playerWins == 5){
        
                alert("You Win!");
                break;
            }
            else if (draws == 5){
            
                alert("It's a Draw!");
                break;
            }
            else if (i == 20){
                alert("You played too many times! Program end!")
            }
            else{
            }
        };
}
//calling the function!
game();



