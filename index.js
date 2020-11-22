document.write("Hello JS Learner! <br/>");

//JS Data Type
document.write(typeof("Azharul Islam <br/>"));
document.write("<br/>");
document.write(typeof(212));
document.write("<br/>");

/*
JavaScript variable
*/
var name ="Azhar";
document.write(name);
document.write("<br/>");

var x,y;
x=9,y=4;
document.write(x+y);
document.write("<br/>");

//Number method
var n=3.50;
n = parseInt(n);
document.write(n);
document.write("<br/>");

n1 = 4.563;
n1 = parseFloat(n1);
document.write(n1.toFixed(1));
document.write("<br/>");

document.write(n1.toPrecision(3));
document.write("<br/>");

/*
Arithmetic and Assignment operator in JavaScript
*/
var x = 5, y=2;

document.write(x+y +"<br/>");
document.write(x-y +"<br/>");
document.write(x*y +"<br/>");
document.write(x/y +"<br/>");
document.write(x%y +"<br/>");

var z = 4;
z +=5;
document.write(z +"<br/>");

/*
Relational & Logical operators in JavaScript
*/

var p = 4,t = 5,num1 = 230, num2 = 40, num3 = 45, num4 = 32;
document.write(p>t +"<br/>");
document.write("<br/>")
document.write(num1>num2 && num3>num4 +"<br/>");

document.write("<br/>")
document.write(num1>num2 || num3>num4 +"<br/>");
