var app = angular.module('check-for-winners', []);
  app.controller('winCheckerController', function() {
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
    function checkColumnsForWinner(board, turn){
      var columnHeight = board.rows[0].length;
      for (var columnIndex = 0; columnIndex < columnHeight; columnIndex++){
        winner = true;
        for (var row = 0; row < board.rows.length; row ++){
          if (board.rows[row][columnIndex].piece === "_" || board.rows[row][columnIndex].piece === (turn === 0 ? "o" : "x")){
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
    ** Board Object And Check The Diagonal Line From Top Left Corner To Bottom Right Corner
    ** To Determine If A Winning Combination
    ** Exists, Returning The Corresponding Boolean
    ** Value
    */
    function checkTopDiagonalForWinner(board, turn){
      var columnHeight = board.rows[0].length;

      winner = true;
      for (var columnIndex = 0; columnIndex < columnHeight; columnIndex++){
        for (var row = 0; row < board.rows.length; row ++){
          if (board.rows[columnIndex][columnIndex].piece === "_" || board.rows[columnIndex][columnIndex].piece === (turn === 0 ? "o" : "x")){
            winner = false;
          }
        }
      }
      if (winner){
        return true;
      }
      return false;
    }

    /* This Function Shall Take As Input A Game
    ** Board Object And Shall Check Its Two Main
    ** Diagonals For A Winning Combination
    */
    function checkDiagonalsForWinner(board, turn){
      var topLeftToBottomRightWinner = true;
      var topRightToBottomLeftWinner = true;

      for(var row = 0; row < board.rows.length; row++){
        if (board.rows[row][row].piece === "_" || board.rows[row][row].piece === (turn === 0 ? "o" : "x")){
          topLeftToBottomRightWinner = false;
        }
      }

      for (var row = 0; row < board.rows.length; row++){
        if (board.rows[row][board.rows.length - 1 - row].piece === "_" || board.rows[row][board.rows.length - 1 - row].piece === (turn === 0 ? "o" : "x")){
          topRightToBottomLeftWinner = false;
        }
      }

      return topLeftToBottomRightWinner || topRightToBottomLeftWinner;
    }
  }
);
