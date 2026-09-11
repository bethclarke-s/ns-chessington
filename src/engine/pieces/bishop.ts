import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);

        const currentRow = currentSquare.row;
        const currentCol = currentSquare.col;

        const availableMoves = [];
        
        const boardSize = GameSettings.BOARD_SIZE;
        
        for (let i=1; i < boardSize; i++){

            // Forwards diagonal
            if (currentRow + i < boardSize && currentCol + i < boardSize){
                availableMoves.push(Square.at(currentRow + i, currentCol + i));
            } 
            
            if (currentRow - i >= 0 && currentCol - i >= 0){
                availableMoves.push(Square.at(currentRow - i, currentCol - i));
            }

            // Backwards diagonal
            if (currentRow + i < boardSize && currentCol - i >= 0){
                availableMoves.push(Square.at(currentRow + i, currentCol - i));
            } 
            
            if (currentRow - i >= 0 && currentCol + i < boardSize){
                availableMoves.push(Square.at(currentRow - i, currentCol + i));
            } // TODO: Is there a cleaner way to do this?

        }

        console.log(availableMoves);
        return availableMoves;
    }
}
