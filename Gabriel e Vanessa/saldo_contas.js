let saldo_contas = [100, 200, 40, 1.90, 300, 1000, 9.99];
const total = saldo_contas.reduce((acumlador, valor) => acumlador + valor);
console.log('R$', total);
