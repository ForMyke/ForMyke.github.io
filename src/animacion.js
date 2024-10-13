// Animación de escritura gradual
const animacion = (elemento) => {
  const numeroLetras = elemento.dataset.texto.length;

  for (let i = 0; i < numeroLetras; i++) {
    setTimeout(() => {
      const letra = document.createElement("span");
      letra.append(elemento.dataset.texto[i]);
      elemento.append(letra);
    }, 300 * i);
  }
};

// Animación cíclica de textos
const animacionCiclica = (elemento, textos) => {
  let indexTexto = 0;
  let indexLetra = 0;

  const escribirTexto = () => {
    if (indexLetra < textos[indexTexto].length) {
      elemento.innerHTML += textos[indexTexto][indexLetra];
      indexLetra++;
      setTimeout(escribirTexto, 150); // Tiempo entre letras
    } else {
      setTimeout(borrarTexto, 1000); // Pausa antes de borrar
    }
  };

  const borrarTexto = () => {
    if (indexLetra > 0) {
      elemento.innerHTML = textos[indexTexto].substring(0, indexLetra - 1);
      indexLetra--;
      setTimeout(borrarTexto, 100); // Tiempo entre letras al borrar
    } else {
      indexTexto = (indexTexto + 1) % textos.length; // Cambiar al siguiente texto
      setTimeout(escribirTexto, 500); // Pausa antes de escribir el nuevo texto
    }
  };

  escribirTexto(); // Iniciar la animación
};

export { animacion, animacionCiclica };
