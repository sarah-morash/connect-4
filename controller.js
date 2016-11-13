var app = angular.module("Connect4", []);
    app.controller("Connect4Controller", ["$scope", function($scope) {

      function createGameBoard() {
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

      $scope.addPiece = function(piece) {

        if (!piece.selected)
        {
          piece.selected=true;
          piece.piece = "X";
        }

        if (checkRowsForWinner($scope.gameBoard)){
          alert("YOU ARE AWESOME! YOU WON!");
        }
      }

      $scope.gameBoard=createGameBoard();
      
    }]);
