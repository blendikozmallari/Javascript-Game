function computerPlay() {
    const choices = [ 'rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function gameRound(playerSelection, computerSelection){
    if(playerSelection===computerSelection){
        return "Tie";
    }
    else if(playerSelection==='paper'&&computerSelection==='rock'){
        return "You Win! Paper beats rock.";
    }
    else if(playerSelection==='paper'&&computerSelection==='scissors'){
        return "You Lose! Scissors beat paper.";
    }
    else if(playerSelection==='rock'&&computerSelection==='paper'){
        return "You Lose! Paper beats rock.";
    }
    else if(playerSelection==='rock'&&computerSelection==='scissors'){
        return "You Win! Rock beats scissors.";
    }
    else if(playerSelection==='scissors'&&computerSelection==='paper'){
        return "You Win! Scissors beat paper.";
    }
    else if(playerSelection==='scissors'&&computerSelection==='rock'){
        return "You Lose! Rock beats scissors.";
    }
}

function rockPaperScissors(){
    let playerSelection, computerSelection;
    const choices= [ 'rock', 'paper', 'scissors'];
    let playerScore=0, computerScore=0;
    for(let i=0;i<3;i++){
        do{
            playerSelection = prompt("Choose rock, paper or scissors! ");
            playerSelection=playerSelection.toLowerCase();
        }while (!choices.includes(playerSelection));
    computerSelection = computerPlay();
    let result = gameRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Win")) {
      playerScore += 1;
    } else if (result.includes("Lose")) {
      computerScore += 1;
    }
  }
  if (playerScore === computerScore) {
    console.log("Tie!");
  } else if (playerScore < computerScore) {
    console.log("You lost! The computer beat you.");
  } else {
    console.log("You Won! You beat the computer.");
  }
}