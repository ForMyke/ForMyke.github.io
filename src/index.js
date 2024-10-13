import { threeFigureExpanded } from "./ThreeFigureExpanded.js";
import { initializeFormBehavior } from "./scroll.js";
import { animacion, animacionCiclica } from "./animacion.js";
//Renderizado usando rollup para los modulos
document.addEventListener("DOMContentLoaded", () => {
  threeFigureExpanded(0xffffff);
  initializeFormBehavior();
  const titulo = document.getElementById("titulo-animado");
  animacion(titulo);

  const textos = ["Desarrollador", "Estudiante", "Cloud Beginner Engineer"];
  const textoDinamico = document.getElementById("texto-dinamico");
  animacionCiclica(textoDinamico, textos);
});
