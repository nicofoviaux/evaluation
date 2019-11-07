function str(str1, str2, n) {
  var word = str1.split(str2);//split separe les chaine de caractéres en tableau et utilise des separateur nommé entre () ici nommee par la variable str2qui est ";"
  console.log(word[n - 1]);
}
str("robert;dupont;amiens;80000", ";", 3);