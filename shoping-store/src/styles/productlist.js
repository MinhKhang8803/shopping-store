import styled from 'styled-components';

const mobileMaxWidth = '768px';

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: ${mobileMaxWidth}) {
    justify-content: center;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  width: 360px;
  @media (max-width: 768px) {
    /* Mobile specific styles */
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const ProductImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 8px;
  @media (max-width: 768px) {
    /* Mobile specific styles */
    width: auto;
    max-width: 100%;
    max-height: 200px;
    margin-bottom: 0px;
  }
`;

export const ProductInfo = styled.div`
  margin-top: 8px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductTitle = styled.h3`
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const ProductDescription = styled.p`
  color: #666;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 170px;
  display: block;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
`;

export const DetailsLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin-top: 8px;
  display: block;
`;
