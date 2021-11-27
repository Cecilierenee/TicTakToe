const square = document.querySelectorAll('.square');
const restartBtn = document.querySelector('#restart-game');
const gameStatus = document.querySelector('status');

square.addEventListener('click', boxClicked);

const spaces = [];
const pick_circle = 'O';
const pick_x = 'X';
let currentPlayer = pick_circle;

const boxClicked = event => {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

    if (playerWon()) {
        Text.innerText = `${currentPlayer} Won!`;
        restart();
        return;

    if (playerTie()) {
        return;
    }
    currentPlayer = currentPlayer === pick_circle ? pick_x : pick_circle;
    }
    }
};

const playerWon = () => {
    if (spaces[0] === currentPlayer ) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) { gameStatus.innerText = `${currentPlayer} Wins!`;
        return true;
        }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
        gameStatus.innerText =`${currentPlayer} Wins!`;
        return true;}
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
        gameStatus.innerText = `${currentPlayer} Wins!`;
        return true;}
    }
    if (spaces[8] === currentPlayer) {
        if (space[2]=== currentPlayer &&spaces[5] === currentPlayer) {
            gameStatus.innerText =`${currentPlayer} Wins!`;
            return true;
        }
    if (spaces[6] === currentPlayer && space[7] === currentPlayer) {
        gameStatus.innerText =`${currentPlayer} Wins!`;
    }
}
if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
        gameStatus.innerText =`${currentPlayer} Wins!`;
        return true;
    }
    if(spaces[3] ===currentPlayer && space[5] === currentPlayer) {
        gameStatus.innerText =`${currentPlayer} Wins!`;
        return true;
    }
    if (space[2] === currentPlayer && spaces[6] === currentPlayer) {
        gameStatus.innerText =`${currentPlayer} Wins!`;
        return true;
    }
};

const playerTie = () => {
    let tie = 0;
    spaces.forEach((space, i) => {
        if (spaces[i] !== null) tie++;
    });
    if (tie === 9) {
        Text.innerText = `Tie`;
        restartBtn();
    }
};

const restartBtn = () => {
    setTimeout(() => {
        spaces.forEach((space. i) => {
            spaces[i] = null;
        });
        square.forEach((square) => {
            square.innerText ='';
        });

    























//Code Graveyard

/*for (let i = 0; i < 9; i++) {
    let gameBoard = document.createElement('div');
    document.body.append(gameBoard);
    }*/



