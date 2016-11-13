var app = angular.module("Connect4", []);
    app.controller("Connect4Controller", ["$scope", function($scope) {

      function createGameBoard() {
        var gameBoard = {};
        gameBoard.rows = [];

        for(var row = 0; row < 6; row++){
          var currRow = [];
          for (var col = 0; col < 7; col++){
            var gamePiece = {
              selected: false,
              piece: null
            };
            currRow.push(gamePiece);
          }
          gameBoard.rows.push(currRow);
        }
        return gameBoard;
      }

      $scope.addPiece = function() {
        console.log("Hello");
      }

      $scope.gameBoard=createGameBoard();
      
    }]);
