angular.module('Connect4').factory('SquareBoard', function SquareBoardFactory(){
  return {
    board: function(dimension){
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
  };
});
