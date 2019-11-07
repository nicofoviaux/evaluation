//je prend mes variables//
var temp = prompt("saisir temperature");
var tens = prompt("saisir la tension");
var patient = confirm("un patient est branché");
var po = prompt("entrer le pouls");

console.log("chui pas medecin");
if(temp > 38 ){
    alert("le patient a de la fièvre!!!");
}
if( temp>41 && tens>25){
    alert("le patient va perdre patience!!!")
}
if(patient==false){
    alert("éconduire l'olibrius")
}
if(temp>42 ||(tens<25 && po>180)){
    alert("prevenir la famille!!!");
}
if(temp>40 || tens>=25){
    alert("hospitaliser le patient");
}
if(patient==true && po==0){
    alert("appeler le curé!!!");
};
