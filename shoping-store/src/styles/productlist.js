import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
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
  cursor: pointer;
`;

export const ProductImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  margin-top: 8px;
`;

export const ProductTitle = styled.h3`
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  color: #666;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 170px;
  display: block;
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
  margin-top: 8px; /* Adjust margin as needed */
`;

export const DetailsLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin-top: 8px;
  display: block;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 8px;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      cursor: pointer;
      margin: 0 4px;
    }

    input {
      width: 40px;
      text-align: center;
    }
  }
`;
