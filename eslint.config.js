import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  // Configuração para arquivos de navegador (React)
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Mantém as variáveis globais do navegador
        module: false, // Explicitamente desativa a detecção de 'module' aqui
        exports: false, // Explicitamente desativa a detecção de 'exports' aqui
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  // Nova configuração para arquivos Node.js (como tailwind.config.js)
  {
    files: ["tailwind.config.js", "postcss.config.js", "*.config.js"], // Adicione outros arquivos de configuração do Node.js se necessário
    languageOptions: {
      globals: globals.node, // Adiciona as variáveis globais do Node.js
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
  },
];
