// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Header from "./components/Header";
//import Cart from "./components/Cart"
import ProductList from "./components/ProductList";
// import Checkout from "./components/Checkout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <ProductList />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
