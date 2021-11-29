//Declaring Variables and selecting classes
const gameStatus = document.querySelector('.status');

//Restart game button and event listener

const restGame = document.querySelector('.reset').addEventListener('click', restartGame);

//Game status Messages
const winnerMessage = () => `${currentPlayer} Won!`;
const tieMessage = () => "Tie Game!";
const activePlayer = () => `${currentPlayer}'s Turn!`;

let gameActive = true; //stopping point for game
let currentPlayer = 'X'; //current player

//The empty string in the gameState array track data cells played and if the game is active or not.
let gameState = ["", "", "", "", "", "", "", "", "",];

//Initializing Game status into html
gameStatus.innerHTML = activePlayer();

//**Game functions**

//Shows played move and which player turn it is.

function cellPlayed(clickedCell, clickedCellIndex) {
gameState[clickedCellIndex] = currentPlayer; clickedCell.innerHTML = currentPlayer;
}
function activePlayerChange() {

}
//Confirming if the game ends in a win or tie. or if the game is still active. Declaring which cell combinations end in a win.
const winnerConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function gameResults() {
    let roundWon = false;
    for(let i = 0; i <= 7;)


}

function cellClicked(clickedCellEvent) {
const clickedCell = clickedCellEvent.target;

//Gets the data-cell-index attribute and returns a string value.

const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index')
    );
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
cellPlayed(clickedCell, clickedCellIndex); gameResults();
}
function restartGame() {

}

//Event listener for game cells

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClicked));




