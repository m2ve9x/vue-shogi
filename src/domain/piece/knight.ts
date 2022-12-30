import type { Piece } from "./piece";

export class Knight implements Piece {
    name(): string {
        return "桂";
    };
}