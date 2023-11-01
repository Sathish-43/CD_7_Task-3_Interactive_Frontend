import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    const updatedTotalPrice = totalPrice + product.price;
    setCartItems(updatedCart);
    setTotalPrice(updatedTotalPrice);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  return (
    <div className="App">
      {/* HEADER */}
      <header>
        {/* NAV */}
        <div className="nav container">
          <a href="#" className="logo">
            <span>E</span>Commerce
          </a>
          {/* CART ICON */}
          <i
            className="bx bx-shopping-bag"
            id="cart-icon"
            onClick={() => setCartVisible(true)}
          ></i>

          {/* CART */}
          {cartVisible && (
            <div className="cart">
              <h2 className="cart-title">Your Cart</h2>

              {/* CONTENT */}
              <div className="cart-content">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    {item.title} - ₹{item.price}
                  </div>
                ))}
              </div>

              {/* TOTAL */}
              <div className="total">
                <div className="total-title">Total</div>
                <div className="total-price">₹{totalPrice}</div>
              </div>
              {/* BUY BUTTON */}
              <button type="button" className="btn-buy">
                Buy Now
              </button>
              {/* CART CLOSE */}
              <i className="bx bx-x" id="cart-close" onClick={closeCart}></i>
            </div>
          )}
        </div>
      </header>

      {/* SHOP SECTION */}
      <section className="shop container">
        <h2 className="section-title">Shop Products</h2>

        {/* CONTENT */}
        <div className="shop-content">
          {/* BOX 1 */}
          <div className="product-box">
            <img
              src="assets/img/product1.jpg"
              alt=""
              className="product-img"
            />
            <h2 className="product-title">Nike Shoes</h2>
            <span className="product-price">₹499</span>
            <i
              className="bx bx-shopping-bag add-cart"
              onClick={() => addToCart({ title: 'Nike Shoes', price: 499 })}
            >
              BUY
            </i>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
