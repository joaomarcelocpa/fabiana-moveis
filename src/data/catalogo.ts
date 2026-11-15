import type { Categoria } from './tipos'

/**
 * ATENÇÃO: produtos, fotos e preços abaixo são EXEMPLOS.
 * Troque pelos produtos reais da loja: nome, preço (em reais), foto (arquivo em public/img) e texto alternativo.
 */
export const CATALOGO: Categoria[] = [
  {
    id: 'sofas',
    titulo: 'Sofás e poltronas',
    descricao: 'Conforto para a sala de estar.',
    itens: [
      { nome: 'Sofá de canto cinza', preco: 2499, foto: 'f189229272', alt: 'Sala com sofá de canto cinza e painel de madeira' },
      { nome: 'Poltrona de veludo verde', preco: 899, foto: 'f196834603', alt: 'Poltrona de veludo verde ao lado de uma mesa lateral' },
      { nome: 'Poltrona estampada', preco: 749, foto: 'f196715604', alt: 'Poltrona com estampa de folhas tropicais' },
    ],
  },
  {
    id: 'camas',
    titulo: 'Camas e colchões',
    descricao: 'Noites bem dormidas, do box ao colchão.',
    itens: [
      { nome: 'Cama box de casal', preco: 1299, foto: 'f197345534', alt: 'Cama de casal com cabeceira cinza e manta azul' },
      { nome: 'Cama com cabeceira de madeira', preco: 1899, foto: 'f196345530', alt: 'Cama com cabeceira de madeira em formato de montanhas' },
      { nome: 'Cama de casal com travesseiros', preco: 1599, foto: 'f187101691', alt: 'Cama de casal com travesseiros e cortina escura' },
    ],
  },
  {
    id: 'guarda',
    titulo: 'Guarda-roupas e cômodas',
    descricao: 'Espaço para guardar com organização.',
    itens: [
      { nome: 'Criado-mudo preto', preco: 349, foto: 'f196191153', alt: 'Criado-mudo preto com lanterna decorativa' },
      { nome: 'Quarto com cabeceira geométrica', preco: 3490, foto: 'f187101722', alt: 'Quarto com cabeceira estofada e parede com desenho geométrico' },
      { nome: 'Cabeceira estofada', preco: 799, foto: 'f187101710', alt: 'Cabeceira estofada com almofadas brancas' },
    ],
  },
  {
    id: 'cozinha',
    titulo: 'Armários de cozinha',
    descricao: 'Cozinha completa e bem aproveitada.',
    itens: [
      { nome: 'Cozinha em L vermelha', preco: 4290, foto: 'f196789423', alt: 'Cozinha em L com armários vermelhos' },
      { nome: 'Cozinha branca com bancada de madeira', preco: 5190, foto: 'f196345538', alt: 'Cozinha com armários brancos e bancada de madeira' },
      { nome: 'Cozinha com bancada de madeira', preco: 3890, foto: 'f189229280', alt: 'Cozinha com bancada de madeira e prateleiras' },
    ],
  },
  {
    id: 'mesas',
    titulo: 'Mesas e cadeiras',
    descricao: 'Para as refeições em família.',
    itens: [
      { nome: 'Mesa de madeira com 4 cadeiras', preco: 1690, foto: 'f187101696', alt: 'Mesa de madeira posta com quatro cadeiras verdes' },
      { nome: 'Mesa de jantar com painel e rack', preco: 2190, foto: 'f187101698', alt: 'Sala de jantar com mesa, cadeiras e painel de madeira com TV' },
      { nome: 'Mesa rústica de madeira', preco: 1990, foto: 'f189437189', alt: 'Mesa rústica de madeira com cadeiras' },
    ],
  },
  {
    id: 'eletro',
    titulo: 'Geladeiras e fogões',
    descricao: 'Eletrodomésticos para o dia a dia.',
    itens: [
      { nome: 'Forno e cooktop embutidos', preco: 1799, foto: 'f196345538', alt: 'Forno e cooktop embutidos em cozinha branca' },
      { nome: 'Fogão e forno', preco: 1299, foto: 'f186239762', alt: 'Cozinha com fogão e forno' },
      { nome: 'Cafeteira automática', preco: 1099, foto: 'f195360285', alt: 'Cafeteira automática sobre bancada de madeira' },
    ],
  },
]

/** Opções da lista "O que você procura" do formulário. */
export const OPCOES_PROCURA = [...CATALOGO.map((c) => c.titulo), 'Outro produto']
