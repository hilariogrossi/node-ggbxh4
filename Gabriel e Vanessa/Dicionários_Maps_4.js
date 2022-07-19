const meuDicionario = new Map();
meuDicionario.set('Oi', 'Oi, tudo bem?');
meuDicionario.set('Blz', 'Beleza');
meuDicionario.set('Vc', 'Você');

meuDicionario.forEach((valor, chaves) => {
  console.log(`${chaves}: ${valor}`);
});
