const aPagarEmReais = [10, 20, 40, 100];
const totalAPagar = aPagarEmReais.reduce(
  (acumulador, valor) => acumulador + valor,
  0
);
//Acumulador, como o próprio nome diz, acumula os valores do array
//O 0 (zero) depois da soma dignifica de onde partir para somar no acumulador
console.log(totalAPagar);
