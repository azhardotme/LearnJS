//Create Object
//Create a constructor

function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.cgpa);
        document.write(this.lang);
    }
}

var student1 = new Student("Azharul Islam",23,3.52,["JavaScript","PHP","C"]+"<br/>");
var student2 = new Student("Saiful Islam",23,3.52,["JavaScript","java","C"] +"<br/>");
var student3 = new Student("Mahidul Islam",23,3.52,["JavaScript","PHP","C++"] +"<br/>");

student1.display();
student2.display();
student3.display();
document.write("<br>");

//Some Math Object
document.write(Math.sqrt(7));
document.write("<br>");
document.write(Math.abs(-9));
document.write("<br>");
document.write(Math.sin(2));
document.write("<br>");
document.write(Math.floor(2.342));
document.write("<br>");
document.write(Math.ceil(3.21));
document.write("<br>");
document.write(Math.round(2.4));
document.write("<br>");
document.write(Math.max(45,25,77));
document.write("<br>");
document.write(Math.min(47,6,55,77,44));
document.write("<br>");
document.write(Math.random());
document.write("<br>");

