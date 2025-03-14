function getTimeFromSeconds(seconds){
  const date = new Date(seconds * 1000); // pois busca em milisegundos
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seconds = 0;
let timer;

function startClock() {
  timer = setInterval(function(){
  seconds++;
  relogio.innerHTML = getTimeFromSeconds(seconds);
  }, 1000)
}

document.addEventListener('click', function(e) {
  const el = e.target;
  if(el.classList.contains('zerar')){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seconds = 0;
  }
  if(el.classList.contains('iniciar')){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    startClock();
  }
  if(el.classList.contains('pausar')){
    relogio.classList.add('pausado');
    clearInterval(timer);
  }
});
/* substituimos todos os eventos individuais por 1 evento unico acima
iniciar.addEventListener('click', function(event){
});
pausar.addEventListener('click', function(event){
});
zerar.addEventListener('click', function(event){
});
*/ 