// constants and variables
const Array = ['rock', 'paper', 'scissor'];
let playerSection;
let computerSection;
let playerWon = 0;
let computerWon = 0;

function computerPlay() {
  return Array[random(Array.length)];
}

function random(number) {
  return Math.floor(Math.random() * number);
}

function playRound(playerSection, computerSection) {
  playerSection = playerSection.toLowerCase();
  if (playerSection == computerSection) {
    return 'Game Tie!';
  } else if (playerSection == 'paper' && computerSection == 'rock') {
    return 'You Won! paper wraps rock.';
  } else if (playerSection == 'scissor' && computerSection == 'paper') {
    return 'You Won! scissor cuts paper.';
  } else if (playerSection == 'rock' && computerSection == 'scissor') {
    return 'You Won! rock breaks scissor.';
  } else if (computerSection == 'rock' && playerSection == 'scissor') {
    return 'You Lose! rock breaks scissor.';
  } else if (computerSection == 'paper' && playerSection == 'rock') {
    return 'You Lose! paper wraps rock.';
  } else if (computerSection == 'scissor' && playerSection == 'paper') {
    return 'You Lose! scissor cuts paper.';
  }
}


function game() {
  for (let i = 0; playerWon < 5 && computerWon < 5; i++) {
    playerSection = window.prompt('Your turn :(rock,paper,scissor)');
    computerSection = computerPlay();
    let winner = (playRound(playerSection, computerSection));
    if (winner.substr(4, 1) === 'W') {
      ++playerWon;
    } else if (winner.substr(4, 1) === 'L') {
      ++computerWon;
    }
    // console.log(winner.substr(4, 1))
    // console.log(playerWon);
    // console.log(computerWon);
    console.log(winner);
    if (playerWon == 5) {
      return 'Congratulations! You won the Game.'
    } else if (computerWon == 5) {
      return 'OOPS! you Lost the Game.'
    }
  }
}

console.log(game());