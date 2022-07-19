const familia = new Set(['Hilário', 'Patrícia', 'Gabriel', 'Pedro']);

if (!familia.has('Matheus')) familia.add('Matheus');

console.table(familia);

console.log(familia.size); // size vê a quantidade de elementos tem dentro do conjunto.
