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
    var filtre=/^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœÉ]+(?:(?:\-| )?[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœÉ]+)*$/;// creation du filtre "au moins 1 lettre ou un chiffre et caractere speciaux"
    var filtre1=(/^((?:[013-9]\d)|(?:2[0-9ABab]))\d{3}$/)// filtre du code postale il doit contenir 5 nombres sauf la corse qui contien des lettres
    var filtre2=new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);// filtre email il divise le mail en 4 blocs le 1er accepte lettre, chiffre et caractere le 2nd @ obligatoire 3em pour la sone de texte et le 4em demande un .et des caractéres 
    var filtre4=new RegExp(/^(\d+)(\D*)(\s)(\D+)(\s)(.+)$/g)// filtre adresse il divise en 6 bloc don le 1er chiffre obligatoire le second pour bis (facultatif) un espace obligatoire la voie /rue ou autre un autre espace obligatoire et le reste de l adresse
    var missNom=document.getElementById("missnom");
    var missPre=document.getElementById("misspre");
    var missDdn=document.getElementById("missddn");
    var missCP=document.getElementById("missCP");
    var missAd=document.getElementById("missAD");
    var missCity=document.getElementById("missCity");
    var missEmail=document.getElementById("missEmail");
    
    if(nom.validity.valueMissing){
    event.preventDefault();
    missNom.textContent="champs vide"
    missNom.style.color="yellow"
}
    else if(!filtre.test(nom.value)){// on applique le filtre sur la value de la variable ent 
        event.preventDefault();// si erreur le formulaire et bloqué avec event.preventdefault
        missNom.textContent= "veuillez saisir des lettres";// text content change le texte entre >< dune balise html
        missNom.style.color="red"; //si on le desire on peut changer la couleur du text comme l'exemple pour le vert (mis en commentaire car j'utilise une feuille css)
    }
    else{
        missNom.textContent= "OK";// si la condition est rempli je remet a l'origine
        missNom.style.color="green";
    }
    if(prenom.validity.valueMissing){
        event.preventDefault();
        missPre.textContent= "champ vide";
        missPre.style.color="yellow";
      }
      else if(!filtre.test(prenom.value)){
        event.preventDefault();
        missPre.textContent="veuillez saisir des lettres";
        missPre.style.color="red";
    }
    else{
        missPre.textContent= "OK";
        missPre.style.color="green";
      }
      if(city.validity.valueMissing){
        event.preventDefault();
        missCity.textContent="champs vide";
        missCity.style.color="yellow";
      }
    else if(!filtre.test(city.value)){
        event.preventDefault();
        missCity.textContent= "veuillez saisir la ville"; 
        missCity.style.color="red";
    }
    else{
      missCity.textContent= "OK";
      missCity.style.color="green";
    }
    if(ad.validity.valueMissing){
        event.preventDefault();
        missAd.textContent="champ vide";
        missAd.style.color="yellow"
    }
    else if(!filtre4.test(ad.value)){
        event.preventDefault();
        missAd.textContent="l'adresse n'est pas valide elle doit comporté:au moins 1 chiffre et ou bis , rue,un espace,et le nom de la rue";    
        missAd.style.color="red";
    }
    else{
      missAd.textContent= "OK";
      missAd.style.color="green";
    } 
    if(CP.validity.valueMissing){
        event.preventDefault();
        missCP.textContent= "champ vide";
        missCP.style.color="yellow"
    }
    else if(!filtre1.test(CP.value)){
        event.preventDefault();
        missCP.textContent= "code postale invalide verifié qu'il est bien composé de 5 chiffres";
        missCP.style.color="red";
    }
    else{
      missCP.textContent= "OK";
      missCP.style.color="green";
    }
    if(mail.validity.valueMissing){
        event.preventDefault();
        missEmail.textContent="champ vide";
        missEmail.style.color="yellow";
    }
    else if(!filtre2.test(mail.value)){
        event.preventDefault();
        missEmail.textContent= "verifiez que votre adresse mail contien bien le @+la boite et le .com ou.fr";
        missEmail.style.color="red";   
    }
    else{
      missEmail.textContent= "OK";
      missEmail.style.color="green";
    }
    if(ddn.validity.valueMissing){
        event.preventDefault();
        missDdn.textContent="champ vide";
        missDdn.style.color="yellow"
    }
    else if()
    console.log(ddn.value);
}
