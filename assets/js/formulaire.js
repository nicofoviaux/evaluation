var but=document.getElementById("submit");// prend la variable du bouton
but.addEventListener("click",verif);//declanche un evenement si le bouton est cliqué et declanche la fonction verif
function verif(event){
    var ent= document.getElementById("ent");
    var per= document.getElementById("per");
    var ad=document.getElementById("ad");
    var CP= document.getElementById("CP");
    var city= document.getElementById("city");
    var mail= document.getElementById("Email");
    var tel=document.getElementById("tel");
    var filtre=new RegExp(/^.+[a-zA-Z-0-9]+$/);// creation du filtre "au moins 1 lettre ou un chiffre et caractere speciaux"
    var filtre1=new RegExp(/^((?:[013-9]\d)|(?:2[0-9ABab]))\d{3}$/)// filtre du code postale il doit contenir 5 nombres sauf la corse qui contien des lettres
    var filtre2=new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);// filtre email il divise le mail en 4 blocs le 1er accepte lettre, chiffre et caractere le 2nd @ obligatoire 3em pour la sone de texte et le 4em demande un .et des caractéres 
    var filtre3=new RegExp(/^[0-9]{10}|[0-9\s.]{14}$/);// filtre du numero de telephone peut etre tapé en 0000000000 ou 00.00.00.00.00 ou 00 00 00 00 00  
    var filtre4=new RegExp(/^(\d+)(\D*)(\s)(\D+)(\s)(.+)$/g)// filtre adresse il divise en 6 bloc don le 1er chiffre obligatoire le second pour bis (facultatif) un espace obligatoire la voie /rue ou autre un autre espace obligatoire et le reste de l adresse
    var missEnt=document.getElementById("missEnt1");
    var missPer=document.getElementById("missPer");
    var missCity=document.getElementById("missCity");
    var missAd=document.getElementById("missAd");
    var missEmail=document.getElementById("missEmail");
    var missCP=document.getElementById("missCP");
    var missTel=document.getElementById("missTel")
  
    if(!filtre.test(ent.value)){// on applique le filtre sur la value de la variable ent 
        event.preventDefault();// si erreur le formulaire et bloqué avec event.preventdefault
        missEnt.textContent= "veuillez saisir le nom de l'entreprise";// text content change le texte entre >< dune balise html
    // missEnt.style.color="green"; si on le desire on peut changer la couleur du text comme l'exemple pour le vert (mis en commentaire car j'utilise une feuille css)
    }
    else{
      missEnt.textContent= "*";// si la condition est rempli je remet a l'origine
    }
    if(!filtre.test(per.value)){
        event.preventDefault();
        missPer.textContent= "veuillez saisir le nom de la personne a contacter";
      }
      else{
        missPer.textContent= "*";
      }
    if(!filtre.test(city.value)){
        event.preventDefault();
        missCity.textContent= "veuillez saisir la ville";  
    }
    else{
      missCity.textContent= "*";
    }
    if(!filtre4.test(ad.value)){
        event.preventDefault();
        missAd.textContent= "l'adresse n'est pas valide elle doit comporté:au moins 1 chiffre et ou bis , rue,un espace,et le nom de la rue";    
    }
    else{
      missAd.textContent= "*";
    } 
    if(!filtre1.test(CP.value)){
        event.preventDefault();
        missCP.textContent= "code postale invalide verifié qu'il est bien composé de 5 chiffres";
    }
    else{
      missCP.textContent= "*";
    }
    if(!filtre2.test(mail.value)){
        event.preventDefault();
        missEmail.textContent= "verifiez votre adresse mail";   
    }
    else{
      missEmail.textContent= "*";
    }
    if(!filtre3.test(tel.value)){
      event.preventDefault();
      missTel.textContent= "verifiez votre numero de telephone il peut etre composé ********** ou **.**.**.**.** ou ** ** ** ** **";     
    }
    else{
      missTel.textContent= "*";
    }
}
var ch1=document.getElementById("ch1");
ch1.addEventListener("click",txt);// je declanche le 2nd evenement quand je clique sur la barre de selection
function txt(){
    var op1=document.getElementById("op1");
       if(ch1.value==0){//cache la 1ere option
           op1.innerHTML="";
        }
        ch2.innerHTML=ch1.value// si je clique sur une option elle vien s'afficher dans le txtaera
}