let array1 = new Array(100);

for (let i=0; i<array1.length; i++){
    array1[i]= Math.floor(Math.random()*100);
    document.write((i+1)+". "+ array1[i]+"<br>");
}