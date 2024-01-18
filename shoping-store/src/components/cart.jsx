import React, { useState } from "react";
import { connect } from "react-redux";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { removeFromCart, updateCartItem } from "../redux/actions/cartActions";
import * as s from "../styles/cart";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, dispatch }) => {
  const navigate = useNavigate();
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setDeleteConfirmation(productId);
    } else {
      dispatch(updateCartItem(productId, newQuantity));
    }
  };

  const handleQuantityInputChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity)) {
      dispatch(updateCartItem(productId, newQuantity));
    }
  };

  const handleDelete = (productId) => {
    dispatch(removeFromCart(productId));
    setDeleteConfirmation(null);
  };

  const getTotalPrice = () => {
    const total = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    return parseFloat(total.toFixed(2));
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });
  
      if (response.ok) {
        // If the server returns a successful result, remove each item from the cart
        cart.forEach((product) => {
          dispatch(removeFromCart(product.productId));
        });
  
        setDeleteConfirmation(null);
        setCheckoutComplete(true);
  
        // Redirect the user to the Products page
        navigate("/products");
        
        console.log("Checkout Complete!"); // Add this line for debugging
      } else {
        // Handle errors or display a message to the user
        console.error("Checkout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <s.Container>
      <s.Title>
        <h2>My Shopping Cart</h2>
      </s.Title>
      <s.InnerContainer>
        <s.CartContainer>
          {cart.length === 0 ? (
            <s.EmptyCartMessage>
              You have no products in cart.
            </s.EmptyCartMessage>
          ) : (
            cart.map((product) => (
              <s.ProductContainer key={product.productId}>
                <s.ProductDetailContainer>
                  <s.ProductInfo>
                    <s.ProductImage
                      src={product.imageUrl}
                      alt={product.productName}
                    />
                    <s.ProductDetailCover>
                      <s.ProductDetails>
                        <s.ProductName>{product.productName}</s.ProductName>
                        <s.ProductDescription>
                          {product.description}
                        </s.ProductDescription>
                      </s.ProductDetails>
                      <s.QuantityDiv>
                        <s.QuantityButtonCover>
                          <s.QuantityButton
                            onClick={() =>
                              handleQuantityChange(
                                product.productId,
                                product.quantity - 1
                              )
                            }
                          >
                            <FiMinus />
                          </s.QuantityButton>
                          <s.InputAsSpan
                            type="number"
                            value={product.quantity}
                            onChange={(e) =>
                              handleQuantityInputChange(product.productId, e)
                            }
                          />
                          <s.QuantityButton
                            onClick={() =>
                              handleQuantityChange(
                                product.productId,
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
                      onClick={() => handleQuantityChange(product.productId, 0)}
                    >
                      <FiTrash2 />
                    </s.DeleteButton>
                  </s.QuantityContainer>
                </s.ProductDetailContainer>
              </s.ProductContainer>
            ))
          )}

          {deleteConfirmation !== null && (
            <s.ConfirmationPopup>
              <p>Do you want to delete this item?</p>
              <button onClick={() => handleDelete(deleteConfirmation)}>
                Yes
              </button>
              <button onClick={() => setDeleteConfirmation(null)}>No</button>
            </s.ConfirmationPopup>
          )}
        </s.CartContainer>
        <s.CheckoutContainer>
          {checkoutComplete ? (
            <s.CheckoutCompleteMessage>
              Checkout Complete! Thank you for your purchase.
            </s.CheckoutCompleteMessage>
          ) : (
            <>
              <s.OrderInfo>
                <s.OrderInfoItem>
                  <h5>Order Info</h5>
                </s.OrderInfoItem>
                <s.OrderInfoItem>
                  <span>Subtotal:</span>
                  <span>${getTotalPrice()}</span>
                </s.OrderInfoItem>
                <s.OrderInfoItem>
                  <span>Shipping Cost:</span>
                  <span>$10</span>
                </s.OrderInfoItem>
                <s.OrderInfoItem>
                  <p>Total:</p>
                  <p>${getTotalPrice() + 10}</p>
                </s.OrderInfoItem>
              </s.OrderInfo>
              <s.CheckoutButton
                onClick={handleCheckout}
                disabled={cart.length === 0}
              >
                Checkout
              </s.CheckoutButton>
              <s.ContinueShoppingButton onClick={() => navigate("/products")}>
                Continue Shopping
              </s.ContinueShoppingButton>
            </>
          )}
        </s.CheckoutContainer>
      </s.InnerContainer>
    </s.Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
});

export default connect(mapStateToProps)(Cart);
