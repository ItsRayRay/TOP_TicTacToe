function render(position) {
  playGame(position)
}

let playerOne = {
  turn: true,
}

let playerTwo = {
  turn: false,
}

let gameBoard = {
    boardOnScreen: ["", "", "", "", "", "", "", "", ""],
    winCombinations : {
      a: [0, 1, 2],
      b: [3, 4, 5],
      c: [6, 7, 8],
      d: [0, 3, 6],
      e: [1, 4, 7],
      f: [2, 5, 8],
      g: [0, 4, 8],
      h: [2, 4, 6],
    } 
    }

    let winCombo = gameBoard.winCombinations

    let playerOneCombo = [];
    let playerTwoCombo = [];
    
const playGame = (position) => {

  // if playeroneCombo has same digits as wincombinations 

 if (playerOneCombo.includes(0, 1 , 2) ) {

  console.log("Player One Wins!")
}

  if (playerOne.turn) {

      gameBoard.boardOnScreen[position] = "❌";
      playerOneCombo.push(position);
      playerOne.turn = false;
      playerTwo.turn = true;
      console.log(playerOneCombo);
      for (let i = 0; i < gameBoard.boardOnScreen.length; i++) {
        document.getElementById(i).textContent = gameBoard.boardOnScreen[i];

       }
  } else { {
    gameBoard.boardOnScreen[position] = '⭕';
    playerTwoCombo.push(position);
      playerOne.turn = true;
      playerTwo.turn = false;
      console.log(playerTwoCombo)
      for (let i = 0; i < gameBoard.boardOnScreen.length; i++) {
        document.getElementById(i).textContent = gameBoard.boardOnScreen[i];
       }
  }
}
}


