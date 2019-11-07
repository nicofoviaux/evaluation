var array=[666,1,7,69,33,13];
var J=1;
var n=array.length;
while(J!=n){
    let i=J-1;
    let tmp=Array[J];
    while(i>-1 && array[i]>tmp){
        array[i+1]=array[i];
        i--
    }
    array[i+1]=tmp;
    j=j+1;
}
