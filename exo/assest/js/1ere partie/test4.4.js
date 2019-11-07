var i = 0
var A = parseInt(prompt("ecrire un nombre"))
var B = A
var total = 0
while (B) {
    if (B == undefined) {//undefined veut dire que si le champ est vide //
        break;//j'arrete la boucle//
    }
    total = total + B;
    B = parseInt(prompt("ecrire un nombre"));
    i++;

}
alert("total=" + total + " " + "nb " + i);
var moy = total / i;
alert("moyénne= " + moy);

