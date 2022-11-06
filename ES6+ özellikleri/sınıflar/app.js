//syntactic sugar

// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype.showInfos = function () {
//     console.log("isim:" + this.name + "yaş:" + this.age + "maaş:" + this.salary);
// }
// const emp = new Employee("mustafa", 25, 6000);
// console.log(emp);


class Employee{
    constructor(name,age,salary){
        this.name = name;
        this.age=age;
        this.salary=salary;
    }
    showInfos(){
        console.log("isim:" + this.name + "yaş:" + this.age + "maaş:" + this.salary);
    }
}
const emp = new Employee("mustafa",25,4000);
console.log(emp);