window.addEventListener("resize", navDisplay);

function navDisplay() {
  const navDesktop = document.getElementById("NAVLINKBOX-DESKTOP");
  const navMobile = document.getElementById("NAVLINKBOX-MOBILE");

  var w = window.innerWidth;
  if (w >= 600) {
    navMobile.style.display = "none";
    navDesktop.style.display = "flex";
  } else {
    navDesktop.style.display = "none";
  }
}

function openNav() {
  const navLinkBox = document.getElementById("NAVLINKBOX-MOBILE");
  if (!navLinkBox) return;

  navLinkBox.style.display =
    navLinkBox.style.display === "flex" ? "none" : "flex";
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
