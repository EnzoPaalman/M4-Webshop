const addToCartButton = document.getElementById("addToCartButton");
const cartValue = document.querySelector(".shoppingCart__message");
const modal = document.getElementById("js--shoppingModal");
let modalOpen = false;
let cart = 0;

addToCartButton.addEventListener("click", function () {
    cart += 1;
    cartValue.textContent = cart;

    addToCartButton.onclick = function () {
        if (modalOpen === false) {
          modal.style.display = "flex";
          modalOpen = true;
          setTimeout(function () {
            modal.style.display = "none";
            modalOpen = false;
          }, 2000);
        }
      };
      
});

