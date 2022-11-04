

// let number1,number2;
// arr = [100, 200, 300, 400];
// number1 = arr[0];
// number2 = arr[1];  //eski yöntem

//destructing

// [number1,number2]= arr;
// const [number1, number2] = arr;

// console.log(number1, number2);


//obje destructing

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50,
// };

// const { a, c, e } = numbers;
// console.log(a, c, e);


//function destructing

// const getLangs =()=>["python","java","c"];
// const[lang1,lang2,lang3]= getLangs();
// console.log(lang1,lang2,lang3);


//obje

const person = {
    name: "zeynep",
    year: 1998,
    salary: 10000,
    showInfos: () => console.log("bilgiler gösteriliyor")
}

const { name: isim, year: yil, salary: maas, showInfos: bilgileriGöster } = person;
console.log(isim, yil, maas);
bilgileriGöster();
