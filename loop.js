//Use of for loop
for(var i=0; i<5; i++){
    document.write("Mymensingh <br/>");
}
document.write("<br/>");

var sum =0;
for(var i=0; i<100; i++){
    sum = sum +i;
}
document.write(sum +"<br/>");
document.write("<br/>");

// Use of while loop
var i=1,sum = 0;
while(i <=10){
    sum = sum +i;
    i++;
}
document.write(sum);
document.write("<br/>");

var i=1,sum = 0;
while(i <=20){
    if(i % 3 == 0 && i % 5 == 0){
    sum = sum +i;
    }
    i++;
}
document.write("Sum: "+sum);
document.write("<br/>");



