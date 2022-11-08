// function getTextFile(){ //text dosyası

//      fetch("example.txt")
//      .then(response => {
        
//         return response.text();
//     })
//      .then(data => console.log(data))
//      .catch(err => console.log(err));

// }
// getTextFile();


function getJsonFile(){ //jason dosyasından veri alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
getJsonFile();