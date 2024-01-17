import React, { useState } from "react";
import { connect } from 'react-redux';
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { removeFromCart, updateCartItem } from '../redux/actions/cartActions';
import * as s from "../styles/cart";

const Cart = ({ cart, dispatch }) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setDeleteConfirmation(productId);
    } else {
      dispatch(updateCartItem(productId, newQuantity));
    }
  };

  const handleDelete = (productId) => {
    dispatch(removeFromCart(productId));
    setDeleteConfirmation(null);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handleCheckout = () => {
    alert("Checkout logic goes here!");
  };

  return (
    <s.Container>
      <s.Title>
        <h2>My Shopping Cart</h2>
      </s.Title>
      {cart.length === 0 ? (
        <p>You have no products in the cart.</p>
      ) : (
        <>
          <s.InnerContainer>
            <s.CartContainer>
              {cart.map((product) => (
                <s.ProductContainer key={product.productId}>
                  <s.ProductDetailContainer>
                    <s.ProductInfo>
                      <s.ProductImage src={product.imageUrl} alt={product.ProductName} />
                      <s.ProductDetailCover>
                        <s.ProductDetails>
                          <s.ProductName>{product.ProductName}</s.ProductName>
                          <s.ProductDescription>
                            {product.description}
                          </s.ProductDescription>
                        </s.ProductDetails>
                        <s.QuantityDiv>
                          <s.QuantityButtonCover>
                            <s.QuantityButton
                              onClick={() =>
                                handleQuantityChange(
                                  product.id,
                                  product.quantity - 1
                                )
                              }
                            >
                              <FiMinus />
                            </s.QuantityButton>
                            <span>{product.quantity}</span>
                            <s.QuantityButton
                              onClick={() =>
                                handleQuantityChange(
                                  product.id,
                                  product.quantity + 1
                                )
                              }
                            >
                              <FiPlus />
                            </s.QuantityButton>
                          </s.QuantityButtonCover>
                          <s.ProductPrice>${product.price}</s.ProductPrice>
                        </s.QuantityDiv>
                      </s.ProductDetailCover>
                    </s.ProductInfo>
                    <s.QuantityContainer>
                      <s.DeleteButton
                        onClick={() => handleQuantityChange(product.id, 0)}
                      >
                        <FiTrash2 />
                      </s.DeleteButton>
                    </s.QuantityContainer>
                  </s.ProductDetailContainer>
                </s.ProductContainer>
              ))}
              <s.TotalContainer>
                <s.TotalText>Total:</s.TotalText>
                <span>${getTotalPrice()}</span>
              </s.TotalContainer>
              <s.CheckoutButton onClick={handleCheckout}>
                Checkout
              </s.CheckoutButton>
              {deleteConfirmation !== null && (
                <s.ConfirmationPopup>
                  <p>Do you want to delete this item?</p>
                  <button onClick={() => handleDelete(deleteConfirmation)}>
                    Yes
                  </button>
                  <button onClick={() => setDeleteConfirmation(null)}>
                    No
                  </button>
                </s.ConfirmationPopup>
              )}
            </s.CartContainer>
            <s.CheckoutContainer></s.CheckoutContainer>
          </s.InnerContainer>
        </>
      )}
    </s.Container>
  );
};

const mapStateToProps = (state) => ({
    cart: state.cart.cartItems,
  });
  
  export default connect(mapStateToProps)(Cart);