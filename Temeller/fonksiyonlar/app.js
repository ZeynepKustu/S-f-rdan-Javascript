//fonksiyon tanımlama

// function merhaba(name="bilgi yok",age="bilgi yok"){
//     // if(typeof name === "undefined") name="bilgi yok";
//     // if(typeof age === "undefined") age="bilgi yok";

//     console.log('isim: ${name} yaş: ${age}');
// }

// merhaba("murat", 25); //fonksiyon çağrısı
// merhaba();
// merhaba("kadir");

// function square(x){
//     console.log(x*x);
// }
// function cube(x){
//     console.log(x*x*x);
// }

// let a = square(12);
// a=cube(a);


// function square(x){
//     return x*x;
//     console.log("naber"); //hiç bir zaman çalıştırılmaz
// }
// function cube(x){
//     return x*x*x;
// }

// // let a = square(12);
// // a=cube(a);

// let a = cube(square(12));
// console.log(a);


//function expression

// const merhaba = function(name){
//     console.log("merhaba" + name);
// };
// merhaba("murat");

//IIFE tanımlandığı yerde çalışan fonksiyon

// (function(name){
//     console.log("merhaba" + name);
// })("murat");


const database = {
    host: "localhost",
    add: function () {
        console.log("eklendi");
    },
    get: function () {
        console.log("elde edildi");
    },
    update: function (id) {
        console.log(`Id: ${id} güncellendi`);
    },
    delete: function (id) {
        console.log(`Id: ${id} silindi`);
    }

}
console.log(database.host);
database.add();
database.delete(10);


