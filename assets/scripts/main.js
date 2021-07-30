// constants and variables
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
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
  // playerSection = playerSection.toLowerCase();
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


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSection = button.textContent;
    computerSection = computerPlay();
    let para = document.createElement('p');
    para.textContent = playRound(playerSection, computerSection);
    body.appendChild(para);
    game(para);
  });
});

// buttons.removeEventListner('click', game);
function game(para) {
  let winner = document.createElement('h3');
  if (para.textContent.substr(4, 1) === 'W') {
    ++playerWon;
  } else if (para.textContent.substr(4, 1) === 'L') {
    ++computerWon;
  }
  if (playerWon === 5) {
    winner.textContent = 'Congratulations! You won the Game.'
    // button.removeEventListener('click', game, false);
  } else if (computerWon === 5) {
    winner.textContent = 'OOPS! you Lost the Game.'
    // button.removeEventListener('click', game, false);
  }
  let player = document.querySelector('.playerscore');
  let computer = document.querySelector('.computerscore');
  player.textContent = playerWon;
  computer.textContent = computerWon;
  body.appendChild(winner);
  // console.log('tarak');
}