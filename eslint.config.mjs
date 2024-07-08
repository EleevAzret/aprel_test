import { FlatCompat } from '@eslint/eslintrc'
import withNuxt from './.nuxt/eslint.config.mjs'

const compat = new FlatCompat()

export default withNuxt([
  {
    rules: {
      'quotes': ['error', 'single'],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'brace-style': 'error',
      'arrow-parens': 'error',
      'quote-props': ['error', 'consistent'],
    },
  },
]).append([
  ...compat.config({
    extends: [
      'plugin:vue/vue3-strongly-recommended',
      'plugin:vue-pug/vue3-strongly-recommended',
    ],
    rules: {
      'vue/v-slot-style': ['error', {
        atComponent: 'v-slot',
        default: 'v-slot',
        named: 'longform',
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
      }],
      'vue/html-quotes': ['error', 'double'],
      'vue/multi-word-component-names': ['error', {
        ignores: ['index', '[id]', 'default', 'error', 'simple', 'empty'],
      }],
      'vue/no-unused-vars': ['error', {
        ignorePattern: '_',
      }],
    },
  }),
])
