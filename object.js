//Create Object
//Create a constructor
// Create template

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