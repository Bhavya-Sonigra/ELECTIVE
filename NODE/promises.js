// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("✅ Data fetched successfully!");
//     } else {
//       reject("❌ Something went wrong!");
//     }
//   }, 1000);
// });

// myPromise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// }).finally(() => { 
//     console.log("Promise settled (either resolved or rejected).");
// });


let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 1000);
});

promise.then((result) => {
    console.log(result); // "Promise resolved!"
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Promise settled (either resolved or rejected).");
}).then((result) => {
    console.log(result);
    return result * 3;
}).then((newResult) => {
    console.log(newResult);
}).catch((error) => {
    console.error("Error:", error);
});