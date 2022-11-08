// async function test(data) {  //async mutlaka promise döndürüyor
//     // return data;

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {

//             resolve("bu bir değerdir");
//         }, 5000);
//     });
//     let response = await promise;
//     console.log(response);
//     console.log("naber");


// }
// test("merhaba").then(response => console.log(response));


// async function testData(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("lütfen string bir değer girin"));
//             }
//         }, 5000);
//     });
//     const response = await promise;
//     return response;
// }
// testData(24)
// .then(data=>console.log(data))
// .catch(err=> console.log(err));

async function getCurrency(url) {

    const response = await fetch(url); //response object
    const data = await response.json() //json abject

    console.log(data);

}
getCurrency("https://api.exchangeratesapi.io/latest");