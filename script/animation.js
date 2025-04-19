window.addEventListener("resize", navDisplay);

var navLinkBox = document.getElementById("NAVLINKBOX");

function openNav() {
    if (navLinkBox.style.display === "flex") {
        navLinkBox.style.display = "none";
    } else {
        navLinkBox.style.display = "flex";
    }
}

function navDisplay() {
    var w = window.innerWidth;
    if(w >= 600) {
        navLinkBox.style.display = "flex";
    } else if (w < 600) {
        navLinkBox.style.display = "none";
    }
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}