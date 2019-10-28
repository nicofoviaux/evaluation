var but=document.getElementById("ok");// prend la variable du bouton
but.addEventListener("click",verif);//declanche un evenement si le bouton est cliqué et declanche la fonction verif
function verif(event){
    var nom= document.getElementById("nom");
    var prenom= document.getElementById("prenom");
    var ddn=document.getElementById("date");
    var CP= document.getElementById("cpostal");
    var ad=document.getElementById("adresse");
    var city= document.getElementById("ville");
    var mail= document.getElementById("email");
    var filtre=new RegExp(/^.+[a-z|A-Z|0-9]+$/);// creation du filtre "au moins 1 lettre ou un chiffre et caractere speciaux"
    var filtre1=new RegExp(/^((?:[013-9]\d)|(?:2[0-9ABab]))\d{3}$/)// filtre du code postale il doit contenir 5 nombres sauf la corse qui contien des lettres
    var filtre2=new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);// filtre email il divise le mail en 4 blocs le 1er accepte lettre, chiffre et caractere le 2nd @ obligatoire 3em pour la sone de texte et le 4em demande un .et des caractéres 
    var filtre4=new RegExp(/^(\d+)(\D*)(\s)(\D+)(\s)(.+)$/g)// filtre adresse il divise en 6 bloc don le 1er chiffre obligatoire le second pour bis (facultatif) un espace obligatoire la voie /rue ou autre un autre espace obligatoire et le reste de l adresse
    var missNom=document.getElementById("missnom");
    var missPre=document.getElementById("misspre");
    var missDdn=document.getElementById("missddn");
    var missCP=document.getElementById("missCP");
    var missAd=document.getElementById("missAd");
    var missCity=document.getElementById("missCity");
    var missEmail=document.getElementById("missEmail");
  
    if(!filtre.test(nom.value)){// on applique le filtre sur la value de la variable ent 
        event.preventDefault();// si erreur le formulaire et bloqué avec event.preventdefault
        missNom.textContent= "veuillez saisir le nom votre nom";// text content change le texte entre >< dune balise html
        missNom.style.color="red"; //si on le desire on peut changer la couleur du text comme l'exemple pour le vert (mis en commentaire car j'utilise une feuille css)
    }
    else if(nom.validity.valueMissing){
        event.preventDefault();
        missNom.textContent="champs vide"
        missNom.style.color="orange"

     
    }else{
        missNom.textContent= "OK";// si la condition est rempli je remet a l'origine
        missNom.style.color="red";
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