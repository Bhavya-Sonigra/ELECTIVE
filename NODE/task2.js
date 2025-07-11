const data = {
    productId: 10,
    name: "M2 MacBook Pro",
    price: 2499,
    inStock: true
};

const reviewsDB = {
    10: "Excellent performance and battery life!",
    11: "Good value for money.",
    12: "Not satisfied with the keyboard."
};

async function fetchProductData() {
    try {
        const productData = await new Promise((resolve) => {
            setTimeout(() => {
                console.log("✅ Product data fetched");
                resolve(data);
            }, 1000);
        });
        return productData;
    } catch (error) {
        console.error("❌ Error fetching product data:", error);
    }
}

async function fetchProductReview(productId) {
    try {
        const review = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (reviewsDB[productId]) {
                    console.log("✅ Review fetched");
                    resolve(reviewsDB[productId]);
                } else {
                    reject("No review found for product ID: " + productId);
                }
            }, 1000);
        });
        return review;
    } catch (error) {
        console.error("❌ Error fetching review:", error);
    }
}

async function showProductWithReview() {
    const product = await fetchProductData();
    if (!product) return;

    const review = await fetchProductReview(product.productId);
    if (!review) return;

    console.log("\n📦 Product Info:");
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`In Stock: ${product.inStock ? "Yes" : "No"}`);
    console.log(`Review: ${review}`);
}

showProductWithReview();