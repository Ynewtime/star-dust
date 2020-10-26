module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    '@typescript-eslint/no-loop-func': 0,
    '@typescript-eslint/no-redeclare': 0,
    '@typescript-eslint/no-shadow': 0,
  },
};
