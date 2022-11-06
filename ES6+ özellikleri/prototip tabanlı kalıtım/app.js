//kalıtım
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function () {
    console.log("isim:" + this.name + "yaş:" + this.age);
}
// const person = new Person ("mustafa",25);
// console.log(person);

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function () {
    console.log("Employee");
}
Employee.prototype.showInfos = function () {
    console.log("isim:" + this.name + "yaş:" + this.age + "maaş:" + this.salary);
}
const emp = new Employee("MUSTAFA", 25, 4000);
// emp.showInfos();
// emp.toString();
console.log(emp);