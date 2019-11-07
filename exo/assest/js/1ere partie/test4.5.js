var A = parseInt(prompt("entrer un nombre"));
var B = parseInt(prompt("entrer un nombre"));
var res = 0
i = 1
do {//do.. while pour injecté les condition av le while
    res = A * i;
    alert(A + "*" + i + "=" + res);
    i++;
} while (i <= B);