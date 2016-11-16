angular.module('Connect4').controller('playerInputController', function($scope){

  // Variable To Hide or Show Name Form //
  $scope.namesNeeded = true;

  $scope.player1 = {
    name: "",
    piece: "X",
    isTurn: false,
    isWinner: false
  };

  $scope.player2 = {
    name: "",
    piece: "O",
    isTurn: false,
    isWinner: false
  };

  $scope.setNames = function(){
    $scope.player1.isWinner = false;
    $scope.player2.isWinner = false;
    $scope.namesNeeded = false;
    $scope.turnCounter = 0;
    $scope.player1.isTurn = true;
  }

});
