// Função para realizar uma requisição AJAX utilizando o objeto XMLHttpRequest
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // Criando um novo objeto XMLHttpRequest
    // Configurando a requisição com o método, URL e se será assíncrona (true)
    xhr.open(obj.method, obj.url, true);
    xhr.send(null); // Enviando a requisição sem corpo (null para métodos como GET)

    // Adicionando um listener para quando o carregamento da requisição estiver completo
    xhr.addEventListener("load", () => {
      // Verificando se o status HTTP indica sucesso (código entre 200 e 299)
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText); // Chamando a função de sucesso com a resposta em texto
      } else {
        reject(xhr.statusText); // Chamando a função de erro com o texto do status
        // Comentários adicionais para possível melhoria de tratamento de erros:
        //   // Código do status HTTP: xhr.status
        //   // Mensagem correspondente: xhr.statusText
      }
    });
  });
};

// Adiciona um evento de clique em qualquer elemento da página
document.addEventListener("click", (e) => {
  const el = e.target; // O elemento que foi clicado
  const tag = el.tagName.toLowerCase(); // Obtendo o nome da tag em letras minúsculas
  if (tag === "a") {
    // Verificando se o elemento clicado é uma tag <a>
    e.preventDefault(); // Previnindo o comportamento padrão de redirecionamento do link
    carregaPagina(el); // Carregando a página associada ao link clicado
  }
});

// Função para carregar a página a partir de um elemento <a> clicado
async function carregaPagina(el) {
  const href = el.getAttribute("href"); // Obtendo o atributo href do elemento

  const objConfig = {
    method: "GET", // Método HTTP para a requisição (neste caso, GET)
    url: href // URL do recurso a ser carregado
  };
try {
 const response = await request(objConfig);
    loadResult(response);
} catch(e){
  console.log(e);
}
}
 // com success e error
// success(response) { // Função executada em caso de sucesso
//   loadResult(response); // Carregando o conteúdo da resposta na página
// },
// error(errorText) { // Função executada em caso de erro
//   console.log(errorText); // Logando o erro no console para depuração
// }

// Função para inserir o conteúdo carregado na área especificada na página
function loadResult(response) {
  const result = document.querySelector(".resultado"); // Selecionando o elemento com a classe 'resultado'
  result.innerHTML = response; // Atualizando o conteúdo HTML com a resposta
}
