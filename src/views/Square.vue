<script setup lang="ts">
import { SelectPieceEvent } from '@/domain/events/selectPieceEvent';
import type { Piece } from '@/domain/piece/piece';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { reactive, ref } from 'vue';

let isClicked = ref(false);
const clickSquare: () => void = () => {
    isClicked.value = !isClicked.value;
    emit("selectPiece");
}

const squareClass: () => string = () => {
    return isClicked.value ? "clicked" : ''
}

const props = withDefaults(defineProps<{
    piece: Piece | undefined,
}>(), {
    piece: undefined,
})

const emit = defineEmits<{
    (event: "selectPiece"): void;
}>();

const isNotHavePiece: () => string = () => {
    if (props.piece === void 0) {
        return 'blank'
    }
    return ''
}
</script>

<template>
    <div class="piece" @click="clickSquare" :class="squareClass()">
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
    z-index: 10;
}

.piece.clicked {
    background: linear-gradient(90deg, gray 50%, black 50%);
}

.blank {
    margin-left: 24px;
}
</style>