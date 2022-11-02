//replace
//<h5 class="card-title" id="tasks-title">todolar</h5>

const cardbody= document.querySelectorAll(".card-body")[1];

const newElement= document.createElement("h3");

newElement.className= "card-title";
newElement.id="tasks-title";
newElement.textContent="yeni todolar";


//eski element
const oldElement= document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldElement);

console.log(newElement);