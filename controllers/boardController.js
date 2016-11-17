angular.module("Connect4").controller('boardController', ['$scope', 'SquareBoard','CheckForWinner', 'AddPiece', function($scope, SquareBoard, CheckForWinner, AddPiece){

  $scope.gameBoard = SquareBoard.board(3);

  $scope.addPiece = function(piece){

    if ($scope.turnCounter % 2 === 0 ){

      let pieceAdded = AddPiece.addPieceToBoard(piece,"X") === true;

      // Should Piece Be Added, That Is Should The Space Be Available //
      if (pieceAdded){
        $scope.player1.isWinner = CheckForWinner.checkBoardForWinner($scope.gameBoard,"X","O");
        $scope.player1.isTurn = false;
        $scope.player2.isTurn = true;
        $scope.turnCounter++;
      }

    }

    else {

      let pieceAdded = AddPiece.addPieceToBoard(piece,"O");

      if (pieceAdded){
        $scope.player2.isWinner = CheckForWinner.checkBoardForWinner($scope.gameBoard,"O","X");
        $scope.player1.isTurn = true;
        $scope.player2.isTurn = false;
        $scope.turnCounter++;
      }
    }
  };

  $scope.reset = function() {
    $scope.gameBoard = SquareBoard.board(3);
    $scope.setNames();
  }
}]);
