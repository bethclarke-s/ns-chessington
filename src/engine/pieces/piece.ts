import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;
    public first_turn: boolean;

    public constructor(player: Player) {
        this.player = player;
        this.first_turn = true;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        
        if (this.first_turn === true){

            this.first_turn = false;

        }
    }
}
