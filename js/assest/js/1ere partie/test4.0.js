/*var i=1;

for (i=1; i<=10; i++){
    alert(i*2);
}
// calcul de 1 a 10 //

var i2 =1;
while (i2 <=10){
    var res= 2*i2;// le simple = veut dire <-- en algo//
    if(i2==6){// pas oublier le == qui est juste un = //
        break;//permet juste d'arreté la boucle si la condition est rempli//
    }
    alert("le resultat de 2 x"+i2+" est : "+res);
    i2++;

}

// for = valeur+condi+actu//
//while (juste les conditions)//

var i3= 1;
while(i3 <=10){
    var res= 2*i3;
    if(i3==3){//je dit juste de sauté le chiffre 3//
        i3++
        continue;//mais je continu ma boucle jusque la fin//
    }
    alert(res);
    i3++;
}*/
var i4=1;
do{
    var res=2*i4;
    alert("2x"+i4+"="+res);
    i4++
}while(i4<=10);