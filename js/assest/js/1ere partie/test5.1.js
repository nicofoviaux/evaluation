var image;
var maFonction=function (x,y)//fonction x*y
{
    document.write("le produit de "+x+" "+"x"+" "+y+"="+x*y);
}
var maFonction2=function(x)//fonction cube
{
    document.write("le cube de "+x+" est egal à"+x*x*x);
}
var maFonction3=function(image)//fonction image
{
    document.write('<img src="assest/img/papillon.jpg">');//document.write permet de ouvrir des balies html
}
maFonction(3,5);//appel de la fonction et mettre les valeur de x et y entre ()
document.write("<br>");//passe a la ligne
maFonction2(3);
document.write("<br>");
maFonction3(image);