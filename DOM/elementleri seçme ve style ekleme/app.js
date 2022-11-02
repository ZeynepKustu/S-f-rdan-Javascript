const element = document.querySelector("#clear-todos");


//element özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

//style ve element özelliklerini değiştirme

// element.className= "btn btn-primary";
// element.style.color= "#000";
// element.style.marginLeft= "50px";
// element.target="-blank";

// element.textContent= "silin";
// element.innerHTML= "<span style= 'color:green'>silin</span>"

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");

element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

// const elements = document.querySelectorAll(".list-group-item"); //node
// elements.forEach(function(el){
//     el.style.color= "red";
//     el.style.background= "#eee";
// })

console.log(element2);

// console.log(element);


