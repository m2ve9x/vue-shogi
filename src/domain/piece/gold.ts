import type { Piece } from "./piece";

export class Gold implements Piece {
    name(): string {
        return "金";
    };
}