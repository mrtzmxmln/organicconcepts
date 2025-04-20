let cartItems = [];

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("cartItems");
  if (saved) {
    cartItems = JSON.parse(saved);
    renderCart();
  }

  renderCart();
});



function addToCart(name, brand = '', image = '') {
    const exists = cartItems.find(item => item.name === name);
  
    if (!exists) {
        cartItems.push({ name, brand, image });
        saveCart();
        renderCart();
      } else {
        alert(`${name} ist bereits im Warenkorb.`);
      }
  
    openCart(); // Cart trotzdem öffnen, auch wenn’s schon drin ist
}

function renderCart() {
  const content = document.querySelector(".cart-content");
  if (!content) return;

  content.innerHTML = "";

  if (cartItems.length === 0) {
    content.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
    return;
  }

  cartItems.forEach((item, index) => {
    const entry = document.createElement("div");
    entry.className = "cart-item";
    entry.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong>${item.name}</strong><br>
          <small>${item.brand}</small>
        </div>
        <button onclick="removeFromCart(${index})">✕</button>
      </div>
    `;
    content.appendChild(entry);
  });
}

function removeFromCart(index) {
cartItems.splice(index, 1);
saveCart();
renderCart();
}

function showRequestForm() {
  const form = document.getElementById('requestForm');
  form.style.display = 'flex'; // oder "block"
}

function submitRequest(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    vorname: form.vorname.value,
    nachname: form.nachname.value,
    email: form.email.value,
    telefon: form.telefon.value,
    produkte: cartItems.map(item => item.name)
  };

  const webhookUrl = "https://hook.eu2.make.com/ip8pq7pw49npcbaqp99nyi3cxtpr2aw1";

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (res.ok) {
      alert(`Vielen Dank, ${data.vorname}! Deine Anfrage wurde gesendet.`);
      form.reset();
      cartItems.length = 0;
      saveCart();
      renderCart();
      form.style.display = "none";
    } else {
      alert("Fehler beim Senden der Anfrage. Bitte versuche es erneut.");
    }
  })
  .catch(err => {
    console.error("Webhook Fehler:", err);
    alert("Netzwerkfehler – Anfrage konnte nicht gesendet werden.");
  });
}

function saveCart() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}