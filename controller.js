var app = angular.module("Connect4", []);
    app.controller("Connect4Controller", ["$scope", function($scope) {

        /* Controller code */
        $scope.row = 0;
        $scope.column = 0;

        var calculateNumber = function(mineField, row, column) {
          var thisSpot = getSpot(mineField, row, column);
          var mineCount = 0;

          if (thisSpot.content == 'mine') {
            return;
          }

          if (row > 0) {
            if (column > 0) {
                var spot = getSpot(mineField, row - 1, column - 1);
                if (spot.content == 'mine') {
                  mineCount++;
                }
            }
            var spot = getSpot(mineField, row - 1, column);
            if (spot.content == 'mine') {
              mineCount++;
            }
            if (column < 8) {
              var spot = getSpot(mineField, row - 1, column + 1);
              if (spot.content == 'mine') {
                mineCount++;
              }
            }
          }

          if (column > 0) {
              var spot = getSpot(mineField, row, column - 1);
              if (spot.content == 'mine') {
                mineCount++;
              }
          }
          if (column < 8) {
            var spot = getSpot(mineField, row, column + 1);
            if (spot.content == 'mine') {
              mineCount++;
            }
          }

          if (row < 8) {
            if (column > 0) {
                var spot = getSpot(mineField, row + 1, column - 1);
                if (spot.content == 'mine') {
                  mineCount++;
                }
            }
            var spot = getSpot(mineField, row + 1, column);
            if (spot.content == 'mine') {
              mineCount++;
            }
            if (column < 8) {
              var spot = getSpot(mineField, row + 1, column + 1);
              if (spot.content == 'mine') {
                mineCount++;
              }
            }
          }

          if(mineCount > 0) {
            spot.content = mineCount;
          }
        }

        var calculateAllNumbers = function(mineField) {
          for (var y=0; y<9; y++) {
            for (var x=0; x<9; x++) {
              calculateNumber(mineField, x, y);
            }
          }
        }
        
        var createMineField = function() {
          var mineField = {};
          mineField.rows = [];

          for (var r=0; r<9; r++) {  // rows
            var row = {};
            row.spots = [];
            //mineField.rows = [];

            for (var c=0; c<9; c++ ) { // columns
              var spot = {};
              spot.isHidden = true;
              row.spots.push(spot);
              //mineField.rows[c] = spot;
            }
            mineField.rows.push(row);
          }

          placeManyRandomMines(mineField);
          calculateAllNumbers(mineField);
          return mineField;
        } 
        $scope.changeSpot = function(spot) {
          if (spot.isHidden) {
            spot.isHidden = false;
          }
        }
        $scope.mineField = createMineField();

        //$scope.msgText = "Hello World!";
      }]);