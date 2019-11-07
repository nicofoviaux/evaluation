var heure1=prompt("entrer l'heure en format 00:00:00");// demande l'heure en chaine de caractere
var heure2=prompt("entrer l'heure en format 00:00:00");
Hour1(heure1,heure2);

function Hour1(nb1,nb2){// nomme la fonction hour1
var hour1=nb1.split(":");// divise la chaine en tableau
var hour2=nb2.split(":");
var H=parseInt(hour1[0])+parseInt(hour2[0]);//additionne les h
var M=parseInt(hour1[1])+parseInt(hour2[1]);
var S=parseInt(hour1[2])+parseInt(hour2[2]);
while(S>59){
    M++;
    S-=60;
}
while(M>59){
    H++;
    M-=60;
}
while(H>23){
    S++;
    H-=24;
}
var result=H+":"+M+":"+S
    alert("l'addition des horaire est de:"+result);
}
