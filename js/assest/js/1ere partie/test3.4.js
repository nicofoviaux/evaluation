var sal = prompt("saisir le salaire");
var parti= 0;
var A= confirm("celibataire");
if(A==true){
    parti= parti+20;
}else{
    parti= parti+25;
}
var B=confirm("enfants?");// si on veut on peut appelé un variable plus tard//
if(B==true){
   var C= prompt("combien?");
    C=C*10;
   parti= parti+C;
}
if(sal<=1200){
    parti= parti+10;
}
if(parti>50){
    parti= 50
}
alert("la participation est de: "+parti+"%");


