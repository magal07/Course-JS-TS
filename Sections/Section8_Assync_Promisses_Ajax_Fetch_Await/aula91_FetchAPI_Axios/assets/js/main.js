/* buscar dados
fetch('pessoas.json')
.then(response => { // pegando a resposta
  if(!response.ok){
    console.error(`Response status: ${response.status}`);
  }
    return response.json() // convertemos pra json q retorna 1 nova promisse
  })
.then(json => loadingElementPage(json)); // mandado a promise para este json 
*/
// alteramos o modelo de leitura de um json acima para axios, mais simplista
axios('pessoas.json')
  .then(response => loadingElementPage(response.data));

function loadingElementPage(json) {
  const table = document.createElement('table');
  // iterando sobre objetos sendo: para cada elemento dentro de um array json ou 
  // objeto iterável, percorra e execute as instruções." 
  for(let pessoa of json){
    const tr = document.createElement('tr');

    let td1 = document.createElement('td'); // cria td
    td1.innerHTML = pessoa.nome; // busca nome no json
    tr.appendChild(td1); // acrescenta no td1

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.salario;
    tr.appendChild(td3);

    table.appendChild(tr);
  }
  const result = document.querySelector('.result');
  result.appendChild(table);
}
