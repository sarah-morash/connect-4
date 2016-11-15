angular.module("Connect4").controller('boardController', ['$scope', 'SquareBoard', function($scope, SquareBoard){
  $scope.gameBoard = SquareBoard.board(3);
}]);
