// Simple cart utility using localStorage. Dispatches a 'cartUpdated' event on changes.
export function getCart() {
    try {
        return JSON.parse(localStorage.getItem('cart') || '[]');
    } catch (e) {
        return [];
    }
}

export function getCartCount() {
    const cart = getCart();
    return cart.reduce((sum, it) => sum + (it.quantity || 0), 0);
}

export function addToCart(product, quantity = 1, spiceLevel = null) {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id && item.spiceLevel === spiceLevel);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            spiceLevel: spiceLevel,
            image: product.image,
        };
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // Dispatch update event with new count
    const event = new CustomEvent('cartUpdated', { detail: { count: getCartCount() } });
    window.dispatchEvent(event);

    return cart;
}

export function clearCart() {
    localStorage.removeItem('cart');
    const event = new CustomEvent('cartUpdated', { detail: { count: 0 } });
    window.dispatchEvent(event);
}

export function updateQuantity(id, quantity, spiceLevel = null) {
    const cart = getCart();
    const idx = cart.findIndex(item => item.id === id && item.spiceLevel === spiceLevel);
    if (idx > -1) {
        if (quantity <= 0) {
            cart.splice(idx, 1);
        } else {
            cart[idx].quantity = quantity;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        const event = new CustomEvent('cartUpdated', { detail: { count: getCartCount() } });
        window.dispatchEvent(event);
    }
    return cart;
}

export function removeFromCart(id, spiceLevel = null) {
    const cart = getCart();
    const idx = cart.findIndex(item => item.id === id && item.spiceLevel === spiceLevel);
    if (idx > -1) {
        cart.splice(idx, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        const event = new CustomEvent('cartUpdated', { detail: { count: getCartCount() } });
        window.dispatchEvent(event);
    }
    return cart;
}

export function getCartTotal() {
    const cart = getCart();
    // price currently stored as string like '$12.95' — attempt parseFloat
    return cart.reduce((sum, item) => {
        const price = parseFloat(String(item.price).replace(/[^0-9.\-]+/g, '')) || 0;
        return sum + price * (item.quantity || 0);
    }, 0);
}
