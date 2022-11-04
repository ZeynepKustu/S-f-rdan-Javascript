//setler-kümeler

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("mustafa");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});


const myset2 = new Set([100,3.14,"mustafa"]);
// console.log(myset);
// console.log(myset2);


//size
// console.log(myset.size);

//delete
// myset.delete("mustafa");


//has metodu
// console.log(myset.has(3.14));

//for each
// myset.forEach(function(value){
//     console.log(value);
// })

//for of

// for(let value of myset){
//     console.log(value);
// }

const array= Array.from(myset);

console.log(array);

