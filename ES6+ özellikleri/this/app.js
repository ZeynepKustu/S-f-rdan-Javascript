// console.log(this); //global scope

// const emp1 = {
//     name: "mustafa",
//     age: 25,
//     showInfos: function () { console.log("bilgiler gösteriliyot"); }

// };
// const emp2 = {
//     name: "ahmet",
//     age: 26
// };

// console.log(emp1);


// function Employee(){      //yapıcı fonksiyon- constructor
//     this.name= "mustafa";
// }

// const emp1= new Employee();
// console.log(emp1);

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}
const emp1 = new Employee("mustafa", 25, 4000);
const emp2 = new Employee("ahmet", 28, 9000);

emp1.showInfos();
emp2.showInfos();