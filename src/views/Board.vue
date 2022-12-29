<script setup lang="ts">
import { Pawn } from '@/domain/piece/pawn';
import Square from './Square.vue';

const piece = new Pawn();
</script>

<template>
    <Square :piece="piece">
    </Square>
</template>