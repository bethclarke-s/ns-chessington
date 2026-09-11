import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);

        const currentRow = currentSquare.row;
        const currentCol = currentSquare.col;

        const availableMoves = [];
        
        const boardSize = GameSettings.BOARD_SIZE;
        
        // Lateral moves (like Rook)
        for (let i = 0; i < boardSize; i++) {
            if (i != currentCol) {
                availableMoves.push(Square.at(currentRow, i));
            }
            
            if (i != currentRow) {
                availableMoves.push(Square.at(i, currentCol));
            }
        }
        
        // Diagonal moves (like Bishop)
        for (let i = 1; i < boardSize; i++) {
            // Forwards diagonal
            if (currentRow + i < boardSize && currentCol + i < boardSize) {
                availableMoves.push(Square.at(currentRow + i, currentCol + i));
            }
            
            if (currentRow - i >= 0 && currentCol - i >= 0) {
                availableMoves.push(Square.at(currentRow - i, currentCol - i));
            }

            // Backwards diagonal
            if (currentRow + i < boardSize && currentCol - i >= 0) {
                availableMoves.push(Square.at(currentRow + i, currentCol - i));
            }
            
            if (currentRow - i >= 0 && currentCol + i < boardSize) {
                availableMoves.push(Square.at(currentRow - i, currentCol + i));
            }
        }

        return availableMoves;
    }
}
