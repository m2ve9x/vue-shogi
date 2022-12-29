<script setup lang="ts">
import { Pawn } from '@/domain/piece/pawn';
import type { Piece } from '@/domain/piece/piece';
import { onMounted } from 'vue';
import Square from './Square.vue';

const piece = new Pawn();
let pieces: (Piece | undefined)[][] = [
    [new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(),],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,],
    [new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(),],
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