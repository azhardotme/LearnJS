document.write("Started the function.js file.........<br/>");

function square(n){
    var result = n * n;
    return result;
   
}
var fr = square(9);
document.write(fr);
document.write("<br/>");

//Addition 
function add(n1,n2){
    var result = n1+n2;
    document.write(result+ "<br/>");

}
//Subtraction
function sub(n1,n2){
    var result = n1-n2;
    document.write(result + "<br/>");

}
//Multiplication
function mul(n1,n2){
    var result = n1*n2;
    document.write(result + "<br/>");

}
// Divided 
function div(n1,n2){
    var result = n1/n2;
    document.write(result + "<br/>");

}

add(5,5);
sub(12,2);
mul(2,5);
div(20,2);
document.write("<br/>");





