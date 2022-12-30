import type { Piece } from "./piece";

export class Silver implements Piece {
    name(): string {
        return "銀";
    };
}