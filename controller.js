var app = angular.module("Connect4", ['check-for-winners']);

  app.directive('gameBoard', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/board.html',
      controller: function () {

        /* This Function Shall Create A Game 3 X 3
        ** Game Board Object Which Has As An Attribute
        ** "Rows". Each Row Is Itself An Array Consisting
        ** of Game Piece Objects. Each Game Piece Objects
        ** Has: (selected:boolean, piece: string)
        */
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
        this.gameBoard = gameBoard;
      },
      controllerAs: 'boardCtrl'
    };
  });
