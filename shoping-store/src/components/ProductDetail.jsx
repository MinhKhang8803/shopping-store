// ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';

// Import Bootstrap CSS (add this line to your main index.js or App.js file)
// import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product details based on the ID from the backend
        getProductById(id).then((data) => setProduct(data));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="font-weight-bold">Price: ${product.price}</p>
                    {/* Add more details as needed */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
