const path = require('path')

module.exports = {
  title: 'Vue animate CSS grid',
  description: 'Vue wrapper for animate-css-grid-2, which animates changes in a grid smoothly.',
  themeConfig: {
    repo: 'https://github.com/Oak-Digital/vue-animate-css-grid',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'What is My Lib?', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        children: [
          { text: 'Animate Grid', link: '/components/animate-grid' },
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        'vue-animate-css-grid': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue', /primevue\/.+/], // avoid error when using dependencies that also use Vue
    }
  }
}
