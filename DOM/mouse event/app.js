const cardBody = document.querySelectorAll(".card-body")[1];

const title= document.querySelector("#tasks-title");

//click event
title.addEventListener("click",run);
//double click
title.addEventListener("dbclick",run);

//mouse down
title.addEventListener("mousedown",run);

//mouse up
title.addEventListener("mouseup",run);

//mouse over
title.addEventListener("mouseover",run);

//mouse out
title.addEventListener("mouseout",run);


cardBody.addEventListener("mouseout",run);
cardBody.addEventListener("mouseover",run);

//mouse enter - mouse leave
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);



function run(e){
    console.log(e.type);
}