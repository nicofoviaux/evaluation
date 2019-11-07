var exo4 = document.getElementById("exo4");
exo4.addEventListener("click", eva4);
function eva4() {
    let jeune = 0;
    let moyens = 0;
    let vieux = 0;
    let saisie;
    do {
        saisie = parseInt(prompt("entrer l'age finir par le centenaire"));
        if (saisie > 40) {
            vieux = vieux + 1;
        } else if (saisie >= 20 && saisie <= 40) {
            moyens = moyens + 1;
        } else {
            jeune = jeune + 1;
        }
    } while (saisie < 100);
    alert("vous avez saisie: " + "\n" + jeune + " personnes de jeunes age " + "\n" + moyens + " personnes d'age moyen" + "\n" + vieux + " personne agéé");
    console.log("jeune: " + jeune);
    console.log("moyen: " + moyens);
    console.log("vieux: " + vieux);
}