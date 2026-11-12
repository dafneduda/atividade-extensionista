// modo escuro
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// modo escuro em acessos anteriores
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  if (themeToggle) {
    themeToggle.textContent = "☀️ Tema Claro";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      themeToggle.textContent = "☀️ Tema Claro";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      themeToggle.textContent = "🌙 Tema Escuro";
    }
  });
}

// pontos de coleta
const pevs = [
  {
    bairro: "Vila Invernada",
    local: "Ecoponto Vila Invernada",
    endereco: "Rua Exemplo, 123",
  },
  {
    bairro: "Anália Franco",
    local: "Shopping Anália Franco",
    endereco: "Av. Reg. Feijó, 1739",
  },
  {
    bairro: "Mooca",
    local: "Subprefeitura Mooca",
    endereco: "Rua Taquari, 549",
  },
  {
    bairro: "Tatuapé",
    local: "Shopping Metrô Tatuapé",
    endereco: "Rua Domingos Agostim, 91",
  },
  {
    bairro: "Vila Prudente",
    local: "Estação Vila Prudente",
    endereco: "Av. Prof. Luiz Ignácio Anhaia Mello, 1359",
  },
];

const inputBusca = document.getElementById("busca-bairro");
const divResultado = document.getElementById("resultado-busca");

if (inputBusca && divResultado) {
  inputBusca.addEventListener("input", (e) => {
    const termo = e.target.value.toLowerCase();
    divResultado.innerHTML = "";

    if (termo.length < 3) return;

    const filtrados = pevs.filter((pev) =>
      pev.bairro.toLowerCase().includes(termo),
    );

    if (filtrados.length === 0) {
      divResultado.innerHTML =
        '<p style="color: #c08ea9; font-weight: bold;">Nenhum ponto mapeado neste bairro. Verifique a lista completa clicando no link acima.</p>';
      return;
    }

    filtrados.forEach((pev) => {
      divResultado.innerHTML += `
        <div style="background: var(--bg-card, #fff); padding: 15px; margin-bottom: 10px; border-radius: 6px; border-left: 3px solid #c08ea9; color: #2c3e50;">
          <strong>${pev.local}</strong><br>
          ${pev.endereco} (${pev.bairro})
        </div>
      `;
    });
  });
}
