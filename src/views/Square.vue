<script setup lang="ts">
import type { Piece } from '@/domain/piece/piece';

const props = withDefaults(defineProps<{
    piece: Piece | undefined,
}>(), {
    piece: undefined,
})
</script>

<template>
    <div>
        {{ piece?.name() }}
    </div>
</template>