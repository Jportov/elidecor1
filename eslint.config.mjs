import pluginJs from "@eslint/js";
import configPrettier from "eslint-config-prettier"; // Importa as regras de configuração do Prettier
import pluginPrettier from "eslint-plugin-prettier"; // Importa o Prettier como um plugin
import pluginReact from "eslint-plugin-react";
import globals from "globals";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Adiciona Prettier como plugin e ajusta as configurações
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules, // Desabilita regras que conflitam com Prettier
      "prettier/prettier": "error", // Adiciona o Prettier como uma regra de erro
    },
    settings: {
      react: {
        version: "detect", // Adiciona esta linha para detectar a versão do React automaticamente
      },
    },
  },
];
