const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus(); 
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar'); // criando classe do botão
    botaoApagar.setAttribute('class', 'apagar'); // criando classe do botão
    botaoApagar.setAttribute('title', 'apagar esta tarefa'); // criando título ao passar o mouse 'apagar esta tarefa'
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi()
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li)
    salvarTarefa();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
}); 

// Removendo 1 <li> 
document.addEventListener('click', function(e){
    const el = e.target; // target 
    if(el.classList.contains('apagar')){
       el.parentElement.remove();
       salvarTarefa(); // limpando storage do navegador
    }
});

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li'); // buscar <li's> dentro de tarefas
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText.replace('Apagar', '').trim(); // trim remove os espaços
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // criado uma string de array E convertendo pra json
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // convertendo para um obj javascript 
    console.log(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();