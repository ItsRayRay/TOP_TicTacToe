
const playGame = (position) => {

     //push the position to the array by using indexof

    let playerOne = {
        turn: true,
    }
    
    let PlayerTwo = {
        turn: false,
    } 
    
    const gameBoard = {
    board: [0,1,2,3,4,5,6,7,8],
    emptyboard: [0,1,2,3,4,5,6,7,8],

    winCombination : {
        1: [0,1,2],
        2: [3,4,5],
        3: [6,7,8],
        4: [0,3,6],
        5: [1,4,7],
        6: [2,5,8],
        7: [0,4,8],
        8: [2,4,6],     
    },
    winCombinationsPlayerOne: {
        1: [❌,❌,❌,3,4,5,6,7,8],
        2: [0,1,2,❌,❌,❌,6,7,8],
        3: [0,1,2,3,4,5,❌,❌,❌],
        4: [❌,1,2,❌,4,5,❌,7,8],
        5: [0,❌,2,3,❌,5,6,❌,8],
        6: [0,1,❌,3,4,❌,6,7,❌],
        7: [❌,1,2,3,❌,5,6,7,❌],
        8: [0,1,❌,3,❌,5,❌,7,8],


    },
    winCombinationsPlayerTwo: {
        1: [⭕,⭕,⭕,3,4,5,6,7,8],
        2: [0,1,2,⭕,⭕,⭕,6,7,8],
        3: [0,1,2,3,4,5,⭕,⭕,⭕],
        4: [⭕,1,2,⭕,4,5,⭕,7,8],
        5: [0,⭕,2,3,⭕,5,6,⭕,8],
        6: [0,1,⭕,3,4,⭕,6,7,⭕],
        7: [⭕,1,2,3,⭕,5,6,7,⭕],
        8: [0,1,⭕,3,⭕,5,⭕,7,8],

    },


}


//if playerOne is true set x
// if playerOne is false set o


if (playerOne.turn) {
    gameBoard.board[position] = 'x';
    playerOne.turn = false;
    playerTwo.turn = true;

 
// if indexof 012 === x  set playerone to win
// else if indexof 012 === 0 set player two to win
// if index off all is x or o 


}

}

//EventTarget.addEventListener("click", function() {

    // Do something cool
    playGame(0);
//}, {once : true});
