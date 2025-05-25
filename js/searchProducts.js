// Import the function responsible for displaying products
import { functionShowProducts } from "./showProducts.js";

// Export the search function, which enables filtering products based on user input
export function functionSearchProducts(parameterLoadedProducts) {
    // Get the search input element from the HTML
    let varInput = document.getElementById('searchInput');
    
    // Add an event listener that triggers every time the user types into the search input
    varInput.addEventListener('input', (event) => {
        // Get the typed value, converted to lowercase for case-insensitive comparison
        let varSearch = event.target.value.toLowerCase();

        // Filter the loaded products by checking if the product name includes the search term
        let varFilteredProducts = parameterLoadedProducts.filter((product) => {
            return product.name.toLowerCase().includes(varSearch);
        });

        // Display only the filtered products
        functionShowProducts(varFilteredProducts);
    });
}
