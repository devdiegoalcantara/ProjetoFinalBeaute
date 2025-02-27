// Load Products
function carregarProdutosPorGenero(gender, containerId) {
      fetch("http://localhost:3000/produtos")
      .then(response => response.json())
      .then(produtos => {
        const container = document.getElementById(containerId);
  
        produtos.forEach(produto => {
          if (produto.gender === gender) {
            const card = `
              <div class="cards">
                <div class="favoritar-container">
                  <i class="far fa-heart favoritar"></i>
                </div>
                <div class="product-box">
                  <img src="${produto.imgSrc}" alt="${produto.alt}" class="product-img">
                  <strong class="product-title">${produto.title}</strong> <br>
                  <div class="product-subtitle">${produto.subtitle} <br></div>
                  <img src="img/Estrelinhas.svg" alt="avaliação" id="estrelas"> <br>
                  <strong class="preço">${produto.price}</strong> <br>
                  <div class="parcelas">${produto.parcela} <br> <br></div>
                  <button class="btn-comprar">Compre Agora ❯ </button>
                  <div class="descrição">${produto.description}</div>
                </div>
              </div>
            `;
  
            container.innerHTML += card;
          }
        });
  
        ready();
      })
      .catch(error => console.error(`Erro ao carregar produtos ${gender}:`, error));
  }
  
  // Load products Female
  carregarProdutosPorGenero('feminino', 'produtos-femininos');
  
  // Load products Male
  carregarProdutosPorGenero('masculino', 'produtos-masculinos');
  

const barraDePesquisa = document.querySelector(".banner__pesquisa");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
  const produtos = document.querySelectorAll(".cards");
  const valorFiltro = barraDePesquisa.value.toLowerCase();

  produtos.forEach(produto => {
      const titulo = produto.querySelector(".product-title").textContent.toLowerCase();

      if (valorFiltro === "" || titulo.includes(valorFiltro)) {
          produto.style.display = "block";
      } else {
          produto.style.display = "none";
      }
  });
}
