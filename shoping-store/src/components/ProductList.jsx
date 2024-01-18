// ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions'; 

import {
  ProductListContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
  DetailsLink
} from '../styles/productlist';


const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    loading(true);
    axios.get('http://localhost:4000/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
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
        <ProductCard key={product.productId} onClick={() => handleProductClick(product)}>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductInfo>
            <ProductTitle>{product.name || product.productName}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <AddToCartButton onClick={() => addToCart(product)}>Add to Cart</AddToCartButton>
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
        <div style={{ maxWidth: '500px', marginLeft: '20px' }}>
          <h2>{selectedProduct.name || selectedProduct.productName}</h2>
          <ProductImage
            src={selectedProduct.imageUrl}
            alt={selectedProduct.name}
            style={{ maxWidth: '100%', maxHeight: '400px' }}
          />
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
        </div>
      );
    }

    return <div>Please select a product</div>;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ width: '70%' }}>
        {selectedProduct ? (
          renderFullProductInfo()
        ) : (
          <img src="defaultImageUrl" alt="Default" style={{ width: '100%' }} />
        )}
      </div>
      <div style={{ width: '30%' }}>
        {renderProductList()}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(null, mapDispatchToProps)(ProductList);
