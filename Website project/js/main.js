document.addEventListener( "DOMContentLoaded" , function () {
    const cartKey = "cart";
    function getCart() {
    const savedCart = localStorage.getItem(cartKey);
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
 
}

function saveCart(cart) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }
function addProductToCart() {
    const addButton = document.querySelector( ".add cart a" );
    if (!addButton) return;
    addButton.addEventListener("click", function (event) {
        event.preventDefault();

        const productName = document.querySelector(".product-text h1").textContent.trim();
        const productPrice = parseInt(document.querySelector(".product-text h2").textContent);
        const ProductImage = document.querySelector(".valentino-pink img").getAttribute("scr");

        let cart = getCart();
        const exsistingProduct = cart.find(function (item){
            return item.name === productName;
        });
        if (exsistingProduct) {
            exsistingProduct.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                Image: ProductImage,
                quantity: 1
            } );
        }
        saveCart(cart);
        window.location.href = "cart.html";
    });
  }
}
)