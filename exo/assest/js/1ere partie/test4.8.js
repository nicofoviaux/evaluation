var nb = parseInt(prompt("entré un nombre"));
var magic = parseInt(Math.random() * 100);
while (nb != magic) {//depart de boucle
    if (nb < magic) {
        alert("plus grand!!!");
    } else if (nb > magic) {
        alert("plus petit!!!");
    }
    nb = parseInt(prompt("entré un nombre")); //redemande un autre nombre
}
if (nb == magic) {
    alert("GAGNER!!!!!");
}
