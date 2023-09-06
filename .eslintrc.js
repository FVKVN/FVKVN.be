const OFF = 'off';
const ERROR = 'error';
const WARN = 'warn';

const INDENTATION_SIZE = 4;

module.exports = {
    extends: [
        './node_modules/@kunstmaan/eslint-react-config/index.js',
    ],
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-spaced-func': [OFF],
        'no-unused-vars': [OFF],
        'linebreak-style': [OFF],
        'react/react-in-jsx-scope': [OFF],
        'react/jsx-no-bind': [OFF],
        'react/jsx-one-expression-per-line': [OFF],
        'react/default-props-match-prop-types': [OFF],
        'react/jsx-filename-extension': [OFF],
    },
};
