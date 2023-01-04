<script setup lang="ts">
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
let pieces: (Piece | undefined)[][] = [
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
</script>

<template>
    <div>
        <div class="rows" v-for="piecerows in pieces" onclick="">
            <Square v-for="piece in piecerows" :piece="piece">
            </Square>
        </div>
    </div>
</template>

<style scoped>
.rows {
    display: flex;
}
</style>