// Lista de filmes
let filmes = ["Filme1", "Filme2", "Filme3", "Filme4", "Filme5", "Filme6"];

// Imprime os filmes no console usando repetição
for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i]);
}
// Tabuada de 8 com repetição
let numero = 8;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
// Tabuadas de 1 até 10 com repetição
for (let i = 1; i <= 10; i++) {
    console.log(`\nTabuada do ${i}:\n`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}