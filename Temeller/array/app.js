let value;

const numbers= [43,56,3,23,44,35,5];


value= numbers.length;

value=numbers[4];

numbers[2]= 1000;
value= numbers;

// sonuna değer ekleme
numbers.push(2000);
value= numbers;

// başına değer ekleme
numbers.unshift(3000);
value= numbers;

// sonundan değer atma
numbers.pop()
value= numbers;

// başından değer atma
numbers.shift()
value=numbers;

// belli bir aray aralığını atma
numbers.splice(0,3);
value=numbers;

// elemanları ters çevirme
numbers.reverse();
value=numbers;

// array sıralama sayının ilk karakterine göre sıralıyor
value=numbers.sort();
value=numbers;

// küçükten büyüğe
value=numbers.sort(function(x,y){
    return x-y;
})

// büyükten küçüğe
value=numbers.sort(function(x,y){
    return y-x;
})




console.log(value);


