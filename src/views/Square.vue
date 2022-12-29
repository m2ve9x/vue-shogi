<script setup lang="ts">
import type { Piece } from '@/domain/piece/piece';

const props = withDefaults(defineProps<{
    piece: Piece | undefined,
}>(), {
    piece: undefined,
})
const isNotHavePiece: () => string = () => {
    console.log(props.piece);
    if (props.piece === void 0) {
        return 'blank'
    }
    return ''
}
</script>

<template>
    <div class="piece">
        <div>
            {{ piece?.name() }}
        </div>
        <font-awesome-icon :class="isNotHavePiece()" class="icon" :icon="['far', 'square']" />
    </div>
</template>

<style scoped>
.icon {
    position: relative;
    z-index: 1;
    right: 30px;
    font-size: 40px;
}

.piece {
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 50%;
    z-index: 10;
}

.blank {
    margin-left: 24px;
}
</style>