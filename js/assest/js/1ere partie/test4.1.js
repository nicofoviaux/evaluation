var nom=prompt("saisir un prénom"),saisie =nom;
var i=0;
while(saisie){
    if(saisie==undefined){// = : <--; == : =
        break;}
        alert("Noms : "+nom+" Nombre : "+i);
    saisie=prompt("saisir un prénom");
    nom+=" "+saisie;//je rajoute un nom a la liste de string et cree un espace entre les noms
    i++;  
}
alert("liste des nom :"+nom+" Vous avez saisi: "+i+" "+"noms");


    
    

 