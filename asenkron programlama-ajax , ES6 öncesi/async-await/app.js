class Request {
    async get(url) {
        
        const response= await fetch(url);
        const responsedata= await response.json()
        return responsedata;

    }
     async post(url,data){
        
        const response =await fetch(url,{
            method:'POST',
                body: JSON.stringify(data),
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                }
        });
        const responsedata = await response.json();
        return responsedata;
        
    }

     async put(url,data){
        
        const response= await fetch(url,{

            method:'PUT',
                    body:JSON.stringify(data),
                    headers:{
                       "Content-type": "application/json; charset-UTF-8"
                    }
        })
        const responsedata =await response.json();
        return responsedata;
           




    }
     async delete(url){
           
         
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/1',{
                        method:'DELETE'
                    });


           const responsedata = await response.json();
           return responsedata;



    }
}
const request = new Request();
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")

// .then(albums => {

//     console.log(albums);
// })
//     .catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums",{userId:1, title:"thriller"})
.then(newAlbum=> console.log(newAlbum))
.catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"tarkan karma"})
// .then(album=>console.log(album))
// .catch(err=>console.log(err));

// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(message=>console.log(message))
// .catch(err => console.log(err));
