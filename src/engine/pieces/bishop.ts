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
        
        for (let i=1; i < GameSettings.BOARD_SIZE; i++){

            if (currentRow + i < GameSettings.BOARD_SIZE && currentCol + i < GameSettings.BOARD_SIZE){
                availableMoves.push(Square.at(currentRow + i, currentCol + i));
            } 
            
            if (currentRow - i >= 0 && currentCol - i >= 0){
                availableMoves.push(Square.at(currentRow - i, currentCol - i));
            }

            if (currentRow + i < GameSettings.BOARD_SIZE && currentCol - i >= 0){
                availableMoves.push(Square.at(currentRow + i, currentCol - i));
            } 
            
            if (currentRow - i >= 0 && currentCol + i < GameSettings.BOARD_SIZE){
                availableMoves.push(Square.at(currentRow - i, currentCol + i));
            }

        }

        console.log(availableMoves);
        return availableMoves;
    }
}
