angular.module("Connect4").directive('gameBoard', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/board.html',
    controller: 'createBoardController'
  };
});
