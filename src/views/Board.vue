<script setup lang="ts">
import { Board } from '@/domain/board/Board';
import { SelectPieceEvent } from '@/domain/events/selectPieceEvent';
import { Gold } from '@/domain/piece/gold';
import { King } from '@/domain/piece/king';
import { Knight } from '@/domain/piece/knight';
import { Lance } from '@/domain/piece/lance';
import { Pawn } from '@/domain/piece/pawn';
import type { Piece } from '@/domain/piece/piece';
import { Silver } from '@/domain/piece/silver';
import { onMounted } from 'vue';
import Square from './Square.vue';

const piece = new Pawn();
let board: Board = new Board();
let eventStore: SelectPieceEvent[] = [];
const selectPiece: () => void = () => {
    const selectPiece: SelectPieceEvent = new SelectPieceEvent(1, 1, new Pawn());
    eventStore.push(selectPiece);
}
</script>

<template>
    <div>
        <div class="rows" v-for="piecerows in board.getPieces()">
            <Square v-for="piece in piecerows" :piece="piece" @select-piece="selectPiece">
            </Square>
        </div>
    </div>
</template>

<style scoped>
.rows {
    display: flex;
}
</style>