<script lang="ts" setup>
import Card from '../../.vitepress/components/Card.vue';
import { ref } from 'vue';

const visible = ref(true);
</script>

<template>
    <AnimatedGrid class="grid cols-2" @click="visible = !visible">
        <AnimatedGridItem>
            <Card>
                <div class="card-content">
                    <h3>Card 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies</p>
                </div>
            </Card>
        </AnimatedGridItem>
        <transition name="fade">
            <AnimatedGridItem v-if="visible">
                <Card>
                    <div class="card-content">
                        <h3>Toggle card</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies</p>
                    </div>
                </Card>
            </AnimatedGridItem>
        </transition>
        <AnimatedGridItem>
            <Card>
                <div class="card-content">
                    <h3>Card 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies</p>
                </div>
            </Card>
        </AnimatedGridItem>
    </AnimatedGrid>
</template>
