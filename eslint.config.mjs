import configPrettier from "eslint-config-prettier"; // Importa as regras de configuração do Prettier
import pluginPrettier from "eslint-plugin-prettier"; // Importa o Prettier como um plugin
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Adiciona os globais do navegador
      },
      parser: "@babel/eslint-parser", // Certifique-se de que o parser está instalado
      parserOptions: {
        ecmaVersion: 2020, // Define a versão do ECMAScript
        sourceType: "module", // Define o tipo de módulo
        ecmaFeatures: {
          jsx: true, // Permite o uso de JSX
        },
      },
    },
    rules: {
      ...configPrettier.rules, // Desabilita regras que conflitam com Prettier
      "prettier/prettier": "error", // Adiciona o Prettier como uma regra de erro
    },
    settings: {
      react: {
        version: "detect", // Detecta a versão do React automaticamente
      },
    },
  },
  {
    plugins: {
      prettier: pluginPrettier, // Adiciona o plugin Prettier
    },
    overrides: [
      {
        files: ["**/*.jsx"], // Para arquivos JSX
        rules: {
          "react/prop-types": "off", // Desabilita a verificação de prop-types (opcional)
        },
      },
    ],
  },
];
