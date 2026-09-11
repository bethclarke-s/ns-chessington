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
        const { row, col } = currentSquare;
        const boardSize = GameSettings.BOARD_SIZE;

        const availableMoves = [];
        
        const directions = [
            [0, 1], [0, -1], [1, 0], [-1, 0],  // lateral
        ];

        for (const [rowDir, colDir] of directions) {
            for (let i = 1; i < boardSize; i++) {
                const newRow = row + rowDir * i;
                const newCol = col + colDir * i;

                if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
                    availableMoves.push(Square.at(newRow, newCol));
                } else {
                    break; // Stop when we hit the board edge
                }
            }
        }

        return availableMoves;
    }
}
