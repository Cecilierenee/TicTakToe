//Declaring Variables and selecting classes
const gameStatus = document.querySelector('.status');
const restGame = document.querySelector('.reset');

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
function handleCellPlayed() {

}
function handlePlayerChange() {
    
}

