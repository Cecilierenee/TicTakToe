const square = document.querySelectorAll('.square');
const restartBtn = document.querySelector('#restart-game');
const gameStatus = document.querySelector('status');

square.addEventListener('click', boxClicked);

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
    if (spaces[3] === currentPlayer && spaces[6] ==== currentPlayer) {
        gameStatus.innerText =`${currentPlayer} Wins!`;
        return true;
    }

    }
}






















//Code Graveyard

/*for (let i = 0; i < 9; i++) {
    let gameBoard = document.createElement('div');
    document.body.append(gameBoard);
    }*/



