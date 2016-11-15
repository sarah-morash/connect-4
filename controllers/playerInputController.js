angular.module('Connect4').controller('playerInputController', function($scope){

  // Variable To Hide or Show Name Form //
  $scope.namesNeeded = true;

  $scope.player1 = {
    name: "",
    piece: "X"
  };

  $scope.player2 = {
    name: "",
    piece: "O"
  };

  $scope.setNames = function(){
    $scope.namesNeeded = false;
  }

});
