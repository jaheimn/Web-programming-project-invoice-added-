
// Function to create new products (commented out as it is not used)
 /*function newProduct(id, type, price, name){
    this.type = type;
    this.price = price;
    this.name = name;
}*/

let products = [
    { id: 1, type: "slim-Fit", price: 299.99, name: "Charcoal slim-fit suit" },
    { id: 2, type: "slim-Fit", price: 349.99, name: "Gray slim-fit suit" },
    { id: 3, type: "slim-Fit", price: 199.99, name: "Navy Blue slim-fit suit" },
    { id: 4, type: "slim-Fit", price: 349.99, name: "Slate Grey slim-fit suit" },
    { id: 5, type: "slim-Fit", price: 499.99, name: "Green slim-fit suit" },
    { id: 6, type: "tuxedo", price: 249.99, name: "Navy blue tuxedo" },
    { id: 7, type: "tuxedo", price: 199.99, name: "Classic black tuxedo" },
    { id: 8, type: "tuxedo", price: 299.99, name: "Dark blue suede tuxedo" },
    { id: 9, type: "tuxedo", price: 299.99, name: "Double-breasted black tuxedo" },
    { id: 10, type: "tuxedo", price: 199.99, name: "White tuxedo" },
];

let cart = [];

function addToCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const newitem = document.createElement("li");
        newitem.innerHTML = `
        <div>
        <h4>${item.name}</h4>
        <p>$${item.price}</p>
        <input type="number" value="${item.quantity}" data-index="${index}" min="1" class="amount">
        <button class="delete" data-index="${index}">Delete</button>
        </div>
        `;
        
        cartItems.appendChild(newitem);
    });

    updateCartSummary();
}

const market = document.querySelector('.market');

market.addEventListener('click', (e) => {
    if (e.target.classList.contains('addBtn')) {
        const productnum = e.target.closest('div').dataset.id; // Finding the data id of the item selected
        const product = products.find((p) => p.id === parseInt(productnum)); // Connecting the data id to the id of the item in the array.
        
        // Determine if the same item is already there
        const duplicate = cart.find(item => item.id === product.id);
        if (duplicate) {
            duplicate.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        alert(`Added ${product.name} to cart.`);
        console.log(`Added ${product.name} to cart.`);
        addToCart();
    }
});

const seeCart = document.getElementsByClassName('seeCart')[0];
const cartDiv = document.getElementsByClassName('cart')[0];

// Show the cart and the items added
seeCart.addEventListener('click', function() {
    cartDiv.style.display = "block";
});

function updateCartSummary() {
    let subTot = 0;
    let taxRate = 0.15;
    let total; // Declare total

    // Calculate subtotal
    cart.forEach(item => {
        subTot += item.price * item.quantity; // Consider the quantity of each item
    });

    // Calculate tax
    let tax = subTot * taxRate;

    // Calculate total
    total = subTot + tax;

    const subAmt = document.getElementById('subTot');
    const taxAmt = document.getElementById('tax');
    const totalAmt = document.getElementById('total');

    console.log(subTot);
    console.log(tax);
    console.log(total);
    subAmt.textContent = `$${subTot.toFixed(2)}`;
    taxAmt.textContent = `$${tax.toFixed(2)}`;
    totalAmt.textContent = `$${total.toFixed(2)}`; // Corrected total calculation
}

// Add event listener to update cart summary when "Add to cart" buttons are clicked
document.querySelectorAll('.addBtn').forEach(button => {
    button.addEventListener('click', updateCartSummary); // Pass the function reference
});