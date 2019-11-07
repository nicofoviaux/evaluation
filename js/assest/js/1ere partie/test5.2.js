
var total=0
var MyFonction=function(phrase="",lettre="")
{
    for(let i=0;i<phrase.length;i++)//fait une boucle pour analysé chaque lettres
    {
       if(phrase[i]==lettre)//si la lettre correspond au ce que demande l'utilisateur
       {
           total++//acremante total
       }
    }
    document.write("la lettre "+lettre+" apparait "+total+" fois dans cette phrase "+phrase);
}
MyFonction(prompt("entrer une phrase"),prompt("entrer une lettre"));//quand la fonction est declanche demande a l'utilisateur une phrase et la lettre a rechercher
