//Class, constructor, create object from class
class Student {
    constructor(sId,sName){
        this.id = sId;
        this.name = "sName";
        this.school ="kolimunnesa School"
    }
}

const student1 = new Student(12,"shovo");
const student2 = new Student(22,"mahiya");
console.log(student1,student2);