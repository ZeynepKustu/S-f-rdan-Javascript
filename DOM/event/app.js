const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm);

function submitForm(e){

    console.log("submit eventi");


    e.preventDefault();
}


// filterInput.addEventListener("focus",function(event){
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target.placeholder);
//     // console.log("naber");
// });



// filterInput.onfocus= function(){
//     console.log("naber");
// }