import {
  buscaAlunoPorNota,
  listaDeAlunos,
  montaTurma,
  somaNotas,
  tirarPontoTurma,
} from './exemplos/arrays';
import { exemploIfLoop, exemploTipos } from './exemplos/primitivos';
import { filtraAlunoPorNota } from './exemplos/exemplo-objetos';
import { filtraCodigoProduto, filtraNomeProduto, calculaMedia, buscaMenorPreco} from './exemplos/exercicio';
/*
const turma = montaTurma();

console.log(filtraAlunoPorNota(turma));
*/

/*
    Dado um retorno da api, crie funções para as seguintes situações:

    Média de preço do pedido
    Nome do produto mais barato
    filtro por código do produto
    busca de produto por nome
*/

const api = {
  numeroPedido: '0001',
  cliente: 'Alvaro',
  items: [
    { produto: '0001', descricao: 'XBOX', preco: 5000 },
    { produto: '0002', descricao: 'PS5', preco: 5500 },
    { produto: '0003', descricao: 'PC', preco: 10000 },
    { produto: '0004', descricao: 'SWITCH', preco: 1000 },
    { produto: '0005', descricao: 'ATARI', preco: 500 },
  ],
};

console.log(calculaMedia(api.items));
console.log(buscaMenorPreco(api.items)?.descricao);
console.log(filtraCodigoProduto(api.items,"0002"));
console.log(filtraNomeProduto(api.items,"PS5"));