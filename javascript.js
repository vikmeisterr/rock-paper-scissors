function getComputerChoice(){
    let computerChoice = Math.random()

        if (computerChoice<0.34){
            computerChoice = "rock";
        }
        else if (computerChoice<=0.67){
            computerChoice = "paper";
        }
        else{
            
            computerChoice = "scissors";
        }
        return computerChoice;
    
}

function getPlayerChoice(){
    let playerChoice = prompt('Write Rock, Paper or Scissors', ``);
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice == `rock`)
        return playerChoice;
    else if(playerChoice == `paper`)
        return playerChoice;
    else if(playerChoice == `scissors`)
        return playerChoice;
    else
        return false;
    
}
alert(getPlayerChoice());

