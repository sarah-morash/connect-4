angular.module('Connect4').controller('playerInputController', function($scope){

  // Variable To Hide or Show Name Form //
  $scope.namesNeeded = true;

  $scope.player1 = {
    name: "",
    piece: "X",
    isTurn: false
  };

  $scope.player2 = {
    name: "",
    piece: "O",
    isTurn: false
  };

  $scope.setNames = function(){
    $scope.namesNeeded = false;
    $scope.turnCounter = 0;
    $scope.player1.isTurn = true;
  }

});
