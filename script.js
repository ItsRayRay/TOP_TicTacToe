const upperLeftCorner = document.querySelector(".div1");
const upperMid = document.querySelector(".div2");
const upperRightCorner = document.querySelector(".div3");
const midLeft = document.querySelector(".div4");
const midMid = document.querySelector(".div5");
const midRight = document.querySelector(".div6");
const lowerLeftCorner = document.querySelector(".div7");
const lowerMid = document.querySelector(".div8");
const lowerRightCorner = document.querySelector(".div9");

upperLeftCorner.addEventListener(
  "click",
  function () {
    console.log("clicked upper left corner");
    playGame(0);
  },
  { once: true }
);

upperMid.addEventListener(
  "click",
  function () {
    console.log("clicked upper mid");
    playGame(1);
  },
  { once: true }
);

upperRightCorner.addEventListener(
  "click",
  function () {
    console.log("clicked upper right corner");
    playGame(2);
  },
  { once: true }
);

midLeft.addEventListener(
  "click",
  function () {
    console.log("clicked mid left");
    playGame(3);
  },
  { once: true }
);

midMid.addEventListener(
  "click",
  function () {
    console.log("clicked mid mid");
    playGame(4);
  },
  { once: true }
);

midRight.addEventListener(
  "click",
  function () {
    console.log("clicked mid right");
    playGame(5);
  },
  { once: true }
);

lowerLeftCorner.addEventListener(
  "click",
  function () {
    console.log("clicked lower left corner");
    playGame(6);
  },
  { once: true }
);

lowerMid.addEventListener(
  "click",
  function () {
    console.log("clicked lower mid");
    playGame(7);
  },
  { once: true }
);

lowerRightCorner.addEventListener(
  "click",
  function () {
    console.log("clicked lower right corner");
    playGame(8);
  },
  { once: true }
);

let gameBoard = {
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

  let playerOne = {
    turn: true,
}

let playerTwo = {
    turn: false,
}

const playGame = (position) => {



  if (playerOne.turn) {
      gameBoard.boardPlayerOne[position] = '❌';
      playerOne.turn = false;
      playerTwo.turn = true;
      console.log(gameBoard.boardPlayerOne);
        

      
  } else if (playerTwo.turn) { {
    gameBoard.boardPlayerTwo[position] = '⭕';
      playerOne.turn = true;
      playerTwo.turn = false;
      console.log(gameBoard.boardPlayerTwo);
  }
  

}}
