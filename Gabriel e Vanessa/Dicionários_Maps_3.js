const meuDicionario = new Map();
meuDicionario.set('Oi', 'Oi, tudo bem?');
meuDicionario.set('Blz', 'Beleza');
meuDicionario.set('Vc', 'Você');

meuDicionario.delete('Vc');

console.log(meuDicionario);
console.table(meuDicionario);

console.log(meuDicionario.delete('Hilário'));

meuDicionario.clear();
console.log(meuDicionario);
console.table(meuDicionario);

if (meuDicionario.has('Vc')) console.log('Você existe!');
if (!meuDicionario.has('Vc')) console.log('Você NÃO existe!');
