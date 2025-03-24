import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';
import GenerateCPF from './modules/GeraCPF';

(function(){
  const generate = new GenerateCPF();
  const cpfGenerate = document.querySelector('.cpf-gerado');
  cpfGenerate.innerHTML = generate.generateNewCpf();
})();