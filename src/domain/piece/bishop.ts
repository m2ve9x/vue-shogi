import type { Piece } from "./piece";

export class Bishop implements Piece {
    name(): string {
        return "角";
    };
}