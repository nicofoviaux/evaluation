var reponse1 = window.prompt("saisissez votre nom");// prompt pour prendre la variable//
var reponse2 = window.prompt("saisissez votre prenom");
// confirm pour demander une variable booleene//
if (window.confirm("etes-vous un homme?") == true) {
      window.alert("bienvenue M " + reponse1 + " " + reponse2 + "\n" + "bienvenue sur testouille")
}// alert pour affiché//
else { window.alert("bienvenue Mme " + reponse1 + " " + reponse2 + "\n" + "bienvenue sur testouille") }