// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Cart from "./components/cart";
import ProductList from "./components/ProductList";
// import Checkout from "./components/Checkout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          {/* <ProductList /> */}
          <Cart />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
