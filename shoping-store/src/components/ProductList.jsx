// ProductList.jsx

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProductsRequest } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import {
  ProductListContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton
} from '../styles/productlist';

const ProductList = ({ dispatch, loading, products, error }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const renderProductList = () => (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.productId} onClick={() => handleProductClick(product)}>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductInfo>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
            <AddToCartButton onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </AddToCartButton>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductListContainer>
  );

  const renderFullProductInfo = () => {
    if (selectedProduct) {
      return (
        <div style={{ maxWidth: '500px' }}> {/* Set a maximum width for the detailed product information */}
          <h2>{selectedProduct.name}</h2>
          <ProductImage
            src={selectedProduct.imageUrl}
            alt={selectedProduct.name}
            style={{ maxWidth: '100%', maxHeight: '400px' }} // Adjust the max width and height as needed
          />
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
          {/* Add more details if needed test */}
        </div>
      );
    }

    return <div>Please select a product</div>;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
  error: state.product.error,
});

export default connect(mapStateToProps)(ProductList);

