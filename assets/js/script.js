//1- conexão da tecla com o js, para em qualquer lugar que teclar ativar a tecla
//adiciona um observador de evento, para monitorar o click da tecla e ativar uma função
//sempre que uma tecla for digitada, ele vai ativar o evento
// o code serve para mostrar o codigo da tecla que foi pressionada
// Depois que ja sabe a tecla que foi pressionada, cria um função para tocar o som
// Transforma as keys retornadas em minusculo, para facilitar a conexão com a função
document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

document.querySelector(".composicao button").addEventListener("click", () => {
  let sequencia = document.querySelector("#input").value;

  if (sequencia !== "") {
    //se tiver algo digitado na box, vai transformar em um array
    let sequenciaArray = sequencia.split(""); //transforma tudo que for escrito e estiver dentro da caixa em um array, separando cada letra dentro dele
    playComposicao(sequenciaArray); //cria uma função para tocar o sequencia array
  }
});

//2- Cria a função para as teclas tocarem o som
function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`); //transforma em um template e toda vez que a função for ativa
  let keyElement = document.querySelector(`div[data-key="${sound}"]`); //dispara a um active no css, quando a função playSound for ativada pelo evento keyup

  if (audioElement) {
    audioElement.currentTime = 0; //serve para tocar o som sem intervalo de tempo
    audioElement.play(); //toca o som
  }

  if (keyElement) {
    keyElement.classList.add("active"); //aciona a div de cada tecla e dispara o evento de ativo no css

    setTimeout(() => {
      keyElement.classList.remove("active"); //remove o evento do cs
    }, 300); //adiciona um tempo que a tecla vai desativar
  }
}

//3- pega o array, da um loop e faz de tempos em tempos ele soltar os itens
function playComposicao(sequenciaArray) {
  let wait = 0; //cria uma variavel com um tempo, pq depois de execultar a função, vai adicionar mais 250ms

  for (let songItem of sequenciaArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);

    wait += 250;

    //chamou todas as teclas de uma vez so, fazer a manutenção de tempo agora
  }
}

// qswqqsw;
// revisar arrow functions
// revisar for of
