module.exports = {
  plugins: [
    require("autoprefixer"), // Agregar prefijos a las propiedades CSS
    require("cssnano")({
      // Comprimir el CSS con cssnano
      preset: "default", // Usar el preset por defecto para optimización
    }),
  ],
};
