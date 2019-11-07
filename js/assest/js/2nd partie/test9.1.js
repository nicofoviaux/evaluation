var magic = parseInt(Math.random()*100);
var nb=document.getElementById("textBox1");//integre a la variabe nb l'element a l'id "textBox1" qui est le texte html
var but=document.getElementById("button1");// integre a la variable but l'element pour voir si le bouton est cliqué (ici inutile car le bouton lance directement la fonction "verif")
var text=document.getElementById("label1");// integre a la variable but l'element de l'id "label1" il sert ici a changer le text dans la div html
//l'appel de la fonction verif ce fait dans le html
function verif(){
    if(nb.value<magic){
    text.innerHTML="plus grand!!!"; //inner html sert a changer le texte sur le html ici on change la variable text
    }else if(nb.value>magic){
    text.innerHTML="plus petit!!!";
}else
text.innerHTML="GAGNER!!!!!";
console.log(nb.value);
console.log(but);
}
console.log(magic);
// pas besoin de faire de boucle la page se rafraichi a chague appuie sur le bouton