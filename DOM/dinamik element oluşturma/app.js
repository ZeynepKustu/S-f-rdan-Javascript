//yeni element oluşturma


const newLink= document.createElement("a");
const cardbody= document.getElementsByClassName("card-body")[1];

newLink.id ="clear-todos";
newLink.className="btn btn-danger";
newLink.target="-blank";


newLink.appendChild(document.createTextNode("FARKLI SAYFAYA GİT"));

cardbody.appendChild(newLink);

// //text content

// //cardbody.textContent="jkdnke";

// //text node

// const text=document.createTextNode("NABER");
// cardbody.appendChild(text);
// console.log(cardbody);

console.log(newLink);