//ajax,callback , http requests

class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    //get request

    get(url, callback) {
        this.xhr.open("GET", url);

        this.xhr.onload = function () {

            if (this.status === 200) {
                callback(null, this.responseText);
            }
            else {
                callback("herhangi bir hata oluştu", null);
            }

        }

        this.xhr.send();
    }
    post(url, data, callback) {

        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {

            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("herhangi bir hata oluştu", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    put(url, data, callback) {

        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {

            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("herhangi bir hata oluştu", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url, callback) {
        this.xhr.open("DELETE", url);

        this.xhr.onload = function () {

            if (this.status === 200) {
                callback(null, this.responseText);
            }
            else {
                callback("herhangi bir hata oluştu", null);
            }

        }

        this.xhr.send();
    }


}
const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//  if (err===null){
//     console.log(response);
//  }
//  else{
//     console.log(err);
//  }

// });

// request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
//  if (err===null){
//     console.log(response);
//  }
//  else{
//     console.log(err);
//  }

// });

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"thriller"},function(err,album){

//    if(err===null){
//        console.log(album);

//    }
//    else{
//     console.log(err);
//    }



// });


// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:142,title:"tarkan karma"},function(err,album){

//    if(err===null){
//        console.log(album);

//    }
//    else{
//     console.log(err);
//    }



// });


request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
 if (err===null){
    console.log(response);
 }
 else{
    console.log(err);
 }

});


