// document.addEventListener( "DOMContentLoaded" , function () {
//     const cartKey = "cart";
//     function getCart() {
//     const savedCart = localStorage.getItem(cartKey);
//     if (savedCart) {
//       return JSON.parse(savedCart);
//     } else {
//       return [];
//     }
 
// }

// function saveCart(cart) {
//     localStorage.setItem(cartKey, JSON.stringify(cart));
//   }
// function addProductToCart() {
//     const addButton = document.querySelector( ".add cart a" );
//     if (!addButton) return;
//     addButton.addEventListener("click", function (event) {
//         event.preventDefault();

//         const productName = document.querySelector(".product-text h1").textContent.trim();
//         const productPrice = parseInt(document.querySelector(".product-text h2").textContent);
//         const ProductImage = document.querySelector(".valentino-pink img").getAttribute("scr");

//         let cart = getCart();
//         const exsistingProduct = cart.find(function (item){
//             return item.name === productName;
//         });
//         if (exsistingProduct) {
//             exsistingProduct.quantity += 1;
//         } else {
//             cart.push({
//                 name: productName,
//                 price: productPrice,
//                 Image: ProductImage,
//                 quantity: 1
//             } );
//         }
//         saveCart(cart);
//         window.location.href = "cart.html";
//     });
//   }

//   function showCart() {
//     const main = document.querySelector("main");
//     if (!main) return;
//     let cart = getCart();
//     if (cart.length === 0) { `
//         main.innerHTML =
//         <section class="empty-cart">
//             <h1>Your cart is empty</h1> 
//             <a class="continue-shopping" href="products.html">Continue shopping</a>
//         </section>
// `;
// return;
//     }

//     let cartHTML = `<section class="cart-container">`
//     cartHTML += `<h1 class="cart-title">Shopping cart</h1>`

//     let totalPrice = 0;

//     cart.forEach(function (item, index){
//         totalPrice += item.price * item.quantity;

//         cartHTML += `
//           <article class="cart-item">
//             <img src="${item.image}" alt="${item.name}"></img>
//             <div class="cart-item-info">
//               <h2>${item.name}</h2>
//               <p>Price: ${item.price} kr</p>
//               <p>Quantity: ${item.quantity}</p>
//               <p>Total: ${item.price * item.quantity} kr</p>

//               <div class="cart-controls">
//                 <button class="cart-btn minus-btn" data-index="${index}">-</button>
//                 <button class="cart-btn plus-btn" data-index="${index}">+</button>
//               </div>
//             </div>
//           </article>
//         `;
//     });

//  cartHTML += `
//         <div class="cart-summary">
//           <h2>Total price: ${totalPrice} kr</h2>
//           <a class="continue-shopping" href="products.html">Continue shopping</a>
//         </div>
//       </section>
//     `;

//     main.innerHTML = cartHTML;

//     const plusButtons = document.querySelectorAll(".plus-btn");
//     const minusButtons = document.querySelectorAll("minus-btn"); 

//     plusButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
// const index = button.dataset.index;
// let cart = getCart();
// cart[index].quantity += 1;
// saveCart(cart);
// showCart();
//         });
//     });

//     minusButtons.forEach(function (button) {
//         button.addEventListener("click", function() {
//             const index = button.dataset.index;
//             let cart = getCart();

//             cart[index].quantity -= 1;

//             if (cart[index].quantity <= 0) {
//                 cart.splice(index, 1);
//             }

//             saveCart(cart);
//             showCart();
//         });
//     });
//   }

//   if (window.location.pathname.includes("product.html")) {

//   }

// if (window.location.pathname.includes("cart.html")) {

// }

// });

document.addEventListener("DOMContentLoaded", function () {
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
    const addButton = document.querySelector(".add-cart a");
    if (!addButton) return;

    addButton.addEventListener("click", function (event) {
      event.preventDefault();

      const productName = document
        .querySelector(".product-text h1")
        .textContent.trim();
      const productPrice = parseInt(
        document.querySelector(".product-text h2").textContent,
      );
      const productImage = document
        .querySelector(".valentino-pink img")
        .getAttribute("src");

      let cart = getCart();

      const existingProduct = cart.find(function (item) {
        return item.name === productName;
      });

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({
          name: productName,
          price: productPrice,
          image: productImage,
          quantity: 1,
        });
      }

      saveCart(cart);
      window.location.href = "cart.html";
    });
  }

  function showCart() {
    const main = document.querySelector("main");
    if (!main) return;

    let cart = getCart();

    if (cart.length === 0) {
      main.innerHTML = `
        <section class="empty-cart">
          <h1>Your cart is empty</h1>
          <a class="continue-shopping" href="products.html">Continue shopping</a>
        </section>
      `;
      return;
    }

    let cartHTML = `<section class="cart-container">`;
    cartHTML += `<h1 class="cart-title">Shopping cart</h1>`;

    let totalPrice = 0;

    cart.forEach(function (item, index) {
      totalPrice += item.price * item.quantity;

      cartHTML += `
        <article class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <h2>${item.name}</h2>
            <p>Price: ${item.price} kr</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: ${item.price * item.quantity} kr</p>

            <div class="cart-controls">
              <button class="cart-btn minus-btn" data-index="${index}">-</button>
              <button class="cart-btn plus-btn" data-index="${index}">+</button>
            </div>
          </div>
        </article>
      `;
    });

    cartHTML += `
      <div class="cart-summary">
        <h2>Total price: ${totalPrice} kr</h2>
        <a class="continue-shopping" href="products.html">Continue shopping</a>
      </div>
    </section>
    `;

    main.innerHTML = cartHTML;

    const plusButtons = document.querySelectorAll(".plus-btn");
    const minusButtons = document.querySelectorAll(".minus-btn");

    plusButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const index = button.dataset.index;
        let cart = getCart();
        cart[index].quantity += 1;
        saveCart(cart);
        showCart();
      });
    });

    minusButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const index = button.dataset.index;
        let cart = getCart();

        cart[index].quantity -= 1;

        if (cart[index].quantity <= 0) {
          cart.splice(index, 1);
        }

        saveCart(cart);
        showCart();
      });
    });
  }

  if (window.location.pathname.includes("product.html")) {
    addProductToCart();
  }

  if (window.location.pathname.includes("cart.html")) {
    showCart();
  }
});