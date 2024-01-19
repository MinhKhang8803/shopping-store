import styled from "styled-components";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

export const Container = styled.div`
  background-color: #e5e7eb;
  height: 79vh;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  margin-top: 10vh;
  font-size: 20px;
  font-weight: 700;
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
export const CartContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const CheckoutContainer = styled.div`
  width: 40%;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const InputAsSpan = styled.input`
  border: none;
  outline: none;
  padding: 0;
  font-size: 1em;
  color: #333;
  width: 70px; /* Adjust the width as needed */
  text-align: center;
  background: transparent;
  appearance: textfield;
  -moz-appearance: textfield;
`;
export const QuantityButtonCover = styled.div`
  width: 30%;
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-radius: 5px;
  margin-bottom: 10px;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#3b82f6" : "#2563eb")};
  }
`;

export const Title = styled.div`
  width: 80%;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin-top: 10px;

  h2 {
    color: black;
    display: flex;
    justify-content: center;
    font-size: 20px;
    align-items: center;
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
  padding: 15px;
  border: 1px solid #ccc;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const OrderInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  span {
    font-size: 18px;
    font-weight: 300;
  }

  p {
    font-size: 30px;
    font-weight: Bold;
    margin-top: 5px;
    margin-bottom: 0px;
  }

  h5 {
    margin-top: 0px;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ContinueShoppingButton = styled.button`
  background-color: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #3b82f6;
    color: #fff;
  }
`;

export const CheckoutCompleteMessage = styled.p`
  color: green; 
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
`;

