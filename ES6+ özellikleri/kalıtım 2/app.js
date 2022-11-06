class Person{ //superclass
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("isim:" + this.name + "yaş:" + this.age);
    }
}
class Employee extends Person { //derivedclass
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age);
        this.salary=salary;
    }
}
const emp= new Employee("mustafa",25,4000);
console.log(emp);