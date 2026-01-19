document.addEventListener("DOMContentLoaded", () => {
  const checkoutItemsEl = document.getElementById("checkout-items");
  const checkoutTotalEl = document.getElementById("checkout-total");
  const placeOrderBtn = document.getElementById("place-order-btn");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    checkoutItemsEl.innerHTML = "<p>Your cart is empty.</p>";
    placeOrderBtn.disabled = true;
    return;
  }

  let total = 0;
  checkoutItemsEl.innerHTML = "";

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "checkout-item";
    div.innerHTML = `
      <img src="${item.image}">
      <span>${item.name} ${item.size ? "(" + item.size + ")" : ""}</span>
      <span>${item.quantity} × $${item.price.toFixed(2)}</span>
      <strong>$${itemTotal.toFixed(2)}</strong>
    `;
    checkoutItemsEl.appendChild(div);
  });

  checkoutTotalEl.textContent = `Total: $${total.toFixed(2)}`;

  placeOrderBtn.addEventListener("click", () => {
    alert("🎉 Order placed successfully!\nThank you for shopping with LuxuryLife.");

    // Clear cart
    localStorage.removeItem("cart");

    // Redirect
    window.location.href = "index.html";
  });
});
