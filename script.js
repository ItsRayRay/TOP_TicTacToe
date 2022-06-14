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
      a: ["❌", "❌", "❌", 3, 4, 5, 6, 7, 8].toString(),
      b: [0, 1, 2, "❌", "❌", "❌", 6, 7, 8].toString(),
      c: [0, 1, 2, 3, 4, 5, "❌", "❌", "❌"].toString(),
      d: ["❌", 1, 2, "❌", 4, 5, "❌", 7, 8].toString(),
      e: [0, "❌", 2, 3, "❌", 5, 6, "❌", 8].toString(),
      f: [0, 1, "❌", 3, 4, "❌", 6, 7, "❌"].toString(),
      g: ["❌", 1, 2, 3, "❌", 5, 6, 7, "❌"].toString(),
      h: [0, 1, "❌", 3, "❌", 5, "❌", 7, 8].toString(),
    },
    winCombinationsPlayerTwo: {
      a: ["⭕", "⭕", "⭕", 3, 4, 5, 6, 7, 8].toString(),
      b: [0, 1, 2, "⭕", "⭕", "⭕", 6, 7, 8].toString(),
      c: [0, 1, 2, 3, 4, 5, "⭕", "⭕", "⭕"].toString(),
      d: ["⭕", 1, 2, "⭕", 4, 5, "⭕", 7, 8].toString(),
      e: [0, "⭕", 2, 3, "⭕", 5, 6, "⭕", 8].toString(),
      f: [0, 1, "⭕", 3, 4, "⭕", 6, 7, "⭕"].toString(),
      g: ["⭕", 1, 2, 3, "⭕", 5, 6, 7, "⭕"].toString(),
      h: [0, 1, "⭕", 3, "⭕", 5, "⭕", 7, 8].toString(),
    },

  };


const playGame = (position) => {
 
  if ( gameBoard.boardPlayerOne.toString() == gameBoard.winCombinationsPlayerOne.a ) {
    alert("Player One Wins!")
  } else if ( gameBoard.boardPlayerOne.toString() == gameBoard.winCombinationsPlayerOne.b ) {
    alert("Player One Wins!")
  } else if ( gameBoard.boardPlayerOne.toString() == gameBoard.winCombinationsPlayerOne.c ) {
    alert("Player One Wins!")
  }
  else if ( gameBoard.boardPlayerOne.toString() == gameBoard.winCombinationsPlayerOne.d ) {
    alert("Player One Wins!")
  }
  else if ( gameBoard.boardPlayerOne.toString() == gameBoard.winCombinationsPlayerOne.e ) {
    alert("Player One Wins!")
  }
  else if ( gameBoard.boardPlayerOne.toString() == gameBoard.winCombinationsPlayerOne.f ) {
    alert("Player One Wins!")
  }
  else if ( gameBoard.boardPlayerOne.toString() == gameBoard.winCombinationsPlayerOne.g ) {
    alert("Player One Wins!")
  }
  else if ( gameBoard.boardPlayerOne.toString() == gameBoard.winCombinationsPlayerOne.h ) {
    alert("Player One Wins!")
  } else if ( gameBoard.boardPlayerTwo.toString() == gameBoard.winCombinationsPlayerTwo.a ) {
    alert("Player Two Wins!")
  }
  else if ( gameBoard.boardPlayerTwo.toString() == gameBoard.winCombinationsPlayerTwo.b ) {
    alert("Player Two Wins!")
  }
  else if ( gameBoard.boardPlayerTwo.toString() == gameBoard.winCombinationsPlayerTwo.c ) {
    alert("Player Two Wins!")
  }
  else if ( gameBoard.boardPlayerTwo.toString() == gameBoard.winCombinationsPlayerTwo.d ) {
    alert("Player Two Wins!")
  }
  else if ( gameBoard.boardPlayerTwo.toString() == gameBoard.winCombinationsPlayerTwo.e ) {
    alert("Player Two Wins!")
  }
  else if ( gameBoard.boardPlayerTwo.toString() == gameBoard.winCombinationsPlayerTwo.f ) {
    alert("Player Two Wins!")
  }
  else if ( gameBoard.boardPlayerTwo.toString() == gameBoard.winCombinationsPlayerTwo.g ) {
    alert("Player Two Wins!")
  }
  else if ( gameBoard.boardPlayerTwo.toString() == gameBoard.winCombinationsPlayerTwo.h ) {
    alert("Player Two Wins!")
  }

  if (playerOne.turn) {
      gameBoard.boardPlayerOne[position] = '❌';
      gameBoard.boardOnScreen[position] = '❌';
      playerOne.turn = false;
      playerTwo.turn = true;

      
      for (let i = 0; i < gameBoard.boardOnScreen.length; i++) {
        document.getElementById(i).textContent = gameBoard.boardOnScreen[i];


       }
      
  } else if (playerTwo.turn) { {
    gameBoard.boardPlayerTwo[position] = '⭕';
    gameBoard.boardOnScreen[position] = '⭕';
      playerOne.turn = true;
      playerTwo.turn = false;
      for (let i = 0; i < gameBoard.boardOnScreen.length; i++) {
        document.getElementById(i).textContent = gameBoard.boardOnScreen[i];
       }
  }
  

}

}