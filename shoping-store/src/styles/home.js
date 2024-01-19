import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Chọn chiều cao theo ý muốn */
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    /* Điều chỉnh kích thước cho màn hình lớn hơn 768px nếu cần */
    width: 700px;
    height: 600px;
  }
`;
