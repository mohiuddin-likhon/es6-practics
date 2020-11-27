//Inheritance, extends class, super, class method

class Parent {
    constructor(name){
        this.fatherName = "Schwerzngger"
    }
}
class Child extends Parent{
constructor(name){
    super()
    this.name = name;

}
getFullName(){
    return this.name + " " +this.fatherName;
}

}

const baby1 = new Child("Arwnold");
const baby2 = new Child("Tom");
console.log(baby1.getFullName());
console.log(baby2);