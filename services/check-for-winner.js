angular.module('Connect4').factory('CheckForWinner', function CheckForWinnerFactory(){

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

     return topLeftToBottomRightWinner || topRightToBottomLeftWinner;
   }

  return {
    checkBoardForWinner: function(board){
      return checkRowsForWinner(board) || checkColumnsForWinner(board) || checkDiagonalsForWinner(board);
    }
  };
})
