import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

// components
import NavBar from "./components/NavBar";
import ProductsPage from "./pages/ProductsPage";
import LocationPage from "./pages/LocationPage";
import SidebarCart from "./components/SidebarCart";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";
import OrderCompleted from "./pages/OrderCompleted";

function App() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  });

  useEffect(() => {
    const calculateCartTotal = () => {
      let total = 0;
      selectedProducts.forEach((product) => {
        total += product.price;
      });
      setCartTotal(total);
    };

    calculateCartTotal();
  }, [selectedProducts]);

  const addToCartTotal = (value) => {
    setCartTotal(cartTotal + value);
  };

  const addProductToCart = (id) => {
    const productToAdd = products.find((product) => product.id === id);

    if (!selectedProducts.some((product) => product.id === id)) {
      setSelectedProducts([...selectedProducts, productToAdd]);

      setCartTotal(cartTotal + productToAdd.price);
    }
  };

  const removeProductToCart = (id) => {
    const newSelectedProducts = selectedProducts.filter(
      (product) => product.id !== id
    );

    setSelectedProducts(newSelectedProducts);
  };

  return (
    <Router>
      <div>
        <NavBar setShowCart={setShowCart} selectedProducts={selectedProducts} />

        <SidebarCart
          addToCartTotal={addToCartTotal}
          addProductToCart={addProductToCart}
          removeProductToCart={removeProductToCart}
          cartTotal={cartTotal}
          selectedProducts={selectedProducts}
          setShowCart={setShowCart}
          showCart={showCart}
        />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/products"
              element={
                <ProductsPage
                  addToCartTotal={addToCartTotal}
                  removeProductToCart={removeProductToCart}
                  selectedProducts={selectedProducts}
                  addProductToCart={addProductToCart}
                  products={products}
                  setShowCart={setShowCart}
                  showCart={showCart}
                  cartTotal={cartTotal}
                />
              }
            />

            <Route
              path="/cart/checkout"
              element={<CheckoutPage cartTotal={cartTotal} />}
            />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/location" element={<LocationPage />} />

            <Route path="/completed" element={<OrderCompleted />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
