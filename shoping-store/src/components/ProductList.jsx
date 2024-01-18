import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import {
  ProductListContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
  DetailsLink,
} from "../styles/productlist";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        error(error.message);
        setLoading(false);
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleDetailsLinkClick = () => {
    setSelectedProduct(null);
  };

  const renderProductList = () => (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          onClick={() => handleProductClick(product)}
        >
          <ProductImage src={product.imageUrl} alt={product.productName} />
          <ProductInfo>
            <ProductTitle>{product.productName}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
            <DetailsLink
              to={`/product/${product.id || product.productId}`}
              onClick={handleDetailsLinkClick}
            >
              Details
            </DetailsLink>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductListContainer>
  );

  const renderFullProductInfo = () => {
    if (selectedProduct) {
      return (
        <div
          style={{
            maxWidth: "500px",
            position: "fixed",
            top: "50px",
            left: "300px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "16px",
          }}
        >
          {/* Added padding to the inner content */}

          <ProductImage
            src={selectedProduct.imageUrl}
            alt={selectedProduct.name}
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
          <h2>{selectedProduct.name || selectedProduct.productName}</h2>
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
          <AddToCartButton onClick={() => addToCart(selectedProduct, quantity)}>
            Add to Cart
          </AddToCartButton>
          <div style={{ width: "30%" }}>
            {selectedProduct ? (
              <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  min={1}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value, 10)))
                  }
                />
              </div>
            ) : null}
          </div>
        </div>
      );
    }

    return <div>Please select a product</div>;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div style={{ width: "70%" }}>
        {selectedProduct ? (
          renderFullProductInfo()
        ) : (
          <img src="defaultImageUrl" alt="Default" style={{ width: "100%" }} />
        )}
      </div>
      <div style={{ width: "30%" }}>{renderProductList()}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
});

export default connect(null, mapDispatchToProps)(ProductList);
