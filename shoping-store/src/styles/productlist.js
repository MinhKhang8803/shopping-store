// /src/Style/productlist.js
import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  max-width: 20%; // Adjust this to your desired width
  margin-left: auto; // This will push the container to the right side of the parent container
`;

export const ProductCard = styled.div`
width: 100%; // The cards will take up 100% of the width of the ProductListContainer
  margin-bottom: 20px; // Adds space between the cards
  max-width: 500px; /* Set a max-width for the cards */
  margin: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const ProductInfo = styled.div`
  padding: 15px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.1em;
  color: #333;
  margin: 0 0 10px;
`;

export const ProductDescription = styled.p`
  font-size: 0.9em;
  color: #666;
`;

export const ProductPrice = styled.p`
  font-size: 1em;
  color: #333;
  font-weight: bold;
`;

export const AddToCartButton = styled.button`
  background-color: #5ea1d7;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  font-size: 1em;

  &:hover {
    background-color: #4b8ab9;
}
`;
