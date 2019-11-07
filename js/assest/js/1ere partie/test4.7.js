var A= parseInt(prompt("entrer un nombre"));
var prem= 0 
var i=2

for(i=2;i<=(Math.sqrt(A));i++){//math.sqrt = racine carré en js
    if(A%i==0){
prem++;//si le nombre n'est pas premier la variable prem va incrementé
    }
}
if(prem>=1){
    alert("le nombre n'est pas premier!");
}else{
    alert("le nombre est premier!");
}
