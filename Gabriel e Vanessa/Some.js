const aPagarEmReais = [10, 20, 40, 100];
const temContaAlta = aPagarEmReais.some((valor) => valor > 100);
//Some teria que ter dentro do array alguma conta acima de um valor (valor > 100)
console.log(temContaAlta);
