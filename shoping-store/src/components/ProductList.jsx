import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductListContainer, ProductCard, ProductImage, ProductInfo, ProductTitle, ProductDescription, ProductPrice, DetailsLink } from '../styles/productlist';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.productId}>
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
};

export default ProductList;