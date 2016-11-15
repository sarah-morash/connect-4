angular.module("Connect4").controller('boardController', ['$scope', 'SquareBoard','CheckForWinner', function($scope, SquareBoard, CheckForWinner){
  $scope.gameBoard = SquareBoard.board(3);
  $scope.isWinner = CheckForWinner.checkBoardForWinner($scope.gameBoard);
}]);
