import { threeFigureExpanded } from "./ThreeFigureExpanded.js";
import { initializeFormBehavior } from "./scroll.js"; // Importa solo lo necesario

//Renderizado usando rollup para los modulos
document.addEventListener("DOMContentLoaded", () => {
  threeFigureExpanded(0xffffff);
  initializeFormBehavior();
});
