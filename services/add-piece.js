angular.module('Connect4').factory('AddPiece', function AddPieceFactory(){
  return {
    addPieceToBoard: function(piece){
      if (piece.piece !== null){
        piece.piece = 'X';
      }
    }
  };
});
