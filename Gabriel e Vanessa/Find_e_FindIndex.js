const aPagarEmReais = [10, 20, 40, 100];
const aPagarVanessa = aPagarEmReais.find((valor) => valor > 30);
//find retorna a primeira (o valor e não um novo array) ocorrência da condição
const aPagarVanessa1 = aPagarEmReais.findIndex((valor) => valor > 30);
//findindex encontra a posição no array
console.log(aPagarVanessa);
console.log(aPagarVanessa1);
