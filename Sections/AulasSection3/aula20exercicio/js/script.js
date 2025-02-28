// IIFE
function meuEscopo(){
    const form = document.querySelector('.form'); // dava pra selecionar o form usando a classe .form, o id se tivesse #form e etc.
   const resultado = document.querySelector(".resultado");

    const pessoas = [];

    // forma de utilizar     
    // form.onsubmit = function (evento) {
    //     event.preventDefault();
    //     alert(1);
    //     console.log("foi enviado");
    // };

    // let contador = 1;
    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector(".nome")
        const sobrenome = form.querySelector(".sobrenome")
        const peso = form.querySelector(".peso")
        const altura = form.querySelector(".altura")

        console.log(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push({
            nome: nome.Value,
            sobrenome: sobrenome.Value,
            peso: peso.Value,
            altura: altura.Value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` + 
        `${altura.value} ${peso.value}</p>`
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();