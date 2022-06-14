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
    boardPlayerOne: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    boardPlayerTwo: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    winCombinationsPlayerOne: {
      1: ["❌", "❌", "❌", 3, 4, 5, 6, 7, 8],
      2: [0, 1, 2, "❌", "❌", "❌", 6, 7, 8],
      3: [0, 1, 2, 3, 4, 5, "❌", "❌", "❌"],
      4: ["❌", 1, 2, "❌", 4, 5, "❌", 7, 8],
      5: [0, "❌", 2, 3, "❌", 5, 6, "❌", 8],
      6: [0, 1, "❌", 3, 4, "❌", 6, 7, "❌"],
      7: ["❌", 1, 2, 3, "❌", 5, 6, 7, "❌"],
      8: [0, 1, "❌", 3, "❌", 5, "❌", 7, 8],
    },
    winCombinationsPlayerTwo: {
      1: ["⭕", "⭕", "⭕", 3, 4, 5, 6, 7, 8],
      2: [0, 1, 2, "⭕", "⭕", "⭕", 6, 7, 8],
      3: [0, 1, 2, 3, 4, 5, "⭕", "⭕", "⭕"],
      4: ["⭕", 1, 2, "⭕", 4, 5, "⭕", 7, 8],
      5: [0, "⭕", 2, 3, "⭕", 5, 6, "⭕", 8],
      6: [0, 1, "⭕", 3, 4, "⭕", 6, 7, "⭕"],
      7: ["⭕", 1, 2, 3, "⭕", 5, 6, 7, "⭕"],
      8: [0, 1, "⭕", 3, "⭕", 5, "⭕", 7, 8],
    },

  };
  


const playGame = (position) => {

  if (playerOne.turn) {
      gameBoard.boardPlayerOne[position] = '❌';
      gameBoard.boardOnScreen[position] = '❌';
      playerOne.turn = false;
      playerTwo.turn = true;
      console.log(gameBoard.boardPlayerOne);
      
      for (let i = 0; i < gameBoard.boardOnScreen.length; i++) {
        document.getElementById(i).textContent = gameBoard.boardOnScreen[i];
       }
      
     
  } else if (playerTwo.turn) { {
    gameBoard.boardPlayerTwo[position] = '⭕';
    gameBoard.boardOnScreen[position] = '⭕';
      playerOne.turn = true;
      playerTwo.turn = false;
      console.log(gameBoard.boardPlayerTwo);
      for (let i = 0; i < gameBoard.boardOnScreen.length; i++) {
        document.getElementById(i).textContent = gameBoard.boardOnScreen[i];
       }
  }
  
}}