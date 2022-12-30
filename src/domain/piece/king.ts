import type { Piece } from "./piece";

export class King implements Piece {
    name(): string {
        return "王";
    };
}