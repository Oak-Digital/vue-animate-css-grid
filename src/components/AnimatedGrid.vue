<script lang="ts" setup>
import { AnimateCSSGrid, PopmotionEasing, AnimateCSSGridEvents } from '@oak-digital/animate-css-grid-2';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const eventNames = [
    AnimateCSSGridEvents.START,
    AnimateCSSGridEvents.END,
    AnimateCSSGridEvents.BEFORE_DESTROY,
    AnimateCSSGridEvents.AFTER_DESTROY,
    AnimateCSSGridEvents.ITEM_START,
    AnimateCSSGridEvents.ITEM_END,
    AnimateCSSGridEvents.ITEM_BEFORE_DESTROY,
    AnimateCSSGridEvents.ITEM_AFTER_DESTROY,
];

const emit = defineEmits(eventNames);

const props = defineProps<{
    duration: number;
    easing: keyof PopmotionEasing;
    stagger: number;
}>();

const gridElement = ref<HTMLElement | null>(null);
const grid = ref<AnimateCSSGrid>();

onMounted(() => {
    const animatedGrid = new AnimateCSSGrid(gridElement.value!, {
        duration: props.duration,
        easing: props.easing,
        stagger: props.stagger,
    });

    eventNames.forEach((eventName) => {
        animatedGrid.on(eventName, (...data) => {
            emit(eventName, ...data);
        });
    });

    grid.value = animatedGrid;
});

onBeforeUnmount(() => {
    grid.value?.destroy();
});
</script>

<template>
    <div ref="gridElement">
        <slot />
    </div>
</template>
