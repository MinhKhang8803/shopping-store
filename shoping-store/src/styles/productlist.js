// ../styles/productlist.js
import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  margin-top: 8px;
`;

export const ProductTitle = styled.h3`
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  margin-bottom: 8px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const DetailsLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin-top: 8px;
  display: block;
`;
