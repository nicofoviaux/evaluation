function GetInteger(){
     ent=parseInt(prompt("entrer un entier au clavier"));//defini la valeur de ent
}
function InitTab(length){//length prend la valeur de ent
    console.log(length);
    myTab= new Array(length);
}
function SaisieTab(tab, length){//tab prend la valeur de myTab;length prend la valeur de ent
     for(let i=0;i < length;i++){//fait une boucle jusqua la butee designe par l'utilisateur
        tab[i]=parseInt(prompt("entrer le contenu de la case"));//demande a l'utilisateur de rentré le contenue du tableau en fonction
        console.log(tab[i]);
    }
}
function AfficheTab(tab){//tab prend la valeur de MyTab
    for(let i = 0; i < tab.length; i++){
        document.write(tab[i]+" ");//affiche au suivant le contenu du tableau en les espacant
    }
    document.write("<br>");// passe une ligne
}
function RechercheTab(tab){
    var n=parseInt(prompt("entrer la cellule a affiché"));//demande n a l'utilisateur
    document.write("Cellule N°"+n+" = "+tab[n-1]+"<br>");//affiche la cellule N demandé a l'utilisateur
}
function InfoTab(tab, length){
    var max = 0;//declaration de variable de la fonction
    var somme =0;
    var moyenne = 0;
    for(let i = 0; i < length; i++){//faire un boucle pour prendre chaque valeur du tableau
        somme+=tab[i];//+= pour ajoute tab[i] a la somme
        if(max < tab[i]){
            max = tab[i];//affecte le nombre de colona a max
        }
    }
    moyenne = somme/length;//calcul de la moyenne
    console.log(somme);//pour voir la somme dans la console
    document.write("Max = "+max+" Moyenne = "+(moyenne));//ecris la moyenne
}  
GetInteger();
InitTab(ent);//donne la valeur de lenght ici ent=lenght
SaisieTab(myTab,ent) ;
AfficheTab(myTab);
RechercheTab(myTab,ent);
InfoTab(myTab, ent);
