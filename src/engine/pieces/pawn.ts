import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {

    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);

        const availableMoves = [Square.at(currentSquare.row + (this.player == Player.WHITE ? 1 : -1), currentSquare.col)];

        if (this.first_turn === true){

            availableMoves.push(Square.at(currentSquare.row + (this.player == Player.WHITE ? 2 : -2), currentSquare.col))

            this.first_turn = false;

        }

        return availableMoves;
    }
}
