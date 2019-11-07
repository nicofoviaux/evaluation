var exo3 = document.getElementById("exo3");
exo3.addEventListener("click", eva3);
function eva3() {
    let myTab = new Array();
    let nb = Number;
    i = 0;
    do {
        nb = parseInt(prompt("ecrire un chiffre tapez 0 pour arreter la saisie"))
        myTab.push(nb);
        i++;
    } while (nb != 0);
    myTab.pop();
    var max = myTab.reduce(function (a, b) {
        return Math.max(a, b);
    });
    var min = myTab.reduce(function (c, d) {
        return Math.min(c, d);
    });
    alert("le nombre minimum saisie est: " + min + " et le nombre maximum saisie est: " + max);
    console.log(myTab);
    console.log("max: " + max);
    console.log("min: " + min);
}