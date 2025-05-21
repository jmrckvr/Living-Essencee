function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartItems.length;
    });
}

// Initialize cart count when DOM loads
document.addEventListener('DOMContentLoaded', updateCartCount);

function addExclusiveToCart() {
    const exclusiveSet = {
        name: 'Aesthetic Minimalist Set',
        desc: 'Exclusive curated collection of minimalist furniture',
        images: [
            'https://i.pinimg.com/736x/6a/69/dd/6a69ddd6ee27dc470c25b0300f4deaea.jpg'
        ],
        price: '₱85,000.00',
        status: 'Order Pending',
        orderId: Date.now(),
        dateAdded: new Date().toLocaleDateString()
    };

    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(exclusiveSet);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
    
    // Optional: Show confirmation
    alert('Exclusive Set added to cart!');
}

function buyNowExclusive() {
    const exclusiveSet = {
        name: 'Aesthetic Minimalist Set',
        desc: 'Exclusive curated collection of minimalist furniture',
        images: [
            'https://i.pinimg.com/736x/6a/69/dd/6a69ddd6ee27dc470c25b0300f4deaea.jpg'
        ],
        price: '₱85,000.00',
        status: 'Order Pending',
        orderId: Date.now(),
        dateAdded: new Date().toLocaleDateString()
    };

    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(exclusiveSet);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
    
    // Redirect to cart page
    window.location.href = 'cart.html';
}
