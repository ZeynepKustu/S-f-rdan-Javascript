let value;

value = document;

value = document.all;
value = document.all.length;
value = document.all[0];
value = document.all[4];
value = document.all[document.all.length - 1];


// const elements = document.all; //html collection
// for(let i=0; i < elements.length;i++){
//     console.log(elements[i]);
// }

// elements.forEach(function(element){
//     console.log(element);
// });

// const collections= Array.from(document.all);

// collections.forEach(function(collection){
//     console.log(collection);
// });


value = document.all[8];
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;

value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].getAttribute("href");
value=document.links[document.links.length-1].className;


value=document.forms["form"];
value=document.forms[0].id;
value=document.forms[0].getAttribute("name");



console.log(value);
