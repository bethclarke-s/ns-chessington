import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        const { row, col } = currentSquare;
        const boardSize = GameSettings.BOARD_SIZE;

        const availableMoves = [];
        
        const knightOffsets = [
            [2, 1], [2, -1], [-2, 1], [-2, -1],  // 2 squares vertical, 1 square horizontal
            [1, 2], [1, -2], [-1, 2], [-1, -2]   // 1 square vertical, 2 squares horizontal
        ];

        for (const [rowOffset, colOffset] of knightOffsets) {
            const newRow = row + rowOffset;
            const newCol = col + colOffset;

            if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
                availableMoves.push(Square.at(newRow, newCol));
            }
        }

        return availableMoves;
    }
}
