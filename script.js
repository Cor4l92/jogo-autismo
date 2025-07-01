function iniciarJogo() {
  // Limpar o feedback anterior
  document.getElementById('feedback').textContent = "";

  // Criar um número aleatório para escolher a forma correta
  const formas = ['square', 'circle', 'triangle'];
  const corEsperada = formas[Math.floor(Math.random() * formas.length)];

  // Exibir a forma correta que deve ser escolhida
  document.getElementById('feedback').textContent = `Escolha a forma ${corEsperada}`;

  // Atribuir um ouvinte de evento de clique a cada forma
  document.getElementById('square').onclick = function() { verificarEscolha('square', corEsperada) };
  document.getElementById('circle').onclick = function() { verificarEscolha('circle', corEsperada) };
  document.getElementById('triangle').onclick = function() { verificarEscolha('triangle', corEsperada) };
}

function verificarEscolha(escolha, corEsperada) {
  if (escolha === corEsperada) {
    document.getElementById('feedback').textContent = "Parabéns! Você acertou!";
    document.getElementById('feedback').style.color = 'green';
  } else {
    document.getElementById('feedback').textContent = "Tente novamente!";
    document.getElementById('feedback').style.color = 'red';
  }
}
