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

  /* This Function Shall Take As Input A Game
  ** Board Object And Shall Check Each Row To
  ** Determine If A Winning Row Combination
  ** Exists, Returning The Corresponding Boolean
  ** Result
  */
  function checkRowsForWinner(board){
    for(var i = 0; i < board.rows.length; i++){
      var winner = true;
      for(var j = 0; j < board.rows[i].length; j++){
        if (board.rows[i][j].piece === "_"){
          winner=false;
        }
      }
      if (winner){
        return true;
      }
    }
    return false;
  }

  /* This Function Shall Take As Input A Game
  ** Board Object And Shall Check Each Column
  ** To Determine If A Winning Column Combination
  ** Exists, Returning The Corresponding Boolean
  ** Value
  */
  function checkColumnsForWinner(board){
    var columnHeight = board.rows[0].length;
    for (var columnIndex = 0; columnIndex < columnHeight; columnIndex++){
      winner = true;
      for (var row = 0; row < board.rows.length; row ++){
        if (board.rows[row][columnIndex].piece === "_"){
          winner = false;
        }
      }
      if (winner){
        return true;
      }
    }
    return false;
  }

  /* This Function Shall Take As Input A Game
  ** Board Object And Shall Check Its Two Main
  ** Diagonals For A Winning Combination
  */
  function checkDiagonalsForWinner(board){
    var topLeftToBottomRightWinner = true;
    var topRightToBottomLeftWinner = true;

    for(var row = 0; row < board.rows.length; row++){
      if (board.rows[row][row].piece === "_"){
        topLeftToBottomRightWinner = false;
      }
    }

    for (var row = 0; row < board.rows.length; row++){
      if (board.rows[row][board.rows.length - 1 - row].piece === "_"){
        topRightToBottomLeftWinner = false;
      }
    }
  }

  $scope.checkBoardForWinner = function(){
    var isWinner = checkRowsForWinner($scope.gameBoard) || checkColumnsForWinner($scope.gameBoard) || checkDiagonalsForWinner($scope.gameBoard);

    if (isWinner){
      alert("We Have A Winner");
    }

    else{
      alert("No Winner!");
    }
  }
});
