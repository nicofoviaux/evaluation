var exo5 = document.getElementById("exo5");
exo5.addEventListener("click", eva5);
function eva5() {
    let multiplicateur = parseInt(prompt("entrer votre table de multiplication"));
    let result = 0
    for (i = 0; i <= 10; i++) {
        result = i * multiplicateur;
        console.log(i + " * " + multiplicateur + " = " + result);
    }
}