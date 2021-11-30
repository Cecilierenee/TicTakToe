//Declaring Variables and selecting classes
const gameStatus = document.querySelector('.status');

let gameActive = true; //stopping point for game
let currentPlayer = 'X'; //current player

//The empty string in the gameState array track data cells played and if the game is active or not.
let gameState = ["", "", "", "", "", "", "", "", "",];

//Game status Messages
const winnerMessage = () => `${currentPlayer} Won!`;
const tieMessage = () => `Tie Game!`;
const activePlayer = () => `${currentPlayer}'s Turn!`;

//Initializing Game status into html
gameStatus.innerHTML = activePlayer();

//**Game functions**

//Confirming if the game ends in a win or tie. or if the game is still active. Declaring which cell combinations end in a win.
const winnerConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Shows played move and which player turn it is.

function cellPlayed(clickedCell, clickedCellIndex) {
gameState[clickedCellIndex] = currentPlayer; 
clickedCell.innerHTML = currentPlayer;
}
//Changes active Player and the message in the game status section

function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.innerHTML = activePlayer();
}

//Declaring conditionals for results and what messages to display in the game status area.
function gameResults() {
    let roundWon = false;
    for(let i = 0; i <= 7; i++) {
        const winCondition = winnerConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    
    }
if(roundWon) {
    gameStatus.innerHTML = winnerMessage();
    gameActive = false;
    return;
}
let roundTie = !gameState.includes("");
if (roundTie) {
    gameStatus.innerHTML = tieMessage();
    gameActive = false;
    return;
}
playerChange();

}
function cellClicked(clickedCellEvent) {

    const clickedCell = clickedCellEvent.target;

//Gets the data-cell-index attribute and returns a string value.

   const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
cellClicked(clickedCell, clickedCellIndex); 
gameResults();
}
//Setting game back to default settings
function restartGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ["", "", "", "", "", "", "", "", "",];
    gameStatus.innerHTML = activePlayer();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");

}

//Event listener for game cells
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClicked));

//Restart game and event listener
document.querySelector('.reset').addEventListener('click', restartGame);

