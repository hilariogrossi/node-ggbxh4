const aPagarEmReais = [10, 20, 40, 100];
const contasBaixas = aPagarEmReais.every((valor) => valor < 100);
//Every teria que ter dentro do array todas abaixo de um valor (valor < 100)
console.log(contasBaixas);
