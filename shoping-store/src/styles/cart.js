import styled from 'styled-components';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

export const Container = styled.div`
  background-color: #E5E7EB;
  height: 79vh;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductContainer = styled.div`
  width: 70%;
  margin-bottom: 20px;
`;
export const InnerContainer = styled.div`
width: 80%;
display: flex;
justify-content: center;
`;
export const ProductDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  width: 140%;
  height: 25vh;
`;
export const CartContainer =styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const CheckoutContainer = styled.div`
  width: 30%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;
export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 45%;
  height: 90%;
  margin-right: 10px;
  margin-left: 10px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px; 
`;

export const ProductName = styled.span`
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  color: #555;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background-color: #adadad;
  color: #ff7300;
  border: none;
  padding: 4px;
  cursor: pointer;
  margin: 3px;
  display: flex;
`;

export const QuantityDiv = styled.div`
width:100%;
display: flex;
justify-content: space-between;
`;
export const QuantityButtonCover = styled.div`
width:30%;
display: flex;
background-color: #adadad;
border-radius: 5px;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
`;
export const ProductPrice = styled.div`
 font-size: 24px;
 text-transform: uppercase;
`;
export const ProductDetailCover = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;
export const DeleteButton = styled.button`
  background-color: #ef4444;
  color: #fff;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TotalText = styled.span`
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  background-color: #3b82f6;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;  // Set width to 100% to match CheckoutContainer
`;

export const Title = styled.div`
  width:80%;
  height:30px;
  background-color:white;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 40px;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin-top: 10px;

  h2{
    color: black;
    display:flex;
    justify-content:center;
    font-size: 20px;
    align-items:center;
    flex-wrap: wrap;
  }
`;

export const ConfirmationPopup = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export { FiTrash2, FiPlus, FiMinus };

export const OrderInfo = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const OrderInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  span {
    font-weight: bold;
  }
`;

export const ContinueShoppingButton = styled.button`
  background-color: #3b82f6;  // Adjust color as needed
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;  // Set width to 100% to match CheckoutContainer
  margin-top: 10px;  // Add margin for separation
`;