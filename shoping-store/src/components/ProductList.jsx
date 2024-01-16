import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductsRequest } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { ProductListContainer, ProductCard, ProductImage, ProductInfo, ProductTitle, ProductDescription, ProductPrice, AddToCartButton } from '../styles/productlist';

const ProductList = ({ dispatch, loading, products, error }) => {
    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <ProductListContainer>
            {products.map((product) => (
                <ProductCard key={product.id}>
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
};

const mapStateToProps = (state) => ({
    products: state.product.products,
    loading: state.product.loading,
    error: state.product.error,
});

export default connect(mapStateToProps)(ProductList);