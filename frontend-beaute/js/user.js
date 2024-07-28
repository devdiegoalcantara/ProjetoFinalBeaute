document.addEventListener('DOMContentLoaded', () => {
    const nome = localStorage.getItem('usuarioNome');
    if (nome) {
      const textoElemento = document.getElementById('container-texto');
      if (textoElemento) {
        textoElemento.textContent =`${nome}`;
      }
    }
  });
  