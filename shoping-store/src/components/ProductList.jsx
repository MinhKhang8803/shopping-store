// ProductList.jsx

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchProductsRequest } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/';
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

const ProductList = ({ dispatch, loadingRedux, productsRedux, errorRedux }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Assuming your friend's code is the source of truth for fetching products
    setLoading(true);
    axios.get('http://localhost:4000/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });

    // Dispatch the action to fetch products using Redux (your original code)
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const renderProductList = () => (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.productId} onClick={() => handleProductClick(product)}>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductInfo>
            <ProductTitle>{product.productName}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
            <DetailsLink to={`/product/${product.id}`}>Details</DetailsLink>
            {/* <AddToCartButton onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </AddToCartButton> */}
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductListContainer>
  );

  const renderFullProductInfo = () => {
    if (selectedProduct) {
      return (
        <div style={{ maxWidth: '500px' }}>
          <h2>{selectedProduct.productName}</h2>
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
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ width: '70%' }}>
        {selectedProduct ? (
          renderFullProductInfo()
        ) : (
          <img src="defaultImageUrl" alt="Default" style={{ width: '100%' }} />
        )}
      </div>
      <div style={{ width: '30%' }}>
        {loadingRedux ? <div>Loading...</div> : null}
        {errorRedux ? <div>Error: {errorRedux}</div> : null}
        {renderProductList()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsRedux: state.product.products,
  loadingRedux: state.product.loading,
  errorRedux: state.product.error,
});

export default connect(mapStateToProps)(ProductList);
