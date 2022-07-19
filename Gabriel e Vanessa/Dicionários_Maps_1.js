const meuDicionario = new Map();
meuDicionario.set('Oi', 'Oi, tudo bem?');
meuDicionario.set('Blz', 'Beleza');
meuDicionario.set('Vc', 'Você');

console.log(meuDicionario);
console.table(meuDicionario);

const palavra = meuDicionario.get('Blz');
console.log(palavra);
