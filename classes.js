//classes
//oop
class Student{
    constructor(name, age,school){//
        this.name = name
        this.age = age
        this.school = school
        this.hobby = function(){
        return "I love playing games";
    }
    }
}
var firstStudent = new Student("Chirii",19,"Akirachix");
console.log(firstStudent);
console.log(firstStudent.hobby());

//prototype
Student.prototype.speak = function(){return this.speak("uuuuuu");}
console.log(Student.prototype.speak);

//function constructor

