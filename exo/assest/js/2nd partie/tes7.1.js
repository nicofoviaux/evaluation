var tab = new Array();
var somme = 0
var moy = 0
var i = 0
while (tab[i] != 0) {
    tab.push(tab[i] = Number(prompt("Entrez un nombre ou 0 pour arrêter la saisie")));// push permet de rajouté une cellule au tableau le prompt le rempli derectement
    somme += tab[i];
    i++;
}
tab.pop();//pop retire la derniere cellule du tableau
tab = tab.slice(tab[0], tab[(tab.lenght)]);//slice lit le tableau en fonction de ce qun'on lui demandedans les ()
moy = (somme / tab.length);
console.log("valeurs saisie: " + tab + "\n" + "somme: " + somme + "\n" + "Moyenne: " + moy);