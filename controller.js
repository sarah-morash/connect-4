var app = angular.module("Connect4", []);
    app.controller("Connect4Controller", ["$scope", function($scope) {

      /* This Function Shall Create A Game 3 X 3
      ** Game Board Object Which Has As An Attribute
      ** "Rows". Each Row Is Itself An Array Consisting
      ** of Game Piece Objects. Each Game Piece Objects
      ** Has: (selected:boolean, piece: string)
      */
      function createGameBoard() {
        var gameBoard = {};
        gameBoard.rows = [];

        for(var row = 0; row < 3; row++){
          var currRow = [];
          for (var col = 0; col < 3; col++){
            var gamePiece = {
              selected: false,
              piece: "_"
            };
            currRow.push(gamePiece);
          }
          gameBoard.rows.push(currRow);
        }
        return gameBoard;
      }

      /* This Function Shall Take As Input A Game
      ** Board Object And Shall Check Each Row To
      ** Determine If A Winning Row Combination
      ** Exists, Returning The Corresponding Boolean
      ** Result
      */
      function checkRowsForWinner(board){
        for(var i = 0; i < board.rows.length; i++){
          var winner = true;
          for(var j = 0; j < board.rows[i].length; j++){
            if (board.rows[i][j].piece === "_"){
              winner=false;
            }
          }
          if (winner){
            return true;
          }
        }
        return false;
      }

      /* This Function Shall Take As Input A Game
      ** Board Object And Shall Check Each Column
      ** To Determine If A Winning Column Combination
      ** Exists, Returning The Corresponding Boolean
      ** Value
      */
      function checkColumnsForWinner(board){
        var columnHeight = board.rows[0].length;

        for (var columnIndex = 0; columnIndex < columnHeight; columnIndex++){
          winner = true;
          for (var row = 0; row < board.rows.length; row ++){
            if (board.rows[row][columnIndex].piece === "_"){
              winner = false;
            }
          }
          if (winner){
            return true;
          }
        }
        return false;
      }

      /* This Function Shall Take As Input A Game
      ** Board Object And Check The Diagonal Line From Top Left Corner To Bottom Right Corner
      ** To Determine If A Winning Combination
      ** Exists, Returning The Corresponding Boolean
      ** Value
      */
      function checkTopDiagonalForWinner(board){
        var columnHeight = board.rows[0].length;

        winner = true;
        for (var columnIndex = 0; columnIndex < columnHeight; columnIndex++){
          for (var row = 0; row < board.rows.length; row ++){
            if (board.rows[columnIndex][columnIndex].piece === "_"){
              winner = false;
            }
          }
        }
        if (winner){
          return true;
        }
        return false;
      }

      /* This Function Shall Take As Input A Game
      ** Board Object And Check The Diagonal Line From Bottom Left Corner To Top Right Corner
      ** To Determine If A Winning Combination
      ** Exists, Returning The Corresponding Boolean
      ** Value
      */
      function checkBottomDiagonalForWinner(board){
        var columnHeight = board.rows[0].length;
        var boardLength = 3;

        winner = true;
        for (var columnIndex = 0; columnIndex < columnHeight; columnIndex++){
          for (var row = 0; row < boardLength; row ++){
            if (board.rows[columnIndex][(boardLength - 1) - columnIndex].piece === "_"){
              winner = false;
            }
          }
        }
        if (winner){
          return true;
        }
        return false;
      }

      $scope.gameBoard=createGameBoard();

      /* Handling When The User Attempts To Add
      ** A New Piece To The Game Board
      */
      $scope.addPiece = function(piece) {

        if (!piece.selected)
        {
          piece.selected=true;
          piece.piece = "x";
        }

        if (checkRowsForWinner($scope.gameBoard)){
          alert("YOU HAVE A WINNING ROW COMBINATION");
          return
        }

        if (checkColumnsForWinner($scope.gameBoard)){
          alert("YOU HAVE A WINNING COLUMN COMBINTATION");
          return;
        }

        if (checkBottomDiagonalForWinner($scope.gameBoard)){
          alert("YOU HAVE A WINNING BOTTOM DIAGONAL COMBINTATION");
          return;
        }

        if (checkTopDiagonalForWinner($scope.gameBoard)){
          alert("YOU HAVE A WINNING TOP DIAGONAL COMBINTATION");
          return;
        }

      }
    }]);
