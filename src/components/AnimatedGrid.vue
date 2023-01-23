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
import { ref, onMounted, onBeforeUnmount, provide } from 'vue';

const emit = defineEmits(eventNames);

const props = withDefaults(
    defineProps<{
        duration?: number;
        easing?: keyof PopmotionEasing;
        stagger?: number;
        autoRegister?: boolean;
    }>(),
    {
        autoRegister: false,
    }
);

const gridElement = ref<HTMLElement | null>(null);
const grid = new AnimateCSSGrid(undefined, {
    duration: props.duration,
    easing: props.easing,
    stagger: props.stagger,
    autoRegisterChildren: props.autoRegister,
});

eventNames.forEach((eventName) => {
    grid.on(eventName, (...data) => {
        emit(eventName, ...data);
    });
});
provide('animatedGrid', grid);

onMounted(() => {
    grid.registerElement(gridElement.value!);
});

onBeforeUnmount(() => {
    grid.destroy();
});
</script>

<template>
    <div ref="gridElement">
        <slot />
    </div>
</template>
