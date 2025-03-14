function Calculator(){
  this.display = document.querySelector('.display');

  this.captureClicks = () => {
    document.addEventListener('click', event => {
      const el = event.target; // selecionando o botão pressionado
      if(el.classList.contains('btn-num')) this.addNumDisplay(el);
      if(el.classList.contains('btn-clear')) this.clear(el);
      if(el.classList.contains('btn-del')) this.del(el);
      if(el.classList.contains('btn-eq')) this.makeAccount(el);
    });
  };

  this.start = () => {
    this.captureClicks();
    this.captureEnter();
  };

  this.captureEnter = () => {
   this.display.addEventListener('keypress', event => {
      if(event.keyCode === 13){
        this.makeAccount();
      }
    });
  };

  this.addNumDisplay = el => {
   this.display.value += el.innerText; // add o texto interno do botão
  this.display.focus(); // foca no display
  };
   this.clear = () => this.display.value = ''; // limpa o display
  this.del = () => this.display.value = this.display.value.slice(0, -1); // deleta o último caractere
  this.makeAccount = () => {
    try { 
      const account = eval(this.display.value); // eval executa a string como uma operação matemática
      if(!account) {
        alert('Invalid Account');
        return;
      }
      this.display.value = account;

    } catch(e) {
      alert('Invalid Account');
      return;
    }
  };
  };


  // criei uma nova instância do objeto \/
const calculator = new Calculator();
calculator.start(); // chamando o método start