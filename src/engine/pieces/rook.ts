import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);

        const currentRow = currentSquare.row;
        const currentCol = currentSquare.col;

        const availableMoves = [];
        
        for (let i=0; i < GameSettings.BOARD_SIZE; i++){

            if (i != currentCol){

                availableMoves.push(Square.at(currentRow,i));

            }
        }
        for (let i=0; i < GameSettings.BOARD_SIZE; i++){
            
            if (i != currentRow){

                availableMoves.push(Square.at(i,currentCol));

            }
        }

        return availableMoves;
    }
}
