var exo1=document.getElementById("exo1");
exo1.addEventListener("click",eva1);
function eva1(){
// declaration des variable de la fonction
let PU=parseInt(prompt("entrez le prix unitaire du produit"));
let QTECOM=parseInt(prompt("Quantité commandé"));
let TOT= PU*QTECOM;// la variable total prend directement la multiplication de PU et QTCOM
let PORT=0;
let REM=0;
let PAP=0;
if(TOT>500){
    PORT=0;
}
else {
    PORT= Math.max(6,TOT*(2/100));//math.max me sert a definir ma valeur minimale de mes frais de ports
}
if(TOT>100 && TOT<200){
    REM=5;
}else if(TOT>200){
    REM=10;
}
PAP=TOT-(TOT*(REM/100))+PORT;
alert("vous devez payé: "+PAP);
console.log("TOT: "+TOT);
console.log("frais de port: "+PORT);
console.log("remise: "+REM/100);
}
//----------------------------------------------------------------------------------------
var exo2= document.getElementById("exo2");
exo2.addEventListener("click",eva2);
function eva2(){
    let N=parseInt(prompt("entrer le nombre butée"));
    let SOM=0
for(i=0;i<=N;i++){
SOM+=i;
}
alert("la sommes des nombres jusque: "+N+" est egale à: "+SOM);
}
//--------------------------------------------------------------------
var exo3=document.getElementById("exo3");
exo3.addEventListener("click",eva3);
function eva3 (){
    let myTab=new Array();
    let nb=Number;
    i=0;
    do { nb=parseInt(prompt("ecrire un chiffre tapez 0 pour arreter la saisie"))
        myTab.push(nb);
        i++;
    }while(nb!=0);
    myTab.pop();
    var max=myTab.reduce(function (a,b){
        return Math.max (a,b);
    });
    var min=myTab.reduce(function(c,d){
        return Math.min(c,d);
    });
    alert("le nombre minimum saisie est: "+min+" et le nombre maximum saisie est: "+max);
    console.log(myTab);
    console.log("max: "+max);
    console.log("min: "+min);

}
//------------------------------------------------------------------------------
var exo4=document.getElementById("exo4");
exo4.addEventListener("click",eva4);
function eva4(){
    let jeune=0;
    let moyens=0;
    let vieux=0;
    let saisie;
    do{
     saisie=parseInt(prompt("entrer l'age finir par le centenaire"));
        if(saisie>40){
            vieux=vieux+1;
        }else if(saisie>=20 && saisie<=40){
            moyens=moyens+1;
        }else{
            jeune=jeune+1;
        }
    }while(saisie<100);
alert("vous avez saisie: "+"\n"+jeune+" personnes de jeunes age "+"\n"+moyens+" personnes d'age moyen"+"\n"+vieux+" personne agéé");
console.log("jeune: "+jeune);
console.log("moyen: "+moyens);
console.log("vieux: "+vieux);
}
//---------------------------------------------------------------------------------
var exo5=document.getElementById("exo5");
exo5.addEventListener("click", eva5);
function eva5(){
    let multiplicateur=parseInt(prompt("entrer votre table de multiplication"));
    let result=0
    for(i=0;i<=10;i++){
        result=i*multiplicateur;
        console.log(i+" * "+multiplicateur+" = "+result);
    }
}
//------------------------------------------------------------------------------------------
var exo6=document.getElementById("exo6");
exo6.addEventListener("click", eva6);
function eva6(){
    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    let nom= prompt("entré un des prenom ");
    let pos=tab.indexOf(nom);
    console.log(pos);
    if(pos==-1){
        alert("le nom que vous avez saisie n'est pas dans la liste");
    }else{
       tab.splice(pos,1);
       tab.push(" ");
    }
    console.log(tab);
}