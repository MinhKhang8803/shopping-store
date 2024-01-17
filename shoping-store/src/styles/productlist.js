import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  margin-left: 74%;
`;

export const ProductCard = styled.div`
  display: flex;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  width: 260px;
`;

export const DetailsLink = styled(Link)`
  color: #0066cc;
  text-decoration: none;
  align-self: flex-end;
  margin-top: auto;
  font-size: 0.8em;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
`;


export const ProductInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 80px);
`;

export const ProductTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 5px;
`;

export const ProductDescription = styled.p`
  color: #666;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 130px;
  display: block;
`;

export const ProductPrice = styled.span`
  font-size: 1em;
  color: #333;
  font-weight: bold;
`;
