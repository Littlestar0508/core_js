import globals from 'globals';
import pluginJs from '@eslint/js';

const types = {
  isObject: true,
  isArray: true,
};

const dom = {
  getNode: true,
  getNodes: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...types,
        ...dom,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
