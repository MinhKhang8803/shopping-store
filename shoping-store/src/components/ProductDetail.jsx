import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getProductById} from "../services/api";
const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(data => setProduct(data));
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
