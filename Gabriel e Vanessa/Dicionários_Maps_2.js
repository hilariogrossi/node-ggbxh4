const meuDicionario = new Map();

const indiceContatos = [
  ['Hilário', '999023521'],
  ['Patrícia', '998032500'],
  ['Gabriel', '99999-1111'],
  ['Pedro Henrique', '11111-9999'],
];

//meuDicionario.set(['Hilário', '999023521']); // O JS entende que são objetos diferentes
meuDicionario.set(indiceContatos[0], { Nascimento: '21/10/1970' }); // O JS entende que são objetos diferentes
meuDicionario.set(indiceContatos[1], { Nascimento: '15/08/1967' });
meuDicionario.set(indiceContatos[2], { Nascimento: '09/08/1999' });
meuDicionario.set(indiceContatos[3], { Nascimento: '22/11/2001' });

console.table(meuDicionario);

const patricia = meuDicionario.get(indiceContatos[1]);
console.table(patricia);
