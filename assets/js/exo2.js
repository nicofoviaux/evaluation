var exo2 = document.getElementById("exo2");
exo2.addEventListener("click", eva2);
function eva2() {
    let N = parseInt(prompt("entrer le nombre butée"));
    let SOM = 0
    for (i = 0; i < N; i++) {
        SOM += i;
    }
    alert("la sommes des nombres jusque: " + N + " est egale à: " + SOM);
}