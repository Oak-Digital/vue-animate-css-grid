module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        '@vue/eslint-config-prettier',
        'prettier',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
    },
    ignorePatterns: ['node_modules', 'dist', 'vite.config.ts', 'demo'],
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
