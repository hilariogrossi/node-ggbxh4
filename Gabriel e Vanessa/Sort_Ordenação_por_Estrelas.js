const clientes = [
  ['Vanessa', 4],
  ['Gabriel', 1],
  ['Andréia', 3],
  ['Juliana', 5],
  ['Gilberto', 2],
];
clientes.sort((a, b) => b[1] - a[1]);

console.table(clientes);
