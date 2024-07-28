document.getElementById("login-form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const email = event.target.elements["email"].value;
  const senha = event.target.elements["password"].value;

  try {
      const response = await fetch('http://localhost:3000/usuarios');
      if (!response.ok) {
          throw new Error('Erro ao buscar dados do usuário.');
      }

      const usuarios = await response.json();

      const usuario = usuarios.find(user => user.email === email && user.senha === senha);

      if (usuario) {
          const nome = usuario.nome.split(' ')[0];
          alert(`Olá! Que bom que você voltou ${nome}.`);
          window.location.href = "../index.html";
      } else {
          document.getElementById("login-message").textContent = "E-mail ou senha inválidos. Por favor, tente novamente.";
      }
  } catch (error) {
      document.getElementById("login-message").textContent = "Erro ao tentar realizar login. Por favor, tente novamente mais tarde.";
  }
});
