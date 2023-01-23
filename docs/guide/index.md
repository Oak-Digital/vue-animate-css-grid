# Getting Started

## Installation

Install the component with your package manager

```bash
# pnpm
pnpm i @oak-digital/vue-animated-css-grid
# yarn
yarn add @oak-digital/vue-animated-css-grid
# npm
npm i @oak-digital/vue-animated-css-grid
```

## Basic usage

Use the component in your project like this

```vue
<script setup>
import { AnimatedGrid } from '@oak-digital/vue-animated-css-grid';
</script>

<template>
    <AnimatedGrid :duration="200" :stagger="20" auto-register>
        <div>
            <div>
                Hello world
            </div>
        </div>
        <div>
            <div>
                Second column
            </div>
        </div>
    </AnimatedGrid>
</template>
```

See other examples in [Animated Grid](../components/animate-grid.md)

## Other notes

One thing that is important is that grid items can only have one child as of now.
