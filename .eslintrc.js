module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    es2021: true,
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    sessionStorage: true,
    defineProps: true,
    defineEmits: true,
    defineExpose: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    // override/add rules settings here
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
  },
}
