// ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ProductListContainer, ProductCard, ProductImage, ProductInfo, ProductTitle, ProductDescription, ProductPrice, AddToCartButton, DetailsLink } from '../styles/productlist';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
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
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleDetailsLinkClick = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    const existingProductIndex = products.findIndex(
      (item) => item.productId === product.productId
    );

    if (existingProductIndex !== -1) {
      addToCart({ ...product, quantity: products[existingProductIndex].quantity + 1 });
      toast.success('Product quantity updated successfully!');
    } else {
      addToCart({ ...product, quantity: 1 });
      toast.success('Product added to cart successfully!');
    }
  };

  const renderProductList = () => (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.productId} onClick={() => handleProductClick(product)}>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductInfo>
            <ProductTitle>{product.name || product.productName}</ProductTitle>
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
        <div style={{ maxWidth: '500px', position: 'fixed', top: '50px', left: '300px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '16px' }}>
          <ProductImage
            src={selectedProduct.imageUrl}
            alt={selectedProduct.name}
            style={{ maxWidth: '100%', maxHeight: '400px' }}
          />
          <h2>{selectedProduct.name || selectedProduct.productName}</h2>
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
          <AddToCartButton onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</AddToCartButton>
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
