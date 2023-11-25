const listaLivros = require('./arrayOrdenado');

//Busca Binária, porque ela sempre divide uma busca em duas partes...
//...e procura em uma das partes.

function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if (de > ate) {
        return -1; //JS usa o -1 quando não encontra nada
    }

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 55));

//console.log(busca(listaLivros, 0, listaLivros.length - 1, 1));
// valor menor do que os que a lista contêm gerando undefined, pois...
//...o índice -1 não é um valor válido de índice em um array.

//console.log(busca(listaLivros, 0, listaLivros.length - 1, 36));
// valor inexistente no meio do array...
// ...gerando rangererror, call stack overflow.

/* Acima no console, foi passado um elemento que está na lista. Mas se 
passarmos um elemento inexistente, o loop fica infinito e acontece um 
stack overflow, gerando um erro e o código é encerrado com o erro(erro de pilha) */


