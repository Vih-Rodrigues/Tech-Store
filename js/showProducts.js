// Export the function responsible for displaying a list of products
export function functionShowProducts(parameterLoadedProducts) {
    // Select the container element where the product cards will be displayed
    let varContainer = document.querySelector('.products');

    // Clear any existing content inside the container
    varContainer.innerHTML = '';

    // If no products were found, show a message and stop execution
    if (parameterLoadedProducts.length === 0) {
        varContainer.innerHTML = "<p>No products found.</p>";
        return;
    }

    // Loop through each product and create a card element for it
    for (let varProduct of parameterLoadedProducts) {
        // Create a div element to serve as the product card
        let varCard = document.createElement('div');
        varCard.classList.add('card');

        // Set the inner HTML of the card with the product's image, name, price, and a buy button
        varCard.innerHTML = `
            <img src="${varProduct.image}" alt="${varProduct.name}" />
            <h2>${varProduct.name}</h2>
            <p>$ ${varProduct.price}</p>
            <button>Buy</button>
        `;

        // Append the product card to the container
        varContainer.appendChild(varCard);
    }
}
