<script lang="ts">
const eventNames = ['itemStart', 'itemEnd', 'itemBeforeDestroy', 'itemAfterDestroy'] as any[];
</script>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, onUnmounted, onDeactivated, inject, watch } from 'vue';
import { AnimateCSSGrid, AnimateCSSGridItem } from '@oak-digital/animate-css-grid-2';

const emit = defineEmits(eventNames);

const props = withDefaults(
    defineProps<{
        extracted: boolean;
        extractBeforeUnmount: boolean;
    }>(),
    {
        extracted: false,
        extractBeforeUnmount: true,
    }
);

const animatedGrid = inject<AnimateCSSGrid>('animatedGrid');

if (!animatedGrid) {
    throw new Error('AnimatedGridItem must be used inside an AnimatedGrid');
}

const gridItemElement = ref<HTMLElement>();
const gridItem = new AnimateCSSGridItem(animatedGrid);
eventNames.forEach((eventName) => {
    animatedGrid.on(eventName, (...data) => {
        emit(eventName, ...data);
    });
});

watch(
    () => props.extracted,
    (extracted) => {
        if (extracted) {
            gridItem.extract();
        } else {
            gridItem.unExtract();
        }
    }
);

onMounted(() => {
    if (!gridItemElement.value) {
        throw new Error('The div has not yet been mounted, this should never happen');
    }
    gridItem.registerElement(gridItemElement.value);
    animatedGrid.registerGridItem(gridItem);
});

onBeforeUnmount(() => {
    if (props.extractBeforeUnmount) {
        gridItem.extract();
    }
});

onDeactivated(() => {
    gridItem.destroy();
});
</script>

<template>
    <div ref="gridItemElement">
        <slot />
    </div>
</template>
