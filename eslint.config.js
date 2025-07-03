// eslint.config.js
export default [
  {
    files: ["assets/JavaScript/**/*.js"],
    rules: {
      semi: ["error", "always"],          // Requiere punto y coma
      quotes: ["error", "double"],        // Obliga comillas dobles
      "no-unused-vars": "warn",           // Advierte variables sin usar
      "no-console": "off"                 // Permite console.log (puedes cambiarlo)
    },
  },
];
