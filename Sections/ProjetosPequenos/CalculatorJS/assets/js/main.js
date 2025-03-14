function createCalculator() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    btnDelOne: document.querySelector('.btn-del'),
    
    start(){
      this.clickBoton();
      this.pressEnter();
      this.pressDeleteAll();
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13) {
          this.EqualsOperation();
        }
      });
    },

    pressDeleteAll() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) { 
          this.clearDisplay();
        }
      });
    },

    // EqualsOperation(){
    //   let account = this.display.value;
    //   try { 
    //     account = eval(account);
    //     if(!account) {
    //       alert('Conta inválida');
    //     }

    //     this.display.value = String(account);
    //   }catch(e) {
    //     alert('Conta inválida');
    //     return;
    //   }
    // },

    EqualsOperation() {
      let account = this.display.value;
    
      // Expressão regular para validar a entrada
      const validExpression = /^[\d\+\-\*\/\.\(\)\s]+$/;
    
      // Verifica se há mais de uma barra na expressão junto ao if..
      const tooManySlashes = (account.match(/\//g) || []).length > 1;

      if (!validExpression.test(account) || tooManySlashes) {
        alert('Entrada inválida. Certifique-se de que há no máximo um "/" e que a expressão é válida.');
        return this.clearDisplay();
      }
    
      try {
        account = eval(account); // Avalia somente após a validação
        if (!account && account !== 0) {
          alert('Conta inválida');
          return this.clearDisplay();
        }
        this.display.value = String(account);
      } catch (e) {
        alert('Erro ao processar a conta. Verifique e tente novamente.');
        return this.clearDisplay();
      }
    },       

    delOne(){
      this.display.value = this.display.value.slice(0, -1);
    },
    // auto explicativo
    clearDisplay() {
      this.display.value = '';
    },

    clickBoton(){ 
      document.addEventListener('click', e => { // usando arrowfunction pois sei q o this não vai mudar a referência
        const el = e.target;

        if(el.classList.contains('btn-num')) { 
          this.btnToDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.delOne();
        }

        if(el.classList.contains('btn-eq')) {
          this.EqualsOperation();
        }

      }); // .bind(this)) <-- caso eu não usasse a arrow function => <-- ao invés de usar o seu this (document), usa o this da Calculadora pra buscar a referência
    },
    btnToDisplay(value){
      this.display.value += value; 
    }
  };
}
const calculator = createCalculator();
calculator.start();