document.addEventListener('DOMContentLoaded', () => {
  const nome = localStorage.getItem('usuarioNome');
  const dadosCadastro = localStorage.getItem('cadastro');
  const profileImg = document.getElementById('profile-img');
  const textoElemento = document.getElementById('container-texto');

  if (nome) {
    textoElemento.textContent = `${nome}`;
  }

  // Atualiza a imagem do perfil
  if (dadosCadastro) {
    const converteRetorno = JSON.parse(dadosCadastro);
    if (converteRetorno.imagem) {
      profileImg.src = converteRetorno.imagem; // Define a imagem do perfil
    }
  }
});
