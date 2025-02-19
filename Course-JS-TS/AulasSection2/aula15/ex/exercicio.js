// versão do professor

const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo'); // selecionando elemento do index e salvando na variável numeroTitulo
const texto = document.getElementById('texto'); // selecionando elemento do index e salvando na variável texto


                    // EXERCÍCIO DO PROFESSOR:
numeroTitulo.innerHTML = numero; // inserindo o número digitado pelo usuário no elemento numeroTitulo
                  
       texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
       texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
       texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}`;
       texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}`;
       texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}`;
       texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;



/* minha versão
const number1 = prompt('Digite um número:');
const num = Number(numero);

        document.body.innerHTML = `<h1>Seu número é: ${number1}<br /></h1>`;
        document.body.innerHTML += `<p>Raiz quadrada: ${number1 ** 0.5}</p>`;
        document.body.innerHTML += `<p>${number1} é inteiro: ${Number.isInteger(num)}</p>`;
        document.body.innerHTML += `<p>É NaN: ${Number.isNaN(number1)}`;
        document.body.innerHTML += `<p>Arredondando para baixo: ${Math.floor(number1)}`;
        document.body.innerHTML += `<p>Arredondando para cima: ${Math.ceil(number1)}`;
        document.body.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}`;
        */ 