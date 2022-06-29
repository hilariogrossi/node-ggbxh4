const contasDaVanessa = [10, 20, 30, 40, [1, 2, 3, 4]];
const novasContasDaVanessa = contasDaVanessa.flat(); //Pega e junta todos os arrays dentro de um mesmo array
console.table(novasContasDaVanessa);
const contasDoGabriel = [5, 6, 7, 8];
let contasDosCDFs = novasContasDaVanessa.concat(contasDoGabriel);

console.log(contasDosCDFs);
console.table(contasDosCDFs);
