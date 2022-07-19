const meuDicionario = new Map();
meuDicionario.set('Oi', 'Oi, tudo bem?');
meuDicionario.set('Blz', 'Beleza');
meuDicionario.set('Vc', 'Você');

for (let entrada of meuDicionario.entries()) {
  console.log(entrada);
}

for (let valor of meuDicionario.values()) {
  console.log(valor);
}

for (let chave of meuDicionario.keys()) {
  console.log(chave);
}

console.log(meuDicionario.size); // comprimento do dicionário
