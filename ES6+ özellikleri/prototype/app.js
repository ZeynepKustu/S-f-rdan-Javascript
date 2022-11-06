// const object = new Object(); //object literal
// const Object2 = new Object();
// object.name = "mustafa";
// console.log(object);

function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function () {
        console.log("bilgiler gösteriliyor");
    }
}
const emp1 = new Employee("mustafa", 25);
console.log(emp1);

console.log(emp1, toString());