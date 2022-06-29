const contasDaVanessa = [10, 20, 30, 40];
const contasDoGabriel = [5, 6, 7, 8];
let contasDosCDFs = contasDaVanessa.concat(contasDoGabriel);

console.log(contasDosCDFs);
console.table(contasDosCDFs);

contasDosCDFs.fill(0); //Zera todos os arrays
console.table(contasDosCDFs);
