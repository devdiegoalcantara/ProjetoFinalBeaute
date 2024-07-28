document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const email = event.target.elements["email"].value;
    const senha = event.target.elements["password"].value;
  
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
      });
  
      if (!response.ok) {
        throw new Error('Erro ao realizar login.');
      }
  
      const result = await response.json();
      if (result.message.includes('Olá')) {
        alert(result.message);
        window.location.href = "../index.html";
      } else {
        document.getElementById("login-message").textContent = result.message;
      }
    } catch (error) {
      document.getElementById("login-message").textContent = "E-mail ou senha inválidos. Por favor, tente novamente.";
    }
  });
  