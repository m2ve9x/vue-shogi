import type { Piece } from "./piece";

export class Rook implements Piece {
    name(): string {
        return "飛";
    };
}