// File: callback.js
const data = 10;
// This is a simple callback example in Node.js
// The function `productinfo` takes a callback function as an argument
// and calls it with the data after a delay.
// The callback function `displayProductInfo` is defined to handle the data
// and display it after a delay of 10 seconds.
function productinfo(callback) {
    callback(data);
} 
function displayProductInfo(info) {
    setTimeout(() => {
        console.log("Product Info: " + info);
    }, 10000);
}

productinfo(displayProductInfo);
