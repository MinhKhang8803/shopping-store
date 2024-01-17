// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Cart from "./components/cart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;