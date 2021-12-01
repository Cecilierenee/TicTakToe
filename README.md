# TicTakToe

This is the first unit project of the java immersive coding cohort I am in. I this project I will use HTML, CSS, and JavaScript to create a interactive Tic tac toe game. 

# Concepts and methods used

HTML
  -I added the basic structure needed to display my game. 
  -Linked both my stylesheet and script to my page.
  -Used appropriate class/id to fit page context

CSS
  - I created my gameboard using flex and grid styling.
  - I used pseudo classes to indicate where a user should click.
  - I gave each game square its own defined area to ensure user intereacts correctly.
  - Use google fonts

JavaScript
  In my script file, I used the following Userstories to guide me during my programing;
  - As a user, I should be able to start a new tic tac toe game
  - As a user, I should be able to click on a square to add X first and then O, and so on
  - As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
  - As a user, I should not be able to click the same square twice
  - As a user, I should be shown a message when I win, lose or tie
Within my Script I used the following methods
  -Minipulating the Dom;
      -I gave each of my div elements a data-cell-index. This allowed me to beable to track where the user clicks, if a tile is already in play, and if the comination of tiles meet the conditions for the win loop to run. 
  -I set several functions to achieve my game play. I had to set fuctions for;
      -Displaying the active player,
      -The pattern in which the players choose squares, 
      -Reseting the game,
      -Which messages to display,
      -Determining if the game is still active or not,
      -Displaying 'X's and 'O's
  -I used event listeners to tie back into which tile the player clicked, and also one to listen for when the used clicks on the word 'reset'. 
      
