var exo6=document.getElementById("exo6");
exo6.addEventListener("click", eva6);
function eva6(){
    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    let nom= prompt("entré un des prenom ");
    let pos=tab.indexOf(nom);
    console.log(pos);
    if(pos==-1){// -1 car si indexof ne trouve pas il son value es -1
        alert("le nom que vous avez saisie n'est pas dans la liste");
    }else{
       tab.splice(pos,1);// suprime 1 case a la position de inde off
       tab.push(" ");// recree une case vide a la fin
    }
    console.log(tab);
}