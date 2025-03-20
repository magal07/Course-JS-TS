class RemoteControl{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }
  // métodos de instância
  increase(){
    this.volume += 2;
  }
  decrease() {
    this.volume -= 2;
  }
// método estático: não tem acesso aos dados da instância.
  static changeBattery() {
    console.log('Ok, i will go changed')
  }

}

const control1 = new RemoteControl('LG');
control1.increase();
control1.increase();
control1.increase();
console.log(control1);
RemoteControl.changeBattery();