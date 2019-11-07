var tableau=[5,18,14,4,26,35,45];// declaration du tableau
var etat=true; //l'etat va arreté la boucle 
var step=1;//pour numeroté les passages
var ech=0//valeur de memoire
document.write("tableaux initiale: "+tableau+"<br></br>");// ecrit le tableau initiale
do{
    etat=false
    for(let i=0;i<tableau.length;i++){//lance une boucle
        if(tableau[i]>tableau[i+1]){//si la 1ere valeur et plus grande que la 2nd
            ech = tableau[i];//je met la 1ere dans la retenue
            tableau[i] = tableau[i+1]//je transfert les valeurs
            tableau[i+1] = ech; //je reprend la valeur
            etat = true;//je change l'etat en vrai
            document.write("Passage N°"+step+"<br>"+tableau+"<br><br>");//j'ecrit a chaque passage
            step++;//je rajoute 1 a chaque passage
        }
    }
}
while(etat)
