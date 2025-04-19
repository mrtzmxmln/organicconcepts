const cartItems = [];

function addToCart(name, brand = '', image = '') {
    const exists = cartItems.find(item => item.name === name);
  
    if (!exists) {
        cartItems.push({ name, brand, image });
        renderCart();
      } else {
        alert(`${name} ist bereits im Warenkorb.`);
      }
  
    openCart(); // Cart trotzdem öffnen, auch wenn’s schon drin ist
}

if (!exists) {
    cartItems.push({ name, brand, image });
    renderCart();
  } else {
    alert(`${name} ist bereits im Warenkorb.`);
}

function renderCart() {
const content = document.querySelector('.cart-content');
content.innerHTML = ''; // Leeren

if (cartItems.length === 0) {
    content.innerHTML = '<p>Dein Warenkorb ist leer.</p>';
    return;
}

cartItems.forEach((item, index) => {
    const entry = document.createElement('div');
    entry.className = 'cart-item';
    entry.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
        <div>
        <strong>${item.name}</strong><br>
        <span style="font-size: 14px; color: gray;">${item.brand}</span>
        </div>
        <button onclick="removeFromCart(${index})" style="font-size: 20px; background: none; border: none; cursor: pointer;">✕</button>
    </div>
    `;
    content.appendChild(entry);
});
}

function removeFromCart(index) {
cartItems.splice(index, 1);
renderCart();
}