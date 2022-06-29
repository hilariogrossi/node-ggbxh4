class Programador {
  constructor(
    nome,
    nascimento,
    casado,
    linguagensFavoritas = [],
    trabalhoDesde = null
  ) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.casado = casado;
    this.linguagensFavoritas = linguagensFavoritas;
    this.trabalhoDesde = trabalhoDesde;
  }
}

const hilario = new Programador(
  'Hilário de Oliveira',
  '21/10/1970',
  true,
  ['Python', 'JavaScript', 'HTML'],
  1993
);

const patricia = new Programador(
  'Patrícia Minardi',
  '15/08/1967',
  true,
  ['JavaScript', 'Python', 'HTML'],
  1996
);

console.table(hilario);
console.table(patricia);

for (const propriedade in patricia) {
  console.log(`${propriedade}: ${patricia[propriedade]}`);
}
