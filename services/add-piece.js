angular.module('Connect4').factory('AddPiece', function AddPieceFactory(){
  return {
    addPieceToBoard: function(piece,value){
      if (piece.piece === '_'){
        piece.piece = value;
        return true;
      }

      return false;
    }
  };
});
