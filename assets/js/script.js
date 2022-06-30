//1- conexão da tecla com o js, para em qualquer lugar que teclar ativar a tecla
//adiciona um observador de evento, para monitorar o click da tecla e ativar uma função
//sempre que uma tecla for digitada, ele vai ativar o evento
// o code serve para mostrar o codigo da tecla que foi pressionada
document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

// Depois que ja sabe a tecla que foi pressionada, cria um função para tocar o som
// Transforma as keys retornadas em minusculo, para facilitar a conexão com a função

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`); //transforma em um template e toda vez que a função for ativa
  let keyElement = document.querySelector(`div[data-key="${sound}"]`); //dispara a um active no css, quando a função playSound for ativada pelo evento keyup

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add("active"); //aciona a div de cada tecla e dispara o evento de ativo no css

    setTimeout(() => {
      keyElement.classList.remove("active"); //remove o evento
    }, 300);
  }
}

// qswqqsw;
