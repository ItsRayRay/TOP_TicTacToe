
const playGame = (position) => {

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
    }


}

let playerOne = {
    turn: true,
}

let PlayerTwo = {
    turn: false,
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
playGame(0);
playGame(1);
playGame(2);
playGame(3);
playGame(4);
playGame(5);
playGame(6);
playGame(7);
playGame(8);


//EventTarget.addEventListener("click", function() {

    // Do something cool

//}, {once : true});
