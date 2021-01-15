  export interface Lista {
    produto: string;
    descricao: string;
    preco: number;
  }
  
  export type ListaPreco = Array<Lista>;
  
  export function filtraCodigoProduto(Pedido: ListaPreco, codigo: string) {
  
    return Pedido.filter((Pedido) => Pedido.produto === codigo);
  }

  export function filtraNomeProduto(Pedido: ListaPreco, nome: string) {
  
    return Pedido.filter((Pedido) => Pedido.descricao === nome);
  }

  export function calculaMedia(Pedido: ListaPreco) {

    return Pedido.reduce((soma, Pedido) => soma + Pedido.preco, 0) / Pedido.length;
  }
  
  export function buscaMenorPreco(Pedido: ListaPreco) {

    let Precos: Array<number> = [];

    Precos = Pedido.map((Pedido) => {
      return Pedido.preco;
    });

    return Pedido.find((Pedido) => Pedido.preco === Math.min.apply(Math, Precos));

  }