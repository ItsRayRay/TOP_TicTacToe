
const playGame = (position) => {

     //push the position to the array by using indexof

    // let playerOne = {
    //     turn: true,
    // }
    
    // let playerTwo = {
    //     turn: false,
    // } 
    
    let gameBoard = {
    boardPlayerOne: [0,1,2,3,4,5,6,7,8],
    boardPlayerTwo: [0,1,2,3,4,5,6,7,8],

    winCombinationsPlayerOne: {
        1: ['❌','❌','❌',3,4,5,6,7,8],
        2: [0,1,2,'❌','❌','❌',6,7,8],
        3: [0,1,2,3,4,5,'❌','❌','❌'],
        4: ['❌',1,2,'❌',4,5,'❌',7,8],
        5: [0,'❌',2,3,'❌',5,6,'❌',8],
        6: [0,1,'❌',3,4,'❌',6,7,'❌'],
        7: ['❌',1,2,3,'❌',5,6,7,'❌'],
        8: [0,1,'❌',3,'❌',5,'❌',7,8],
    },
    winCombinationsPlayerTwo: {
        1: ['⭕','⭕','⭕',3,4,5,6,7,8],
        2: [0,1,2,'⭕','⭕','⭕',6,7,8],
        3: [0,1,2,3,4,5,'⭕','⭕','⭕'],
        4: ['⭕',1,2,'⭕',4,5,'⭕',7,8],
        5: [0,'⭕',2,3,'⭕',5,6,'⭕',8],
        6: [0,1,'⭕',3,4,'⭕',6,7,'⭕'],
        7: ['⭕',1,2,3,'⭕',5,6,7,'⭕'],
        8: [0,1,'⭕',3,'⭕',5,'⭕',7,8],

    },

}



gameBoard.boardPlayerOne[position] = '❌';



// if (playerOne.turn) {
//     gameBoard.boardPlayerOne[position] = '❌';
//     playerOne.turn = false;
//     playerTwo.turn = true;
// } else if (playerTwo.turn) { { 
//     boardPlayerTwo.board[position] = '⭕';
//     playerOne.turn = true;
//     playerTwo.turn = false;
// }
 

}



playGame(1);



//EventTarget.addEventListener("click", function() {

    // Do something cool
   
//}, {once : true});
