var exo6=document.getElementById("exo6");
exo6.addEventListener("click", eva6);
function eva6(){
    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    let nom= prompt("entré un des prenom ");
    let pos=tab.indexOf(nom);
    console.log(pos);
    if(pos==-1){
        alert("le nom que vous avez saisie n'est pas dans la liste");
    }else{
       tab.splice(pos,1);
       tab.push(" ");
    }
    console.log(tab);
}