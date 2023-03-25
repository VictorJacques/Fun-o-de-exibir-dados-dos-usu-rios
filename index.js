const usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];

const frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];

const frutasReverso = frutas.reverse();

const novaLista = [];

for (let i = 0; i < frutas.length; i++) {
  /* console.log(usuarios[i]);
  console.log(frutasReverso[i]); */
  novaLista.push(`${usuarios[i]} - ${frutasReverso[i]}`);
}

console.log(novaLista);
