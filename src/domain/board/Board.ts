import type { SelectPieceEvents } from "../events/selectPieceEvent";
import { Gold } from "../piece/gold";
import { King } from "../piece/king";
import { Knight } from "../piece/knight";
import { Lance } from "../piece/lance";
import { Pawn } from "../piece/pawn";
import type { Piece } from "../piece/piece";
import { Silver } from "../piece/silver";

export class Board {
    pieces: (Piece | undefined)[][] = [];

    constructor() {
        this.initBoard();
    }

    initBoard() {
        this.pieces = [
            [new Lance(), new Knight(), new Silver(), new Gold(), new King(), new Gold(), new Silver(), new Knight(), new Lance(),],
            [new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(),],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
            [new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(),],
            [new Lance(), new Knight(), new Silver(), new Gold(), new King(), new Gold(), new Silver(), new Knight(), new Lance(),],
        ];
    }

    createBoard(selectPieceEvents: SelectPieceEvents) {
    }

    getPieces(): (Piece | undefined)[][] {
        return this.pieces
    }
}