//spread operator

// const langs = ["python","c","java","php"];

// console.log(langs[0],langs[1],langs[2],langs[3]);

// console.log(...langs); 

// const langs2 = ["javascript","c#",langs[0],langs[1],langs[2],langs[3]];

// console.log(langs2);

// const langs2 = ["javascript","c#",...langs];

// console.log(langs2);


// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b,...number2]=numbers;

// console.log(a,b);
// console.log(number2);


const addNumbers = (a,b,c)=> console.log(a+b+c);
const numbers = [100,200,300];

// addNumbers(numbers[0],numbers[1],numbers[2]);
addNumbers(...numbers);