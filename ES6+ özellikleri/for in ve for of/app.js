const person = {
    name:"zeynep",
    age:25,
    salary:3000,
};

const langs = ["python","java","c","php"];

const name = "mustafa";
// for in

// for(let prop in person) {
//     console.log(prop,person[prop]);
// }

//array
// for (let index in langs){
//     console.log(index,langs[index]);
// }

//string
// for (let index in name){
//     console.log(index,name[index]);
// }


//for of

// for (let value of langs){
//     console.log(value);
// }

//string
for (let character of name){
    console.log(character);
}