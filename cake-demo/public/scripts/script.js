var searchBtn = document.querySelector(".search-icon");
var searchForm = document.querySelector(".search-form");
var cartBtn = document.querySelector(".cart-icon");
var cartItems = document.querySelector(".cart-items-container");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("view-search")
    if (!cartItems.classList.contains("view-cart")) {
        cartItems.classList.add("view-cart")
    }
})


cartBtn.addEventListener("click", () => {
    cartItems.classList.toggle("view-cart")
    if (!searchForm.classList.contains("view-search")) {
        searchForm.classList.add("view-search")
    }
})
// -----------------------------------------------------
var loader = document.querySelector(".preLoader")
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
})