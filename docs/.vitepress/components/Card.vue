<template>
    <div class="card">
        <slot />
    </div>
</template>

<style scoped>
.card {
    padding: 10px;
    min-width: 75px;
    min-height: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
}
</style>
