const redesSociais = [
  'Instagram',
  'YouTube',
  'FaceBook',
  'TikTok',
  'Twitte',
  'LinkedIn',
  'GitHub'
];

for (let i = 0; i < redesSociais.length; i++) {
  console.log(redesSociais[i]);
}

for (let i in redesSociais) {
  console.log(`${i}: ${redesSociais[i]}`);
}

for (let valor of redesSociais) {
  console.log(valor);
}

redesSociais.forEach((valor, indice, redes) => {
  console.log(valor);
  console.log(indice);
  console.log(redes);
})
