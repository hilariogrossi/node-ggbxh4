const meuConjunto = new Set();

meuConjunto.add('Hilário');
meuConjunto.add('Patrícia');
meuConjunto.add('Hilário'); // só aceita um e só irá aparecer o primeiro.
meuConjunto.add(1970);
meuConjunto.add(true);
meuConjunto.add(true); // só aceita um e só aparecerá o primeiro.

meuConjunto.add(['Hilário', 'Patrícia']);
meuConjunto.add({Nome: 'Patrícia'})
const casal = ['Hilário', 'Patrícia'];
meuConjunto.add(casal);

meuConjunto.delete(casal);

// meuConjunto.clear(); //Deleta tudo

console.table(meuConjunto);
