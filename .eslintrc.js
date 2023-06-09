module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'i18next'],
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended'
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            },
            extends: [
                'plugin:@typescript-eslint/recommended'
            ],
            parserOptions: {
                project: ['./tsconfig.json']
            }
        }
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [0, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] }
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        'i18next/no-literal-string':
            [
                'error',
                { markupOnly: true, ignoreAttribute: ['data-testid'] }
            ],
        'max-len': ['error', { ignoreComments: true, code: 100 }]
    },
    globals: {
        __IS_DEV__: true
    }
}
