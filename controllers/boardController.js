angular.module("Connect4").controller('boardController', ['$scope', 'SquareBoard','CheckForWinner', 'AddPiece', function($scope, SquareBoard, CheckForWinner, AddPiece){

  $scope.gameBoard = SquareBoard.board(3);

  $scope.addPiece = function(piece){

    if ($scope.turnCounter % 2 === 0 ){
      $scope.player1.isTurn = false;
      $scope.player2.isTurn = true;
      AddPiece.addPieceToBoard(piece,"X");
    }

    else {
      $scope.player1.isTurn = true;
      $scope.player2.isTurn = false;
      AddPiece.addPieceToBoard(piece,"O");
    }

    $scope.isWinner = CheckForWinner.checkBoardForWinner($scope.gameBoard);
    $scope.turnCounter++;
  };

}]);
