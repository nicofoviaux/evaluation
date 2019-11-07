var text=prompt("entrer un mot");
var long=text.length;//permet de conpté le nombre de caractere dans la chaine de caractére//
var total=0;
var i=0;
//voyelle= a e i o u y 
for(i=0;i<long;i++){
    if((text[i]=="a")||(text[i]=="e")||(text[i]=="i")||(text[i]=="o")||(text[i]=="u")||(text[i])=="y")
    {//dans le tableau i je met mes lettre en chaine de caractere si 1 des 6 condition est reunie//
        total++;//la variable total incremente/
    }
}alert("il y a:"+total+" voyelles dans: "+text);
