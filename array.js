document.write("Started array.js file.........<br/>");

//Array is an object,Collection of variables
var cars = new Array();
cars[0] = "BMW";
cars[1] = "Audi";
cars[2] = "Corolla";
cars[3] = "Volvo";

document.write(cars[0] +"<br/>");
document.write(cars[3] +"<br/>");
document.write("<br/>");

document.write(cars);
document.write("<br/>");
document.write(cars.length +"<br/>");
document.write("<br/>");

var names = ["Azhar","Forhad","Sadman","Rafi"];
document.write(names +"<br/>");
document.write(names[2] +"<br/>");
document.write(names.length +"<br/>");

var girls = ["Sadia","Sumaiya","Niju","Rabeya","Nusrat","Limu"];
girls.push("Sanjida");
document.write(girls);
document.write("<br/>");
girls.pop();
document.write(girls +"<br/>");
document.write("<br/>");

var city1 = ["Dhaka","Mymensingh"];
var city2 = ["Khulna","Rajshahi"];

var city = city1.concat(city2);
document.write(city +"<br/>");
document.write("<br/>");

//Loop in Array

var n = [10,45,25,35];
var s=0;
for(var i=0; i<4; i++){
    document.write(n[i] +"<br/>");
    sum = sum+n[i];
}
document.write("Sum : "+sum+"<br/>");

/*
var n = new Array();
for(var i=0; i<4; i++){
    num[i] = parseInt(prompt("Enter numbers:"));

}
var s =0;
for(var i=0; i<4; i++){
    document.write(n[i] +"<br/>");
}
document.write("Sum : "+s+"<br/>");
*/

// Some Array methods

var names =["Saiful","Totul","Olid","Akash"];
document.write(names +"<br/>");
// shift opposite of pop

names.shift();
document.write(names +"<br/>");

//unshift opposite of push
names.unshift("Polin");
document.write(names +"<br/>");

//Adding  elements using splice method 
names.splice(3,0,"Sakib","Faisal");
document.write(names +"<br/>");

// Removing elements using splice() methods

names.splice(1,3);
document.write(names +"<br/>");

// Used of slice() method
var name =["Saiful","Totul","Olid","Akash"];
var nm = name.slice(2);
document.write(nm +"<br/>");

var nam =["Fakhrul","Shamim","Mahadi","Saddam"];
var sortnames = nam.sort();
document.write(sortnames +"<br/>");
var sortnames2 = nam.reverse();
document.write(sortnames2 +"<br/>");

document.write("<br/>");
// Numbers array sorted

var numbers = [25,87,4,99,11];
numbers.sort(function(x,y){
    return x-y;
});
document.write(numbers);
document.write("<br/>");

//Reverse sorting numbers
var numbers = [25,87,4,99,11];
numbers.sort(function(x,y){
    return y-x;
});
document.write(numbers);
