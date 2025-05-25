// Import the function responsible for loading products from the JSON file
import { functionLoadProducts } from "./productService.js";

// Import the function responsible for enabling product search
import { functionSearchProducts } from "./searchProducts.js";

// Import the function responsible for displaying the products on the page
import { functionShowProducts } from "./showProducts.js";

// Main function to initialize the application
async function main() {
    // Load the products from the JSON file asynchronously
    let varLoadProducts = await functionLoadProducts();

    // Display the loaded products on the page
    functionShowProducts(varLoadProducts);

    // Enable product search functionality
    functionSearchProducts(varLoadProducts);
}

// Execute the main function
main();
