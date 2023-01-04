import type { Piece } from "../piece/piece";

export class SelectPieceEvent {
    pointX: number;
    pointY: number;
    piece: Piece;

    constructor(pointX: number, pointY: number, piece: Piece,) {
        this.pointX = pointX;
        this.pointY = pointY;
        this.piece = piece;
    }
}