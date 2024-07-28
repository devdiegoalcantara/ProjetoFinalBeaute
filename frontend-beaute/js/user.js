document.addEventListener('DOMContentLoaded', () => {
  const nome = localStorage.getItem('usuarioNome');
  const imagem = localStorage.getItem('cadastro');
  const profileImg = document.getElementById('profile-img');
  const textoElemento = document.getElementById('container-texto');

  if (nome) {
    textoElemento.textContent = `${nome}`;
  }

  if (imagem) {
    const dadosCadastro = JSON.parse(imagem);
    if (dadosCadastro.imagem) {
      profileImg.src = dadosCadastro.imagem;
    }
  }
});
