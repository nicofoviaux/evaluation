var nb1= parseInt(prompt("1er nombre")) ;
var nb2= parseInt(prompt("2nd nombre")) ;
var op= prompt("taper votre operateur")
var result=0
switch(op){
    case "+"://si op=+//
    result=nb1+nb2;
        alert("le resultat est: "+result);
    break
    case "-":
        alert("le resultat est: "+nb1-nb2);
    break
    case "*":
        alert("le resultat est: "+nb1*nb2);
    break
    case "/":
        if((nb1==0) || (nb2==0)){
            alert("ERREUR");
        }else{
            alert("le resultat est: "+nb1/nb2);
        }
    break;
default: alert("operateur incorrect!")//c'est la condition si /*-+ n'est pas utilisé//
}

