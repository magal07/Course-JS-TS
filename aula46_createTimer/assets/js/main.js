function showTime() {
  let date = new Date();
  return date.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}
// console.log(showTime());

const timer = setInterval(function () {
  console.log(showTime());
}, 1000);

setTimeout(function(){
  clearInterval(timer);
}, 3000);

setTimeout(function() {
  console.log('Break time')
}, 5000);