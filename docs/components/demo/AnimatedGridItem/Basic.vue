<script lang="ts" setup>
import Card from '../../../.vitepress/components/Card.vue';
import { ref } from 'vue';
const numCards = ref(3);
const hiddenCards = ref<number[]>([]);
const hideCard = (index: number) => {
    hiddenCards.value.push(index);
};

const log = console.log;
</script>

<template>
    <div style="margin-bottom: 30px">
        <button @click="numCards++">Add card</button>
    </div>
    <AnimatedGrid class="grid cols-3" @start="(items) => log(items)">
        <AnimatedGridItem
            class="pointer"
            :class="{
                hidden: hiddenCards.includes(i),
            }"
            :itemId="i"
            :key="i"
            v-for="i in numCards"
        >
            <Card @click="() => hideCard(i)">
                <div class="card-content">
                    <h3>Card {{ i }}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies</p>
                </div>
            </Card>
        </AnimatedGridItem>
    </AnimatedGrid>
</template>
