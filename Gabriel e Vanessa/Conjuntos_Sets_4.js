const meuConjunto = new Set();

meuConjunto.add('Hilário');
meuConjunto.add('Patrícia');
meuConjunto.add('Hilário'); // só aceita um e só irá aparecer o primeiro.
meuConjunto.add(1970);
meuConjunto.add(true);
meuConjunto.add(true); // só aceita um e só aparecerá o primeiro.

meuConjunto.add(['Hilário', 'Patrícia']);
meuConjunto.add({ Nome: 'Patrícia' });
const casal = ['Hilário', 'Patrícia'];
meuConjunto.add(casal);

meuConjunto.delete(casal);

const valoresConjuntos_1 = meuConjunto.values();
// const valoresConjutnos_2 = meuConjunto.keys();

const entradas = meuConjunto.entries();

for (let valor of valoresConjuntos_1) {
  console.log(valor);
}

for (let entrada of entradas) {
  console.log(entrada);
}

//console.table(valoresConjuntos_1.next().value); // valoresConjuntos_1 é um objeto e o next passa o próximo valor do objeto.
//console.table(valoresConjuntos_1.next().value); // próximo valor
