const aPagarEmReais = [10, 20, 40, 100];
const cotacaoDolar = 5;
const aPagarEmDolar = aPagarEmReais.map ((valor) => valor / cotacaoDolar);

console.table(aPagarEmDolar);
