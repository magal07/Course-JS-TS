// Array de objetos que contém informações sobre as tags a serem criadas e seus textos
const elementos = [
    {tag: 'p', texto: 'Qualquer texto'},  // Objeto com tag 'p' e texto associado
    {tag: 'div', texto: 'Frase 2'},       // Objeto com tag 'div' e texto associado
    {tag: 'section', texto: 'Frase 3'},   // Objeto com tag 'section' e texto associado
    {tag: 'footer', texto: 'Frase 4'},    // Objeto com tag 'footer' e texto associado
];

// Seleciona o elemento do DOM que possui a classe 'container'
const container = document.querySelector('.container');

// Cria um elemento <div> que será usado como contêiner para as novas tags
const div = document.createElement('div');

// Loop para iterar sobre o array 'elementos'
for(let i = 0; i < elementos.length; i++){
    // Desestruturação para extrair as propriedades 'tag' e 'texto' do objeto atual
    let {tag, texto} = elementos[i];
    
    // Cria um novo elemento HTML com a tag especificada
    let tagCriada = document.createElement(tag);
    
    // Define o conteúdo do elemento criado com o texto especificado
    // tagCriada.innerText = texto; // ou innerHTML
    let textoCriado = document.createTextNode(texto); // variação para o modelo acima
    tagCriada.appendChild(textoCriado); // continuação da variação para o modelo da linha 24
    // Adiciona o novo elemento criado como filho da <div> principal
    div.appendChild(tagCriada); // appendChild adiciona o elemento ao DOM
}

// Adiciona a <div> principal (com as novas tags) ao elemento com classe 'container'
container.appendChild(div);
