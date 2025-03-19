class eletronicDevice{
  constructor(name){
    this.name = name;
    this.on = false;
  }
  connected() {
    if(this.on) {
      console.log(this.name, 'device connected')
      return;
    }
    this.on = true;
  }
  disconnected(){
    if(!this.on) {
      console.log(this.name, 'device disconnected')
      return;
    }
    this.on = false;
  }
  iMessageStarted(){
    if(this.on === true){
      console.log('Welcome');
    } else {
      console.log('Device off');
    }
  }
}
// extends = extend the class to outher's class's  (heritage)
class Smartphone extends eletronicDevice {
  constructor(name, color, model){
    // super: searching for parameters and constructor of eletronicDevice (pai)
    super(name); 
    this.color = color;
    this.model = model;
  }
}

class Tablet extends eletronicDevice {
  constructor(name, heHasWiFi){
    super(name);
    this.heHasWiFi = heHasWiFi;
  }
  // methods tablet
  connected(){
    console.log('You changed method connected.');
  }
  iMessageStarted(){
    if(this.on === true){
      console.log('Welcome');
    } else {
      console.log('Device off');
    }
  }
}

const s1 = new Smartphone('Samsumg', 'Black', 'Galaxy S24 Ultra - Melhor que iphonix');
console.log(s1);
s1.iMessageStarted();
const t1 = new Tablet('iPad', true);
t1.connected();
t1.iMessageStarted();
// console.log(t1.on);

