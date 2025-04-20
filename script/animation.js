window.addEventListener("resize", navDisplay);

function openNav() {
  const navLinkBox = document.getElementById("NAVLINKBOX");
  if (!navLinkBox) return;

  navLinkBox.style.display =
    navLinkBox.style.display === "flex" ? "none" : "flex";
}

function navDisplay() {
  const navLinkBox = document.getElementById("NAVLINKBOX");
  if (!navLinkBox) return;

  var w = window.innerWidth;
  if (w >= 600) {
    navLinkBox.style.display = "flex";
  } else {
    navLinkBox.style.display = "none";
  }
}

function navDisplay() {
  var w = window.innerWidth;
  if (w >= 600) {
    navLinkBox.style.display = "flex";
  } else if (w < 600) {
    navLinkBox.style.display = "none";
  }
}

function openCart() {
  renderCart(); // 👉 jedes Mal neu rendern
  document.getElementById("cartSidebar").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "auto";
}
