function greetings(){
    console.log("Welcome to Rock Papper Scissor Game!");
}

/*This function generate random results: rock, papper, scissor. for the computer player */
function computerPlay(){
    
}

/*Display result between player and computer */
function gameResult(playerSelection, computerSelection){
    console.log(matchResult + playerSelection + " beats " + computerSelection);
    console.log(matchResult + computerSelection + " beats " + playerSelection);
}
