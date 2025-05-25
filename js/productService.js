// Export the function responsible for loading the products from the JSON file
export async function functionLoadProducts() {
    // Fetch the JSON file containing the product data
    // The 'await' keyword pauses the execution until the response is received
    let varResponse = await fetch("../data/data.json");

    // Convert the response to JSON format
    let varProducts = await varResponse.json();

    // Return the list of products
    return varProducts;
}
