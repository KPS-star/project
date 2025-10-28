// Select elements
const addToCartBtn = document.getElementById('add-to-cart');
const cartCount = document.getElementById('cart-count');

let count = 0;

// Add to cart functionality
addToCartBtn.addEventListener('click', () => {
  count++;
  cartCount.textContent = count;

  // Button animation
  addToCartBtn.textContent = "Added!";
  addToCartBtn.style.backgroundColor = "#28a745";

  setTimeout(() => {
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.style.backgroundColor = "#007bff";
  }, 1000);
});
