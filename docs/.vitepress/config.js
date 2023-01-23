const path = require('path');

module.exports = {
    title: 'Vue animate CSS grid',
    description: 'Vue wrapper for animate-css-grid-2, which animates changes in a grid smoothly.',
    themeConfig: {
        repo: 'https://github.com/Oak-Digital/vue-animate-css-grid',
        sidebar: [
            {
                text: 'Introduction',
                children: [
                    { text: 'What is Vue Animated css grid', link: '/' },
                    { text: 'Getting Started', link: '/guide/' },
                ],
            },
            {
                text: 'Components',
                children: [
                    { text: 'Animated Grid', link: '/components/animated-grid' },
                    { text: 'Animated Grid Item', link: '/components/animated-grid-item' },
                ],
            },
            {
                text: 'Examples',
                children: [
                    { text: 'Fade element', link: '/examples/fade' },
                ],
            },
        ],
    },
    vite: {
        resolve: {
            alias: {
                'vue-animate-css-grid': path.resolve(__dirname, '../../src'),
            },
            dedupe: ['vue', /primevue\/.+/], // avoid error when using dependencies that also use Vue
        },
    },
};
