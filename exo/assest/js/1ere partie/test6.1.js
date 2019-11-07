var nbcol = parseInt(prompt("entrer le nombre de colones"));
var table = Array(nbcol);
for (i = 0; i <= nbcol; i++) {
    table[i] = prompt("entrer le contenu de la case: " + i);
}
console.log(table)
