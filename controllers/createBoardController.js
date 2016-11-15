angular.module("Connect4").controller('createBoardController', function($scope){

  /* This Function Shall Create A Game 3 X 3
  ** Game Board Object Which Has As An Attribute
  ** "Rows". Each Row Is Itself An Array Consisting
  ** of Game Piece Objects. Each Game Piece Objects
  ** Has: (selected:boolean, piece: string)
  */
  function generateGameBoard(){
    var gameBoard = {};
    gameBoard.rows = [];

    for(var row = 0; row < 3; row++){
      var currRow = [];
      for (var col = 0; col < 3; col++){
        var gamePiece = {
          selected: false,
          piece: "_"
        };
        currRow.push(gamePiece);
      }
      gameBoard.rows.push(currRow);
    }
    return gameBoard;
  }
  $scope.gameBoard = generateGameBoard();
});
