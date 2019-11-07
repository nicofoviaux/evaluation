var A= parseInt(prompt("ecrire un nombre"));
var B= parseInt(prompt("ecrire un nombre supérieur au 1er"));
var i=A
var total=0

if(A>B){// j'empeche l'utilisateur d'inversé le sens //
    alert("ERROR");
}else{
    while(i<=B){
        total=total+i;
        i++;
    }
}alert(total);