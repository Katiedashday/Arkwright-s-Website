let totalQuantity = localStorage.getItem('totalQuantity') 
    ? parseInt(localStorage.getItem('totalQuantity')) 
    : 0;


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.totalQuantity').innerText = totalQuantity;
});

document.getElementById('addToCartBtn').addEventListener('click', () => {
    totalQuantity++;
    localStorage.setItem('totalQuantity', totalQuantity);
    document.querySelector('.totalQuantity').innerText = totalQuantity;

    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productInCart = cart.find(p => p.id === thisProduct.id);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        cart.push({ ...thisProduct, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
});

