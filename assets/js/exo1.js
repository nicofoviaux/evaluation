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
