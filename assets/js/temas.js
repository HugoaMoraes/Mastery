const temas = [
  "assets/css/theme-color/bridge-theme.css",
  "assets/css/theme-color/default-theme.css",
  "assets/css/theme-color/green-theme.css",
  "assets/css/theme-color/lite-blue-theme.css",
  "assets/css/theme-color/purple-theme.css",
  "assets/css/theme-color/red-theme.css",
];

function trocarTemaAleatorio() {
  // Seleciona um tema aleatório da lista
  const temaAleatorio = temas[Math.floor(Math.random() * temas.length)];

  // Atualiza o link do tema
  const link = document.getElementById("theme-style");
  link.setAttribute("href", temaAleatorio);

  // Exibe o tema no console (opcional)
  console.log(`Tema trocado para: ${temaAleatorio}`);
}
