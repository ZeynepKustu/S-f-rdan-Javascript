// //mapler- key(anahtar)-value(değer)

// let myMap = new Map(); //oluşturma
// // console.log(myMap);

// const key1 = "zeynep";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 2;
// //set

// myMap.set(key1, "string değer");
// myMap.set(key2, "object literal değer");
// myMap.set(key3, "function değer");

// //get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

//console.log(myMap.size);

// const cities = new Map();

// cities.set("ankara",5);
// cities.set("istanbul",15);
// cities.set("izmir",4);

//for each

// cities.forEach(function(value,key){
//     console.log(key,value);
// })

//for of
// for(let [key,value] of cities){ //destructing
//     console.log(key,value);
// }

//map keys
// for(let key of cities.keys()){
//     console.log(key);
// }

//map values
// for(let value of cities.values()){
//     console.log(value);
// }

//arraylardan map oluşturma
// const array = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);

//maplerden array oluştuma

const cities = new Map();

cities.set("ankara",5);
cities.set("istanbul",15);
cities.set("izmir",4);

const array = Array.from(cities);

console.log(array);

