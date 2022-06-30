//1- conexão da tecla com o js, para em qualquer lugar que teclar ativar a tecla
//adiciona um observador de evento, para monitorar o click da tecla e ativar uma função
//sempre que uma tecla for digitada, ele vai ativar o evento
document.body.addEventListener("keyup", (event) => {
  console.log(event.code);
});
