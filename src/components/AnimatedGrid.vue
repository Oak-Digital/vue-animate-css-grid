<script lang="ts">
const eventNames = [
    'start',
    'end',
    'beforeDestroy',
    'afterDestroy',
    'itemStart',
    'itemEnd',
    'itemBeforeDestroy',
    'itemAfterDestroy',
] as any[];
</script>

<script lang="ts" setup>
import { AnimateCSSGrid, PopmotionEasing } from '@oak-digital/animate-css-grid-2';
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
