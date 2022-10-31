let value;
const programmer = {
    name: "zeynep kustu",
    age: 25,
    email: "zzeynepkustu@gmail.com",
    langs: ["python", "java"],

    adress: {
        city: "ankara",
        street: "bahcelievler"
    },

    work: function () {
        console.log("programcı çalışıyor...");
    }
}


value= programmer;

value= programmer.email;
value= programmer["email"];



value=programmer.langs;
value=programmer.adress.city;

programmer.work();


console.log(value);