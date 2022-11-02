// element id e göre seçme

let element;

element=document.getElementById("todo-form");
element=document.getElementById("tasks-title");

//class a göre
element=document.getElementsByClassName("list-group-item");
element=document.getElementsByClassName("card-header");

//element tag e göre seçme

element=document.getElementsByTagName("div");

//query selector- css selector- tek bir element

element= document.querySelector("todo-form");
element= document.querySelector("#tasks-title");
element= document.querySelector(".list-group-item");


//query selector all

element= document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log(el);
})



console.log(element);
