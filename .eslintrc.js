/*eslint-disable */

module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', '@react-native-community'],
  plugins: ['prettier', 'detox'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 1,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'no-console': 0,
    'operator-linebreak': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          './src/native-base-theme/**/*.js',
          './src/utils/test-utils.js',
          './metro.config.js',
        ],
      },
    ],
  },
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', 'js'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
        directory: './',
      },
    },
  },
  overrides: [
    {
      files: ['./jest.setup.js', '**/*.spec.ts', '**/*.spec.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
