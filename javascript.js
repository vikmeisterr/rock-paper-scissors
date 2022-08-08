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

function playerChoice(){
    let choice = prompt('write rock, paper or scissors', ``);
    if (choice == `rock`)
        return true;
    else if(choice == `paper`)
        return true;
    else if(choice == `scissors`)
        return true;
    else
        return false;
    
}
alert(playerChoice());

