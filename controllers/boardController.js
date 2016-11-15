angular.module("Connect4").controller('boardController', ['$scope', 'SquareBoard','CheckForWinner', 'AddPiece', function($scope, SquareBoard, CheckForWinner, AddPiece){

  $scope.gameBoard = SquareBoard.board(3);

  $scope.addPiece = function(piece){
    AddPiece.addPieceToBoard(piece);
    $scope.isWinner = CheckForWinner.checkBoardForWinner($scope.gameBoard);
  }

}]);
