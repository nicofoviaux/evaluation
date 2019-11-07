var multiple,sommeMoyenne,voyelles,nbcaractere;
var Menu1=function(multiple){
document.write('<script src="assest/js/test3.1.js"></script>');// document write me permet d'aller chercher mes exo a partir d'une balise html
}
var Menu2=function(sommeMoyenne){
document.write('<script src="assest/js/test4.4.js"></script>');
}
var Menu3=function(voyelles){
document.write('<script src="assest/js/test4.6.js"></script>');
}
var Menu4=function(nbcaractere){
   let total=0;
   let phrase=prompt("entrer une phrases")
   let lettre=prompt("entrer une lettres")
    for(let i=0;i<phrase.length;i++)
    {
       if(phrase[i]==lettre)
       {
           total++
       }
}
alert("la lettre "+lettre+" apparait "+total+" fois dans cette phrase "+phrase);
}
var choix=parseInt(prompt("1- Multiples"+"\n"+"2- Somme et moyenne"+"\n"+"3-Recherche du nombre de voyelles"+"\n"+"4-Recherche du nombre des caractére "+"\n"+"Entrer votre choix"));
switch(choix){//utilisation du switch pour faire le menu
    case 1:
      Menu1(multiple) ;
      break; 
    case 2:
        Menu2(sommeMoyenne);
      break;
    case 3:
        Menu3(voyelles);
        break;
    case 4:
    Menu4(nbcaractere);
    break;
default: alert("Entrer un nombre valide");
}
