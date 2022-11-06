function Employee(name, age) {
    this.name = name;
    this.age = age;
    // this.showInfos = function () {
    //     console.log("isim:" + this.name + "yaş:" + this.age);
    // }
}

Employee.prototype.showInfos= function(){
    console.log("isim:" + this.name + "yaş:" + this.age);
}
const emp1 = new Employee("mustafa", 25);
const emp2 = new Employee("oğuz", 25);

emp2.showInfos();
console.log(emp1);
console.log(emp2);