// console.log("Product info page");

// function getProductInfo(callback){
//     console.log("product status enquiry");
//     const data = {
//         name: 'Laptop',
//         price: 1200,
//         availability: 'In Stock'
//     }

//     setTimeout(() => {
//         console.log("Product info fetched successfully");
//         callback(null, data);
//     }, 1000);
// }

// function statusCheck(error, data){
//     if (error) {
//         console.error("Error fetching product info:", error);
//         return;
//     }
//     console.log("status received", data);
// }

// getProductInfo(statusCheck);



function getProductInfo() {
    console.log("Product status enquiry");

    const data = {
        name: 'Laptop',
        price: 1200,
        availability: 'In Stock'
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Product info fetched successfully");
            resolve(data); // or reject("Error message") if failed
        }, 1000);
    });
}

getProductInfo()
    .then(data => {
        console.log("Status received:", data);
    })
    .catch(error => {
        console.error("Error fetching product info:", error);
    });