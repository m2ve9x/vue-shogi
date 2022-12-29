import type { Piece } from "./piece";

export class Pawn implements Piece {
    name(): string {
        return "歩";
    };
}