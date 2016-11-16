angular.module("Connect4").controller('boardController', ['$scope', 'SquareBoard','CheckForWinner', 'AddPiece', function($scope, SquareBoard, CheckForWinner, AddPiece){

  $scope.gameBoard = SquareBoard.board(3);

  $scope.addPiece = function(piece){
    AddPiece.addPieceToBoard(piece);
    $scope.isWinner = CheckForWinner.checkBoardForWinner($scope.gameBoard);

    if ($scope.turnCounter % 2 === 0 ){
      $scope.player1.isTurn = false;
      $scope.player2.isTurn = true;
    }

    else {
      $scope.player1.isTurn = true;
      $scope.player2.isTurn = false;
    }

    $scope.turnCounter++;
  };

}]);
