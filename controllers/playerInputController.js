angular.module('Connect4').controller('playerInputController', function($scope){

  $scope.player1 = {
    name: "",
    piece: "X"
  };

  $scope.player2 = {
    name: "",
    piece: "O"
  };

});
