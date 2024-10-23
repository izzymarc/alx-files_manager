import globals from "globals";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: { import: importPlugin }, // Add import plugin
    rules: {
      'import/no-named-as-default': 'off', // Disable or set to 'error' if needed
    },
  },
];
