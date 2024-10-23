import globals from 'globals';
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        global: true,
        it: true,
        describe: true,
        before: true,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Possible Errors
      'no-console': 'off', // Warn on console.log statements
      'no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ], // Warn on unused variables
      

      // Best Practices
      'eqeqeq': ['error', 'always'], // Require === and !==
      'curly': 'error', // Require curly braces for all control statements
      'consistent-return': 'error', // Require return statements to either always or never specify values

      // Variables
      'no-undef': 'error', // Disallow the use of undeclared variables
      'no-redeclare': 'error', 

      // Style
      'indent': ['error', 2], // 2 spaces for indentation
      'quotes': ['error', 'single'], // Use single quotes
      'semi': ['error', 'always'], // Require semicolons
      'eol-last': ['error', 'always'], // Require newline at the end of files

      // Mocha Specific
      'no-magic-numbers': ['off', { ignore: [0, 1, 2000, 4000, 10000] }], // Example rule, adjust as needed
    },
  },
];
