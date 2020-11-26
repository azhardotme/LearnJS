//Use of for loop
document.write("Started the loop.js file.....<br/>");
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

//do....while loop

var i = 1;
do{
    document.write(" "+i);
    i++;
}
while(i<=10);
document.write("<br/>");

//Example of break and continue


for(var x=1; x<=100; x++){
    if(x==10){
        break;
    }

document.write(" "+ x);
}
document.write("<br/>");


for(var x=1; x<=10; x++){
    if(x==5){
        continue;
    }

document.write(" "+ x);
}
document.write("<br/>");

document.write("<br>");